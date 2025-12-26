CRUD User Table – JavaScript Assignment

This project is a simple CRUD (Create, Read, Update, Delete) user table built using vanilla JavaScript without any external libraries or frameworks.

The application starts with a predefined set of user data stored in an originalUsers array. To keep the original data safe, a separate users array is used as a working copy. All operations such as edit and delete are performed on this copied data.

A Load / Refresh button is provided to load the original data into the table at any time. The table is rendered dynamically using JavaScript DOM manipulation.

Each row in the table supports Edit and Delete actions:

When the Edit button is clicked, the row switches into edit mode with input fields.

Before editing, a backup of the row data is created so changes can be safely canceled.

Save updates the user details, while Cancel restores the original values.

Delete removes the selected user after confirmation.

The table is re-rendered after every operation to ensure the UI always stays in sync with the data.

This project demonstrates core JavaScript concepts such as:

DOM manipulation

Event handling

Closures

Immutability using deep cloning

Dynamic rendering and state management


JavaScript Concepts (Basic Understanding)

Below are some JavaScript concepts that I understand and have learned while working on this assignment.

What is Hoisting in JavaScript?

Hoisting means that JavaScript moves variable and function declarations to the top of the code before execution.

Variables declared with var are hoisted and get value undefined

let and const are hoisted but cannot be used before declaration

Function declarations are fully hoisted

In simple words, JavaScript knows about variables and functions before the code runs.

What are Closures?

A closure is created when a function remembers variables from its outer function, even after the outer function has finished running.

Closures are useful because:

They help remember values

They help keep data safe

They are used to manage state in JavaScript

What are Promises?

Promises are used to handle asynchronous operations, like fetching data from a server.

A promise can be in three states:

Pending (operation is not finished)

Fulfilled (operation is successful)

Rejected (operation failed)

Promises make asynchronous code easier to manage.

What is Async–Await?

async and await are used with promises to make asynchronous code easy to read and understand.

async is written before a function

await waits for the promise to complete before moving forward

Async–await helps write cleaner and more readable code.

Use of CSS in This Project

CSS is used in this project to improve the layout and readability of the user interface.

Basic CSS is applied to the table, buttons, and input fields

CSS is linked using an external style.css file

The styling is kept simple to focus on functionality

Summary

The assignment showcases how CRUD operations can be implemented using pure JavaScript with clean logic, safe data handling, and a user-friendly interface.
