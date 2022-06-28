function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value 
  return Math.abs(someValue - 42);
} 

function distanceFromHqInFeet(someValue) {
  return 264 * distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet 
} 

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled 
  return Math.abs((destination - start) * 264); 
} 

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer 
  let x = distanceTravelledInFeet(start, destination); 
  if (x <= 400) { 
    return 0;
  } 
  else if (x > 400 && x <= 2000){ 
    return 0.02 * (x - 400); 
  }
  else if (x > 2000 && x < 2500) { 
    return 25;
  } 
  else { 
    return "cannot travel that far";
  }
}