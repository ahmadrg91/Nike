import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col max-container gap-28 ">
      <div className="flex justify-between gap-10 max-lg:flex-col">
        <div >
          <img src={footerLogo} width={150} height={46}/>
          <p className="text-white-400 mt-6 sm:max-w-sm font-montserrat">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex gap-4 mt-8">
            {
              socialMedia.map(social => 
                <a href={social.link} className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
                  <img src={social.src} alt={social.alt}/>
                </a>
              )
            }
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-10 justify-between w-full font-montserrat">
            {
              footerLinks.map(section => 
                <div key={section.title} className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                  <ul className="text-white-400">
                    {section.links.map(link =>
                      <li key={link.name} className="mt-2">
                        <a href={link.link}>{link.name}</a>
                      </li>
                    )}
                  </ul>
                </div>
              )
            }
        </div>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col gap-2 text-white-400 font-montserrat">
        <p className="flex gap-1">
          <img src={copyrightSign} height={14} width={14}/>
          Copyright. All rights reserved
        </p>
        <p>Terms &amp; Conditions</p>
      </div>
    </footer>
  )
}

export default Footer;