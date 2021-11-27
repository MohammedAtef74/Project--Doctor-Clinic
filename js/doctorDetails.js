let dimage = document.getElementById("doctor-photo");
let dName = document.getElementById("d-name");
let dDepartment = document.getElementById("department");

doctor = { name: "محمد احمد", image: "../../images/D-images/client-1.png", depart: " دكتور عظام" };

(function () {
    dName.innerHTML = doctor.name;
    dDepartment.innerHTML = doctor.depart
    dimage.src = doctor.image
})()