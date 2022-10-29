import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function AreaChart({
  xAxisLabel,
  yAxisLabel,
  graphLabel,
  selectedCheckbox,
}) {
  const getXArray = selectedCheckbox.map((x) => {
    return x[xAxisLabel];
  });

  const getYArray = selectedCheckbox.map((y) => {
    return y[yAxisLabel];
  });

  const labels = getXArray;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      scales: {
        x: {
          title: {
            text: xAxisLabel,
            display: true,
          },
        },
        y: {
          title: {
            text: yAxisLabel,
            display: true,
          },
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: graphLabel,
        data: getYArray,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
