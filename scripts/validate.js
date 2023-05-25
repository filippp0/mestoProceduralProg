/*переменная с объектом для валидации*/
const validationConfig = {
  allforms: document.forms,
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  errorSelectorTemplate: '.popup__error_type_',
  disableButtonClass: 'popup__submit_disable',
  inputErrorClass: 'popup__input_invalid',
  // textErrorClass: 'popup__error_active'
};
console.log(this)
/*функция сброса error при открытие формы*/
function resetErrorForOpenForm(form, config) {
  const button = form.querySelector(config.submitButtonSelector);
  form.querySelectorAll(config.inputSelector).forEach((element) => {
    const errorText = form.querySelector(`${config.errorSelectorTemplate}${element.name}`);
    if (!element.validity.valid) {
      hideInputError(errorText, element, {inputErrorClass: config.inputErrorClass});
    }
  })
  disableButton(button, config.disableButtonClass)
}

/*функция показывающая ошибку*/
function showInputError(errorTextElement, input, {inputErrorClass}) {
  // errorTextElement.classList.add(config.textErrorClass);
  errorTextElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
}

/*функция скрывающая ошибку*/
function hideInputError(errorTextElement, input, config) {
  // errorTextElement.classList.remove(config.textErrorClass);
  errorTextElement.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

/*функция делающая кнопку некликабельной*/
function disableButton(button, disableButtonClass) {
  button.classList.add(disableButtonClass);
  button.disabled = true;
  // button.setAttribute('disabled', '')
}

/*функция делающая кнопку кликабельной*/
function enableButton(button, disableButtonClass) {
  button.classList.remove(disableButtonClass);
  button.disabled = false;
  // button.removeAttribute('disabled')
}

/*функция возвращающая валидные инпуты*/
function hasValidInput(inputElements) {
  return Array.from(inputElements).some((input) => !input.validity.valid)
}

/*функция проверяющая валидность инпутов и стелизующая кнопку в зависимости от их валидности*/
function toggleButtonState(button, inputElements, disableButtonClass) {
  !hasValidInput(inputElements) ? enableButton(button, disableButtonClass) : disableButton(button, disableButtonClass);
}

/*функция скрытия и открытия ошибки в зависимости от валидности инпутов*/
function checkInputValidity(input,{errorSelectorTemplate, ...config}) {
  const errorTextElement = document.querySelector(`${errorSelectorTemplate}${input.name}`);
  input.validity.valid ? hideInputError(errorTextElement, input, config) : showInputError(errorTextElement, input, config);
}

function addEventListener(inputList, button,{disableButtonClass, ...config}) {
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      toggleButtonState(button, inputList, disableButtonClass);
      checkInputValidity(input, config);
    })
  })
}

function enableValidation({allforms, inputSelector, submitButtonSelector, ...config}) {
  const forms = Array.from(allforms)
  forms.forEach((form) => {
    const inputElements = form.querySelectorAll(inputSelector)
    const buttonSubmit = form.querySelector(submitButtonSelector)
    addEventListener(inputElements, buttonSubmit, config)
  });

}
