let departmentPara = document.getElementById("departmentPara");
let departmentImg = document.getElementById("departmentImg");
let departmentSlider = document.querySelectorAll("#departmentSliderData div img");

let departmentDetailsData = {
    departmentParaContent: `Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Eveniet minima temporibus beatae laborum natus. Provident laborum quasi soluta
    officia est quas ratione harum, delectus suscipit?`,
    departmentImgSrc: '../../images/department3.jpg',
    departmentSliderData: [
        '../../images/department1.jpeg',
        '../../images/department2.jpg',
        '../../images/department3.jpg',
        '../../images/department1.jpeg',
        '../../images/department2.jpg',
        '../../images/department3.jpg',
    ]
};

(function () {
    departmentPara.innerHTML = departmentDetailsData.departmentParaContent;
    departmentImg.src = departmentDetailsData.departmentImgSrc;

    for (let i = 0; i < departmentDetailsData.departmentSliderData.length; i++) {
        departmentSlider[i].src = departmentDetailsData.departmentSliderData[i]
    }
})();