let allDepartments = document.getElementById('allDepartments');
let departmentsData = [
    { departmentName: 'اسم القسم', departmentImg: '../../images/department1.jpeg' },
    { departmentName: 'اسم القسم', departmentImg: '../../images/department2.jpg' },
    { departmentName: 'اسم القسم', departmentImg: '../../images/department3.jpg' },
    { departmentName: 'اسم القسم', departmentImg: '../../images/department1.jpeg' },
    { departmentName: 'اسم القسم', departmentImg: '../../images/department2.jpg' },
    { departmentName: 'اسم القسم', departmentImg: '../../images/department3.jpg' },
    { departmentName: 'اسم القسم', departmentImg: '../../images/department1.jpeg' },
];

(function () {
    let cartonna = ``;
    for (let i = 0; i < departmentsData.length; i++) {
        cartonna += `
        <div class=" col-lg-3 col-md-4 col-sm-6 mb-3">
                    <div class="department-item bg-white">
                        <a href="departmentDetails.html" class="text-decoration-none d-block p-3">
                            <div class="department-image mb-2">
                                <img src=${departmentsData[i].departmentImg} alt=${departmentsData[i].departmentName} class="w-100">
                            </div>
                            <h2 class="h5 mb-0">${departmentsData[i].departmentName}</h2>
                        </a>
                    </div>
                </div>
        `
    }
    allDepartments.innerHTML = cartonna;
})();