let codePhone = document.getElementById("codePhone")
let nextBTN = document.getElementById("nextBTN")

// Check Code
function checkCode() {
    // Errors MSGs
    let codePhoneError = document.getElementById("codePhoneError");
    let e1 = validation(codePhone, codePhoneError, 'يرجي ادخال كود التاكيد')
    if (e1) {
        nextBTN.setAttribute('href', 'newPassword.html')
    }
}
nextBTN.addEventListener('click', function () {
    checkCode()
})

// Validation inputs
function validation(inputValue, inputErrorMSG, errorMSG) {
    let code = '12345'
    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    } else {
        if (code == inputValue.value) {
            inputErrorMSG.style.display = 'none'
            return true
        } else {
            inputErrorMSG.innerHTML = 'الكود الذي ادخلته ليس صحيح'
            inputErrorMSG.style.display = 'block'
            return false
        }
    }
}
