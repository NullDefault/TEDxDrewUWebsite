define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__material.src__material__debug;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const theme = packages__flutter__material.src__material__theme;
  const material = packages__flutter__material.src__material__material;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const gf_drawer = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gf_drawer.GFDrawerAlignment.prototype,
        [_name$]: "GFDrawerAlignment.start",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gf_drawer.GFDrawerAlignment.prototype,
        [_name$]: "GFDrawerAlignment.end",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], gf_drawer.GFDrawerAlignment);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 1 / 0,
        [BoxConstraints_maxWidth]: 304,
        [BoxConstraints_minWidth]: 304
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer.dart"
      });
    }
  });
  const _name$ = dart.privateName(gf_drawer, "_name");
  let C0;
  let C1;
  let C2;
  gf_drawer.GFDrawerAlignment = class GFDrawerAlignment extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gf_drawer.GFDrawerAlignment.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gf_drawer.GFDrawerAlignment.prototype;
  dart.addTypeTests(gf_drawer.GFDrawerAlignment);
  dart.setLibraryUri(gf_drawer.GFDrawerAlignment, "package:getflutter/components/drawer/gf_drawer.dart");
  dart.setFieldSignature(gf_drawer.GFDrawerAlignment, () => ({
    __proto__: dart.getFields(gf_drawer.GFDrawerAlignment.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(gf_drawer.GFDrawerAlignment, ['toString']);
  gf_drawer.GFDrawerAlignment.start = C0 || CT.C0;
  gf_drawer.GFDrawerAlignment.end = C1 || CT.C1;
  gf_drawer.GFDrawerAlignment.values = C2 || CT.C2;
  const _name = dart.privateName(platform, "_name");
  let C3;
  let C4;
  let C5;
  const BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  const BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  const BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  const BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  let C6;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C20;
  let C19;
  const elevation$ = dart.privateName(gf_drawer, "GFDrawer.elevation");
  const child$ = dart.privateName(gf_drawer, "GFDrawer.child");
  const semanticLabel$ = dart.privateName(gf_drawer, "GFDrawer.semanticLabel");
  const backgroundImage$ = dart.privateName(gf_drawer, "GFDrawer.backgroundImage");
  const colorFilter$ = dart.privateName(gf_drawer, "GFDrawer.colorFilter");
  const gradient$ = dart.privateName(gf_drawer, "GFDrawer.gradient");
  const color$ = dart.privateName(gf_drawer, "GFDrawer.color");
  gf_drawer.GFDrawer = class GFDrawer extends framework.StatelessWidget {
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get backgroundImage() {
      return this[backgroundImage$];
    }
    set backgroundImage(value) {
      super.backgroundImage = value;
    }
    get colorFilter() {
      return this[colorFilter$];
    }
    set colorFilter(value) {
      super.colorFilter = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      let t1, t0;
      if (!dart.test(debug.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer.dart", 114, 12, "debugCheckHasMaterialLocalizations(context)");
      let label = this.semanticLabel;
      switch (theme.Theme.of(context).platform) {
        case C3 || CT.C3:
        {
          label = this.semanticLabel;
          break;
        }
        case C4 || CT.C4:
        case C5 || CT.C5:
        {
          label = (t0 = this.semanticLabel, t0 == null ? (t1 = material_localizations.MaterialLocalizations.of(context), t1 == null ? null : t1.drawerLabel) : t0);
          break;
        }
        default:
        {
          break;
        }
      }
      return new basic.Semantics.new({scopesRoute: true, namesRoute: true, explicitChildNodes: true, label: label, child: new basic.ConstrainedBox.new({constraints: C6 || CT.C6, child: new material.Material.new({elevation: this.elevation, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: ui.Color._check(this.color), gradient: this.gradient, image: this.backgroundImage != null ? new decoration_image.DecorationImage.new({image: this.backgroundImage, fit: box_fit.BoxFit.cover, colorFilter: this.colorFilter}) : null}), child: this.child, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
    }
  };
  (gf_drawer.GFDrawer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 16;
    let child = opts && 'child' in opts ? opts.child : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let backgroundImage = opts && 'backgroundImage' in opts ? opts.backgroundImage : null;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[elevation$] = elevation;
    this[child$] = child;
    this[semanticLabel$] = semanticLabel;
    this[backgroundImage$] = backgroundImage;
    this[colorFilter$] = colorFilter;
    this[gradient$] = gradient;
    this[color$] = color;
    if (!(elevation != null && dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer.dart", 69, 16, "elevation != null && elevation >= 0.0");
    gf_drawer.GFDrawer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_drawer.GFDrawer.prototype;
  dart.addTypeTests(gf_drawer.GFDrawer);
  dart.setMethodSignature(gf_drawer.GFDrawer, () => ({
    __proto__: dart.getMethods(gf_drawer.GFDrawer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_drawer.GFDrawer, "package:getflutter/components/drawer/gf_drawer.dart");
  dart.setFieldSignature(gf_drawer.GFDrawer, () => ({
    __proto__: dart.getFields(gf_drawer.GFDrawer.__proto__),
    elevation: dart.finalFieldType(core.double),
    child: dart.finalFieldType(framework.Widget),
    semanticLabel: dart.finalFieldType(core.String),
    backgroundImage: dart.finalFieldType(image_provider.ImageProvider),
    colorFilter: dart.finalFieldType(ui.ColorFilter),
    gradient: dart.finalFieldType(gradient.Gradient),
    color: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineLazy(gf_drawer, {
    /*gf_drawer._kWidth*/get _kWidth() {
      return 304;
    }
  });
  dart.trackLibraries("packages/getflutter/components/drawer/gf_drawer", {
    "package:getflutter/components/drawer/gf_drawer.dart": gf_drawer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gf_drawer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBA;;qDAZK;;;;EAYL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4De;;;;;;IAOA;;;;;;IAYA;;;;;;IAGO;;;;;;IAGF;;;;;;IAIH;;;;;;IAGD;;;;;;UAGY;;AACxB,qBAAO,yCAAmC,OAAO;AAC1C,kBAAQ;AACf,cAAc,AAAY,eAAT,OAAO;;;AAEC,UAArB,QAAQ;AACR;;;;;AAGuE,UAAvE,SAAsB,+BAAd,aAAuC,gDAAG,OAAO,gBAAV,OAAa;AAC5D;;;;AAEA;;;AAEJ,YAAO,uCACQ,kBACD,0BACQ,aACb,KAAK,SACL,+DAEE,sCACM,uBACJ,yCACO,6DACH,uBACG,sBACH,AAAgB,wBAAG,OACpB,iDACS,2BACK,mCACC,qBAEf,eAED;IAKjB;;;QA5FM;QACC;QACA;QACA;QACA;QACA;QACA;QACA;;IANA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAkB,SAAT,IAAI,QAAkB,aAAV,SAAS,KAAI;AACzC,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;MAxCV,iBAAO","file":"gf_drawer.ddc.js"}');
  // Exports:
  return {
    components__drawer__gf_drawer: gf_drawer
  };
});

//# sourceMappingURL=gf_drawer.ddc.js.map
