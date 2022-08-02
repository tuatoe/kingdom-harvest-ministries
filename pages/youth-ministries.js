
import Head from 'next/head'
import Image from 'next/image'
// import img1 from 'https://images.unsplash.com/photo-1521574778337-d962ef81733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'

const YouthMinistries = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='youth ministries' />
    </Head>
    return (
        <div className='container'>
            <h1 className='page-title'>Youth ministries</h1>
            <p>Outreach to the youth is of major priority as we believe our youth have become the target of the circular world and anti-God movements. We believe God is raising up a generation of young men and women who would fight back and not accept the world’s philosophy, culture and ideas.</p>
            <p>We are committed to inspiring, empowering and equipping our youth to be set apart for God and be the catalyst of the move of God into the next generation of believers. Contact us to join our monthly Zoom meetings.</p>
            {/* <Image width={100} height={100} className='img-responsive' src={img1} alt='youth worshipping' /> */}
        </div>
    )
}

export default YouthMinistries;