import React from "react";
import {Doughnut} from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";


function DoughnutChart(props) {
    return (
        <div>
           <Doughnut data={props.data} options={props.options} />
        </div>
    )
}

export default DoughnutChart