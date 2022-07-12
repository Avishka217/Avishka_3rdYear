import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "../../../Assets/Styles/main.scss";

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Payment Analysis for Courses",
    },
  },
};

export const data = {
  labels: ["Paid", "Still not paid"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: [
        "rgba(134, 30, 219, 0.8)",
        "rgba(255, 255, 0, 1)",
      
      ],
      borderColor: [
         "rgba(134, 30, 219, 0.8)",
        "rgba(255, 255, 0, 1)",
       
      ],
      borderWidth: 1,
    },
  ],
};

export function Paymentpiechart() {
  return <Pie className="Paymentpiechart" options={options} data={data} 
  style={{width:"300px", height:"300px"}}
  />;
}


export default Paymentpiechart;