
var meteor = {};

meteor.Meteor = Meteor;
meteor.Package = Package;
meteor.Deps = Deps;
meteor.DDP = DDP;

if (typeof module !== 'undefined') {
  module.exports = meteor;
} else if (window) {
  for (var k in meteor) {
    window[k] = meteor[k];
  }
}

})();

