import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer id='footer' className={styles.footer}>
            <ul className='flex flex-start justify-content-center border-left'>
                <li><address>Kingdom Harves Ministries P.O. Box 40026 Blaine MN 55449 </address></li>
                <li><a href='tel:612-842-7097'>612-842-7097</a></li>
                <li> <a href='mailto:kingdomharvestnow@yahoo.com'>kingdomharvestnow@yahoo.com</a></li>
            </ul>
            <p>©Copyright 2022</p>
        </footer>
    )
}
export default Footer;