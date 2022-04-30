const key = "d8f1a90a59ee146b142c70ae";
let currency_1 = document.querySelector(".currency-1");
let currency_2 = document.querySelector(".currency-2");
let amount_1 = document.querySelector(".amount-1");
let amount_2 = document.querySelector(".amount-2");
let rate = document.querySelector(".rate");
let button = document.querySelector(".button");

// event
currency_1.addEventListener("change", calculator);
currency_2.addEventListener("change", calculator);
amount_1.addEventListener("input", calculator);
amount_2.addEventListener("input", calculator);
button.addEventListener("click", function () {
	let box = currency_1.value;
	currency_1.value = currency_2.value;
	currency_2.value = box;
	calculator();
});

function calculator() {
	let currencyValue_1 = currency_1.value;
	let currencyValue_2 = currency_2.value;
	console.log(currencyValue_1, currencyValue_2);

	fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currencyValue_1}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			console.log(myJson);

			let rateToday = myJson.conversion_rates[currencyValue_2];
			console.log(rateToday);

			rate.innerText = `1 ${currencyValue_1} = ${rateToday} ${currencyValue_2}`;

			amount_2.value = (amount_1.value * rateToday).toFixed(2);
		});
}
