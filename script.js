const getSum = () => {

  const priceElements = document.querySelectorAll('.price');
  
  let total = 0;

  priceElements.forEach(priceEl => {
    const value = parseFloat(priceEl.textContent);
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

  // Create total price cell
  const totalCell = document.createElement('td');
  totalCell.textContent = total.toFixed(2);
  totalCell.style.fontWeight = 'bold';

  totalRow.appendChild(labelCell);
  totalRow.appendChild(totalCell);

  const table = document.querySelector('table');
  table.appendChild(totalRow);
};
