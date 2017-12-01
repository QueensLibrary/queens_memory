function setData(obj) {
    data = obj;
}

function getData() {
    return data;
}

var data = {};

exports.setData = setData;

exports.getData = getData;