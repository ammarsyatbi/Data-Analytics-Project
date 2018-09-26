$(document).ready(function(){

function checkComplete(data)
{
	for(var i in data)
	{
		if (data[i] == "")
		{
			return false;
		} 
	}
	return true;
}

function countByKey(data,key)
{
	var temp = [];
	var count = 0 ;
	for(x in data)
	{
		if(data[x][key] != "")
		{
			count++;

		}

	}
	return count;
}

function countSubKey(data)
{
	var temp = {};
	for(x in data)
	{
		for(var i in data[x])
		{
			if(data[x][i] != "")
			{
				if(temp.hasOwnProperty(i))
				{

					temp[i]++;
				}
				else
				{
					temp[i]=1;
				}
			}
		}		
	}
	return temp;
}

function countDistinctValue(data,key)
{

	var temp = {};
	for(x in data)
	{
		for(var i in data[x])
		{
			if(i == key)
			{
				if(temp.hasOwnProperty(data[x][i]))
				{

					temp[data[x][i]]++;
				}
				else
				{
					temp[data[x][i]]=1;
				}

			}

		}
		
	}
	return temp;
}

function dictCountToArray(data,key)
{

	var temp = [];
	for(var x in data)
	{
		temp.push([parseInt(x),data[x]]);	
	}
	return temp;
}

function countValueByYear(data,yearArray)
{
	var temp = {};

	for (i in yearArray)
	{
		temp[yearArray[i]] = 0;
	}

	for(x in data)
	{
		temp[data[x]['YEAR']] += data[x]['BAYARAN ZAKAT KESELURUHAN'];
	}
	return temp;
}
function countValueByNegeri(data,negeri)
{
	var temp = {};

	for (i in negeri)
	{
		temp[negeri[i]] = 0;
	}
	
	for(x in data)
	{
		temp[data[x]['NEGERI']] += data[x]['BAYARAN ZAKAT KESELURUHAN'];
	}

	return temp;
}
function sortKeyArray(data)
{
	for(var i =1; i<data.length; i++)
	{
		for(var x =0; x < data.length-i; x++)
		{
			if(data[x][0] > data[x+1][0])
			{
				var temp = data[x];
				data[x] = data[x+1];
				data[x+1]= temp;
			}
		}
	}
	return data;
}

function sortValueArray(data)
{
	for(var i =1; i<data.length; i++)
	{
		for(var x =0; x < data.length-i; x++)
		{
			if(data[x][1] > data[x+1][1])
			{
				var temp = data[x] ;
				data[x] = data[x+1];
				data[x+1]= temp;
			}
		}
	}
	return data;
}

function keyToArrayInt(data)
{
	var temp = [];
	for(var x in data)
	{
		temp.push(parseInt(x));	
	}
	return temp;
}
function keyToArray(data)
{
	var temp = [];
	for(var x in data)
	{
		temp.push(x);	
	}
	return temp;
}
function valueToArrayByKey(data , key)
{
	var temp = [];
	for(x in data)
	{
		temp.push(data[x][key]);	
	}
	return temp;
}
function valueToArrayBy2Key(data , key1, key2)
{
	var temp = [];
	for(x in data)
	{
		temp.push([(data[x][key1].toString()).concat(" < ",data[x][key2].toString())]);	
	}
	return temp;
}
function valueToArrayInt(data)
{
	var temp = [];
	for(var x in data)
	{
		temp.push(data[x]);	
	}
	return temp;
}

function zakat_dist(data_clean)
{
	var zakat = [];

	for (x in data_clean){
	  	zakat.push([data_clean[x]['BAYARAN ZAKAT KESELURUHAN'],data_clean[x]['BAYARAN ZAKAT PENDAPATAN']]);
	}


  return zakat;

}
function loadPieJantina()
{
	

}

function getNegeriByPoskod(poskod)
{
	var x= POSKOD.length;
	while(--x >=0)
	{
		if( poskod.length != 5)
		{
			return "";
		}
		else if(POSKOD[x]['poskod'] == poskod)
		{
			return POSKOD[x]['negeri'];
		}
	}

	return "";
}
function geoChartData(data)
{
	var temp = [];
	for(var x in data)
	{
		temp.push({name:x, value:data[x]}); 
	}

	return temp;
}

function featureExtraction(data, year)
{
	var x = data.length;
	while(--x >= 0)
	{
		// delete data[x]["ID NO"];
		// delete data[x]["ALAMAT_P"];
		// delete data[x]["BANDAR_P"];
		// delete data[x]["BANDAR2_P"];
		// delete data[x]["NEGERI_P"];
		// delete data[x]["ALAMAT_R"];
		// delete data[x]["BANDAR_R"];
		// delete data[x]["BANDAR2_R"];
		// delete data[x]["NEGERI_R"];

		// delete data[x][""];
		data[x]['YEAR'] = year;
		data[x]['BAYARAN ZAKAT KESELURUHAN'] = +data[x]['BAYARAN ZAKAT KESELURUHAN'];
		// data[x]['BAYARAN ZAKAT PENDAPATAN'] = +data[x]['BAYARAN ZAKAT PENDAPATAN'];


		data[x]['NEGERI'] = getNegeriByPoskod(data[x]['POSKOD_R']);
	}

	return data;
}
function binningByKey(data, number, maxNum)
{
	var max = maxNum;//Math.max.apply(Math,keyToArrayInt(data));
	var bin = max/number;
	var temp = [];
	//INITIALIZE
	for(var z =0; z<number; z++)
	{
		temp.push({
			min:bin*z,
			max:bin*z+bin,
			value:0
		});
	}
	temp.push({
			min:max,
			max:'',
			value:0
		});

	for(x in data)
	{
		if(data[x][0] < max)
		{
			for(var i =0; i<number; i++)
			{
				if(data[x][0] < temp[i]['max'])
				{
					temp[i]['value']++;
					break;
					
				}
			}
		}
		else
		{
			temp[number]['value']++;
		}
	}
	return temp;
}

function customDataTrend(data,negeri,yearArray)
{
	var temp = {};
	var tempArray = [];
	var data_list = [];

	// Initialize negeri/year
	for(x in negeri)
	{
		temp[negeri[x]] = {};

		for(i in yearArray)
		{
			temp[negeri[x]][yearArray[i]] = 0;
		}
	}

	for(x in data)
	{
		temp[data[x]['NEGERI']][[data[x]['YEAR']]] += data[x]['BAYARAN ZAKAT KESELURUHAN'];
	}

	for(x in negeri)
	{
		tempArray.push([parseInt(x)]);
		for(var i in yearArray)
		{
			tempArray[x].push(Math.round(temp[negeri[x]][yearArray[i]]));
		}
	}

	for(x in yearArray)
	{
		data_list.push([]);
		for(var i in negeri)
		{
			data_list[x].push(Math.round(temp[negeri[i]][yearArray[x]]));
		}
	}
	return [tempArray,data_list];
}

//START 
d3.queue()
  .defer(d3.csv, "data/2013.csv")
  .defer(d3.csv, "data/2014.csv")
  .defer(d3.csv, "data/2015.csv")
  .defer(d3.csv, "data/2016.csv")
  .defer(d3.csv, "data/2017.csv")
  .await(combine);

function combine(error, d13, d14,d15,d16,d17) {
  if(error) { console.log(error); }

console.log('CSV read');
  const yearArray = [2013,2014,2015,2016,2017];
  console.log('d13',d13[1]);
  d13 = featureExtraction(d13,2013);
  console.log('d13',d13[1]); 
  d14 = featureExtraction(d14,2014);
  d15 = featureExtraction(d15,2015);
  d16 = featureExtraction(d16,2016);
  d17 = featureExtraction(d17,2017);
  console.log("Feature Extracted")
  var data = d3.merge([d13,d14,d15,d16,d17]);
  console.log("Merged")
  console.log('Merged data sample \n', data[1]);

//PREPROCESSING---------------------------------------------------------------------------------
var bayar_pendapatan = [];
var bayar_keseluruhan = [];
var bayar_semua = [];
var tak_bayar = [];
var data_clean = [];
var jantina = [['JANTINA','BILANGAN'],
				 ['LELAKI',0],
				 ['PEREMPUAN',0],
				 ['TIDAK DIKETAHUI', 0]
				  ];

for (x in data)
{

	// console.log("x:" + data[x]);
  	if(checkComplete(data[x]) && data[x]['BAYARAN ZAKAT KESELURUHAN'] > 0)
  	{
  		data_clean.push(data[x]);
  	}

  	// if(data[x]['BAYARAN ZAKAT KESELURUHAN'] > 0)
  	// {
  	// 	bayar_keseluruhan.push(data[x]);
  	// }

  	if(data[x]['BAYARAN ZAKAT KESELURUHAN'] > 0)
  	{
  		bayar_pendapatan.push(data[x]);
  	}

  	// if( (data[x]['BAYARAN ZAKAT PENDAPATAN'] > 0) && (data[x]['BAYARAN ZAKAT KESELURUHAN'] > 0))
  	// {
  	// 	bayar_semua.push(data[x]);
  	// }

  	// if( (data[x]['BAYARAN ZAKAT PENDAPATAN']) <= 0 && (data[x]['BAYARAN ZAKAT KESELURUHAN'] <= 0))
  	// {
  	// 	tak_bayar.push(data[x]);
  	// }
  }
  console.log('cleaned data : \n' , data_clean);
// PRELOADER OUT
$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
//Count Jantina
  for(x in bayar_pendapatan)
  {
  	if(bayar_pendapatan[x]['JANTINA'] === 'L')
  	{
  		jantina[1][1] += 1;
  	}
  	else if(bayar_pendapatan[x]['JANTINA'] === 'P')
  	{
  		jantina[2][1] += 1;
  	} 
  	else
  	{
  		jantina[3][1] += 1;
  	} 
  }
  drawGender(jantina[1][1],jantina[2][1],jantina[3][1]);

  // console.log(countByKey(data, 'BAYARAN ZAKAT PENDAPATAN'));
  console.log("cleaned data length : " + data_clean.length);
  // console.log("bayar_pendapatan data length : " + bayar_pendapatan.length);
  // console.log("bayar_keseluruhan data length : " + bayar_keseluruhan.length);
  // console.log("bayar_semua data length : " + bayar_semua.length);
  // console.log(countSubKey(data));
  // console.log(countDistinctValue(tak_bayar,'YEAR'));

  //---------------------------------------------------------------------
   // var payment_by_value = sortKeyArray(range_of_payment);
  // drawOverall(keyToArrayInt(range_of_payment),valueToArrayInt(range_of_payment));
  // console.log('payment_by_value',payment_by_value);
  

  // var payment_by_frequency = sortValueArray(range_of_payment);  
  // drawScatterOverall(range_of_payment);
  // console.log('payment_by_frequency',payment_by_frequency);
  //---------------------------------------------------------------------
  //[Value, Frequency]
  var range_of_payment = dictCountToArray(countDistinctValue(data_clean,'BAYARAN ZAKAT KESELURUHAN'));
  var binned_payment = binningByKey(range_of_payment,20,30000);
  console.log('binned_payment',binned_payment);
  drawOverall(valueToArrayBy2Key(binned_payment,'min','max'),valueToArrayByKey(binned_payment,'value'));

  var year_bayar = valueToArrayInt(countDistinctValue(data_clean,'YEAR'));  
  var year_bayaran = valueToArrayInt(countValueByYear(data_clean,yearArray));
  drawYear(year_bayar, year_bayaran, yearArray);


  var state = countDistinctValue(data_clean,'NEGERI');
  var stateFreq = geoChartData(state);
  console.log("State freq: \n" , stateFreq);
  var negeri = keyToArray(state);
  drawNegeri(stateFreq);

  var stateVal = countValueByNegeri(data_clean,negeri);
  stateVal = geoChartData(stateVal);
  console.log("State value: \n" , stateVal);
  drawRose(stateFreq,stateVal,negeri);
  console.log('Negeri :\n',negeri);

  var customDataArray = customDataTrend(data_clean, negeri, yearArray);
  var custom_data = customDataArray[0];
  var dataList = customDataArray[1];

  drawCustomtrend(custom_data,negeri,yearArray, dataList);

  // Done



  //Debugging
  
 

}//end data combine



});