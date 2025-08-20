function loginUser() {
    let userId = document.getElementById("loginUserId").value;
    let password = document.getElementById("loginPassword").value;
    if (userId && password) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("homePage").style.display = "block";
        document.getElementById("welcomeUser").innerText = userId;
    } else {
        alert("Invalid credentials!");
    }
}

function logoutUser() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
}

function showHome() {
    document.getElementById("billContainer").style.display = "none";
    document.getElementById("registerComplaintContainer").style.display = "none";
}

function showPayBill() {
    document.getElementById("billContainer").style.display = "block";
}

function showRegisterComplaint() {
    document.getElementById("registerComplaintContainer").style.display = "block";
}

function submitComplaint() {
    alert("Complaint registered successfully with ID: " + Math.floor(Math.random() * 100000));
    resetComplaintForm();
}

function resetComplaintForm() {
    document.getElementById("registerComplaintContainer").reset();
}

funct  alert("The form was submitted");
  roution myFunction() {

}