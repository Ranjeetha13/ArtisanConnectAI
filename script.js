document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userType = document.getElementById("userType").value;
    if (userType === "consumer") {
        window.location.href = "consumer.html";
    } else {
        window.location.href = "artisan.html";
    }
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup successful!");
});

document.getElementById("showSignup").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".login-box").style.display = "none";
    document.querySelector(".signup-box").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".signup-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
});
