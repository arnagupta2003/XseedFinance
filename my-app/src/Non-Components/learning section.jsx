import React from "react";
import "../css/sipCalculator.css";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import BlackStrip from "../Components/blackStrip";
import Card from "../Components/card";
import { modules } from "../dataset/learningSectionCardsData";
export default function LearningSection() {
  return (
    <div>
      <BlackStrip bgcolor="#1e1b1b" height="2.2em" />
      <NavBar />
      <div class="sipContainer">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h2 class="learningHeading">
              Let's become financially literate with XSeed Finance
            </h2>{" "}
            <br />
            <h4 class="learningTagline">
              Xseed Finance is an extensive and in-depth collection of stock
              market and financial lessons created by Uddipan at Dhando.in
              <br /> It is openly accessible to everyone and is one of the
              largest financial education resources on the web.
            </h4>
          </div>
          <div class="col-sm-12 col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://www.aihr.com/wp-content/uploads/learning-vs-training-cover.png"
              alt="learning logo"
              title="learning"
            />
          </div>
        </div>

        <br />
        <br />
        <u>
          <h2 class="infoHeading">Modules</h2>
        </u>
        <div class="row">
          {modules.map((mod) => (
            <Card
              key={mod.id}
              src={mod.src}
              title={mod.title}
              subtitle={mod.subtitle}
              text={mod.text}
              link1={mod.link1}
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
