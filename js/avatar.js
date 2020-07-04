'use strict';
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooser = window.dialog.userDialog.querySelector('.upload input[type=file]');
  var preview = window.dialog.userDialog.querySelector('.setup-user-pic');
  var previewForOpen = window.dialog.setupOpen.querySelector('.setup-open-icon');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
        previewForOpen.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });

})();
