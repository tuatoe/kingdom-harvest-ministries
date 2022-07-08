import Link from 'next/link';
import styles from '../styles/Nav.module.scss';

const Nav = () => {
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Youth Ministries', path: 'youth-ministries' },
        { label: 'Women Ministries', path: 'women-ministries' },
        { label: 'Giving', path: '/giving' },
        { label: 'Contact', path: '/contact' },
        { label: 'Donate', path: '/donate' },
    ]
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}><Link href={'/'}>Kingdom Harvest Ministries</Link></h1>
            <ul className={styles.hiddenMobile}>
                {links.map(link =>
                    <li key={link}>
                        <Link href={link.path}>{link.label}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav;