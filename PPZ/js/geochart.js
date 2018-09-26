function drawNegeri(data){
  var dom = document.getElementById("geochart");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();

$.get('data/malaysia.json', function (usaJson) {
    myChart.hideLoading();

    echarts.registerMap('Malaysia', usaJson);
    option = {
        title: {
            text: 'Bilangan Pembayar Zakat 2013-2018',
            subtext: 'Berdasarkan bayaran zakat keseluruhan',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            orient:'vertical',
            left:'left',
            min: 0,
            max: 100000,
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
            },
            text:['High','Low'],
            realtime:true,           // 文本，默认为数值文本
            calculable: true
        },
        series: [
            {
                name: 'Bil Pembayar',
                type: 'map',
                roam: true,
                map: 'Malaysia',
                itemStyle:{                    
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:data
            }
        ]
    };
myChart.setOption(option);
});
}

//---------------------------------------------------------------------------------------------------
function drawRose(stateFreq, stateVal, negeri)
{
    var dom = document.getElementById("rose");
    var myChart = echarts.init(dom);
    myChart.showLoading();

    var app = {};
    option = null;

   option = {
    // title : {
    //     text: 'Bayaran Zakat Mengikut Negeri',
    //     subtext: 'Bilangan dan jumlah bayaran',
    //     x:'left'
    // },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        orient:'horizontal',
        data:negeri
    },
    calculable : true,
    series : [
        {
            name:'Bilangan Pembayar',
            type:'pie',
            radius : [20, 110],
            center : [ '25%','50%'],
            roseType : 'radius',
            label: {
                normal: {
                    formatter: '{b} {c} ',
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:stateFreq
        },
        {
            name:'Jumlah bayaran',
            type:'pie',
            radius : [30, 110],
            center : [ '75%','50%'],
            roseType : 'radius',
            label: {
                normal: {
                    formatter: '{b} {d}% '

                }

            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:stateVal,
            tooltip : {
              trigger: 'item',
              // formatter: "{a} ({d}%) <br/>{b} : {c} ",
              formatter: function (params)  {
                params.value = +params.value;
                return isFinite(params.value)
                ? params.seriesName.concat(" (", params.percent, "%)<br/>", params.name, " : ",
                    params.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }))
                : '';
              }
          }
        }
    ]
};



    // Invoke
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
        
    myChart.hideLoading();

}