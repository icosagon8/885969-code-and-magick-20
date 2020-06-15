'use strict';
(function () {
  var userDialog = document.querySelector('.setup');

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

  var onSetupOpenClick = function () {
    openPopup();
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupOpen.removeEventListener('click', onSetupOpenClick);
    setupOpen.removeEventListener('keydown', onSetupOpenPressEnter);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupOpen.addEventListener('click', onSetupOpenClick);
    setupOpen.addEventListener('keydown', onSetupOpenPressEnter);
  };

  setupOpen.addEventListener('click', onSetupOpenClick);

  var onSetupOpenPressEnter = function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  };

  setupOpen.addEventListener('keydown', onSetupOpenPressEnter);

  var resetsPopupPosition = function () {
    userDialog.style.top = 'calc(50% - ' + (userDialog.offsetHeight / 2) + 'px)';
    userDialog.style.left = '50%';
  };

  setupClose.addEventListener('click', function () {
    resetsPopupPosition();
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      resetsPopupPosition();
      closePopup();
    }
  });

  var dialogHandle = userDialog.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dialog = {
    userDialog: userDialog
  };
})();
