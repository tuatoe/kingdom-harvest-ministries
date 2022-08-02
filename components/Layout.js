import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss'
function Layout({ children }) {
    return (
        <>
            <Nav />
            <div id='page-container'>
                <main id='content-wrap' className={styles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout