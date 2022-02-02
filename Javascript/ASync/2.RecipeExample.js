// Recipe to make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion and boil for another 5 min

boilingWater(100000);
console.log(`Chop carrot`);
boilingWater(5000);
console.log(`Chop onion`);
boilingWater(5000);

// These all steps happen in sequence, but what if we want to boil the water in the background so that we can chop in that time, check next lesson


function boilingWater(time) {
    console.log('boiling...');
    for (let index = 0; index < time; index++) {
        console.log(`still not done...`);
    }
    console.log(`Done.`);
}
