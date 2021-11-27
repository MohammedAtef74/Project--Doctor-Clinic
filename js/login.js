let userPhone = document.getElementById("userPhone")
let userPassword = document.getElementById("userPassword")
let loginBTN = document.getElementById("loginBTN")
let users;
// Load from localstorage
if (JSON.parse(localStorage.getItem('allUsers')) === null) {
    users = []
} else {
    users = JSON.parse(localStorage.getItem('allUsers'))
}
localStorage.removeItem('changePassword')

// Login
function login() {
    // Errors MSGs
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");
    let e1 = validation(userPhone, phoneError, 'يرجي ادخال رقم الهاتف')
    let e2 = validation(userPassword, passwordError, 'يرجي ادخال كلمة المرور')
    if (e1 && e2) {
        loginBTN.setAttribute('href', '../../index.html')
        localStorage.setItem('isLogged', true)
        clearIputs()
    }
}
loginBTN.addEventListener('click', function () {
    login()
})
// Clear inputs
function clearIputs() {
    userPhone.value = ''
    userPassword.value = ''
}

// Validation inputs
function validation(inputValue, inputErrorMSG, errorMSG) {
    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    }
    else if (inputValue === userPhone) {
        return validateUserPhone(inputValue, inputErrorMSG, errorMSG)
    } else {
        let res = users.filter((password) => password.password === inputValue.value)
        if (res.length > 0) {
            inputErrorMSG.style.display = 'none'
            return true
        } else {
            inputErrorMSG.innerHTML = 'كلمة المرور غير صحيحة'
            inputErrorMSG.style.display = 'block'
            return false
        }
    }
}
// Vaildate user phone
function validateUserPhone(inputValue, inputErrorMSG) {
    let phoneRegex = /^[0-9]+$/
    if (phoneRegex.test(inputValue.value)) {
        let res = users.filter((phone) => phone.phone === inputValue.value)
        if (res.length > 0) {
            localStorage.setItem('userLogged', JSON.stringify(res[0]))
            console.log("Testing...", res[0])
            inputErrorMSG.style.display = 'none'
            return true
        } else {
            inputErrorMSG.innerHTML = 'رقم الهاتف غير مسجل'
            inputErrorMSG.style.display = 'block'
            return false
        }
    } else {
        inputErrorMSG.innerHTML = 'رقم الهاتف غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    }
}

