define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/getflutter/components/appbar/gf_appbar', 'packages/tedx/draw_circle', 'packages/flutter/material', 'packages/fluid_layout/fluid_layout', 'packages/flutter/src/rendering/animated_size', 'packages/getflutter/shape/gf_button_shape'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__getflutter__components__appbar__gf_appbar, packages__tedx__draw_circle, packages__flutter__material, packages__fluid_layout__fluid_layout, packages__flutter__src__rendering__animated_size, packages__getflutter__shape__gf_button_shape) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const gf_button = packages__getflutter__components__appbar__gf_appbar.components__button__gf_button;
  const draw_circle = packages__tedx__draw_circle.draw_circle;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const icons = packages__flutter__material.src__material__icons;
  const fluid_layout = packages__fluid_layout__fluid_layout.src__fluid_layout;
  const fluid_container = packages__fluid_layout__fluid_layout.src__fluid_container;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const gf_button_shape = packages__getflutter__shape__gf_button_shape.shape__gf_button_shape;
  const landing_page = Object.create(dart.library);
  const $_get = dartx._get;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfIcon = () => (JSArrayOfIcon = dart.constFn(_interceptors.JSArray$(icon.Icon)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 18,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 5,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 5,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 5,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 20,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 16,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 22,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 16,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 40,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 16,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 31,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 16,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 28,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    }
  });
  landing_page.LandingPage = class LandingPage extends framework.StatefulWidget {
    createState() {
      return new landing_page.LandingPageState.new();
    }
  };
  (landing_page.LandingPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    landing_page.LandingPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = landing_page.LandingPage.prototype;
  dart.addTypeTests(landing_page.LandingPage);
  dart.setMethodSignature(landing_page.LandingPage, () => ({
    __proto__: dart.getMethods(landing_page.LandingPage.__proto__),
    createState: dart.fnType(landing_page.LandingPageState, [])
  }));
  dart.setLibraryUri(landing_page.LandingPage, "package:tedx/landing_page.dart");
  const _tedxLogo = dart.privateName(landing_page, "_tedxLogo");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  const _officialLogo = dart.privateName(landing_page, "_officialLogo");
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  const _navigationButtons = dart.privateName(landing_page, "_navigationButtons");
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C17;
  let C16;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C44;
  let C43;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C59;
  let C58;
  let C63;
  let C62;
  let C61;
  let C66;
  let C65;
  let C64;
  let C69;
  let C68;
  let C67;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C71;
  let C70;
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  let C87;
  let C86;
  let C85;
  let C90;
  let C89;
  let C88;
  let C93;
  let C92;
  let C91;
  let C96;
  let C95;
  let C94;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C98;
  let C97;
  let C109;
  let C110;
  let C111;
  let C108;
  let C107;
  const _renderLandingPage = dart.privateName(landing_page, "_renderLandingPage");
  const _renderTopRow = dart.privateName(landing_page, "_renderTopRow");
  const _renderButtonRow = dart.privateName(landing_page, "_renderButtonRow");
  let C114;
  let C113;
  let C112;
  let C117;
  let C116;
  let C115;
  let C120;
  let C119;
  let C118;
  let C123;
  let C122;
  let C121;
  let C126;
  let C127;
  let C125;
  let C124;
  let C130;
  let C129;
  let C128;
  let C133;
  let C134;
  let C132;
  let C131;
  let C137;
  let C136;
  let C135;
  let C140;
  let C141;
  let C139;
  let C138;
  let C144;
  let C145;
  let C143;
  let C142;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C153;
  let C151;
  let C150;
  landing_page.LandingPageState = class LandingPageState extends framework.State$(framework.StatefulWidget) {
    build(context) {
      return this[_renderLandingPage]();
    }
    [_renderLandingPage]() {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.black, body: new container.Container.new({child: new fluid_layout.FluidLayout.new({child: new fluid_container.Fluid.new({child: new basic.Column.new({children: JSArrayOfWidget().of([this[_renderTopRow](), this[_renderButtonRow]()]), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124});
    }
    [_renderTopRow]() {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([this[_officialLogo], this[_tedxLogo], new container.Container.new({width: 800.0, $creationLocationd_0dea112b090073317d4: C128 || CT.C128})]), $creationLocationd_0dea112b090073317d4: C131 || CT.C131});
    }
    [_renderButtonRow]() {
      return new basic.Row.new({children: this[_navigationButtons], $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
    }
  };
  (landing_page.LandingPageState.new = function() {
    this[_tedxLogo] = new container.Container.new({width: 400.0, height: 400.0, child: new image.Image.new({image: new image_resolution.AssetImage.new("lib/assets/ted_x_logo.png"), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    this[_officialLogo] = new container.Container.new({width: 800.0, height: 200.0, child: new image.Image.new({image: new image_resolution.AssetImage.new("lib/assets/official_logo_vertical.png"), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    this[_navigationButtons] = JSArrayOfWidget().of([new container.Container.new({width: landing_page.LandingPageState._buttonWidth, height: landing_page.LandingPageState._buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), color: landing_page.LandingPageState._buttonColor, hoverColor: landing_page.LandingPageState._buttonHoverColor, highlightColor: landing_page.LandingPageState._buttonHighlightColor, text: landing_page.LandingPageState._buttonText[$_get](0), icon: landing_page.LandingPageState._buttonIcons[$_get](0), textStyle: landing_page.LandingPageState._buttonStyle, shape: landing_page.LandingPageState._buttonShape, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new basic.SizedBox.new({width: landing_page.LandingPageState._buttonSeparation, $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new container.Container.new({child: new basic.CustomPaint.new({painter: new draw_circle.DrawCircle.new(), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new basic.SizedBox.new({width: landing_page.LandingPageState._buttonSeparation, $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new container.Container.new({width: landing_page.LandingPageState._buttonWidth, height: landing_page.LandingPageState._buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), color: landing_page.LandingPageState._buttonColor, hoverColor: landing_page.LandingPageState._buttonHoverColor, highlightColor: landing_page.LandingPageState._buttonHighlightColor, text: landing_page.LandingPageState._buttonText[$_get](1), icon: landing_page.LandingPageState._buttonIcons[$_get](1), textStyle: landing_page.LandingPageState._buttonStyle, shape: landing_page.LandingPageState._buttonShape, $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new basic.SizedBox.new({width: landing_page.LandingPageState._buttonSeparation, $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new container.Container.new({child: new basic.CustomPaint.new({painter: new draw_circle.DrawCircle.new(), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new basic.SizedBox.new({width: landing_page.LandingPageState._buttonSeparation, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new container.Container.new({width: landing_page.LandingPageState._buttonWidth, height: landing_page.LandingPageState._buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), color: landing_page.LandingPageState._buttonColor, hoverColor: landing_page.LandingPageState._buttonHoverColor, highlightColor: landing_page.LandingPageState._buttonHighlightColor, text: landing_page.LandingPageState._buttonText[$_get](2), icon: landing_page.LandingPageState._buttonIcons[$_get](2), textStyle: landing_page.LandingPageState._buttonStyle, shape: landing_page.LandingPageState._buttonShape, $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), new basic.SizedBox.new({width: landing_page.LandingPageState._buttonSeparation, $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new container.Container.new({child: new basic.CustomPaint.new({painter: new draw_circle.DrawCircle.new(), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), new basic.SizedBox.new({width: landing_page.LandingPageState._buttonSeparation, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), new container.Container.new({width: landing_page.LandingPageState._buttonWidth, height: landing_page.LandingPageState._buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), color: landing_page.LandingPageState._buttonColor, hoverColor: landing_page.LandingPageState._buttonHoverColor, highlightColor: landing_page.LandingPageState._buttonHighlightColor, text: landing_page.LandingPageState._buttonText[$_get](3), icon: landing_page.LandingPageState._buttonIcons[$_get](3), textStyle: landing_page.LandingPageState._buttonStyle, shape: landing_page.LandingPageState._buttonShape, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107})]);
    landing_page.LandingPageState.__proto__.new.call(this);
    ;
  }).prototype = landing_page.LandingPageState.prototype;
  dart.addTypeTests(landing_page.LandingPageState);
  dart.setMethodSignature(landing_page.LandingPageState, () => ({
    __proto__: dart.getMethods(landing_page.LandingPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_renderLandingPage]: dart.fnType(framework.Widget, []),
    [_renderTopRow]: dart.fnType(framework.Widget, []),
    [_renderButtonRow]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(landing_page.LandingPageState, "package:tedx/landing_page.dart");
  dart.setFieldSignature(landing_page.LandingPageState, () => ({
    __proto__: dart.getFields(landing_page.LandingPageState.__proto__),
    [_tedxLogo]: dart.fieldType(framework.Widget),
    [_officialLogo]: dart.fieldType(framework.Widget),
    [_navigationButtons]: dart.fieldType(core.List$(framework.Widget))
  }));
  dart.defineLazy(landing_page.LandingPageState, {
    /*landing_page.LandingPageState._buttonWidth*/get _buttonWidth() {
      return 180.0;
    },
    set _buttonWidth(_) {},
    /*landing_page.LandingPageState._buttonHeight*/get _buttonHeight() {
      return 65.0;
    },
    set _buttonHeight(_) {},
    /*landing_page.LandingPageState._buttonSeparation*/get _buttonSeparation() {
      return 50.0;
    },
    set _buttonSeparation(_) {},
    /*landing_page.LandingPageState._buttonFontSize*/get _buttonFontSize() {
      return 28.0;
    },
    set _buttonFontSize(_) {},
    /*landing_page.LandingPageState._iconSize*/get _iconSize() {
      return 36.0;
    },
    set _iconSize(_) {},
    /*landing_page.LandingPageState._buttonShape*/get _buttonShape() {
      return gf_button_shape.GFButtonShape.pills;
    },
    set _buttonShape(_) {},
    /*landing_page.LandingPageState._buttonStyle*/get _buttonStyle() {
      return new text_style.TextStyle.new({fontSize: landing_page.LandingPageState._buttonFontSize, color: colors.Colors.black});
    },
    set _buttonStyle(_) {},
    /*landing_page.LandingPageState._buttonColor*/get _buttonColor() {
      return colors.Colors.redAccent;
    },
    set _buttonColor(_) {},
    /*landing_page.LandingPageState._buttonHoverColor*/get _buttonHoverColor() {
      return colors.Colors.red;
    },
    set _buttonHoverColor(_) {},
    /*landing_page.LandingPageState._buttonHighlightColor*/get _buttonHighlightColor() {
      return colors.Colors.deepOrange;
    },
    set _buttonHighlightColor(_) {},
    /*landing_page.LandingPageState._buttonText*/get _buttonText() {
      return JSArrayOfString().of(["About", "Team", "Catalog", "Tickets"]);
    },
    set _buttonText(_) {},
    /*landing_page.LandingPageState._buttonIcons*/get _buttonIcons() {
      return JSArrayOfIcon().of([new icon.Icon.new(icons.Icons.help, {size: landing_page.LandingPageState._iconSize, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), new icon.Icon.new(icons.Icons.supervised_user_circle, {size: landing_page.LandingPageState._iconSize, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), new icon.Icon.new(icons.Icons.local_library, {size: landing_page.LandingPageState._iconSize, $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), new icon.Icon.new(icons.Icons.local_play, {size: landing_page.LandingPageState._iconSize, $creationLocationd_0dea112b090073317d4: C150 || CT.C150})]);
    },
    set _buttonIcons(_) {}
  });
  dart.trackLibraries("packages/tedx/landing_page", {
    "package:tedx/landing_page.dart": landing_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["landing_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAyI4B;AACxB,YAAQ;IACV;;AAGE,YAAO,6CACmB,2BAClB,oCACG,yCACE,sCACE,gCACa,sBAChB,uBACA;IAOd;;AAGE,YAAO,uCACgC,+CACnB,sBACZ,qBACA,iBACA,oCACS;IAInB;;AAGE,YAAO,8BACK;IAEd;;;IA3KO,kBAAY,oCACV,eACC,cACD,4BAAa,oCAAW;IAE1B,sBAAgB,oCACZ,eACC,cACD,4BAAa,oCAAW;IAyB/B,2BAAqB,sBACvB,oCACS,oDACC,oDACD,uCACM;mCAEJ,wDACK,iEACI,2DAEV,AAAW,iDAAC,UACZ,AAAY,kDAAC,eAER,mDACJ,8JAGX,+BACS,0GAET,oCACS,oCAAqB,oJAE9B,+BACS,0GAET,oCACS,oDACC,oDACD,uCACM;mCAEJ,wDACK,iEACI,2DAEV,AAAW,iDAAC,UACZ,AAAY,kDAAC,eAER,mDACJ,8JAGX,+BACS,0GAET,oCACS,oCAAqB,oJAE9B,+BACS,0GAET,oCACS,oDACC,oDACD,uCACM;mCAEJ,wDACK,iEACI,2DAEV,AAAW,iDAAC,UACZ,AAAY,kDAAC,eAER,mDACJ,8JAGX,+BACS,0GAET,oCACS,oCAAqB,oJAE9B,+BACS,0GAET,oCACS,oDACC,oDACD,uCACM;mCAEJ,wDACK,iEACI,2DAEV,AAAW,iDAAC,UACZ,AAAY,kDAAC,eAER,mDACJ;;;EA8Cf;;;;;;;;;;;;;;;;;MAjKgB,0CAAY;YAAG;;;MACf,2CAAa;YAAG;;;MAChB,+CAAiB;YAAG;;;MACpB,6CAAe;YAAG;;;MAClB,uCAAS;YAAG;;;MAEL,0CAAY;YAAiB;;;MAEjC,0CAAY;YAAG,yCAAoB,sDAA+B;;;MAEtE,0CAAY;YAAU;;;MACtB,+CAAiB;YAAU;;;MAC3B,mDAAqB;YAAU;;;MAEjC,yCAAW;YAAG,uBAAC,SAAS,QAAQ,WAAW;;;MAC3C,0CAAY;YAAG,qBACxB,kBAAW,yBAAY,oGACvB,kBAAW,2CAA8B,oGACzC,kBAAW,kCAAqB,oGAChC,kBAAW,+BAAkB","file":"landing_page.ddc.js"}');
  // Exports:
  return {
    landing_page: landing_page
  };
});

//# sourceMappingURL=landing_page.ddc.js.map
