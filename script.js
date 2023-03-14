const convertForm = document.getElementById('convert-form');
const brlValueInput = document.getElementById('brl-value');
const currencySelect = document.getElementById('currency-select');
const resultParagraph = document.getElementById('result');
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

convertForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const brlValue = parseFloat(brlValueInput.value);
  const currency = currencySelect.value;
  const convertedValue = convert(brlValue, currency);
  resultParagraph.textContent = `${brlValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} = ${convertedValue.toLocaleString('pt-BR', {style: 'currency', currency})}`;
});

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})

function convert(brlValue, currency) {
  switch (currency) {
    case 'USD':
      return brlValue * 0.19;
    case 'EUR':
      return brlValue * 0.182;
    case 'GBP':
      return brlValue * 0.14;
    case 'ARS':
      return brlValue * 38.47;
    case 'JPY':
      return brlValue * 26.5463;
    case 'AUD':
      return brlValue * 0.2943;
    case 'CHF':
      return brlValue * 0.1824;
    case 'CAD':
      return brlValue * 0.268;
    case 'CNY':
      return brlValue * 1.3559;
    case 'TRY':
      return brlValue * 3.69;
    case 'HKD':
      return brlValue * 1.5286;
    case 'MXN':
      return brlValue * 3.5137;
    case 'SEK':
      return brlValue * 2.0881;
    case 'SGD':
      return brlValue * 0.2632;
    case 'NZD':
      return brlValue * 0.3176;
    case 'INR':
      return brlValue * 15.9668;
    case 'KRW':
      return brlValue * 256.9373;
    case 'RUB':
      return brlValue * 14.7754;
    default:
      return NaN;
  }
}