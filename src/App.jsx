import { AboutUs } from "./components/AboutUs"
import { Contactus } from "./components/ContactUs"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import OverviewSection from "./components/OverviewSection"
import { ProjectAmenities } from "./components/ProjectAmenities"
import { ProjectConfiguration } from "./components/ProjectConfiguration"
import { ProjectFloorPlan } from "./components/ProjectFloorPlan"
import { PropertiesSection } from "./components/PropertiesSection"

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <PropertiesSection/>
      <OverviewSection/>
      <ProjectAmenities/>
      <ProjectConfiguration/>
      <ProjectFloorPlan/>
      <Gallery/>
      <AboutUs/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
