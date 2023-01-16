function HowTo() {
  return (
    <div style={{width: '75%', margin: 'auto'}}>
        <div className="textCenter" style={{ padding: '0 180px' }}>
            <h1 className="pageTitle">
                Whichride brings together multiple ride hailing providers and local taxi firms in one app
            </h1>
        </div>
        <div className="textCenter" style={{ padding: '0 270px' }}>
            <p className="pageSubtitle">
                Allowing riders to select the provider that offers the best price, service or travel time, then seamlessly book within the app
            </p>
        </div>
        <div className="" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <div>
                <img src="./iPhoneX2.png" alt="iPhoneX2" />
            </div>
            <ul className="instructionList">
                <li className="instructionItem active">
                    <div>Step 1</div>
                    <div>
                        <p className="title">Enter Location</p>
                        <p className="subtitle">Enter your destination to see a list of taxi providers near you.</p>
                    </div>
                </li>
                <li className="instructionItem">
                    <div>Step 2</div>
                    <div>
                        <p className="title">Find the perfect ride</p>
                        <p className="subtitle">Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars.</p>
                    </div>
                </li>
                <li className="instructionItem">
                    <div>Step 2</div>
                    <div>
                        <p className="title">Pay and Save</p>
                        <p className="subtitle">Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
export default HowTo