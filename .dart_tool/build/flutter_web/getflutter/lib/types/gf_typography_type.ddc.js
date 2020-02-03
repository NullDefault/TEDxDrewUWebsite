define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_typography_type = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo1",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo2",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo3",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo4",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo5",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo6",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], gf_typography_type.GFTypographyType);
    }
  });
  const _name$ = dart.privateName(gf_typography_type, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  gf_typography_type.GFTypographyType = class GFTypographyType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_typography_type.GFTypographyType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_typography_type.GFTypographyType.prototype;
  dart.addTypeTests(gf_typography_type.GFTypographyType);
  dart.setLibraryUri(gf_typography_type.GFTypographyType, "package:getflutter/types/gf_typography_type.dart");
  dart.setFieldSignature(gf_typography_type.GFTypographyType, () => ({
    __proto__: dart.getFields(gf_typography_type.GFTypographyType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_typography_type.GFTypographyType, ['toString']);
  gf_typography_type.GFTypographyType.typo1 = C0 || CT.C0;
  gf_typography_type.GFTypographyType.typo2 = C1 || CT.C1;
  gf_typography_type.GFTypographyType.typo3 = C2 || CT.C2;
  gf_typography_type.GFTypographyType.typo4 = C3 || CT.C3;
  gf_typography_type.GFTypographyType.typo5 = C4 || CT.C4;
  gf_typography_type.GFTypographyType.typo6 = C5 || CT.C5;
  gf_typography_type.GFTypographyType.values = C6 || CT.C6;
  dart.trackLibraries("packages/getflutter/types/gf_typography_type", {
    "package:getflutter/types/gf_typography_type.dart": gf_typography_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_typography_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmBA;;6DAlBK;;;;EAkBL","file":"gf_typography_type.ddc.js"}');
  // Exports:
  return {
    types__gf_typography_type: gf_typography_type
  };
});

//# sourceMappingURL=gf_typography_type.ddc.js.map
