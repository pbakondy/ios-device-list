# iOS device list

[![npm](https://img.shields.io/npm/v/ios-device-list.svg)](https://www.npmjs.com/package/ios-device-list)

Searchable collection of Apple devices.

Parameters per device:
Generation, Model number ("A" Number), Bootrom, Variant, FCC ID, Internal Name, Identifier, Case Material, Color, Storage, Model

Sources:
- https://en.wikipedia.org/wiki/List_of_iOS_devices
- https://www.theiphonewiki.com/wiki/Models
- https://developer.apple.com/reference/uikit/uidevice
- https://support.apple.com/en-ph/HT201296

## Install

```
$ npm install ios-device-list
```

## Usage

In node:

```js
var iosDevices = require('ios-device-list');
```

In browser:

```html
<script src="node_modules/ios-device-list/dist/ios-device-list.min.js"></script>
<script>
  window.iosDeviceList // Object
</script>
```

### `.deviceTypes()` : Array

Returns the device type list: airpods, apple_tv, apple_watch, homepod, ipad, ipad_mini, iphone, ipod_touch

### `.devices([type])` : Array

Returns the full device list.

With optional type parameter returns the device list of the actual type.

### `.generations([type])` : Array

Returns the full Generation list.

With optional type parameter returns the generation list of the actual type.

### `.anumbers([type])` : Array

Returns the full "A" Number list.

With optional type parameter returns the "A" Number list of the actual type.

### `.fccids([type])` : Array

Returns the full FCC ID list.

With optional type parameter returns the FCC ID list of the actual type.

### `.internalNames([type])` : Array

Returns the full Internal Name list.

With optional type parameter returns the Internal Name list of the actual type.

### `.identifiers([type])` : Array

Returns the full Identifier list.

With optional type parameter returns the Identifier list of the actual type.

### `.colors([type])` : Array

Returns the full Color list.

With optional type parameter returns the Color list of the actual type.

### `.storages([type])` : Array

Returns the full Storage list.

With optional type parameter returns the Storage list of the actual type.

### `.models([type])` : Array

Returns the full Model list.

With optional type parameter returns the Model list of the actual type.

### `.deviceByGeneration(generation, [type], [options])` : Array

Returns a device list with matching Generation.

With optional type parameter the result is filtered by the device type.

`options` is an `Object`.
- `caseInsensitive`: boolean *(default false)* - do not care of case type
- `contains`: boolean *(default false)* - return partial (substring) results too


### `.deviceByANumber(anumber, [type], [options])` : Array

Returns a device list with matching "A" Number.

With optional type parameter the result is filtered by the device type.


### `.deviceByFCCID(fccid, [type], [options])` : Array

Returns a device list with matching FCC ID.

With optional type parameter the result is filtered by the device type.


### `.deviceByInternalName(name, [type], [options])` : Array

Returns a device list with matching Internal Name.

With optional type parameter the result is filtered by the device type.


### `.deviceByIdentifier(id, [type], [options])` : Array

Returns a device list with matching Identifier.

With optional type parameter the result is filtered by the device type.


### `.deviceByColor(color, [type], [options])` : Array

Returns a device list with matching Color.

With optional type parameter the result is filtered by the device type.


### `.deviceByStorage(storage, [type], [options])` : Array

Returns a device list with matching Storage.

With optional type parameter the result is filtered by the device type.


### `.deviceByModel(model, [type], [options])` : Array

Returns a device list with matching Model.

With optional type parameter the result is filtered by the device type.


### `.generationByIdentifier(id, [type])` : String

Returns the generation name with matching Identifier.

With optional type parameter the result is filtered by the device type.


## Example

```js
var iosDevices = require('ios-device-list');

var deviceTypes = iosDevices.deviceTypes();
var devices = iosDevices.devices();

console.log(deviceTypes.length);
// 6

console.log(devices.length);
// 727

console.log(devices[500]);
// { Type: 'iphone',
//   Generation: 'iPhone 5c',
//   ANumber: [ 'A1456', 'A1532' ],
//   Bootrom: [ 'Bootrom 1145.3' ],
//   Variant: 'iPhone5,3',
//   FCCID: [ 'BCG‑E2644A' ],
//   InternalName: 'N48AP',
//   Identifier: 'iPhone5,3',
//   Color: 'Yellow',
//   Storage: '32 GB',
//   Model: 'MF135' }

var iphone82;

iphone82 = iosDevices.deviceByIdentifier('iPhone8,2');
console.log(iphone82.length);
// 24

iphone82 = iosDevices.deviceByIdentifier('iphone8,2', null, { caseInsensitive: true });
console.log(iphone82.length);
// 24

iphone82 = iosDevices.deviceByIdentifier('iPhone8', null, { contains: true });
console.log(iphone82.length);
// 56

var gen = iosDevices.generationByIdentifier('iPhone8,2');
console.log(gen);
// 'iPhone 6s Plus'

```


## License

**ios-device-list** is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
