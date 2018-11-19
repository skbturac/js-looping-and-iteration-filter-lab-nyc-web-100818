// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (driverName) {
    return driverName.toUpperCase() == name.toUpperCase(); }
  );
}
 function fuzzyMatch(drivers, letter){
  return drivers.filter(function (driverName) {
    return driverName.startsWith(letter); }
  );
}
 function matchName(drivers, name){
  return drivers.filter(function (driver) {
    return driver.name == name; }
  );
}
