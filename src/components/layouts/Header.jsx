function Header() {
    return (
        <header className="header">
            <div className="companyLogo">
                <img src="./logo.svg" width="175px" alt="which-ride"/>
            </div>
            <ul className="navbar">
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
        </header>
    )
}
export default Header