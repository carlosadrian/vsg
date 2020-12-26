# Vue Sphere Gallery

***Work in progress***

This gallery works with `DeviceOrientationEvent`, it moves around when you move your device.

Interaction is enabled by user interaction and requesting a browser permission.

It works with Vue to render the gallery and an additional driver in TypeScript for the device motion lecture.

Although it is Vue based and SFC is being used, it will require some additional steps like transpile TS code.

**SSL is required to get the device orientation permission**

## Install & run

In project root directory: `npm install`

## Serve and build
`tsc src/Gallery.ts -t ES2016` To transpile the TypeScript module

` vue serve src/index.js`

` vue build src/index.js`

## Compatibility
It works fine in recent versions of Firefox for iOS as of December 2020.

For full browser compatibility, take a look at https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation#Browser_compatibility

### WIP
Degrees for `gamma` and `beta` are on screen.


*Thank's*
