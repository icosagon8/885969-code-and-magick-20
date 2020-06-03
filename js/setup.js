'use strict';

var PLAYERS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizards = [];

var generatesDataForWizard = function (number) {
  wizards[number] = {
    name: WIZARD_NAMES[Math.round(Math.random() * (WIZARD_NAMES.length - 1))] + ' ' + WIZARD_SURNAMES[Math.round(Math.random() * (WIZARD_SURNAMES.length - 1))],
    coatColor: WIZARD_COAT_COLORS[Math.round(Math.random() * (WIZARD_COAT_COLORS.length - 1))],
    eyesColor: WIZARD_EYES_COLORS[Math.round(Math.random() * (WIZARD_EYES_COLORS.length - 1))]
  };
};

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill: ' + wizard.coatColor + ';');
  wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: ' + wizard.eyesColor + ';');

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var fillsBlock = function (block) {
  block.appendChild(fragment);
};

for (var i = 0; i < PLAYERS_NUMBER; i++) {
  generatesDataForWizard(i);
  fragment.appendChild(renderWizard(wizards[i]));
}

fillsBlock(similarListElement);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
