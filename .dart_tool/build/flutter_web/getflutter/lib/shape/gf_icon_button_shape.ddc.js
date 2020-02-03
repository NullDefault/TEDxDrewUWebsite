define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_icon_button_shape = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_icon_button_shape.GFIconButtonShape.prototype,
        [_name$]: "GFIconButtonShape.circle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_icon_button_shape.GFIconButtonShape.prototype,
        [_name$]: "GFIconButtonShape.pills",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_icon_button_shape.GFIconButtonShape.prototype,
        [_name$]: "GFIconButtonShape.standard",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gf_icon_button_shape.GFIconButtonShape.prototype,
        [_name$]: "GFIconButtonShape.square",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], gf_icon_button_shape.GFIconButtonShape);
    }
  });
  const _name$ = dart.privateName(gf_icon_button_shape, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  gf_icon_button_shape.GFIconButtonShape = class GFIconButtonShape extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_icon_button_shape.GFIconButtonShape.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_icon_button_shape.GFIconButtonShape.prototype;
  dart.addTypeTests(gf_icon_button_shape.GFIconButtonShape);
  dart.setLibraryUri(gf_icon_button_shape.GFIconButtonShape, "package:getflutter/shape/gf_icon_button_shape.dart");
  dart.setFieldSignature(gf_icon_button_shape.GFIconButtonShape, () => ({
    __proto__: dart.getFields(gf_icon_button_shape.GFIconButtonShape.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_icon_button_shape.GFIconButtonShape, ['toString']);
  gf_icon_button_shape.GFIconButtonShape.circle = C0 || CT.C0;
  gf_icon_button_shape.GFIconButtonShape.pills = C1 || CT.C1;
  gf_icon_button_shape.GFIconButtonShape.standard = C2 || CT.C2;
  gf_icon_button_shape.GFIconButtonShape.square = C3 || CT.C3;
  gf_icon_button_shape.GFIconButtonShape.values = C4 || CT.C4;
  dart.trackLibraries("packages/getflutter/shape/gf_icon_button_shape", {
    "package:getflutter/shape/gf_icon_button_shape.dart": gf_icon_button_shape
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_icon_button_shape.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaA;;gEAZK;;;;EAYL","file":"gf_icon_button_shape.ddc.js"}');
  // Exports:
  return {
    shape__gf_icon_button_shape: gf_icon_button_shape
  };
});

//# sourceMappingURL=gf_icon_button_shape.ddc.js.map
