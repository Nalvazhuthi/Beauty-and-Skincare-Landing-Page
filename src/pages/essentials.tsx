import image1 from "../assets/images/essentials/01.png"
import image2 from "../assets/images/essentials/02.png"
import image3 from "../assets/images/essentials/03.png"
import image4 from "../assets/images/essentials/04.png"
import { ArrowSvg } from "../assets/svg/exportSvg"

const Essentials = () => {
    return (
        <div className='essentials-container section'>
            <div className="image-wrapper">
                <div className="image-container"><img src={image1} alt="" /></div>
                <div className="image-container"><img src={image2} alt="" /></div>
                <div className="image-container"><img src={image3} alt="" /></div>
                <div className="image-container"><img src={image4} alt="" /></div>
            </div>
            <div className="essentials-wrapper">
                <div className="header">
                    SKINCARE · ESSENTIALS
                </div>
                <div className="sub-heading">
                    Love yourself a <br /> little more.
                </div>

                <div className="buy">
                    Buy Products
                    <div className="icon"><ArrowSvg /></div>
                </div>
            </div>
        </div>
    )
}

export default Essentials


