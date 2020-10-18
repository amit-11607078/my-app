import React from "react";
import { HorizontalBar } from "react-chartjs-2";

export default function Chart(props) {
  var pdata = props.data;

  var data = {
    labels: ["Level"],
    datasets: [
      {
        label: props.testname,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        lineWidth: 1,
        barPercentage: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [pdata],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  return (
    <div className="chart">
      <HorizontalBar
        data={data}
        width={800}
        height={70}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
}
