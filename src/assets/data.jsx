export const data = {
  labels: [
    'Oct, 2023',
    'Nov, 2023',
    'Dec, 2023',
    'Jan, 2024',
    'Feb, 2024',
    'Mar, 2024',
  ],
  datasets: [
    {
      data: [120, 115, 160, 120, 140, 160],
      borderColor: '#E66FD2',
      pointBackgroundColor: '#E66FD2',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#E66FD2',
      tension: 0.4,
      pointRadius: 7,
    },
    {
      data: [100, 80, 120, 95, 85, 90],
      borderColor: '#8C6FE6',
      pointBackgroundColor: '#8C6FE6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      tension: 0.4,
      pointRadius: 7,
    },
  ],
};

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Hide vertical grid lines
      },
    },
    y: {
      beginAtZero: true,
      min: 60,
      max: 180,
      grid: {
        display: true, // Show horizontal grid lines
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};
