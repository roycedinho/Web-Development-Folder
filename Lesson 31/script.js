function handleContact() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var snackbar = document.getElementById("snackbar");

    var snackbarText = '';
    var snackbarBG = '';

    if (fullName === "" || email === "" || message === "") {
        snackbarText = 'Please enter values for all fields';
        snackbarBG = 'rgb(255, 204, 203)';
    } else {
        snackbarText = `Thanks ${fullName}... Your message has been recorded`;
        snackbarBG = '#28a7e9';
    }

    snackbar.innerHTML = snackbarText;
    snackbar.style.backgroundColor = snackbarBG;
    snackbar.className = "show";

    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}
