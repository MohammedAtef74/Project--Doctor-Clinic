let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPhone = document.getElementById("userPhone");
let userPassword = document.getElementById("userPassword");
let userConfirmPassword = document.getElementById("userConfirmPassword");
let acceptRules = document.getElementById("acceptRules")
let registerBTN = document.getElementById("registerBTN")
let showPassword = document.getElementById("showPassword")
let showConfPassword = document.getElementById("showConfPassword")

let users;
if (JSON.parse(localStorage.getItem('allUsers')) === null) {
    users = []
} else {
    users = JSON.parse(localStorage.getItem('allUsers'))
}

// Add new user
function addNewUser() {
    // Errors MSGs
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");
    let confpasswordError = document.getElementById("confPasswordError");
    let rulesError = document.getElementById("rulesError");
    let e1 = validation(userName, nameError, 'يرجي ادخال الاسم')
    let e2 = validation(userEmail, emailError, 'يرجي ادخال الايميل')
    let e3 = validation(userPhone, phoneError, 'يرجي ادخال رقم الهاتف')
    let e4 = validation(userPassword, passwordError, 'يرجي ادخال الرقم السري')
    let e5 = validation(userConfirmPassword, confpasswordError, 'يرجي تاكيد الرقم السري')
    let e6 = validation(acceptRules, rulesError, 'يرجي الموافقة علي الشروط والاحكام')

    if (e1 && e2 && e3 && e4 && e5 && e6) {
        let newUser = {
            name: userName.value,
            email: userEmail.value,
            phone: userPhone.value,
            password: userPassword.value
        }
        users.push(newUser)
        localStorage.setItem('allUsers', JSON.stringify(users))
        registerBTN.setAttribute('href', '../../index.html')
        localStorage.setItem('isLogged', true)
        localStorage.setItem('userLogged', JSON.stringify(newUser))
        clearIputs()
    }
}
registerBTN.addEventListener('click', addNewUser)

// Clear inputs
function clearIputs() {
    userName.value = ''
    userEmail.value = ''
    userPhone.value = ''
    userPassword.value = ''
    userConfirmPassword.value = ''
    acceptRules.checked = false
}

// Validation inputs
function validation(inputValue, inputErrorMSG, errorMSG) {
    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    }
    else if (inputValue === acceptRules) {
        return validateRules(inputValue, inputErrorMSG, errorMSG)
    }
    else if (inputValue === userPhone) {
        return validateUserPhone(inputValue, inputErrorMSG, errorMSG)
    }
    else if (inputValue === userEmail) {
        return validateUserEmail(inputValue, inputErrorMSG)
    }
    else if (inputValue === userConfirmPassword) {
        return validateUserPassword(inputValue, inputErrorMSG)
    }
    else {
        inputErrorMSG.style.display = 'none'
        return true
    }
}

// Validate rules checkbox
function validateRules(inputValue, inputErrorMSG, errorMSG) {
    if (inputValue.checked) {
        inputErrorMSG.style.display = 'none'
        return true
    } else {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    }
}
// Vaildate user phone
function validateUserPhone(inputValue, inputErrorMSG) {
    let phoneRegex = /^[0-9]+$/
    if (phoneRegex.test(inputValue.value)) {
        let res = users.filter((phone) => phone.phone === inputValue.value)
        if (res.length > 0) {
            inputErrorMSG.innerHTML = 'رقم الهاتف متكرر'
            inputErrorMSG.style.display = 'block'
            return false
        } else {
            inputErrorMSG.style.display = 'none'
            return true
        }
    } else {
        inputErrorMSG.innerHTML = 'رقم الهاتف غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    }
}
// Vaildate user email
function validateUserEmail(inputValue, inputErrorMSG) {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(inputValue.value)) {
        let res = users.filter((email) => email.email === inputValue.value)
        if (res.length > 0) {
            inputErrorMSG.innerHTML = 'البريد الالكتروني متكرر'
            inputErrorMSG.style.display = 'block'
            return false
        } else {
            inputErrorMSG.style.display = 'none'
            return true
        }
    } else {
        inputErrorMSG.innerHTML = 'البريد الالكتروني غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    }
}
// Vaildate user confirm password
function validateUserPassword(inputValue, inputErrorMSG) {
    if (inputValue.value !== userPassword.value) {
        inputErrorMSG.innerHTML = 'تاكيد كلمة المرور غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    } else {
        inputErrorMSG.style.display = 'none'
        return true
    }
}

// Change password input type
showPassword.addEventListener('click', function () {
    if (userPassword.getAttribute('type') === 'password') {
        userPassword.removeAttribute('type')
        userPassword.setAttribute('type', 'text')
    }
    else {
        userPassword.removeAttribute('type')
        userPassword.setAttribute('type', 'password')
    }
})
showConfPassword.addEventListener('click', function () {
    if (userConfirmPassword.getAttribute('type') === 'password') {
        userConfirmPassword.removeAttribute('type')
        userConfirmPassword.setAttribute('type', 'text')
    }
    else {
        userConfirmPassword.removeAttribute('type')
        userConfirmPassword.setAttribute('type', 'password')
    }
})
