import { useRef, useState } from 'react'
import iconTwitter from '../assets/icon-twitter.svg'
import iconLinkedin from '../assets/icon-linkedin.svg'
import iconFrontendMentor from '../assets/icon-frontend-mentor.svg'
import iconGithub from '../assets/icon-github.svg'
import patternRings from '../assets/pattern-rings.svg'

export default function Contact() {
    const formRef = useRef(null)
    const emailRef = useRef(null)
    const [validated, setValidated] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsEmailValid(emailRef.current.validity.valid)
        if (!formRef.current.checkValidity()) {
            setValidated(true)
            formRef.current.reportValidity()
            return
        }

        alert('correo enviado 🚀')
    }
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__info">
                    <h2>Contact</h2>
                    <p>
                        I would love to hear about your project and how I could help.
                        Please fill in the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>

                <form 
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    noValidate
                    className={validated ? 'contact__form was-validated' : 'contact__form'}
                >
                    <div className="form-group">
                        <input type="text" is='name' placeholder="NAME" required />
                    </div>
                    <div className="form-group">
                        <div className='input-wrapper'>
                            <input 
                                ref={emailRef} 
                                type="email"
                                id='email' 
                                placeholder="EMAIL" 
                                required
                            />
                            {validated && !isEmailValid && (
                                <>
                                <span className="error-icon">!</span>
                                <span className="error-text">Sorry, invalid format here</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="MESSAGE" rows="4" id='message' required />
                    </div>

                    <button type="submit" className="btn-submit">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
            <div className="rings">
                <img src={patternRings} className="rings-img__footer" />
            </div>
            <hr className='divider-footer'/>
            <div className="contact__footer container">
                <p className="brand">adamkeyes</p>

                <div className="social-networks">
                    <img src={iconGithub} alt="github" />
                    <img src={iconFrontendMentor} alt="frontend-mentor"/>
                    <img src={iconLinkedin} alt="linkedin"/>
                    <img src={iconTwitter}  alt="twitter"/>
                </div>
            </div>
        </section>
    )
}