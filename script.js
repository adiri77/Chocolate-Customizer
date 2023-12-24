document.addEventListener('DOMContentLoaded', function() {
    const chocolateOptions = [
      { name: 'Milk Chocolate', price: 2.00, image: 'a1.jpeg' },
      { name: 'Dark Chocolate', price: 2.50, image: 'a2.jpg' },
      { name: 'White Chocolate', price: 3.00, image: 'a3.jpg' },
      { name: 'Hazelnut Chocolate', price: 3.50, image: 'a4.jpeg' },
      { name: 'Caramel Chocolate', price: 3.25, image: 'a5.jpg' },
      { name: 'Almond Chocolate', price: 3.75, image: 'a6.jpg' },
      { name: 'Raspberry Chocolate', price: 4.00, image: 'a7.jpeg' },
      { name: 'Coconut Chocolate', price: 3.50, image: 'a8.jpg' }
      // Add more chocolate options as needed
    ];
  
    const selectedChocolates = [];
    let totalPrice = 0;
  
    const chocolateOptionsDiv = document.getElementById('chocolateOptions');
    const selectedList = document.getElementById('selectedList');
    const totalPriceSpan = document.getElementById('totalPrice');
  
    // Create chocolate options using Bootstrap cards
    chocolateOptions.forEach((chocolate, index) => {
      const card = document.createElement('div');
      card.className = 'card mb-3 col-md-4'; // Set column size to col-md-4
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      // Add image to the card with the chocolate-img-small class
      const image = document.createElement('img');
      image.className = 'card-img-top chocolate-img-small'; // Added chocolate-img-small class
      image.src = chocolate.image;
      image.alt = chocolate.name;
  
      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = chocolate.name;
  
      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = `$${chocolate.price.toFixed(2)}`;
  
      cardBody.appendChild(image);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
  
      card.addEventListener('click', () => addChocolate(chocolate));
  
      chocolateOptionsDiv.appendChild(card);
    });
  
    function addChocolate(chocolate) {
      if (selectedChocolates.length < 8) {
        selectedChocolates.push(chocolate);
        updateSelectedList();
        updateTotalPrice();
      } else {
        alert('You can only select up to 8 chocolates.');
      }
    }
  
    function updateSelectedList() {
      selectedList.innerHTML = '';
  
      selectedChocolates.forEach((chocolate, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${index + 1}.
          <img src="${chocolate.image}" alt="${chocolate.name}" class="selected-img chocolate-img-small">
           - ${chocolate.name} - $${chocolate.price.toFixed(2)}
        `;
        selectedList.appendChild(listItem);
      });
    }
  
    function updateTotalPrice() {
      totalPrice = selectedChocolates.reduce((total, chocolate) => total + chocolate.price, 0);
      totalPriceSpan.textContent = totalPrice.toFixed(2);
    }
  });
  