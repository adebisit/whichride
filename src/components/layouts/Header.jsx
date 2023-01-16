// import { slide as Menu } from 'react-burger-menu'
// import '../../burgerMenuStyle.css'

import { useState } from "react"

function Header() {
    const [menuVisibility, setMenuVisibility] = useState(false)

    return (
        <header className="header">
            <div className="companyLogo">
                <img src="./logo.svg" width="150px" alt="which-ride"/>
            </div>
            <div>
                <button id="expandMenu" onClick={() => setMenuVisibility(prev => !prev)}>
                    {menuVisibility ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
                <ul className={`navbar ${menuVisibility ? 'show' : 'hide'}`}>
                    <li className="navbarItem">
                        <a href="/">The App</a>
                    </li>
                    <li className="navbarItem">
                        <a href="/">About Us</a>
                    </li>
                    <li className="navbarItem">
                        <a href="/">Get In Touch</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header