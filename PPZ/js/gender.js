function drawGender(lelaki,perempuan,tak_tahu)
{
    var dom = document.getElementById("genderpie");
    var myChart = echarts.init(dom);
    myChart.showLoading();
    var app = {};
    option = null;

option = {
    title : {
        text: 'Bilangan Pembayar Mengikut Jantina',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['Lelaki','Perempuan','Tiada']
    },
    series : [
        {
            name: 'Jantina',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: [
            {name:'Lelaki',value:lelaki},
            {name:'Perempuan',value:perempuan},
            {name:'Tiada',value:tak_tahu}],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}：}{abg|}\n{hr|}\n  {c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        b: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        c: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
        }
    ]
};
    // Invoke
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
        
    myChart.hideLoading();
}//endoffunction
