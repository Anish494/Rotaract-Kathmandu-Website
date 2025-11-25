import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/social.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <footer className="bg-[#193073] w-full h-[406px] relative px-10 py-16">
            <div className="flex justify-between max-w-6xl mx-auto">
                {/* Column 1: Rotaract Club Info */}
                <div className="w-[448px]">
                    <img
                        src={logo} // replace with your logo path
                        alt="Rotaract Logo"
                        className="w-10 h-10 rounded-full mb-3"
                    />
                    <p className="text-white font-montserrat text-[20px] leading-7 font-bold mb-2">
                        Rotaract Club of Kathmandu
                    </p>
                    <p className="text-[#D1D5DB] font-open-sans text-[14px] leading-[23px] mb-4">
                        Rotaract Club of Kathmandu is dedicated to fostering leadership, service, and community development through meaningful initiatives and events.
                    </p>
                    <div className="flex space-x-2">
                        <a href="https://www.facebook.com/rotaractkathmandu" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="w-9 h-9 rounded-full cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/rotaractkathmandu" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="w-9 h-9 rounded-full cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/company/rotaract-kathmandu/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-9 h-9 rounded-full cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="w-[111px]">
                    <p className="font-montserrat text-[18px] leading-[28px] font-bold text-white mb-4">
                        Quick Links
                    </p>
                    <ul className="space-y-2 text-[#D1D5DB] font-open-sans text-[14px] leading-[20px]">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Event</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Column 3: Get Involved */}
                <div className="w-[119px]">
                    <p className="font-montserrat text-[18px] leading-[28px] font-bold text-white mb-4">
                        Get Involved
                    </p>
                    <ul className="space-y-2 text-[#D1D5DB] font-open-sans text-[14px] leading-[20px]">
                        <li>Join Us</li>
                        <li>Volunteer</li>
                        <li>Partner With Us</li>
                        <li>Donate</li>
                        <li>Upcoming Events</li>
                    </ul>
                </div>
            </div>

            <div className=" mt-10 w-[1232px] border-t border-[#1E40AF] mx-auto"></div>
<p className="text-[#9CA3AF] font-open-sans text-[14px] leading-[20px] font-normal text-center mt-10">
 &copy; Rotaract Club of Kathmandu. All Rights Reserved.
</p>

        </footer>
    );
};

export default Footer;
