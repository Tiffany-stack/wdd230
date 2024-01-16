document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');
  
    button.addEventListener('click', function () {
      // Check if input is not blank
      if (input.value.trim() === '') {
        alert('Please enter a chapter before adding.');
        input.focus();
        return;
      }
  
      // Create li element
      const listItem = document.createElement('li');
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
  
      // Populate li element with input value
      listItem.textContent = input.value;
  
      // Append delete button to li element
      listItem.appendChild(deleteButton);
  
      // Append li element to the unordered list
      list.appendChild(listItem);
  
      // Add event listener to delete button
      deleteButton.addEventListener('click', function () {
        // Remove li element
        list.removeChild(listItem);
      });
  
      // Reset input value and focus
      input.value = '';
      input.focus();
    });
  });
  