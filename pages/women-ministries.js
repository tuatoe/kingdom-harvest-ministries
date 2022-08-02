
import Head from 'next/head'
import Image from 'next/image'
// import img1 from 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80'
const WomenMinistries = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='women ministries' />
    </Head>
    return (
        <div className='container'>
            <h1 className='page-title'>Women ministries</h1>
            <p>
                Women play a big role in our communities and face so many challenges. The women’s ministries partners with women to experience God at a new level of encounter, engagement, and commitment to do exploits for God and engage in the kingdom agenda on the home and community fronts and to involvement in local and global initiatives.
            </p>
            <p>Helping women discover their
            purpose and destiny and walking in the abundant life provided in Jesus Christ is the core of the women’s
            ministries. Contact us to join our monthly Zoom meetings.</p>
            {/* <Image width={100} height={100} className='img-responsive' src={img1} alt='women hugging with eye close' /> */}
        </div>
    )
}

export default WomenMinistries;