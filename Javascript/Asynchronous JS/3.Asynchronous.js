// Recipe to make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion and boil for another 5 min

// Some BROWSER Features
// Fetch Data, Get Geolocation, setTimeout, setTimer, etc
/* 
setTimeout: imagine some for loop is going on for 1,000,000 and setTimeout is set to be executed after 5 seconds. To complete the for loop it is taking more than 5 seconds, so the time when those 5 secs are over the setTimeout won't be executed but will wait for 'for loop' to be done. This is because the time mentioned in the setTimeout is the minimum time 
*/

boilingWater(10000);
console.log(`chop carrots`);
// Now observe the console log, boiling water is happening in the background and we are able to chop the carrots

function boilingWater(time) {
    console.log('boiling...');
    setTimeout(() => { // setTimeout takes function and executes it in the time mentioned
        console.log(`Done.`);
    }, time);
}

// EXAMPLE to show that the time in the setTimeout is the minimum time
// boilingWater(1000);
// console.log(`chop carrots`);
// for (let i = 0; i < 10000; i++) {
//     console.log(`still busy`);;
    
// }
// // Observe here that 1 sec gets over but still boiling water is done after the the for loop is over

// function boilingWater(time) {
//     console.log('boiling...');
//     setTimeout(() => { // setTimeout takes function and executes it in the time mentioned
//         console.log(`Done.`);
//     }, time);
// }
