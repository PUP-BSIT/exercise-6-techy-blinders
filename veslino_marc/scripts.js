let nameInput = document.getElementById('name_person');
let commentInput = document.getElementById('comment_of_person');
let submitButton = document.getElementById('comment_button');

function checkForm() {
        submitButton.disabled = !nameInput.value.trim() || 
                !commentInput.value.trim();
}

nameInput.addEventListener('input', checkForm);
commentInput.addEventListener('input', checkForm);

checkForm();