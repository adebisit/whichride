import { useRef, useState } from "react"

function SingUp() {
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)

    const onChange = (e) => {
        setEmail(e.target.value)
        setIsEmailValid(true)
    }

    const subscribe = (e) => {
        e.preventDefault()
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const emailValid = email.match(validRegex) !== null
        setIsEmailValid(emailValid)
        if (emailValid) {
            alert('Subscribed')
            setEmail("")
        }
    }

    return (
        <>
            <div className="signUpPageContainer" style={{maxWidth: '400px', margin: 'auto'}}>
                <div className="textCenter">
                    <h1 className="title">Sign up to our beta form</h1>
                </div>
                <div className="textCenter" style={{marginBottom: '20px'}}>
                    <p className="subtitle">
                        Sign up to our mailing list to find out more information and keep up to date about our activities
                    </p>
                </div>
                <form onSubmit={subscribe}>
                    <div className="formControl">
                        <input
                            id="email"
                            name="email"
                            type='text'
                            className={isEmailValid === true ? '' : 'inputError' }
                            value={email}
                            placeholder='email'
                            onChange={onChange}
                        />
                        <button
                            id="subscribeButton"
                            type="submit"
                        >Subscribe</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SingUp