const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  priceElements.forEach(priceEl => {
    const value = parseFloat(priceEl.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  const existingTotalRow = document.querySelector('.total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }


  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row'); // for future reference

  const labelCell = document.createElement('td');
  labelCell.textContent = 'Total';
  labelCell.style.fontWeight = 'bold';

  const valueCell = document.createElement('td');
  valueCell.textContent = total.toFixed(2);
  valueCell.style.fontWeight = 'bold';

  totalRow.appendChild(labelCell);
  totalRow.appendChild(valueCell);

  const table = document.querySelector('table');
  table.appendChild(totalRow);
};

getSumBtn.add
