define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _engine = dart_sdk._engine;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const gf_image_overlay = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: ""
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_name]: "BlendMode.colorBurn",
        index: 19
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1107296256
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: _engine.EngineColorFilter.prototype,
        [EngineColorFilter__type]: 1,
        [EngineColorFilter__matrix]: null,
        [EngineColorFilter__blendMode]: C2 || CT.C2,
        [EngineColorFilter__color]: C3 || CT.C3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/image/gf_image_overlay.dart"
      });
    }
  });
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C0;
  const EngineColorFilter__type = dart.privateName(_engine, "EngineColorFilter._type");
  const EngineColorFilter__matrix = dart.privateName(_engine, "EngineColorFilter._matrix");
  const _name = dart.privateName(ui, "_name");
  let C2;
  const EngineColorFilter__blendMode = dart.privateName(_engine, "EngineColorFilter._blendMode");
  const Color_value = dart.privateName(ui, "Color.value");
  let C3;
  const EngineColorFilter__color = dart.privateName(_engine, "EngineColorFilter._color");
  let C1;
  const _name$ = dart.privateName(box_border, "_name");
  let C4;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C6;
  let C5;
  const height$ = dart.privateName(gf_image_overlay, "GFImageOverlay.height");
  const width$ = dart.privateName(gf_image_overlay, "GFImageOverlay.width");
  const color$ = dart.privateName(gf_image_overlay, "GFImageOverlay.color");
  const margin$ = dart.privateName(gf_image_overlay, "GFImageOverlay.margin");
  const padding$ = dart.privateName(gf_image_overlay, "GFImageOverlay.padding");
  const image$ = dart.privateName(gf_image_overlay, "GFImageOverlay.image");
  const child$ = dart.privateName(gf_image_overlay, "GFImageOverlay.child");
  const alignment$ = dart.privateName(gf_image_overlay, "GFImageOverlay.alignment");
  const boxFit$ = dart.privateName(gf_image_overlay, "GFImageOverlay.boxFit");
  const colorFilter$ = dart.privateName(gf_image_overlay, "GFImageOverlay.colorFilter");
  const borderRadius$ = dart.privateName(gf_image_overlay, "GFImageOverlay.borderRadius");
  const border$ = dart.privateName(gf_image_overlay, "GFImageOverlay.border");
  const shape$ = dart.privateName(gf_image_overlay, "GFImageOverlay.shape");
  gf_image_overlay.GFImageOverlay = class GFImageOverlay extends framework.StatelessWidget {
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get boxFit() {
      return this[boxFit$];
    }
    set boxFit(value) {
      super.boxFit = value;
    }
    get colorFilter() {
      return this[colorFilter$];
    }
    set colorFilter(value) {
      super.colorFilter = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      super.border = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    build(context) {
      let t0;
      return new container.Container.new({alignment: this.alignment, height: this.height, width: (t0 = this.width, t0 == null ? media_query.MediaQuery.of(context).size.width : t0), margin: this.margin, padding: this.padding, child: this.child, decoration: new box_decoration.BoxDecoration.new({shape: this.shape, borderRadius: this.borderRadius, border: this.border, color: this.color, image: new decoration_image.DecorationImage.new({fit: box_fit.BoxFit.fill, colorFilter: this.child != null ? this.colorFilter : null, image: this.image})}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (gf_image_overlay.GFImageOverlay.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let child = opts && 'child' in opts ? opts.child : C0 || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : C1 || CT.C1;
    let boxFit = opts && 'boxFit' in opts ? opts.boxFit : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let shape = opts && 'shape' in opts ? opts.shape : C4 || CT.C4;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[height$] = height;
    this[width$] = width;
    this[color$] = color;
    this[padding$] = padding;
    this[margin$] = margin;
    this[image$] = image;
    this[child$] = child;
    this[alignment$] = alignment;
    this[borderRadius$] = borderRadius;
    this[colorFilter$] = colorFilter;
    this[boxFit$] = boxFit;
    this[border$] = border;
    this[shape$] = shape;
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/image/gf_image_overlay.dart", 24, 16, "shape != null");
    gf_image_overlay.GFImageOverlay.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_image_overlay.GFImageOverlay.prototype;
  dart.addTypeTests(gf_image_overlay.GFImageOverlay);
  dart.setMethodSignature(gf_image_overlay.GFImageOverlay, () => ({
    __proto__: dart.getMethods(gf_image_overlay.GFImageOverlay.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_image_overlay.GFImageOverlay, "package:getflutter/components/image/gf_image_overlay.dart");
  dart.setFieldSignature(gf_image_overlay.GFImageOverlay, () => ({
    __proto__: dart.getFields(gf_image_overlay.GFImageOverlay.__proto__),
    height: dart.finalFieldType(core.double),
    width: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    margin: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    image: dart.finalFieldType(image_provider.ImageProvider),
    child: dart.finalFieldType(framework.Widget),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    boxFit: dart.finalFieldType(box_fit.BoxFit),
    colorFilter: dart.finalFieldType(ui.ColorFilter),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    border: dart.finalFieldType(box_border.Border),
    shape: dart.finalFieldType(box_border.BoxShape)
  }));
  dart.trackLibraries("packages/getflutter/components/image/gf_image_overlay", {
    "package:getflutter/components/image/gf_image_overlay.dart": gf_image_overlay
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_image_overlay.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2Be;;;;;;IAGA;;;;;;IAGD;;;;;;IAGa;;;;;;IAGA;;;;;;IAGL;;;;;;IAGP;;;;;;IAGW;;;;;;IAKX;;;;;;IAGK;;;;;;IAGS;;;;;;IAGd;;;;;;IAeE;;;;;;UAGW;;AAAY,qDACrB,wBACH,qBACK,uBAAN,OAAoB,AAAY,AAAK,0BAAd,OAAO,4BAC7B,sBACC,qBACF,wBACK,6CACH,0BACO,2BACN,oBACD,mBACA,+CACO,kCACC,AAAM,cAAG,OAAO,mBAAc,aACpC;IAGZ;;;QA1FC;QACC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QAEA;QACA;QACA;;IAbA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IACA;IACA;UACM,AAAM,KAAD,IAAI;AAChB,mEAAW,GAAG;;EAAC","file":"gf_image_overlay.ddc.js"}');
  // Exports:
  return {
    components__image__gf_image_overlay: gf_image_overlay
  };
});

//# sourceMappingURL=gf_image_overlay.ddc.js.map
