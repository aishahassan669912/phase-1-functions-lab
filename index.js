// Code your solution in this file!
function distanceFromHqInBlocks(somvalue) {
    const hq= 42;
    return Math.abs(somvalue -hq)
    
    //returns the number of blocks given a value
  }
  function distanceFromHqInfeet(somvalue){
    return distanceFromHqInBlocks(someValue) *264;
  }
  // Function to calculate distance from HQ (42nd street)
function distanceFromHqInBlocks(street) {
  const headquarters = 42;
  return Math.abs(street - headquarters);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264; // 1 block = 264 feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0; // Free sample
  } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
  } else if (distance <= 2500) {
      return 25; // Flat rate for long distances
  } else {
      return 'cannot travel that far'; // Exceeds limit
  }
}

// Export functions for testing
module.exports = {
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
