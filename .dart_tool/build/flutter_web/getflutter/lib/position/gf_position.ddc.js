define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_position = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_position.GFPosition.prototype,
        [_name$]: "GFPosition.start",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_position.GFPosition.prototype,
        [_name$]: "GFPosition.end",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], gf_position.GFPosition);
    }
  });
  const _name$ = dart.privateName(gf_position, "_name");
  let C0;
  let C1;
  let C2;
  gf_position.GFPosition = class GFPosition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_position.GFPosition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_position.GFPosition.prototype;
  dart.addTypeTests(gf_position.GFPosition);
  dart.setLibraryUri(gf_position.GFPosition, "package:getflutter/position/gf_position.dart");
  dart.setFieldSignature(gf_position.GFPosition, () => ({
    __proto__: dart.getFields(gf_position.GFPosition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_position.GFPosition, ['toString']);
  gf_position.GFPosition.start = C0 || CT.C0;
  gf_position.GFPosition.end = C1 || CT.C1;
  gf_position.GFPosition.values = C2 || CT.C2;
  dart.trackLibraries("packages/getflutter/position/gf_position", {
    "package:getflutter/position/gf_position.dart": gf_position
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_position.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQA;;gDANK;;;;EAML","file":"gf_position.ddc.js"}');
  // Exports:
  return {
    position__gf_position: gf_position
  };
});

//# sourceMappingURL=gf_position.ddc.js.map
