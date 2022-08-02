
import Head from 'next/head'

const Contact = () => {
    <Head>
        <title>About</title>
        <meta name='keywords' content='contact us' />
    </Head>
    return (
        <div className='container'>
            <h1 className='page-title'>Contact Us</h1>
            <p> Please fill out this form to contact us with questions, prayer request and other needs</p>
            <form action='POST' data-netlify='true'>
                <div className='fields'>
                    <div className='field'>
                        <input type='text' name='name' id='name' placeholder='Your name' required />
                    </div>
                    <div className='field'>
                        <input type='text' name='email' id='email' placeholder='Your email' required />
                    </div>
                    <div className='field'>
                        <textarea rows='7' name='message' id='message' placeholder='Your message' required></textarea>
                    </div>
                    <div className='field'>
                        <div data-netlify-recaptcha='true'></div>
                    </div>
                </div>
                <ul className='actions'>
                    <li>
                        <input type='submit' value='Send message' className='btn btn-primary' />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Contact;