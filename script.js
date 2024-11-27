

const myChart4 = document.getElementById("myChart4");

const xValues4 = ["Twitter","Instagram","Facebook","YouTube"];
const yValues4 = [35,50,75,80];

new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues4,
    datasets: [{
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues4
    }]
  },
  options:{}
});

/*const myChart = document.getElementById("myChart");

const myJSON = '["Followers", "Likes", "Shares", "Reviews"]';
const myJSON1 = '["450", "300", "100", "50"]';
let barColors = ["red", "green","blue","orange"];


const myObj = JSON.parse(myJSON);
const myObj1 = JSON.parse(myJSON1);
document.getElementById("myChart").innerHTML = myObj["Followers", "Likes", "Shares", "Reviews"];
document.getElementById("myChart").innerHTML = myObj1["450","300", "100", "50"];

new Chart("myChart", {
    type: "bar",
    data: {
      labels:myJSON ,
      datasets: [{
        backgroundColor: barColors,
        data: myJSON1
      }]
    },
    options: {}
  });*/

  const myChart = document.getElementById("myChart");

  new Chart("myChart",{
    "type": "bar",
    "data": {
      "labels": ["Facebook", "Instagram", "Twitter", "YouTube"],
      "datasets": [
        {
          "label": "Followers",
          "data": [1500, 2300, 1200, 800, 3100, 2900],
          "backgroundColor": "rgba(54, 162, 235, 0.5)",
          "borderColor": "rgba(54, 162, 235, 1)",
          "borderWidth": 1
        },
        {
          "label": "Shares",
          "data": [300, 500, 200, 150, 400, 350],
          "backgroundColor": "rgba(255, 206, 86, 0.5)",
          "borderColor": "rgba(255, 206, 86, 1)",
          "borderWidth": 1
        },
        {
          "label": "Views",
          "data": [120, 180, 90, 60, 250, 200],
          "backgroundColor": "rgba(75, 192, 192, 0.5)",
          "borderColor": "rgba(75, 192, 192, 1)",
          "borderWidth": 1
        }
      ]
    },
    "options": {
      "responsive": true,
      "plugins": {
        "title": {
          "display": true,
          "text": "Social Media Engagement Analysis"
        }
      },
      "scales": {
        "y": {
          "beginAtZero": true,
          "title": {
            "display": true,
            "text": "Engagement Metrics"
          }
        },
        "x": {
          "title": {
            "display": true,
            "text": "Platforms"
          }
        }
      }
    }
  })

