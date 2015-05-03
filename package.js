Package.describe({
  name: 'meteorba:mango',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating'], 'client');
  api.addFiles('mango.js', ['server']);
  api.addFiles('mango_client.html', ['client']);
  if (api.export){
    api.export('mango', ['server']);
  }
});

Package.onTest(function(api) {
  api.use(['tinytest', 'meteorba:mango']);
  api.addFiles('tests/client.js', 'client');
  api.addFiles('tests/server.js', 'server');
});

Npm.depends({
  'mango': '0.0.0'
})
