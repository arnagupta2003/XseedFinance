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
          <div style={barStyle} className="row col-sm-4">
            <div class="col-sm-2">{props.unit}</div>
            <div className="col-sm-10">
            <input 
            type="number" 
            class="form-range inputNumber"
            id={props.id}
            min={props.min}
            name={props.name}
            onChange={props.onChange}
            value={props.rangeOutput}
            ></input>
            </div>
            
            {/* <span id={props.id}>{props.rangeOutput}</span> */}
          </div>
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
          <div style={barStyle} className="row col-sm-4">
            
            <div className="col-sm-6">
            <input 
            type="number" 
            class="form-range inputNumber"
            id={props.id}
            min={props.min}
            name={props.name}
            onChange={props.onChange}
            value={props.rangeOutput}
            ></input>
            </div>
            <div class="col-sm-3">{props.unit}</div>
            {/* <span id={props.id}>{props.rangeOutput}</span> */}
          </div>

          {/* <span style={barStyle}>
            <span id={props.id}>{props.rangeOutput}</span>
            {props.unit}
          </span> */}
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
        <div style={barStyle} className="row col-sm-4">
        <div class="col-sm-3">{props.unit}</div>
            <div className="col-sm-6">
            <input 
            type="number" 
            class="form-range inputNumber"
            id={props.id}
            min={props.min}
            name={props.name}
            onInput={props.onInput}
            value={props.value}
            ></input>
            </div>
            
            {/* <span id={props.id}>{props.rangeOutput}</span> */}
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
        <div style={barStyle} className="row col-sm-4">
        
            <div className="col-sm-6">
            <input 
            type="number" 
            class="form-range inputNumber"
            id={props.id}
            min={props.min}
            name={props.name}
            onInput={props.onInput}
            value={props.value}
            ></input>
            </div>
            <div class="col-sm-3">{props.unit}</div>
            {/* <span id={props.id}>{props.rangeOutput}</span> */}
          </div>
      </div>
    </form>
  );
}


export function InputRadio(props){
  return (
    <div class="form-check">
        <input onClick={props.onClick} class="form-check-input" type="radio" name={props.name} id={props.name} value={props.value}/>
        <label class="formOption form-check-label" for={props.name}>
        {props.label}
        </label>
    </div>
  );
}