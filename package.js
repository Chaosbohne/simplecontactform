Package.describe({
  name: 'chaosbohne:simplecontactform',
  summary: "A simple contact form for prototyping",
  version: "0.1.0",
  git: "https://github.com/Chaosbohne/simplecontactform"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  
  api.use(
    ['underscore',
     'jquery',
     'session',
     'templating'],'client');
  
  api.use(
    ['aldeed:autoform@4.0.5', 'aldeed:simple-schema@1.1.0'], ['client', 'server'])
  
  api.use(['email'], 'server');
  
  api.addFiles(
    ["both/startup/startup.js",
     "both/schemas/contact.js"], ["client", "server"]);
  
  api.addFiles(
    ["client/views/contact_form/contact_form.html",
     "client/views/contact_form/contact_form.js",
     "client/views/contact_form/contact_form.css",
     "client/startup/startup.js"], "client");
  
  api.addFiles(
    ["server/methods/sendEmail.js"], "server");
});