// Runs after the page has loaded
document.addEventListener("DOMContentLoaded", function () {
    setupFormValidation();
});

// Checks the contact form and shows a local preview (nothing is sent)
function setupFormValidation() {
    const form = document.querySelector("#contact form");
    const result = document.getElementById("form-result");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const topic = document.getElementById("topic").value.trim();
        const message = document.getElementById("message").value.trim();

        const errors = [];
        if (name === "") errors.push("Please enter your name.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("Please enter a valid email address.");
        }
        if (message === "") errors.push("Please enter a message.");

        result.innerHTML = "";

        if (errors.length > 0) {
            result.className = "form-error";
            errors.forEach(function (text) {
                const p = document.createElement("p");
                p.textContent = text;
                result.appendChild(p);
            });
            return;
        }

        result.className = "form-success";
        const heading = document.createElement("p");
        heading.textContent = "Your details were validated. No message was sent.";
        result.appendChild(heading);

        const lines = [
            "Name: " + name,
            "Email: " + email,
            "Topic: " + (topic || "(none)"),
            "Message: " + message
        ];
        lines.forEach(function (text) {
            const p = document.createElement("p");
            p.textContent = text;
            result.appendChild(p);
        });
    });
}