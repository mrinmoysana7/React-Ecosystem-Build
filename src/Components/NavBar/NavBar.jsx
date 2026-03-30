import { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const Links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between p-4 items-center shadow-sm">
      

      <span
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex gap-2 "
      >
        {open ?
          <X className="md:hidden"></X>
         : 
          <Menu className="md:hidden"></Menu>
        }

        <ul className={`md:hidden absolute duration-650 
          ${open ? 'top-13' : '-top-50'} 
          bg-pink-100 px-2 md:pl-5 py-5 rounded-lg z-50`}>
          {Links}
        </ul>

        <h3>Apple Music</h3>
      </span>

      

      <ol className="md:flex hidden">{Links}</ol>

      {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}
      <button className="bg-pink-100 px-3 py-2 rounded-full cursor-pointer">
        Sign In
      </button>
    </nav>
  );
};

export default NavBar;
