// Code your solution here:

//returns an array of driver objects that have a revenue attribute thats greater than the passed in revenue argument
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev)
}

//returns an array of STRINGSSSS representing the name of each driver who has a revenue greater than the specified amount.
function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev).map(driver => driver.name)
}

//will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob
function exactMatch(drivers, attr) {  //attr is same as {revenue: 3000}
  return drivers.filter(driver => driver[Object.keys(attr)[0]] === Object.values(attr)[0]) //Object.keys[attr] gives the value of revenue in an array but [0] gives the value in string
}

function exactMatchToList(drivers, attr) {
  return drivers.filter(driver => driver[Object.keys(attr)[0]] === Object.values(attr)[0]).map(driver => driver.name)
}
