// window object = broswer api = the whole tab
// Within the window object we have the document where our content displays
// console.dir

console.log(window); 
// In the window there is alert (second item)
// alert('Hello') // alert object comes under window which means we should write 👇
// window.alert('Hello All') // since window is the parent and nothing above it, we can avoid writing window
// Same thing with document object as it is child of window (parent)

// Try consolelog the document
console.log(document); // gives our same HTML
// Try console.dir(document)
console.dir(document) // shows the properties or methods we can access