
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
// import img1 from 'https://images.unsplash.com/photo-1515302569996-e150029e73fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
const Giving = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='Giving' />
    </Head>
    return (
        <div className='container'>
            <h1 className='page-title'>Giving</h1>
            <p>When you give to Kingdom Harvest Ministries your Donatins/gifts help us fulfill the mission to take the gospel to the ends of the earth. </p>
            <p>As a result of your generosity, we are able to train laborers in the harvest field, lives can be transformed, individuals, families, can live in their destinies, communities can experience the kingdom of God, the power of sin and wickedness can be destroyed in the lives of people.</p>
            {/* <Image width={100} height={100} className='img-responsive' src={img1} alt='little boy' /> */}
            <h3 className='page-sub-title'> Accountability Statement</h3>
            <p>
                It is the policy of Kingdome Harvest Ministries that all funds donated to the
                ministry will be allocated for the PRIMARY purpose of reaching the lost. General operations costs and
                human resources cost shall be under the strict scrutiny of overseers to deter greed and
                mismanagements.
          </p>
            <p>There is no intention for Kingdom Harvest Ministries Staff to live fancy, extravagant
            lives, and purchase mansions, luxurious cars, yachts, and airplanes while poverty is rampant around the
            world.</p>
            <p> The financial goal is to be accountable to God and man and that all staff will live in modesty,
                simplicity and contentedness as they function in their roles as leaders of the ministries they oversee.</p>
            <h3 className='page-sub-title'>NOTE</h3>
            <p>
                All funds donated are non-refundable

                Give today. You may mail gifts (cash or checks) to our address below:
                Kingdom Harvest Ministries
                Attn:Giving
</p>
            <ul className='unordered-list-style'>
                <li><strong>Address:</strong> Kingdom Harves Ministries P.O. Box 40026 Blaine MN 55449</li>
                <li><strong>Cashapp:</strong> $kingdomharvestnow</li>
                <li><Link rel="noreferrer" href='https://paypal.me/KingdomHarvestNow?country.x=US&amp;locale.x=en_US'>PayPal</Link></li>
            </ul>

            <p>
                Make checks payable to Kingdom Harvest Ministries. Please indicate “General Fund/Donation” or
                “indicate intended use in the memo line.
</p>
        </div>
    )
}

export default Giving;