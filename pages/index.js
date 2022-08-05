
import React, { useState } from 'react'
import Modal from 'react-modal';
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
import rhodaJoine from '../public/our-team-rhoda.jpg'
import matthewPeelor from '../public/our-team-matthew.jpg'
import ContactFrom from '../components/ContactFrom';

const Home = ({ }) => {
  const [teamOne, setTeamOne] = useState(false)
  const [teamTwo, setTeamTwo] = useState(false)
  const [teamThree, setTeamThree] = useState(false)
  const [teamFour, setTeamFour] = useState(false)
  const [teamFive, setTeamFive] = useState(false)
  const [teamSix, setTeamSix] = useState(false)
  const [teamSeven, setTeamSeven] = useState(false)
  const [teamEight, setTeamEight] = useState(false)

  const handleModalClose = () => {
    setTeamOne(false)
    setTeamTwo(false)
    setTeamThree(false)
    setTeamFour(false)
    setTeamFive(false)
    setTeamSix(false)
    setTeamSeven(false)
    setTeamEight(false)
  }
  const ourTeam = [
    {
      id: 'team_1',
      name: 'Alvin Sehkar',
      title: 'Founder',
      img: alvinSehkar,
      about: 'Alvin Sehkar is an advocate for underprivileged education and a social entrepreneur from Liberia.',
      learnMore: () => handleclick
    },
    {
      id: 'team_2',
      name: 'Rhoda Z Joine',
      title: 'Event Planner/Coordinator',
      img: rhodaJoine,
      about: 'Rhoda Zokunwon Joine, was born in Monrovia, Liberia. She is the second of eight siblings.'
    },
    {
      id: 'team_3',
      name: 'Dr. Scott Allison',
      title: 'Advisory board',
      img: scottAllison,
      about: 'Dr. Allison was born and raised in Sullivan, Indiana.'
    },
    {
      id: 'team_4',
      name: 'Mr. Zeambo Dahnweih',
      title: 'Advisory board',
      img: zeamboDahnweih,
      about: 'A Liberian, Zeambo Dahnweih is the second of six siblings.'
    },
    {
      id: 'team_5',
      name: 'Mr. Toby Eiler',
      title: 'Advisory board',
      img: tobyEiler,
      about: 'Mr. Toby Eiler, was born in Valparaiso, IN and grew up in a very small town called Hebron, Indiana.'
    },
    {
      id: 'team_6',
      name: 'Mr. Emmanuel Miatona',
      title: 'Advisory board',
      img: emmanuelMiatona,
      about: 'Mr. Emmanuel Miantona was born in Ganta, Nimba County, Liberia. '
    },
    {
      id: 'team_7',
      name: 'Pah K Suku',
      title: 'Advisory board',
      img: pahSuku,
      about: 'Pah K Suku Jr, born in Liberia, West Africa.'
    },
    {
      id: 'team_8',
      name: 'Mr. Matthew Peelor',
      title: 'Advisory board',
      img: matthewPeelor,
      about: 'Mr. Matthew Peelor was born in Reading, PA and grew up in the suburbs of Pittsburgh. '
    },

  ];
  const handleModalOpen = (id) => {
    ourTeam.map((team) => {
      if (team.id === id) {
        handleModalIsOopen(!modalIsOpen)
      }
    })
  }
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
            <li>
              <Image src={ourTeam[0].img} alt={ourTeam[0].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[0].name}</h3>
              <p className='title'>{ourTeam[0].title}</p>
              <p className='about'>{ourTeam[0].about}</p>
              <button id={ourTeam[0].id} onClick={() => setTeamOne(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamOne}
                onRequestClose={handleModalClose}
                contentLabel={'Alvin Sehkar'}
              >
                <div className='modal-head-section'>
                  <h1>Alvin Sehkar</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>
                <div>
                  <p>Alvin Sehkar is an advocate for underprivileged education and a social entrepreneur from Liberia. Upon Mr. Alvin Sehkar&rsquo;s arrival to the United States in 2004, he made a promise to gratefully, proudly and gracefully tell his story. His has experienced the works and grace of God throughout his life. God manifested His will in his life and has brought him a long way. Now, he feels obliged to give back to the people of Liberia. With that conviction, he established a foundation in his late father&rsquo;s name, the Benjamin Karmon Sehkar (BKS&#8482;) Foundation, Inc.</p>
                  <p>After losing his father during the Liberian Civil war in the early 1990s, Alvin&rsquo;s family fled to the Ivory Coast to seek refuge. Growing up as a refugee in the Ivory Coast with a widowed mother, Sehkar and his siblings&rsquo; lives were marked with poverty and hardship. Sometimes, his mother would have nothing to offer them, and they would go to sleep hungry without a meal.</p>
                  <p>Due to the hardship, and without financial Assistance or support, Sehkar withdrew from school on several occasions. Clothes and other basic human needs were scarce in their lives. Although Mr. Sehkar&rsquo;s early life was not easy, his faith in God remained constant during those tough times. With the help of a Catholic diocese in Kentucky, Alvin and his family had the opportunity to resettle in Owensboro, Kentucky. It was certainly a blessing, cultural shock and a life changing experience for them.</p>
                  <p>After seeing the countless blessings and opportunities this beautiful country (USA) has to offer, pursuing education was his next plan. He enrolled at Kentucky Wesleyan College in Owensboro, Kentucky. His reading, writing and speaking skills challenged his success. Again, his faith in God, hard work, perseverance, tenacity and determination took him through. Gratefully, Mr. Sehkar was able to complete his studies within four years.</p>
                  <p>After graduating from college in 2008, he relocated to Noblesville, Indiana. He enrolled at Anderson University, where he graduated with an MBA on May 11, 2013. Mr. Sehkar is currently employed at Capital Group in Carmel, Indiana.</p>
                </div>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[1].img} alt={ourTeam[1].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[1].name}</h3>
              <p className='title'>{ourTeam[1].title}</p>
              <p className='about'>{ourTeam[1].about}</p>
              <button id={ourTeam[1].id} onClick={() => setTeamTwo(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamTwo}
                onRequestClose={handleModalClose}
                contentLabel={'Rhoda Zokunwon Joine'}
              >
                <div className='modal-head-section'>
                  <h1>Rhoda Zokunwon Joine</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>
                <p>Rhoda Zokunwon Joine, was born in Monrovia, Liberia. She is the second of eight siblings. Ms. Joine studied Applied Sociology at Rosemont College. Upon graduation in 2008, she enrolled at Walden University to further her studies in pursue of graduate degree in Clinical Psychology. Ms. Rhoda works as a Family Therapist and Behavioral Specialist.</p>
                <p>She has three beautiful Children. Samantha, Matthew, and Gabriel. One of her passions includes working with children. She currently serves as the director of the Children’s Department at the Redeem Church of Christ, RCCG in Allentown, PA. She has over 14 years of Event planning experience.</p>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[2].img} alt={ourTeam[2].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[2].name}</h3>
              <p className='title'>{ourTeam[2].title}</p>
              <p className='about'>{ourTeam[2].about}</p>
              <button id={ourTeam[2].id} onClick={() => setTeamThree(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamThree}
                onRequestClose={handleModalClose}
                contentLabel={'Dr. Scott Allison'}
              >
                <div className='modal-head-section'>
                  <h1>Dr. Scott Allison</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>
                <p>Professionally, he has served as an optometrist at Lakeview Eye Physicians and Ossip Optometry + Ophthalmology, respectively. He has managed to hold several roles at Ossip Optometry + Ophthalmology which include the following: Managing Optometrist and Senior Medical Director. He currently serves as the Chief Optometric Officer.</p>
                <p>Dr. Alison was born and raised in Sullivan, Indiana He studied Biology at Butler and DePauw Universities while playing basketball at both schools. He holds a Doctoral Degree in Optometry from Illinois College of Optometry. Following few years of practice, he decided to go back and get his MBA which he completed from Anderson University.</p>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[3].img} alt={ourTeam[3].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[3].name}</h3>
              <p className='title'>{ourTeam[3].title}</p>
              <p className='about'>{ourTeam[3].about}</p>
              <button id={ourTeam[3].id} onClick={() => setTeamFour(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamFour}
                onRequestClose={handleModalClose}
                contentLabel={'Mr. Zeambo Dahnweih'}
              >
                <div className='modal-head-section'>
                  <h1>Mr. Zeambo Dahnweih</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>
                <p>A Liberian, Zeambo Dahnweih is the second of six siblings. He is married and has three beautiful daughters. After graduating from high school, Zeambo enrolled at African Bible College in Yekepa, Liberia.</p>
                <p>What was expected to be a four-year journey eventually became an eight-year adventure as the Liberian civil war often truncated classes beginning his junior year. Upon graduation in 1995, Zeambo assumed his first pastorate, serving as assistant pastor, and later pastor, of a 350-member refugee congregation, the Liberian Refugee Fellowship in Danane, Ivory Coast.</p>
                <p>However, this newfound profession was short lived as Zeambo immigrated to the United States a year and a half later to further his studies. As he pursued graduated studies in Communications at Governors State University in Illinois, Zeambo ministered as assistant pastor at the Riverdale Baptist Church in neighboring Riverdale, a position he held faithfully for seven years.</p>
                <p>Zeambo currently works and studies at Western Kentucky University in Bowling Green, Kentucky. He is a dual credit instructor, while at the same time a doctoral candidate in Educational Leadership.</p>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[4].img} alt={ourTeam[4].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[4].name}</h3>
              <p className='title'>{ourTeam[4].title}</p>
              <p className='about'>{ourTeam[4].about}</p>
              <button id={ourTeam[4].id} onClick={() => setTeamFive(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamFive}
                onRequestClose={handleModalClose}
                contentLabel={'Mr. Toby Eiler'}
              >
                <div className='modal-head-section'>
                  <h1>Mr. Toby Eiler</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>

                <p>Mr. Toby Eiler, was born in Valparaiso, IN and grew up in a very small town called Hebron, Indiana. During High School, he played baseball, basketball, and ran cross country. After graduating HS he went to college at Rose-Hulman in Terre Haute, IN to get his degree in Electrical Engineering.</p>
                <p>Mr. Eiler also played baseball for two fall seasons at Rose-Hulman. He also has an MBA from Anderson University where he graduated with honors with a 4.0 GPA.</p>
                <p>After graduating Rose, he worked for On Semiconductor as a field sales engineer. He then worked for ST Microelectronics as a Market Development Engineer. He now works for Analog Devices where he serves as Americas Automotive Sales Director.</p>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[5].img} alt={ourTeam[5].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[5].name}</h3>
              <p className='title'>{ourTeam[5].title}</p>
              <p className='about'>{ourTeam[5].about}</p>
              <button id={ourTeam[5].id} onClick={() => setTeamSix(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamSix}
                onRequestClose={handleModalClose}
                contentLabel={'Mr. Emmanuel Miantona'}
              >
                <div className='modal-head-section'>
                  <h1>Mr. Emmanuel Miantona</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>

                <p>Mr. Emmanuel Miantona was born in Ganta, Nimba County, Liberia. He grew up in Saclepea, Nimba County. A small town located in the northern part of Liberia. He attended the United Liberia Inland Church Academy (ULICA) for part of his primary education.</p>
                <p>He later moved to Monrovia to continue his primary education, but that didn&rsquo;t happen due to the civil unrest that broke up in the early 1990s. This unrest led to his family resettling in the Ivory Coast for several years until he and his family were granted the opportunity to travel to the United States on a resettlement program.</p>
                <p>Upon his arrival in the U.S, they settled in Southwest Philadelphia. He enrolled at the John Bartram high school and later enrolled at Southside Baptist Academy where he completed his 9th and 10th grade education. During that time, his parents decided to moved to Brooklyn Park, MN. He then enrolled at Park Center Senior High school where he completed his primary education in 2002.

To further his education, he enrolled at Trinity Christian College where he graduated with a BA in Business in 2006.</p>
                <p>Mr. Miantona currently works at the University of Minnesota Medical Center as a Laboratory Tech and is currently working on a 2nd Bachelors degree in pursuit of becoming a health care professional.</p>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[6].img} alt={ourTeam[6].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[6].name}</h3>
              <p className='title'>{ourTeam[6].title}</p>
              <p className='about'>{ourTeam[6].about}</p>
              <button id={ourTeam[6].id} onClick={() => setTeamSeven(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamSeven}
                onRequestClose={handleModalClose}
                contentLabel={'Pah K Suku Jr'}
              >
                <div className='modal-head-section'>
                  <h1>Pah K Suku Jr</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>
                <p>Pah K Suku Jr, born in Liberia, West Africa. Currently resides in Maryland, USA. Works with the Metropolitan Police Department in Washington, DC as a Sergeant and also pastors a small non-denomination church, Freedom Christian Fellowship Ministries International, in Landover Maryland. He holds double degrees in Criminology and Criminal Justice and Sociology from the University of Maryland College Park. He&rsquo;s married to Frances Woods-Suku with four children; Hazel, Wendy-estelle and Joshua.</p>

              </Modal>
            </li>
            <li>
              <Image src={ourTeam[7].img} alt={ourTeam[7].name} width={150} height={150} />
              <h3 className='name'>{ourTeam[7].name}</h3>
              <p className='title'>{ourTeam[7].title}</p>
              <p className='about'>{ourTeam[7].about}</p>
              <button id={ourTeam[7].id} onClick={() => setTeamEight(true)} className='btn btn-primary'>Learn more</button>
              <Modal
                isOpen={teamEight}
                onRequestClose={handleModalClose}
                contentLabel={'Mr. Matthew Peelor'}
              >
                <div className='modal-head-section'>
                  <h1>Mr. Matthew Peelor</h1>
                  <button className='btn-modal-close' onClick={handleModalClose}>x</button>
                </div>
                <p>Mr. Matthew Peelor was born in Reading, PA and grew up in the suburbs of Pittsburgh. In 10th grade he transitioned to a boarding school, The Linsly School, to finish High School where he played golf and ice hockey. </p>
                <p>After graduating high school he moved to Florida to attend Florida Gulf Coast University (FGCU). In 2010, Matt graduated with his B.S. in Marketing. </p>
                <p>In 2012, Matt was accepted at Stetson University College of Law where he graduated with his Juris Doctorate (J.D.) in 2015.  While not practicing law, Matt is passionate about helping others and strives to make a difference in other people&rsquo;s lives through his leadership at Charles Schwab & Co. </p>
                <p>In his spare time, Matt enjoys spending time with his wife of almost 2 years, Lexie, and their dog, Lilly. He is an avid golfer and mountain biker, and has recently gotten back into off-road motorcycle riding after a 20-year hiatus.</p>

              </Modal>
            </li>
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
