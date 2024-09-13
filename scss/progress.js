const totalSteps = 5;

let currentStep = 1;

function advanceToNextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
    }
}

function updateCurrentItem() {
    const items = document.querySelectorAll('.step-wizard-item');
    items.forEach((item, index) => {
        item.classList.remove('current-item');
        if (index + 1 === currentStep) {
            item.classList.add('current-item');
        }
    });
}

function progressSubtipos() {
    advanceToNextStep();
    updateCurrentItem();
}
progressSubtipos();
