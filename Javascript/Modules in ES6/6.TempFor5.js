// getElement function 

export default (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw Error(`You didn't select an appropriate element`)
    }
} 