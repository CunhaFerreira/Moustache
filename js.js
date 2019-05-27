const selectedSize = document.querySelector('#selected-size');
const boxSize = document.querySelectorAll('.boxes');
const cart = document.getElementById('cart');
const addToCart = document.querySelector('.btn-submit');

// Show Cart
(function () {
	const cartInfo = document.getElementById('cart-info');

	cartInfo.addEventListener('click', function () {
		cart.classList.toggle('show-cart');
	});
})();


//Add Items to the Card
(function () {

	boxSize.forEach(function (btn) {
		btn.addEventListener('click', function (event) {

			//console.log(event.target);
			selectedSize.innerHTML = `${event.target.innerHTML}`;


			if (addToCart.addEventListener('click', function () {


				let price = document.querySelector('.price').innerHTML;
				let finalPrice = price.slice(1).trim();

				//console.log(finalPrice);

				const cartItem = document.createElement('div');


				cartItem.classList.add('d-flex');

				cartItem.innerHTML = `
					<img src="img/classic-tee.jpg" class="img-fluid" id="item-img" alt="">
						<div class="item-text">
	 						<p id="cart-item-title" class="mb-0">Classic Tee</p>
	 						<span>$</span>
	 						<span id="cart-item-price" class="cart-item-price" class="mb-0">${finalPrice}</span>
	 						<p class="cart-size">Size: ${event.target.innerHTML}</p>
						 </div>
						`;


				const finalCart = document.querySelector('final-cart');

				cart.insertBefore(cartItem, finalCart);

				//alert('Item Add to the Cart');
				showTotals();

			}));

		});
	});


	//Show Totals
	function showTotals() {

		const total = [];
		const items = document.querySelectorAll('.cart-item-price');

		items.forEach(function (item) {
			total.push(parseFloat(item.textContent));
		});
		//console.log(total);

		const totalMoney = total.reduce(function (total, item) {
			total += item;
			return total;
		}, 0);
		console.log(totalMoney);
	}
})();