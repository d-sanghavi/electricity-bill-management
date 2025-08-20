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
    alert("You are already on the home page!");
}

function showPayBill() {
    document.getElementById("billContainer").style.display = "block";
}

function showRegisterComplaint() {
    alert("Redirecting to Register Complaint screen...");
}

function showComplaintStatus() {
    alert("Redirecting to Complaint Status screen...");
}

function calculateTotal() {
    let total = 0;
    document.querySelectorAll(".bill:checked").forEach(bill => {
        total += parseInt(bill.value);
    });
    document.getElementById("totalAmount").innerText = total;
}

function proceedToPay() {
    alert("Redirecting to Payment screen...");
}