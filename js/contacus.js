let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userMSG = document.getElementById("userMSG")
let sendBTN = document.getElementById("sendBTN")

function sendMSG() {
    // Errors MSGs
    let userNameError = document.getElementById("userNameError");
    let userEmailError = document.getElementById("userEmailError");
    let userMSGError = document.getElementById("userMSGError");
    let e1 = validation(userName, userNameError, 'يرجي ادخال الاسم')
    let e2 = validation(userEmail, userEmailError, 'يرجي ادخال البريد الالكتروني')
    let e3 = validation(userMSG, userMSGError, 'يرجي ادخال الرسالة')
    if (e1 && e2 && e3) {
        sendBTN.setAttribute('data-target', '#successSend')
        clearIputs()
    }
}
sendBTN.addEventListener('click', function () {
    sendMSG()
})
// Clear inputs
function clearIputs() {
    userName.value = ''
    userEmail.value = ''
    userMSG.value = ''
}

// Validation inputs
function validation(inputValue, inputErrorMSG, errorMSG) {

    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    }
    else if (inputValue === userEmail) {
        return validateUserEmail(inputValue, inputErrorMSG)
    }
    else if (inputValue === userMSG && userMSG.value.length < 10) {
        inputErrorMSG.innerHTML = 'محتوي الرسالة يجب ان يكون اكتر من 10 احرف'
        inputErrorMSG.style.display = 'block'
        return false
    }
    else {
        inputErrorMSG.style.display = 'none'
        return true
    }
}
// Vaildate user email
function validateUserEmail(inputValue, inputErrorMSG) {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(inputValue.value)) {
        inputErrorMSG.style.display = 'none'
        return true
    } else {
        inputErrorMSG.innerHTML = 'البريد الالكتروني غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    }
}
