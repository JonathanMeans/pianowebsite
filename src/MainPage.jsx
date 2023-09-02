import { Component } from "react";
import "./mainPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class MainPage extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="innerMainDivs upperLeftDiv">
          <img className="logoImg" src="./77143_Jon MeansPiano Studio_Flat_HP_05.png" />
        </div>
        <div className="innerMainDivs rightDivs upperRightDiv">
          <div className="upperHeadDiv">
            <div className="logoDiv"></div>
            <div className="navBarDiv">
              <ul className="navBarList">
                <Link to="/">Home</Link>
                <Link to="/curriculum">Curriculum</Link>
                <Link to="/StudioPolicies">Studio Policies</Link>
                <Link to="/FAQs">FAQs</Link>
                <Link to="/FreeLesson">Try a free lesson</Link>
              </ul>
            </div>
          </div>
          <div className="lowerHeadDiv">
            <h1>Piano Lessons</h1>
          </div>
        </div>
        <div className="innerMainDivs lowerLeftDiv">
        </div>
        {/* below is the main body */}
        <div className="innerMainDivs rightDivs lowerRightDiv">
          <div className="lowerRightTop">
            <div className="innerMLeftDiv">
              <h2 className="innerTitles">Growing Musicians Together</h2>
              <p className="para"><b>Welcome!</b> For as far back as I can remember, I have been in love with the piano, and everything it can do. From the intricacies of Bach, to Rachmaninoff's dark passions, it's power of expression and complexity is unrivaled by nearly any single instrument. It has helped connect me to my feelings and given me hope when life turned dark. It taught me discipline, and pride in hard work. You can read more about my journey with music below.</p>
              <p className="para">hope you'll give me the chance to share some of this joy with you and your child. Lessons are full of positive coaching, and encouragement to develop one's own musical ideas. Occasional recitals give students the chance to become comfortable performing and to meet other young pianists.</p>
              <p className="para">Contact me at jetmeans@gmail.com to set up a free trial lesson!</p>
            </div>
            <div className="innerMRightDiv">
              <img className="catImage" src="./TK_on_bench_cropped.png" alt="TK (cat) on bench" />
              <p className="subCatText">Lessons take place in my home studio in Ypsilanti with occasional guest appearances by TK the cat.</p>
              <h2 className="backgroundTit">My Background</h2>
            </div>
          </div>
          <div className="bottomHalfMain">
            <div className="leftHalf">
              <iframe
                className="video"
                width="400"
                height="235"
                src="https://www.youtube.com/embed/3KHFiAStDBE?si=qGTrQuf90umhm84l"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

              </iframe>

            </div>
            <div className="rightHalf">
              <p className="para">I began my study of piano at age 5 and quickly fell in love. By the end of high school, I was practicing 15 hours a week and studying with the professors of nearby universities. I had the opportunity to perform Rhapsody in Blue with the high school wind ensemble and win a competition granting me a 75% scholarship to Cardinal Stitch University.</p>
              <p className="para">At some point, life took a detour and I joined the Army to do bomb disposal. While deployed to Kuwait, I walked three miles every day to the beaten up piano in the rec center to grab what practice I could in between destroying 200 tons of
                munitions.</p>
              <p className="para">I currently work as a programmer while I pursue a Masters in Piano Performance at
                EMU. I am excited about exploring the work of lesser known composers, especially female and non-European composers. I believe there is far too much wonderful music in the world to be content limiting myself to handful of big names.</p>
            </div>

          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default MainPage;
