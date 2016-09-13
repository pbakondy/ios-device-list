
'use strict';

const fs = require('fs');
const path = require('path');

const apple_tv = require('./apple_tv.json');
const apple_watch = require('./apple_watch.json');
const ipad = require('./ipad.json');
const ipad_mini = require('./ipad_mini.json');
const iphone = require('./iphone.json');
const ipod_touch = require('./ipod_touch.json');

const DEVICES_OUTPUT_FILE = path.join( __dirname, 'devices.json');


let devices;

function addDevice(d) {
  if (typeof d.Identifier === 'string') {
    devices.push({
      name: d.Generation,
      model: d.Identifier,
      ANumber: d.ANumber,
      FCCID: d.FCCID
    });
  }
  if (Array.isArray(d.Identifier)) {
    d.Identifier.forEach(di => {
      devices.push({
        name: d.Generation,
        model: di,
        ANumber: d.ANumber,
        FCCID: d.FCCID
      });
    });
  }
}

function build() {
  apple_tv.forEach(addDevice);
  apple_watch.forEach(addDevice);
  ipad.forEach(addDevice);
  ipad_mini.forEach(addDevice);
  iphone.forEach(addDevice);
  ipod_touch.forEach(addDevice);
}

function write() {
  fs.writeFile( DEVICES_OUTPUT_FILE, JSON.stringify( devices, null, 2 ), err => {
    if ( err ) {
      throw err;
    }
    console.log( 'Devices list saved to ' + DEVICES_OUTPUT_FILE );
    console.log( 'Total ' + devices.length + ' records' );
  });
}

devices = [];
build();
write();
