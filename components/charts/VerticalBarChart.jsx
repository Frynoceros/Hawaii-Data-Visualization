import React from 'react';
import {useRef, useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function VerticalBarChart({
  xAxis,
  yAxis,
  displayData,
  xAxisLabel,
  yAxisLabel,
  graphName,
  graphLabel,
  selectedCheckbox,
  setDownload,
  download,
}) {
  let ref = useRef(null);

  //run this function for ANY dependant changes on the graph
  useEffect(() => {
    setDownload(ref);
  }, [
    xAxis,
    yAxis,
    displayData,
    yAxisLabel,
    xAxisLabel,
    graphLabel,
    graphName,
  ]);

  const getXArray = selectedCheckbox.map((x) => {
    return x[xAxisLabel];
  });
  const getYArray = selectedCheckbox.map((y) => {
    return y[yAxisLabel];
  });

  // console.log(getXArray, '🥶');
  // console.log(getYArray, '🧶');

  // TODO - Need to resolve issue with re-naming axis not re-rendering state.

  const labels = getXArray;

  const data = {
    labels,
    datasets: [
      {
        label: graphLabel,
        data: getYArray,
        backgroundColor: 'red',
      },
    ],
  };

  const options = {
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
  };

  return <Bar ref={ref} options={options} data={data} className="max-h-96" />;
}
