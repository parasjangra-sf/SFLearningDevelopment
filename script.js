// Assignment 2 - CRUD Table Script
const originalUsers = [
  { first: "Paras", middle: "", last: "Jangra",email: "parasjangra678@gmail.com", phone: "9306856698", role: "QA", address: "Ambala city" },
  { first: "Sahil", middle: "", last: "Jassal", email: "sahil123@gmail.com", phone: "9123456780", role: "QA", address: "Mumbai" },
  { first: "Aniket", middle: "R", last: "Sharam", email: "ani@gmail.com", phone: "9988776655", role: "Developer", address: "Una" }
];
let users = [];
const loadBtn = document.getElementById('loadBtn');
const table = document.getElementById('userTable');
const tbody = table.querySelector('tbody');
const clone = obj => JSON.parse(JSON.stringify(obj));
// added the event listener
loadBtn.addEventListener('click', () => {
  console.log("Load button clicked - PR update");   // <-- Added for PR
  users = clone(originalUsers);      // reload original data
  users.forEach(u => u._editingBackup = null); // clear editing backups
  renderTable();
  table.style.display = 'table';
  loadBtn.textContent = 'Refresh data';
});
const renderTable = () => {
  tbody.innerHTML = '';
  users.forEach((user, index) => {
    const tr = document.createElement('tr');
    if (user._isEditing) {
      // Editable inputs
      tr.innerHTML = `
        <td><input data-field="first" value="${(user.first)}"></td>
        <td><input data-field="middle" value="${(user.middle)}"></td>
        <td><input data-field="last" value="${(user.last)}"></td>
        <td><input data-field="email" value="${(user.email)}"></td>
        <td><input data-field="phone" value="${(user.phone)}"></td>
        <td><input data-field="role" value="${(user.role)}"></td>
        <td><input data-field="address" value="${(user.address)}"></td>
        <td>
          <button class="save">Save</button>
          <button class="cancel">Cancel</button>
        </td>
      `;
      tr.querySelector('.save').addEventListener('click', () => saveRow(index, tr));
      tr.querySelector('.cancel').addEventListener('click', () => cancelEdit(index));
    } else {
      tr.innerHTML = `
        <td>${(user.first)}</td>
        <td>${(user.middle)}</td>
        <td>${(user.last)}</td>
        <td>${(user.email)}</td>
        <td>${(user.phone)}</td>
        <td>${(user.role)}</td>
        <td>${(user.address)}</td>
        <td>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </td>
      `;
      tr.querySelector('.edit').addEventListener('click', () => startEdit(index));
      tr.querySelector('.delete').addEventListener('click', () => deleteRow(index));
    }
    tbody.appendChild(tr);
  });
};
const startEdit = i => {
  users[i]._editingBackup = clone(users[i]);  // backup copy
  users[i]._isEditing = true;
  renderTable();
};
const cancelEdit = i => {
  if (users[i]._editingBackup) {
    users[i] = users[i]._editingBackup;
    users[i]._editingBackup = null;
  }
  users[i]._isEditing = false;
  renderTable();
};
const saveRow = (i, tr) => {
  const inputs = tr.querySelectorAll('input[data-field]');      //Is row (tr) ke andar jitne input boxes hain, un sabko nikaal lo.
  inputs.forEach(input => {                 //Har input ko ek-ek karke process karo.
    const key = input.dataset.field;        //data-field value ko key bana lo.
    users[i][key] = input.value;           //users array ke ith user me,key wali property ka value update karo.
  });
  users[i]._isEditing = false;
  users[i]._editingBackup = null;
  renderTable();
};
// delete user from table
const deleteRow = i => {
  if (confirm('Delete this user?')) {
    users.splice(i, 1);
    renderTable();
  } else {
    return;
  }
};