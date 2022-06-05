/*
* React is declarative and composable. 
- Composable, because it lets you combine components to produce another React component.

- Declarative because we never interact with DOM, the UI is updated when we change the state.
For eg, 

ReactDOM.render(<h1 className="header">This is declarative way of writing.</h1>, root); // React can render only one single parent element.

const heading = document.createElement('h1');
heading.textContent = 'This is imperative way of writing.';
heading.className = 'header'
root.append(heading);

* JSX (JavaScript XML)
It is way of writing HTML in JS. 
For eg, 

const element = <h1>This is a heading.</h1>;
console.log(element); // Returns React Object
*/

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>This is a Navbar component.</h1>
        </nav>
    );
}

function MainComponent() {
    return (
        <main>
            <h1>This is a main component.</h1>
        </main>
    );
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainComponent />
    </div>,
    document.querySelector("#root")
);
