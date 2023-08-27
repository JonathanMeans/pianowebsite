import { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="shoe">
          <div className="footEmail">
            <p>jetmeans@gmail.com</p>
          </div>
          <div className="footNumber">
            <p>(734) 219-2298</p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
