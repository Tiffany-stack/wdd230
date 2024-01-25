document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');
  
    // Get stored chapters from localStorage or initialize as an empty array
    let chaptersArray = getChapterList() || [];
  
    // Populate the list with stored chapters on page load
    chaptersArray.forEach(chapter => {
      displayList(chapter);
    });
  
    button.addEventListener('click', function () {
      // Check if input is not blank
      if (input.value.trim() === '') {
        alert('Please enter a chapter before adding.');
        input.focus();
        return;
      }
  
      // Call displayList function with the input value
      displayList(input.value);
  
      // Add the chapter to the array
      chaptersArray.push(input.value);
  
      // Update localStorage with the new array
      setChapterList();
  
      // Clear the input and set focus back to it
      input.value = '';
      input.focus();
    });
  
    // Function to display list item with delete button
    function displayList(item) {
      let li = document.createElement('li');
      let deleteButton = document.createElement('button');
      li.textContent = item;
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
      li.append(deleteButton);
      list.append(li);
  
      // Event listener for delete button
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        // Call deleteChapter function to remove the chapter from the array and localStorage
        deleteChapter(li.textContent);
        input.focus();
      });
    }
  
    // Function to update localStorage with the current array
    function setChapterList() {
      localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
  
    // Function to get stored chapters from localStorage
    function getChapterList() {
      const storedChapters = localStorage.getItem('myFavBOMList');
      return storedChapters ? JSON.parse(storedChapters) : null;
    }
  
    // Function to delete a chapter from the array and update localStorage
    function deleteChapter(chapter) {
      // Remove the ❌ from the chapter string
      chapter = chapter.slice(0, chapter.length - 1);
      // Filter out the deleted chapter from the array
      chaptersArray = chaptersArray.filter(item => item !== chapter);
      // Update localStorage with the modified array
      setChapterList();
    }
  });
  