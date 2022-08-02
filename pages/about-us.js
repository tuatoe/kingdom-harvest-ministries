
import Head from 'next/head'
import PageHero from '../components/PageHero';


const About = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='web dev, programming' />
    </Head>
    return (
        <>
            <PageHero title='About us' />
            <div className='container page'>
                <h2 className='page-title hidden-desktop'>Benjamin Karmon Sehkar</h2>
                <p>A group of Liberians residing in the US have established the Benjamin Karmon Sehkar Foundation Incorporated (BKS&#8482;). The BKS&#8482; Foundation, as it is affectionately known, has been established in memory of the late Benjamin K. Sehkar.</p>
                <p>Sehkar was a broadcast journalist killed in 1990 at the height of the Liberian Civil War by Armed Forces of Liberia (AFL) soldiers during a popular uprising against the Samuel Kanyon Doe government.</p>
                <p>The Foundation was established with a focus on providing tuition assistance to disadvantaged and underprivileged children from rural Liberia, with Nimba County as the primary target for aid. BKS&#8482; is headquartered in Monrovia, Liberia.</p>
                <h3 className='page-sub-title'>Our mission</h3>
                <p>Our mission is to provide access to reliable, reasonable and quality education for children of underprivileged and disadvantage communities in Liberia. We are committed to providing educational opportunities to every child in Liberia regardless of the constraints, while teaching them the word of God.</p>
                <h3 className='page-sub-title'>Vision</h3>
                <p>Our vision is to realize a Liberia in which children from all over the country have equal access to quality education in this era of global competitiveness.</p>
            </div>
        </>
    )
}

export default About;