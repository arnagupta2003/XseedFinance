import React from "react";

export default function TableData(props){
    return (
        <div class="row justify-content-around pt-3">
            <div class="col-sm-12 col-md-8 tableData">{props.title}</div>
            <div class="col-sm-12 col-md-4 tableData" style={props.style}>{props.unit}{props.data}</div>
        </div>
    );
}

export function TableData3(props){
    return (
        <div class="row justify-content-around pt-3" style={{backgroundColor:props.bgColor, border:"2px solid black"}}>
            <div class="col-sm-4 tableData" style={{fontWeight:props.fontWt1,cursor:props.cursor}}>{props.col1}&nbsp;&nbsp;{props.icon}</div>
            <div class="col-sm-4 tableData" style={{fontWeight:props.fontWt2}}>{props.col2}</div>
            <div class="col-sm-4 tableData" style={{fontWeight:props.fontWt3}}>{props.col3}</div>
        </div>
    );
}