function showNotes(id) {

let notes = document.getElementsByClassName("note");

for (let i = 0; i < notes.length; i++) {
    notes[i].style.display = "none";
}

document.getElementById(id).style.display = "block";
}

function openNote(file) {

window.open(file, "_blank");

}