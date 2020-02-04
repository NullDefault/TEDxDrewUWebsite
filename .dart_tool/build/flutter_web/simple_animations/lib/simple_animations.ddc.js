define(['dart_sdk', 'packages/flutter/src/animation/animation', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/gestures', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__animation__animation, packages__flutter__src__foundation___bitfield_web, packages__flutter__gestures, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const listener_helpers = packages__flutter__src__animation__animation.src__animation__listener_helpers;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const ticker = packages__flutter__gestures.src__scheduler__ticker;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const from_to_task = Object.create(dart.library);
  const animation_task = Object.create(dart.library);
  const simple_animations = Object.create(dart.library);
  const set_value_task = Object.create(dart.library);
  const sleep_task = Object.create(dart.library);
  const loop_task = Object.create(dart.library);
  const conditional_task = Object.create(dart.library);
  const animation_controller_mixin = Object.create(dart.library);
  const animation_controller_x = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $modulo = dartx['%'];
  const $runtimeType = dartx.runtimeType;
  const $isEmpty = dartx.isEmpty;
  const $removeAt = dartx.removeAt;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let DiagnosticsPropertyOfTicker = () => (DiagnosticsPropertyOfTicker = dart.constFn(diagnostics.DiagnosticsProperty$(ticker.Ticker)))();
  let JSArrayOfAnimationTask = () => (JSArrayOfAnimationTask = dart.constFn(_interceptors.JSArray$(animation_task.AnimationTask)))();
  let AnimationTaskTovoid = () => (AnimationTaskTovoid = dart.constFn(dart.fnType(dart.void, [animation_task.AnimationTask])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation_controller_x.AnimationControllerXStatus.prototype,
        [_name$]: "AnimationControllerXStatus.startTask",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animation_controller_x.AnimationControllerXStatus.prototype,
        [_name$]: "AnimationControllerXStatus.completeTask",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.constList([C1 || CT.C1, C2 || CT.C2], animation_controller_x.AnimationControllerXStatus);
    }
  });
  let C0;
  const _isCompleted = dart.privateName(animation_task, "_isCompleted");
  const startedTime = dart.privateName(animation_task, "AnimationTask.startedTime");
  const startedValue = dart.privateName(animation_task, "AnimationTask.startedValue");
  const onStart$ = dart.privateName(animation_task, "AnimationTask.onStart");
  const onComplete$ = dart.privateName(animation_task, "AnimationTask.onComplete");
  animation_task.AnimationTask = class AnimationTask extends core.Object {
    get startedTime() {
      return this[startedTime];
    }
    set startedTime(value) {
      this[startedTime] = value;
    }
    get startedValue() {
      return this[startedValue];
    }
    set startedValue(value) {
      this[startedValue] = value;
    }
    get onStart() {
      return this[onStart$];
    }
    set onStart(value) {
      this[onStart$] = value;
    }
    get onComplete() {
      return this[onComplete$];
    }
    set onComplete(value) {
      this[onComplete$] = value;
    }
    started(time, value) {
      this.startedTime = time;
      this.startedValue = value;
      if (this.onStart != null) this.onStart();
    }
    completeTask() {
      this[_isCompleted] = true;
      if (this.onComplete != null) this.onComplete();
    }
    isCompleted() {
      return this[_isCompleted];
    }
    dispose() {
    }
    toString() {
      return "(startedTime: " + dart.str(this.startedTime) + ", startedValue: " + dart.str(this.startedValue) + ")";
    }
  };
  (animation_task.AnimationTask.new = function(opts) {
    let onStart = opts && 'onStart' in opts ? opts.onStart : null;
    let onComplete = opts && 'onComplete' in opts ? opts.onComplete : null;
    this[startedTime] = null;
    this[startedValue] = null;
    this[_isCompleted] = false;
    this[onStart$] = onStart;
    this[onComplete$] = onComplete;
    ;
  }).prototype = animation_task.AnimationTask.prototype;
  dart.addTypeTests(animation_task.AnimationTask);
  dart.setMethodSignature(animation_task.AnimationTask, () => ({
    __proto__: dart.getMethods(animation_task.AnimationTask.__proto__),
    started: dart.fnType(dart.dynamic, [core.Duration, core.double]),
    completeTask: dart.fnType(dart.dynamic, []),
    isCompleted: dart.fnType(core.bool, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(animation_task.AnimationTask, "package:simple_animations/simple_animations/animation_task/animation_task.dart");
  dart.setFieldSignature(animation_task.AnimationTask, () => ({
    __proto__: dart.getFields(animation_task.AnimationTask.__proto__),
    startedTime: dart.fieldType(core.Duration),
    startedValue: dart.fieldType(core.double),
    [_isCompleted]: dart.fieldType(core.bool),
    onStart: dart.fieldType(dart.fnType(dart.dynamic, [])),
    onComplete: dart.fieldType(dart.fnType(dart.dynamic, []))
  }));
  dart.defineExtensionMethods(animation_task.AnimationTask, ['toString']);
  const duration$ = dart.privateName(from_to_task, "FromToTask.duration");
  const durationBasedOnZeroToOneInterval$ = dart.privateName(from_to_task, "FromToTask.durationBasedOnZeroToOneInterval");
  const from$ = dart.privateName(from_to_task, "FromToTask.from");
  const to$ = dart.privateName(from_to_task, "FromToTask.to");
  const curve$ = dart.privateName(from_to_task, "FromToTask.curve");
  from_to_task.FromToTask = class FromToTask extends animation_task.AnimationTask {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      this[duration$] = value;
    }
    get durationBasedOnZeroToOneInterval() {
      return this[durationBasedOnZeroToOneInterval$];
    }
    set durationBasedOnZeroToOneInterval(value) {
      this[durationBasedOnZeroToOneInterval$] = value;
    }
    get from() {
      return this[from$];
    }
    set from(value) {
      this[from$] = value;
    }
    get to() {
      return this[to$];
    }
    set to(value) {
      this[to$] = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      this[curve$] = value;
    }
    computeValue(time) {
      let fromValue = (this.from == null ? this.startedValue : this.from)[$clamp](0.0, 1.0);
      let toValue = this.to[$clamp](0.0, 1.0)[$toDouble]();
      let delta = (toValue - fromValue)[$abs]();
      let durationMillis = dart.test(this.durationBasedOnZeroToOneInterval) ? delta * dart.notNull(this.duration.inMilliseconds) : this.duration.inMilliseconds;
      let value = null;
      if (durationMillis === 0) {
        value = toValue;
      } else {
        let timePassed = time['-'](this.startedTime);
        let progress = dart.notNull(timePassed.inMilliseconds) / dart.notNull(durationMillis);
        let linearValue = (fromValue * (1 - progress) + progress * toValue)[$clamp](math.min(core.num, fromValue, toValue), math.max(core.num, fromValue, toValue))[$toDouble]();
        value = this.curve.transform(linearValue);
      }
      if (value === toValue) this.completeTask();
      return value;
    }
    toString() {
      return "FromToAnimationTask(from: " + dart.str(this.from) + ", to: " + dart.str(this.to) + ", duration: " + dart.str(this.duration) + ", curve: " + dart.str(this.curve) + ")" + dart.str(super.toString());
    }
  };
  (from_to_task.FromToTask.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let durationBasedOnZeroToOneInterval = opts && 'durationBasedOnZeroToOneInterval' in opts ? opts.durationBasedOnZeroToOneInterval : true;
    let from = opts && 'from' in opts ? opts.from : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    let onStart = opts && 'onStart' in opts ? opts.onStart : null;
    let onComplete = opts && 'onComplete' in opts ? opts.onComplete : null;
    this[duration$] = duration;
    this[to$] = to;
    this[durationBasedOnZeroToOneInterval$] = durationBasedOnZeroToOneInterval;
    this[from$] = from;
    this[curve$] = curve;
    if (!(to != null)) dart.assertFailed("Please provide a 'to' value to animate to.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/from_to_task.dart", 46, 16, "to != null");
    if (!(duration != null)) dart.assertFailed("Please provide a 'duration'.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/from_to_task.dart", 47, 16, "duration != null");
    from_to_task.FromToTask.__proto__.new.call(this, {onStart: onStart, onComplete: onComplete});
    ;
  }).prototype = from_to_task.FromToTask.prototype;
  dart.addTypeTests(from_to_task.FromToTask);
  dart.setMethodSignature(from_to_task.FromToTask, () => ({
    __proto__: dart.getMethods(from_to_task.FromToTask.__proto__),
    computeValue: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(from_to_task.FromToTask, "package:simple_animations/simple_animations/animation_task/from_to_task.dart");
  dart.setFieldSignature(from_to_task.FromToTask, () => ({
    __proto__: dart.getFields(from_to_task.FromToTask.__proto__),
    duration: dart.fieldType(core.Duration),
    durationBasedOnZeroToOneInterval: dart.fieldType(core.bool),
    from: dart.fieldType(core.double),
    to: dart.fieldType(core.double),
    curve: dart.fieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(from_to_task.FromToTask, ['toString']);
  const value$ = dart.privateName(set_value_task, "SetValueTask.value");
  set_value_task.SetValueTask = class SetValueTask extends animation_task.AnimationTask {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    computeValue(time) {
      this.completeTask();
      return this.value;
    }
    toString() {
      return "SetValueAnimationTask(value: " + dart.str(this.value) + ")" + dart.str(super.toString());
    }
  };
  (set_value_task.SetValueTask.new = function(opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let onStart = opts && 'onStart' in opts ? opts.onStart : null;
    let onComplete = opts && 'onComplete' in opts ? opts.onComplete : null;
    this[value$] = value;
    if (!(value != null)) dart.assertFailed("Please provide a 'value'.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/set_value_task.dart", 15, 16, "value != null");
    set_value_task.SetValueTask.__proto__.new.call(this, {onStart: onStart, onComplete: onComplete});
    ;
  }).prototype = set_value_task.SetValueTask.prototype;
  dart.addTypeTests(set_value_task.SetValueTask);
  dart.setMethodSignature(set_value_task.SetValueTask, () => ({
    __proto__: dart.getMethods(set_value_task.SetValueTask.__proto__),
    computeValue: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(set_value_task.SetValueTask, "package:simple_animations/simple_animations/animation_task/set_value_task.dart");
  dart.setFieldSignature(set_value_task.SetValueTask, () => ({
    __proto__: dart.getFields(set_value_task.SetValueTask.__proto__),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(set_value_task.SetValueTask, ['toString']);
  const duration$0 = dart.privateName(sleep_task, "SleepTask.duration");
  sleep_task.SleepTask = class SleepTask extends animation_task.AnimationTask {
    get duration() {
      return this[duration$0];
    }
    set duration(value) {
      this[duration$0] = value;
    }
    computeValue(time) {
      let timePassed = time['-'](this.startedTime);
      if (dart.notNull(timePassed.inMilliseconds) >= dart.notNull(this.duration.inMilliseconds)) {
        this.completeTask();
      }
      return this.startedValue;
    }
    toString() {
      return "SleepAnimationTask(duration: " + dart.str(this.duration) + ")" + dart.str(super.toString());
    }
  };
  (sleep_task.SleepTask.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onStart = opts && 'onStart' in opts ? opts.onStart : null;
    let onComplete = opts && 'onComplete' in opts ? opts.onComplete : null;
    this[duration$0] = duration;
    if (!(duration != null)) dart.assertFailed("Please provide a 'duration'.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/sleep_task.dart", 14, 16, "duration != null");
    sleep_task.SleepTask.__proto__.new.call(this, {onStart: onStart, onComplete: onComplete});
    ;
  }).prototype = sleep_task.SleepTask.prototype;
  dart.addTypeTests(sleep_task.SleepTask);
  dart.setMethodSignature(sleep_task.SleepTask, () => ({
    __proto__: dart.getMethods(sleep_task.SleepTask.__proto__),
    computeValue: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(sleep_task.SleepTask, "package:simple_animations/simple_animations/animation_task/sleep_task.dart");
  dart.setFieldSignature(sleep_task.SleepTask, () => ({
    __proto__: dart.getFields(sleep_task.SleepTask.__proto__),
    duration: dart.fieldType(core.Duration)
  }));
  dart.defineExtensionMethods(sleep_task.SleepTask, ['toString']);
  const _lastIterationCompleteTime = dart.privateName(loop_task, "_lastIterationCompleteTime");
  const _currentIterationTask = dart.privateName(loop_task, "_currentIterationTask");
  const _iterationsPassed = dart.privateName(loop_task, "_iterationsPassed");
  const _createAnimationTaskForCurrentIteration = dart.privateName(loop_task, "_createAnimationTaskForCurrentIteration");
  const from$0 = dart.privateName(loop_task, "LoopTask.from");
  const to$0 = dart.privateName(loop_task, "LoopTask.to");
  const duration$1 = dart.privateName(loop_task, "LoopTask.duration");
  const iterations$ = dart.privateName(loop_task, "LoopTask.iterations");
  const startOnCurrentPosition$ = dart.privateName(loop_task, "LoopTask.startOnCurrentPosition");
  const mirror$ = dart.privateName(loop_task, "LoopTask.mirror");
  const onIterationCompleted$ = dart.privateName(loop_task, "LoopTask.onIterationCompleted");
  const curve$0 = dart.privateName(loop_task, "LoopTask.curve");
  loop_task.LoopTask = class LoopTask extends animation_task.AnimationTask {
    get from() {
      return this[from$0];
    }
    set from(value) {
      this[from$0] = value;
    }
    get to() {
      return this[to$0];
    }
    set to(value) {
      this[to$0] = value;
    }
    get duration() {
      return this[duration$1];
    }
    set duration(value) {
      this[duration$1] = value;
    }
    get iterations() {
      return this[iterations$];
    }
    set iterations(value) {
      this[iterations$] = value;
    }
    get startOnCurrentPosition() {
      return this[startOnCurrentPosition$];
    }
    set startOnCurrentPosition(value) {
      this[startOnCurrentPosition$] = value;
    }
    get mirror() {
      return this[mirror$];
    }
    set mirror(value) {
      this[mirror$] = value;
    }
    get onIterationCompleted() {
      return this[onIterationCompleted$];
    }
    set onIterationCompleted(value) {
      this[onIterationCompleted$] = value;
    }
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      this[curve$0] = value;
    }
    started(time, value) {
      this[_lastIterationCompleteTime] = time;
      return super.started(time, value);
    }
    computeValue(time) {
      if (this[_currentIterationTask] == null) {
        this[_createAnimationTaskForCurrentIteration](time);
      }
      let value = this[_currentIterationTask].computeValue(time);
      if (dart.test(this[_currentIterationTask].isCompleted())) {
        this.finishIteration(time);
      }
      return value;
    }
    [_createAnimationTaskForCurrentIteration](time) {
      let fromValue = this.from;
      let toValue = this.to;
      if (dart.test(this.startOnCurrentPosition) && this[_iterationsPassed] === 0) {
        fromValue = this.startedValue;
      }
      if (dart.test(this.mirror) && this[_iterationsPassed][$modulo](2) === 1) {
        let swapValue = toValue;
        toValue = fromValue;
        fromValue = swapValue;
      }
      this[_currentIterationTask] = new from_to_task.FromToTask.new({duration: this.duration, from: fromValue, to: toValue, curve: this.curve, durationBasedOnZeroToOneInterval: true});
      this[_currentIterationTask].started(this[_lastIterationCompleteTime], fromValue);
    }
    finishIteration(time) {
      if (this.onIterationCompleted != null) this.onIterationCompleted();
      this[_lastIterationCompleteTime] = time;
      this[_currentIterationTask].dispose();
      this[_currentIterationTask] = null;
      this[_iterationsPassed] = dart.notNull(this[_iterationsPassed]) + 1;
      if (this.iterations != null && this[_iterationsPassed] == this.iterations) {
        this.completeTask();
      }
    }
    toString() {
      return "LoopAnimationTask(from: " + dart.str(this.from) + ", to: " + dart.str(this.to) + ", iterationDuration: " + dart.str(this.duration) + ", iterations: " + dart.str(this.iterations) + ", mirror: " + dart.str(this.mirror) + ", curve: " + dart.str(this.curve) + ")" + dart.str(super.toString());
    }
  };
  (loop_task.LoopTask.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let iterations = opts && 'iterations' in opts ? opts.iterations : null;
    let startOnCurrentPosition = opts && 'startOnCurrentPosition' in opts ? opts.startOnCurrentPosition : false;
    let mirror = opts && 'mirror' in opts ? opts.mirror : false;
    let onIterationCompleted = opts && 'onIterationCompleted' in opts ? opts.onIterationCompleted : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    let onStart = opts && 'onStart' in opts ? opts.onStart : null;
    let onComplete = opts && 'onComplete' in opts ? opts.onComplete : null;
    this[_lastIterationCompleteTime] = null;
    this[_currentIterationTask] = null;
    this[_iterationsPassed] = 0;
    this[duration$1] = duration;
    this[from$0] = from;
    this[to$0] = to;
    this[iterations$] = iterations;
    this[startOnCurrentPosition$] = startOnCurrentPosition;
    this[mirror$] = mirror;
    this[onIterationCompleted$] = onIterationCompleted;
    this[curve$0] = curve;
    if (!(duration != null)) dart.assertFailed("Please provide a 'duration'.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/loop_task.dart", 63, 16, "duration != null");
    if (!(from != null)) dart.assertFailed("Please provide a 'from' value.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/loop_task.dart", 64, 16, "from != null");
    if (!(to != null)) dart.assertFailed("Please provide a 'to' value.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/loop_task.dart", 65, 16, "to != null");
    loop_task.LoopTask.__proto__.new.call(this, {onStart: onStart, onComplete: onComplete});
    ;
  }).prototype = loop_task.LoopTask.prototype;
  dart.addTypeTests(loop_task.LoopTask);
  dart.setMethodSignature(loop_task.LoopTask, () => ({
    __proto__: dart.getMethods(loop_task.LoopTask.__proto__),
    computeValue: dart.fnType(core.double, [core.Duration]),
    [_createAnimationTaskForCurrentIteration]: dart.fnType(dart.void, [core.Duration]),
    finishIteration: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setLibraryUri(loop_task.LoopTask, "package:simple_animations/simple_animations/animation_task/loop_task.dart");
  dart.setFieldSignature(loop_task.LoopTask, () => ({
    __proto__: dart.getFields(loop_task.LoopTask.__proto__),
    from: dart.fieldType(core.double),
    to: dart.fieldType(core.double),
    duration: dart.fieldType(core.Duration),
    iterations: dart.fieldType(core.int),
    startOnCurrentPosition: dart.fieldType(core.bool),
    mirror: dart.fieldType(core.bool),
    onIterationCompleted: dart.fieldType(dart.fnType(dart.dynamic, [])),
    curve: dart.fieldType(curves.Curve),
    [_lastIterationCompleteTime]: dart.fieldType(core.Duration),
    [_currentIterationTask]: dart.fieldType(from_to_task.FromToTask),
    [_iterationsPassed]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(loop_task.LoopTask, ['toString']);
  const predicate$ = dart.privateName(conditional_task, "ConditionalTask.predicate");
  conditional_task.ConditionalTask = class ConditionalTask extends animation_task.AnimationTask {
    get predicate() {
      return this[predicate$];
    }
    set predicate(value) {
      this[predicate$] = value;
    }
    computeValue(time) {
      if (dart.test(this.predicate())) {
        this.completeTask();
      }
      return this.startedValue;
    }
    toString() {
      return "ConditionalAnimationTask()" + dart.str(super.toString());
    }
  };
  (conditional_task.ConditionalTask.new = function(opts) {
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    let onStart = opts && 'onStart' in opts ? opts.onStart : null;
    let onComplete = opts && 'onComplete' in opts ? opts.onComplete : null;
    this[predicate$] = predicate;
    if (!(predicate != null)) dart.assertFailed("Please provide a 'predicate'.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_task/conditional_task.dart", 17, 16, "predicate != null");
    conditional_task.ConditionalTask.__proto__.new.call(this, {onStart: onStart, onComplete: onComplete});
    ;
  }).prototype = conditional_task.ConditionalTask.prototype;
  dart.addTypeTests(conditional_task.ConditionalTask);
  dart.setMethodSignature(conditional_task.ConditionalTask, () => ({
    __proto__: dart.getMethods(conditional_task.ConditionalTask.__proto__),
    computeValue: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(conditional_task.ConditionalTask, "package:simple_animations/simple_animations/animation_task/conditional_task.dart");
  dart.setFieldSignature(conditional_task.ConditionalTask, () => ({
    __proto__: dart.getFields(conditional_task.ConditionalTask.__proto__),
    predicate: dart.fieldType(dart.fnType(core.bool, []))
  }));
  dart.defineExtensionMethods(conditional_task.ConditionalTask, ['toString']);
  const _ticker = dart.privateName(animation_controller_mixin, "_ticker");
  const _is_AnimationControllerMixin_default = Symbol('_is_AnimationControllerMixin_default');
  const controller = dart.privateName(animation_controller_mixin, "AnimationControllerMixin.controller");
  animation_controller_mixin.AnimationControllerMixin$ = dart.generic(T => {
    class AnimationControllerMixin extends framework.State$(T) {}
    AnimationControllerMixin[dart.mixinOn] = State => class AnimationControllerMixin extends State {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = value;
      }
      initState() {
        this.controller.configureVsync(this);
        this.controller.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, VoidToNull())), VoidTovoid()));
        super.initState();
      }
      createTicker(onTick) {
        if (!dart.test(dart.fn(() => {
          if (this[_ticker] == null) return true;
          dart.throw(assertions.FlutterError.new(dart.str(this[$runtimeType]) + " is a SingleTickerProviderStateMixin but multiple tickers were created.\n" + "A SingleTickerProviderStateMixin can only be used as a TickerProvider once. If a " + "State is used for multiple AnimationController objects, or if it is passed to other " + "objects and those objects might use it more than one time in total, then instead of " + "mixing in a SingleTickerProviderStateMixin, use a regular TickerProviderStateMixin."));
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/simple_animations/simple_animations/animation_controller_x/animation_controller_mixin.dart", 41, 12, "() {\r\n      if (_ticker == null) return true;\r\n      throw FlutterError(\r\n          '$runtimeType is a SingleTickerProviderStateMixin but multiple tickers were created.\\n'\r\n          'A SingleTickerProviderStateMixin can only be used as a TickerProvider once. If a '\r\n          'State is used for multiple AnimationController objects, or if it is passed to other '\r\n          'objects and those objects might use it more than one time in total, then instead of '\r\n          'mixing in a SingleTickerProviderStateMixin, use a regular TickerProviderStateMixin.');\r\n    }()");
        this[_ticker] = new ticker.Ticker.new(onTick, {debugLabel: "created by " + dart.str(this)});
        return this[_ticker];
      }
      dispose() {
        this.controller.dispose();
        if (!dart.test(dart.fn(() => {
          if (this[_ticker] == null || !dart.test(this[_ticker].isActive)) return true;
          dart.throw(assertions.FlutterError.new(dart.str(this) + " was disposed with an active Ticker.\n" + dart.str(this[$runtimeType]) + " created a Ticker via its SingleTickerProviderStateMixin, but at the time " + "dispose() was called on the mixin, that Ticker was still active. The Ticker must " + "be disposed before calling super.dispose(). Tickers used by AnimationControllers " + "should be disposed by calling dispose() on the AnimationController itself. " + "Otherwise, the ticker will leak.\n" + "The offending ticker was: " + dart.str(this[_ticker].toString({debugIncludeStack: true}))));
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/simple_animations/simple_animations/animation_controller_x/animation_controller_mixin.dart", 61, 12, "() {\r\n      if (_ticker == null || !_ticker.isActive) return true;\r\n      throw FlutterError('$this was disposed with an active Ticker.\\n'\r\n          '$runtimeType created a Ticker via its SingleTickerProviderStateMixin, but at the time '\r\n          'dispose() was called on the mixin, that Ticker was still active. The Ticker must '\r\n          'be disposed before calling super.dispose(). Tickers used by AnimationControllers '\r\n          'should be disposed by calling dispose() on the AnimationController itself. '\r\n          'Otherwise, the ticker will leak.\\n'\r\n          'The offending ticker was: ${_ticker.toString(debugIncludeStack: true)}');\r\n    }()");
        super.dispose();
      }
      didChangeDependencies() {
        if (this[_ticker] != null) this[_ticker].muted = !dart.test(ticker_provider.TickerMode.of(this.context));
        super.didChangeDependencies();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        let tickerDescription = null;
        if (this[_ticker] != null) {
          if (dart.test(this[_ticker].isActive) && dart.test(this[_ticker].muted))
            tickerDescription = "active but muted";
          else if (dart.test(this[_ticker].isActive))
            tickerDescription = "active";
          else if (dart.test(this[_ticker].muted))
            tickerDescription = "inactive and muted";
          else
            tickerDescription = "inactive";
        }
        properties.add(new (DiagnosticsPropertyOfTicker()).new("ticker", this[_ticker], {description: tickerDescription, showSeparator: false, defaultValue: null}));
      }
    };
    (AnimationControllerMixin[dart.mixinNew] = function() {
      this[_ticker] = null;
      this[controller] = new animation_controller_x.AnimationControllerX.new();
    }).prototype = AnimationControllerMixin.prototype;
    dart.addTypeTests(AnimationControllerMixin);
    AnimationControllerMixin.prototype[_is_AnimationControllerMixin_default] = true;
    AnimationControllerMixin[dart.implements] = () => [ticker.TickerProvider, framework.State$(T)];
    dart.setMethodSignature(AnimationControllerMixin, () => ({
      __proto__: dart.getMethods(AnimationControllerMixin.__proto__),
      createTicker: dart.fnType(ticker.Ticker, [dart.fnType(dart.void, [core.Duration])])
    }));
    dart.setLibraryUri(AnimationControllerMixin, "package:simple_animations/simple_animations/animation_controller_x/animation_controller_mixin.dart");
    dart.setFieldSignature(AnimationControllerMixin, () => ({
      __proto__: dart.getFields(AnimationControllerMixin.__proto__),
      [_ticker]: dart.fieldType(ticker.Ticker),
      controller: dart.fieldType(animation_controller_x.AnimationControllerX)
    }));
    return AnimationControllerMixin;
  });
  animation_controller_mixin.AnimationControllerMixin = animation_controller_mixin.AnimationControllerMixin$();
  dart.addTypeTests(animation_controller_mixin.AnimationControllerMixin, _is_AnimationControllerMixin_default);
  const _ticker$ = dart.privateName(animation_controller_x, "_ticker");
  const _currentTask = dart.privateName(animation_controller_x, "_currentTask");
  const _tasks = dart.privateName(animation_controller_x, "_tasks");
  const _status = dart.privateName(animation_controller_x, "_status");
  const _value = dart.privateName(animation_controller_x, "_value");
  const _tick = dart.privateName(animation_controller_x, "_tick");
  const _createNewTask = dart.privateName(animation_controller_x, "_createNewTask");
  const _computeValue = dart.privateName(animation_controller_x, "_computeValue");
  const _updateStatusOnNewValue = dart.privateName(animation_controller_x, "_updateStatusOnNewValue");
  const _updateStatusOnTaskComplete = dart.privateName(animation_controller_x, "_updateStatusOnTaskComplete");
  const onStatusChange$ = dart.privateName(animation_controller_x, "AnimationControllerX.onStatusChange");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
  (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
  animation_controller_x.AnimationControllerX = class AnimationControllerX extends Animation_AnimationLocalStatusListenersMixin$36 {
    get onStatusChange() {
      return this[onStatusChange$];
    }
    set onStatusChange(value) {
      this[onStatusChange$] = value;
    }
    configureVsync(vsync) {
      if (!(this[_ticker$] == null)) dart.assertFailed("Vsync is already configured.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_controller_x/animation_controller_x.dart", 56, 12, "_ticker == null");
      if (!(vsync != null)) dart.assertFailed("Expected to provide a 'vsync'.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_controller_x/animation_controller_x.dart", 57, 12, "vsync != null");
      this[_ticker$] = vsync.createTicker(dart.bind(this, _tick));
      this[_ticker$].start();
    }
    [_tick](time) {
      if (dart.test(this[_tasks][$isEmpty]) && this[_currentTask] == null) {
        return;
      }
      if (this[_currentTask] == null) {
        this[_createNewTask](time);
      }
      this[_computeValue](time);
      if (dart.test(this[_currentTask].isCompleted())) {
        this.completeCurrentTask();
      }
    }
    [_createNewTask](time) {
      this[_currentTask] = this[_tasks][$removeAt](0);
      this[_currentTask].started(time, this[_value]);
      if (this.onStatusChange != null) this.onStatusChange(animation_controller_x.AnimationControllerXStatus.startTask, this[_currentTask]);
    }
    [_computeValue](time) {
      let newValue = this[_currentTask].computeValue(time);
      if (!(newValue != null)) dart.assertFailed("Value passed from 'computeValue' method must be non null.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_controller_x/animation_controller_x.dart", 87, 12, "newValue != null");
      if (newValue != this[_value]) {
        this[_updateStatusOnNewValue](this[_value], newValue);
        this[_value] = newValue;
        this.notifyListeners();
      }
    }
    completeCurrentTask() {
      this[_updateStatusOnTaskComplete]();
      if (this.onStatusChange != null) this.onStatusChange(animation_controller_x.AnimationControllerXStatus.completeTask, this[_currentTask]);
      this[_currentTask].dispose();
      this[_currentTask] = null;
    }
    dispose() {
      this[_ticker$].dispose();
      super.dispose();
    }
    get status() {
      return this[_status];
    }
    get value() {
      return this[_value];
    }
    addTask(task) {
      this[_tasks][$add](task);
    }
    addTasks(tasks) {
      tasks[$forEach](dart.fn(task => this.addTask(task), AnimationTaskTovoid()));
    }
    get tasks() {
      return (() => {
        let t0 = JSArrayOfAnimationTask().of([]);
        if (this[_currentTask] != null) t0[$add](this[_currentTask]);
        for (let t1 of this[_tasks])
          t0[$add](t1);
        return t0;
      })();
    }
    stop() {
      this.reset();
    }
    forceCompleteCurrentTask() {
      if (this[_currentTask] != null) {
        this[_currentTask].completeTask();
      } else if (dart.test(this[_tasks][$isNotEmpty])) {
        this[_tasks][$removeAt](0);
      }
    }
    reset(tasksToExecuteAfterReset = null) {
      this[_tasks][$clear]();
      if (this[_currentTask] != null) {
        this[_currentTask].dispose();
        this[_currentTask] = null;
      }
      if (tasksToExecuteAfterReset != null) {
        this.addTasks(tasksToExecuteAfterReset);
      }
    }
    [_updateStatusOnNewValue](oldValue, newValue) {
      if (!dart.equals(this[_status], animation.AnimationStatus.forward) && dart.notNull(oldValue) < dart.notNull(newValue)) {
        this[_status] = animation.AnimationStatus.forward;
        this.notifyStatusListeners(this[_status]);
      }
      if (!dart.equals(this[_status], animation.AnimationStatus.reverse) && dart.notNull(oldValue) > dart.notNull(newValue)) {
        this[_status] = animation.AnimationStatus.reverse;
        this.notifyStatusListeners(this[_status]);
      }
    }
    [_updateStatusOnTaskComplete]() {
      if (!dart.equals(this[_status], animation.AnimationStatus.completed) && this[_value] === 1.0) {
        this[_status] = animation.AnimationStatus.completed;
        this.notifyStatusListeners(this[_status]);
      }
      if (!dart.equals(this[_status], animation.AnimationStatus.dismissed) && this[_value] === 0.0) {
        this[_status] = animation.AnimationStatus.dismissed;
        this.notifyStatusListeners(this[_status]);
      }
    }
  };
  (animation_controller_x.AnimationControllerX.new = function(opts) {
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let onStatusChange = opts && 'onStatusChange' in opts ? opts.onStatusChange : null;
    this[_ticker$] = null;
    this[_currentTask] = null;
    this[_tasks] = JSArrayOfAnimationTask().of([]);
    this[_status] = animation.AnimationStatus.dismissed;
    this[_value] = 0.0;
    this[onStatusChange$] = onStatusChange;
    animation_controller_x.AnimationControllerX.__proto__.new.call(this);
    if (vsync != null) {
      this.configureVsync(vsync);
    }
  }).prototype = animation_controller_x.AnimationControllerX.prototype;
  dart.addTypeTests(animation_controller_x.AnimationControllerX);
  dart.setMethodSignature(animation_controller_x.AnimationControllerX, () => ({
    __proto__: dart.getMethods(animation_controller_x.AnimationControllerX.__proto__),
    configureVsync: dart.fnType(dart.void, [ticker.TickerProvider]),
    [_tick]: dart.fnType(dart.void, [core.Duration]),
    [_createNewTask]: dart.fnType(dart.void, [core.Duration]),
    [_computeValue]: dart.fnType(dart.void, [core.Duration]),
    completeCurrentTask: dart.fnType(dart.void, []),
    addTask: dart.fnType(dart.void, [animation_task.AnimationTask]),
    addTasks: dart.fnType(dart.void, [core.List$(animation_task.AnimationTask)]),
    stop: dart.fnType(dart.void, []),
    forceCompleteCurrentTask: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, [], [core.List$(animation_task.AnimationTask)]),
    [_updateStatusOnNewValue]: dart.fnType(dart.void, [core.double, core.double]),
    [_updateStatusOnTaskComplete]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animation_controller_x.AnimationControllerX, () => ({
    __proto__: dart.getGetters(animation_controller_x.AnimationControllerX.__proto__),
    status: animation.AnimationStatus,
    value: core.double,
    tasks: core.List$(animation_task.AnimationTask)
  }));
  dart.setLibraryUri(animation_controller_x.AnimationControllerX, "package:simple_animations/simple_animations/animation_controller_x/animation_controller_x.dart");
  dart.setFieldSignature(animation_controller_x.AnimationControllerX, () => ({
    __proto__: dart.getFields(animation_controller_x.AnimationControllerX.__proto__),
    [_ticker$]: dart.fieldType(ticker.Ticker),
    onStatusChange: dart.fieldType(dart.fnType(dart.void, [animation_controller_x.AnimationControllerXStatus, animation_task.AnimationTask])),
    [_currentTask]: dart.fieldType(animation_task.AnimationTask),
    [_tasks]: dart.fieldType(core.List$(animation_task.AnimationTask)),
    [_status]: dart.fieldType(animation.AnimationStatus),
    [_value]: dart.fieldType(core.double)
  }));
  const _name$ = dart.privateName(animation_controller_x, "_name");
  let C1;
  let C2;
  let C3;
  animation_controller_x.AnimationControllerXStatus = class AnimationControllerXStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animation_controller_x.AnimationControllerXStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animation_controller_x.AnimationControllerXStatus.prototype;
  dart.addTypeTests(animation_controller_x.AnimationControllerXStatus);
  dart.setLibraryUri(animation_controller_x.AnimationControllerXStatus, "package:simple_animations/simple_animations/animation_controller_x/animation_controller_x.dart");
  dart.setFieldSignature(animation_controller_x.AnimationControllerXStatus, () => ({
    __proto__: dart.getFields(animation_controller_x.AnimationControllerXStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller_x.AnimationControllerXStatus, ['toString']);
  animation_controller_x.AnimationControllerXStatus.startTask = C1 || CT.C1;
  animation_controller_x.AnimationControllerXStatus.completeTask = C2 || CT.C2;
  animation_controller_x.AnimationControllerXStatus.values = C3 || CT.C3;
  dart.trackLibraries("packages/simple_animations/simple_animations", {
    "package:simple_animations/simple_animations/animation_task/from_to_task.dart": from_to_task,
    "package:simple_animations/simple_animations/animation_task/animation_task.dart": animation_task,
    "package:simple_animations/simple_animations.dart": simple_animations,
    "package:simple_animations/simple_animations/animation_task/set_value_task.dart": set_value_task,
    "package:simple_animations/simple_animations/animation_task/sleep_task.dart": sleep_task,
    "package:simple_animations/simple_animations/animation_task/loop_task.dart": loop_task,
    "package:simple_animations/simple_animations/animation_task/conditional_task.dart": conditional_task,
    "package:simple_animations/simple_animations/animation_controller_x/animation_controller_mixin.dart": animation_controller_mixin,
    "package:simple_animations/simple_animations/animation_controller_x/animation_controller_x.dart": animation_controller_x
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["simple_animations/animation_task/animation_task.dart","simple_animations/animation_task/from_to_task.dart","simple_animations/animation_task/set_value_task.dart","simple_animations/animation_task/sleep_task.dart","simple_animations/animation_task/loop_task.dart","simple_animations/animation_task/conditional_task.dart","simple_animations/animation_controller_x/animation_controller_mixin.dart","simple_animations/animation_controller_x/animation_controller_x.dart"],"names":[],"mappings":"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","file":"simple_animations.ddc.js"}');
  // Exports:
  return {
    simple_animations__animation_task__from_to_task: from_to_task,
    simple_animations__animation_task__animation_task: animation_task,
    simple_animations: simple_animations,
    simple_animations__animation_task__set_value_task: set_value_task,
    simple_animations__animation_task__sleep_task: sleep_task,
    simple_animations__animation_task__loop_task: loop_task,
    simple_animations__animation_task__conditional_task: conditional_task,
    simple_animations__animation_controller_x__animation_controller_mixin: animation_controller_mixin,
    simple_animations__animation_controller_x__animation_controller_x: animation_controller_x
  };
});

//# sourceMappingURL=simple_animations.ddc.js.map
