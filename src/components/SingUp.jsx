import { useState } from "react"

function SingUp() {
    const [email, setEmail] = useState('')

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
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="formControl">
                        <input
                            id="email"
                            name="email"
                            type='text'
                            value={email}
                            placeholder='email'
                            onChange={e => setEmail(e.target.value)}
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