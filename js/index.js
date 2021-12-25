var elForm = document.querySelector('.form');

var elInput = elForm.querySelector('.js-input');
var elSelect = elForm.querySelector('.select');

var elResult = document.querySelector('.result')

elForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var result = Number(elInput.value) / Number(elSelect.value)

    elResult.textContent = result.toFixed(3)
})