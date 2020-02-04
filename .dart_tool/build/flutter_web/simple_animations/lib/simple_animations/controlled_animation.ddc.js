define(['dart_sdk', 'packages/flutter/src/animation/animation', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__animation__animation, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const controlled_animation = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.PAUSE",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.PLAY_FORWARD",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.PLAY_REVERSE",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.START_OVER_FORWARD",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.START_OVER_REVERSE",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.LOOP",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: controlled_animation.Playback.prototype,
        [_name$]: "Playback.MIRROR",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], controlled_animation.Playback);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: curves._Linear.prototype
      });
    }
  });
  const _name$ = dart.privateName(controlled_animation, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  controlled_animation.Playback = class Playback extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (controlled_animation.Playback.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = controlled_animation.Playback.prototype;
  dart.addTypeTests(controlled_animation.Playback);
  dart.setLibraryUri(controlled_animation.Playback, "package:simple_animations/simple_animations/controlled_animation.dart");
  dart.setFieldSignature(controlled_animation.Playback, () => ({
    __proto__: dart.getFields(controlled_animation.Playback.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(controlled_animation.Playback, ['toString']);
  controlled_animation.Playback.PAUSE = C0 || CT.C0;
  controlled_animation.Playback.PLAY_FORWARD = C1 || CT.C1;
  controlled_animation.Playback.PLAY_REVERSE = C2 || CT.C2;
  controlled_animation.Playback.START_OVER_FORWARD = C3 || CT.C3;
  controlled_animation.Playback.START_OVER_REVERSE = C4 || CT.C4;
  controlled_animation.Playback.LOOP = C5 || CT.C5;
  controlled_animation.Playback.MIRROR = C6 || CT.C6;
  controlled_animation.Playback.values = C7 || CT.C7;
  let C8;
  const _is_ControlledAnimation_default = Symbol('_is_ControlledAnimation_default');
  const playback$ = dart.privateName(controlled_animation, "ControlledAnimation.playback");
  const tween$ = dart.privateName(controlled_animation, "ControlledAnimation.tween");
  const curve$ = dart.privateName(controlled_animation, "ControlledAnimation.curve");
  const duration$ = dart.privateName(controlled_animation, "ControlledAnimation.duration");
  const delay$ = dart.privateName(controlled_animation, "ControlledAnimation.delay");
  const builder$ = dart.privateName(controlled_animation, "ControlledAnimation.builder");
  const builderWithChild$ = dart.privateName(controlled_animation, "ControlledAnimation.builderWithChild");
  const child$ = dart.privateName(controlled_animation, "ControlledAnimation.child");
  const animationControllerStatusListener$ = dart.privateName(controlled_animation, "ControlledAnimation.animationControllerStatusListener");
  const startPosition$ = dart.privateName(controlled_animation, "ControlledAnimation.startPosition");
  controlled_animation.ControlledAnimation$ = dart.generic(T => {
    let _ControlledAnimationStateOfT = () => (_ControlledAnimationStateOfT = dart.constFn(controlled_animation._ControlledAnimationState$(T)))();
    class ControlledAnimation extends framework.StatefulWidget {
      get playback() {
        return this[playback$];
      }
      set playback(value) {
        super.playback = value;
      }
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get curve() {
        return this[curve$];
      }
      set curve(value) {
        super.curve = value;
      }
      get duration() {
        return this[duration$];
      }
      set duration(value) {
        super.duration = value;
      }
      get delay() {
        return this[delay$];
      }
      set delay(value) {
        super.delay = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get builderWithChild() {
        return this[builderWithChild$];
      }
      set builderWithChild(value) {
        super.builderWithChild = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get animationControllerStatusListener() {
        return this[animationControllerStatusListener$];
      }
      set animationControllerStatusListener(value) {
        super.animationControllerStatusListener = value;
      }
      get startPosition() {
        return this[startPosition$];
      }
      set startPosition(value) {
        super.startPosition = value;
      }
      createState() {
        return new (_ControlledAnimationStateOfT()).new();
      }
    }
    (ControlledAnimation.new = function(opts) {
      let playback = opts && 'playback' in opts ? opts.playback : C1 || CT.C1;
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let curve = opts && 'curve' in opts ? opts.curve : C8 || CT.C8;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let delay = opts && 'delay' in opts ? opts.delay : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let builderWithChild = opts && 'builderWithChild' in opts ? opts.builderWithChild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let animationControllerStatusListener = opts && 'animationControllerStatusListener' in opts ? opts.animationControllerStatusListener : null;
      let startPosition = opts && 'startPosition' in opts ? opts.startPosition : 0;
      let key = opts && 'key' in opts ? opts.key : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[playback$] = playback;
      this[tween$] = tween;
      this[curve$] = curve;
      this[duration$] = duration;
      this[delay$] = delay;
      this[builder$] = builder;
      this[builderWithChild$] = builderWithChild;
      this[child$] = child;
      this[animationControllerStatusListener$] = animationControllerStatusListener;
      this[startPosition$] = startPosition;
      if (!(duration != null)) dart.assertFailed("Please set property duration. Example: Duration(milliseconds: 500)", "org-dartlang-app:///packages/simple_animations/simple_animations/controlled_animation.dart", 91, 16, "duration != null");
      if (!(tween != null)) dart.assertFailed("Please set property tween. Example: Tween(from: 0.0, to: 100.0)", "org-dartlang-app:///packages/simple_animations/simple_animations/controlled_animation.dart", 93, 16, "tween != null");
      if (!(builderWithChild != null && child != null && builder == null || builder != null && builderWithChild == null && child == null)) dart.assertFailed("Either use just builder and keep buildWithChild and child null. " + "Or keep builder null and set a builderWithChild and a child.", "org-dartlang-app:///packages/simple_animations/simple_animations/controlled_animation.dart", 96, 13, "(builderWithChild != null && child != null && builder == null) ||\r\n                (builder != null && builderWithChild == null && child == null)");
      if (!(dart.notNull(startPosition) >= 0 && dart.notNull(startPosition) <= 1)) dart.assertFailed("The property startPosition " + "must have a value between 0.0 and 1.0.", "org-dartlang-app:///packages/simple_animations/simple_animations/controlled_animation.dart", 101, 13, "startPosition >= 0 && startPosition <= 1");
      ControlledAnimation.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ControlledAnimation.prototype;
    dart.addTypeTests(ControlledAnimation);
    ControlledAnimation.prototype[_is_ControlledAnimation_default] = true;
    dart.setMethodSignature(ControlledAnimation, () => ({
      __proto__: dart.getMethods(ControlledAnimation.__proto__),
      createState: dart.fnType(controlled_animation._ControlledAnimationState$(T), [])
    }));
    dart.setLibraryUri(ControlledAnimation, "package:simple_animations/simple_animations/controlled_animation.dart");
    dart.setFieldSignature(ControlledAnimation, () => ({
      __proto__: dart.getFields(ControlledAnimation.__proto__),
      playback: dart.finalFieldType(controlled_animation.Playback),
      tween: dart.finalFieldType(tween.Animatable$(T)),
      curve: dart.finalFieldType(curves.Curve),
      duration: dart.finalFieldType(core.Duration),
      delay: dart.finalFieldType(core.Duration),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T])),
      builderWithChild: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, T])),
      child: dart.finalFieldType(framework.Widget),
      animationControllerStatusListener: dart.finalFieldType(dart.fnType(dart.void, [animation.AnimationStatus])),
      startPosition: dart.finalFieldType(core.double)
    }));
    return ControlledAnimation;
  });
  controlled_animation.ControlledAnimation = controlled_animation.ControlledAnimation$();
  dart.addTypeTests(controlled_animation.ControlledAnimation, _is_ControlledAnimation_default);
  const _controller = dart.privateName(controlled_animation, "_controller");
  const _animation = dart.privateName(controlled_animation, "_animation");
  const _isDisposed = dart.privateName(controlled_animation, "_isDisposed");
  const _waitForDelay = dart.privateName(controlled_animation, "_waitForDelay");
  const _isCurrentlyMirroring = dart.privateName(controlled_animation, "_isCurrentlyMirroring");
  const _is__ControlledAnimationState_default = Symbol('_is__ControlledAnimationState_default');
  controlled_animation._ControlledAnimationState$ = dart.generic(T => {
    let ControlledAnimationOfT = () => (ControlledAnimationOfT = dart.constFn(controlled_animation.ControlledAnimation$(T)))();
    let BuildContextAndTToWidget = () => (BuildContextAndTToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T])))();
    let BuildContextAndWidgetAndTToWidget = () => (BuildContextAndWidgetAndTToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, T])))();
    const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(controlled_animation.ControlledAnimation$(T)) {};
    (State_SingleTickerProviderStateMixin$36.new = function() {
      ticker_provider.SingleTickerProviderStateMixin$(controlled_animation.ControlledAnimation$(T))[dart.mixinNew].call(this);
      State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
    }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
    dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(controlled_animation.ControlledAnimation$(T)));
    class _ControlledAnimationState extends State_SingleTickerProviderStateMixin$36 {
      initState() {
        let t0;
        this[_controller] = (t0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0.addListener(dart.fn(() => {
          this.setState(dart.fn(() => {
          }, VoidToNull()));
        }, VoidToNull())), t0.value = this.widget.startPosition, t0);
        this[_animation] = this.widget.tween.chain(new tween.CurveTween.new({curve: this.widget.curve})).animate(this[_controller]);
        if (this.widget.animationControllerStatusListener != null) {
          this[_controller].addStatusListener(this.widget.animationControllerStatusListener);
        }
        this.initialize();
        super.initState();
      }
      initialize() {
        return async.async(dart.void, (function* initialize() {
          if (this.widget.delay != null) {
            yield async.Future.delayed(this.widget.delay);
          }
          this[_waitForDelay] = false;
          this.executeInstruction();
        }).bind(this));
      }
      didUpdateWidget(oldWidget) {
        ControlledAnimationOfT()._check(oldWidget);
        this[_controller].duration = this.widget.duration;
        this.executeInstruction();
        super.didUpdateWidget(oldWidget);
      }
      executeInstruction() {
        return async.async(dart.void, (function* executeInstruction() {
          if (dart.test(this[_isDisposed]) || dart.test(this[_waitForDelay])) {
            return;
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.PAUSE)) {
            this[_controller].stop();
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.PLAY_FORWARD)) {
            this[_controller].forward();
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.PLAY_REVERSE)) {
            this[_controller].reverse();
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.START_OVER_FORWARD)) {
            this[_controller].forward({from: 0.0});
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.START_OVER_REVERSE)) {
            this[_controller].reverse({from: 1.0});
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.LOOP)) {
            this[_controller].repeat();
          }
          if (dart.equals(this.widget.playback, controlled_animation.Playback.MIRROR) && !dart.test(this[_isCurrentlyMirroring])) {
            this[_isCurrentlyMirroring] = true;
            this[_controller].repeat({reverse: true});
          }
          if (!dart.equals(this.widget.playback, controlled_animation.Playback.MIRROR)) {
            this[_isCurrentlyMirroring] = false;
          }
        }).bind(this));
      }
      build(context) {
        if (BuildContextAndTToWidget()._check(this.widget.builder) != null) {
          return BuildContextAndTToWidget()._check(this.widget.builder)(context, this[_animation].value);
        } else if (BuildContextAndWidgetAndTToWidget()._check(this.widget.builderWithChild) != null && this.widget.child != null) {
          return BuildContextAndWidgetAndTToWidget()._check(this.widget.builderWithChild)(context, this.widget.child, this[_animation].value);
        }
        this[_controller].stop({canceled: true});
        dart.throw(assertions.FlutterError.new("I don't know how to build the animation. Make sure to either specify " + "a builder or a builderWithChild (along with a child)."));
      }
      dispose() {
        this[_isDisposed] = true;
        this[_controller].dispose();
        super.dispose();
      }
    }
    (_ControlledAnimationState.new = function() {
      this[_controller] = null;
      this[_animation] = null;
      this[_isDisposed] = false;
      this[_waitForDelay] = true;
      this[_isCurrentlyMirroring] = false;
      _ControlledAnimationState.__proto__.new.call(this);
      ;
    }).prototype = _ControlledAnimationState.prototype;
    dart.addTypeTests(_ControlledAnimationState);
    _ControlledAnimationState.prototype[_is__ControlledAnimationState_default] = true;
    dart.setMethodSignature(_ControlledAnimationState, () => ({
      __proto__: dart.getMethods(_ControlledAnimationState.__proto__),
      initialize: dart.fnType(dart.void, []),
      executeInstruction: dart.fnType(dart.void, []),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(_ControlledAnimationState, "package:simple_animations/simple_animations/controlled_animation.dart");
    dart.setFieldSignature(_ControlledAnimationState, () => ({
      __proto__: dart.getFields(_ControlledAnimationState.__proto__),
      [_controller]: dart.fieldType(animation_controller.AnimationController),
      [_animation]: dart.fieldType(animation.Animation$(T)),
      [_isDisposed]: dart.fieldType(core.bool),
      [_waitForDelay]: dart.fieldType(core.bool),
      [_isCurrentlyMirroring]: dart.fieldType(core.bool)
    }));
    return _ControlledAnimationState;
  });
  controlled_animation._ControlledAnimationState = controlled_animation._ControlledAnimationState$();
  dart.addTypeTests(controlled_animation._ControlledAnimationState, _is__ControlledAnimationState_default);
  dart.trackLibraries("packages/simple_animations/simple_animations/controlled_animation", {
    "package:simple_animations/simple_animations/controlled_animation.dart": controlled_animation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["controlled_animation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BA;;uDAvBK;;;;EAuBL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAwCiB;;;;;;MACK;;;;;;MACR;;;;;;MACG;;;;;;MACA;;;;;;MACmD;;;;;;MAE9D;;;;;;MACS;;;;;;MACiB;;;;;;MACjB;;;;;;;AA8BiC;MAA8B;;;UA3BlE;UACD;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACD;;MAVE;MACD;MACA;MACA;MACA;MACA;MACA;MACA;MACA;MACA;YAEI,AAAS,QAAD,IAAI,yBACf;YACG,AAAM,KAAD,IAAI,yBACZ;YAEC,AAA8D,gBAA9C,IAAI,QAAQ,KAAK,IAAI,QAAQ,AAAQ,OAAD,IAAI,QACpD,OAAO,IAAI,QAAQ,AAAiB,gBAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,yBAAK,AAClE,qEACA;YAEc,AAAK,aAAnB,aAAa,KAAI,KAAmB,aAAd,aAAa,KAAI,sBAAC,AACxC,gCACA;AACJ,yDAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBa,QAJhC,0BAAc,yDAA2B,gBAAgB,AAAO,wBAC5D,eAAY;AACG,UAAf,cAAS;;2BAET,WAAQ,AAAO;AAIM,QAFzB,mBAAa,AAAO,AACf,AACA,wBADM,iCAAkB,AAAO,6BACvB;AAEb,YAAI,AAAO,iDAAqC;AACyB,UAAvE,AAAY,oCAAkB,AAAO;;AAG3B,QAAZ;AACiB,QAAX;MACR;;AAEe;AACb,cAAI,AAAO,qBAAS;AACgB,YAAlC,MAAa,qBAAQ,AAAO;;AAET,UAArB,sBAAgB;AACI,UAApB;QACF;;;wCAG4C;AACJ,QAAtC,AAAY,6BAAW,AAAO;AACV,QAApB;AACgC,QAA1B,sBAAgB,SAAS;MACjC;;AAEuB;AACrB,wBAAI,gCAAe;AACjB;;AAGF,cAAoB,YAAhB,AAAO,sBAAqB;AACZ,YAAlB,AAAY;;AAEd,cAAoB,YAAhB,AAAO,sBAAqB;AACT,YAArB,AAAY;;AAEd,cAAoB,YAAhB,AAAO,sBAAqB;AACT,YAArB,AAAY;;AAEd,cAAoB,YAAhB,AAAO,sBAAqB;AACA,YAA9B,AAAY,iCAAc;;AAE5B,cAAoB,YAAhB,AAAO,sBAAqB;AACA,YAA9B,AAAY,iCAAc;;AAE5B,cAAoB,YAAhB,AAAO,sBAAqB;AACV,YAApB,AAAY;;AAEd,cAAoB,YAAhB,AAAO,sBAAqB,oDAAW;AACb,YAA5B,8BAAwB;AACS,YAAjC,AAAY,mCAAgB;;AAG9B,2BAAI,AAAO,sBAAqB;AACD,YAA7B,8BAAwB;;QAE5B;;YAG0B;AACxB,8CAAI,AAAO,wBAAW;AACpB,gBAAc,mCAAP,qBAAe,OAAO,EAAE,AAAW;cACrC,gDAAI,AAAO,iCAAoB,QAAQ,AAAO,qBAAS;AAC5D,gBAAc,4CAAP,8BAAwB,OAAO,EAAE,AAAO,mBAAO,AAAW;;AAEnC,QAAhC,AAAY,kCAAe;AAGiC,QAF5D,WAAM,4BAAY,AACd,0EACA;MACN;;AAIoB,QAAlB,oBAAc;AACO,QAArB,AAAY;AACG,QAAT;MACR;;;MA5FoB;MACP;MACR,oBAAc;MACd,sBAAgB;MAChB,8BAAwB;;;IAyF/B","file":"controlled_animation.ddc.js"}');
  // Exports:
  return {
    simple_animations__controlled_animation: controlled_animation
  };
});

//# sourceMappingURL=controlled_animation.ddc.js.map
