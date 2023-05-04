import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h2>Question-1: Tell us the differences between uncontrolled and controlled components.</h2>
                <p>The main differences between uncontrolled and controlled components are ownership, customization, integration, and maintenance. Uncontrolled components are owned by the user or a third-party vendor, while controlled components are owned and managed by the software development team. Uncontrolled components can be customized by the user, while controlled components are not typically customizable. Uncontrolled components are integrated into the system by the user, while controlled components are tightly integrated by the development team. Finally, uncontrolled components are maintained by the user or vendor, while controlled components are maintained and updated by the software development team.</p>
            </div>
            <div>
                <h2>Question-2: How to validate React props using PropTypes</h2>
                <p>In React, PropTypes is a type-checking library that can be used to validate the props that are passed to a component. PropTypes can help ensure that the correct type of data is being passed to a component, and can help catch bugs early in development.</p>
            </div>
            <div>
                <h2>Question-3: Tell us the difference between nodejs and express js.</h2>
                <p>The main differences between Node.js and Express.js are:

                    Functionality: Node.js provides the runtime environment for executing JavaScript on the server-side, while Express.js is a web framework that is built on top of Node.js, and provides additional features for building web applications.

                    Level of abstraction: Node.js provides a low-level API for building server-side applications, while Express.js provides a higher-level API that simplifies the process of building web applications.

                    Routing and middleware: Express.js provides built-in routing and middleware functionality, while Node.js does not. This makes it easier to define routes and handle HTTP requests in Express.js.

                    Customizability: Node.js allows developers to build applications from scratch, giving them complete control over the application architecture and design. Express.js provides pre-built features that can be customized to fit the needs of the project.</p>
            </div>
            <div>
                <h2>Question-4: What is a custom hook, and why will you create a custom hook?</h2>
                <p>n React, a custom hook is a JavaScript function that starts with the prefix use and follows the rules of Hooks. Custom hooks allow developers to reuse stateful logic across multiple components, making it easier to share code and reduce code duplication.

                    A custom hook encapsulates logic that can be reused across multiple components. It can extract and manage stateful logic that is related to a specific feature or behavior. For example, a custom hook could encapsulate logic related to fetching data from an API, managing the state of a form, or handling authentication.</p>
            </div>
        </div>
    );
};

export default Blog;