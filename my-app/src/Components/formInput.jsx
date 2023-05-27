import React from "react";

const barStyle = {
  float: "right",
  fontWeight: "600",
  backgroundColor: "#91BCE5",
  minWidth: "120px",
  padding: "5px 4px",
  borderRadius: "5px",
  textAlign: "center",
};
export default function InputRangeLeft(props) {
  return (
    <form class="mt-3">
      <div class="form-group">
        <h5>
          <label for={props.id} class="form-label">
            {props.label}
          </label>
          <span style={barStyle}>
            {props.unit}
            <span id={props.id}>{props.rangeOutput}</span>
          </span>
        </h5>
        <input
          type="range"
          class="form-range"
          id={props.id}
          min={props.min}
          max={props.max}
          step={props.step}
          name={props.name}
          onChange={props.onChange}
          value={props.rangeOutput}
        ></input>
      </div>
    </form>
  );
}
export function InputRangeRight(props) {
  return (
    <form class="mt-3">
      <div class="form-group">
        <h5>
          <label for={props.id} class="form-label">
            {props.label}
          </label>
          <span style={barStyle}>
            <span id={props.id}>{props.rangeOutput}</span>
            {props.unit}
          </span>
        </h5>
        <input
          type="range"
          class="form-range"
          id={props.id}
          min={props.min}
          max={props.max}
          step={props.step}
          name={props.name}
          onChange={props.onChange}
          value={props.rangeOutput}
        ></input>
      </div>
    </form>
  );
}

export function InputNumberLeft(props) {
  return (
    <form class="mt-3">
      <div class="form-group row">
        <h5 class="col-sm-8">
          <label for={props.id} class="form-label">
            {props.label}
          </label>
        </h5>
        <div class="row col-sm-4 align-items-center">
          {props.unit}
          <input
            type="tel"
            class="form-range"
            id={props.id}
            min={props.min}
            name={props.name}
            onInput={props.onInput}
            value={props.value}
          ></input>
        </div>
      </div>
    </form>
  );
}
export function InputNumberRight(props) {
  return (
    <form class="mt-3">
      <div class="form-group row">
        <h5 class="col-sm-8">
          <label for={props.id} class="form-label">
            {props.label}
          </label>
        </h5>
        <div class="row col-sm-4 align-items-center">
          <input
            type="tel"
            class="form-range"
            id={props.id}
            min={props.min}
            name={props.name}
            onInput={props.onInput}
            value={props.value}
          ></input>
          <span class="col-sm-1"><b>{props.unit}</b></span>
        </div>
      </div>
    </form>
  );
}
