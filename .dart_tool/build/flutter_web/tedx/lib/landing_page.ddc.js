define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/getflutter/components/appbar/gf_appbar', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/getflutter/shape/gf_button_shape'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__getflutter__components__appbar__gf_appbar, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__getflutter__shape__gf_button_shape) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const gf_button = packages__getflutter__components__appbar__gf_appbar.components__button__gf_button;
  const colors = packages__flutter__material.src__material__colors;
  const icons = packages__flutter__material.src__material__icons;
  const app = packages__flutter__material.src__material__app;
  const material = packages__flutter__material.src__material__material;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const gf_button_shape = packages__getflutter__shape__gf_button_shape.shape__gf_button_shape;
  const landing_page = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 28,
        [_Location_line]: 12,
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
        [_Location_column]: 22,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 32,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 50,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 61,
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
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 64,
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
        [_Location_column]: 5,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 41,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 26,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 38,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 13,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137, C138 || CT.C138], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/tedx/landing_page.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 164,
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
  const _officialLogo = dart.privateName(landing_page, "_officialLogo");
  let C5;
  let C4;
  let C3;
  const _navigationButtons = dart.privateName(landing_page, "_navigationButtons");
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C11;
  let C10;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C40;
  let C39;
  let C49;
  let C50;
  let C51;
  let C48;
  let C47;
  let C54;
  let C53;
  let C52;
  let C57;
  let C56;
  let C55;
  let C60;
  let C59;
  let C58;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C69;
  let C68;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  let C83;
  let C82;
  let C81;
  let C86;
  let C85;
  let C84;
  let C89;
  let C88;
  let C87;
  let C92;
  let C91;
  let C90;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C98;
  let C97;
  let C107;
  let C108;
  let C109;
  let C106;
  let C105;
  const _renderLandingPage = dart.privateName(landing_page, "_renderLandingPage");
  let C112;
  let C113;
  let C111;
  let C110;
  const _renderTopRow = dart.privateName(landing_page, "_renderTopRow");
  const _renderButtonRow = dart.privateName(landing_page, "_renderButtonRow");
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C125;
  let C123;
  let C122;
  let C128;
  let C129;
  let C127;
  let C126;
  let C132;
  let C133;
  let C131;
  let C130;
  let C136;
  let C137;
  let C138;
  let C135;
  let C134;
  let C141;
  let C142;
  let C143;
  let C140;
  let C139;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C144;
  let C147;
  let C148;
  let C146;
  let C145;
  let C151;
  let C152;
  let C150;
  let C149;
  let C155;
  let C154;
  let C153;
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C163;
  let C161;
  let C160;
  let C166;
  let C167;
  let C165;
  let C164;
  landing_page.LandingPageState = class LandingPageState extends framework.State$(framework.StatefulWidget) {
    build(context) {
      return new app.MaterialApp.new({title: "TEDxDrewUniversity", home: this[_renderLandingPage](), $creationLocationd_0dea112b090073317d4: C110 || CT.C110});
    }
    [_renderLandingPage]() {
      return new material.Material.new({type: material.MaterialType.transparency, child: new container.Container.new({color: colors.Colors.black, child: new basic.FittedBox.new({fit: box_fit.BoxFit.contain, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidget().of([this[_renderTopRow](), this[_renderButtonRow]()]), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C126 || CT.C126});
    }
    [_renderTopRow]() {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({width: 740.0, height: 740.0, child: new basic.Align.new({alignment: alignment.Alignment.topLeft, child: this[_officialLogo], $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({width: 500.0, height: 500.0, child: this[_tedxLogo], $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), new basic.Padding.new({padding: C144 || CT.C144, child: new text.Text.new("2020", {style: new text_style.TextStyle.new({fontSize: 70.0, color: colors.Colors.red}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149})]), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), new container.Container.new({width: 740.0, height: 740.0, $creationLocationd_0dea112b090073317d4: C156 || CT.C156})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
    }
    [_renderButtonRow]() {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: this[_navigationButtons], $creationLocationd_0dea112b090073317d4: C164 || CT.C164});
    }
  };
  (landing_page.LandingPageState.new = function() {
    this[_tedxLogo] = new image.Image.new({image: new image_resolution.AssetImage.new("lib/assets/ted_x_logo.png"), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    this[_officialLogo] = new image.Image.new({image: new image_resolution.AssetImage.new("lib/assets/official_logo_vertical.png"), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    this[_navigationButtons] = JSArrayOfWidget().of([new container.Container.new({width: landing_page.LandingPageState.buttonWidth, height: landing_page.LandingPageState.buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), text: "About", color: colors.Colors.red, icon: new icon.Icon.new(icons.Icons.help, {size: landing_page.LandingPageState.iconSize, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), textStyle: new text_style.TextStyle.new({fontSize: landing_page.LandingPageState.buttonFontSize, color: colors.Colors.black}), shape: landing_page.LandingPageState.buttonShape, $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new basic.SizedBox.new({width: landing_page.LandingPageState.buttonSeparation, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new container.Container.new({child: new basic.CustomPaint.new({painter: new landing_page.DrawCircle.new(), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new basic.SizedBox.new({width: landing_page.LandingPageState.buttonSeparation, $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new container.Container.new({width: landing_page.LandingPageState.buttonWidth, height: landing_page.LandingPageState.buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), text: "Team", color: colors.Colors.red, icon: new icon.Icon.new(icons.Icons.supervised_user_circle, {size: landing_page.LandingPageState.iconSize, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), textStyle: new text_style.TextStyle.new({fontSize: landing_page.LandingPageState.buttonFontSize, color: colors.Colors.black}), shape: landing_page.LandingPageState.buttonShape, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.SizedBox.new({width: landing_page.LandingPageState.buttonSeparation, $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new container.Container.new({child: new basic.CustomPaint.new({painter: new landing_page.DrawCircle.new(), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new basic.SizedBox.new({width: landing_page.LandingPageState.buttonSeparation, $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new container.Container.new({width: landing_page.LandingPageState.buttonWidth, height: landing_page.LandingPageState.buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), text: "Catalog", color: colors.Colors.red, icon: new icon.Icon.new(icons.Icons.local_library, {size: landing_page.LandingPageState.iconSize, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), textStyle: new text_style.TextStyle.new({fontSize: landing_page.LandingPageState.buttonFontSize, color: colors.Colors.black}), shape: landing_page.LandingPageState.buttonShape, $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new basic.SizedBox.new({width: landing_page.LandingPageState.buttonSeparation, $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new container.Container.new({child: new basic.CustomPaint.new({painter: new landing_page.DrawCircle.new(), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), new basic.SizedBox.new({width: landing_page.LandingPageState.buttonSeparation, $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new container.Container.new({width: landing_page.LandingPageState.buttonWidth, height: landing_page.LandingPageState.buttonHeight, child: new gf_button.GFButton.new({onPressed: dart.fn(() => {
          }, VoidToNull()), text: "Tickets", color: colors.Colors.red, icon: new icon.Icon.new(icons.Icons.local_play, {size: landing_page.LandingPageState.iconSize, $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), textStyle: new text_style.TextStyle.new({fontSize: landing_page.LandingPageState.buttonFontSize, color: colors.Colors.black}), shape: landing_page.LandingPageState.buttonShape, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105})]);
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
    /*landing_page.LandingPageState.buttonWidth*/get buttonWidth() {
      return 180.0;
    },
    set buttonWidth(_) {},
    /*landing_page.LandingPageState.buttonHeight*/get buttonHeight() {
      return 65.0;
    },
    set buttonHeight(_) {},
    /*landing_page.LandingPageState.buttonSeparation*/get buttonSeparation() {
      return 50.0;
    },
    set buttonSeparation(_) {},
    /*landing_page.LandingPageState.buttonFontSize*/get buttonFontSize() {
      return 28.0;
    },
    set buttonFontSize(_) {},
    /*landing_page.LandingPageState.iconSize*/get iconSize() {
      return 36.0;
    },
    set iconSize(_) {},
    /*landing_page.LandingPageState.buttonShape*/get buttonShape() {
      return gf_button_shape.GFButtonShape.pills;
    },
    set buttonShape(_) {}
  });
  const _paint = dart.privateName(landing_page, "_paint");
  landing_page.DrawCircle = class DrawCircle extends custom_paint.CustomPainter {
    paint(canvas, size) {
      canvas.drawCircle(new ui.Offset.new(0.0, 0.0), 10.0, this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return false;
    }
  };
  (landing_page.DrawCircle.new = function() {
    let t0;
    this[_paint] = null;
    landing_page.DrawCircle.__proto__.new.call(this);
    this[_paint] = (t0 = ui.Paint.new(), t0.color = colors.Colors.red, t0.strokeWidth = 5.0, t0.style = ui.PaintingStyle.fill, t0);
  }).prototype = landing_page.DrawCircle.prototype;
  dart.addTypeTests(landing_page.DrawCircle);
  dart.setMethodSignature(landing_page.DrawCircle, () => ({
    __proto__: dart.getMethods(landing_page.DrawCircle.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(landing_page.DrawCircle, "package:tedx/landing_page.dart");
  dart.setFieldSignature(landing_page.DrawCircle, () => ({
    __proto__: dart.getFields(landing_page.DrawCircle.__proto__),
    [_paint]: dart.fieldType(ui.Paint)
  }));
  dart.trackLibraries("packages/tedx/landing_page", {
    "package:tedx/landing_page.dart": landing_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["landing_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA6F4B;AACxB,YAAW,iCACF,4BACD;IAEV;;AAGE,YAAO,kCACc,2CACR,oCACO,4BACP,8BACO,+BACL,yCACgC,8CACnB,sBAChB,uBACA;IAKd;;AAGE,YAAO,uCACgC,yCACnB,sBAChB,oCACS,eACC,cACD,gCACgB,oCACd,2IAGX,gCACoB,sBAChB,oCACS,eACC,cACD,4EAET,wDAES,kBACL,gBACO,wCAAoB,aAAkB,wMAKrD,oCACS,eACC;IAIhB;;AAGE,YAAO,uCACgC,8CAC3B;IAEd;;;IA5JO,kBAAY,4BAAa,oCAAW;IACpC,sBACH,4BAAa,oCAAW;IASxB,2BAAqB,sBACvB,oCACS,mDACC,mDACD,uCACM;kCACL,gBACQ,yBACR,kBAAW,yBAAY,0GAClB,wCAAoB,qDAA8B,8BACtD,6JAGX,+BACS,yGAET,oCACS,oCAAqB,qJAE9B,+BACS,yGAET,oCACS,mDACC,mDACD,uCACM;kCACL,eACQ,yBACR,kBAAW,2CAA8B,4GACpC,wCAAoB,qDAA8B,8BACtD,6JAGX,+BACS,yGAET,oCACS,oCAAqB,qJAE9B,+BACS,yGAET,oCACS,mDACC,mDACD,uCACM;kCACL,kBACQ,yBACR,kBAAW,kCAAqB,4GAC3B,wCAAoB,qDAA8B,8BACtD,6JAGX,+BACS,yGAET,oCACS,oCAAqB,qJAE9B,+BACS,yGAET,oCACS,mDACC,mDACD,uCACM;kCACL,kBACQ,yBACR,kBAAW,+BAAkB,4GACxB,wCAAoB,qDAA8B,8BACtD;;;EAyEf;;;;;;;;;;;;;;;;;MAzJgB,yCAAW;YAAG;;;MACd,0CAAY;YAAG;;;MACf,8CAAgB;YAAG;;;MACnB,4CAAc;YAAG;;;MACjB,sCAAQ;YAAG;;;MACJ,yCAAW;YAAiB;;;;;;UAiK/B,QAAa;AACoB,MAAjD,AAAO,MAAD,YAAY,kBAAO,KAAK,MAAM,MAAM;IAC5C;;wCAGiC;AAC/B,YAAO;IACT;;;;IAjBM;AAEN;AAIgC,IAH9B,qBAAS,gBACL,WAAe,mBACf,iBAAc,KACd,WAAsB;EAC5B","file":"landing_page.ddc.js"}');
  // Exports:
  return {
    landing_page: landing_page
  };
});

//# sourceMappingURL=landing_page.ddc.js.map
