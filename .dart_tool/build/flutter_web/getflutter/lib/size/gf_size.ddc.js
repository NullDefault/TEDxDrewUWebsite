define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_size = Object.create(dart.library);
  const $toString = dartx.toString;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_size.GFSize.prototype,
        [_name$]: "GFSize.small",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_size.GFSize.prototype,
        [_name$]: "GFSize.medium",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_size.GFSize.prototype,
        [_name$]: "GFSize.large",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], gf_size.GFSize);
    }
  });
  const _name$ = dart.privateName(gf_size, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  gf_size.GFSize = class GFSize extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_size.GFSize.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_size.GFSize.prototype;
  dart.addTypeTests(gf_size.GFSize);
  dart.setLibraryUri(gf_size.GFSize, "package:getflutter/size/gf_size.dart");
  dart.setFieldSignature(gf_size.GFSize, () => ({
    __proto__: dart.getFields(gf_size.GFSize.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_size.GFSize, ['toString']);
  gf_size.GFSize.small = C0 || CT.C0;
  gf_size.GFSize.medium = C1 || CT.C1;
  gf_size.GFSize.large = C2 || CT.C2;
  gf_size.GFSize.values = C3 || CT.C3;
  gf_size.GFSizesClass = class GFSizesClass extends core.Object {
    static getGFSize(size) {
      if (typeof size == 'number' || core.int.is(size)) {
        return core.double.parse(dart.toString(size));
      } else {
        switch (size) {
          case C0 || CT.C0:
          {
            return 30;
            break;
          }
          case C1 || CT.C1:
          {
            return 35;
            break;
          }
          case C2 || CT.C2:
          {
            return 40;
            break;
          }
          default:
          {
            return 35;
            break;
          }
        }
      }
    }
  };
  (gf_size.GFSizesClass.new = function() {
    ;
  }).prototype = gf_size.GFSizesClass.prototype;
  dart.addTypeTests(gf_size.GFSizesClass);
  dart.setLibraryUri(gf_size.GFSizesClass, "package:getflutter/size/gf_size.dart");
  dart.defineLazy(gf_size.GFSizesClass, {
    /*gf_size.GFSizesClass.SMALL*/get SMALL() {
      return 30;
    },
    /*gf_size.GFSizesClass.MEDIUM*/get MEDIUM() {
      return 35;
    },
    /*gf_size.GFSizesClass.LARGE*/get LARGE() {
      return 40;
    }
  });
  dart.trackLibraries("packages/getflutter/size/gf_size", {
    "package:getflutter/size/gf_size.dart": gf_size
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUA;;wCATK;;;;EASL;;;;;;;;;;;;;;qBAQkC;AAC9B,UAAS,OAAL,IAAI,gBAAmB,YAAL,IAAI;AACxB,cAAc,mBAAW,cAAL,IAAI;;AAExB,gBAAQ,IAAI;;;AAER;AACA;;;;AAEA;AACA;;;;AAEA;AACA;;;;AAEA;AACA;;;;IAGR;;;;EACF;;;;MAzBsB,0BAAK;;;MACL,2BAAM;;;MACN,0BAAK","file":"gf_size.ddc.js"}');
  // Exports:
  return {
    size__gf_size: gf_size
  };
});

//# sourceMappingURL=gf_size.ddc.js.map
