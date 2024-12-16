let email = document.getElementById("email");
let dangerIcon = document.getElementById('danger-button');
let dangerText = document.getElementById("danger-text");
let form = document.getElementById("form");

form.addEventListener("click", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        dangerIcon.style.display = "block"
        dangerText.style.display = "block"
    } else {
        dangerIcon.style.display = "none"
        dangerText.style.display = "none"
    }
})