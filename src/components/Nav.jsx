import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = () => {
  return (
    <header className="z-20 padding-x py-8 w-full absolute">
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
                <a key={item.label} href={item.href} className="font-montserrat text-lg text-slate-gray">
                  <li>{item.label}</li>
                </a>
              )}
            </ul>
            <div className="hidden max-lg:block">
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