var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var BUNDLE_PATH = process.env.BUNDLE_PATH || path.join(__dirname, '.bundle');
var OUTPUT_PATH = process.env.OUTPUT_PATH || 'meteor.js';

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
  var programPath = path.join(BUNDLE_PATH, path.dirname(program.path));

  programJson.manifest.forEach(function(pkg) {
    if (pkg.type === 'js') {
      var source = fs.readFileSync(path.join(programPath, pkg.path));
      callback(null, source);
    }
  });
};

Bundler.bundle = function(distfilePath) {
  fs.writeFileSync(distfilePath, '');
  fs.appendFileSync(distfilePath, fs.readFileSync('.intro.js'));

  Bundler.gatherSources(function(err, source) {
    fs.appendFileSync(distfilePath, source);
  });

  fs.appendFileSync(distfilePath, fs.readFileSync('.outro.js'));
};

module.exports = Bundler;

if (!module.parent) {
  Bundler.bundle(OUTPUT_PATH);
}
