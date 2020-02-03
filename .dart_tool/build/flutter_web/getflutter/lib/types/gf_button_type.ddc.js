define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_button_type = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_button_type.GFButtonType.prototype,
        [_name$]: "GFButtonType.solid",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_button_type.GFButtonType.prototype,
        [_name$]: "GFButtonType.outline",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_button_type.GFButtonType.prototype,
        [_name$]: "GFButtonType.outline2x",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gf_button_type.GFButtonType.prototype,
        [_name$]: "GFButtonType.transparent",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], gf_button_type.GFButtonType);
    }
  });
  const _name$ = dart.privateName(gf_button_type, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  gf_button_type.GFButtonType = class GFButtonType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_button_type.GFButtonType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_button_type.GFButtonType.prototype;
  dart.addTypeTests(gf_button_type.GFButtonType);
  dart.setLibraryUri(gf_button_type.GFButtonType, "package:getflutter/types/gf_button_type.dart");
  dart.setFieldSignature(gf_button_type.GFButtonType, () => ({
    __proto__: dart.getFields(gf_button_type.GFButtonType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_button_type.GFButtonType, ['toString']);
  gf_button_type.GFButtonType.solid = C0 || CT.C0;
  gf_button_type.GFButtonType.outline = C1 || CT.C1;
  gf_button_type.GFButtonType.outline2x = C2 || CT.C2;
  gf_button_type.GFButtonType.transparent = C3 || CT.C3;
  gf_button_type.GFButtonType.values = C4 || CT.C4;
  dart.trackLibraries("packages/getflutter/types/gf_button_type", {
    "package:getflutter/types/gf_button_type.dart": gf_button_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_button_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaA;;qDAZK;;;;EAYL","file":"gf_button_type.ddc.js"}');
  // Exports:
  return {
    types__gf_button_type: gf_button_type
  };
});

//# sourceMappingURL=gf_button_type.ddc.js.map
