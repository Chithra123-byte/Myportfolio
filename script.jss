$(document).ready(function(){
    $("nav a").click(function(){
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });

    // Contact form validation
    function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

