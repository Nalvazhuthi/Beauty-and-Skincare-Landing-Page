import highlight1 from "../assets/images/highlights/highlights-1.png"
import highlight2 from "../assets/images/highlights/highlights-2.png"

const Highlights = () => {
    return (
        <div className='highlights-container section'>
            <div className="highlights-header">
                AGE IS JUST A NUMBER. <br /> ISN’T IT YOU DESERVE TO <br />GLOW MORE AND MORE.
            </div>
            <div className="highlights-products">
                <div className="highlights-wrapper">
                    <div className="image">
                        <img src={highlight1} alt="No highlists" />
                    </div>
                    <div className="shop-btn">SHOP NOW</div>
                </div>
                <div className="highlights-wrapper">
                    <div className="image">
                        <img src={highlight2} alt="No highlists" />
                    </div>
                    <div className="shop-btn">SHOP NOW</div>
                </div>
            </div>
        </div >
    )
}

export default Highlights