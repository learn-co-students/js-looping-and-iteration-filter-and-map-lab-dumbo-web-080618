// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(ele){
   
      return ele.revenue > revenue;
    
    
  });
  
}

function driverNamesWithRevenueOver(drivers,revenue){
  let arr = [];
  
  ans = drivers.filter(function(ele){
      return  ele.revenue > revenue;
      });
    
    
    
  
  
  for(let i = 0; i < ans.length; i++){
  arr.push(ans[i].name)        
  }  
  return arr;
  
}


function  exactMatch(drivers,obj){
  return drivers.filter( function(ele) {
 if (obj.name !== undefined) {
   return ele.name === obj.name; }
   else {
   return ele.revenue === obj.revenue;
  }
});
}


function  exactMatchToList(drivers, obj){
  return exactMatch (drivers, obj).map (function (ele) {return ele.name})
}
