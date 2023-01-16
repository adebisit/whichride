import mapCarSvg from "../assets/map_car-dealer.svg"
import byteSizeOptionSvg from "../assets/bytesize_options.svg"
import antDesignSafetySvg from "../assets/ant-design_safety-outlined.svg"
import fastClockSvg from "../assets/mdi_clock-fast.svg"

function WhyUs() {
  return (
    <div className="" style={{padding: '80px', position: 'relative', paddingBottom: '239px'}}>
        <div style={{
            position: "absolute",
            width: '50%',
            height: '100%',
            backgroundColor: '#A792FE12',
            top: '0',
            left: '0',
            zIndex: '-1',
        }}></div>
        <div className="textCenter">
            <h1 className="pageTitle">Why Whichride</h1>
        </div>
        {/* <div className="cards">
            <div>
                <div className="card">
                    <div className="svgContainer" style={{ backgroundColor: '#56CCF2'}}>
                        <img src={mapCarSvg} alt="mapCarSvg"/>
                    </div>
                    <h6 className="title">More Choices</h6>
                    <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
                </div>
                <div className="card">
                    <div className="svgContainer" style={{ backgroundColor: '#F2C94C'}}>
                        <img src={fastClockSvg} alt="fastClockSvg"/>
                    </div>
                    <h6 className="title">More Choices</h6>
                    <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
                </div>
            </div>
            <div>
                <div className="card">
                    <div className="svgContainer" style={{ backgroundColor: '#6FCF97'}}>
                        <img src={antDesignSafetySvg} alt="antDesignSafetySvg"/>
                    </div>
                    <h6 className="title">More Choices</h6>
                    <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
                </div>
                <div className="card">
                    <div className="svgContainer" style={{ backgroundColor: '#BB6BD9'}}>
                        <img src={byteSizeOptionSvg} alt="byteSizeOptionSvg"/>
                    </div>
                    <h6 className="title">More Choices</h6>
                    <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
                </div>
            </div>
        </div> */}
        <div className="cards">
            <div className="card">
                <div className="svgContainer" style={{ backgroundColor: '#56CCF2'}}>
                    <img src={mapCarSvg} alt="mapCarSvg"/>
                </div>
                <h6 className="title">More Choices</h6>
                <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
            </div>
            <div className="card">
                <div className="svgContainer" style={{ backgroundColor: '#F2C94C'}}>
                    <img src={fastClockSvg} alt="fastClockSvg"/>
                </div>
                <h6 className="title">More Choices</h6>
                <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
            </div>
            <div className="card">
                <div className="svgContainer" style={{ backgroundColor: '#6FCF97'}}>
                    <img src={antDesignSafetySvg} alt="antDesignSafetySvg"/>
                </div>
                <h6 className="title">More Choices</h6>
                <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
            </div>
            <div className="card">
                <div className="svgContainer" style={{ backgroundColor: '#BB6BD9'}}>
                    <img src={byteSizeOptionSvg} alt="byteSizeOptionSvg"/>
                </div>
                <h6 className="title">More Choices</h6>
                <p className="subtitle">WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.</p>
            </div>
        </div>
    </div>
  )
}
export default WhyUs