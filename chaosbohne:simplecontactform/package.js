Package.describe({
  name: 'chaosbohne:simplecontactform',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('chaosbohne:simplecontactform.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chaosbohne:simplecontactform');
  api.addFiles('chaosbohne:simplecontactform-tests.js');
});
