'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_X = 10;
var SHADOW_Y = 10;
var GAP = 20;
var FONT_GAP = 20;
var BARS_LEFT_GAP = 20;
var BAR_DELTA = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_COLOR = '#000000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var splitString = function (ctx, line) {
  var lines = line.split('\n');
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  for (var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP * i);
  }
};

var drawingBar = function (ctx, names, periods) {
  var maxTime = getMaxElement(periods);

  for (var i = 0; i < names.length; i++) {
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + GAP + BARS_LEFT_GAP + (BAR_WIDTH + BAR_DELTA) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + BARS_LEFT_GAP + (BAR_WIDTH + BAR_DELTA) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - (BAR_HEIGHT * periods[i]) / maxTime - FONT_GAP, BAR_WIDTH, (BAR_HEIGHT * periods[i]) / maxTime);
    ctx.textBaseline = 'top';
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.round(periods[i]), CLOUD_X + GAP + BARS_LEFT_GAP + (BAR_WIDTH + BAR_DELTA) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - (BAR_HEIGHT * periods[i]) / maxTime - FONT_GAP);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_X, CLOUD_Y + SHADOW_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  splitString(ctx, 'Ура вы победили!\nСписок результатов:');
  drawingBar(ctx, players, times);
};
