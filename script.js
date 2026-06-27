


/* Welcome Message (shows only once per session) */
window.addEventListener("load", function () {

    if (!sessionStorage.getItem("welcomeShown")) {

        alert("Welcome to Indra Hospital!\nYour Health Is Our Priority.");

        sessionStorage.setItem("welcomeShown", "true");
    }

});


 

function validateContactForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (phone.length < 10) {
        alert("Phone number should contain at least 10 digits.");
        return false;
    }

    if (subject === "") {
        alert("Please enter the subject.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Thank you! Your message has been sent successfully.");

    return false;  
}

 

function validateAppointmentForm() {

    let patient = document.getElementById("patientName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    if (patient === "") {
        alert("Please enter patient name.");
        return false;
    }

    if (email === "") {
        alert("Please enter email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (phone === "") {
        alert("Please enter phone number.");
        return false;
    }

    if (phone.length < 10) {
        alert("Phone number must contain at least 10 digits.");
        return false;
    }

    if (department === "") {
        alert("Please select a department.");
        return false;
    }

    if (doctor === "") {
        alert("Please select a doctor.");
        return false;
    }

    if (date === "") {
        alert("Please choose an appointment date.");
        return false;
    }

    alert("Appointment booked successfully!");

    return false; 
}


 
document.querySelectorAll('a[href^="#"]').forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

