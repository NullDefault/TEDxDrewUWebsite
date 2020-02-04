define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animation_progress = Object.create(dart.library);
  const CT = Object.create(null);
  const duration$ = dart.privateName(animation_progress, "AnimationProgress.duration");
  const startTime$ = dart.privateName(animation_progress, "AnimationProgress.startTime");
  animation_progress.AnimationProgress = class AnimationProgress extends core.Object {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get startTime() {
      return this[startTime$];
    }
    set startTime(value) {
      super.startTime = value;
    }
    progress(time) {
      return math.max(core.double, 0.0, math.min(core.double, dart.notNull(time['-'](this.startTime).inMilliseconds) / dart.notNull(this.duration.inMilliseconds), 1.0));
    }
  };
  (animation_progress.AnimationProgress.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : null;
    this[duration$] = duration;
    this[startTime$] = startTime;
    if (!(duration != null)) dart.assertFailed("Please specify an animation duration.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_progress.dart", 15, 16, "duration != null");
    if (!(startTime != null)) dart.assertFailed("Please specify a start time of the animation.", "org-dartlang-app:///packages/simple_animations/simple_animations/animation_progress.dart", 17, 13, "startTime != null");
    ;
  }).prototype = animation_progress.AnimationProgress.prototype;
  dart.addTypeTests(animation_progress.AnimationProgress);
  dart.setMethodSignature(animation_progress.AnimationProgress, () => ({
    __proto__: dart.getMethods(animation_progress.AnimationProgress.__proto__),
    progress: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(animation_progress.AnimationProgress, "package:simple_animations/simple_animations/animation_progress.dart");
  dart.setFieldSignature(animation_progress.AnimationProgress, () => ({
    __proto__: dart.getFields(animation_progress.AnimationProgress.__proto__),
    duration: dart.finalFieldType(core.Duration),
    startTime: dart.finalFieldType(core.Duration)
  }));
  dart.trackLibraries("packages/simple_animations/simple_animations/animation_progress", {
    "package:simple_animations/simple_animations/animation_progress.dart": animation_progress
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation_progress.dart"],"names":[],"mappings":";;;;;;;;;;;IASiB;;;;;;IACA;;;;;;aAWU;AAAS,mCAAI,KAClC,sBAAsC,aAAjC,AAAK,AAAa,IAAd,MAAG,+CAA4B,AAAS,+BAAgB;IAAK;;;QATlD;QAAe;IAAf;IAAe;UAC1B,AAAS,QAAD,IAAI,yBAAM;UAErB,AAAU,SAAD,IAAI,yBAAM;;EAAgD","file":"animation_progress.ddc.js"}');
  // Exports:
  return {
    simple_animations__animation_progress: animation_progress
  };
});

//# sourceMappingURL=animation_progress.ddc.js.map
