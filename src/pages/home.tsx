import { useState } from "react";
import bgImage from "../assets/images/hero/hero-bg-image.png";
import { CartSvg, LogoSvg } from "../assets/svg/exportSvg";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const delay = 800;

  const scrollToSection = (id: string) => {
    const scrollWithOffset = () => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -100; // Negative to scroll *above* the element
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => {
        scrollWithOffset();
      }, delay);
    } else {
      scrollWithOffset();
    }
  };
  return (
    <div className="home-container section">
      <div className="home-wrapper">
        <div className="bg-image">
          <img src={bgImage} alt="No image" />
        </div>
        <div className="header-wrapper">
          <div className="header">
            <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
              <button className="nav" onClick={() => scrollToSection("team")}>
                Team
              </button>
              <button
                className="nav"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
              <button className="nav" onClick={() => scrollToSection("policy")}>
                Policy
              </button>
            </div>
            <div className="logo">
              <LogoSvg />
            </div>
            <div className="sales-wrapper">
              <button
                className="sales"
                onClick={() => scrollToSection("onSales")}
              >
                On Sales
              </button>
              <button
                className="sales"
                onClick={() => scrollToSection("buyProducts")}
              >
                Buy Products
              </button>
              <button className="sales" onClick={() => scrollToSection("cart")}>
                <CartSvg />
              </button>
            </div>

            <div
              className={`hamburger ${menuOpen && "open"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
    </div>
  );
};

export default Home;
