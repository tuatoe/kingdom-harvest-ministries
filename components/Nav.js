import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import Hamburger from './Hamburger';
import logo from '../img/logo.png';

const Nav = () => {
    const targetWidth = 767;
    const [isOpen, setMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState()
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Youth Ministries', path: 'youth-ministries' },
        { label: 'Women Ministries', path: 'women-ministries' },
        { label: 'Giving', path: '/giving' },
        { label: 'Contact', path: '/contact' },
    ];
    const toggle = e => {
        e.stopPropagation();
        setMenu(!isOpen)
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
        window.addEventListener('load', () => {
            setWindowWidth(window.innerWidth)
        })

    }, [windowWidth])
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href={'/'}>
                    <>
                        {/* <img src={logo} alt='kingdom harvest ministries logo' /> */}
                        Kingdom Harvest Ministries
                    </>
                </Link>
            </h1>
            {windowWidth > targetWidth ? (
                <ul>
                    {links.map(link =>
                        <li key={link}>
                            <Link href={link.path}>{link.label}</Link>
                        </li>
                    )}
                </ul>
            ) : (
                    <>
                        <ul className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''}`}>
                            <li>
                                <Link href='/'><a onClick={toggle}>Home</a></Link>
                            </li>
                            <li>
                                <Link href='/about-us'><a onClick={toggle}>About Us</a></Link>
                            </li>
                            <li>
                                <Link href='/youth-ministries'><a onClick={toggle}>Youth Ministries</a></Link>
                            </li>
                            <li>
                                <Link href='/women-ministries'><a onClick={toggle}>Women Ministries</a></Link>
                            </li>
                            <li>
                                <Link href='/giving'><a onClick={toggle}>Giving</a></Link>
                            </li>
                            <li>
                                <Link href='/contact'><a onClick={toggle}>Contact</a></Link>
                            </li>
                        </ul>

                        <Hamburger handleHamburger={toggle} isOpen={isOpen} />
                    </>
                )}

        </nav>
    )
}

export default Nav;