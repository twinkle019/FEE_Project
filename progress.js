// ================= USER DATA =================
const users = {

    "navya2616.beai25@chitkara.edu.in": {
        password: "Navya@2616",
        name: "Navya Choudhary",
        email: "navya2616.beai25@chitkara.edu.in",
        phone: "7015283107",
        address: "Amravati Enclave, Chandimandir, Panchkula, Haryana",
        father: "Mr. Nitin Kumar",
        mother: "Mrs. Mamta Tanwar",
        dob: "08/12/2007",
        blood: "A+",

        progress: {
            fcp1:19,
            fcp2:20,
            faa1:18,
            faa2:19,
            fee1:17,
            fee2:18,
            os1:16,
            os2:18,
            dm1:19,
            dm2:20
        }
    },

    "twinkle2597.beai25@chitkara.edu.in": {
        password: "Twinkle@2597",
        name: "Twinkle Arora",
        email: "twinkle2597.beai25@chitkara.edu.in",
        phone: "9815140047",
        address: "Patiala, Punjab",
        father: "Mr. Ramesh Kumar Arora",
        mother: "Mrs. Yashika Arora",
        dob: "19/01/2006",
        blood: "O+",

        progress: {
            fcp1:18,
            fcp2:20,
            faa1:17,
            faa2:19,
            fee1:16,
            fee2:18,
            os1:19,
            os2:20,
            dm1:20,
            dm2:20
        }
    },

    "vanshika2571.beai25@chitkara.edu.in": {
        password: "Vanshika@2571",
        name: "Vanshika",
        email: "vanshika2571.beai25@chitkara.edu.in",
        phone: "9592975220",
        address: "Kharkhas Colony, division num 4, near Nehru park, Patiala",
        father: "Mr. Tarsem lal",
        mother: "Mrs. Geeta satija",
        dob: "14/06/2007",
        blood: "B+",

        progress: {
            fcp1:15,
            fcp2:18,
            faa1:16,
            faa2:17,
            fee1:14,
            fee2:16,
            os1:18,
            os2:19,
            dm1:17,
            dm2:18
        }
    }
};


// ================= LOGIN =================
function checkLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (users[email] && users[email].password === password) {

        localStorage.setItem("userEmail", email);

        window.location.href = "homeo.html";

    } else {

        alert("Invalid Login Details");
    }
}


// ================= LOAD DATA =================
window.onload = function () {

    let email = localStorage.getItem("userEmail");

    if (!email || !users[email]) {
        return;
    }

    let user = users[email];

    // ===== SHOW STUDENT NAME =====
    let nameEl = document.getElementById("name");

    if (nameEl) {
        nameEl.innerText = user.name;
    }

    // ===== SHOW PROGRESS MARKS =====
    for (let key in user.progress) {

        let el = document.getElementById(key);

        if (el) {
            el.innerText = user.progress[key];
        }
    }
};


// ================= LOGOUT =================
function logout() {

    localStorage.removeItem("userEmail");

    window.location.href = "login.html";
}