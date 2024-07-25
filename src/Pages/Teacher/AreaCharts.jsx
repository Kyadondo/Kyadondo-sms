import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
  labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6', 'Student 7', 'Student 8', 'Student 9', 'Student 10', 'Student 11'],
  datasets: [{
    label: 'Marks',
    data: [85, 70, 90, 75, 90, 78, 80, 56, 89, 76, 98, 87, 9, 98],
   backgroundColor: '#154360', 
    borderColor: '#d6754e',
    borderRadius: 1,
    
   
  }]
};

const options = {
  title: {
    display: true,
    text: 'Student Marks',
    fontSize: 24,
    fontColor: '#333'
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: '#333'
    
}
},
scales: {
  y: {
    beginAtZero: true,
    grid: {
      color: 'rgba(0, 0, 0, 0.1)'
    }
  },
  x: {
    grid: {
      color: 'rgba(0, 0, 0, 0.1)'
    }
  }
}
};
const AreaCharts = () => {

    return (
     
        <Bar data={data} options={options} />
      
    );
  };
  
  export default AreaCharts;
  
