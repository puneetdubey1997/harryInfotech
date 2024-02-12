



// const form = document.getElementById('form');
// const firstName = document.getElementById('FirstName');
// const lastName = document.getElementById('LastName');
// const email = document.getElementById('email');
// const mobileNumber = document.getElementById('MobileNumber');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('ConfirmPassword');

// function setError(input, message) {
//     const parentElement = input.parentElement;
//     const errorMessage = parentElement.querySelector('.error-message');
//     errorMessage.innerText = message;
//     parentElement.classList.add('error');
//     parentElement.classList.remove('success');
// }

// function setSuccess(input) {
//     const parentElement = input.parentElement;
//     const errorMessage = parentElement.querySelector('.error-message');
//     errorMessage.innerText = '';
//     parentElement.classList.remove('error');
//     parentElement.classList.add('success');
// }

// function isValidEmail(email) {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// function validateForm() {
//     const firstNameValue = firstName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const mobileNumberValue = mobileNumber.value.trim();
//     const passwordValue = password.value.trim();
//     const confirmPasswordValue = confirmPassword.value.trim();

//     if (firstNameValue === '') {
//         setError(firstName, 'First Name is required');
//     } else {
//         setSuccess(firstName);
//     }

//     if (lastNameValue === '') {
//         setError(lastName, 'Last Name is required');
//     } else {
//         setSuccess(lastName);
//     }

//     if (emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if (mobileNumberValue === '') {
//         setError(mobileNumber, 'Mobile Number is required');
//     } else {
//         setSuccess(mobileNumber);
//     }

//     if (passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8) {
//         setError(password, 'Password must be at least 8 characters');
//     } else {
//         setSuccess(password);
//     }

//     if (confirmPasswordValue === '') {
//         setError(confirmPassword, 'Please confirm your password');
//     } else if (confirmPasswordValue !== passwordValue) {
//         setError(confirmPassword, "Passwords don't match");
//     } else {
//         setSuccess(confirmPassword);
//     }
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     validateForm();
// });









// // const form = document.getElementById('form');
// // const FirstName = document.getElementById('FirstName');
// // const LastName = document.getElementById('LastName');
// // const email = document.getElementById('email');
// // const Mobile Number  = document.getElementById('Mobile Number');
// // const password = document.getElementById('password');
// // const password2 = document.getElementById('Confirm password');

// // form.addEventListener('submit', e => {
// //     e.preventDefault();

// //     validateInputs();
// // });

// // const setError = (element, message) => {
// //     const inputControl = element.parentElement;
// //     const errorDisplay = inputControl.querySelector('.error');

// //     errorDisplay.innerText = message;
// //     inputControl.classList.add('error');
// //     inputControl.classList.remove('success')
// // }

// // const setSuccess = element => {
// //     const inputControl = element.parentElement;
// //     const errorDisplay = inputControl.querySelector('.error');

// //     errorDisplay.innerText = '';
// //     inputControl.classList.add('success');
// //     inputControl.classList.remove('error');
// // };

// // const isValidEmail = email => {
// //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(String(email).toLowerCase());
// // }

// // const validateInputs = () => {
// //     const FirstName Value = FirstName.value.trim();
// //     const LastName Value = LastName.value.trim();
// //     const Email Value = Email.value.trim();
// //     const Mobile Number Value = Mobile Number.value.trim();
// //     const Password Value = Password.value.trim();
// //     const Confirm password Value = Confirm password.value.trim();

// //         if(usernameValue === '') {
// //             setError(username, 'Username is required');
// //         } else {
// //             setSuccess(username);
// //         }

// //         if(emailValue === '') {
// //             setError(email, 'Email is required');
// //         } else if (!isValidEmail(emailValue)) {
// //             setError(email, 'Provide a valid email address');
// //         } else {
// //             setSuccess(email);
// //         }

// //         if(passwordValue === '') {
// //             setError(password, 'Password is required');
// //         } else if (passwordValue.length < 8 ) {
// //             setError(password, 'Password must be at least 8 character.')
// //         } else {
// //             setSuccess(password);
// //         }

// //         if(password2Value === '') {
// //             setError(password2, 'Please confirm your password');
// //         } else if (password2Value !== passwordValue) {
// //             setError(password2, "Passwords doesn't match");
// //         } else {
// //             setSuccess(password2);
// //         }

// //     };
