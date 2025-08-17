// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time;
  switch(name){
    case "Pure Strawberry Joy":
      time = 0.5
      break;
    case "Energizer":
      time = 1.5
      break;
    case "Green Garden":
      time = 1.5
      break;
    case "Tropical Island":
      time = 3
      break;
    case "All or Nothing":
      time = 5
      break;
    default:
      time = 2.5;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let slices = 0;
  let i = 0;
  while(slices<wedgesNeeded && i < limes.length){
    switch(limes[i]){
      case "small":
        slices = slices + 6
        break;
      case "medium":
        slices = slices + 8
        break;
      case "large":
        slices = slices + 10
        break;
    }
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do{
    let drink = orders.shift();
    switch (drink){
      case  "Pure Strawberry Joy":
        timeLeft = timeLeft - 0.5
        break;
      case  "Energizer":
        timeLeft = timeLeft - 1.5
        break;
      case "Green Garden":
        timeLeft = timeLeft - 1.5
        break;
      case "Tropical Island":
        timeLeft = timeLeft - 3
        break;
      case "All or Nothing":
        timeLeft = timeLeft - 5;
        break;
      default:
        timeLeft = timeLeft - 2.5;
    }
  }
    while(timeLeft > 0)
  return orders;
}
