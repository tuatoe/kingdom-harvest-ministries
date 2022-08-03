
//use for custom title meta tags keywords
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import alvinSehkar from '../public/our-team-alvin-sehkar-new.jpg'
import scottAllison from '../public/our-team-dr-scott-allison.jpg'
import zeamboDahnweih from '../public/our-team-zeambo-dahnweih.jpg'
import tobyEiler from '../public/our-team-toby-eiler.jpg'
import emmanuelMiatona from '../public/our-team-emmanuel-miantona.jpg'
import pahSuku from '../public/our-team-pah-k-suku.jpg'
import ContactFrom from '../components/ContactFrom';

const Home = ({ }) => {
  const ourTeam = [
    {
      id: 1,
      name: 'Alvin Sehkar',
      title: 'Founder',
      img: alvinSehkar,
      about: 'Alvin Sehkar is an advocate for underprivileged education and a social entrepreneur from Liberia.'
    },
    {
      id: 2,
      name: 'Dr. Scott Allison',
      title: 'Advisory board',
      img: scottAllison,
      about: 'Dr. Allison was born and raised in Sullivan, Indiana.'
    },
    {
      id: 3,
      name: 'Mr. Zeambo Dahnweih',
      title: 'Advisory board',
      img: zeamboDahnweih,
      about: 'A Liberian, Zeambo Dahnweih is the second of six siblings.'
    },
    {
      id: 4,
      name: 'Mr. Toby Eiler',
      title: 'Advisory board',
      img: tobyEiler,
      about: 'Mr. Toby Eiler, was born in Valparaiso, IN and grew up in a very small town called Hebron, Indiana.'
    },
    {
      id: 5,
      name: 'Mr. Emmanuel Miatona',
      title: 'Advisory board',
      img: emmanuelMiatona,
      about: 'Mr. Emmanuel Miantona was born in Ganta, Nimba County, Liberia. '
    },
    {
      id: 5,
      name: 'Pah K Suku',
      title: 'Advisory board',
      img: pahSuku,
      about: 'Pah K Suku Jr, born in Liberia, West Africa.'
    },
  ]
  return (
    <div id='content-wrap'>
      {/* <Head>
        <title>Kingdom Harvest </title>
        <meta name='keywords' content='' />
      </Head> */}
      <Hero />
      <section className='section section-one'>
        <div className='container'>
          <h2 className='section-title'>About BKS&#8482; Foundation, Inc.</h2>
          <p>
            A group of Liberians residing in the US have established the Benjamin Karmon Sehkar Foundation Incorporated (BKS&#8482;).
            The BKS&#8482; Foundation, as it is affectionately known, has been established in memory of the late Benjamin K. Sehkar. Sehkar
            was a broadcast journalist killed in 1990 at the height of the Liberian Civil War by Armed Forces of Liberia (AFL) soldiers
            during a popular uprising against the Samuel Kanyon Doe government.
          </p>

          <Link href='/about-us'>LEARN MORE</Link>
        </div>
      </section>

      <section className='section section-two'>
        <div className='container'>
          <h2 className='section-title'>What we do</h2>
          <p>
            The BKS&#8482; Foundation, Inc. provides scholarships to underprivileged and disadvantaged students to attend all major universities and colleges in Liberia. BKS&#8482; Foundation is also partnering with some major high schools in the rural parts of the country to provide tuition assistance to students who meet its scholarship requirements.
          </p>
          <p>In addition to the aforementioned, we provide school supplies (notebooks, pencil, backpacks, crayons, rulers, etc.) to the disadvantaged students in Liberia.</p>
          <Link href='/what-we-do'>LEARN MORE</Link>
        </div>
      </section>

      <section className='section section-three'>
        <div className='container'>
          <h2 className='section-title'>How you can help</h2>
          <p>
            There are many ways you could get involved. Click or tap on the blue learn more link below to learn ways you could help make a difference in the lives of underprivileged children in Liberia: Follow our progress on our website, Facebook, Instagram, and Twitter. Help us spread the word.
          </p>
          <Link href='/how-you-can-help'>LEARN MORE</Link>

        </div>
      </section>

      <section className='section section-four'>
        <div className='container'>
          <h2 className='section-title'>Meet our team</h2>
          <ul className='team-roaster'>
            {ourTeam.map((team) => (
              <li key={team.id}>
                <Image src={team.img} alt={team.name} width={150} height={150} />
                <h3 className='name'>{team.name}</h3>
                <p className='title'>{team.title}</p>
                <p className='about'>{team.about}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='section section-five'>
        <div className='container'>
          <h2 className='section-title'>Events</h2>
          <p>COMING SOON</p>
        </div>
      </section>

      <section className='section section-six'>
        <div className='container'>
          <h2 className='section-title'>Contact</h2>
          <ContactFrom content='Please fill out this form and we will get in touch with you shortly.' />
        </div>
      </section>
    </div>
  )
}
export default Home;
