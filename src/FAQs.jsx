import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import logoImage from "./77143_Jon MeansPiano Studio_Flat_HP_05.png";
import MobileMenu from "./MobileMenu";
import "./Curriculum.css"
import "./mainPage.css";

class FAQs extends Component {
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
                <div className="innerMainDivs upperLeftDiv">
                    <img className="logoImg" src={logoImage} alt="Logo" />
                </div>
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
                        <h1>FAQs</h1>
                    </div>
                </div>
                <div className="innerMainDivs lowerLeftDiv">
                </div>
                {/* below is the main body */}
                <div className="innerMainDivs rightDivs lowerRightDiv FAQMain">
                    <h3 className="curTitles all">Is it okay to buy a keyboard instead of an acoustic piano? What kind of keyboard should I get?</h3>
                    <p className="all FAQList">Yes, electronic pianos can be wonderful. However, not all are made the same. Here are some key features to keep in mind when shopping for your instrument:</p>
                    <ul className="all FAQList">
                        <li className="all FAQList">Number of keys: A full size piano has 88. Most keyboards will come with 66, 72, or 88. 72 keys will be enough for the first few years of lessons. Please try to avoid anything with just 66 keys. as we will quickly run out of room.</li>
                        <li className="all FAQList">Weighted keys: Keyboards can have unweighted, semi-weighted, or fully-weighted keys. Weighted keys are important for developing the right touch and dynamic control.
                            Even fully-weighted keyboards tend to have a lighted touch than my piano which we'll use for lessons. Practicing on an instrument with anvthing less will lead to frustration in lessons, as you struggle to get adequate sound.</li>
                        <li className="all FAQList">Pedals: Most pianos come with three pedals. Some uprights only have two. As long as your keyboard will let you attach a single pedal, that will be all we use for quite a while.</li>
                    </ul>
                    <h3 className="curTitles all">How long will it take to learn my favorite song?</h3>
                    <p className="all">Every student develops differently. So much depends on how much you practice. More importantly, how well you practice. I do not use deadlines or predefined expectations in my teaching. If your goal is to train up to Moonlight Sonata or Für Elise, we can do that, but I will not tell you how long it should take.</p>
                    <h3 className="curTitles all">Is my child old enough to start piano lessons?</h3>
                    <p className="all extraSpaceFAQ">Every child is different. How long does it take a child to learn to walk? This happens anywhere from 9 to 17 months! This is a very broad range of time for someone so young. If your child knows the alphabet, can count to 10, and can follow basic instructions, let's set up a free initial consultation.</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default FAQs;