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

Summary

The assignment showcases how CRUD operations can be implemented using pure JavaScript with clean logic, safe data handling, and a user-friendly interface.
