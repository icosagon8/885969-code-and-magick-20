'use strict';
(function () {
  var PLAYERS_NUMBER = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var similarListElement = document.querySelector('.setup-similar-list');

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    var randomWizards = window.util.shuffleArray(wizards);
    for (var i = 0; i < PLAYERS_NUMBER; i++) {
      fragment.appendChild(renderWizard(randomWizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.dialog.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(successHandler, window.util.errorHandler);

})();
