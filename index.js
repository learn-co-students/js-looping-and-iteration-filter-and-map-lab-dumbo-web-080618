// Code your solution here:

function driversWithRevenueOver(drivers, num){
  const m = drivers.filter(function(name) {
      if(name.revenue > num ){
        return name;
      }
    });
    return m
}

function driverNamesWithRevenueOver(drivers, num){
  const m = driversWithRevenueOver(drivers, num).map(function(name) {
      return name.name;
    });
    return m
}

function exactMatch (drivers, matcher) {
  const m =  drivers.filter(function (name) {
    let matches = false;

    for (const key in matcher) {
      matches = name[key] === matcher[key];
    }

    return matches;
  });
  return m
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (name) {
      return name.name;
    });
}
