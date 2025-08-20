function registerConsumer() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    let customerId = Math.floor(1000000000000 + Math.random() * 9000000000000);
    document.getElementById("generatedCustomerId").innerText = customerId;
    document.getElementById("displayName").innerText = document.getElementById("customerName").value;
    document.getElementById("displayEmail").innerText = document.getElementById("email").value;
    
    //document.getElementById("registrationForm").style.display = "none";
    // document.getElementById("acknowledgment").style.display = "block";
}