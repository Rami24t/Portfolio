import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { CgMenuLeftAlt } from "react-icons/cg";
import { HiOutlineX } from "react-icons/hi";
import { navLinks } from "../constants";
import tw from "../tw-styles";

const Navbar = ({ sendMail }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${tw.paddingX} w-full flex items-center py-3 sm:py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <p
            className={`text-white text-xl transition-transform ${
              scrolled ? "scale-90 -translate-x-4" : ""
            } font-bold cursor-pointer flex`}
          >
            <span className="logo text-slate-200"> Rami Al-Saadi &nbsp; </span>
            <span className="md:block hidden"> &nbsp; Web Developer </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate-100" : "text-secondary"
              } hover:text-slate-100 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                nav.id === "contact" && sendMail();
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <HiOutlineX
              className="text-slate-100 text-[28px] cursor-pointer w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <CgMenuLeftAlt
              className="text-slate-100 text-[28px] cursor-pointer w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-slate-100" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
