let medicineDefinition = document.getElementById('medicineDefinition');
let medicineUsage = document.getElementById('medicineUsage');
let medicineInstructions = document.getElementById('medicineInstructions');
let medicineSideEffects = document.getElementById('medicineSideEffects');

let medicineDetailsData = {
    definition: `Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Eveniet minima temporibus beatae laborum natus. Provident laborum quasi soluta
    officia est quas ratione harum, delectus suscipit?`,
    usage: `Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Eveniet minima temporibus beatae laborum natus. Provident laborum quasi soluta
    officia est quas ratione harum, delectus suscipit?`,
    instructions: `Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Eveniet minima temporibus beatae laborum natus. Provident laborum quasi soluta
    officia est quas ratione harum, delectus suscipit?`,
    sideEffects: `Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Eveniet minima temporibus beatae laborum natus. Provident laborum quasi soluta
    officia est quas ratione harum, delectus suscipit?`,
};

    (function () {
        medicineDefinition.innerHTML = medicineDetailsData.definition;
        medicineUsage.innerHTML = medicineDetailsData.usage;
        medicineInstructions.innerHTML = medicineDetailsData.instructions;
        medicineSideEffects.innerHTML = medicineDetailsData.sideEffects;
    })();
