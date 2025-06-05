const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  priceElements.forEach(priceElement => {
    const value = parseFloat(priceElement.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  const existingTotalRow = document.getElementById('ans');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  const totalRow = document.createElement('tr');
  totalRow.id = 'ans';

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

getSumBtn.addEventListener("click", getSum);
