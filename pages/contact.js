
import Head from 'next/head'
import ContactFrom from '../components/ContactFrom'
import PageHero from '../components/PageHero'

const Contact = () => {
    <Head>
        <title>Contact us</title>
        <meta name='keywords' content='contact us' />
    </Head>
    return (
        <>
            <PageHero title='Contact' />
            <div className='container'>
                <h2 className='page-title'></h2>
                <ContactFrom content='Please fill out this form to contact us with questions, prayer request and other needs' />
            </div>
        </>
    )
}

export default Contact;