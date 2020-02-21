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
