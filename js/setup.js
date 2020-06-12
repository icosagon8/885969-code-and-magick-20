'use strict';

var PLAYERS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');

var getRandom = function (wizardProperty) {
  return wizardProperty[Math.round(Math.random() * (wizardProperty.length - 1))];
};

var generatesWizards = function () {
  var wizards = [];
  for (var i = 0; i < PLAYERS_NUMBER; i++) {
    wizards.push({
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
      coatColor: getRandom(WIZARD_COAT_COLORS),
      eyesColor: getRandom(WIZARD_EYES_COLORS)
    });
  }
  return wizards;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var drawWizards = function () {
  var wizards = generatesWizards();
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

drawWizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupInput = userDialog.querySelector('input[type="text"]');

var onPopupEscPress = function (evt) {
  if ((evt.key === 'Escape') && (setupInput !== document.activeElement)) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var userNameInput = userDialog.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var fireballColor = userDialog.querySelector('.setup-fireball-wrap');
var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
var fireballColorInput = userDialog.querySelector('input[name="fireball-color"]');

var changeColor = function (colors, element, elementInput, cssProperty) {
  element.addEventListener('click', function () {
    var color = getRandom(colors);
    element.style[cssProperty] = color;
    elementInput.value = color;
  });
};

changeColor(WIZARD_COAT_COLORS, wizardCoat, wizardCoatInput, 'fill');
changeColor(WIZARD_EYES_COLORS, wizardEyes, wizardEyesInput, 'fill');
changeColor(FIREBALL_COLOR, fireballColor, fireballColorInput, 'backgroundColor');

