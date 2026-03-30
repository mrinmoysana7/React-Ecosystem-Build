import React from 'react';
import Link from './Link';

const NavBar = () => {
    const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
    return (
        <nav>
            <ol className='flex'>
                {
                navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ol>
            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}
        </nav>
    );
};

export default NavBar;