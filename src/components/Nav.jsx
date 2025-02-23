import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks, navLinksRight } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <header className="absolute top-0 z-20 w-full py-8">
      <nav className="max-container padding-x flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-montserrat text-lg text-slate-gray dark:text-slate-400"
            >
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-6">
          {navLinksRight.map((item) => (
            <a key={item.label} href={item.href}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
