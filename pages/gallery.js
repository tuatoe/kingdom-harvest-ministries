
import Head from 'next/head'
import PageHero from '../components/PageHero'

const Gallery = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='youth ministries' />
    </Head>
    return (
        <>
            <PageHero title='Gallery' />
            <div className='container'>
                <h2 className='page-title'></h2>
                <p>COMING SOON</p>
            </div>
        </>

    )
}

export default Gallery;