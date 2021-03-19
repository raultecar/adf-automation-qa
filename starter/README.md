## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Explanation
- spec.js - functions changed to async to allow for "right-click" workaround 
- variables and constants extratcted to `globalVariables.js`
- `globalVariables` also contains a method to allow custom locator `data-automation-id` to be used

## Description
- run tests: `protractor conf.js`
