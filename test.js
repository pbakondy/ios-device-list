/* eslint sourceType: module */

import test from 'ava';

const devices = require('./index');

test('deviceTypes()', t => {
  t.is(typeof devices.deviceTypes, 'function');
  t.truthy(Array.isArray(devices.deviceTypes()));
  t.is(devices.deviceTypes().length, 8);
});

test('devices()', t => {
  let list = devices.deviceTypes();

  t.is(typeof devices.devices, 'function');
  t.truthy(Array.isArray(devices.devices()));

//  t.is(devices.devices().length, 728);
//  t.is(devices.devices(list[0]).length, 5);
//  t.is(devices.devices(list[1]).length, 30);
//  t.is(devices.devices(list[2]).length, 193);
//  t.is(devices.devices(list[3]).length, 102);
//  t.is(devices.devices(list[4]).length, 328);
//  t.is(devices.devices(list[5]).length, 69);
});

test('devices() device', t => {
  let d1 = devices.deviceByModel('MD523')[0]; // 100th MD523
  let d2 = devices.deviceByModel('MF135')[0]; // 500th MF135

  t.is(typeof d1.Type, 'string');
  t.is(typeof d1.Generation, 'string');
  t.is(typeof d1.ANumber, 'string');
  t.is(typeof d1.Bootrom, 'string');
//  t.is(typeof d1.Variant, 'string');
  t.is(typeof d1.FCCID, 'string');
  t.is(typeof d1.InternalName, 'string');
  t.is(typeof d1.Identifier, 'string');
  t.is(typeof d1.Color, 'string');
  t.is(typeof d1.Storage, 'string');
  t.is(typeof d1.Model, 'string');

  t.is(typeof d2.Type, 'string');
  t.is(typeof d2.Generation, 'string');
  t.is(Array.isArray(d2.ANumber), true);
  t.is(Array.isArray(d2.Bootrom), true);
//  t.is(typeof d2.Variant, 'string');
  t.is(Array.isArray(d2.FCCID) || typeof d2.FCCID === 'string', true);
  t.is(typeof d2.InternalName, 'string');
  t.is(typeof d2.Identifier, 'string');
  t.is(typeof d2.Color, 'string');
  t.is(typeof d2.Storage, 'string');
  t.is(typeof d2.Model, 'string');
});

test('generations()', t => {
  t.is(typeof devices.generations, 'function');
  t.truthy(Array.isArray(devices.generations()));
  t.is(devices.generations().length, 60);
  t.is(devices.generations('iphone').length, 21);
  t.throws(function() { devices.generations('invalidType') });
});

test('anumbers()', t => {
  t.is(typeof devices.anumbers, 'function');
  t.truthy(Array.isArray(devices.anumbers()));
  t.is(devices.anumbers().length, 172);
  t.is(devices.anumbers('iphone').length, 72);
  t.throws(function() { devices.anumbers('invalidType') });
});

test('fccids()', t => {
  t.is(typeof devices.fccids, 'function');
  t.truthy(Array.isArray(devices.fccids()));
  t.is(devices.fccids().length, 132);
  t.is(devices.fccids('iphone').length, 44);
  t.throws(function() { devices.fccids('invalidType') });
});

test('internalNames()', t => {
  t.is(typeof devices.internalNames, 'function');
  t.truthy(Array.isArray(devices.internalNames()));
  t.is(devices.internalNames().length, 120);
  t.is(devices.internalNames('iphone').length, 37);
  t.throws(function() { devices.internalNames('invalidType') });
});

test('identifiers()', t => {
  t.is(typeof devices.identifiers, 'function');
  t.truthy(Array.isArray(devices.identifiers()));
  t.is(devices.identifiers().length, 112);
  t.is(devices.identifiers('iphone').length, 32);
  t.throws(function() { devices.identifiers('invalidType') });
});

test('colors()', t => {
  t.is(typeof devices.colors, 'function');
  t.truthy(Array.isArray(devices.colors()));
  t.is(devices.colors().length, 17);
  t.is(devices.colors('iphone').length, 13);
  t.throws(function() { devices.colors('invalidType') });
});

test('storages()', t => {
  t.is(typeof devices.storages, 'function');
  t.truthy(Array.isArray(devices.storages()));
  t.is(devices.storages().length, 10);
  t.is(devices.storages('iphone').length, 8);
  t.throws(function() { devices.storages('invalidType') });
});

test('models()', t => {
  t.is(typeof devices.models, 'function');
  t.truthy(Array.isArray(devices.models()));
//  t.is(devices.models().length, 714);
//  t.is(devices.models('iphone').length, 317);
  t.throws(function() { devices.models('invalidType') });
});

test('deviceByGeneration()', t => {
  let find = 'iPhone 6s Plus';

  t.is(typeof devices.deviceByGeneration, 'function');
  t.throws(function() { devices.deviceByGeneration() });
  t.is(typeof devices.deviceByGeneration(find), 'object');
  t.is(devices.deviceByGeneration(find).length > 0, true);
  t.is(devices.deviceByGeneration(find, 'iphone').length > 0, true);
  t.is(devices.deviceByGeneration(find, 'ipad').length, 0);
  t.throws(function() { devices.deviceByGeneration(find, 'invalidType') });

  t.is(devices.deviceByGeneration(find.substr(0, 11)).length, 0);
  t.is(devices.deviceByGeneration(find.substr(0, 11), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByGeneration(find.toLowerCase()).length, 0);
  t.is(devices.deviceByGeneration(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByGeneration(find.toLowerCase()).length, 0);
  t.is(devices.deviceByGeneration(find.substr(0, 11).toLowerCase()).length, 0);
  t.is(devices.deviceByGeneration(find.substr(0, 11).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByGeneration(find.substr(0, 11).toLowerCase(), null, { caseInsensitive: true }).length, 0);
  t.is(devices.deviceByGeneration(find.substr(0, 11).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByANumber()', t => {
  let find = 'A1634';

  t.is(typeof devices.deviceByANumber, 'function');
  t.throws(function() { devices.deviceByANumber() });
  t.is(typeof devices.deviceByANumber(find), 'object');
  t.is(devices.deviceByANumber(find).length > 0, true);
  t.is(devices.deviceByANumber(find, 'iphone').length > 0, true);
  t.is(devices.deviceByANumber(find, 'ipad').length, 0);
  t.throws(function() { devices.deviceByANumber(find, 'invalidType') });

  t.is(devices.deviceByANumber(find.substr(0, 4)).length, 0);
//  t.is(devices.deviceByANumber(find.substr(0, 4), null, { contains: true }).length, 63);
  t.is(devices.deviceByANumber(find.substr(0, 4), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByANumber(find.toLowerCase()).length, 0);
  t.is(devices.deviceByANumber(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByANumber(find.toLowerCase()).length, 0);
  t.is(devices.deviceByANumber(find.substr(0, 4).toLowerCase()).length, 0);
  t.is(devices.deviceByANumber(find.substr(0, 4).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByANumber(find.substr(0, 4).toLowerCase(), null, { caseInsensitive: true }).length, 0);
//  t.is(devices.deviceByANumber(find.substr(0, 4).toLowerCase(), null, { contains: true, caseInsensitive: true }).length, 63);
  t.is(devices.deviceByANumber(find.substr(0, 4).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByFCCID()', t => {
  let find = 'BCG-E2944A';

  t.is(typeof devices.deviceByFCCID, 'function');
  t.throws(function() { devices.deviceByFCCID() });
  t.is(typeof devices.deviceByFCCID(find), 'object');
  t.is(devices.deviceByFCCID(find).length > 0, true);
  t.is(devices.deviceByFCCID(find, 'iphone').length > 0, true);
  t.is(devices.deviceByFCCID(find, 'ipad').length, 0);
  t.throws(function() { devices.deviceByFCCID(find, 'invalidType') });

  t.is(devices.deviceByFCCID(find.substr(0, 8)).length, 0);
//  t.is(devices.deviceByFCCID(find.substr(0, 8), null, { contains: true }).length, 48);
  t.is(devices.deviceByFCCID(find.substr(0, 8), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByFCCID(find.toLowerCase()).length, 0);
  t.is(devices.deviceByFCCID(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByFCCID(find.toLowerCase()).length, 0);
  t.is(devices.deviceByFCCID(find.substr(0, 8).toLowerCase()).length, 0);
  t.is(devices.deviceByFCCID(find.substr(0, 8).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByFCCID(find.substr(0, 8).toLowerCase(), null, { caseInsensitive: true }).length, 0);
//  t.is(devices.deviceByFCCID(find.substr(0, 8).toLowerCase(), null, { contains: true, caseInsensitive: true }).length, 48);
  t.is(devices.deviceByFCCID(find.substr(0, 8).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByInternalName()', t => {
  let find = 'N66AP';

  t.is(typeof devices.deviceByInternalName, 'function');
  t.throws(function() { devices.deviceByInternalName() });
  t.is(typeof devices.deviceByInternalName(find), 'object');
  t.is(devices.deviceByInternalName(find).length > 0, true);
  t.is(devices.deviceByInternalName(find, 'iphone').length > 0, true);
  t.is(devices.deviceByInternalName(find, 'ipad').length, 0);
  t.throws(function() { devices.deviceByInternalName(find, 'invalidType') });

  t.is(devices.deviceByInternalName(find.substr(0, 4)).length, 0);
  t.is(devices.deviceByInternalName(find.substr(0, 4), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByInternalName(find.toLowerCase()).length, 0);
  t.is(devices.deviceByInternalName(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByInternalName(find.toLowerCase()).length, 0);
  t.is(devices.deviceByInternalName(find.substr(0, 4).toLowerCase()).length, 0);
  t.is(devices.deviceByInternalName(find.substr(0, 4).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByInternalName(find.substr(0, 4).toLowerCase(), null, { caseInsensitive: true }).length, 0);
  t.is(devices.deviceByInternalName(find.substr(0, 4).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByIdentifier()', t => {
  let find = 'iPhone8,2';

  t.is(typeof devices.deviceByIdentifier, 'function');
  t.throws(function() { devices.deviceByIdentifier() });
  t.is(typeof devices.deviceByIdentifier(find), 'object');
  t.is(devices.deviceByIdentifier(find).length > 0, true);
  t.is(devices.deviceByIdentifier(find, 'iphone').length > 0, true);
  t.is(devices.deviceByIdentifier(find, 'ipad').length, 0);
  t.throws(function() { devices.deviceByIdentifier(find, 'invalidType') });

  t.is(devices.deviceByIdentifier(find.substr(0, 8)).length, 0);
//  t.is(devices.deviceByIdentifier(find.substr(0, 8), null, { contains: true }).length, 56);
  t.is(devices.deviceByIdentifier(find.substr(0, 8), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByIdentifier(find.toLowerCase()).length, 0);
  t.is(devices.deviceByIdentifier(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByIdentifier(find.toLowerCase()).length, 0);
  t.is(devices.deviceByIdentifier(find.substr(0, 8).toLowerCase()).length, 0);
  t.is(devices.deviceByIdentifier(find.substr(0, 8).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByIdentifier(find.substr(0, 8).toLowerCase(), null, { caseInsensitive: true }).length, 0);
//  t.is(devices.deviceByIdentifier(find.substr(0, 8).toLowerCase(), null, { contains: true, caseInsensitive: true }).length, 56);
  t.is(devices.deviceByIdentifier(find.substr(0, 8).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByColor()', t => {
  let find = 'Rose Gold';

  t.is(typeof devices.deviceByColor, 'function');
  t.throws(function() { devices.deviceByColor() });
  t.is(typeof devices.deviceByColor(find), 'object');
  t.is(devices.deviceByColor(find).length > 0, true);
  t.is(devices.deviceByColor(find, 'iphone').length > 0, true);
  t.is(devices.deviceByColor(find, 'ipad').length > 0, true);
  t.throws(function() { devices.deviceByColor(find, 'invalidType') });

  t.is(devices.deviceByColor(find.substr(0, 8)).length, 0);
  t.is(devices.deviceByColor(find.substr(0, 8), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByColor(find.toLowerCase()).length, 0);
  t.is(devices.deviceByColor(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByColor(find.toLowerCase()).length, 0);
  t.is(devices.deviceByColor(find.substr(0, 8).toLowerCase()).length, 0);
  t.is(devices.deviceByColor(find.substr(0, 8).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByColor(find.substr(0, 8).toLowerCase(), null, { caseInsensitive: true }).length, 0);
  t.is(devices.deviceByColor(find.substr(0, 8).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByStorage()', t => {
  let find = '128 GB';

  t.is(typeof devices.deviceByStorage, 'function');
  t.throws(function() { devices.deviceByStorage() });
  t.is(typeof devices.deviceByStorage(find), 'object');
  t.is(devices.deviceByStorage(find).length > 0, true);
  t.is(devices.deviceByStorage(find, 'iphone').length > 0, true);
  t.is(devices.deviceByStorage(find, 'ipad').length > 0, true);
  t.throws(function() { devices.deviceByStorage(find, 'invalidType') });

  t.is(devices.deviceByStorage(find.substr(0, 4)).length, 0);
  t.is(devices.deviceByStorage(find.substr(0, 4), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByStorage(find.toLowerCase()).length, 0);
  t.is(devices.deviceByStorage(find.toLowerCase(), null, { caseInsensitive: true }).length > 0, true);
  t.is(devices.deviceByStorage(find.toLowerCase()).length, 0);
  t.is(devices.deviceByStorage(find.substr(0, 4).toLowerCase()).length, 0);
  t.is(devices.deviceByStorage(find.substr(0, 4).toLowerCase(), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByStorage(find.substr(0, 4).toLowerCase(), null, { caseInsensitive: true }).length, 0);
  t.is(devices.deviceByStorage(find.substr(0, 4).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('deviceByModel()', t => {
  let find = 'MKU52';

  t.is(typeof devices.deviceByModel, 'function');
  t.throws(function() { devices.deviceByModel() });
  t.is(typeof devices.deviceByModel(find), 'object');
  t.is(devices.deviceByModel(find).length, 1);
  t.is(devices.deviceByModel(find, 'iphone').length, 1);
  t.is(devices.deviceByModel(find, 'ipad').length, 0);
  t.throws(function() { devices.deviceByModel(find, 'invalidType') });

  t.is(devices.deviceByModel(find.substr(0, 3)).length, 0);
  t.is(devices.deviceByModel(find.substr(0, 3), null, { contains: true }).length > 0, true);
  t.is(devices.deviceByModel(find.toLowerCase()).length, 0);
  t.is(devices.deviceByModel(find.toLowerCase(), null, { caseInsensitive: true }).length, 1);
  t.is(devices.deviceByModel(find.toLowerCase()).length, 0);
  t.is(devices.deviceByModel(find.substr(0, 3).toLowerCase()).length, 0);
  t.is(devices.deviceByModel(find.substr(0, 3).toLowerCase(), null, { contains: true }).length, 0);
  t.is(devices.deviceByModel(find.substr(0, 3).toLowerCase(), null, { caseInsensitive: true }).length, 0);
  t.is(devices.deviceByModel(find.substr(0, 3).toLowerCase(), null, { contains: true, caseInsensitive: true }).length > 0, true);
});

test('generationByIdentifier()', t => {
  let find = 'iPhone8,2';

  t.is(typeof devices.generationByIdentifier, 'function');
  t.throws(function() { devices.generationByIdentifier() });
  t.is(typeof devices.generationByIdentifier(find), 'string');
  t.is(devices.generationByIdentifier(find), 'iPhone 6s Plus');
  t.is(devices.generationByIdentifier(find, 'iphone'), 'iPhone 6s Plus');
  t.is(devices.generationByIdentifier(find, 'ipad'), undefined);
  t.throws(function() { devices.generationByIdentifier(find, 'invalidType') });
});
