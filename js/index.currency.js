const currencySelect = document.querySelector('.product__currency');

currencySelect.addEventListener('change', changeCurrency);

async function changeCurrency() {
    const response = await fetch('https://api.exchangerate-api.com/v6/latest');

    const currencyData = await response.json();
    const selectedCurrency = currencySelect.value;

    const rate = currencyData.rates[selectedCurrency];
    document.documentElement.setAttribute('data-currency', selectedCurrency);

    // Update prices in pricing cards
    const priceCards = document.querySelectorAll('[data-price]');
    priceCards.forEach(card => {
        const basePrice = parseFloat(card.getAttribute('data-price'));
        const newPrice = Math.round(basePrice * rate);
        const priceElement = card.querySelector('.price-card__amount b');
        if (priceElement) {
            priceElement.textContent = newPrice;
        }
    });
}