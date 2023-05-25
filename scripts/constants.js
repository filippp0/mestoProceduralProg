/*массив значений для начальных карточек*/
const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

const profileEditButtonElement = document.querySelector('.profile__edit');
const profileAddButtonElement = document.querySelector('.profile__add-button')
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');

const popupElements = document.querySelectorAll('.popup');
const popupCloseButtonElements = document.querySelectorAll('.popup__close-icon');
const profilePopupElement = document.querySelector('.profile-popup')
const formPersonalDataElement = document.forms.personalData
const popupInputNameElement = formPersonalDataElement.querySelector('.popup__input_el_name');
const popupInputJobElement = formPersonalDataElement.querySelector('.popup__input_el_job');
const cardPopupElement = document.querySelector('.card-popup')
const formAddCardElement = document.forms.addCard
const popupInputTitleElement = formAddCardElement.querySelector('.popup__input_el_title');
const popupInputUrlElement = formAddCardElement.querySelector('.popup__input_el_url');
const imagePopupElement = document.querySelector('.image-popup')
const popupImageElement = imagePopupElement.querySelector('.image-popup__image');
const imagePopupCaption = imagePopupElement.querySelector('.image-popup__image-caption');

const listsElement = document.querySelector('.elements__lists');
const cardElement = document.querySelector('#cardElement').content;

/*переменные для сброса ошибок при открытии форм*/
const buttonSubmitFromFormPersonalDataElement = formPersonalDataElement.querySelector('.popup__submit');
const inputListFromFormPersonalDataElement = formPersonalDataElement.querySelectorAll('.popup__input');
const buttonSubmitFromFormAddCardElement = formAddCardElement.querySelector('.popup__submit');
const inputListFromFormAddCardElement = formAddCardElement.querySelectorAll('.popup__input');
