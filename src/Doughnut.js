import React from "react";
import "./Doughnut.css";
import { Doughnut } from "react-chartjs-2";
import { useStateValue } from "./StateProvider";

export const Doughnut1 = () => {
  const [{ active, recovered, deceased }, dispatch] = useStateValue();
  if (active) {
    const data = {
      labels: ["active", "deceased", "recovered"],
      datasets: [
        {
          label: "sales for 2020",
          data: [active, deceased, recovered],
          backgroundColor: [
            "rgba(0, 0, 0, 0.6)",
            "rgba(255,99,132,1)",
            "rgba(0, 170, 15, 1)",
          ],
        },
      ],
    };

    const option = {
      cutoutPercentage: 80,
      rotation: -0.1,
      responsive: true,
      title: {
        display: true,
      },
    };
    return (
      <div className="doughnut">
        <Doughnut data={data} options={option} />
      </div>
    );
  }
  return <div></div>;
};
