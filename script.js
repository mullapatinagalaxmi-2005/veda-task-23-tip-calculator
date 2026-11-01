const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipButtons = [...document.querySelectorAll('.tip-btn')];

const tipTotalOutput = document.getElementById('tip-total');
const grandTotalOutput = document.getElementById('grand-total');
const perPersonOutput = document.getElementById('per-person');
const peopleSummary = document.getElementById('people-summary');
const tipSummary = document.getElementById('tip-summary');

let selectedTip = 15;
const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function getTipPercentage() {
  if (customTipInput.value.trim() !== '') return Number(customTipInput.value);
  return selectedTip;
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function calculate() {
  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);
  const tipPercent = getTipPercentage();

  let valid = true;
  showError('bill-error', '');
  showError('tip-error', '');
  showError('people-error', '');

  if (billInput.value.trim() !== '' && (!Number.isFinite(bill) || bill < 0)) {
    showError('bill-error', 'Enter a valid bill amount (0 or more).');
    valid = false;
  }
  if (!Number.isFinite(tipPercent) || tipPercent < 0 || tipPercent > 100) {
    showError('tip-error', 'Tip must be between 0% and 100%.');
    valid = false;
  }
  if (!Number.isInteger(people) || people < 1) {
    showError('people-error', 'Enter a whole number of people (at least 1).');
    valid = false;
  }

  if (!valid) {
    tipTotalOutput.textContent = currency.format(0);
    grandTotalOutput.textContent = currency.format(0);
    perPersonOutput.textContent = currency.format(0);
    return;
  }

  const safeBill = billInput.value.trim() === '' ? 0 : bill;
  const tipAmount = safeBill * tipPercent / 100;
  const total = safeBill + tipAmount;
  const eachPerson = people > 0 ? total / people : 0;

  tipTotalOutput.textContent = currency.format(tipAmount);
  grandTotalOutput.textContent = currency.format(total);
  perPersonOutput.textContent = currency.format(eachPerson);
  peopleSummary.textContent = `Including ${people} ${people === 1 ? 'person' : 'people'}`;
  tipSummary.textContent = `${tipPercent}% tip`;
}

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedTip = Number(button.dataset.tip);
    customTipInput.value = '';
    tipButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    calculate();
  });
});

customTipInput.addEventListener('input', () => {
  tipButtons.forEach(button => {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');
  });
  calculate();
});

[billInput, peopleInput].forEach(input => input.addEventListener('input', calculate));

document.getElementById('decrease').addEventListener('click', () => {
  const current = Number(peopleInput.value) || 1;
  peopleInput.value = Math.max(1, current - 1);
  calculate();
});
document.getElementById('increase').addEventListener('click', () => {
  const current = Number(peopleInput.value) || 1;
  peopleInput.value = Math.max(1, current + 1);
  calculate();
});

document.getElementById('reset').addEventListener('click', () => {
  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '1';
  selectedTip = 15;
  tipButtons.forEach(button => {
    const active = Number(button.dataset.tip) === selectedTip;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  calculate();
});

calculate();
