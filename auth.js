function handleRegister() {
    const name = document.getElementById('reg-name').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    const district = document.getElementById('reg-district').value.trim();
    const college = document.getElementById('reg-college').value.trim();

    if(!name || !phone || !email || !pass) {
        alert("Please fill in all required fields!");
        return;
    }

    // Save user details to LocalStorage temporarily
    const userData = { name, phone, email, pass, district, college };
    localStorage.setItem('nano_user', JSON.stringify(userData));
    
    alert("Registration Successful! Please login.");
    window.location.href = "login.html";
}

function handleLogin() {
    const identifier = document.getElementById('login-identifier').value.trim();
    const pass = document.getElementById('login-pass').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Default admin check or local storage check
    const savedUser = JSON.parse(localStorage.getItem('nano_user'));

    if ((identifier === "siyam19065@gmail.com" || identifier === "01700000000") && pass === "Siyam123@#") {
        localStorage.setItem('active_user', JSON.stringify({ name: "Siyam", email: "siyam19065@gmail.com", phone: "01700000000", district: "Dhaka", college: "Ideal College" }));
        window.location.href = "dashboard.html";
    } else if (savedUser && (savedUser.email === identifier || savedUser.phone === identifier) && savedUser.pass === pass) {
        localStorage.setItem('active_user', JSON.stringify(savedUser));
        window.location.href = "dashboard.html";
    } else {
        errorMsg.style.display = 'block';
    }
}
