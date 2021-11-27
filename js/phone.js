let allUsers = JSON.parse(localStorage.getItem('allUsers'));
let userPhone = document.getElementById("userPhone")
let nextBTN = document.getElementById("nextBTN")

let users;
// Load from localstorage
if (JSON.parse(localStorage.getItem('allUsers')) === null) {
    users = []
} else {
    users = JSON.parse(localStorage.getItem('allUsers'))
}

// Check Phone
function checkPhone() {
    // Errors MSGs
    let phoneError = document.getElementById("phoneError");
    let e1 = validation(userPhone, phoneError, 'يرجي ادخال رقم الهاتف')
    if (e1) {
        nextBTN.setAttribute('href', 'confirmCode.html')
    }
}
nextBTN.addEventListener('click', function () {
    checkPhone()
})

// Validation inputs
function validation(inputValue, inputErrorMSG, errorMSG) {
    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    } else {
        let phoneRegex = /^[0-9]+$/
        if (phoneRegex.test(inputValue.value)) {
            let res = users.filter((phone) => phone.phone === inputValue.value)
            if (res.length > 0) {
                localStorage.setItem('changePassword', JSON.stringify(res[0]))
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
}
