// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(driver => driver.name);
};

function exactMatch(driver, obj){
  return driver.filter(function(driver){
    let objKey = Object.keys(obj);
    let value = obj[objKey]
    return driver[objKey] === value;
  });
};

function exactMatchToList(driver, obj){
  let arrayOfMatches = exactMatch(driver, obj);
  return arrayOfMatches.map(match => match.name);
};
