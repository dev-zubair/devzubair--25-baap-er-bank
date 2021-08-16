document.getElementById('login-submit').addEventListener('click', function () {
    //email field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //password field
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
     
    if ( userEmail == 'fatima@gmail.com' && userPassword == 'fatima'){
        window.location.href = 'banking.html';
    }
    else {
        console.log('Please put a valid ID or Password');
    }
});