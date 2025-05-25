import React from 'react'

const Contact = () => {
    return (
        <div className='contact-container section'>
            <div className="header">Subscribe to our newsletter</div>
            <div className="message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum facere quisquam dolorum cumque natus ducimus labore, minima magnam! Facere, aliquam.</div>

            <div className="send-messgae">
                <input type="text" placeholder='Enter your email' />
                <button>sign up</button>
            </div>
            <div className="signup-messgae">By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</div>

        </div>
    )
}

export default Contact