var form = document.querySelector('#form')
var nameField = document.querySelector('#name')
var phoneField = document.querySelector('#phone')
var emailField = document.querySelector('#email')
var agreementField = document.querySelector('#aggrement')
var formErrors = document.querySelector('.form__errors')

form.addEventListener('submit', (evt) => {
	formErrors.innerHTML = ""

	var errorFields = document.querySelectorAll('.form__input--error')
	if(errorFields.length){
		for(var i=0; i<errorFields.length; i++){
			errorFields[i].classList.remove("form__input--error")
		}
	}

	if(!nameField.value){
		evt.preventDefault()
		nameField.classList.add("form__input--error")
		formErrors.insertAdjacentHTML("beforeend", "<li>Пожалуйста, введите имя</li>")
	}
	if(!phoneField.value){
		evt.preventDefault()
		phoneField.classList.add("form__input--error")
		formErrors.insertAdjacentHTML("beforeend", "<li>Пожалуйста, введите телефон</li>")
	}
	if(!emailField.value){
		evt.preventDefault()
		emailField.classList.add("form__input--error")
		formErrors.insertAdjacentHTML("beforeend", "<li>Пожалуйста, введите email</li>")
	}
	if(!agreementField.checked){
		evt.preventDefault()
		agreementField.classList.add("form__checkbox--error")
		formErrors.insertAdjacentHTML("beforeend", "<li>Пожалуйста, примите соглашение</li>")
	}
})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKVxudmFyIG5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJylcbnZhciBwaG9uZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJylcbnZhciBlbWFpbEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJylcbnZhciBhZ3JlZW1lbnRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZ2dyZW1lbnQnKVxudmFyIGZvcm1FcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3JzJylcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG5cdGZvcm1FcnJvcnMuaW5uZXJIVE1MID0gXCJcIlxuXG5cdHZhciBlcnJvckZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pbnB1dC0tZXJyb3InKVxuXHRpZihlcnJvckZpZWxkcy5sZW5ndGgpe1xuXHRcdGZvcih2YXIgaT0wOyBpPGVycm9yRmllbGRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdGVycm9yRmllbGRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtX19pbnB1dC0tZXJyb3JcIilcblx0XHR9XG5cdH1cblxuXHRpZighbmFtZUZpZWxkLnZhbHVlKXtcblx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdG5hbWVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLWVycm9yXCIpXG5cdFx0Zm9ybUVycm9ycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8bGk+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC40LzRjzwvbGk+XCIpXG5cdH1cblx0aWYoIXBob25lRmllbGQudmFsdWUpe1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0cGhvbmVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLWVycm9yXCIpXG5cdFx0Zm9ybUVycm9ycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8bGk+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9PC9saT5cIilcblx0fVxuXHRpZighZW1haWxGaWVsZC52YWx1ZSl7XG5cdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRlbWFpbEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC0tZXJyb3JcIilcblx0XHRmb3JtRXJyb3JzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxsaT7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUgZW1haWw8L2xpPlwiKVxuXHR9XG5cdGlmKCFhZ3JlZW1lbnRGaWVsZC5jaGVja2VkKXtcblx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdGFncmVlbWVudEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19jaGVja2JveC0tZXJyb3JcIilcblx0XHRmb3JtRXJyb3JzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxsaT7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0L/RgNC40LzQuNGC0LUg0YHQvtCz0LvQsNGI0LXQvdC40LU8L2xpPlwiKVxuXHR9XG59KVxuIl19
