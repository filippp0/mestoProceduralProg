/*функция открытия попап*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

/*функция закрытия попап*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

/*функция закрытие попап при нажатии на Escape*/
function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

/*функция отмены закрытия попап при нажатии на дочерних*/
function closePopupByClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
  return
}

/*функция открытия попап для картинки*/
function openImagePopup(cardData) {
  popupImageElement.src = cardData.link;
  popupImageElement.alt = cardData.name;
  imagePopupCaption.textContent = cardData.name;
  openPopup(imagePopupElement);
}

/*функция создания разметки карточки (картинки и описания)*/
function createCard(cardData) {
  const listElement = cardElement.querySelector('.elements__list').cloneNode(true);
  const imageElement = listElement.querySelector('.elements__image');
  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;
  listElement.querySelector('.elements__subtitle').textContent = cardData.name;
  return listElement;
}

/*функция добавления карточки в нужный контейнер*/
function addCard(container, card) {
  container.prepend(card);
}

/*делегирование обработки необходимых кликов на странице pageContainerElement'у*/
listsElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('elements__like-icon')) {
    evt.target.classList.toggle('elements__like-icon_active');
  }

  if (evt.target.classList.contains('elements__trash')) {
    evt.target.closest('.elements__list').remove();
  }

  if (evt.target.classList.contains('elements__image')) {
    const cardData = {name: evt.target.alt, link: evt.target.src};
    openImagePopup(cardData);
  }
})

/*открытие попап редоктирования профиля*/
profileEditButtonElement.addEventListener('click', () => {
  resetErrorForOpenForm(formPersonalDataElement, validationConfig);
  popupInputNameElement.value = profileNameElement.textContent;
  popupInputJobElement.value = profileJobElement.textContent;
  openPopup(profilePopupElement);
})

/*открытие попап редоктирования карточек*/
profileAddButtonElement.addEventListener('click', () => {
  formAddCardElement.reset();
  resetErrorForOpenForm(formAddCardElement, validationConfig);
  openPopup(cardPopupElement);
})

/*создани при загрузке страницы начальных карточек*/
initialCards.forEach(element => {
  const card = createCard(element);
  addCard(listsElement, card)
})

/*обработка submit для формы редактирования профиля*/
formPersonalDataElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = popupInputNameElement.value;
  profileJobElement.textContent = popupInputJobElement.value;
  closePopup(profilePopupElement);
})

/*обработка submit формы для добавления карточки*/
formAddCardElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardDataNameUrl = {name: popupInputTitleElement.value, link: popupInputUrlElement.value};
  const card = createCard(cardDataNameUrl);
  addCard(listsElement, card)
  closePopup(cardPopupElement);
})

/*закрытие попап при нажатии на крестик*/
popupCloseButtonElements.forEach(element => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => closePopup(popup));
})

/*закрытие попап при нажатии на фон*/
popupElements.forEach(element => element.addEventListener('click', (evt) => closePopupByClickOnOverlay(evt)));

enableValidation(validationConfig);
