function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(x) {
    return x.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let x = driversWithRevenueOver(drivers, revenue)
  return x.map(function(driver) {
    return driver.name
  });
}

function exactMatch(drivers, obj) {
  let key = Object.keys(obj)[0]
  return drivers.filter(function(driver) {
    return driver[key] === obj[key]
  });
}

function exactMatchToList(drivers, obj){
  const x = exactMatch(drivers, obj)
    return x.map(function(driver){
      return driver.name
    })
    return x
}
