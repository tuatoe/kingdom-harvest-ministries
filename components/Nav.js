import React, { useState, useEffect } from 'react';
import Image from 'next/Image';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import Hamburger from './Hamburger';
import logo from '../public/asset/bks_logo.png'

function Nav() {
    const targetWidth = 767;
    const [isOpen, setMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState()
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        { label: 'What we do', path: 'what-we-do' },
        { label: 'How you can help', path: '/how-you-can-help' },
        { label: 'Events', path: '/events' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Contact', path: '/contact' },
        { label: 'Donate', path: 'https://www.paypal.com/donate?token=oDUhybjHmItL8BkUKfRkZkkXRakSIq7uMqhVESVx-RP-lS0uhHJiJ4DB00Hfsl-zkNUY9LCll1zRt31l' },
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
                {/* <Link href='/'>
                    <Image src={logo} width={60} height={54} alt='Benjamin Karmon Sehkar Foundation' tabIndex='1' />
                </Link> */}
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
                                <Link href='/' passHref><a onClick={toggle}>Home</a></Link>
                            </li>
                            <li>
                                <Link href='/about-us' passHref><a onClick={toggle}>About Us</a></Link>
                            </li>
                            <li>
                                <Link href='/what-we-do' passHref><a onClick={toggle}>What we do</a></Link>
                            </li>
                            <li>
                                <Link href='/how-you-can-help' passHref><a onClick={toggle}>How you can help</a></Link>
                            </li>
                            <li>
                                <Link href='/events' passHref><a onClick={toggle}>Events</a></Link>
                            </li>
                            <li>
                                <Link href='/gallery' passHref><a onClick={toggle}>Gallery</a></Link>
                            </li>
                            <li>
                                <Link href='/contact' passHref><a onClick={toggle}>Contact</a></Link>
                            </li>
                            <li>
                                <Link target='_blank' rel="noreferrer" href='https://www.paypal.com/donate?token=oDUhybjHmItL8BkUKfRkZkkXRakSIq7uMqhVESVx-RP-lS0uhHJiJ4DB00Hfsl-zkNUY9LCll1zRt31l'><a onClick={toggle}>Donate</a></Link>
                            </li>
                        </ul>

                        <Hamburger handleHamburger={toggle} isOpen={isOpen} />
                    </>
                )}

        </nav>
    )
}

export default Nav;