'use strict';
(function () {
  var PLAYERS_NUMBER = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var generatesWizards = function () {
    var wizards = [];
    for (var i = 0; i < PLAYERS_NUMBER; i++) {
      wizards.push({
        name: window.util.getRandomArrayValue(WIZARD_NAMES) + ' ' + window.util.getRandomArrayValue(WIZARD_SURNAMES),
        coatColor: window.util.getRandomArrayValue(WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomArrayValue(WIZARD_EYES_COLORS)
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

  window.similarWizards = {
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS
  };
})();
