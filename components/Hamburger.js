import React from 'react';
import styles from '../styles/Hamburger.module.scss'

const Hamburger = React.forwardRef(({ isOpen, handleHamburger }, forwardRef) => {
    return (
        <button ref={forwardRef} className={styles.hamburger} onClick={handleHamburger}>
            <div className={isOpen ? `${styles.burger} ${styles.burger1} ${styles.isOpen}` : `${styles.burger} ${styles.burger1}`} />
            <div className={isOpen ? `${styles.burger} ${styles.burger2} ${styles.isOpen}` : `${styles.burger} ${styles.burger2}`} />
            <div className={isOpen ? `${styles.burger} ${styles.burger3} ${styles.isOpen}` : `${styles.burger} ${styles.burger3}`} />
        </button>
    )
});
Hamburger.displayName = 'Hamburger'
export default Hamburger;