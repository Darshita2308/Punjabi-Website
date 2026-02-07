// ============================================
// AUTHENTICATION SYSTEM
// Professional & Secure Login
// ============================================

const AUTH_CREDENTIALS = {
    username: "user",
    password: "123456789"
};

const AUTH_KEY = "punjabi_sabha_auth";
const AUTH_TIMESTAMP = "punjabi_sabha_auth_time";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Check if user is authenticated
function isAuthenticated() {
    const auth = sessionStorage.getItem(AUTH_KEY);
    const timestamp = sessionStorage.getItem(AUTH_TIMESTAMP);

    if (auth !== "true") return false;

    // Check if session has expired
    if (timestamp) {
        const loginTime = parseInt(timestamp);
        const currentTime = Date.now();
        if (currentTime - loginTime > SESSION_DURATION) {
            logout();
            return false;
        }
    }

    return true;
}

// Login function
function login(username, password) {
    if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
        sessionStorage.setItem(AUTH_KEY, "true");
        sessionStorage.setItem(AUTH_TIMESTAMP, Date.now().toString());
        return { success: true, message: "Login successful!" };
    }
    return { success: false, message: "Invalid username or password. Please try again." };
}

// Logout function
function logout() {
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_TIMESTAMP);
    window.location.href = "index.html";
}

// Protect page - redirect to login if not authenticated
function protectPage() {
    if (!isAuthenticated()) {
        window.location.href = "index.html";
        return false;
    }
    return true;
}

// Initialize login page
function initLoginPage() {
    // If already logged in, redirect to home
    if (isAuthenticated()) {
        window.location.href = "home.html";
        return;
    }

    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");
    const errorSpan = errorMessage ? errorMessage.querySelector("span") : null;

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            // Basic validation
            if (!username || !password) {
                showError(errorMessage, errorSpan, "Please enter both username and password.");
                return;
            }

            const result = login(username, password);

            if (result.success) {
                // Add success animation before redirect
                const loginBtn = document.querySelector(".login-btn");
                if (loginBtn) {
                    loginBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
                    loginBtn.style.background = "linear-gradient(135deg, #059669, #047857)";
                }

                setTimeout(() => {
                    window.location.href = "home.html";
                }, 500);
            } else {
                showError(errorMessage, errorSpan, result.message);

                // Shake animation
                loginForm.classList.add("shake");
                setTimeout(() => loginForm.classList.remove("shake"), 500);

                // Clear password field
                document.getElementById("password").value = "";
                document.getElementById("password").focus();
            }
        });
    }

    // Toggle password visibility
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function() {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);

            const icon = this.querySelector("i");
            if (icon) {
                icon.className = type === "password" ? "fas fa-eye" : "fas fa-eye-slash";
            }
        });
    }

    // Add enter key support for inputs
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
        usernameInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                passwordInput.focus();
            }
        });
    }
}

// Show error message with animation
function showError(errorElement, errorSpan, message) {
    if (errorElement) {
        if (errorSpan) {
            errorSpan.textContent = message;
        } else {
            errorElement.textContent = message;
        }
        errorElement.style.display = "flex";
        errorElement.style.alignItems = "center";
        errorElement.style.gap = "10px";

        // Auto-hide error after 5 seconds
        setTimeout(() => {
            errorElement.style.display = "none";
        }, 5000);
    }
}
