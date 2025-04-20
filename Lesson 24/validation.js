function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '' || pass.length < 8) {
        message = 'Password must be at least 8 characters.';
        msgBox.style.color = 'red';
    } else if (age === '' || isNaN(age) || age < 12 || age > 50) {
        message = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red';
    } else {
        message = 'Login Successful!';
        msgBox.style.color = 'green';
    }

    msgBox.textContent = message;
}
