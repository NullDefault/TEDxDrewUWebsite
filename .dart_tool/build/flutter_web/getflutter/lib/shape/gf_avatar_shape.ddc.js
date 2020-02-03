define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_avatar_shape = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_avatar_shape.GFAvatarShape.prototype,
        [_name$]: "GFAvatarShape.circle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_avatar_shape.GFAvatarShape.prototype,
        [_name$]: "GFAvatarShape.standard",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_avatar_shape.GFAvatarShape.prototype,
        [_name$]: "GFAvatarShape.square",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], gf_avatar_shape.GFAvatarShape);
    }
  });
  const _name$ = dart.privateName(gf_avatar_shape, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  gf_avatar_shape.GFAvatarShape = class GFAvatarShape extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_avatar_shape.GFAvatarShape.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_avatar_shape.GFAvatarShape.prototype;
  dart.addTypeTests(gf_avatar_shape.GFAvatarShape);
  dart.setLibraryUri(gf_avatar_shape.GFAvatarShape, "package:getflutter/shape/gf_avatar_shape.dart");
  dart.setFieldSignature(gf_avatar_shape.GFAvatarShape, () => ({
    __proto__: dart.getFields(gf_avatar_shape.GFAvatarShape.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_avatar_shape.GFAvatarShape, ['toString']);
  gf_avatar_shape.GFAvatarShape.circle = C0 || CT.C0;
  gf_avatar_shape.GFAvatarShape.standard = C1 || CT.C1;
  gf_avatar_shape.GFAvatarShape.square = C2 || CT.C2;
  gf_avatar_shape.GFAvatarShape.values = C3 || CT.C3;
  dart.trackLibraries("packages/getflutter/shape/gf_avatar_shape", {
    "package:getflutter/shape/gf_avatar_shape.dart": gf_avatar_shape
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_avatar_shape.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUA;;uDATK;;;;EASL","file":"gf_avatar_shape.ddc.js"}');
  // Exports:
  return {
    shape__gf_avatar_shape: gf_avatar_shape
  };
});

//# sourceMappingURL=gf_avatar_shape.ddc.js.map
