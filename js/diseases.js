let allDiseases = document.getElementById('allDiseases');
let diseasesData = [
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
    { medicinesName: 'اسم المرض' },
];

(function () {
    let cartonna = ``;
    for (let i = 0; i < diseasesData.length; i++) {
        cartonna += `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
                    <div class="disease-item bg-white">
                        <a href="diseaseDetails.html" class="text-decoration-none d-block p-3">
                            <h2 class="mb-2 h5"> ${diseasesData[i].medicinesName}</h2>
                        </a>
                    </div>
                </div>
        `
    }
    allDiseases.innerHTML = cartonna;
})();