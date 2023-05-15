import React from "react";
import "../css/cards.css";
export default function Card(props) {
  return (
    <div class="card">
      <img src={props.src} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p class="card-text">{props.text}</p>

        {/* <a href="#" class="card-link">Another link</a> */}
      </div>
      <div class="card-footer">
        <a href="#" class="card-link">
          <i class="fa-regular fa-circle-play"></i>&nbsp;{props.link1}
        </a>
      </div>
    </div>
  );
}
