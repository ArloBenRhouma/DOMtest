// Define item objects with their respective quantities
let items = {
    item1: 1,
    item2: 1,
    item3:1
  };
  
  // Define item prices
  const itemPrices = {
    item1: 500,
    item2: 50,
    item3: 700
  };
  
  // Function to increment quantity of an item
  function incrementQty(itemId) {
    let qtyInput = document.getElementById('qty' + itemId);
    let currentQty = parseInt(qtyInput.value);
    let newQty = currentQty + 1;
    qtyInput.value = newQty;
    items['item' + itemId] = newQty;
    updateTotal();
  }
  
  // Function to decrement quantity of an item
  function decrementQty(itemId) {
    let qtyInput = document.getElementById('qty' + itemId);
    let currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
      let newQty = currentQty - 1;
      qtyInput.value = newQty;
      items['item' + itemId] = newQty;
      updateTotal();
    }
  }
  
  // Function to delete an item
  function deleteItem(itemId) {
    let itemDiv = document.getElementsByClassName('item')[itemId - 1];
    itemDiv.parentNode.removeChild(itemDiv);
    delete items['item' + itemId];
    updateTotal();
  }
  
  // Function to like an item
  function likeItem(itemId) {
    let likeButton = document.getElementsByClassName('like')[itemId - 1];
    if (likeButton.style.color === 'red') {
      likeButton.style.color = 'black';
    } else {
      likeButton.style.color = 'red';
    }
  }
  
  // Function to update the total price
  function updateTotal() {
    let total = 0;
    for (let itemId in items) {
      total += items[itemId] * itemPrices[itemId];
    }
    document.getElementById('total').textContent = '$' + total.toFixed(3);
  }
  