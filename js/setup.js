'use strict';
(function () {
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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

  changeColor(WIZARD_COAT_COLORS, wizardCoat, wizardCoatInput, 'fill');
  changeColor(WIZARD_EYES_COLORS, wizardEyes, wizardEyesInput, 'fill');
  changeColor(FIREBALL_COLOR, fireballColor, fireballColorInput, 'backgroundColor');
})();
