export const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};