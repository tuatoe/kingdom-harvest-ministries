
//use for custom title meta tags keywords
import Link from 'next/link';
import Head from 'next/head'
import Hero from '../components/Hero'


const Home = ({ }) => {
  return (
    <>
      {/* <Head>
        <title>Kingdom Harvest </title>
        <meta name='keywords' content='' />
      </Head> */}
      <Hero />
      <section className='section section-one'>
        <div className='container'>
          <h2 className='section-title'>About Us</h2>
          <p>
            Kingdom Harvest Ministries was started by Maudeline St Jean, in 2019 with the passion to
            reach out to the spiritually lost, locally and internationally. This mission includes empowering believers
            through teaching, preaching and living out the gospel in community and rekindling their passion to love
            God and serve him faithfully.
          </p>
          <Link href='/about-us'>LEARN MORE</Link>
        </div>
      </section>

      <section className='section section-two'>
        <div className='container'>
          <h2 className='section-title'>Youth Ministries</h2>
          <p>
            Outreach to the youth is of major priority as we believe our youth have become the
            target of the circular world and anti-God movements. We believe God is raising up a generation of
            young men and women who would fight back and not accept the world’s philosophy, culture and ideas.
          </p>
          <p>
            We are committed to inspiring, empowering and equipping our youth to be set apart for God and be the
            catalyst of the move of God into the next generation of believers. Contact us to join our monthly Zoom
            meetings.
          </p>
          <Link href='/youth-ministries'>LEARN MORE</Link>
        </div>
      </section>

      <section className='section section-three'>
        <div className='container'>
          <h2 className='section-title'>Women’s Ministries</h2>
          <p>
            Women play a big role in our communities and face so many challenges. The
            women’s ministries partners with women to experience God at a new level of encounter, engagement,
            and commitment to do exploits for God and engage in the kingdom agenda on the home and
            community fronts and to involvement in local and global initiatives.
          </p>
          <Link href='/women-ministries'>LEARN MORE</Link>

        </div>
      </section>

      <section className='section section-four'>
        <div className='container'>
          <h2 className='section-title'>Giving</h2>
          <p>
            When you give to Kingdom Harvest Ministries your Donatins/gifts help us fulfill the mission to take the
            gospel to the ends of the earth. As a result of your generosity, we are able to train laborers in the
            harvest field, lives can be transformed, individuals, families, can live in their destinies, communities can
            experience the kingdom of God, the power of sin and wickedness can be destroyed in the lives of
            people.
          </p>
          <Link href='/giving'>LEARN MORE</Link>
        </div>
      </section>

      <section className='section section-five'>
        <div className='container'>
          <h2 className='section-title'>Contact</h2>
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
      </section>
    </>
  )
}
export default Home;
