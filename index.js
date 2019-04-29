'use strict';

const uniq = require('lodash.uniq');
const cloneDeep = require('lodash.clonedeep');
const flatten = require('lodash.flatten');

const airpods = require('./airpods.json');
const apple_tv = require('./apple_tv.json');
const apple_watch = require('./apple_watch.json');
const homepod = require('./homepod.json');
const ipad = require('./ipad.json');
const ipad_mini = require('./ipad_mini.json');
const iphone = require('./iphone.json');
const ipod_touch = require('./ipod_touch.json');

const all = (() => {
  let l = [];

  let total = [].concat(
    airpods.map(v => { v.Type = 'airpods'; return v; }),
    apple_tv.map(v => { v.Type = 'apple_tv'; return v; }),
    apple_watch.map(v => { v.Type = 'apple_watch'; return v; }),
    homepod.map(v => { v.Type = 'homepod'; return v; }),
    ipad.map(v => { v.Type = 'ipad'; return v; }),
    ipad_mini.map(v => { v.Type = 'ipad_mini'; return v; }),
    iphone.map(v => { v.Type = 'iphone'; return v; }),
    ipod_touch.map(v => { v.Type = 'ipod_touch'; return v; })
  );

  total.forEach(v => {
    v.Models.forEach(m => {
      m.Model.forEach(mid => {
        let item = {
          Type: v.Type,
          Generation: v.Generation,
          ANumber: v.ANumber,
          Bootrom: v.Bootrom,
          Variant: v.Variant,
          FCCID: v.FCCID,
          InternalName: v.InternalName,
          Identifier: v.Identifier,
          Color: m.Color,
          Storage: m.Storage,
          Model: mid
        };
        if (m.CaseMaterial) {
          item.CaseMaterial = m.CaseMaterial;
        }
        l.push(item);
      });
    });
  });

  return l;
})();

function deviceTypes() {
  return 'airpods,apple_tv,apple_watch,homepod,ipad,ipad_mini,iphone,ipod_touch'.split(',');
}

function devices(type) {
  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    return cloneDeep(all.filter(d => d.Type === type));
  }
  return cloneDeep(all);
}

function generations(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(list.map(v => v.Generation));
}

function anumbers(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(flatten(list.map(v => v.ANumber))).sort();
}

function fccids(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(flatten(list.map(v => v.FCCID))).sort();
}

function internalNames(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(flatten(list.map(v => v.InternalName))).sort();
}

function identifiers(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(list.map(v => v.Identifier)).sort();
}

function colors(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(list.map(v => v.Color)).sort();
}

function storages(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(list.map(v => v.Storage)).sort();
}

function models(type) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return uniq(list.map(v => v.Model)).sort();
}

function deviceByGeneration(generation, type, options) {
  if (typeof generation !== 'string') {
    throw new TypeError('`generation` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(generation, 'Generation', type, caseInsensitive, contains);
}

function deviceByANumber(anumber, type, options) {
  if (typeof anumber !== 'string') {
    throw new TypeError('`anumber` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(anumber, 'ANumber', type, caseInsensitive, contains, true);
}

function deviceByFCCID(fccid, type, options) {
  if (typeof fccid !== 'string') {
    throw new TypeError('`fccid` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(fccid, 'FCCID', type, caseInsensitive, contains, true);
}

function deviceByInternalName(name, type, options) {
  if (typeof name !== 'string') {
    throw new TypeError('`name` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(name, 'InternalName', type, caseInsensitive, contains, true);
}

function deviceByIdentifier(id, type, options) {
  if (typeof id !== 'string') {
    throw new TypeError('`id` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(id, 'Identifier', type, caseInsensitive, contains, true);
}

function deviceByColor(color, type, options) {
  if (typeof color !== 'string') {
    throw new TypeError('`color` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(color, 'Color', type, caseInsensitive, contains);
}

function deviceByStorage(storage, type, options) {
  if (typeof storage !== 'string') {
    throw new TypeError('`storage` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(storage, 'Storage', type, caseInsensitive, contains);
}

function deviceByModel(model, type, options) {
  if (typeof model !== 'string') {
    throw new TypeError('`model` parameter must be a string');
  }

  options = options || {};
  let caseInsensitive = !!options.caseInsensitive;
  let contains = !!options.contains;

  return deviceByFilter(model, 'Model', type, caseInsensitive, contains);
}

function deviceByFilter(find, field, type, caseInsensitive, contains, findInArray) {
  let list;

  if (type) {
    if (deviceTypes().indexOf(type) === -1) {
      throw new TypeError('Invalid type parameter');
    }
    list = all.filter(d => d.Type === type);
  } else {
    list = all;
  }

  return list.filter(device => {
    if (!device[field]) {
      return false;
    }

    let match = false;

    if (typeof device[field] === 'string') {
      match = device[field] === find ||
        contains && device[field].indexOf(find) !== -1 ||
        caseInsensitive && device[field].toLowerCase() === find.toLowerCase() ||
        caseInsensitive && contains && device[field].toLowerCase().indexOf(find.toLowerCase()) !== -1;
    }

    if (!findInArray) {
      return match;
    }

    if (match === true) {
      return true;
    }

    if (findInArray && !Array.isArray(device[field])) {
      return false;
    }

    let arrMatch = false;

    device[field].forEach(current => {
      arrMatch = arrMatch ||
        current === find ||
        contains && current.indexOf(find) !== -1 ||
        caseInsensitive && current.toLowerCase() === find.toLowerCase() ||
        caseInsensitive && contains && current.toLowerCase().indexOf(find.toLowerCase()) !== -1;
    });

    return arrMatch;
  });

}

function generationByIdentifier(id, type) {
  if (typeof id !== 'string') {
    throw new TypeError('`id` parameter must be a string');
  }

  let devices = deviceByFilter(id, 'Identifier', type, false, false, true);

  if (devices.length === 0) {
    return;
  }

  return devices[0].Generation;
}



module.exports = {
  deviceTypes, devices,
  generations, anumbers, fccids, internalNames, identifiers, colors, storages, models,
  deviceByGeneration, deviceByANumber, deviceByFCCID, deviceByInternalName,
  deviceByIdentifier, deviceByColor, deviceByStorage, deviceByModel,
  generationByIdentifier
};
