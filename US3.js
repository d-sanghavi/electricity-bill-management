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
    document.getElementById("paymentContainer").style.display = "none";
}

function showPayBill() {
    document.getElementById("billContainer").style.display = "block";
}

function calculateTotal() {
    let total = 0;
    document.querySelectorAll(".bill:checked").forEach(bill => {
        total += parseInt(bill.value);
    });
    document.getElementById("billAmount").innerText = total;
    document.getElementById("totalAmount").innerText = total + 5;
}

function proceedToPayment() {
    document.getElementById("billContainer").style.display = "none";
    document.getElementById("paymentContainer").style.display = "block";
}

function makePayment() {
    document.getElementById("paymentContainer").style.display = "none";
    document.getElementById("transactionContainer").style.display = "block";
}

function downloadReceipt() {
    let element = document.createElement('a');
    let text = "Transaction Successful\nTotal Amount Paid: $" + document.getElementById("totalAmount").innerText;
    let file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "receipt.txt";
    document.body.appendChild(element);
    element.click();
}