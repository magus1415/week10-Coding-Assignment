let id = 0;

document.getElementById('add').addEventListener('click', () => {
    // targeting our table in html
    let table = document.getElementById('list');
    // inserting a row in our table
    let row = table.insertRow(1);
    // setting an id in the row but with a different unique id since we will id++ later
    row.setAttribute('id', `item-${id}`)
    // inserting a value into the respective cell, getting value from our html input and pointing to that id
    row.insertCell(0).innerHTML = document.getElementById('first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('character-role').value;
    let actions = row.insertCell(3);
    // creating a delete button
    actions.appendChild(createDeleteButton(id++));
    // this clears the form field after every entry
    document.getElementById('first-name').value = '';
})

// id still being incremented after every click and enters into the function
function createDeleteButton(id) {
    // creating button with class btn-danger
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger'
    btn.innerHTML = 'Remove';
    btn.onclick = () => {
        // removing the id that was set ealier with the respective id number
        let elementToDelete = document.getElementById(`item-${id}`);        
        elementToDelete.parentNode.removeChild(elementToDelete)
    }
    return btn;
}