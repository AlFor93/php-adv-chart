function getChartPart1() {

  $.ajax({
    url: "dataLog.php",
    method: "GET",
    success: function(data) {
      var myData = JSON.parse(data);
      // console.log(myData);

      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Rapporto vendite annuali',
                backgroundColor: 'green',
                borderColor: 'red',
                data: myData
            }]
        },
        // Configuration options go here
        options: {}
      });
    },
    error: function() {}

  });

}

function getChartPart2() {

  $.ajax({
    url: "dataLogP2.php",
    method: "GET",
    success: function(data) {
      var myData = JSON.parse(data); //--> Ci fornisce un array di oggetti
      // console.log(myData);

      //Andiamo ad estrarre i valori per il grafico lineare
      var typeChar1 = myData[0].type;
      var dataChar1 = myData[0].data;

      //Valori per il grafico a torta
      var typeChar2 = myData[1].type;
      var dataChar2 = myData[1].data; // --> ci fornisce un altro array di oggetti

      /* estrazione delle chiavi dall'oggetto e creazione array utilizzabile
        per la creazione del grafico a torta ↓↓
      */
      var venditori = Object.keys(dataChar2);
      console.log(venditori);

      /* estrazione deli valori dall'oggetto e creazione array utilizzabile
        per la creazione del grafico a torta ↓↓
      */
      var vendite = Object.values(dataChar2);
      console.log(vendite);

      //Creazione grafico lineare per andamento annuale vendite
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: typeChar1,
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Rapporto vendite annuali',
                backgroundColor: 'green',
                borderColor: 'red',
                data: dataChar1
            }]
        },
        // Configuration options go here
        options: {}
      });

      //Creazione grafico a torta
      var ctx = document.getElementById('myPieChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: typeChar2,
        // The data for our dataset
        data: {
            labels: venditori,
            datasets: [{
                label: 'Rapporto vendite annuali',
                backgroundColor: ['darkgrey', 'darkblue', 'darkred', 'orange'],
                borderColor: '#999',
                data:vendite
            }]
        },
        // Configuration options go here
        options: {}
      });
    },
    error: function() {}

  });

}

function getChartPart3() {

  $.ajax({
    url: "dataLogP3.php",
    method: "GET",
    // data: {
    //   level: guest,
    // },
    success: function(data) {
      var myData = JSON.parse(data); //--> Ci fornisce un oggetto di oggetti

      //Andiamo ad estrarre i valori per il grafico lineare
      var typeChar1 = myData['fatturato'].type;
      var dataChar1 = myData['fatturato'].data;

      //Valori per il grafico a torta
      var typeChar2 = myData['fatturato_by_agent'].type;
      var dataChar2 = myData['fatturato_by_agent'].data; // --> ci fornisce un altro array di oggetti

      /* estrazione delle chiavi dall'oggetto e creazione array utilizzabile
        per la creazione del grafico a torta ↓↓
      */
      var venditori = Object.keys(dataChar2);
      // console.log(venditori);

      /* estrazione dei valori dall'oggetto e creazione array utilizzabile
        per la creazione del grafico a torta ↓↓
      */
      var vendite = Object.values(dataChar2);
      // console.log(vendite);

      //Valori per il grafico lineare riservato
      var typeChar3 = myData['team_efficiency'].type;
      var dataChar3 = myData['team_efficiency'].data; // --> ci fornisce un altro array di oggetti
      console.log("Vendite team 1: " + dataChar3['Team1']);
      console.log("Vendite team 2: " + dataChar3['Team2']);
      console.log("Vendite team 3: " + dataChar3['Team3']);
      var venditeT1 = dataChar3['Team1']; // --> Estrazione valori Team 1
      var venditeT2 = dataChar3['Team2']; // --> Estrazione valori Team 2
      var venditeT3 = dataChar3['Team3']; // --> Estrazione valori Team 3




      //Creazione grafico lineare per andamento annuale vendite
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: typeChar1,
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Rapporto vendite annuali',
                backgroundColor: 'green',
                borderColor: 'darkred',
                pointBackgroundColor: 'brown',
                data: dataChar1
            }]
        },
        // Configuration options go here
        options: {}
      });

      //Creazione grafico a torta
      var ctx = document.getElementById('myPieChart').getContext('2d');
      var chart2 = new Chart(ctx, {
        // The type of chart we want to create
        type: typeChar2,
        // The data for our dataset
        data: {
            labels: venditori,
            datasets: [{
                label: 'Rapporto vendite annuali',
                backgroundColor: ['darkgrey', 'darkblue', 'darkred', 'orange'],
                borderColor: '#999',
                data:vendite
            }]
        },
        // Configuration options go here
        options: {}
      });

      //Creazione grafico lineare riservato
      var ctx = document.getElementById('myReservedLineChart').getContext('2d');
      var chart3 = new Chart(ctx, {
        // The type of chart we want to create
        type: typeChar3,
        // The data for our dataset
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
          label: "Team 1",
          backgroundColor: "#cecece22",
          borderColor: "red", // The main line color
          data: venditeT1,
          },

          {
          label: "Team 2",
          backgroundColor: "#cecece22",
          borderColor: "rgb(167, 105, 0)",
          data: venditeT2,
          },

          {
          label: "Team 3",
          backgroundColor: "#cecece22",
          borderColor: "rgb(467, 805, 42)",
          data: venditeT3,
          }

        ]
        },
        // Configuration options go here
        options: {}
      });
    },
    error: function() {}

  });

}



















function init() {

  // getChartPart1();
  // getChartPart2();
  getChartPart3();

}

$(document).ready(init);
