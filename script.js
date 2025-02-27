let notes = [
    {
        title : "judul 1",
        description : "description 1"
    },
    {
        title : "judul 2",
        description : "description 2"
    },
    {
        title : "judul 3",
        description : "description 3"
    }
];

let notesElement = document.getElementById("notes-list");

function renderNotes() {
    notesElement.innerHTML = " ";
    notes.forEach((note, index) => {
        const newElement = `
            <div class="note">
                <h3> ${note.title} </h3>
                <p> ${note.description} </p>
                <button onclick="deleteNote(${index})" > Hapus  </button>
            </div>
        `;
        notesElement.innerHTML += newElement;
    });
}


function addNote() {
    const newTitle = document.getElementById("title").value;
    const newDescription = document.getElementById("description").value;
    if (newTitle && newDescription && newTitle.lenght > 1 && newDescription.lenght > 1)
        {
        const newData = {
            title : newTitle,
            description : newDescription
        };
        notes.push(newData);
        renderNotes();
    }
}

function deleteNote() {
    notes.splice(index, 1)
    renderNotes
}

renderNotes();