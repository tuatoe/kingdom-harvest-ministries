import styles from '../styles/Header.module.scss';
import Link from 'next/link';

function Header() {
    return (
        <header className={`container ${styles.header}`}>
            <h2 className={styles.headerTitle}>Equal Access to Quality Eduation</h2>
            <h3 className={styles.headerSubTitle}>Empowerment Through Education</h3>
            <Link href='https://www.paypal.com/donate?token=6axeF0kO88igRSRDLjWN1d93uIn_fkawiwfrBhpk0NU4DVQY-nrU3OBx2WFWD4BcM13zyM72bIz-f8V4' className='link'>DONATE</Link>
        </header>
    )
}
export default Header;