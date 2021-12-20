// True and False
// it always come false when there is a empty string or something like this -->
// "", '', ``, 0, -0, NaN, false, null, undefined

const text = ''; // this is because in JS all the values are true or false, even if the value itself isn't a boolean
if (text) {
    console.log('True');
} else {
    console.log('False');
}


const text1 = 'something';
if (text1) {
    console.log('True');
} else {
    console.log('False');
}