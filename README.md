# Meteor for Pebble.js

Use [Meteor] Collections and DDP in your [Pebble.js] apps!

This repository hosts a Pebble.js Meteor module generator. The generated module is for use in Pebble.js apps.

## Using the Meteor module

Check out the [Pebble.js Meteor Leaderboard] example which has a prebuilt `meteor.js` module under `src` which you can readily use.

## Generate your own Meteor module

1. Specify the meteor packages you want to include in .meteor/packages
1. Generate the meteor site bundle with `meteor bundle --directory .bundle`
1. Generate the Pebble.js package with `node .bundle.js`
1. Include meteor.js module in your Pebble.js app

[Meteor]:https://github.com/meteor/meteor
[Pebble.js]:https://github.com/pebble/pebblejs
[Pebble.js Meteor Leaderboard]:https://github.com/Meiguro/pebblejs-meteor-leaderboard
