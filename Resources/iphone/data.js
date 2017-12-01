

var data = {};

function setData(obj) {
  data = obj;
}

function getData() {
  return data;
}

exports.setData = setData;
exports.getData = getData;