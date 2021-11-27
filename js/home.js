// Toggle auth BTNs
(function () {
    let authBTNs = document.getElementById("authBTNs")
    let profileBTN = document.getElementById("profileBTN")
    if (JSON.parse(localStorage.getItem("isLogged")) !== null && JSON.parse(localStorage.getItem("isLogged")) == true) {
        authBTNs.style.display = 'none'
        profileBTN.style.display = 'flex'
    } else {
        authBTNs.style.display = 'block'
        profileBTN.style.display = 'none'
    }
})()


let logoutBTN = document.getElementById("logoutBTN");

// Logout
logoutBTN.addEventListener('click', function () {
    localStorage.setItem('isLogged', false)
    localStorage.removeItem('userLogged')
})
