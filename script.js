fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.lineChartData.datasets.forEach(dataset => {
      dataset.borderColor = "rgba(0,0,255,0.1)";
    });


    data.barChartData.datasets[0].backgroundColor = "rgba(54, 162, 235, 0.5)";
    data.barChartData.datasets[0].borderColor = "rgba(54, 162, 235, 1)";
    data.barChartData.datasets[0].borderWidth = 1;

    data.barChartData.datasets[1].backgroundColor = "rgba(255, 206, 86, 0.5)";
    data.barChartData.datasets[1].borderColor = "rgba(255, 206, 86, 1)";
    data.barChartData.datasets[1].borderWidth = 1;

    data.barChartData.datasets[2].backgroundColor = "rgba(75, 192, 192, 0.5)";
    data.barChartData.datasets[2].borderColor = "rgba(75, 192, 192, 1)";
    data.barChartData.datasets[2].borderWidth = 1;


    new Chart("myChart4", {
      type: "line",
      data: data.lineChartData,
      options: {}
    });


    new Chart("myChart", {
      type: "bar",
      data: data.barChartData,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Social Media Engagement Analysis"
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Engagement Metrics"
            }
          },
          x: {
            title: {
              display: true,
              text: "Platforms"
            }
          }
        }
      }
    });
  })
