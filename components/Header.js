import styles from '../styles/Header.module.scss';
import Link from 'next/link';

function Header() {
    return (
        <header className={`container ${styles.header}`}>
            <h2 className={styles.headerTitle}>Equal Access to Quality Eduation</h2>
            <h3 className={styles.headerSubTitle}>Empowerment Through Education</h3>
            <Link className='donate' href='https://www.paypal.com/donate/?hosted_button_id=23X8Q6E7JW3YS'>DONATE NOW</Link>
        </header>
    )
}
export default Header;