var fs = require('fs');
var path = require('path');

var BUNDLE_PATH = process.env.BUNDLE_PATH || path.join(__dirname, '.bundle');
var OUTPUT_PATH = process.env.OUTPUT_PATH || 'meteor.dist.js';

var Bundler = {};

Bundler.gatherSources = function(callback) {
  var starJson = require(path.join(BUNDLE_PATH, 'star.json'));

  var program;
  starJson.programs.forEach(function(_program) {
    if (_program.name === 'client') {
      program = _program;
      return false;
    }
  });

  var programJson = require(path.join(BUNDLE_PATH, program.path));

  programJson.manifest.forEach(function(pkg) {
    var sourcePath = path.join(BUNDLE_PATH, path.dirname(program.path), pkg.path);
    var source = fs.readFileSync(sourcePath);
    callback(null, source);
  });
};

Bundler.bundle = function(distfilePath) {
  fs.writeFileSync(distfilePath, '');
  Bundler.gatherSources(function(err, source) {
    fs.appendFileSync(distfilePath, source);
  });
};

module.exports = Bundler;

if (!module.parent) {
  Bundler.bundle(OUTPUT_PATH);
}
