function Hero() {
    return (
        <>
            <div className="hero" style={{width: '80%', margin: 'auto'}}>
                <div className="heroCaption">
                    <h1 className="heroTitle">Compare & book ride-hailing providers</h1>
                    <p className="heroSubtitle">Save money and time with WhichrRide.<br />Think Compare the market but for taxis.</p>
                </div>
                {/* <div className="heroImage"> */}
                <img src="./heroImage.png" alt="heroImage"/>
                {/* </div> */}
            </div>
        </>
    )
}
export default Hero