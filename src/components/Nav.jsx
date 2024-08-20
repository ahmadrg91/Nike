import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = () => {
  return (
    <header className="padding-x py-8 w-full absolute">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
              <img 
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
              />
            </a>
            <ul className="flex flex-1 justify-center gap-16 items-center max-lg:hidden">
              {navLinks.map(item => 
                <a href={item.href} className="font-montserrat text-lg text-slate-gray">
                  <li key={item.label}>{item.label}</li>
                </a>
              )}
            </ul>
            <div className="hidden mx-lg:block">
              <img
                src={hamburger}
                alt="Hamburger"
                height={25}
                width={25}
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav;