// Recipe to make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion and boil for another 5 min

// Some BROWSER Features
// Fetch Data, Get Geolocation, setTimeout, setTimer, etc
// callbacks, promises, async/await

boilWater();
console.log('chopping carrot');


function boilWater() {
    console.log('boiling...');
    setTimeout(() => {
        console.log(`done.`);
        console.log(`add carrots.`);
        setTimeout(() => {
            console.log('carrots are done');
            console.log('add onions');
            setTimeout(() => {
                console.log('onions are done');
            }, 5000)
        }, 5000)
        console.log('chopping onion');
    }, 10000);
}
