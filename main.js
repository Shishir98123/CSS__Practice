document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Validation
    if (fullname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        swal('Error', 'Please fill all the fields.', 'error');
    } else if (password !== confirmPassword) {
        swal('Error', 'Passwords do not match.', 'error');
    } else {
        // Registration successful, display success message
        swal('Success', 'Registration successful!', 'success');
        document.getElementById('registrationForm').reset(); // Clear form fields
    }
});
