$(document).ready(function(){

	function startWorker() {
    if(typeof(Worker) !== "undefined") 
    {
        if(typeof(w) == "undefined") 
        {
        	w = new Worker("./js/data-loader.js");
	    }
			console.log("Loading data...");
	    } 
	    else 
	    {
	        alert("Sorry! No Web Worker support.");
	    }
	}

	function stopWorker() { 
	    w.terminate();
	    w = undefined;
	}

//init
	startWorker();
})