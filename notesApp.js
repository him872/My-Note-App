const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

showNotes();

function addNotes() {
  let notes = localStorage.getItem('notes');
  if (notes === null) {
    notes = [];
  }
  else {
    notes = JSON.parse(notes);
  }

  if (addText.value == '') {
    alert('Add Your Note');
    return;
  }

  const noteobj = {
    title: addTitle.value,
    text: addText.value,
  }

  addTitle.value = '';
  addText.value = '';

  notes.push(noteobj);
  localStorage.setItem('notes', JSON.stringify(notes));
  showNotes();
}

// Local Storage vs Session Storage
// JSON : Javascript Object Notation


function showNotes() {
  let notesHTML = ``;
  let notes = localStorage.getItem('notes');

  if (notes === null) {
    return;
  }
  else {
    notes=JSON.parse(notes);
  }

  for (let i = 0; i < notes.length; i++) {
    notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <div class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</div>
                    <div class="text">${notes[i].text}</div>
                  </div>
                 `
  }
  notesDiv.innerHTML = notesHTML;
}

function deleteNote(index) {
  let notes = localStorage.getItem('notes');
  if (notes === null) {
    return;
  }
  else {
    notes=JSON.parse(notes);
  }

  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  showNotes();
}

addNoteButton.addEventListener('click', addNotes);