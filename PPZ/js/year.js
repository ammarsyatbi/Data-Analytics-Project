function drawYear(year_bayar,year_bayaran,yearArray)
{
    var dom = document.getElementById("year_chart");
    var myChart = echarts.init(dom);
    myChart.showLoading();

    var app = {};
    option = null;

    option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                // toolbox: {
                //     feature: {
                //         magicType: {show: true, type: ['line', 'bar']},
                //         restore: {show: true},
                //         saveAsImage: {show: true}
                //     }
                // },
                legend: {
                    data:['Bil Pembayar','Jumlah Bayaran']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: yearArray,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Bil Pembayar',
                        boundaryGap:[0,'20%'],
                    },
                    {
                        type: 'value',
                        name: 'Jumlah Bayaran\n(RM)',
                        boundaryGap:[0,'10%'],
                        axisLabel: {
                                formatter: function (value, index) {
                                    // Formatted to be month/day; display year only in the first label
                                    var newVal = value/1000000;
                                    return (newVal.toString()).concat("M");
                            }
                        }
                    }
                ],
                series: [
                    {
                        name:'Bil Pembayar',
                        type:'bar',
                        data:year_bayar
                    },
                    {
                        name:'Jumlah Bayaran',
                        type:'line',
                        yAxisIndex: 1,
                        data:year_bayaran
                    }
                ]
            };


    // Invoke
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
        
    myChart.hideLoading();
}//endoffunction

