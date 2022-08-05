import styles from '../styles/Footer.module.scss';

function Footer() {
    return (
        <footer id='footer' className={styles.footer}>
            <p>Benjamin Karmon Sehkar Foundation Inc. is a nonprofit 501(c)(3) public charity (tax ID# 47-2420913).</p>
            <ul className='flex flex-start justify-content-center border-left'>
                <li><address>Address: P.O. Box 3301 Grapevine, TX 76099</address></li>
                <li><a href='tel:317-332-81427'>317-332-8142</a></li>
                <li> <a target='_blank' rel="noreferrer" href='https://www.paypal.com/donate?token=yvKBWHo4bgIe1XPae3lYUep_R8oJiu6Tff-NgsoGyFsyxupVt-XNj6vr6X7B7m73PymiGX5opgTZ0Yxj'>DONATE</a></li>
            </ul>
            <p>©Copyright 2022</p>
        </footer>
    )
}
export default Footer;