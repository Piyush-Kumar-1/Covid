import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";
import { useStateValue } from "./StateProvider";

export const LineChart = () => {
  const [{ active7, recovered7, deceased7 }, dispatch] = useStateValue();
  if (active7) {
    console.log(recovered7, active7, deceased7);
    const data = {
      labels: ["", "", "", "", "", "", ""],
      datasets: [
        {
          label: "deceased",
          data: [
            deceased7[0],
            deceased7[1],
            deceased7[2],
            deceased7[3],
            deceased7[4],
            deceased7[5],
            deceased7[6],
          ],
          borderColor: ["grey"],
          pointBackgroundColor: ["grey"],
        },
        {
          label: "recovered",
          data: [
            recovered7[0],
            recovered7[1],
            recovered7[2],
            recovered7[3],
            recovered7[4],
            recovered7[5],
            recovered7[6],
          ],
          borderColor: ["green"],
          backgroundColor: ["white"],
          pointBackgroundColor: ["green"],
        },
        {
          label: "active",
          data: [
            active7[0],
            active7[1],
            active7[2],
            active7[3],
            active7[4],
            active7[5],
            active7[6],
          ],
          borderColor: ["red"],
          backgroundColor: ["white"],
          pointBackgroundColor: ["red"],
          pointBorderColor: ["red"],
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 1000000,
            },
          },
        ],
      },
    };
    return (
      <div className="linechart">
        <Line data={data} options={options} />
      </div>
    );
  }
  return null;
};
