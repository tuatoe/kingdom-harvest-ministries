import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import Hamburger from './Hamburger';
import logo from '../public/bks_logo.png'

function Nav() {
    const targetWidth = 767;
    const [isOpen, setMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState()
    const links = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About Us', path: '/about-us' },
        { id: 3, label: 'What we do', path: 'what-we-do' },
        { id: 4, label: 'How you can help', path: '/how-you-can-help' },
        { id: 5, label: 'Events', path: '/events' },
        { id: 6, label: 'Gallery', path: '/gallery' },
        { id: 7, label: 'Contact', path: '/contact' },
        { id: 8, label: 'Donate', path: 'https://www.paypal.com/donate/?hosted_button_id=23X8Q6E7JW3YS' },
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
                <Link href='/'>
                    <Image src={logo} width={60} height={60} alt='Benjamin Karmon Sehkar Foundation' tabIndex='1' />
                </Link>
            </h1>
            {windowWidth > targetWidth ? (
                <>
                    <ul>
                        {links.map(link =>
                            <li key={link.id}>
                                <Link href={link.path}>{link.label}</Link>
                            </li>
                        )}
                    </ul>
                </>
            ) : (
                    <>
                        {/* <button onClick={toggle} className='close'>X</button> */}

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
                                <Link target='_blank' rel="noreferrer" passHref href='https://www.paypal.com/donate/?hosted_button_id=23X8Q6E7JW3YS'><a onClick={toggle}>Donate</a></Link>
                            </li>
                        </ul>

                        <Hamburger handleHamburger={toggle} isOpen={isOpen} />
                    </>
                )}

        </nav>
    )
}

export default Nav;