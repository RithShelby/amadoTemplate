import React from "react";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart from "chart.js/auto" for Chart.js version 3

const Doughnut = () => {
  const doughnutCtx = useRef(null);
  // Doughnut Chart
  useEffect(() => {
    // Doughnut Chart
    const doughnutChart = new Chart(doughnutCtx.current, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
    return () => {
      // Clean up the chart instances when the component unmounts
      doughnutChart.destroy();
    };
  }, []); // Provide an empty dependency array

  return <canvas className="w-75 h-75" ref={doughnutCtx}></canvas>;
};

export default Doughnut;
