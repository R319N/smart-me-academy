// import React from 'react'

import navigation from "@/utils/data/navigation_Links";

// const MainFooter = () => {
//   return (
//     <div>Main-Footer</div>
//   )
// }

// const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Courses', href: '/courses' },
//     { name: 'Contact', href: '/contact' },
// ];

const MainFooter = () => {
    return (
        <footer style={{ padding: '2rem', background: '#222', color: '#fff' }}>
            <nav>
                <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                    {navigation.map(link => (
                        <li key={link.name}>
                            <a href={link.href} style={{ color: '#fff', textDecoration: 'none' }}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} AcademyTS. All rights reserved.
            </div>
        </footer>
    );
};

export default MainFooter;