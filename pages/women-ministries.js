
import Head from 'next/head'
import PageHero from '../components/PageHero'

const Giving = () => {
    <Head>
        <title>Women ministries</title>
        <meta name='keywords' content='Women ministries' />
    </Head>
    return (
        <>
            <PageHero title='Women ministries' />
            <div className='container'>
                <h2 className='page-title'>Providing educational opportunities</h2>
                <p>Women play a big role in our communities and face so many challenges. The

women’s ministries partners with women to experience God at a new level of encounter, engagement,

and commitment to do exploits for God and engage in the kingdom agenda on the home and

community fronts and to involvement in local and global initiatives. Helping women discover their

purpose and destiny and walking in the abundant life provided in Jesus Christ is the core of the women’s

ministries. Contact us to join our monthly Zoom meetings.</p>
            </div>
        </>
    )
}

export default Giving;