import * as React from "react";

import { Pie } from "react-chartjs-2";
import "../../../Assets/Styles/main.scss";


import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Student Attendance for Course ABC",
    },
  },
};

const labels = ["1st Week", "2nd Week", "3rd Week", "4th Week "];

export const data = {
  labels,
  datasets: [
    {
      label: "Course 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Course 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function Monthlyattendancechart() {
  return (
    <Bar
      options={options}
      data={data}
      style={{
        height: "207px",
        width: "415px"}}
    />
  );
}


export default Monthlyattendancechart;