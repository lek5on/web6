document.addEventListener('DOMContentLoaded', function () {
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const productLabel = document.getElementById('product-label');
    const contractCheckbox = document.getElementById('contract');
    const contractLabel = document.getElementById('label-contract');
    const totalElement = document.getElementById('total');
    const radiosContainer = document.getElementById('kurses');
    const radios = radiosContainer.querySelectorAll('input[name="prodOptions"]');
  
    // Function to update the form based on the selected product type
    function updateForm() {
      const selectedProduct = document.querySelector('input[name="prodOptions"]:checked').value;
  
      switch (selectedProduct) {
        case 'option1': // First type: No options or properties
          productSelect.style.display = 'none';
          contractCheckbox.style.display = 'none';
          contractLabel.style.display = 'none';
          productLabel.style.display = 'none';
          break;
        case 'option2': // Second type: Only options
          productSelect.style.display = 'block';
          contractCheckbox.style.display = 'none';
          productLabel.style.display = 'block';
          contractLabel.style.display = 'none';
          break;
        case 'option3': // Third type: Only property
          productSelect.style.display = 'none';
          contractCheckbox.style.display = 'block';
          productLabel.style.display = 'none';
          contractLabel.style.display = 'block';
          break;
      }
  
      calculateTotal();
    }
  
    // Function to calculate the total price
    function calculateTotal() {
      let totalPrice = 0;
      const quantity = parseInt(quantityInput.value) || 0;
  
      // Get the price based on the selected product type and options
      let price = 0;
      const selectedProduct = document.querySelector('input[name="prodOptions"]:checked').value;
  
      switch (selectedProduct) {
        case 'option1':
          price = 1000; // Example price for the first type
          break;
        case 'option2':
          const selectedOption = productSelect.value;
          if (selectedOption === 'item1') {
            price = 1500; // Example price for the first option of the second type
          } else if (selectedOption === 'item2') {
            price = 2000; // Example price for the second option of the second type
          } else {
            price = 2500; // Example price for the third option of the second type
          }
          break;
        case 'option3':
          price = 500; // Example price for the third type
          if (contractCheckbox.checked) {
            price += 1000; // Additional price for the property
          }
          break;
      }
  
      if(isNaN(quantity) || quantity <=0){
        totalElement.textContent = `Итого: 0 рублей (введите полож. число)`;
        console.log("неправильное число");
    }
      else
    {
    totalPrice = Math.abs(quantity) * price;
    totalElement.textContent = `Итого: ${totalPrice.toFixed(2)} рублей`;
    }
    }
  
    // Event listeners for changes in quantity, product type, options, and property
    quantityInput.addEventListener('input', calculateTotal);
    radios.forEach(radio => radio.addEventListener('change', updateForm));
    productSelect.addEventListener('change', calculateTotal);
    contractCheckbox.addEventListener('change', calculateTotal);
  
    // Initial form setup
    updateForm();
  });
