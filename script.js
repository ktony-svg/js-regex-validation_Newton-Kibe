document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const successMessage = document.getElementById("successMessage");

    // Validation functions using Regular Expressions
    function validateFullName(name) {
        return /^[A-Za-z ]+$/.test(name);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^\d{10,15}$/.test(phone);
    }

    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }

    // Function to show error messages
    function showError(input, message) {
        const errorElement = document.getElementById(input.id + "Error");
        errorElement.textContent = message;
        input.classList.add("error");
    }

    // Function to clear error messages
    function clearError(input) {
        const errorElement = document.getElementById(input.id + "Error");
        errorElement.textContent = "";
        input.classList.remove("error");
    }

    // Real-time validation
    form.addEventListener("input", function(event) {
        const target = event.target;
        if (target === fullName) {
            validateFullName(fullName.value) ? clearError(fullName) : showError(fullName, "Only letters and spaces allowed.");
        } else if (target === email) {
            validateEmail(email.value) ? clearError(email) : showError(email, "Enter a valid email.");
        } else if (target === phone) {
            validatePhone(phone.value) ? clearError(phone) : showError(phone, "Enter a valid phone number (10-15 digits).");
        } else if (target === password) {
            validatePassword(password.value) ? clearError(password) : showError(password, "Must contain 8+ chars, one uppercase, one lowercase, and one number.");
        }
    });

    // Form submission validation
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        if (!validateFullName(fullName.value)) {
            showError(fullName, "Only letters and spaces allowed.");
            isValid = false;
        }
        if (!validateEmail(email.value)) {
            showError(email, "Enter a valid email.");
            isValid = false;
        }
        if (!validatePhone(phone.value)) {
            showError(phone, "Enter a valid phone number (10-15 digits).");
            isValid = false;
        }
        if (!validatePassword(password.value)) {
            showError(password, "Must contain 8+ chars, one uppercase, one lowercase, and one number.");
            isValid = false;
        }

        // If all validations pass, show success message
        if (isValid) {
            successMessage.textContent = "Registration Successful!";
            successMessage.style.color = "green";
            form.reset();
        }
    });
});
