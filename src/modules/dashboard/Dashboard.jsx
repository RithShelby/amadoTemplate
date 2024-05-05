import { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart from "chart.js/auto" for Chart.js version 3
import Doughnut from "./doughnut";
import BarChart from "./BarChart";

const Dashboard = () => {
  const lineCtx = useRef(null);

  useEffect(() => {
    // Doughnut Chart

    // Line Chart
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
    const lineChart = new Chart(lineCtx.current, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });

    return () => {
      // Clean up the chart instances when the component unmounts
      lineChart.destroy();
    };
  }, []); // Provide an empty dependency array

  return (
    <div className="col-lg-10">
      <div className="row">
        {/* Doughnut Chart */}
        <div className="col-md-4">
          <Doughnut />
        </div>
        {/* Line Chart */}
        <div className="col-md-4">
          <canvas className="w-75 h-75" ref={lineCtx}></canvas>
        </div>
        <div className="col-md-4">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
