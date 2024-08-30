import { useEffect, useState,useRef } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuData = [
  { id: 1, newTab: false, title: "Accueil", path: "/" },
/*   {
    id: 2, newTab: true, title: "Group", path: "",
    submenu: [
      {
        id: 41,
        title: "SKY",
        path: "/sky",
        newTab: false,
      },
      {
        id: 42,
        title: "Studio",
        path: "/Studio",
        newTab: false,
      },
      {
        id: 43,
        title: "Digital",
        path: "/Digital",
        newTab: false,
      },
      {
        id: 44,
        title: "Event",
        path: "/Event",
        newTab: false,
      }
    ]
  }, */



  { id: 3, newTab: false, title: "Services", path: "/#services" },
  { id: 4, newTab: false, title: "Secteurs d'activités", path: "/#secteurs" },
  { id: 5, newTab: false, title: "Nos Clients", path: "/#nos_clients" },
  {
    id: 2, newTab: true, title: "Sky", path: "",
    submenu: [
      {
        id: 41,
        title: "Sky",
        path: "/sky",
        newTab: false,
      },
      {
        id: 41,
        title: "Agriculture",
        path: "/sky/Agriculture",
        newTab: false,
      },
      {
        id: 42,
        title: "Inspection",
        path: "/sky/Inspection",
        newTab: false,
      },
    ]
  }, 
  { id: 6, newTab: false, title: "Contact", path: "/#contact" }
];



function NavigationLink({ to, className, activeClassName, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const navbarHeight = 0;
  const linkRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = (hash) => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle click event
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const href = to;
    const url = new URL(href, window.location.origin);
    const hash = url.hash.slice(1); // Get hash without #

    if (url.origin === window.location.origin) {
      // If the link is internal
      if (hash) {
        handleScroll(hash); // Handle smooth scrolling
        navigate(`${url.pathname}`); // Navigate without hash
      } else {
        navigate(url.pathname); // Navigate without hash
      }
    } else {
      // External link; let it navigate as usual
      window.location.href = href;
    }
  };

  // Handle location change (when hash is in URL)
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      handleScroll(hash);
    }
  }, [location]);

  return (
    <Link
      ref={linkRef}
      to={to}
      className={location.pathname === new URL(to, window.location.origin).pathname ? `${className} ${activeClassName}` : className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
const Header = () => {

  const pathUrl = "/";
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };


  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center  
          bg-white/80 backdrop-blur-[5px]
          ${sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-black/10"
            : "absolute --bg-transparent"
          }`}
      >
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link
                to="/"
                className={`navbar-logo block w-full ${sticky ? "py-2" : "py-2"
                  } `}
              >
                <img
                  src={`/logoo.png`}
                  alt="logo"
                  width={240}
                  height={30}
                  className="header-logo w-full dark:hidden"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <div
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                      } ${pathUrl !== "/" && "!bg-black dark:!bg-white"} ${pathUrl === "/" && sticky
                        ? "bg-black dark:bg-white"
                        : "bg-black"
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                      } ${pathUrl !== "/" && "!bg-black dark:!bg-white"} ${pathUrl === "/" && sticky
                        ? "bg-black dark:bg-white"
                        : "bg-black"
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      } ${pathUrl !== "/" && "!bg-black dark:!bg-white"} ${pathUrl === "/" && sticky
                        ? "bg-black dark:bg-white"
                        : "bg-black"
                      }`}
                  />
                </div>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-black-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          {pathUrl !== "/" ? (
                            <Link
                              onClick={navbarToggleHandler}
                              to={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${pathUrl === menuItem?.path && "text-primary"
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <Link
                              to={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                : "text-black dark:text-white lg:text-black"
                                } ${pathUrl === menuItem?.path &&
                                sticky &&
                                "!text-primary"
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                : "text-blackz"
                                }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-black-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                              }`}
                          >
                            {menuItem?.submenu?.map((submenuItem, i) => (
                              <Link
                                to={submenuItem.path}
                                key={i}
                                className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                                  ? "text-primary"
                                  : "text-black hover:text-primary"
                                  }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;