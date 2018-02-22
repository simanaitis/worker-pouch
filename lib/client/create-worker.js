'use strict';
/* global webkitURL */

module.exports = function createWorker(code) {
  var URLCompat = typeof URL !== 'undefined' ? URL : webkitURL;

  function makeBlobURI(script) {
    var blob = new Blob([script], {type: 'text/javascript'});
    return URLCompat.createObjectURL(blob);
  }

  var blob = new Blob([code], {type: 'text/javascript'});
  return new Worker(makeBlobURI(blob));
};
