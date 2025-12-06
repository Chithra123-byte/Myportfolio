$(document).ready(function(){
    $("nav a").click(function(){
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });

    // Contact form validation
    function validate(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if(name == "" || email == ""){
            alert("All fields are required!");
            return false;
        }
        alert("Message Sent!");
    }
    window.validateForm = validate;
});
