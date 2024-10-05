import { copyrightSign } from "../../../assets/icons";
import { footerLogo } from "../../../assets/images";
import { footerLinks, socialMedia } from "../../../constants";

const Footer = () => {
  return (
    <footer className="max-container flex flex-col gap-28">
      <div className="flex justify-between gap-10 max-lg:flex-col">
        <div>
          <img
            src={footerLogo}
            width={150}
            height={46}
          />
          <p className="mt-6 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex gap-4">
            {socialMedia.map((social) => (
              <a
                href={social.link}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-between gap-10 font-montserrat max-sm:flex-col">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-semibold text-white">
                {section.title}
              </h3>
              <ul className="text-white-400">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-2"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 font-montserrat text-white-400 max-lg:flex-col">
        <p className="flex gap-1">
          <img
            src={copyrightSign}
            height={14}
            width={14}
          />
          Copyright. All rights reserved
        </p>
        <p>Terms &amp; Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
