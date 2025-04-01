document.getElementById("themeButton").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

function calculateAge() {
    let dob = document.getElementById("dob").value;
    let errorMessage = document.getElementById("error-message");

    if (!dob) {
        errorMessage.innerText = "⚠ Please enter a valid date!";
        return;
    }

    errorMessage.innerText = ""; 

    let birthDate = new Date(dob);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById("year").innerText = ageYears;
    document.getElementById("month").innerText = ageMonths;
    document.getElementById("day").innerText = ageDays;

    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    let daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById("birthdayCountdown").innerText = daysUntilBirthday + " days left 🎉";
}

function resetFields() {
    document.getElementById("dob").value = "";
    document.getElementById("year").innerText = "--";
    document.getElementById("month").innerText = "--";
    document.getElementById("day").innerText = "--";
    document.getElementById("birthdayCountdown").innerText = "-- days left";
    document.getElementById("error-message").innerText = "";
}
