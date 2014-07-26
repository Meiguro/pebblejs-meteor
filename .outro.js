
meteor.Meteor = Meteor;
meteor.Package = Package;
meteor.Deps = Deps;
meteor.DDP = DDP;
meteor.Session = Session;

/* jshint ignore:start */
};
/* jshint ignore:end */

meteor = function(options) {
  options = options || {};

  if (window.location === undefined) {
    window.location = { href: options.url };
  }

  window.__meteor_runtime_config__ = {
    ROOT_URL: options.url,
    DDP_DEFAULT_CONNECTION_URL: options.url,
  };

  MeteorLoader();

  return meteor;
};

if (typeof module !== 'undefined') {
  module.exports = meteor;
} else if (window) {
  MeteorLoader(window.MeteorOptions);
  for (var k in meteor) {
    window[k] = meteor[k];
  }
}

/* jshint ignore:start */
})();
/* jshint ignore:end */

