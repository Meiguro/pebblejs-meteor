# Meteor for Pebble.js

Use [Meteor] Collections and DDP in your [Pebble.js] apps!

This repository hosts a Pebble.js Meteor package generator. The generated package is for use in Pebble.js apps.

## Generate your own Pebble.js Meteor package

1. Specify the meteor packages you want to include in .meteor/packages
1. Generate the meteor site bundle with `meteor bundle --directory .bundle`
1. Generate the Pebble.js package with `node .bundle.js`
1. Include meteor.js in your Pebble.js app

[Meteor]:https://github.com/meteor/meteor
[Pebble.js]:https://github.com/pebble/pebblejs
