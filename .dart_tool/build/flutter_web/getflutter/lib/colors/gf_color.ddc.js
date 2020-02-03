define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gf_color = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.primary",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.secondary",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.success",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.info",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.warning",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.danger",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.focus",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.alt",
        index: 7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.light",
        index: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.dark",
        index: 9
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.white",
        index: 10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$]: "GFColor.transparent",
        index: 11
      });
    },
    get C12() {
      return C12 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], gf_color.GFColor);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281893119.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289357516.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279295072.0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281578981.0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294949683.0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293935425.0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292927712.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280427560.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282597460.0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286139530.0
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    }
  });
  const _name$ = dart.privateName(gf_color, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  gf_color.GFColor = class GFColor extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_color.GFColor.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_color.GFColor.prototype;
  dart.addTypeTests(gf_color.GFColor);
  dart.setLibraryUri(gf_color.GFColor, "package:getflutter/colors/gf_color.dart");
  dart.setFieldSignature(gf_color.GFColor, () => ({
    __proto__: dart.getFields(gf_color.GFColor.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_color.GFColor, ['toString']);
  gf_color.GFColor.primary = C0 || CT.C0;
  gf_color.GFColor.secondary = C1 || CT.C1;
  gf_color.GFColor.success = C2 || CT.C2;
  gf_color.GFColor.info = C3 || CT.C3;
  gf_color.GFColor.warning = C4 || CT.C4;
  gf_color.GFColor.danger = C5 || CT.C5;
  gf_color.GFColor.focus = C6 || CT.C6;
  gf_color.GFColor.alt = C7 || CT.C7;
  gf_color.GFColor.light = C8 || CT.C8;
  gf_color.GFColor.dark = C9 || CT.C9;
  gf_color.GFColor.white = C10 || CT.C10;
  gf_color.GFColor.transparent = C11 || CT.C11;
  gf_color.GFColor.values = C12 || CT.C12;
  const Color_value = dart.privateName(ui, "Color.value");
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  gf_color.GFColors = class GFColors extends core.Object {
    static getGFColor(color) {
      if (ui.Color.is(color)) {
        return color;
      } else {
        switch (color) {
          case C0 || CT.C0:
          {
            return gf_color.GFColors.PRIMARY;
            break;
          }
          case C1 || CT.C1:
          {
            return gf_color.GFColors.SECONDARY;
            break;
          }
          case C2 || CT.C2:
          {
            return gf_color.GFColors.SUCCESS;
            break;
          }
          case C4 || CT.C4:
          {
            return gf_color.GFColors.WARNING;
            break;
          }
          case C3 || CT.C3:
          {
            return gf_color.GFColors.INFO;
            break;
          }
          case C5 || CT.C5:
          {
            return gf_color.GFColors.DANGER;
            break;
          }
          case C6 || CT.C6:
          {
            return gf_color.GFColors.FOCUS;
            break;
          }
          case C7 || CT.C7:
          {
            return gf_color.GFColors.ALT;
            break;
          }
          case C8 || CT.C8:
          {
            return gf_color.GFColors.LIGHT;
            break;
          }
          case C9 || CT.C9:
          {
            return gf_color.GFColors.DARK;
            break;
          }
          case C10 || CT.C10:
          {
            return gf_color.GFColors.WHITE;
            break;
          }
          case C11 || CT.C11:
          {
            return gf_color.GFColors.TRANSPARENT;
            break;
          }
          default:
          {
            return null;
            break;
          }
        }
      }
    }
  };
  (gf_color.GFColors.new = function() {
    ;
  }).prototype = gf_color.GFColors.prototype;
  dart.addTypeTests(gf_color.GFColors);
  dart.setLibraryUri(gf_color.GFColors, "package:getflutter/colors/gf_color.dart");
  dart.defineLazy(gf_color.GFColors, {
    /*gf_color.GFColors.PRIMARY*/get PRIMARY() {
      return C13 || CT.C13;
    },
    /*gf_color.GFColors.SECONDARY*/get SECONDARY() {
      return C14 || CT.C14;
    },
    /*gf_color.GFColors.SUCCESS*/get SUCCESS() {
      return C15 || CT.C15;
    },
    /*gf_color.GFColors.INFO*/get INFO() {
      return C16 || CT.C16;
    },
    /*gf_color.GFColors.WARNING*/get WARNING() {
      return C17 || CT.C17;
    },
    /*gf_color.GFColors.DANGER*/get DANGER() {
      return C18 || CT.C18;
    },
    /*gf_color.GFColors.LIGHT*/get LIGHT() {
      return C19 || CT.C19;
    },
    /*gf_color.GFColors.DARK*/get DARK() {
      return C20 || CT.C20;
    },
    /*gf_color.GFColors.WHITE*/get WHITE() {
      return C21 || CT.C21;
    },
    /*gf_color.GFColors.FOCUS*/get FOCUS() {
      return C22 || CT.C22;
    },
    /*gf_color.GFColors.ALT*/get ALT() {
      return C23 || CT.C23;
    },
    /*gf_color.GFColors.TRANSPARENT*/get TRANSPARENT() {
      return C24 || CT.C24;
    }
  });
  dart.trackLibraries("packages/getflutter/colors/gf_color", {
    "package:getflutter/colors/gf_color.dart": gf_color
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAeA;;0CAbK;;;;EAaL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAiBkC;AAC9B,UAAU,YAAN,KAAK;AACP,cAAO,MAAK;;AAEZ,gBAAQ,KAAK;;;AAET,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;AAEA,kBAAO;AACP;;;;IAGR;;;;EACF;;;;MA7DqB,yBAAO;;;MACP,2BAAS;;;MACT,yBAAO;;;MACP,sBAAI;;;MACJ,yBAAO;;;MACP,wBAAM;;;MACN,uBAAK;;;MACL,sBAAI;;;MACJ,uBAAK;;;MACL,uBAAK;;;MACL,qBAAG;;;MACH,6BAAW","file":"gf_color.ddc.js"}');
  // Exports:
  return {
    colors__gf_color: gf_color
  };
});

//# sourceMappingURL=gf_color.ddc.js.map
