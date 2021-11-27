let allUsers = JSON.parse(localStorage.getItem('allUsers'));
let newPassword = document.getElementById("newPassword")
let confirmNewPassword = document.getElementById("confirmNewPassword")
let changeBTN = document.getElementById("changeBTN")

// Check Passwords
function checkPassword() {
    // Errors MSGs
    let newPasswordError = document.getElementById("newPasswordError");
    let confirmNewPasswordError = document.getElementById("confirmNewPasswordError");
    let e1 = validation(newPassword, newPasswordError, 'يرجي ادخال كلمة المرور الجديدة')
    let e2 = validation(confirmNewPassword, confirmNewPasswordError, 'يرجي ادخال تاكيد كلمة المرور الجديدة')
    if (e1 && e2) {
        newData()
        changeBTN.setAttribute('href', '../login.html')
    }
}
changeBTN.addEventListener('click', function () {
    checkPassword()
})
//Save updated data
function newData() {
    let oldData = JSON.parse(localStorage.getItem('changePassword'))
    let index = -1
    let userData;
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].phone === oldData.phone) {
            index = i
            break
        }
    }
    userData = {
        email: oldData.email,
        name: oldData.name,
        password: newPassword.value,
        phone: oldData.phone,
    }
    console.log(userData)
    allUsers.splice(index, 1, userData)
    localStorage.setItem('allUsers', JSON.stringify(allUsers))
}

// Validation inputs
function validation(inputValue, inputErrorMSG, errorMSG) {
    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    }
    else if (inputValue === confirmNewPassword) {
        if (inputValue.value !== newPassword.value) {
            inputErrorMSG.innerHTML = 'تاكيد كلمة المرور غير صحيح'
            inputErrorMSG.style.display = 'block'
            return false
        } else {
            inputErrorMSG.style.display = 'none'
            return true
        }
    }
    else {
        inputErrorMSG.style.display = 'none'
        return true
    }
}
