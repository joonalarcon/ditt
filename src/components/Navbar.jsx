import { useState } from "react";
import { RiHomeSmileFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Constante de Iconos
  const Icons = {
    Home: RiHomeSmileFill,
    Users: FaUsers,
    Contact: MdOutlineContactPhone,
    Price: FaMoneyBill1Wave,
    Menu: RiMenu3Line,
    Close: RiCloseLine,
  };

  // Constante de clases de Tailwind
  const constants = {
    nav: `sticky top-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 transition-all ${
      isOpen ? "rounded-b-none" : ""
    }`,
    navContainer: "flex items-center justify-between p-4",
    logo: "flex items-center",
    logoImg: "w-10 h-10 transition-all duration-300 hover:scale-110",
    logoText: "text-2xl font-bold ml-3 text-white tracking-tight",
    navTabsDesktop: "hidden md:flex items-center gap-8 pr-4",
    navTab:
      "text-slate-300 hover:text-white font-medium transition-all hover:scale-105 flex items-center gap-2 text-sm uppercase tracking-wide",
    navButtonPrice:
      "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white p-2.5 px-6 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105",
    iconSize: 18, // Tamaño de los iconos
  };

  return (
    <nav className={constants.nav}>
      {/* Main Bar Content */}
      <div className={constants.navContainer}>
        {/* Logo Section */}
        <div className={constants.logo}>
          <img className={constants.logoImg} src="/ditto.png" alt="Logo" />
          <h1 className={constants.logoText}>Ditt</h1>
        </div>

        <div className={constants.navTabsDesktop}>
          <a href="/" className={constants.navTab}>
            <Icons.Home size={constants.iconSize} />
            <p className="text-lg">Inicio</p>
          </a>
          <a href="/sobreNosotros" className={constants.navTab}>
            <Icons.Users size={constants.iconSize} />
            <p className="text-lg">Nosotros</p>
          </a>
          <a href="/contacto" className={constants.navTab}>
            <Icons.Contact size={constants.iconSize} />
            <p className="text-lg">Contacto</p>
          </a>
          <a href="/precios" className={constants.navButtonPrice}>
            <Icons.Price size={constants.iconSize} />
            <p className="text-lg">Precios</p>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none">
          {isOpen ? (
            <Icons.Close size={constants.iconSize + 6} />
          ) : (
            <Icons.Menu size={constants.iconSize + 6} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Pushes content down */}
      {isOpen && (
        <div className="w-full bg-slate-900 border-t border-slate-800 flex flex-col items-center py-6 space-y-6 md:hidden animate-in slide-in-from-top-2 duration-200">
          <a
            href="/"
            className={constants.navTab}
            onClick={() => setIsOpen(false)}>
            <Icons.Home size={constants.iconSize} />
            Inicio
          </a>
          <a
            href="/sobreNosotros"
            className={constants.navTab}
            onClick={() => setIsOpen(false)}>
            <Icons.Users size={constants.iconSize} />
            Sobre Nosotros
          </a>
          <a
            href="/contacto"
            className={constants.navTab}
            onClick={() => setIsOpen(false)}>
            <Icons.Contact size={constants.iconSize} />
            Contacto
          </a>
          <a
            href="/precios"
            className={constants.navButtonPrice}
            onClick={() => setIsOpen(false)}>
            <Icons.Price size={constants.iconSize} />
            <p className="text-lg">Precios</p>
          </a>
        </div>
      )}
    </nav>
  );
};
