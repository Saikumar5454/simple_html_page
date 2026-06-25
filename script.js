function togglePassword() {

    let password =
    document.getElementById("password");

    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}

/* Mouse Parallax Effect */

document.addEventListener("mousemove", (e) => {

    let x =
    (window.innerWidth / 2 - e.pageX) / 50;

    let y =
    (window.innerHeight / 2 - e.pageY) / 50;

    document.querySelector(".login-card")
    .style.transform =
    `translate(${x}px,${y}px)`;
});