let diseaseDefinition = document.getElementById('diseaseDefinition');
let diseaseSymptoms = document.getElementById('diseaseSymptoms');
let diseaseRisks = document.getElementById('diseaseRisks');
let diseaseTreating = document.getElementById('diseaseTreating');

let diaseaseDetailsData = {
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
        diseaseDefinition.innerHTML = diaseaseDetailsData.definition;
        diseaseSymptoms.innerHTML = diaseaseDetailsData.usage;
        diseaseRisks.innerHTML = diaseaseDetailsData.instructions;
        diseaseTreating.innerHTML = diaseaseDetailsData.sideEffects;
    })();
