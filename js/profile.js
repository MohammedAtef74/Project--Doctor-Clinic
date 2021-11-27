let allUsers = JSON.parse(localStorage.getItem('allUsers'));
let userLogged = JSON.parse(localStorage.getItem('userLogged'));
let userName = document.getElementById("userName");
let userPhone = document.getElementById("userPhone");
let userEmail = document.getElementById("userEmail");
let saveInfoBTN = document.getElementById("saveInfoBTN");

let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let confirmNewPassword = document.getElementById("confirmNewPassword");
let savePasswordBTN = document.getElementById("savePasswordBTN");

(function () {
    userName.value = userLogged.name
    userPhone.value = userLogged.phone
    userEmail.value = userLogged.email
})();

// Save Info
function updateInfo() {
    // Errors MSGs
    let userNameError = document.getElementById("userNameError");
    let userPhoneError = document.getElementById("userPhoneError");
    let userEmailError = document.getElementById("userEmailError");
    let e1 = validation(userName, userNameError, 'يرجي ادخال الاسم')
    let e2 = validation(userPhone, userPhoneError, 'يرجي ادخال رقم الهاتف')
    let e3 = validation(userEmail, userEmailError, 'يرجي ادخال البريد الالكتروني')
    if (e1 && e2 && e3) {
        newData(1)
        saveInfoBTN.setAttribute('data-target', '#successUpdated')
        document.getElementById('updatedMSG').innerHTML = 'تم تعديل البيانات بنجاح'
    }
}
saveInfoBTN.addEventListener('click', function () {
    updateInfo()
})

// Save Password
function updatePassword() {
    // Errors MSGs
    let oldPassword = document.getElementById("oldPassword");
    let newPasswordError = document.getElementById("newPasswordError");
    let confirmNewPasswordError = document.getElementById("confirmNewPasswordError");
    let e1 = validation(oldPassword, oldPasswordError, 'يرجي ادخال كلمة المرور القديمة')
    let e2 = validation(newPassword, newPasswordError, 'يرجي ادخال كلمة المرور الجديدة')
    let e3 = validation(confirmNewPassword, confirmNewPasswordError, 'يرجي ادخال تاكيد كلمة المرور الجديدة')
    if (e1 && e2 && e3) {
        newData(2)
        savePasswordBTN.setAttribute('data-dismiss', 'modal')
        // document.getElementById('updatedMSG').innerHTML = 'تم تعديل كلمة المرور بنجاح'
    }
}
savePasswordBTN.addEventListener('click', function () {
    updatePassword()
})

//Save updated data
function newData(number) {
    let index = -1
    let userData;

    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].phone === userLogged.phone) {
            index = i
            break
        }
    }
    if (number === 1) {
        userData = {
            email: userEmail.value,
            name: userName.value,
            password: userLogged.password,
            phone: userPhone.value,
        }
    } else {
        console.log('success')
        userData = {
            email: userLogged.email,
            name: userLogged.name,
            password: newPassword.value,
            phone: userLogged.phone,
        }
    }

    allUsers.splice(index, 1, userData)
    localStorage.setItem('userLogged', JSON.stringify(userData))
    localStorage.setItem('allUsers', JSON.stringify(allUsers))
}

// Validation info inputs
function validation(inputValue, inputErrorMSG, errorMSG) {
    if (inputValue.value === '') {
        inputErrorMSG.innerHTML = errorMSG
        inputErrorMSG.style.display = 'block'
        return false
    }
    else if (inputValue === userPhone) {
        return validateUserPhone(inputValue, inputErrorMSG, errorMSG)
    }
    else if (inputValue === userEmail) {
        return validateUserEmail(inputValue, inputErrorMSG)
    } else if (inputValue === oldPassword) {
        let res = allUsers.filter((password) => password.password === inputValue.value)
        if (res.length > 0) {
            inputErrorMSG.style.display = 'none'
            return true
        } else {
            inputErrorMSG.innerHTML = 'كلمة المرور القديمة غير صحيحة'
            inputErrorMSG.style.display = 'block'
            return false
        }
    }
    else if (inputValue === confirmNewPassword) {
        return validateUserPassword(inputValue, inputErrorMSG)
    } else {
        return true
    }
}

// Vaildate user phone
function validateUserPhone(inputValue, inputErrorMSG) {
    let phoneRegex = /^[0-9]+$/
    if (phoneRegex.test(inputValue.value)) {
        inputErrorMSG.style.display = 'none'
        return true
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
        inputErrorMSG.style.display = 'none'
        return true
    } else {
        inputErrorMSG.innerHTML = 'البريد الالكتروني غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    }
}

// Vaildate user confirm password
function validateUserPassword(inputValue, inputErrorMSG) {
    if (inputValue.value !== newPassword.value) {
        inputErrorMSG.innerHTML = 'تاكيد كلمة المرور غير صحيح'
        inputErrorMSG.style.display = 'block'
        return false
    } else {
        inputErrorMSG.style.display = 'none'
        return true
    }
}