import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    // defaults,
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
// Chart.overrides[type].plugins.legend.position='right';
// Chart.defaults.plugins.legend
// import { Chart, LineController, LineElement, PointElement, LinearScale,  } from `chart.js`

// Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
export default function DonuteGraph() {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            "Food",
            "Cloth",
            "Books",
            "Shoes",
            "Other",
        
          ],
          datasets: [
            {
              label: "Donations",
              data: [19, 10, 15, 7,3],
              backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(153, 102, 252)',
                'rgba(255, 159, 642)',
                'rgba(75, 192, 192)',
            ],
            borderColor: [
              'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(153, 102, 252)',
                'rgba(255, 159, 642)',
                'rgba(75, 192, 192)',
            ],
              borderWidth: 1,
              fill: "origin",
              tension: "0.3",
            },

        
          ],
        }}
        height={150}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid:{
                display:false
                
              }
            },
          },
        

          plugins: {
            title: {
                display: true,
                text: 'Things donated by category',
               
            },
            legend:{
            label:{
                font:2
            },
            position:'right'
          },
        }

        }}
      />
    </div>
  );
}

