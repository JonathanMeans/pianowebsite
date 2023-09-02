import { Component } from "react";
import "./Curriculum.css"
import "./mainPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import logoImage from "./77143_Jon MeansPiano Studio_Flat_HP_05.png";

class StudioPolicies extends Component {
    render() {
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
                                <Link to="/">Home</Link>
                                <Link to="/Curriculum">Curriculum</Link>
                                <Link to="/StudioPolicies">Studio Policies</Link>
                                <Link to="/FAQs">FAQs</Link>
                                <Link to="/FreeLesson">Try a free lesson</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="lowerHeadDiv">
                        <h1>Studio Policies</h1>
                    </div>
                </div>
                <div className="innerMainDivs lowerLeftDiv">
                </div>
                {/* below is the main body */}
                <div className="innerMainDivs rightDivs lowerRightDiv">
                    <h3 className="curTitles all">Arrival Time</h3>
                    <p className="all">Please arrive a few minutes early so that we can start on time. If you arrive late I'II let the lesson run a little late to make up for it when I can, but not when there is a student directly after you.</p>
                    <h3 className="curTitles all">Cancellation</h3>
                    <p className="all">If you give at least 24 hours notice, or an emergency happens (including snow or other inclement weather), I will happy to either refund or reschedule missed lessons. You will have 2 months from the date of the missed lesson to reschedule.</p>
                    <h3 className="curTitles all">Payment</h3>
                    <p className="all">Please have the payment for the month ready at the first lesson of the month. I accept cash or check.</p>
                    <h3 className="curTitles all">Fingernails</h3>
                    <p className="all">Long fingernails interfere with proper technique. Therefore, please arrive with nails trimmed.</p>
                    <h3 className="curTitles all">Student Performances</h3>
                    <p className="all">We will have student recitals two or three times a year. Participation will never be mandatory, but is strongly encouraged.</p>
                    <h3 className="curTitles all">Rates</h3>
                    <p className="all">I will never increase my rates for current students.</p>
                    <h3 className="curTitles all">Music Selection</h3>
                    <p className="all extraSpace">If you are unhappy with the selection you are working on, please let me know. There is too much amazing music out there to slave away over something dull</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default StudioPolicies;
