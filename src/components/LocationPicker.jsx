import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents, } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

/* =========================
   Fix Leaflet marker icons
========================= */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* =========================
   Move map on position change
========================= */
function MoveMap({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 14, { animate: true });
  }, [position, map]);

  return null;
}

/* =========================
   Map click handler
========================= */
function MapClick({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
}

/* =========================
   MAIN COMPONENT
========================= */
export default function LocationPicker({ onLocationSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [position, setPosition] = useState({
    lat: 17.385044,
    lng: 78.486671,
  });

  const [selectedName, setSelectedName] = useState("Selected Location");
  const [loadingLocation, setLoadingLocation] = useState(true);

  /* =========================
     Reverse Geocoding
  ========================= */
  const fetchPlaceName = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      const name = data.display_name || "Selected Location";

      setSelectedName(name);
      onLocationSelect?.({ name, lat, lng });
    } catch {
      setSelectedName("Selected Location");
    }
  };

  /* =========================
     Get Current Location
  ========================= */
  useEffect(() => {
    if (!navigator.geolocation) {
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setPosition({ lat, lng });
        fetchPlaceName(lat, lng);
        setLoadingLocation(false);
      },
      () => setLoadingLocation(false),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  /* =========================
     Search suggestions
  ========================= */
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=8`
      );
      const data = await res.json();
      setSuggestions(data || []);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  /* =========================
     Select search result
  ========================= */
  const handleSelect = (item) => {
    const lat = parseFloat(item.lat);
    const lng = parseFloat(item.lon);

    setQuery(item.display_name);
    setSelectedName(item.display_name);
    setPosition({ lat, lng });
    setSuggestions([]);
    setActiveIndex(-1);

    onLocationSelect?.({
      name: item.display_name,
      lat,
      lng,
    });
  };

  /* =========================
     Keyboard navigation
  ========================= */
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown")
      setActiveIndex((p) => Math.min(p + 1, suggestions.length - 1));

    if (e.key === "ArrowUp")
      setActiveIndex((p) => Math.max(p - 1, 0));

    if (e.key === "Enter") {
      e.preventDefault();
      handleSelect(suggestions[activeIndex] || suggestions[0]);
    }
  };

  return (
    <div className="bg-[#f9fafb] p-6">
      {/* SEARCH */}
      <div className="">
        <div className="">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search city, area, landmark..."
            className="w-full border-gray-300"
          />

          {suggestions.length > 0 && (
            <ul className="">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className={`px-4 py-2 text-sm cursor-pointer ${idx === activeIndex
                    ? "bg-blue-100"
                    : "hover:bg-blue-50"
                    }`}
                >
                  {item.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* MAP */}
        <div className="bg-white shadow max-w-96 ">
          {loadingLocation ? (
            <div className="h-[420px] flex items-center justify-center">
              Detecting location...
            </div>
          ) : (
            <MapContainer center={position} zoom={13} className="h-[420px]">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MoveMap position={position} />
              <MapClick
                onSelect={(latlng) => {
                  setPosition(latlng);
                  fetchPlaceName(latlng.lat, latlng.lng);
                }}
              />
              <Marker position={position}>
                <Popup>
                  <div className="text-sm">
                    <b>Selected Place</b>
                    <div>{selectedName}</div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>

        {/* LAT LNG */}
        <div className="bg-gray-50 p-4 rounded-xl flex gap-6 text-sm">
          <div>
            <p className="text-gray-500">Latitude</p>
            <p className="font-semibold">{position.lat}</p>
          </div>
          <div>
            <p className="text-gray-500">Longitude</p>
            <p className="font-semibold">{position.lng}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
