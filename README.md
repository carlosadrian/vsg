# Vue Scrollable Gallery

***Work in progress, some references may change***

Gallery that scrolls by device inclination.

Vue based elemental gallery, items are loaded remotely using **axios**. Detecting `DeviceOrientationEvent`, gallery scrolls on any direction when you move your device.

Interaction is enabled by user prompt according to W3C specification.

<abbr title="Single File Component">SFC</abbr> is being used. Driver to read `DeviceOrientationEvent` and set coordinates is written in TypeScript.

**SSL is required to get `DeviceOrientationEvent` working**

## Install & run

In project root directory: `npm install`

## Serve and build
It is recommended to use `vue-cli`, but you can use `webpack` as well. 

`tsc src/Scrollable.ts -t ES2020` To transpile the TypeScript module

`vue serve src/index.js` To launch only gallery

`vue build src/index.js` To export

`vue-cli-service serve --https` To launch gallery and `deviceorientation` interaction.

## JSON Structure for default gallery items
    {
        id: int,
        title: string,
        src: string
    }


## Compatibility
It works fine in recent versions of Firefox for iOS as of December 2020.

For full browser compatibility, take a look at https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation#Browser_compatibility

### WIP
Debug info for `gamma`, `beta` and position on-screen.

*Thank's*
