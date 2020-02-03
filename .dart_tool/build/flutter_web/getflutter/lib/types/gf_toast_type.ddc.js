define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_toast_type = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_toast_type.GFToastType.prototype,
        [_name$]: "GFToastType.basic",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_toast_type.GFToastType.prototype,
        [_name$]: "GFToastType.rounded",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_toast_type.GFToastType.prototype,
        [_name$]: "GFToastType.fullWidth",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], gf_toast_type.GFToastType);
    }
  });
  const _name$ = dart.privateName(gf_toast_type, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  gf_toast_type.GFToastType = class GFToastType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_toast_type.GFToastType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_toast_type.GFToastType.prototype;
  dart.addTypeTests(gf_toast_type.GFToastType);
  dart.setLibraryUri(gf_toast_type.GFToastType, "package:getflutter/types/gf_toast_type.dart");
  dart.setFieldSignature(gf_toast_type.GFToastType, () => ({
    __proto__: dart.getFields(gf_toast_type.GFToastType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_toast_type.GFToastType, ['toString']);
  gf_toast_type.GFToastType.basic = C0 || CT.C0;
  gf_toast_type.GFToastType.rounded = C1 || CT.C1;
  gf_toast_type.GFToastType.fullWidth = C2 || CT.C2;
  gf_toast_type.GFToastType.values = C3 || CT.C3;
  dart.trackLibraries("packages/getflutter/types/gf_toast_type", {
    "package:getflutter/types/gf_toast_type.dart": gf_toast_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_toast_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAA6C;;mDAAxC;;;;EAAwC","file":"gf_toast_type.ddc.js"}');
  // Exports:
  return {
    types__gf_toast_type: gf_toast_type
  };
});

//# sourceMappingURL=gf_toast_type.ddc.js.map
