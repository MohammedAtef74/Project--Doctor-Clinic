let allMedicines = document.getElementById('allMedicines');
let medicinesData = [
    { medicinesName: 'مينوكسيديل' },
    { medicinesName: 'باراسيتامول' },
    { medicinesName: 'رانيتيدين' },
    { medicinesName: 'ميرتازابين' },
    { medicinesName: 'تادالافيل' },
    { medicinesName: 'البروجسترون' },
    { medicinesName: 'بريجابالين' },
    { medicinesName: 'موميتازون' },
    { medicinesName: 'هيدروكينون' },
    { medicinesName: 'الأسبرين' },
];

(function () {
    let cartonna = ``;
    for (let i = 0; i < medicinesData.length; i++) {
        cartonna += `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
                    <div class="medicine-item bg-white">
                        <a href="medicineDetails.html" class="text-decoration-none d-block p-3">
                            <h2 class="mb-2 h5"> ${medicinesData[i].medicinesName}</h2>
                        </a>
                    </div>
                </div>
        `
    }
    allMedicines.innerHTML = cartonna;
})();