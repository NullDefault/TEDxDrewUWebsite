define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_toggle_type = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_toggle_type.GFToggleType.prototype,
        [_name$]: "GFToggleType.android",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_toggle_type.GFToggleType.prototype,
        [_name$]: "GFToggleType.custom",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_toggle_type.GFToggleType.prototype,
        [_name$]: "GFToggleType.ios",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gf_toggle_type.GFToggleType.prototype,
        [_name$]: "GFToggleType.square",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], gf_toggle_type.GFToggleType);
    }
  });
  const _name$ = dart.privateName(gf_toggle_type, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  gf_toggle_type.GFToggleType = class GFToggleType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_toggle_type.GFToggleType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_toggle_type.GFToggleType.prototype;
  dart.addTypeTests(gf_toggle_type.GFToggleType);
  dart.setLibraryUri(gf_toggle_type.GFToggleType, "package:getflutter/types/gf_toggle_type.dart");
  dart.setFieldSignature(gf_toggle_type.GFToggleType, () => ({
    __proto__: dart.getFields(gf_toggle_type.GFToggleType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_toggle_type.GFToggleType, ['toString']);
  gf_toggle_type.GFToggleType.android = C0 || CT.C0;
  gf_toggle_type.GFToggleType.custom = C1 || CT.C1;
  gf_toggle_type.GFToggleType.ios = C2 || CT.C2;
  gf_toggle_type.GFToggleType.square = C3 || CT.C3;
  gf_toggle_type.GFToggleType.values = C4 || CT.C4;
  dart.trackLibraries("packages/getflutter/types/gf_toggle_type", {
    "package:getflutter/types/gf_toggle_type.dart": gf_toggle_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_toggle_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaA;;qDAZK;;;;EAYL","file":"gf_toggle_type.ddc.js"}');
  // Exports:
  return {
    types__gf_toggle_type: gf_toggle_type
  };
});

//# sourceMappingURL=gf_toggle_type.ddc.js.map
