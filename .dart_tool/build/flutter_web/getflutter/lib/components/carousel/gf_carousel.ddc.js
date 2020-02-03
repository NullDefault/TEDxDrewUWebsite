define(['dart_sdk', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const gf_carousel = Object.create(dart.library);
  const $toInt = dartx.toInt;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $abs = dartx.abs;
  const $clamp = dartx.clamp;
  const $modulo = dartx['%'];
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DragDownDetailsTovoid = () => (DragDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragDownDetails])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])))();
  let BuildContextAndintToAnimatedBuilder = () => (BuildContextAndintToAnimatedBuilder = dart.constFn(dart.fnType(transitions.AnimatedBuilder, [framework.BuildContext, core.int])))();
  let dynamicAnddynamicToContainer = () => (dynamicAnddynamicToContainer = dart.constFn(dart.fnType(container.Container, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 800000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 40,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 63,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 56,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanDown",
        [_Location_column]: 23,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 57,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1
      });
    },
    get C18() {
      return C18 = dart.constList([], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 269,
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
        [_Location_column]: 28,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 13,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 13,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 13,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 13,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPageChanged",
        [_Location_column]: 13,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 2,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 2
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3841982464.0
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1711276032
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 19,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 19,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 19,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 318,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_carousel.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  let C1;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C2;
  const _name = dart.privateName(basic_types, "_name");
  let C3;
  const pagerSize$ = dart.privateName(gf_carousel, "GFCarousel.pagerSize");
  const activeIndicator$ = dart.privateName(gf_carousel, "GFCarousel.activeIndicator");
  const passiveIndicator$ = dart.privateName(gf_carousel, "GFCarousel.passiveIndicator");
  const pagination$ = dart.privateName(gf_carousel, "GFCarousel.pagination");
  const items$ = dart.privateName(gf_carousel, "GFCarousel.items");
  const height$ = dart.privateName(gf_carousel, "GFCarousel.height");
  const aspectRatio$ = dart.privateName(gf_carousel, "GFCarousel.aspectRatio");
  const viewportFraction$ = dart.privateName(gf_carousel, "GFCarousel.viewportFraction");
  const initialPage$ = dart.privateName(gf_carousel, "GFCarousel.initialPage");
  const realPage$ = dart.privateName(gf_carousel, "GFCarousel.realPage");
  const enableInfiniteScroll$ = dart.privateName(gf_carousel, "GFCarousel.enableInfiniteScroll");
  const reverse$ = dart.privateName(gf_carousel, "GFCarousel.reverse");
  const autoPlay$ = dart.privateName(gf_carousel, "GFCarousel.autoPlay");
  const autoPlayInterval$ = dart.privateName(gf_carousel, "GFCarousel.autoPlayInterval");
  const autoPlayAnimationDuration$ = dart.privateName(gf_carousel, "GFCarousel.autoPlayAnimationDuration");
  const autoPlayCurve$ = dart.privateName(gf_carousel, "GFCarousel.autoPlayCurve");
  const pauseAutoPlayOnTouch$ = dart.privateName(gf_carousel, "GFCarousel.pauseAutoPlayOnTouch");
  const enlargeMainPage$ = dart.privateName(gf_carousel, "GFCarousel.enlargeMainPage");
  const scrollDirection$ = dart.privateName(gf_carousel, "GFCarousel.scrollDirection");
  const onPageChanged$ = dart.privateName(gf_carousel, "GFCarousel.onPageChanged");
  const scrollPhysics$ = dart.privateName(gf_carousel, "GFCarousel.scrollPhysics");
  const pageController = dart.privateName(gf_carousel, "GFCarousel.pageController");
  gf_carousel.GFCarousel = class GFCarousel extends framework.StatefulWidget {
    get pagerSize() {
      return this[pagerSize$];
    }
    set pagerSize(value) {
      super.pagerSize = value;
    }
    get activeIndicator() {
      return this[activeIndicator$];
    }
    set activeIndicator(value) {
      super.activeIndicator = value;
    }
    get passiveIndicator() {
      return this[passiveIndicator$];
    }
    set passiveIndicator(value) {
      super.passiveIndicator = value;
    }
    get pagination() {
      return this[pagination$];
    }
    set pagination(value) {
      super.pagination = value;
    }
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get aspectRatio() {
      return this[aspectRatio$];
    }
    set aspectRatio(value) {
      super.aspectRatio = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get initialPage() {
      return this[initialPage$];
    }
    set initialPage(value) {
      super.initialPage = value;
    }
    get realPage() {
      return this[realPage$];
    }
    set realPage(value) {
      super.realPage = value;
    }
    get enableInfiniteScroll() {
      return this[enableInfiniteScroll$];
    }
    set enableInfiniteScroll(value) {
      super.enableInfiniteScroll = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get autoPlay() {
      return this[autoPlay$];
    }
    set autoPlay(value) {
      super.autoPlay = value;
    }
    get autoPlayInterval() {
      return this[autoPlayInterval$];
    }
    set autoPlayInterval(value) {
      super.autoPlayInterval = value;
    }
    get autoPlayAnimationDuration() {
      return this[autoPlayAnimationDuration$];
    }
    set autoPlayAnimationDuration(value) {
      super.autoPlayAnimationDuration = value;
    }
    get autoPlayCurve() {
      return this[autoPlayCurve$];
    }
    set autoPlayCurve(value) {
      super.autoPlayCurve = value;
    }
    get pauseAutoPlayOnTouch() {
      return this[pauseAutoPlayOnTouch$];
    }
    set pauseAutoPlayOnTouch(value) {
      super.pauseAutoPlayOnTouch = value;
    }
    get enlargeMainPage() {
      return this[enlargeMainPage$];
    }
    set enlargeMainPage(value) {
      super.enlargeMainPage = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get onPageChanged() {
      return this[onPageChanged$];
    }
    set onPageChanged(value) {
      super.onPageChanged = value;
    }
    get scrollPhysics() {
      return this[scrollPhysics$];
    }
    set scrollPhysics(value) {
      super.scrollPhysics = value;
    }
    get pageController() {
      return this[pageController];
    }
    set pageController(value) {
      super.pageController = value;
    }
    nextPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return this.pageController.nextPage({duration: duration, curve: curve});
    }
    previousPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return this.pageController.previousPage({duration: duration, curve: curve});
    }
    jumpToPage(page) {
      let index = gf_carousel._getRealIndex(this.pageController.page[$toInt](), dart.asInt(this.realPage), this.items[$length]);
      return this.pageController.jumpToPage(this.pageController.page[$toInt]() + dart.notNull(page) - dart.notNull(index));
    }
    animateToPage(page, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      let index = gf_carousel._getRealIndex(this.pageController.page[$toInt](), dart.asInt(this.realPage), this.items[$length]);
      return this.pageController.animateToPage(this.pageController.page[$toInt]() + dart.notNull(page) - dart.notNull(index), {duration: duration, curve: curve});
    }
    map(T, list, handler) {
      let result = null;
      result = _interceptors.JSArray$(T).of([]);
      for (let i = 0; i < dart.notNull(list[$length]); i = i + 1) {
        result[$add](T._check(dart.dcall(handler, [i, list[$_get](i)])));
      }
      return result;
    }
    createState() {
      return new gf_carousel._GFCarouselState.new();
    }
  };
  (gf_carousel.GFCarousel.new = function(opts) {
    let items = opts && 'items' in opts ? opts.items : null;
    let pagerSize = opts && 'pagerSize' in opts ? opts.pagerSize : null;
    let passiveIndicator = opts && 'passiveIndicator' in opts ? opts.passiveIndicator : null;
    let activeIndicator = opts && 'activeIndicator' in opts ? opts.activeIndicator : null;
    let pagination = opts && 'pagination' in opts ? opts.pagination : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let aspectRatio = opts && 'aspectRatio' in opts ? opts.aspectRatio : 1.7777777777777777;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0.8;
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    let realPage = opts && 'realPage' in opts ? opts.realPage : 10000;
    let enableInfiniteScroll = opts && 'enableInfiniteScroll' in opts ? opts.enableInfiniteScroll : true;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let autoPlay = opts && 'autoPlay' in opts ? opts.autoPlay : false;
    let autoPlayInterval = opts && 'autoPlayInterval' in opts ? opts.autoPlayInterval : C0 || CT.C0;
    let autoPlayAnimationDuration = opts && 'autoPlayAnimationDuration' in opts ? opts.autoPlayAnimationDuration : C1 || CT.C1;
    let autoPlayCurve = opts && 'autoPlayCurve' in opts ? opts.autoPlayCurve : C2 || CT.C2;
    let pauseAutoPlayOnTouch = opts && 'pauseAutoPlayOnTouch' in opts ? opts.pauseAutoPlayOnTouch : null;
    let enlargeMainPage = opts && 'enlargeMainPage' in opts ? opts.enlargeMainPage : false;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[items$] = items;
    this[pagerSize$] = pagerSize;
    this[passiveIndicator$] = passiveIndicator;
    this[activeIndicator$] = activeIndicator;
    this[pagination$] = pagination;
    this[height$] = height;
    this[aspectRatio$] = aspectRatio;
    this[viewportFraction$] = viewportFraction;
    this[initialPage$] = initialPage;
    this[enableInfiniteScroll$] = enableInfiniteScroll;
    this[reverse$] = reverse;
    this[autoPlay$] = autoPlay;
    this[autoPlayInterval$] = autoPlayInterval;
    this[autoPlayAnimationDuration$] = autoPlayAnimationDuration;
    this[autoPlayCurve$] = autoPlayCurve;
    this[pauseAutoPlayOnTouch$] = pauseAutoPlayOnTouch;
    this[enlargeMainPage$] = enlargeMainPage;
    this[onPageChanged$] = onPageChanged;
    this[scrollPhysics$] = scrollPhysics;
    this[scrollDirection$] = scrollDirection;
    this[realPage$] = dart.test(enableInfiniteScroll) ? dart.notNull(realPage) + dart.notNull(initialPage) : initialPage;
    this[pageController] = new page_view.PageController.new({viewportFraction: viewportFraction, initialPage: dart.asInt(dart.test(enableInfiniteScroll) ? dart.notNull(realPage) + dart.notNull(initialPage) : initialPage)});
    gf_carousel.GFCarousel.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_carousel.GFCarousel.prototype;
  dart.addTypeTests(gf_carousel.GFCarousel);
  dart.setMethodSignature(gf_carousel.GFCarousel, () => ({
    __proto__: dart.getMethods(gf_carousel.GFCarousel.__proto__),
    nextPage: dart.fnType(async.Future$(dart.void), [], {curve: curves.Curve, duration: core.Duration}, {}),
    previousPage: dart.fnType(async.Future$(dart.void), [], {curve: curves.Curve, duration: core.Duration}, {}),
    jumpToPage: dart.fnType(dart.void, [core.int]),
    animateToPage: dart.fnType(async.Future$(dart.void), [core.int], {curve: curves.Curve, duration: core.Duration}, {}),
    map: dart.gFnType(T => [core.List$(T), [core.List, core.Function]]),
    createState: dart.fnType(gf_carousel._GFCarouselState, [])
  }));
  dart.setLibraryUri(gf_carousel.GFCarousel, "package:getflutter/components/carousel/gf_carousel.dart");
  dart.setFieldSignature(gf_carousel.GFCarousel, () => ({
    __proto__: dart.getFields(gf_carousel.GFCarousel.__proto__),
    pagerSize: dart.finalFieldType(core.double),
    activeIndicator: dart.finalFieldType(ui.Color),
    passiveIndicator: dart.finalFieldType(ui.Color),
    pagination: dart.finalFieldType(core.bool),
    items: dart.finalFieldType(core.List$(framework.Widget)),
    height: dart.finalFieldType(core.double),
    aspectRatio: dart.finalFieldType(core.double),
    viewportFraction: dart.finalFieldType(core.num),
    initialPage: dart.finalFieldType(core.num),
    realPage: dart.finalFieldType(core.num),
    enableInfiniteScroll: dart.finalFieldType(core.bool),
    reverse: dart.finalFieldType(core.bool),
    autoPlay: dart.finalFieldType(core.bool),
    autoPlayInterval: dart.finalFieldType(core.Duration),
    autoPlayAnimationDuration: dart.finalFieldType(core.Duration),
    autoPlayCurve: dart.finalFieldType(curves.Curve),
    pauseAutoPlayOnTouch: dart.finalFieldType(core.Duration),
    enlargeMainPage: dart.finalFieldType(core.bool),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    onPageChanged: dart.finalFieldType(dart.fnType(dart.dynamic, [core.int])),
    scrollPhysics: dart.finalFieldType(scroll_physics.ScrollPhysics),
    pageController: dart.finalFieldType(page_view.PageController)
  }));
  const _current = dart.privateName(gf_carousel, "_current");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C16;
  let C18;
  let C17;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C39;
  let C38;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C47;
  const Color_value = dart.privateName(ui, "Color.value");
  let C48;
  let C49;
  let C52;
  let C53;
  let C54;
  let C55;
  let C51;
  let C50;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C67;
  let C68;
  let C64;
  let C63;
  let C69;
  let C72;
  let C71;
  let C70;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(gf_carousel.GFCarousel) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(gf_carousel.GFCarousel)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(gf_carousel.GFCarousel));
  gf_carousel._GFCarouselState = class _GFCarouselState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this.timer = this.getPlayTimer();
    }
    getPlayTimer() {
      return async.Timer.periodic(this.widget.autoPlayInterval, dart.fn(_ => {
        if (dart.test(this.widget.autoPlay)) {
          this.widget.pageController.nextPage({duration: this.widget.autoPlayAnimationDuration, curve: this.widget.autoPlayCurve});
        }
      }, TimerToNull()));
    }
    pauseOnTouch() {
      this.timer.cancel();
      this.timer = async.Timer.new(this.widget.pauseAutoPlayOnTouch, dart.fn(() => {
        this.timer = this.getPlayTimer();
      }, VoidToNull()));
    }
    getPageWrapper(child) {
      if (this.widget.height != null) {
        let wrapper = new container.Container.new({height: this.widget.height, child: child, $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
        return dart.test(this.widget.autoPlay) && this.widget.pauseAutoPlayOnTouch != null ? this.addGestureDetection(wrapper) : wrapper;
      } else {
        let wrapper = new basic.AspectRatio.new({aspectRatio: this.widget.aspectRatio, child: child, $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
        return dart.test(this.widget.autoPlay) && this.widget.pauseAutoPlayOnTouch != null ? this.addGestureDetection(wrapper) : wrapper;
      }
    }
    addGestureDetection(child) {
      return new gesture_detector.GestureDetector.new({onPanDown: dart.fn(_ => this.pauseOnTouch(), DragDownDetailsTovoid()), child: child, $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
    dispose() {
      let t0;
      super.dispose();
      t0 = this.timer;
      t0 == null ? null : t0.cancel();
    }
    build(context) {
      return new basic.Stack.new({children: JSArrayOfWidget().of([this.getPageWrapper(new page_view.PageView.builder({physics: this.widget.scrollPhysics, scrollDirection: this.widget.scrollDirection, controller: this.widget.pageController, reverse: this.widget.reverse, itemCount: dart.test(this.widget.enableInfiniteScroll) ? null : this.widget.items[$length], onPageChanged: dart.fn(index => {
              let currentPage = null;
              currentPage = gf_carousel._getRealIndex(dart.asInt(dart.notNull(index) + dart.notNull(this.widget.initialPage)), dart.asInt(this.widget.realPage), this.widget.items[$length]);
              if (this.widget.onPageChanged != null) {
                this.widget.onPageChanged(currentPage);
                this[_current] = currentPage;
              }
              this[_current] = currentPage;
            }, intToNull()), itemBuilder: dart.fn((context, i) => {
              let index = gf_carousel._getRealIndex(dart.asInt(dart.notNull(i) + dart.notNull(this.widget.initialPage)), dart.asInt(this.widget.realPage), this.widget.items[$length]);
              return new transitions.AnimatedBuilder.new({animation: this.widget.pageController, child: this.widget.items[$_get](index), builder: dart.fn((context, child) => {
                  let t0;
                  if (this.widget.pageController.position.minScrollExtent == null || this.widget.pageController.position.maxScrollExtent == null) {
                    FutureOfNull().delayed(C16 || CT.C16, dart.fn(() => {
                      this.setState(dart.fn(() => {
                      }, VoidToNull()));
                    }, VoidToNull()));
                    return new container.Container.new({$creationLocationd_0dea112b090073317d4: C17 || CT.C17});
                  }
                  let value = dart.notNull(this.widget.pageController.page) - dart.notNull(i);
                  value = (1 - value[$abs]() * 0.3)[$clamp](0.0, 1.0);
                  let height = (t0 = this.widget.height, t0 == null ? dart.notNull(media_query.MediaQuery.of(context).size.width) * (1 / dart.notNull(this.widget.aspectRatio)) : t0);
                  let distortionValue = dart.test(this.widget.enlargeMainPage) ? curves.Curves.easeOut.transform(value) : 1.0;
                  if (dart.equals(this.widget.scrollDirection, basic_types.Axis.horizontal)) {
                    return new basic.Center.new({child: new basic.SizedBox.new({height: dart.notNull(distortionValue) * dart.notNull(height), child: child, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
                  } else {
                    return new basic.Center.new({child: new basic.SizedBox.new({width: dart.notNull(distortionValue) * dart.notNull(media_query.MediaQuery.of(context).size.width), child: child, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
                  }
                }, BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
            }, BuildContextAndintToAnimatedBuilder()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})), dart.equals(this.widget.pagination, true) ? new basic.Positioned.new({left: 0.0, right: 0.0, bottom: 0.0, child: new container.Container.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this.widget.map(framework.Widget, this.widget.items, dart.fn((indexx, url) => new container.Container.new({width: this.widget.pagerSize == null ? 8.0 : this.widget.pagerSize, height: this.widget.pagerSize == null ? 8.0 : this.widget.pagerSize, margin: C47 || CT.C47, decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: core.identical(this[_current], indexx) ? this.widget.activeIndicator == null ? C48 || CT.C48 : this.widget.activeIndicator : this.widget.passiveIndicator == null ? C49 || CT.C49 : this.widget.passiveIndicator}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), dynamicAnddynamicToContainer())), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
  };
  (gf_carousel._GFCarouselState.new = function() {
    this.timer = null;
    this[_current] = 0;
    this.size = 0.0;
    this.width = 0.0;
    gf_carousel._GFCarouselState.__proto__.new.call(this);
    ;
  }).prototype = gf_carousel._GFCarouselState.prototype;
  dart.addTypeTests(gf_carousel._GFCarouselState);
  dart.setMethodSignature(gf_carousel._GFCarouselState, () => ({
    __proto__: dart.getMethods(gf_carousel._GFCarouselState.__proto__),
    getPlayTimer: dart.fnType(async.Timer, []),
    pauseOnTouch: dart.fnType(dart.void, []),
    getPageWrapper: dart.fnType(framework.Widget, [framework.Widget]),
    addGestureDetection: dart.fnType(framework.Widget, [framework.Widget]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_carousel._GFCarouselState, "package:getflutter/components/carousel/gf_carousel.dart");
  dart.setFieldSignature(gf_carousel._GFCarouselState, () => ({
    __proto__: dart.getFields(gf_carousel._GFCarouselState.__proto__),
    timer: dart.fieldType(async.Timer),
    [_current]: dart.fieldType(core.int),
    size: dart.fieldType(core.double),
    width: dart.fieldType(core.double)
  }));
  gf_carousel._getRealIndex = function _getRealIndex(position, base, length) {
    let offset = dart.notNull(position) - dart.notNull(base);
    return gf_carousel._remainder(offset, length);
  };
  gf_carousel._remainder = function _remainder(input, source) {
    let result = input[$modulo](source);
    return result < 0 ? dart.notNull(source) + result : result;
  };
  dart.trackLibraries("packages/getflutter/components/carousel/gf_carousel", {
    "package:getflutter/components/carousel/gf_carousel.dart": gf_carousel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_carousel.dart"],"names":[],"mappings":"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","file":"gf_carousel.ddc.js"}');
  // Exports:
  return {
    components__carousel__gf_carousel: gf_carousel
  };
});

//# sourceMappingURL=gf_carousel.ddc.js.map
