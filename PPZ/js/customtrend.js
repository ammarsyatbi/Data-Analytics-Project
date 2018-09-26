function drawCustomtrend(data, negeri, yearArray, dataList)
{
    var dom = document.getElementById("custom_trend");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    
    yearArray.unshift('trend');
    var xAxisData = negeri;
    var customData = data;
    var legendData = [];
    for(x in yearArray)
    {
      legendData.push(String(yearArray[x]));
    }
    var dataList = dataList;

    var encodeY = [];
    for(var i =0; i < yearArray.length-1; i++)
    {
      encodeY.push(1+i);
    }

    console.log('xAxisData',xAxisData);
    console.log('customData',customData);
    console.log('legendData',legendData);
    console.log('dataList',dataList);
    console.log('encodeY',encodeY);

function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
    });

    var points = [];
    for (var i = 0; i < currentSeriesIndices.length; i++) 
    {
        var seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
            var point = api.coord([xValue, api.value(seriesIndex)]);
            point[0] += barLayout[i - 1].offsetCenter;
            point[1] -= 20;
            points.push(point);
        }
    }
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'polyline',
        shape: {
            points: points
        },
        style: style
    };
}

option = {
    title: {
      text: 'Bayaran zakat mengikut negeri setiap tahun',
      subtext: 'Berdasarkan bayaran zakat keseluruhan',
      x: 'left'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
    },
    dataZoom: [{
        type: 'slider',
        start: 50,
        end: 70
    }, {
        type: 'inside',
        start: 50,
        end: 70
    }],
    xAxis: {
        data: xAxisData
    },
    yAxis: {},
    series: [{
        type: 'custom',
        name: 'trend',
        renderItem: renderItem,
        itemStyle: {
            normal: {
                borderWidth: 2
            }
        },
        encode: {
            x: 0,
            y: encodeY
        },
        data: customData,
        z: 100
    }].concat(echarts.util.map(dataList, function (data, index) {
        return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            legend:{
                data: xAxisData
            },
            data: data
        };
    }))
};

    // Invoke
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}//endoffunction