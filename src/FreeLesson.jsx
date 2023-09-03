import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import logoImage from "./77143_Jon MeansPiano Studio_Flat_HP_05.png";
import MobileMenu from "./MobileMenu";
import "./Curriculum.css"
import "./mainPage.css";

class FreeLesson extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isMobileMenuOpen: false, // Initial state: mobile menu is closed
      };
    }
  
    // Function to toggle the mobile menu
    toggleMobileMenu = () => {
      this.setState((prevState) => ({
        isMobileMenuOpen: !prevState.isMobileMenuOpen,
      }));
    };
    render() {
        const { isMobileMenuOpen } = this.state;
        return (
            <div className="mainDiv">
                
                <div className="innerMainDivs rightDivs upperRightDiv">
                    <div className="upperHeadDiv">
                        <div className="logoDiv"></div>
                        <div className="navBarDiv">
                            <ul className="navBarList">
                                <Link className="navLink" to="/">Home</Link>
                                <Link className="navLink" to="/Curriculum">Curriculum</Link>
                                <Link className="navLink" to="/StudioPolicies">Studio Policies</Link>
                                <Link className="navLink" to="/FAQs">FAQs</Link>
                                <Link className="navLink" to="/FreeLesson">Try a free lesson</Link>
                            </ul>
                        </div>
                        <div
                            className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
                            onClick={this.toggleMobileMenu}
                          >
                            ☰
                        </div>
                        <MobileMenu
                          isOpen={isMobileMenuOpen}
                          toggleMenu={this.toggleMobileMenu}
                        />
                    </div>
                    <div className="lowerHeadDiv">
                        <div className="innerMainDivs upperLeftDiv">
                            <img className="logoImg" src={logoImage} alt="Logo" />
                        </div>
                        <h1>Free Lesson</h1>
                    </div>
                </div>
                <div className="innerMainDivs lowerLeftDiv">
                </div>
                {/* below is the main body */}
                <div className="innerMainDivs rightDivs lowerRightDiv">
                    <div id="lessonDiv">
                        <h1 className="lessonTit">For a free lesson email me at jetmeans@gmail.com!</h1>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default FreeLesson;
