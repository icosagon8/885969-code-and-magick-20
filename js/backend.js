'use strict';
(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  var handlesError = function (xhttpr, load, error) {
    xhttpr.addEventListener('load', function () {
      if (xhttpr.status === StatusCode.OK) {
        load(xhttpr.response);
      } else {
        error('Статус ответа: ' + xhttpr.status + ' ' + xhttpr.statusText);
      }
    });
    xhttpr.addEventListener('error', function () {
      error('Произошла ошибка соединения');
    });
    xhttpr.addEventListener('timeout', function () {
      error('Запрос не успел выполниться за ' + xhttpr.timeout + 'мс');
    });

    xhttpr.timeout = TIMEOUT_IN_MS;
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    handlesError(xhr, onLoad, onError);
    xhr.open('POST', URL);
    xhr.send(data);
  };


  var load = function (onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    handlesError(xhr, onLoad, onError);
    xhr.open('GET', URL);
    xhr.send();
  };

  window.backend = {
    save: save,
    load: load
  };
})();
