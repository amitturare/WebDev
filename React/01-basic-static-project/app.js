/*
const page = (
    <div>
        <img src="react-logo.png" width="40px" />

        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013.</li>
            <li>Was originally created by Jordan Walke.</li>
            <li>Has well over 100k stars on GitHub.</li>
            <li>Is maintained by Meta.</li>
            <li>Powers thousands of enterprise apps, including mobile apps.</li>
        </ul>
    </div>
);

ReactDOM.render(page, document.querySelector("#root"));
*/

// Using components, our code can easily be debugged and reused.
/* 
Points to remember, 
- Name of the components should be in pascal case and not camel case.
- When rendering many components, add html start and end tags on the component name 
*/

/*
This is a complete page 👇
function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="react-logo.png" width="40px" />
                </nav>
            </header>

            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>
                    It's a popular library, so I'll be able to fit in with the
                    cool kids!
                </li>
                <li>
                    I'm more likely to get a job as a developer if I know React
                </li>
            </ol>

            <footer>
                <small>&#169; 2022 Amit Development. All rights reserved.</small>
            </footer>
        </div>
    );
}

Let's divide it into parent-child components and try again!
*/

function Header() {
    return (
        <header>
            <img src="react-logo.png" className="nav-logo" />

            <nav className="nav">
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <div className="main">
            <h1 className="heading">Reasons I'm excited to learn React</h1>
            <ol>
                <li>
                    It's a popular library, so I'll be able to fit in with the
                    cool kids!
                </li>
                <li>
                    I'm more likely to get a job as a developer if I know React
                </li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <small>&#169; 2022 Amit Development. All rights reserved.</small>
        </footer>
    );
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
