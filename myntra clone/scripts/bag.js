let bagItemsObj;
onLoad();

function onLoad() {
  loadBagItemsObj();
  displayBagItems();
}

function loadBagItemsObj() {
  console.log(bagItems);
  bagItemsObj = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemsObj);
}

function displayBagItems() {
  let containerElement = document.querySelector(".bag-items-container");
  let innerHTML = "";
  bagItemsObj.forEach((bagItem) => {
    innerHTML += generateItemHtml(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemsObj();
  displayBagItems();
  displayBagIcon();
}

function generateItemHtml(item) {
  return `
    <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}" />
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">
              ${item.item_name}
              </div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick= "removeFromBag(${item.id})">X</div>
          </div>
    `;
}
