import { Component } from "react";
import "./Curriculum.css"
import "./mainPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class FreeLesson extends Component {
    render() {
        return (
            <div className="mainDiv">
                <div className="innerMainDivs upperLeftDiv">
                    <img className="logoImg" src="src/77143_Jon MeansPiano Studio_Flat_HP_05.png" />
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
