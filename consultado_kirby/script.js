let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let button = document.getElementById("comment_button");

function toggleButton() {
    let isFilled = nameInput.value.trim() && commentInput.value.trim();
    button.disabled = !isFilled;
}

nameInput.addEventListener("input", toggleButton);
commentInput.addEventListener("input", toggleButton);