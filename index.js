// Code your solution here:
function driversWithRevenueOver(obj, num) {
  // debugger
  return obj.filter(function(driver) {

     return driver["revenue"] >= num;
  });

};


function driverNamesWithRevenueOver(obj, num) {
  const newArr =  driversWithRevenueOver(obj, num);

  return newArr.map(function(obj) {
    return obj.name
  });

}

function exactMatch(arr, obj) {
  const key = Object.keys(obj)[0];
  return arr.filter(function(driver) {
    return driver[key] === obj[key];
  });
}

function exactMatchToList(arr, obj) {
  let newArr = exactMatch(arr, obj);
    return newArr.map(function(driver) {
      return driver.name
  });

};
