
import Head from 'next/head'
import PageHero from '../components/PageHero'

const WomenMinistries = () => {
    <Head>
        <title>How you can help</title>
        <meta name='keywords' content='How you can help' />
    </Head>
    return (
        <>
            <PageHero title='How you can help' />
            <div className='container'>
                <h2 className='page-title'>You Can Make A Difference</h2>
                <p>There are many ways you could get involved. Below are some ways you could help make a difference in the lives of the underprivileged and disadvantaged children in Liberia: Follow our progress on our website, Facebook, Instagram and Twitter. Help us spread the word.</p>
                <h3 className='page-sub-title'>Make BKS&#8482; Foundation, Inc. the Charity of Your Choice</h3>
                <p>Talk to your School, Collge, Church, Univeristy and Company to select BKS&#8482; Foundation, Inc. as their charity of choice for donations. To promote our partnership, we will provide you with our organization&rsquo;s logo and merchandise.</p>
            </div>
        </>
    )
}

export default WomenMinistries;