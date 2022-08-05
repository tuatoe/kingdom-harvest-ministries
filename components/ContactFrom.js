import React from 'react'

function ContactFrom({ content }) {
    return (
        <>
            <p>{content}</p>
            {/* <form action='POST' data-netlify='true' name='bks-contact'>
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
                    <div netlify-recaptcha></div>
                </div>
                <ul className='actions'>
                    <li>
                        <input type='submit' value='Send message' className='btn btn-primary' />
                    </li>
                </ul>
            </form> */}
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </>
    )
}



export default ContactFrom;