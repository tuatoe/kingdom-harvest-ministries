
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

function Footer() {
    return (
        <footer id='footer' className={styles.footer}>
            <p>Benjamin Karmon Sehkar Foundation Inc. is a nonprofit 501(c)(3) public charity (tax ID# 47-2420913).</p>
            <ul className='flex flex-start justify-content-center border-left'>
                <li><address>Address: P.O. Box 3301 Grapevine, TX 76099</address></li>
                <li><a href='tel:317-332-81427'>317-332-8142</a></li>
                <li> <a className='donate' rel="noreferrer" href='https://www.paypal.com/donate/?hosted_button_id=23X8Q6E7JW3YS'>DONATE</a></li>
            </ul>
            <p>©Copyright 2022</p>
        </footer>
    )
}
export default Footer;