import { useState } from "react"
import bgImage from "../assets/images/hero/hero-bg-image.png"
import { CartSvg, LogoSvg } from "../assets/svg/exportSvg"

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='home-container section'>
            <div className="sales-header">Free shipping on all orders</div>
            <div className="home-wrapper">
                <div className="bg-image">
                    <img src={bgImage} alt="No image" />
                </div>
                <div className="header">

                    <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
                        <div className="nav">Team</div>
                        <div className="nav">Contact</div>
                        <div className="nav">Policy</div>
                    </div>
                    <div className="logo"><LogoSvg /></div>
                    <div className="sales-wrapper">
                        <div className="sales">On Sales</div>
                        <div className="sales">Buy Products</div>
                        <div className="sales"><CartSvg /></div>
                    </div>

                    <div className={`hamburger ${menuOpen && "open"}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <div className={`handburger-option ${menuOpen && "open"}`}>
                        <div className="nav">Team</div>
                        <div className="nav">Contact</div>
                        <div className="nav">Policy</div>
                        <div className="sales">On Sales</div>
                        <div className="sales">Buy Products</div>
                        <div className="sales">Cart</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
