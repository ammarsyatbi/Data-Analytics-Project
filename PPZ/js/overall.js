function drawOverall(x,y){

var dom = document.getElementById("overall");
var myChart = echarts.init(dom);
myChart.showLoading();
var app = {};
option = null;

option = {
      title : {
        text: 'Kelompok Bayaran Zakat',
        subText: 'Frequency Analysis',
        x:'center'
    },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
          }
        },
    xAxis: {
        type: 'category',
        data: x
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: y,
        type: 'bar',
        itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
    }]
};



// Invoke
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
    
myChart.hideLoading();
}//endoffunction


//SCATTER OVERALL ----------------- --------------------------------------
function drawScatterOverall(data)
{
    var dom = document.getElementById("scatter_overall");
    var myChart = echarts.init(dom);
    myChart.showLoading();
    var app = {};
    option = null;

      option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
          }
        },
        xAxis: {
          name:'Bayaran'
        },
        yAxis: {
          name:'Jumlah Pembayar'
        },
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        series: [
        {
          type: 'effectScatter',
          symbolSize: 20,
          data: [
          data[0],
          data[1],
          data[2],
          data[3],
          data[4]
          ]
        },
        {
          symbolSize: 10,
          data: data,
          type: 'scatter'
        }]
    };



    // Invoke
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
        
    myChart.hideLoading();
    }//endoffunction
