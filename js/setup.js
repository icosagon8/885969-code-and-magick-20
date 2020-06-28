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
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
  var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireballColorInput = userDialog.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomArrayValue(WIZARD_COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    window.similarWizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomArrayValue(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    window.similarWizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = window.util.getRandomArrayValue(FIREBALL_COLOR);
    wizardFireball.style.backgroundColor = newColor;
    fireballColorInput.value = newColor;
  });
})();
