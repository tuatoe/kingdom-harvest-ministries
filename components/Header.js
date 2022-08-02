import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <h2 className={styles.headerTitle}>Kingdom Harvest Ministries</h2>
            <h3 className={styles.headerSubTitle}>Inspiration, Training, Engagement.</h3>
            <Link href='https://www.paypal.com/paypalme/KingdomHarvestNow?country.x=US&locale.x=en_US' className='link'>DONATE</Link>
        </header>
    )
}
export default Header;