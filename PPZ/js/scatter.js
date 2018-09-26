 google.charts.load('current', {'packages':['scatter']});
      

      function drawScatterJantina (data) {

        // var data = new google.visualization.DataTable();
        // data.addColumn('number', 'Hours Studied');
        // data.addColumn('number', 'Final');
        // data.addRows();

        var data = google.visualization.arrayToDataTable(data);

        var options = {
          legend: {position: 'top', maxLines: 1},
          height: 400,
          chart: {
            title: 'Zakat Correlation',
            subtitle: 'Zakat pendapatan dan keseluruhan'
          },
          hAxis: {title: 'PENDAPATAN'},
          vAxis: {title: 'KESELURUHAN'},
          explorer:{
            actions:['dragToZoom', 'rightClickToReset']
          }
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('scatter1'));

        chart.draw(data, options);
      }