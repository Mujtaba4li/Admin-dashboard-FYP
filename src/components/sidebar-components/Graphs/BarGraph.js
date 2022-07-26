import React from "react";
import { Bar } from "react-chartjs-2";
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
Chart.defaults.plugins.legend.position='right';
export default function BarChart() {
  return (
    <div>
      <Bar
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
              data: [ 29,15, 25, 20, 2, 25,15,29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(54, 162, 235, 0.9)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
                
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
           
            
            title:{
              display:false
            }
          },
          
     
          plugins: {
            title: {
                display: true,
                text: 'Number of Donations per month',
               
            },
            legend:{
              display:false,
            }
            
        }

        }}
      />
    </div>
  );
}

