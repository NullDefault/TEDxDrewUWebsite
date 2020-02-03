define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_badge_shape = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_badge_shape.GFBadgeShape.prototype,
        [_name$]: "GFBadgeShape.circle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_badge_shape.GFBadgeShape.prototype,
        [_name$]: "GFBadgeShape.pills",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_badge_shape.GFBadgeShape.prototype,
        [_name$]: "GFBadgeShape.standard",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gf_badge_shape.GFBadgeShape.prototype,
        [_name$]: "GFBadgeShape.square",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], gf_badge_shape.GFBadgeShape);
    }
  });
  const _name$ = dart.privateName(gf_badge_shape, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  gf_badge_shape.GFBadgeShape = class GFBadgeShape extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_badge_shape.GFBadgeShape.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_badge_shape.GFBadgeShape.prototype;
  dart.addTypeTests(gf_badge_shape.GFBadgeShape);
  dart.setLibraryUri(gf_badge_shape.GFBadgeShape, "package:getflutter/shape/gf_badge_shape.dart");
  dart.setFieldSignature(gf_badge_shape.GFBadgeShape, () => ({
    __proto__: dart.getFields(gf_badge_shape.GFBadgeShape.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_badge_shape.GFBadgeShape, ['toString']);
  gf_badge_shape.GFBadgeShape.circle = C0 || CT.C0;
  gf_badge_shape.GFBadgeShape.pills = C1 || CT.C1;
  gf_badge_shape.GFBadgeShape.standard = C2 || CT.C2;
  gf_badge_shape.GFBadgeShape.square = C3 || CT.C3;
  gf_badge_shape.GFBadgeShape.values = C4 || CT.C4;
  dart.trackLibraries("packages/getflutter/shape/gf_badge_shape", {
    "package:getflutter/shape/gf_badge_shape.dart": gf_badge_shape
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_badge_shape.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaA;;qDAZK;;;;EAYL","file":"gf_badge_shape.ddc.js"}');
  // Exports:
  return {
    shape__gf_badge_shape: gf_badge_shape
  };
});

//# sourceMappingURL=gf_badge_shape.ddc.js.map
