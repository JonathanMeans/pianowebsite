import { Component } from "react";
import "./Curriculum.css"
import "./mainPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class Curriculum extends Component {
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
                        <h1>Curriculum</h1>
                    </div>
                </div>
                <div className="innerMainDivs lowerLeftDiv">
                </div>
                {/* below is the main body */}
                <div className="innerMainDivs rightDivs lowerRightDiv">
                    <h3 className="curTitles all">Overview</h3>
                    <p className="all">I am a registered Suzuki piano teacher with training in developing young musicians. This teaching philosophy asserts that every child can become an excellent musician, just as every child becomes excellent at speaking their mother tongue. We emphasize frequent exposure to great music and musicians, and close support from both parent and teacher.</p>
                    <h3 className="curTitles all">Theory</h3>
                    <p className="all">For the first volume of Suzuki, the only concepts we will cover are motives and phrases, the building blocks of melody. From these, we will be able to talk about the simple binary and ternary forms found near the end of Volume 1. As the music becomes more harmonically varied in Volume 2, we will learn how composers use cords to structure their music and build tension. The student will also begin to discover the patterns of major and minor scales through a guided progression.</p>
                    <h3 className="curTitles all">Technique</h3>
                    <p className="all">The Suzuki program is structured so as to gradually introduce the hand and arm to new motions through a progression of real music. At the end of the first volume, the student will be able to confidently play short runs, intermingled legato and staccato articulations, chords, Alberti bass, and large skips, all with excellent dynamic control and sophisticated balance.</p>
                    <h3 className="curTitles all">Musicality</h3>
                    <p className="all">Once the student has confidence in his hands, they will learn the primary idea of musical playing: never play something the same way twice! For the first volume, the student will be at liberty to explore this idea in nearly any way they choose, so as to develop a habit of thinking like this. In the second volume, we will start to look at this idea in context, and learn how we can shape it to the surrounding music.</p>
                    <h3 className="curTitles all">Collaboration</h3>
                    <p className="all">I will recommend some duet music as supplement once the student reaches a certain maturity. In a perfect world, I could find a partner of similar skill for each student. It is more likely that I will fill in as a duet partner.</p>
                    <h3 className="curTitles all">Repertoire</h3>
                    <p className="all">From halfway through Book 2, we will be studying real music from the Western canon, and your child will be ready to handle it! In addition to what we play at the piano, I like to supplement with extra listening assignments. For example: "Please listen to recordings of Rachmaninoff's C# minor Prelude by Giles and Kissin. Next week, let's talk about which you liked best." This not only exposes the student to more piano music, but also encourages independent musical thought.</p>
                    <h3 className="curTitles all">Performance</h3>
                    <p className="all">The student is encouraged to give a solo recital at the end of each Suzuki book. In addition, there will be one or two studio recitals throughout the year. These are a great opportunity for us all to come together and share music with each other.</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Curriculum;
