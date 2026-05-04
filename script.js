let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const input = document.getElementById("noteInput");

  if (input.value.trim() === "") return;

  notes.push(input.value);
  input.value = "";
  saveNotes();
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

function renderNotes() {
  const container = document.getElementById("notesList");
  const search = document.getElementById("search").value.toLowerCase();

  container.innerHTML = "";

  const filtered = notes.filter((note) => note.toLowerCase().includes(search));

  if (filtered.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>No notes found</p>";
    return;
  }

  filtered.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <span>${note}</span>
      <button class="delete-btn" onclick="deleteNote(${index})">X</button>
    `;

    container.appendChild(div);
  });
}

renderNotes();
