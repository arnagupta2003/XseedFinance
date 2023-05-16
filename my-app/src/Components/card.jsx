import React from "react";
import "../css/cards.css";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
  };

export default function Card(props) {
  return (
    <div class="card">
    {props.src ? (
        <Link to={props.linkto} style={linkStyle}><img src={props.src} class="card-img-top" alt="..." /></Link>
    ) : null}
    <div class="card-body">
        <Link to={props.linkto} style={linkStyle}><h5 class="card-title">{props.title}</h5></Link>
        <h6 class="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p class="card-text">{props.text}</p>
    </div>
    {props.link1 ? (
        <div class="card-footer">
        <a href={props.linkto} class="card-link">
            <i class="fa-regular fa-circle-play"></i>&nbsp;{props.link1}
        </a>
        </div>
    ) : null}
    </div>
  );
}
