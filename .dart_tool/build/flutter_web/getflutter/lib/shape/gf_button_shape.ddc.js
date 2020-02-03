define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_button_shape = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_button_shape.GFButtonShape.prototype,
        [_name$]: "GFButtonShape.pills",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_button_shape.GFButtonShape.prototype,
        [_name$]: "GFButtonShape.standard",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_button_shape.GFButtonShape.prototype,
        [_name$]: "GFButtonShape.square",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], gf_button_shape.GFButtonShape);
    }
  });
  const _name$ = dart.privateName(gf_button_shape, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  gf_button_shape.GFButtonShape = class GFButtonShape extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_button_shape.GFButtonShape.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_button_shape.GFButtonShape.prototype;
  dart.addTypeTests(gf_button_shape.GFButtonShape);
  dart.setLibraryUri(gf_button_shape.GFButtonShape, "package:getflutter/shape/gf_button_shape.dart");
  dart.setFieldSignature(gf_button_shape.GFButtonShape, () => ({
    __proto__: dart.getFields(gf_button_shape.GFButtonShape.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_button_shape.GFButtonShape, ['toString']);
  gf_button_shape.GFButtonShape.pills = C0 || CT.C0;
  gf_button_shape.GFButtonShape.standard = C1 || CT.C1;
  gf_button_shape.GFButtonShape.square = C2 || CT.C2;
  gf_button_shape.GFButtonShape.values = C3 || CT.C3;
  dart.trackLibraries("packages/getflutter/shape/gf_button_shape", {
    "package:getflutter/shape/gf_button_shape.dart": gf_button_shape
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_button_shape.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUA;;uDATK;;;;EASL","file":"gf_button_shape.ddc.js"}');
  // Exports:
  return {
    shape__gf_button_shape: gf_button_shape
  };
});

//# sourceMappingURL=gf_button_shape.ddc.js.map
