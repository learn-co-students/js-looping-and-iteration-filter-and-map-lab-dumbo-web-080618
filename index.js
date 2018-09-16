// Code your solution here:
function driversWithRevenueOver(arr, num){
  return arr.filter((n) => n.revenue > num);
}

function driverNamesWithRevenueOver(arr, num) {
  return driversWithRevenueOver(arr, num).map((n) => n.name);
}

function exactMatch(arr, obj) {
  return arr.filter((n) => {
    key = Object.keys(obj);
     return n[key] === obj[key];
  })
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map((n) => n.name);
}
