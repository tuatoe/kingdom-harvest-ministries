
import Head from 'next/head'

const Contact = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='contact us' />
    </Head>
    return (
        <div className='container'>
            <h1 className='page-title'>Contact Us</h1>
            <p> Please fill out this form to contact us with questions, prayer request and other needs:</p>
            <ul>
                <li>
                    <p className='uppercase'><strong>Phone</strong></p>
                    <a href='tel:612-842-7097'>612-842-7097</a>
                </li>
                <li>
                    <p className='uppercase'><strong>Email</strong></p>
                    <a href='mailto:kingdomharvestnow@yahoo.com'>kingdomharvestnow@yahoo.com</a>
                </li>
                <li>
                    <p className='uppercase'><strong>Mailing Address</strong></p>
                    <address> Kingdom Harves Ministries P.O. Box 40026 Blaine MN 55449</address>
                </li>
            </ul>
        </div>
    )
}

export default Contact;