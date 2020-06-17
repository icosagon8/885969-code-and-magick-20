'use strict';
(function () {
  var getRandomArrayValue = function (array) {
    return array[Math.round(Math.random() * (array.length - 1))];
  };

  window.util = {
    getRandomArrayValue: getRandomArrayValue
  };
})();
