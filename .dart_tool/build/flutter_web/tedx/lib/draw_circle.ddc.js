define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const draw_circle = Object.create(dart.library);
  const CT = Object.create(null);
  const _paint = dart.privateName(draw_circle, "_paint");
  draw_circle.DrawCircle = class DrawCircle extends custom_paint.CustomPainter {
    paint(canvas, size) {
      canvas.drawCircle(new ui.Offset.new(0.0, 0.0), 10.0, this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return false;
    }
  };
  (draw_circle.DrawCircle.new = function() {
    let t0;
    this[_paint] = null;
    draw_circle.DrawCircle.__proto__.new.call(this);
    this[_paint] = (t0 = ui.Paint.new(), t0.color = colors.Colors.red, t0.strokeWidth = 5.0, t0.style = ui.PaintingStyle.fill, t0);
  }).prototype = draw_circle.DrawCircle.prototype;
  dart.addTypeTests(draw_circle.DrawCircle);
  dart.setMethodSignature(draw_circle.DrawCircle, () => ({
    __proto__: dart.getMethods(draw_circle.DrawCircle.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(draw_circle.DrawCircle, "package:tedx/draw_circle.dart");
  dart.setFieldSignature(draw_circle.DrawCircle, () => ({
    __proto__: dart.getFields(draw_circle.DrawCircle.__proto__),
    [_paint]: dart.fieldType(ui.Paint)
  }));
  dart.trackLibraries("packages/tedx/draw_circle", {
    "package:tedx/draw_circle.dart": draw_circle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["draw_circle.dart"],"names":[],"mappings":";;;;;;;;;;;;UAaoB,QAAa;AACoB,MAAjD,AAAO,MAAD,YAAY,kBAAO,KAAK,MAAM,MAAM;IAC5C;;wCAGiC;AAC/B,YAAO;IACT;;;;IAjBM;AAEN;AAIgC,IAH9B,qBAAS,gBACL,WAAe,mBACf,iBAAc,KACd,WAAsB;EAC5B","file":"draw_circle.ddc.js"}');
  // Exports:
  return {
    draw_circle: draw_circle
  };
});

//# sourceMappingURL=draw_circle.ddc.js.map
