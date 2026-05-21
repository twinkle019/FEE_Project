function togglePass() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("msg");

    if (pass !== confirm) {
        msg.style.color = "red";
        msg.innerText = "Passwords do not match";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        msg.style.color = "red";
        msg.innerText = "Invalid phone number";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Registration Successful!";
});