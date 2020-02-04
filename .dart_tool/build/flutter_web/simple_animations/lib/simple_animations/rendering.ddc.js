define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/gestures'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__gestures) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const ticker = packages__flutter__gestures.src__scheduler__ticker;
  const rendering = Object.create(dart.library);
  const $round = dartx.round;
  const $forEach = dartx.forEach;
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const builder$ = dart.privateName(rendering, "Rendering.builder");
  const onTick$ = dart.privateName(rendering, "Rendering.onTick");
  const startTime$ = dart.privateName(rendering, "Rendering.startTime");
  const startTimeSimulationTicks$ = dart.privateName(rendering, "Rendering.startTimeSimulationTicks");
  rendering.Rendering = class Rendering extends framework.StatefulWidget {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get onTick() {
      return this[onTick$];
    }
    set onTick(value) {
      super.onTick = value;
    }
    get startTime() {
      return this[startTime$];
    }
    set startTime(value) {
      super.startTime = value;
    }
    get startTimeSimulationTicks() {
      return this[startTimeSimulationTicks$];
    }
    set startTimeSimulationTicks(value) {
      super.startTimeSimulationTicks = value;
    }
    createState() {
      return new rendering._RenderingState.new();
    }
  };
  (rendering.Rendering.new = function(opts) {
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let onTick = opts && 'onTick' in opts ? opts.onTick : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : C0 || CT.C0;
    let startTimeSimulationTicks = opts && 'startTimeSimulationTicks' in opts ? opts.startTimeSimulationTicks : 20;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$] = builder;
    this[onTick$] = onTick;
    this[startTime$] = startTime;
    this[startTimeSimulationTicks$] = startTimeSimulationTicks;
    if (!(builder != null)) dart.assertFailed("Builder needs to defined.", "org-dartlang-app:///packages/simple_animations/simple_animations/rendering.dart", 30, 16, "builder != null");
    rendering.Rendering.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rendering.Rendering.prototype;
  dart.addTypeTests(rendering.Rendering);
  dart.setMethodSignature(rendering.Rendering, () => ({
    __proto__: dart.getMethods(rendering.Rendering.__proto__),
    createState: dart.fnType(rendering._RenderingState, [])
  }));
  dart.setLibraryUri(rendering.Rendering, "package:simple_animations/simple_animations/rendering.dart");
  dart.setFieldSignature(rendering.Rendering, () => ({
    __proto__: dart.getFields(rendering.Rendering.__proto__),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.Duration])),
    onTick: dart.finalFieldType(dart.fnType(dart.dynamic, [core.Duration])),
    startTime: dart.finalFieldType(core.Duration),
    startTimeSimulationTicks: dart.finalFieldType(core.int)
  }));
  const _ticker = dart.privateName(rendering, "_ticker");
  const _timeElapsed = dart.privateName(rendering, "_timeElapsed");
  const _simulateStartTimeTicks = dart.privateName(rendering, "_simulateStartTimeTicks");
  const _onRender = dart.privateName(rendering, "_onRender");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(rendering.Rendering) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(rendering.Rendering)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(rendering.Rendering));
  rendering._RenderingState = class _RenderingState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      if (dart.test(this.widget.startTime['>'](core.Duration.zero))) {
        this[_simulateStartTimeTicks]();
      }
      this[_ticker] = this.createTicker(dart.fn(elapsed => {
        this[_onRender](elapsed['+'](this.widget.startTime));
      }, DurationToNull()));
      this[_ticker].start();
      super.initState();
    }
    [_onRender](effectiveElapsed) {
      if (this.widget.onTick != null) {
        this.widget.onTick(effectiveElapsed);
      }
      this.setState(dart.fn(() => {
        this[_timeElapsed] = effectiveElapsed;
      }, VoidToNull()));
    }
    [_simulateStartTimeTicks]() {
      if (this.widget.onTick != null) {
        IterableOfint().generate(dart.notNull(this.widget.startTimeSimulationTicks) + 1)[$forEach](dart.fn(i => {
          let simulatedTime = new core.Duration.new({milliseconds: (dart.notNull(this.widget.startTime.inMilliseconds) * dart.notNull(i) / dart.notNull(this.widget.startTimeSimulationTicks))[$round]()});
          this.widget.onTick(simulatedTime);
        }, intToNull()));
      }
    }
    dispose() {
      this[_ticker].stop({canceled: true});
      super.dispose();
    }
    build(context) {
      return this.widget.builder(context, this[_timeElapsed]);
    }
  };
  (rendering._RenderingState.new = function() {
    this[_ticker] = null;
    this[_timeElapsed] = new core.Duration.new({milliseconds: 0});
    rendering._RenderingState.__proto__.new.call(this);
    ;
  }).prototype = rendering._RenderingState.prototype;
  dart.addTypeTests(rendering._RenderingState);
  dart.setMethodSignature(rendering._RenderingState, () => ({
    __proto__: dart.getMethods(rendering._RenderingState.__proto__),
    [_onRender]: dart.fnType(dart.void, [core.Duration]),
    [_simulateStartTimeTicks]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(rendering._RenderingState, "package:simple_animations/simple_animations/rendering.dart");
  dart.setFieldSignature(rendering._RenderingState, () => ({
    __proto__: dart.getFields(rendering._RenderingState.__proto__),
    [_ticker]: dart.fieldType(ticker.Ticker),
    [_timeElapsed]: dart.fieldType(core.Duration)
  }));
  dart.trackLibraries("packages/simple_animations/simple_animations/rendering", {
    "package:simple_animations/simple_animations/rendering.dart": rendering
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rendering.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmBoE;;;;;;IAC7B;;;;;;IACtB;;;;;;IACL;;;;;;;AAUuB;IAAiB;;;QAPxC;QACD;QACA;QACA;;IAHC;IACD;IACA;IACA;UACI,AAAQ,OAAD,IAAI,yBAAM;AAL9B;;EAK0D;;;;;;;;;;;;;;;;;;;;;;;;;;AAaxD,oBAAI,AAAO,AAAU,2BAAW;AACL,QAAzB;;AAKA,MAFF,gBAAU,kBAAa,QAAC;AACe,QAArC,gBAAU,AAAQ,OAAD,MAAG,AAAO;;AAEd,MAAf,AAAQ;AACS,MAAX;IACR;gBAEwB;AACtB,UAAI,AAAO,sBAAU;AACY,QAA/B,AAAO,mBAAO,gBAAgB;;AAI9B,MAFF,cAAS;AACwB,QAA/B,qBAAe,gBAAgB;;IAEnC;;AAGE,UAAI,AAAO,sBAAU;AAQjB,QARuB,AACmC,yBAAL,aAAhC,AAAO,wCAA2B,aAAW,QAAC;AAC7D,8BAAgB,qCAIb,CAH0C,AACrC,aADK,AAAO,AAAU,qDACxB,CAAC,iBACD,AAAO;AAES,UAA5B,AAAO,mBAAO,aAAa;;;IAGjC;;AAI8B,MAA5B,AAAQ,8BAAe;AACR,MAAT;IACR;UAG0B;AACxB,YAAO,AAAO,qBAAQ,OAAO,EAAE;IACjC;;;IA/CO;IACE,qBAAe,qCAAuB;;;EA+CjD","file":"rendering.ddc.js"}');
  // Exports:
  return {
    simple_animations__rendering: rendering
  };
});

//# sourceMappingURL=rendering.ddc.js.map
