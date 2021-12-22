// Switch Statement
// Its the another way of writting if and else

const diceResult = 1;

switch (diceResult) {
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
        break;
    case 4:
        console.log('you got four');
        break;
    case 5:
        console.log('you got five');
        break;
    case 6:
        console.log('you got six');
        break;
    default:
        console.log("you didn't roll the dice");
        break;
}


// ELSE IF
// if (diceResult === 1) {
//     console.log('you got one');
// }
// else if (diceResult === 2) {
//     console.log('you got two');
// }
// else if (diceResult === 3) {
// //     console.log('you got three');
// // }
// else if (diceResult === 4) {
// //     console.log('you got four');
// // }
// else if (diceResult === 5) {
// //     console.log('you got five');
// // }
// else if (diceResult === 6) {
// //     console.log('you got six');
// // }
// else {
//     console.log('Roll the dice!');
// }


// ALL IF
// if (diceResult === 1) {
//     console.log('you got one');
// }
// if (diceResult === 2) {
//     console.log('you got two');
// }
// if (diceResult < 1 || diceResult > 6) {
//     console.log('Roll the dice!');
// }