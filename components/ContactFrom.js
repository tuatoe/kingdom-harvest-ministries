import React from 'react'

function ContactFrom({ content }) {
    return (
        <>
            <p>{content}</p>
            <form action='POST' data-netlify='true' name='bks-contact'>
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
        </>
    )
}



export default ContactFrom;