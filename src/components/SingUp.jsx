import { useState } from "react"

function SingUp() {
    const [email, setEmail] = useState('')

    return (
        <>
            <div style={{width: '75%', margin: 'auto'}}>
                <div className="textCenter" style={{ padding: '0 180px' }}>
                    <h1 className="pageTitle">
                    Sign up to our beta form
                    </h1>
                </div>
                <div className="textCenter" style={{ padding: '0 270px' }}>
                    <p className="pageSubtitle">
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