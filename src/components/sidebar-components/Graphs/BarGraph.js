import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
Chart.register(
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  PointElement,
  LineElement,
  LineController,
  Tooltip
);

// import { Chart, LineController, LineElement, PointElement, LinearScale,  } from `chart.js`

// Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
export default function BarChart() {
  return (
    <div>
      <Line
        data={{
          labels: [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "Jun",
            "July",
            "August",
        
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 13, 15, 7, 3, 12, 19],
              backgroundColor: "rgba(255, 99, 132, 0.2)",

              borderColor: "rgba(255, 99, 132, 1)",

              borderWidth: 1,
              fill: "origin",
              tension: "0.3",
            },

            {
              label: "# of caster",
              data: [2, 9, 8, 18, 12, 15, 12, 9, 13, 15, 0, 4],
              backgroundColor: "rgba(54, 162, 235, 0.2)",

              borderColor: "rgba(54, 162, 235, 1)",

              borderWidth: 1,
              fill: "origin",
              tension: "0.3",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },

          plugins: {
            title: {
                display: true,
                text: 'Daily registration of USER on application',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }

        }}
      />
    </div>
  );
}

