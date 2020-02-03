define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation$ = packages__flutter__src__animation__animation.src__animation__animation;
  const gf_items_carousel = Object.create(dart.library);
  const $length = dartx.length;
  const $round = dartx.round;
  const $toDouble = dartx.toDouble;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation$.AnimationStatus])))();
  let WidgetToContainer = () => (WidgetToContainer = dart.constFn(dart.fnType(container.Container, [framework.Widget])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_items_carousel.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_items_carousel.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 17,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_items_carousel.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_items_carousel.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_items_carousel.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragStart",
        [_Location_column]: 9,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragUpdate",
        [_Location_column]: 9,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHorizontalDragEnd",
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/carousel/gf_items_carousel.dart"
      });
    }
  });
  const rowCount$ = dart.privateName(gf_items_carousel, "GFItemsCarousel.rowCount");
  const children$ = dart.privateName(gf_items_carousel, "GFItemsCarousel.children");
  const onSlideStart$ = dart.privateName(gf_items_carousel, "GFItemsCarousel.onSlideStart");
  const onSlide$ = dart.privateName(gf_items_carousel, "GFItemsCarousel.onSlide");
  const onSlideEnd$ = dart.privateName(gf_items_carousel, "GFItemsCarousel.onSlideEnd");
  gf_items_carousel.GFItemsCarousel = class GFItemsCarousel extends framework.StatefulWidget {
    get rowCount() {
      return this[rowCount$];
    }
    set rowCount(value) {
      super.rowCount = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get onSlideStart() {
      return this[onSlideStart$];
    }
    set onSlideStart(value) {
      super.onSlideStart = value;
    }
    get onSlide() {
      return this[onSlide$];
    }
    set onSlide(value) {
      super.onSlide = value;
    }
    get onSlideEnd() {
      return this[onSlideEnd$];
    }
    set onSlideEnd(value) {
      super.onSlideEnd = value;
    }
    createState() {
      return new gf_items_carousel._GFItemsCarouselState.new();
    }
  };
  (gf_items_carousel.GFItemsCarousel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rowCount = opts && 'rowCount' in opts ? opts.rowCount : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let onSlideStart = opts && 'onSlideStart' in opts ? opts.onSlideStart : null;
    let onSlide = opts && 'onSlide' in opts ? opts.onSlide : null;
    let onSlideEnd = opts && 'onSlideEnd' in opts ? opts.onSlideEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rowCount$] = rowCount;
    this[children$] = children;
    this[onSlideStart$] = onSlideStart;
    this[onSlide$] = onSlide;
    this[onSlideEnd$] = onSlideEnd;
    gf_items_carousel.GFItemsCarousel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_items_carousel.GFItemsCarousel.prototype;
  dart.addTypeTests(gf_items_carousel.GFItemsCarousel);
  dart.setMethodSignature(gf_items_carousel.GFItemsCarousel, () => ({
    __proto__: dart.getMethods(gf_items_carousel.GFItemsCarousel.__proto__),
    createState: dart.fnType(gf_items_carousel._GFItemsCarouselState, [])
  }));
  dart.setLibraryUri(gf_items_carousel.GFItemsCarousel, "package:getflutter/components/carousel/gf_items_carousel.dart");
  dart.setFieldSignature(gf_items_carousel.GFItemsCarousel, () => ({
    __proto__: dart.getFields(gf_items_carousel.GFItemsCarousel.__proto__),
    rowCount: dart.finalFieldType(core.int),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    onSlideStart: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onSlide: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onSlideEnd: dart.finalFieldType(dart.fnType(dart.void, [drag_details.DragEndDetails]))
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C25;
  let C26;
  let C27;
  let C23;
  let C22;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(gf_items_carousel.GFItemsCarousel) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(gf_items_carousel.GFItemsCarousel)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(gf_items_carousel.GFItemsCarousel));
  gf_items_carousel._GFItemsCarouselState = class _GFItemsCarouselState extends State_TickerProviderStateMixin$36 {
    initState() {
      this.offset = 0.0;
      this.animationController = new animation_controller.AnimationController.new({duration: C0 || CT.C0, vsync: this});
      FutureOfNull().delayed(core.Duration.zero, dart.fn(() => {
        this.setState(dart.fn(() => {
          let localWidth = media_query.MediaQuery.of(this.context).size.width;
          this.width = localWidth;
          this.size = dart.notNull(this.width) / dart.notNull(this.widget.rowCount);
        }, VoidToNull()));
      }, VoidToNull()));
      super.initState();
    }
    calculateOffset(shift) {
      let localOffset = dart.notNull(this.offset) + dart.notNull(shift);
      let rightLimit = dart.notNull(this.size) * (dart.notNull(this.widget.children[$length]) - dart.notNull(this.widget.rowCount));
      if (localOffset > 0) {
        localOffset = 0.0;
      } else if (localOffset < -rightLimit) {
        localOffset = -rightLimit;
      }
      return localOffset;
    }
    onSlideStart(details) {
      this.animationController.stop();
      if (this.widget.onSlideStart != null) {
        this.widget.onSlideStart(details);
      }
    }
    onSlide(details) {
      this.setState(dart.fn(() => {
        this.offset = this.calculateOffset(3 * dart.notNull(details.delta.dx));
      }, VoidToNull()));
      if (this.widget.onSlide != null) {
        this.widget.onSlide(details);
      }
    }
    onSlideEnd(details) {
      let dx = details.velocity.pixelsPerSecond.dx;
      if (dx === 0) {
        return this.slideAnimation();
      }
      this.animationController = new animation_controller.AnimationController.new({duration: C0 || CT.C0, vsync: this});
      let tween = new (TweenOfdouble()).new({begin: this.offset, end: this.calculateOffset(0.5 * dart.notNull(dx))});
      let animation = null;
      animation = tween.animate(new animations.CurvedAnimation.new({parent: this.animationController, curve: curves.Curves.easeOut}));
      animation.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation$.AnimationStatus.completed)) {
          this.slideAnimation();
        }
      }, AnimationStatusToNull()));
      animation.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.offset = core.double._check(animation.value);
        }, VoidToNull()));
      }, VoidToNull()));
      this.animationController.forward();
      if (this.widget.onSlideEnd != null) {
        this.widget.onSlideEnd(details);
      }
    }
    slideAnimation() {
      let beginAnimation = this.offset;
      let endAnimation = dart.notNull(this.size) * (dart.notNull(this.offset) / dart.notNull(this.size))[$round]()[$toDouble]();
      this.animationController = new animation_controller.AnimationController.new({duration: C1 || CT.C1, vsync: this});
      let tween = new (TweenOfdouble()).new({begin: beginAnimation, end: endAnimation});
      let animation = tween.animate(this.animationController);
      animation.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.offset = core.double._check(animation.value);
        }, VoidToNull()));
      }, VoidToNull()));
      this.animationController.forward();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onHorizontalDragStart: dart.bind(this, 'onSlideStart'), onHorizontalDragUpdate: dart.bind(this, 'onSlide'), onHorizontalDragEnd: dart.bind(this, 'onSlideEnd'), child: new container.Container.new({width: 1 / 0, height: this.size, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({left: this.offset, child: new basic.Row.new({children: this.widget.children[$map](container.Container, dart.fn(child => new container.Container.new({width: this.size, height: this.size, child: child, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), WidgetToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
  };
  (gf_items_carousel._GFItemsCarouselState.new = function() {
    this.size = 0.0;
    this.width = 0.0;
    this.animationController = null;
    this.offset = null;
    gf_items_carousel._GFItemsCarouselState.__proto__.new.call(this);
    ;
  }).prototype = gf_items_carousel._GFItemsCarouselState.prototype;
  dart.addTypeTests(gf_items_carousel._GFItemsCarouselState);
  dart.setMethodSignature(gf_items_carousel._GFItemsCarouselState, () => ({
    __proto__: dart.getMethods(gf_items_carousel._GFItemsCarouselState.__proto__),
    calculateOffset: dart.fnType(core.double, [core.double]),
    onSlideStart: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    onSlide: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    onSlideEnd: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    slideAnimation: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_items_carousel._GFItemsCarouselState, "package:getflutter/components/carousel/gf_items_carousel.dart");
  dart.setFieldSignature(gf_items_carousel._GFItemsCarouselState, () => ({
    __proto__: dart.getFields(gf_items_carousel._GFItemsCarouselState.__proto__),
    size: dart.fieldType(core.double),
    width: dart.fieldType(core.double),
    animationController: dart.fieldType(animation_controller.AnimationController),
    offset: dart.fieldType(core.double)
  }));
  dart.defineLazy(gf_items_carousel._GFItemsCarouselState, {
    /*gf_items_carousel._GFItemsCarouselState.dragAnimationDuration*/get dragAnimationDuration() {
      return 1000;
    },
    /*gf_items_carousel._GFItemsCarouselState.shiftAnimationDuration*/get shiftAnimationDuration() {
      return 300;
    }
  });
  dart.trackLibraries("packages/getflutter/components/carousel/gf_items_carousel", {
    "package:getflutter/components/carousel/gf_items_carousel.dart": gf_items_carousel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_items_carousel.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqCY;;;;;;IAGS;;;;;;IAGqB;;;;;;IAIL;;;;;;IAIG;;;;;;;AAGC;IAAuB;;;QA1BrD;QACA;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACH,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4CT,MAAV,cAAS;AAIR,MAHD,2BAAsB,gFAEb;AAQP,MANK,uBAAiB,oBAAM;AAK1B,QAJF,cAAS;AACM,2BAAwB,AAAY,AAAK,0BAAd;AACtB,UAAlB,aAAQ,UAAU;AACY,UAA9B,YAAa,aAAN,2BAAQ,AAAO;;;AAGT,MAAX;IACR;oBAE8B;AACrB,wBAAqB,aAAP,4BAAS,KAAK;AACtB,uBAAkB,aAAL,cAA+B,aAAvB,AAAO,AAAS,8CAAS,AAAO;AAGlE,UAAI,AAAY,WAAD,GAAG;AACD,QAAf,cAAc;YACT,KAAI,AAAY,WAAD,GAAG,CAAC,UAAU;AACT,QAAzB,cAAc,CAAC,UAAU;;AAE3B,YAAO,YAAW;IACpB;iBAEmC;AACP,MAA1B,AAAoB;AACpB,UAAI,AAAO,4BAAgB;AACG,QAA5B,AAAO,yBAAa,OAAO;;IAE/B;YAE+B;AAG3B,MAFF,cAAS;AACuC,QAA9C,cAAS,qBAAgB,AAAE,iBAAE,AAAQ,AAAM,OAAP;;AAEtC,UAAI,AAAO,uBAAW;AACG,QAAvB,AAAO,oBAAQ,OAAO;;IAE1B;eAE+B;AAChB,eAAK,AAAQ,AAAS,AAAgB,OAA1B;AAEzB,UAAI,AAAG,EAAD,KAAI;AACR,cAAO;;AAMR,MAHD,2BAAsB,gFAEb;AAGG,kBACR,kCAAqB,kBAAa,qBAAgB,AAAI,mBAAE,EAAE;AACpD;AAIR,MAHF,YAAY,AAAM,KAAD,SAAS,4CAChB,iCACM;AAMd,MAJF,AAAU,SAAD,mBAAmB,QAAiB;AAC3C,YAAW,YAAP,MAAM,EAAoB;AACZ,UAAhB;;;AAOF,MAJF,AAAU,SAAD,aAAa;AAGlB,QAFF,cAAS;AACiB,wBAAxB,mBAAS,AAAU,SAAD;;;AAIO,MAA7B,AAAoB;AACpB,UAAI,AAAO,0BAAc;AACG,QAA1B,AAAO,uBAAW,OAAO;;IAE7B;;AAGe,2BAAiB;AACjB,yBAAoB,aAAL,aAAuB,AAAQ,CAAhB,aAAP,4BAAS;AAI5C,MAHD,2BAAsB,gFAEb;AAEG,kBAAQ,kCAAqB,cAAc,OAAO,YAAY;AAC1D,sBAAY,AAAM,KAAD,SAAS;AAKxC,MAJF,AAAU,SAAD,aAAa;AAGlB,QAFF,cAAS;AACiB,wBAAxB,mBAAS,AAAU,SAAD;;;AAGO,MAA7B,AAAoB;IACtB;UAG0B;AAAY,wFACT,yDACC,iDACH,4BACd,mDAEG,kBACD,+BACK,sBACR,gCACQ,oBACC,6BACK,AAAO,AACZ,AAKA,gDALI,QAAC,SAAU,oCACH,mBACC,kBACD,KAAK;IAQjC;;;IAtIE,YAAO;IAGP,aAAQ;IAEK;IAGb;;;EA+HT;;;;;;;;;;;;;;;;;;;;MA7ImB,6DAAqB;;;MAGrB,8DAAsB","file":"gf_items_carousel.ddc.js"}');
  // Exports:
  return {
    components__carousel__gf_items_carousel: gf_items_carousel
  };
});

//# sourceMappingURL=gf_items_carousel.ddc.js.map
