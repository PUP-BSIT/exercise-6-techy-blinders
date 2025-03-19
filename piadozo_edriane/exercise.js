document.addEventListener("DOMContentLoaded", function() {
    let nameInput = document.getElementById("my_text_js");
    let submitButton = document.getElementById("submit_button_js");
    let commentTextarea = document.getElementById("my_textarea_js");

    function checkInputs() {
        if (nameInput.value.trim()
                    && commentTextarea.value.trim()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }   
    }

    nameInput.addEventListener("input", checkInputs);
    commentTextarea.addEventListener("input", checkInputs);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (!nameInput.value.trim()
                    || !commentTextarea.value.trim()) {               
            alert("Please complete the form");
        } else {
            alert("Thank you, Your message is submitted");
        }
    });
});