
import Head from 'next/head'
import PageHero from '../components/PageHero'

const WomenMinistries = () => {
    <Head>
        <title>Youth ministries</title>
        <meta name='keywords' content='Youth ministries' />
    </Head>
    return (
        <>
            <PageHero title='Youth ministries' />
            <div className='container'>
                <h2 className='page-title'>You Can Make A Difference</h2>
                <p>Outreach to the youth is of major priority as we believe our youth have become the

target of the circular world and anti-God movements. We believe God is raising up a generation of

young men and women who would fight back and not accept the world’s philosophy, culture and ideas.

We are committed to inspiring, empowering and equipping our youth to be set apart for God and be the

catalyst of the move of God into the next generation of believers. Contact us to join our monthly Zoom
meetings.</p>
            </div>
        </>
    )
}

export default WomenMinistries;