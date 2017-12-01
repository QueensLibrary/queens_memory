// Arguments passed into this controller can be accessed via the `$.args` object directly or:
// var args = $.args;

var data ={};

function setData (obj){
	data = obj;
}

function getData () {  
    return data;
}

// The special variable 'exports' exposes the functions as public
exports.setData = setData;
exports.getData = getData;