define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const light = Object.create(dart.library);
  const shine_shadow = Object.create(dart.library);
  const flutter_shine = Object.create(dart.library);
  const shine = Object.create(dart.library);
  const controller = Object.create(dart.library);
  const config = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let PointOfnum = () => (PointOfnum = dart.constFn(math.Point$(core.num)))();
  let ListOfBoxShadow = () => (ListOfBoxShadow = dart.constFn(core.List$(box_shadow.BoxShadow)))();
  let intToBoxShadow = () => (intToBoxShadow = dart.constFn(dart.fnType(box_shadow.BoxShadow, [core.int])))();
  let FutureBuilderOfShineShadow = () => (FutureBuilderOfShineShadow = dart.constFn(async$.FutureBuilder$(shine_shadow.ShineShadow)))();
  let AsyncSnapshotOfShineShadow = () => (AsyncSnapshotOfShineShadow = dart.constFn(async$.AsyncSnapshot$(shine_shadow.ShineShadow)))();
  let BuildContextAndAsyncSnapshotOfShineShadowToWidget = () => (BuildContextAndAsyncSnapshotOfShineShadowToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AsyncSnapshotOfShineShadow()])))();
  let ListOfShadow = () => (ListOfShadow = dart.constFn(core.List$(ui.Shadow)))();
  let intToShadow = () => (intToShadow = dart.constFn(dart.fnType(ui.Shadow, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: PointOfnum().prototype,
        [Point_y]: -100,
        [Point_x]: -100
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: config.Config.prototype,
        [Config_shadowColor]: C2 || CT.C2,
        [Config_blurPow]: 1,
        [Config_blur]: 35,
        [Config_offsetPow]: 2,
        [Config_offset]: 0.5,
        [Config_opacityPow]: 1,
        [Config_opacity]: 0.3,
        [Config_numSteps]: 10
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: light.Light.prototype,
        [intensity$]: 1,
        [position$]: C0 || CT.C0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 36,
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
        [_Location_column]: 12,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_shine/src/shine.dart"
      });
    }
  });
  const Point_y = dart.privateName(math, "Point.y");
  const Point_x = dart.privateName(math, "Point.x");
  let C0;
  const position$ = dart.privateName(light, "Light.position");
  const intensity$ = dart.privateName(light, "Light.intensity");
  light.Light = class Light extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get intensity() {
      return this[intensity$];
    }
    set intensity(value) {
      super.intensity = value;
    }
  };
  (light.Light.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : C0 || CT.C0;
    let intensity = opts && 'intensity' in opts ? opts.intensity : 1;
    this[position$] = position;
    this[intensity$] = intensity;
    ;
  }).prototype = light.Light.prototype;
  dart.addTypeTests(light.Light);
  dart.setLibraryUri(light.Light, "package:flutter_shine/src/light.dart");
  dart.setFieldSignature(light.Light, () => ({
    __proto__: dart.getFields(light.Light.__proto__),
    position: dart.finalFieldType(math.Point$(core.num)),
    intensity: dart.finalFieldType(core.double)
  }));
  const _shadows = dart.privateName(shine_shadow, "_shadows");
  shine_shadow.ShineShadow = class ShineShadow extends core.Object {
    get shadows() {
      return this[_shadows];
    }
    set shadows(shadows) {
      this[_shadows] = shadows;
    }
    get boxShadows() {
      return ListOfBoxShadow().generate(this[_shadows][$length], dart.fn(index => new box_shadow.BoxShadow.new({blurRadius: this[_shadows][$_get](index).blurRadius, color: this[_shadows][$_get](index).color, offset: this[_shadows][$_get](index).offset}), intToBoxShadow()));
    }
  };
  (shine_shadow.ShineShadow.new = function() {
    this[_shadows] = null;
    ;
  }).prototype = shine_shadow.ShineShadow.prototype;
  dart.addTypeTests(shine_shadow.ShineShadow);
  dart.setGetterSignature(shine_shadow.ShineShadow, () => ({
    __proto__: dart.getGetters(shine_shadow.ShineShadow.__proto__),
    shadows: core.List$(ui.Shadow),
    boxShadows: core.List$(box_shadow.BoxShadow)
  }));
  dart.setSetterSignature(shine_shadow.ShineShadow, () => ({
    __proto__: dart.getSetters(shine_shadow.ShineShadow.__proto__),
    shadows: core.List$(ui.Shadow)
  }));
  dart.setLibraryUri(shine_shadow.ShineShadow, "package:flutter_shine/src/shine_shadow.dart");
  dart.setFieldSignature(shine_shadow.ShineShadow, () => ({
    __proto__: dart.getFields(shine_shadow.ShineShadow.__proto__),
    [_shadows]: dart.fieldType(core.List$(ui.Shadow))
  }));
  const Color_value = dart.privateName(ui, "Color.value");
  let C2;
  const Config_shadowColor = dart.privateName(config, "Config.shadowColor");
  const Config_blurPow = dart.privateName(config, "Config.blurPow");
  const Config_blur = dart.privateName(config, "Config.blur");
  const Config_offsetPow = dart.privateName(config, "Config.offsetPow");
  const Config_offset = dart.privateName(config, "Config.offset");
  const Config_opacityPow = dart.privateName(config, "Config.opacityPow");
  const Config_opacity = dart.privateName(config, "Config.opacity");
  const Config_numSteps = dart.privateName(config, "Config.numSteps");
  let C1;
  let C3;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C5;
  let C4;
  const config$ = dart.privateName(shine, "FlutterShine.config");
  const light$ = dart.privateName(shine, "FlutterShine.light");
  const builder$ = dart.privateName(shine, "FlutterShine.builder");
  shine.FlutterShine = class FlutterShine extends framework.StatelessWidget {
    get config() {
      return this[config$];
    }
    set config(value) {
      super.config = value;
    }
    get light() {
      return this[light$];
    }
    set light(value) {
      super.light = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    build(context) {
      return new (FutureBuilderOfShineShadow()).new({future: controller.Controller.generateLongShadow(this.light, this.config), builder: dart.fn((context, asyncSnapshot) => {
          let t0;
          return this.builder(context, (t0 = asyncSnapshot, t0 == null ? null : t0.data));
        }, BuildContextAndAsyncSnapshotOfShineShadowToWidget()), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (shine.FlutterShine.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let config = opts && 'config' in opts ? opts.config : C1 || CT.C1;
    let light = opts && 'light' in opts ? opts.light : C3 || CT.C3;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[config$] = config;
    this[light$] = light;
    this[builder$] = builder;
    if (!(builder != null)) dart.assertFailed("Widget Builder must be not null", "org-dartlang-app:///packages/flutter_shine/src/shine.dart", 25, 16, "builder != null");
    shine.FlutterShine.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shine.FlutterShine.prototype;
  dart.addTypeTests(shine.FlutterShine);
  dart.setMethodSignature(shine.FlutterShine, () => ({
    __proto__: dart.getMethods(shine.FlutterShine.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shine.FlutterShine, "package:flutter_shine/src/shine.dart");
  dart.setFieldSignature(shine.FlutterShine, () => ({
    __proto__: dart.getFields(shine.FlutterShine.__proto__),
    config: dart.finalFieldType(config.Config),
    light: dart.finalFieldType(light.Light),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, shine_shadow.ShineShadow]))
  }));
  controller.Controller = class Controller extends core.Object {
    static generateLongShadow(light, config) {
      return async.async(shine_shadow.ShineShadow, function* generateLongShadow() {
        let t0;
        let distance = math.sqrt(dart.notNull(light.position.x) * dart.notNull(light.position.x) + dart.notNull(light.position.y) * dart.notNull(light.position.y));
        distance = math.max(core.double, 32.0, distance);
        let shadows = ListOfShadow().generate(config.numSteps, dart.fn(index => {
          let ratio = dart.notNull(index) / dart.notNull(config.numSteps);
          let ratioOpacity = math.pow(ratio, config.opacityPow);
          let ratioOffset = math.pow(ratio, config.offsetPow);
          let ratioBlur = math.pow(ratio, config.blurPow);
          let opacity = dart.notNull(light.intensity) * math.max(core.num, 0, dart.notNull(config.opacity) * (1.0 - ratioOpacity));
          let offsetX = -dart.notNull(config.offset) * dart.notNull(light.position.x) * ratioOffset;
          let offsetY = -dart.notNull(config.offset) * dart.notNull(light.position.y) * ratioOffset;
          let blurRadius = distance * dart.notNull(config.blur) * ratioBlur / 512;
          return controller.Controller._getShadow(config.shadowColor, opacity, offsetX, offsetY, blurRadius);
        }, intToShadow()));
        t0 = new shine_shadow.ShineShadow.new();
        t0.shadows = shadows;
        return t0;
      });
    }
    static _getShadow(shadowRGB, opacity, offsetX, offsetY, blurRadius) {
      return new ui.Shadow.new({blurRadius: blurRadius, color: shadowRGB.withOpacity(opacity), offset: new ui.Offset.new(offsetX, offsetY)});
    }
  };
  (controller.Controller.new = function() {
    ;
  }).prototype = controller.Controller.prototype;
  dart.addTypeTests(controller.Controller);
  dart.setLibraryUri(controller.Controller, "package:flutter_shine/src/controller.dart");
  config.Config = class Config extends core.Object {
    get numSteps() {
      return this[numSteps$];
    }
    set numSteps(value) {
      super.numSteps = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get opacityPow() {
      return this[opacityPow$];
    }
    set opacityPow(value) {
      super.opacityPow = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get offsetPow() {
      return this[offsetPow$];
    }
    set offsetPow(value) {
      super.offsetPow = value;
    }
    get blur() {
      return this[blur$];
    }
    set blur(value) {
      super.blur = value;
    }
    get blurPow() {
      return this[blurPow$];
    }
    set blurPow(value) {
      super.blurPow = value;
    }
    get shadowColor() {
      return this[shadowColor$];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let numSteps = opts && 'numSteps' in opts ? opts.numSteps : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let opacityPow = opts && 'opacityPow' in opts ? opts.opacityPow : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let offsetPow = opts && 'offsetPow' in opts ? opts.offsetPow : null;
      let blur = opts && 'blur' in opts ? opts.blur : null;
      let blurPow = opts && 'blurPow' in opts ? opts.blurPow : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      return new config.Config.new({numSteps: (t0 = numSteps, t0 == null ? this.numSteps : t0), opacity: (t0$ = opacity, t0$ == null ? this.opacity : t0$), opacityPow: (t0$0 = opacityPow, t0$0 == null ? this.opacityPow : t0$0), offset: (t0$1 = offset, t0$1 == null ? this.offset : t0$1), offsetPow: (t0$2 = offsetPow, t0$2 == null ? this.offsetPow : t0$2), blur: (t0$3 = blur, t0$3 == null ? this.blur : t0$3), blurPow: (t0$4 = blurPow, t0$4 == null ? this.blurPow : t0$4), shadowColor: (t0$5 = shadowColor, t0$5 == null ? this.shadowColor : t0$5)});
    }
  };
  (config.Config.new = function(opts) {
    let numSteps = opts && 'numSteps' in opts ? opts.numSteps : 10;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 0.3;
    let opacityPow = opts && 'opacityPow' in opts ? opts.opacityPow : 1;
    let offset = opts && 'offset' in opts ? opts.offset : 0.5;
    let offsetPow = opts && 'offsetPow' in opts ? opts.offsetPow : 2;
    let blur = opts && 'blur' in opts ? opts.blur : 35;
    let blurPow = opts && 'blurPow' in opts ? opts.blurPow : 1;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C2 || CT.C2;
    this[numSteps$] = numSteps;
    this[opacity$] = opacity;
    this[opacityPow$] = opacityPow;
    this[offset$] = offset;
    this[offsetPow$] = offsetPow;
    this[blur$] = blur;
    this[blurPow$] = blurPow;
    this[shadowColor$] = shadowColor;
    if (!(dart.notNull(numSteps) > 0.0 && dart.notNull(numSteps) <= 64.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 47, 16, "numSteps > 0.0 && numSteps <= 64.0");
    if (!(dart.notNull(opacity) > 0.0 && dart.notNull(opacity) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 48, 16, "opacity > 0.0 && opacity <= 1.0");
    if (!(dart.notNull(opacityPow) > 0.0 && dart.notNull(opacityPow) <= 4.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 49, 16, "opacityPow > 0.0 && opacityPow <= 4.0");
    if (!(dart.notNull(offset) > 0.0 && dart.notNull(offset) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 50, 16, "offset > 0.0 && offset <= 1.0");
    if (!(dart.notNull(offsetPow) > 0.0 && dart.notNull(offsetPow) <= 4.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 51, 16, "offsetPow > 0.0 && offsetPow <= 4.0");
    if (!(dart.notNull(blur) > 0.0 && dart.notNull(blur) <= 128.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 52, 16, "blur > 0.0 && blur <= 128.0");
    if (!(dart.notNull(blurPow) > 0.0 && dart.notNull(blurPow) <= 4.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_shine/src/config.dart", 53, 16, "blurPow > 0.0 && blurPow <= 4.0");
    ;
  }).prototype = config.Config.prototype;
  dart.addTypeTests(config.Config);
  const numSteps$ = Config_numSteps;
  const opacity$ = Config_opacity;
  const opacityPow$ = Config_opacityPow;
  const offset$ = Config_offset;
  const offsetPow$ = Config_offsetPow;
  const blur$ = Config_blur;
  const blurPow$ = Config_blurPow;
  const shadowColor$ = Config_shadowColor;
  dart.setMethodSignature(config.Config, () => ({
    __proto__: dart.getMethods(config.Config.__proto__),
    copyWith: dart.fnType(config.Config, [], {blur: core.double, blurPow: core.double, numSteps: core.int, offset: core.double, offsetPow: core.double, opacity: core.double, opacityPow: core.double, shadowColor: ui.Color}, {})
  }));
  dart.setLibraryUri(config.Config, "package:flutter_shine/src/config.dart");
  dart.setFieldSignature(config.Config, () => ({
    __proto__: dart.getFields(config.Config.__proto__),
    numSteps: dart.finalFieldType(core.int),
    opacity: dart.finalFieldType(core.double),
    opacityPow: dart.finalFieldType(core.double),
    offset: dart.finalFieldType(core.double),
    offsetPow: dart.finalFieldType(core.double),
    blur: dart.finalFieldType(core.double),
    blurPow: dart.finalFieldType(core.double),
    shadowColor: dart.finalFieldType(ui.Color)
  }));
  dart.trackLibraries("packages/flutter_shine/flutter_shine", {
    "package:flutter_shine/src/light.dart": light,
    "package:flutter_shine/src/shine_shadow.dart": shine_shadow,
    "package:flutter_shine/flutter_shine.dart": flutter_shine,
    "package:flutter_shine/src/shine.dart": shine,
    "package:flutter_shine/src/controller.dart": controller,
    "package:flutter_shine/src/config.dart": config
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/light.dart","src/shine_shadow.dart","src/shine.dart","src/controller.dart","src/config.dart"],"names":[],"mappings":"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","file":"flutter_shine.ddc.js"}');
  // Exports:
  return {
    src__light: light,
    src__shine_shadow: shine_shadow,
    flutter_shine: flutter_shine,
    src__shine: shine,
    src__controller: controller,
    src__config: config
  };
});

//# sourceMappingURL=flutter_shine.ddc.js.map
