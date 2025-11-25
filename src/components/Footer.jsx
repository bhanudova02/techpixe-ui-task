export function Footer() {
    return (
        <footer className="py-7 md:py-10 px-6 md:px-8 mt-10 space-y-4 bg-[#D6EAF8]">
            <div className="flex flex-col lg:flex-row text-center">
                <div className="w-full lg:w-[30%]">
                    <h2 className="text-[#236592] font-extrabold text-[30px] md:text-[48px]">
                        Godrej City Panvel
                    </h2>
                </div>
                <div className="w-full lg:w-[70%]  space-y-4">
                    <div>
                        <p>
                            Disclaimer : This website is not an official site. We are an authorized marketing partner [Finwizz Holdings RERA No – A51800018907] for this project. Provided content is given by respective owners and this website and content is for information purposes only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS, or email on details registered with us.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p>
                           <u> Privacy Policy</u> | <u>Terms & Conditions </u> | <u>Cookie Policy</u>
                        </p>
                        <p>Agent RERA No - A51800018907</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}