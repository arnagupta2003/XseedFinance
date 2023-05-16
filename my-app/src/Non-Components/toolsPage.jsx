import React from "react";
import BlackStrip from "../Components/blackStrip";
import NavBar from "../Components/navbar";
import "../css/sipCalculator.css";
import { tools } from "../dataset/tools";
import Card from "../Components/card";
import Footer from "../Components/footer";

export default function Tools() {
  return (
    <div>
      <BlackStrip bgcolor="#1e1b1b" height="2.2em" />
      <NavBar />
      <div className="sipContainer">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h2 class="learningHeading">
              Here is a collection of all the Tools
            </h2>
            <br />
            <h4 class="learningTagline">
              Xseed Finance offers an extensive collection of tools.
              <br /> It is openly accessible to everyone where anyone can use
              any tool to calculate various things like income tag, crypto tax,
              dream come true, fixed deposit, etc.
            </h4>
          </div>
          <div class="col-sm-12 col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DzfZfwPf9znNbia5JaTK15iPjkMhWqFpmA&usqp=CAU"
              alt="learning logo"
              title="learning"
            />
          </div>
        </div>
          <br />
          <br />
          <br />
          <u>
            <h2 class="infoHeading">Tools</h2>
          </u>
          <div class="row">
            {tools.map((mod) => (
              <Card
                key={mod.id}
                src={mod.src}
                title={mod.title}
                subtitle={mod.subtitle}
                text={mod.text}
                link1={mod.link1}
                linkto={mod.linkto}
              />
            ))}
          </div>
        
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
