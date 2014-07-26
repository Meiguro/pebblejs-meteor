
/* jshint ignore:start */
(function () {
/* jshint ignore:end */

var meteor;

var Package;
var Meteor;
var Deps;
var DDP;

if (document.addEventListener && !window.addEventListener) {
  window.addEventListener = function(eventType, callback) {
    if (eventType === 'load') {
      setTimeout(callback, 0);
    }
  };
}

/* jshint ignore:start */
var MeteorLoader = function () {
/* jshint ignore:end */
