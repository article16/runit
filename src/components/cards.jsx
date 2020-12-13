import React, { Component } from "react";
import Card from "./card";
import img1 from "../shoenew.jpg";
import img2 from "../watch.jpg";
import img3 from "../headphones.jpg";

class Cards extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="bottom-three">
          <b>PRIZES</b>
        </h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card imgsrc={img1} title="1st Prize" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img2} title="2nd Prize" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img3} title="3rd Prize" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
