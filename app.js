
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const error = document.querySelector(".error"); 
const btn = document.querySelector("#submit");
const inputTexts = document.querySelectorAll('input[required]');
const email = document.querySelector("#email");



var dict = {
    "firstname": false,
    "lastname": false,
    "mail": false,
    "phone": false,
    "password1": false,
    "password2":false,
    "matching": false
}

password2.addEventListener("input", () => {
    if (password1.value === password2.value && password1.value != "") {
        password1.classList.remove("invalid");
        password2.classList.remove("invalid");
        password1.classList.add("valid");
        password2.classList.add("valid");
        error.style.display = "none";
        dict["matching"] = true;
    } else {
        password1.classList.remove("valid");
        password2.classList.remove("valid");
        password1.classList.add("invalid");
        password2.classList.add("invalid");
        error.style.display = "inline";
        dict["matching"] = false;
        btn.disabled = true;
    }
});

inputTexts.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            dict[input.id] = true;
        } else {
            dict[input.id] = false;
            btn.disabled = true;
        }

        for (const key in dict) {
            if (!dict[key]) return;
        }

        btn.disabled = false;
    })
});