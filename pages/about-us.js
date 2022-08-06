
import Head from 'next/head'
import PageHero from '../components/PageHero';


const About = () => {
    <Head>
        <title>About us</title>
        <meta name='keywords' content='About Kingdom Harvest Ministries' />
    </Head>
    return (
        <>
            <PageHero title='About us' />
            <div className='container page'>
                <h2 className='page-title hidden-desktop'>Kingdom Harvest Ministries</h2>
                <p>Kingdom Harvest Ministries was started by Maudeline St Jean, in 2019 with the passion to reach out to the spiritually lost, locally and internationally. This mission includes empowering believers through teaching, preaching and living out the gospel in community and rekindling their passion to love God and serve him faithfully.</p>
                <p>
                    Believers are inspired to take the gospel to the ends of the earth through
                    commitment to the kingdom building agenda, inspiration, training, engagement and support.
          </p>
                <h3 className='page-sub-title'>Beliefs and Values</h3>
                <p>
                    We believe in the Bible as the infallible Word of God and the ultimate guide for our
                    lives, the supreme authority in all matters of faith and conduct. We believe Jesus Christ, the Son of God
                    died for our sins, was resurrected and seated at the right hand of the father.
          </p>
                <h3 className='We believe in the Trinity'>Vision</h3>
                <p>Our vision is to realize a Liberia in which children from all over the country have equal access to quality education in this era of global competitiveness.</p>
                <p>
                    We believe Jesus is coming back soon for his Church. We hold dear, the “Great Commission” to go into
                    all the world and preach the gospel of Jesus Christ into the uttermost parts of the earth.
                    Our Values: include loving God fully with all that we are and to love our neighbors as we love ourselves.
          </p>
                <ul className='unordered-list-style'>
                    <li>Love God fully and faithfully- spend time with God in worship, in the Word, prayer and fasting</li>
                    <li>Love your neighbors- kindness, love and compassion</li>
                    <li>Serve in church ministry, and the community</li>
                    <li>Share your faith, live your faith (friends, neighbors, invite to church, reach out to strangers/invite)</li>
                    <li>Support God’s kingdom agenda of reaching the lost- Generously gave your time, talents, and finances.</li>
                </ul>
                <h3 className='page-sub-title'>Mission</h3>
                <p>Loving God completely, following Jesus faithfully, proclaiming the full gospel of Jesus Christ, empowering, inspiring and engaging the body of believers and promote God’s kingdom agenda by reaching the lost locally, and globally.</p>
            </div>
        </>
    )
}

export default About;