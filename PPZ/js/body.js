$(document).ready(function(){

	var year = [2015,2014,2016,2017,2018,2010];
	year = year.sort(function(a,b){
		return a - b;
	});
	
	var yearVal = {};
	yearVal['min'] = [year[0],year[0]];

	for(var i=1; i < year.length-1; i++){
		var percentage = i/(year.length-1)*100;
		yearVal[percentage.toString().concat("%")] = new Array(year[i], year[i]);
	}

	yearVal['max'] = [year[year.length-1]];

	console.log(yearVal)
	var slider = document.getElementById('year-slider');
	noUiSlider.create(slider,{

		animate:true,
		animationDuration:300,
		start:[yearVal['min'][0] ,yearVal['max'][0]],
		connect: true,
		snap:true,
		orientation: 'horizontal',
		range: yearVal,
		format: wNumb({
			decimals:0
		}),

		pips:{
			mode:'range',
			stepped: true,
			density:200
		}
	});
});