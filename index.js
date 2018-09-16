// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){return driver.revenue >= revenue})
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){return driver.name})
}

function exactMatch(drivers, query){
  return drivers.filter(function(driver){return driver[Object.keys(query)[0]] === query[Object.keys(query)[0]]})
}

function exactMatchToList(drivers, query){
  return exactMatch(drivers, query).map(function(driver){return driver.name})
}
