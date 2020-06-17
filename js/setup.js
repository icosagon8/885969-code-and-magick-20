'use strict';
(function () {
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = window.dialog.userDialog;
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
      var color = window.util.getRandomArrayValue(colors);
      element.style[cssProperty] = color;
      elementInput.value = color;
    });
  };

  changeColor(window.similarWizards.WIZARD_COAT_COLORS, wizardCoat, wizardCoatInput, 'fill');
  changeColor(window.similarWizards.WIZARD_EYES_COLORS, wizardEyes, wizardEyesInput, 'fill');
  changeColor(FIREBALL_COLOR, fireballColor, fireballColorInput, 'backgroundColor');
})();
