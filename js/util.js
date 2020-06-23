'use strict';
(function () {
  var getRandomArrayValue = function (array) {
    return array[Math.round(Math.random() * (array.length - 1))];
  };

  var shuffleArray = function (array) {
    var j;
    var temp;
    var arr = array.slice();

    for (var i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    getRandomArrayValue: getRandomArrayValue,
    shuffleArray: shuffleArray,
    errorHandler: errorHandler
  };

})();
