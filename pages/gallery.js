
import Head from 'next/head'
import PageHero from '../components/PageHero'

const Gallery = () => {
    <Head>
        <title>Gallery</title>
        <meta name='keywords' content='gallery' />
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