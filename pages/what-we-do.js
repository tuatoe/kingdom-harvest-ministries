
import Head from 'next/head'
import PageHero from '../components/PageHero'

const Giving = () => {
    <Head>
        <title>What we do</title>
        <meta name='keywords' content='what we do' />
    </Head>
    return (
        <>
            <PageHero title='What we do' />
            <div className='container'>
                <h2 className='page-title'>Providing educational opportunities</h2>
                <p>The BKS&#8482; Foundation, Inc. provides scholarships to underprivileged and disadvantaged students to attend all major universities and colleges in Liberia. BKS&#8482; Foundation is also partnering with some major high schools in the rural parts of the country to provide tuition assistance to students who meet its scholarship requirements. In addition to the aforementioned, we provide school supplies (notebooks, pencil, backpacks, crayons, rulers, etc.) to the disadvantaged students in Liberia.</p>
                <p>BKS&#8482; Legacy Scholarships are awarded to students from the Buu-Yao District who are currently enrolled at the following institutions: the Nimba County Community College, University of Liberia, Liberia International Christian College, Starz College of Science and Technology, and the United Methodist University.</p>
                <p>Qualified students from the Buu-Yao District who are intending to enroll at these universities will be awarded The BKS&#8482; Legacy Scholarship. The Scholarship recipients are expected to complete annual service projects with young children and demonstrate leadership potential through involvement in school or community activities.</p>
                <p>Buu-Yao students at all levels of academic achievements may qualify for this grant. The selection process highlights an applicant&rsquo;s attitude toward education, willingness to provide service to children, and financial need.</p>
                <h3 className='page-sub-title'>Our Long-term Goal</h3>
                <p>We are committed to providing educational opportunities to the children of Liberia, regardless of the constraints, while teaching them the word of God. Our goal is to ensure that the children of the rural parts of Liberia receive quality education in safe, constructive, and well-staffed educational facilities.</p>
                <p>We will ensure that these future leaders are not individually, regionally or collectively left out of this fundamental human right, whether as a result of gender inequality, geographical location, policy, financial policy, human resources, or any other limitations.</p>
            </div>
        </>
    )
}

export default Giving;