import Chart from './chart.js';

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60],
        fill: true,
        color: '#0000FF',
      },
    ],
  },
  options: {
    title: {
      text: 'Titre du graphique',
    },
    xAxis: {
      title: {
        text: 'Axe des abscisses',
      },
    },
    yAxis: {
      title: {
        text: 'Axe des ordonnées',
      },
    },
  },
});
