
import Head from 'next/head'
import PageHero from '../components/PageHero'

const YouthMinistries = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='Events' />
    </Head>
    return (
        <>
            <PageHero title='Events' />
            <div className='container'>
                <h2 className='page-title'></h2>
                <p>COMING SOON</p>
            </div>
        </>
    )
}

export default YouthMinistries;