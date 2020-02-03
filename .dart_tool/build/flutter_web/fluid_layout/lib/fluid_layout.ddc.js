define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_staggered_grid_view/flutter_staggered_grid_view', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_staggered_grid_view__flutter_staggered_grid_view, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const sliver = packages__flutter__src__widgets__actions.src__widgets__sliver;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const staggered_tile = packages__flutter_staggered_grid_view__flutter_staggered_grid_view.src__widgets__staggered_tile;
  const staggered_grid_view = packages__flutter_staggered_grid_view__flutter_staggered_grid_view.src__widgets__staggered_grid_view;
  const sliver_staggered_grid = packages__flutter_staggered_grid_view__flutter_staggered_grid_view.src__rendering__sliver_staggered_grid;
  const sliver$ = packages__flutter_staggered_grid_view__flutter_staggered_grid_view.src__widgets__sliver;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const sliver_padding = packages__flutter__src__rendering__animated_size.src__rendering__sliver_padding;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const fluid_breakpoint = Object.create(dart.library);
  const fluid_layout = Object.create(dart.library);
  const fluid_values = Object.create(dart.library);
  const fluid_grid_view = Object.create(dart.library);
  const fluid_container = Object.create(dart.library);
  const fluid_layout$ = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  const $length = dartx.length;
  let FluidBreakpointTobool = () => (FluidBreakpointTobool = dart.constFn(dart.fnType(core.bool, [fluid_breakpoint.FluidBreakpoint])))();
  let T__ToT = () => (T__ToT = dart.constFn(dart.gFnType(T => [T, [T], {l: T, m: T, s: T, xl: T, xs: T}, {}])))();
  let FluidCellToStaggeredTile = () => (FluidCellToStaggeredTile = dart.constFn(dart.fnType(staggered_tile.StaggeredTile, [fluid_grid_view.FluidCell])))();
  let intToStaggeredTile = () => (intToStaggeredTile = dart.constFn(dart.fnType(staggered_tile.StaggeredTile, [core.int])))();
  let BuildContextAndBoxConstraintsToFluidLayoutInheritedWidget = () => (BuildContextAndBoxConstraintsToFluidLayoutInheritedWidget = dart.constFn(dart.fnType(fluid_layout$.FluidLayoutInheritedWidget, [framework.BuildContext, box.BoxConstraints])))();
  let FluidValueOfdouble = () => (FluidValueOfdouble = dart.constFn(fluid_values.FluidValue$(core.double)))();
  let doubleTodouble = () => (doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: fluid_breakpoint.FluidBreakpoint.prototype,
        [_name$]: "FluidBreakpoint.xs",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: fluid_breakpoint.FluidBreakpoint.prototype,
        [_name$]: "FluidBreakpoint.s",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: fluid_breakpoint.FluidBreakpoint.prototype,
        [_name$]: "FluidBreakpoint.m",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: fluid_breakpoint.FluidBreakpoint.prototype,
        [_name$]: "FluidBreakpoint.l",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: fluid_breakpoint.FluidBreakpoint.prototype,
        [_name$]: "FluidBreakpoint.xl",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], fluid_breakpoint.FluidBreakpoint);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "staggeredTiles",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSpacing",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisSpacing",
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "horizontalPadding",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fluid",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 75,
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
        [_Location_column]: 12,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart"
      });
    },
    get C22() {
      return C22 = dart.constList([], fluid_grid_view.FluidCell);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/fluid_layout/src/fluid_container.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/fluid_layout/src/fluid_layout.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/fluid_layout/src/fluid_layout.dart"
      });
    }
  });
  const _name$ = dart.privateName(fluid_breakpoint, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  fluid_breakpoint.FluidBreakpoint = class FluidBreakpoint extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (fluid_breakpoint.FluidBreakpoint.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = fluid_breakpoint.FluidBreakpoint.prototype;
  dart.addTypeTests(fluid_breakpoint.FluidBreakpoint);
  dart.setLibraryUri(fluid_breakpoint.FluidBreakpoint, "package:fluid_layout/src/fluid_breakpoint.dart");
  dart.setFieldSignature(fluid_breakpoint.FluidBreakpoint, () => ({
    __proto__: dart.getFields(fluid_breakpoint.FluidBreakpoint.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(fluid_breakpoint.FluidBreakpoint, ['toString']);
  fluid_breakpoint.FluidBreakpoint.xs = C0 || CT.C0;
  fluid_breakpoint.FluidBreakpoint.s = C1 || CT.C1;
  fluid_breakpoint.FluidBreakpoint.m = C2 || CT.C2;
  fluid_breakpoint.FluidBreakpoint.l = C3 || CT.C3;
  fluid_breakpoint.FluidBreakpoint.xl = C4 || CT.C4;
  fluid_breakpoint.FluidBreakpoint.values = C5 || CT.C5;
  fluid_breakpoint['FluidBreakpointsHelper|from'] = function FluidBreakpointsHelper$124from(width) {
    if (dart.notNull(width) < 576)
      return fluid_breakpoint.FluidBreakpoint.xs;
    else if (dart.notNull(width) < 768)
      return fluid_breakpoint.FluidBreakpoint.s;
    else if (dart.notNull(width) < 992)
      return fluid_breakpoint.FluidBreakpoint.m;
    else if (dart.notNull(width) < 1200)
      return fluid_breakpoint.FluidBreakpoint.l;
    else
      return fluid_breakpoint.FluidBreakpoint.xl;
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#maxContainerWidth'] = function FluidBreakpointsHelper$124get$35maxContainerWidth($this) {
    switch ($this) {
      case C0 || CT.C0:
      {
        return 576.0;
      }
      case C1 || CT.C1:
      {
        return 768.0;
      }
      case C2 || CT.C2:
      {
        return 992.0;
      }
      case C3 || CT.C3:
      {
        return 1200.0;
      }
      case C4 || CT.C4:
      {
        return null;
      }
    }
    return null;
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#maxFluidWidth'] = function FluidBreakpointsHelper$124get$35maxFluidWidth($this) {
    switch ($this) {
      case C0 || CT.C0:
      {
        return 540.0;
      }
      case C1 || CT.C1:
      {
        return 720.0;
      }
      case C2 || CT.C2:
      {
        return 960.0;
      }
      case C3 || CT.C3:
      {
        return 1140.0;
      }
      case C4 || CT.C4:
      {
        return 1140.0;
      }
    }
    return null;
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#smallerBreakpoint'] = function FluidBreakpointsHelper$124get$35smallerBreakpoint($this) {
    switch ($this) {
      case C0 || CT.C0:
      {
        return null;
      }
      case C1 || CT.C1:
      {
        return fluid_breakpoint.FluidBreakpoint.xs;
      }
      case C2 || CT.C2:
      {
        return fluid_breakpoint.FluidBreakpoint.s;
      }
      case C3 || CT.C3:
      {
        return fluid_breakpoint.FluidBreakpoint.m;
      }
      case C4 || CT.C4:
      {
        return fluid_breakpoint.FluidBreakpoint.l;
      }
    }
    return null;
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#biggerBreakpoint'] = function FluidBreakpointsHelper$124get$35biggerBreakpoint($this) {
    switch ($this) {
      case C0 || CT.C0:
      {
        return fluid_breakpoint.FluidBreakpoint.s;
      }
      case C1 || CT.C1:
      {
        return fluid_breakpoint.FluidBreakpoint.m;
      }
      case C2 || CT.C2:
      {
        return fluid_breakpoint.FluidBreakpoint.l;
      }
      case C3 || CT.C3:
      {
        return fluid_breakpoint.FluidBreakpoint.xl;
      }
      case C4 || CT.C4:
      {
        return null;
      }
    }
    return null;
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isXs'] = function FluidBreakpointsHelper$124get$35isXs($this) {
    return dart.equals(fluid_breakpoint.FluidBreakpoint.xs, $this);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isS'] = function FluidBreakpointsHelper$124get$35isS($this) {
    return dart.equals(fluid_breakpoint.FluidBreakpoint.s, $this);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isM'] = function FluidBreakpointsHelper$124get$35isM($this) {
    return dart.equals(fluid_breakpoint.FluidBreakpoint.m, $this);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isL'] = function FluidBreakpointsHelper$124get$35isL($this) {
    return dart.equals(fluid_breakpoint.FluidBreakpoint.l, $this);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isXl'] = function FluidBreakpointsHelper$124get$35isXl($this) {
    return dart.equals(fluid_breakpoint.FluidBreakpoint.xl, $this);
  };
  fluid_breakpoint['FluidBreakpointsHelper|isLargerThan'] = function FluidBreakpointsHelper$124isLargerThan($this, breakpoint) {
    return dart.notNull(breakpoint.index) < dart.notNull($this.index);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isLargerThan'] = function FluidBreakpointsHelper$124get$35isLargerThan($this) {
    return dart.fn(breakpoint => fluid_breakpoint['FluidBreakpointsHelper|isLargerThan']($this, breakpoint), FluidBreakpointTobool());
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isLargerThanXs'] = function FluidBreakpointsHelper$124get$35isLargerThanXs($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isLargerThan']($this, fluid_breakpoint.FluidBreakpoint.xs);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isLargerThanS'] = function FluidBreakpointsHelper$124get$35isLargerThanS($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isLargerThan']($this, fluid_breakpoint.FluidBreakpoint.s);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isLargerThanM'] = function FluidBreakpointsHelper$124get$35isLargerThanM($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isLargerThan']($this, fluid_breakpoint.FluidBreakpoint.m);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isLargerThanL'] = function FluidBreakpointsHelper$124get$35isLargerThanL($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isLargerThan']($this, fluid_breakpoint.FluidBreakpoint.l);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isLargerThanXl'] = function FluidBreakpointsHelper$124get$35isLargerThanXl($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isLargerThan']($this, fluid_breakpoint.FluidBreakpoint.xl);
  };
  fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan'] = function FluidBreakpointsHelper$124isSmallerThan($this, breakpoint) {
    return dart.notNull(breakpoint.index) > dart.notNull($this.index);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isSmallerThan'] = function FluidBreakpointsHelper$124get$35isSmallerThan($this) {
    return dart.fn(breakpoint => fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan']($this, breakpoint), FluidBreakpointTobool());
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isSmallerThanXs'] = function FluidBreakpointsHelper$124get$35isSmallerThanXs($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan']($this, fluid_breakpoint.FluidBreakpoint.xs);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isSmallerThanS'] = function FluidBreakpointsHelper$124get$35isSmallerThanS($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan']($this, fluid_breakpoint.FluidBreakpoint.s);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isSmallerThanM'] = function FluidBreakpointsHelper$124get$35isSmallerThanM($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan']($this, fluid_breakpoint.FluidBreakpoint.m);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isSmallerThanL'] = function FluidBreakpointsHelper$124get$35isSmallerThanL($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan']($this, fluid_breakpoint.FluidBreakpoint.l);
  };
  fluid_breakpoint['FluidBreakpointsHelper|get#isSmallerThanXl'] = function FluidBreakpointsHelper$124get$35isSmallerThanXl($this) {
    return fluid_breakpoint['FluidBreakpointsHelper|isSmallerThan']($this, fluid_breakpoint.FluidBreakpoint.xl);
  };
  const _is_FluidValue_default = Symbol('_is_FluidValue_default');
  const valueBuilder$ = dart.privateName(fluid_values, "FluidValue.valueBuilder");
  fluid_values.FluidValue$ = dart.generic(T => {
    class FluidValue extends core.Object {
      get valueBuilder() {
        return this[valueBuilder$];
      }
      set valueBuilder(value) {
        super.valueBuilder = value;
      }
      build(context) {
        return fluid_values.FluidValue.fluid(T, context, this.valueBuilder);
      }
      buildFromWidth(containerWidth) {
        return fluid_values.FluidValue.fromWidth(T, containerWidth, this.valueBuilder);
      }
      static fromWidth(T, containerWidth, valueBuilder) {
        return valueBuilder(containerWidth);
      }
      static fluid(T, context, valueBuilder, opts) {
        let xs = opts && 'xs' in opts ? opts.xs : null;
        let s = opts && 's' in opts ? opts.s : null;
        let m = opts && 'm' in opts ? opts.m : null;
        let l = opts && 'l' in opts ? opts.l : null;
        let xl = opts && 'xl' in opts ? opts.xl : null;
        let containerWidth = fluid_layout$.FluidLayout.of(context).containerWidth;
        return valueBuilder(containerWidth);
      }
      static breakpoint(T, context, value, opts) {
        let xs = opts && 'xs' in opts ? opts.xs : null;
        let s = opts && 's' in opts ? opts.s : null;
        let m = opts && 'm' in opts ? opts.m : null;
        let l = opts && 'l' in opts ? opts.l : null;
        let xl = opts && 'xl' in opts ? opts.xl : null;
        let breakpoint = fluid_layout$.FluidLayout.of(context).fluidBreakpoint;
        return fluid_values.FluidValue.breakpointWithoutContext(T, breakpoint, value, {xs: xs, s: s, m: m, l: l, xl: xl});
      }
      static breakpointWithoutContext(T, breakpoint, value, opts) {
        let t23, t23$, t23$0, t23$1, t23$2;
        let xs = opts && 'xs' in opts ? opts.xs : null;
        let s = opts && 's' in opts ? opts.s : null;
        let m = opts && 'm' in opts ? opts.m : null;
        let l = opts && 'l' in opts ? opts.l : null;
        let xl = opts && 'xl' in opts ? opts.xl : null;
        switch (breakpoint) {
          case C0 || CT.C0:
          {
            t23 = xs;
            return t23 == null ? value : t23;
          }
          case C1 || CT.C1:
          {
            t23$ = s;
            return t23$ == null ? value : t23$;
          }
          case C2 || CT.C2:
          {
            t23$0 = m;
            return t23$0 == null ? value : t23$0;
          }
          case C3 || CT.C3:
          {
            t23$1 = l;
            return t23$1 == null ? value : t23$1;
          }
          case C4 || CT.C4:
          {
            t23$2 = xl;
            return t23$2 == null ? value : t23$2;
          }
        }
        return value;
      }
    }
    (FluidValue.new = function(valueBuilder) {
      this[valueBuilder$] = valueBuilder;
      ;
    }).prototype = FluidValue.prototype;
    dart.addTypeTests(FluidValue);
    FluidValue.prototype[_is_FluidValue_default] = true;
    dart.setMethodSignature(FluidValue, () => ({
      __proto__: dart.getMethods(FluidValue.__proto__),
      build: dart.fnType(T, [framework.BuildContext]),
      buildFromWidth: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(FluidValue, "package:fluid_layout/src/fluid_values.dart");
    dart.setFieldSignature(FluidValue, () => ({
      __proto__: dart.getFields(FluidValue.__proto__),
      valueBuilder: dart.finalFieldType(dart.fnType(T, [core.double]))
    }));
    return FluidValue;
  });
  fluid_values.FluidValue = fluid_values.FluidValue$();
  dart.addTypeTests(fluid_values.FluidValue, _is_FluidValue_default);
  fluid_values['FluidContext|fluid'] = function FluidContext$124fluid(T, $this, value, opts) {
    let xs = opts && 'xs' in opts ? opts.xs : null;
    let s = opts && 's' in opts ? opts.s : null;
    let m = opts && 'm' in opts ? opts.m : null;
    let l = opts && 'l' in opts ? opts.l : null;
    let xl = opts && 'xl' in opts ? opts.xl : null;
    return fluid_values.FluidValue.breakpoint(T, $this, value, {xs: xs, s: s, m: m, l: l, xl: xl});
  };
  fluid_values['FluidContext|get#fluid'] = function FluidContext$124get$35fluid($this) {
    return dart.fn((T, value, opts) => {
      let xs = opts && 'xs' in opts ? opts.xs : null;
      let s = opts && 's' in opts ? opts.s : null;
      let m = opts && 'm' in opts ? opts.m : null;
      let l = opts && 'l' in opts ? opts.l : null;
      let xl = opts && 'xl' in opts ? opts.xl : null;
      return fluid_values['FluidContext|fluid'](T, $this, value, {xs: xs, s: s, m: m, l: l, xl: xl});
    }, T__ToT());
  };
  fluid_values['FluidContext|get#breakpoint'] = function FluidContext$124get$35breakpoint($this) {
    return fluid_layout$.FluidLayout.of($this).fluidBreakpoint;
  };
  const _tile = dart.privateName(fluid_grid_view, "_tile");
  const size$ = dart.privateName(fluid_grid_view, "FluidCell.size");
  const heightSize$ = dart.privateName(fluid_grid_view, "FluidCell.heightSize");
  const height$ = dart.privateName(fluid_grid_view, "FluidCell.height");
  const child$ = dart.privateName(fluid_grid_view, "FluidCell.child");
  fluid_grid_view.FluidCell = class FluidCell extends framework.StatelessWidget {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get heightSize() {
      return this[heightSize$];
    }
    set heightSize(value) {
      super.heightSize = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return this.child;
    }
    get [_tile]() {
      if (this.heightSize == null && this.height == null) {
        return new staggered_tile.StaggeredTile.fit(this.size);
      } else if (this.heightSize == null) {
        return new staggered_tile.StaggeredTile.extent(this.size, this.height);
      } else {
        return new staggered_tile.StaggeredTile.count(this.size, this.heightSize);
      }
    }
  };
  (fluid_grid_view.FluidCell.fit = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[child$] = child;
    if (!(size != null && dart.notNull(size) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart", 13, 16, "size != null && size >= 0");
    if (!(dart.notNull(size) <= 12)) dart.assertFailed("The size value " + dart.str(size) + " is not valid. Maximum number of columns is 12", "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart", 14, 16, "size <= 12");
    this[heightSize$] = null;
    this[height$] = null;
    fluid_grid_view.FluidCell.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_grid_view.FluidCell.prototype;
  (fluid_grid_view.FluidCell.withFixedHeight = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[height$] = height;
    this[child$] = child;
    if (!(size != null && dart.notNull(size) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart", 22, 16, "size != null && size >= 0");
    if (!(dart.notNull(size) <= 12)) dart.assertFailed("The size value " + dart.str(size) + " is not valid. Maximum number of columns is 12", "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart", 23, 16, "size <= 12");
    this[heightSize$] = null;
    fluid_grid_view.FluidCell.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_grid_view.FluidCell.prototype;
  (fluid_grid_view.FluidCell.withFluidHeight = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let heightSize = opts && 'heightSize' in opts ? opts.heightSize : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[heightSize$] = heightSize;
    this[child$] = child;
    if (!(size != null && dart.notNull(size) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart", 30, 16, "size != null && size >= 0");
    if (!(dart.notNull(size) <= 12)) dart.assertFailed("The size value " + dart.str(size) + " is not valid. Maximun number of columns is 12", "org-dartlang-app:///packages/fluid_layout/src/fluid_grid_view.dart", 31, 16, "size <= 12");
    this[height$] = null;
    fluid_grid_view.FluidCell.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_grid_view.FluidCell.prototype;
  dart.addTypeTests(fluid_grid_view.FluidCell);
  dart.setMethodSignature(fluid_grid_view.FluidCell, () => ({
    __proto__: dart.getMethods(fluid_grid_view.FluidCell.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(fluid_grid_view.FluidCell, () => ({
    __proto__: dart.getGetters(fluid_grid_view.FluidCell.__proto__),
    [_tile]: staggered_tile.StaggeredTile
  }));
  dart.setLibraryUri(fluid_grid_view.FluidCell, "package:fluid_layout/src/fluid_grid_view.dart");
  dart.setFieldSignature(fluid_grid_view.FluidCell, () => ({
    __proto__: dart.getFields(fluid_grid_view.FluidCell.__proto__),
    size: dart.finalFieldType(core.int),
    heightSize: dart.finalFieldType(core.num),
    height: dart.finalFieldType(core.double),
    child: dart.finalFieldType(framework.Widget)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C6;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C8;
  let C7;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  const children$ = dart.privateName(fluid_grid_view, "FluidGridView.children");
  const spacing$ = dart.privateName(fluid_grid_view, "FluidGridView.spacing");
  const shrinkWrap$ = dart.privateName(fluid_grid_view, "FluidGridView.shrinkWrap");
  const physics$ = dart.privateName(fluid_grid_view, "FluidGridView.physics");
  const innerPadding$ = dart.privateName(fluid_grid_view, "FluidGridView.innerPadding");
  const fluid$ = dart.privateName(fluid_grid_view, "FluidGridView.fluid");
  const horizontalPadding$ = dart.privateName(fluid_grid_view, "FluidGridView.horizontalPadding");
  fluid_grid_view.FluidGridView = class FluidGridView extends framework.StatelessWidget {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get spacing() {
      return this[spacing$];
    }
    set spacing(value) {
      super.spacing = value;
    }
    get shrinkWrap() {
      return this[shrinkWrap$];
    }
    set shrinkWrap(value) {
      super.shrinkWrap = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get innerPadding() {
      return this[innerPadding$];
    }
    set innerPadding(value) {
      super.innerPadding = value;
    }
    get fluid() {
      return this[fluid$];
    }
    set fluid(value) {
      super.fluid = value;
    }
    get horizontalPadding() {
      return this[horizontalPadding$];
    }
    set horizontalPadding(value) {
      super.horizontalPadding = value;
    }
    build(context) {
      let t26, t26$;
      return new fluid_container.Fluid.new({horizontalPadding: this.horizontalPadding, fluid: this.fluid, child: new staggered_grid_view.StaggeredGridView.count({crossAxisCount: 12, padding: this.innerPadding, children: this.children, shrinkWrap: this.shrinkWrap, physics: this.physics, staggeredTiles: this.children[$map](staggered_tile.StaggeredTile, dart.fn(child => child[_tile], FluidCellToStaggeredTile()))[$toList](), mainAxisSpacing: (t26 = this.spacing, t26 == null ? fluid_layout$.defaultHorizontalSpacing.build(context) : t26), crossAxisSpacing: (t26$ = this.spacing, t26$ == null ? fluid_layout$.defaultHorizontalSpacing.build(context) : t26$), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
  };
  (fluid_grid_view.FluidGridView.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let spacing = opts && 'spacing' in opts ? opts.spacing : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let innerPadding = opts && 'innerPadding' in opts ? opts.innerPadding : C6 || CT.C6;
    let fluid = opts && 'fluid' in opts ? opts.fluid : null;
    let horizontalPadding = opts && 'horizontalPadding' in opts ? opts.horizontalPadding : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    this[spacing$] = spacing;
    this[shrinkWrap$] = shrinkWrap;
    this[physics$] = physics;
    this[innerPadding$] = innerPadding;
    this[fluid$] = fluid;
    this[horizontalPadding$] = horizontalPadding;
    fluid_grid_view.FluidGridView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_grid_view.FluidGridView.prototype;
  dart.addTypeTests(fluid_grid_view.FluidGridView);
  dart.setMethodSignature(fluid_grid_view.FluidGridView, () => ({
    __proto__: dart.getMethods(fluid_grid_view.FluidGridView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fluid_grid_view.FluidGridView, "package:fluid_layout/src/fluid_grid_view.dart");
  dart.setFieldSignature(fluid_grid_view.FluidGridView, () => ({
    __proto__: dart.getFields(fluid_grid_view.FluidGridView.__proto__),
    children: dart.finalFieldType(core.List$(fluid_grid_view.FluidCell)),
    spacing: dart.finalFieldType(core.double),
    shrinkWrap: dart.finalFieldType(core.bool),
    physics: dart.finalFieldType(scroll_physics.ScrollPhysics),
    innerPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    fluid: dart.finalFieldType(core.bool),
    horizontalPadding: dart.finalFieldType(core.double)
  }));
  let C22;
  let C25;
  let C26;
  let C24;
  let C23;
  const horizontalPadding$0 = dart.privateName(fluid_container, "SliverFluid.horizontalPadding");
  const fluid$0 = dart.privateName(fluid_container, "SliverFluid.fluid");
  fluid_container.SliverFluid = class SliverFluid extends framework.SingleChildRenderObjectWidget {
    get horizontalPadding() {
      return this[horizontalPadding$0];
    }
    set horizontalPadding(value) {
      super.horizontalPadding = value;
    }
    get fluid() {
      return this[fluid$0];
    }
    set fluid(value) {
      super.fluid = value;
    }
    createRenderObject(context) {
      let t26, t26$;
      let innerPadding = (t26 = this.horizontalPadding, t26 == null ? fluid_layout$.FluidLayout.of(context).horizontalPadding : t26);
      return new sliver_padding.RenderSliverPadding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: !dart.equals(this.fluid, false) ? dart.notNull((t26$ = fluid_layout$.FluidLayout.of(context).fluidPadding, t26$ == null ? 0.0 : t26$)) + dart.notNull(innerPadding) : 0.0}), textDirection: basic.Directionality.of(context)});
    }
    updateRenderObject(context, renderObject) {
      let t26, t27, t26$;
      sliver_padding.RenderSliverPadding._check(renderObject);
      let innerPadding = (t26 = this.horizontalPadding, t26 == null ? fluid_layout$.FluidLayout.of(context).horizontalPadding : t26);
      t26$ = renderObject;
      t26$.padding = new edge_insets.EdgeInsets.symmetric({horizontal: !dart.equals(this.fluid, false) ? dart.notNull((t27 = fluid_layout$.FluidLayout.of(context).fluidPadding, t27 == null ? 0.0 : t27)) + dart.notNull(innerPadding) : 0.0});
      t26$.textDirection = basic.Directionality.of(context);
      t26$;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
    }
  };
  (fluid_container.SliverFluid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let fluid = opts && 'fluid' in opts ? opts.fluid : true;
    let horizontalPadding = opts && 'horizontalPadding' in opts ? opts.horizontalPadding : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[fluid$0] = fluid;
    this[horizontalPadding$0] = horizontalPadding;
    fluid_container.SliverFluid.__proto__.new.call(this, {key: key, child: sliver, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_container.SliverFluid.prototype;
  dart.addTypeTests(fluid_container.SliverFluid);
  dart.setMethodSignature(fluid_container.SliverFluid, () => ({
    __proto__: dart.getMethods(fluid_container.SliverFluid.__proto__),
    createRenderObject: dart.fnType(sliver_padding.RenderSliverPadding, [framework.BuildContext])
  }));
  dart.setLibraryUri(fluid_container.SliverFluid, "package:fluid_layout/src/fluid_container.dart");
  dart.setFieldSignature(fluid_container.SliverFluid, () => ({
    __proto__: dart.getFields(fluid_container.SliverFluid.__proto__),
    horizontalPadding: dart.finalFieldType(core.double),
    fluid: dart.finalFieldType(core.bool)
  }));
  const horizontalPadding$1 = dart.privateName(fluid_grid_view, "SliverFluidGrid.horizontalPadding");
  const fluid$1 = dart.privateName(fluid_grid_view, "SliverFluidGrid.fluid");
  const spacing$0 = dart.privateName(fluid_grid_view, "SliverFluidGrid.spacing");
  const children$0 = dart.privateName(fluid_grid_view, "SliverFluidGrid.children");
  fluid_grid_view.SliverFluidGrid = class SliverFluidGrid extends fluid_container.SliverFluid {
    get horizontalPadding() {
      return this[horizontalPadding$1];
    }
    set horizontalPadding(value) {
      super.horizontalPadding = value;
    }
    get fluid() {
      return this[fluid$1];
    }
    set fluid(value) {
      super.fluid = value;
    }
    get spacing() {
      return this[spacing$0];
    }
    set spacing(value) {
      super.spacing = value;
    }
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
  };
  (fluid_grid_view.SliverFluidGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let fluid = opts && 'fluid' in opts ? opts.fluid : null;
    let horizontalPadding = opts && 'horizontalPadding' in opts ? opts.horizontalPadding : null;
    let spacing = opts && 'spacing' in opts ? opts.spacing : null;
    let children = opts && 'children' in opts ? opts.children : C22 || CT.C22;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[fluid$1] = fluid;
    this[horizontalPadding$1] = horizontalPadding;
    this[spacing$0] = spacing;
    this[children$0] = children;
    fluid_grid_view.SliverFluidGrid.__proto__.new.call(this, {key: key, fluid: fluid, horizontalPadding: horizontalPadding, sliver: new fluid_grid_view._SliverFluidGrid.new({spacing: spacing, children: children, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_grid_view.SliverFluidGrid.prototype;
  dart.addTypeTests(fluid_grid_view.SliverFluidGrid);
  dart.setLibraryUri(fluid_grid_view.SliverFluidGrid, "package:fluid_layout/src/fluid_grid_view.dart");
  dart.setFieldSignature(fluid_grid_view.SliverFluidGrid, () => ({
    __proto__: dart.getFields(fluid_grid_view.SliverFluidGrid.__proto__),
    horizontalPadding: dart.finalFieldType(core.double),
    fluid: dart.finalFieldType(core.bool),
    spacing: dart.finalFieldType(core.double),
    children: dart.finalFieldType(core.List$(fluid_grid_view.FluidCell))
  }));
  fluid_grid_view._SliverFluidGrid = class _SliverFluidGrid extends sliver$.SliverVariableSizeBoxAdaptorWidget {
    gridDelegate(context) {
      let t26, t26$, t26$0;
      return new sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 12, mainAxisSpacing: (t26 = this.spacing, t26 == null ? fluid_layout$.defaultHorizontalSpacing.build(context) : t26), crossAxisSpacing: (t26$ = this.spacing, t26$ == null ? fluid_layout$.defaultHorizontalSpacing.build(context) : t26$), staggeredTileBuilder: dart.fn(i => this.children[$_get](i)[_tile], intToStaggeredTile()), staggeredTileCount: (t26$0 = this.children, t26$0 == null ? null : t26$0[$length])});
    }
    createRenderObject(context) {
      let element = sliver$.SliverVariableSizeBoxAdaptorElement._check(context);
      return new sliver_staggered_grid.RenderSliverStaggeredGrid.new({childManager: element, gridDelegate: this.gridDelegate(context)});
    }
    updateRenderObject(context, renderObject) {
      sliver_staggered_grid.RenderSliverStaggeredGrid._check(renderObject);
      renderObject.gridDelegate = this.gridDelegate(context);
    }
    estimateMaxScrollOffset(constraints, firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset) {
      return super.estimateMaxScrollOffset(constraints, firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset);
    }
  };
  (fluid_grid_view._SliverFluidGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let spacing = opts && 'spacing' in opts ? opts.spacing : null;
    let children = opts && 'children' in opts ? opts.children : C22 || CT.C22;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.spacing = spacing;
    this.children = children;
    fluid_grid_view._SliverFluidGrid.__proto__.new.call(this, {key: key, delegate: new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: true}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_grid_view._SliverFluidGrid.prototype;
  dart.addTypeTests(fluid_grid_view._SliverFluidGrid);
  dart.setMethodSignature(fluid_grid_view._SliverFluidGrid, () => ({
    __proto__: dart.getMethods(fluid_grid_view._SliverFluidGrid.__proto__),
    gridDelegate: dart.fnType(sliver_staggered_grid.SliverStaggeredGridDelegate, [framework.BuildContext]),
    createRenderObject: dart.fnType(sliver_staggered_grid.RenderSliverStaggeredGrid, [framework.BuildContext])
  }));
  dart.setLibraryUri(fluid_grid_view._SliverFluidGrid, "package:fluid_layout/src/fluid_grid_view.dart");
  dart.setFieldSignature(fluid_grid_view._SliverFluidGrid, () => ({
    __proto__: dart.getFields(fluid_grid_view._SliverFluidGrid.__proto__),
    spacing: dart.finalFieldType(core.double),
    children: dart.finalFieldType(core.List$(fluid_grid_view.FluidCell))
  }));
  let C29;
  let C30;
  let C28;
  let C27;
  const child$0 = dart.privateName(fluid_container, "Fluid.child");
  const fluid$2 = dart.privateName(fluid_container, "Fluid.fluid");
  const horizontalPadding$2 = dart.privateName(fluid_container, "Fluid.horizontalPadding");
  fluid_container.Fluid = class Fluid extends framework.StatelessWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get fluid() {
      return this[fluid$2];
    }
    set fluid(value) {
      super.fluid = value;
    }
    get horizontalPadding() {
      return this[horizontalPadding$2];
    }
    set horizontalPadding(value) {
      super.horizontalPadding = value;
    }
    build(context) {
      let t26;
      if (dart.equals(this.fluid, false)) return this.child;
      let innerPadding = (t26 = this.horizontalPadding, t26 == null ? fluid_layout$.FluidLayout.of(context).horizontalPadding : t26);
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(fluid_layout$.FluidLayout.of(context).fluidPadding) + dart.notNull(innerPadding)}), child: this.child, $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
    }
  };
  (fluid_container.Fluid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let fluid = opts && 'fluid' in opts ? opts.fluid : null;
    let horizontalPadding = opts && 'horizontalPadding' in opts ? opts.horizontalPadding : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    this[fluid$2] = fluid;
    this[horizontalPadding$2] = horizontalPadding;
    fluid_container.Fluid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_container.Fluid.prototype;
  dart.addTypeTests(fluid_container.Fluid);
  dart.setMethodSignature(fluid_container.Fluid, () => ({
    __proto__: dart.getMethods(fluid_container.Fluid.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fluid_container.Fluid, "package:fluid_layout/src/fluid_container.dart");
  dart.setFieldSignature(fluid_container.Fluid, () => ({
    __proto__: dart.getFields(fluid_container.Fluid.__proto__),
    child: dart.finalFieldType(framework.Widget),
    fluid: dart.finalFieldType(core.bool),
    horizontalPadding: dart.finalFieldType(core.double)
  }));
  const child$1 = dart.privateName(fluid_layout$, "FluidLayout.child");
  const width$ = dart.privateName(fluid_layout$, "FluidLayout.width");
  const horizontalPadding$3 = dart.privateName(fluid_layout$, "FluidLayout.horizontalPadding");
  fluid_layout$.FluidLayout = class FluidLayout extends framework.StatefulWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get horizontalPadding() {
      return this[horizontalPadding$3];
    }
    set horizontalPadding(value) {
      super.horizontalPadding = value;
    }
    static of(context) {
      return context.dependOnInheritedWidgetOfExactType(fluid_layout$.FluidLayoutInheritedWidget).data;
    }
    createState() {
      return new fluid_layout$._FluidLayoutState.new();
    }
  };
  (fluid_layout$.FluidLayout.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let horizontalPadding = opts && 'horizontalPadding' in opts ? opts.horizontalPadding : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$1] = child;
    this[width$] = width;
    this[horizontalPadding$3] = horizontalPadding;
    fluid_layout$.FluidLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_layout$.FluidLayout.prototype;
  dart.addTypeTests(fluid_layout$.FluidLayout);
  dart.setMethodSignature(fluid_layout$.FluidLayout, () => ({
    __proto__: dart.getMethods(fluid_layout$.FluidLayout.__proto__),
    createState: dart.fnType(fluid_layout$._FluidLayoutState, [])
  }));
  dart.setLibraryUri(fluid_layout$.FluidLayout, "package:fluid_layout/src/fluid_layout.dart");
  dart.setFieldSignature(fluid_layout$.FluidLayout, () => ({
    __proto__: dart.getFields(fluid_layout$.FluidLayout.__proto__),
    child: dart.finalFieldType(framework.Widget),
    width: dart.finalFieldType(fluid_values.FluidValue$(core.double)),
    horizontalPadding: dart.finalFieldType(fluid_values.FluidValue$(core.double))
  }));
  const _key = dart.privateName(fluid_layout$, "_key");
  let C33;
  let C34;
  let C35;
  let C32;
  let C31;
  let C38;
  let C37;
  let C36;
  fluid_layout$._FluidLayoutState = class _FluidLayoutState extends framework.State$(fluid_layout$.FluidLayout) {
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t26, t26$, t26$0, t26$1;
          let containerWidth = (t26$ = (t26 = constraints.biggest, t26 == null ? null : t26.width), t26$ == null ? 0.0 : t26$);
          return new fluid_layout$.FluidLayoutInheritedWidget.new({key: this[_key], child: this.widget.child, data: new fluid_layout$.FluidLayoutData.new({containerWidth: containerWidth, fluidWidth: (t26$0 = this.widget.width, t26$0 == null ? fluid_layout$._defaultFluidWidth : t26$0).buildFromWidth(containerWidth), horizontalPadding: (t26$1 = this.widget.horizontalPadding, t26$1 == null ? fluid_layout$.defaultHorizontalSpacing : t26$1).buildFromWidth(containerWidth), fluidBreakpoint: fluid_breakpoint['FluidBreakpointsHelper|from'](containerWidth)}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
        }, BuildContextAndBoxConstraintsToFluidLayoutInheritedWidget()), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
  };
  (fluid_layout$._FluidLayoutState.new = function() {
    this[_key] = new framework.UniqueKey.new();
    fluid_layout$._FluidLayoutState.__proto__.new.call(this);
    ;
  }).prototype = fluid_layout$._FluidLayoutState.prototype;
  dart.addTypeTests(fluid_layout$._FluidLayoutState);
  dart.setMethodSignature(fluid_layout$._FluidLayoutState, () => ({
    __proto__: dart.getMethods(fluid_layout$._FluidLayoutState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fluid_layout$._FluidLayoutState, "package:fluid_layout/src/fluid_layout.dart");
  dart.setFieldSignature(fluid_layout$._FluidLayoutState, () => ({
    __proto__: dart.getFields(fluid_layout$._FluidLayoutState.__proto__),
    [_key]: dart.finalFieldType(key.Key)
  }));
  const containerWidth$ = dart.privateName(fluid_layout$, "FluidLayoutData.containerWidth");
  const fluidWidth$ = dart.privateName(fluid_layout$, "FluidLayoutData.fluidWidth");
  const horizontalPadding$4 = dart.privateName(fluid_layout$, "FluidLayoutData.horizontalPadding");
  const fluidBreakpoint$ = dart.privateName(fluid_layout$, "FluidLayoutData.fluidBreakpoint");
  fluid_layout$.FluidLayoutData = class FluidLayoutData extends core.Object {
    get containerWidth() {
      return this[containerWidth$];
    }
    set containerWidth(value) {
      super.containerWidth = value;
    }
    get fluidWidth() {
      return this[fluidWidth$];
    }
    set fluidWidth(value) {
      super.fluidWidth = value;
    }
    get horizontalPadding() {
      return this[horizontalPadding$4];
    }
    set horizontalPadding(value) {
      super.horizontalPadding = value;
    }
    get fluidBreakpoint() {
      return this[fluidBreakpoint$];
    }
    set fluidBreakpoint(value) {
      super.fluidBreakpoint = value;
    }
    get fluidPadding() {
      return (dart.notNull(this.containerWidth) - dart.notNull(this.fluidWidth)) / 2;
    }
  };
  (fluid_layout$.FluidLayoutData.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
    let fluidWidth = opts && 'fluidWidth' in opts ? opts.fluidWidth : null;
    let horizontalPadding = opts && 'horizontalPadding' in opts ? opts.horizontalPadding : null;
    let fluidBreakpoint = opts && 'fluidBreakpoint' in opts ? opts.fluidBreakpoint : null;
    this[containerWidth$] = containerWidth;
    this[fluidWidth$] = fluidWidth;
    this[horizontalPadding$4] = horizontalPadding;
    this[fluidBreakpoint$] = fluidBreakpoint;
    ;
  }).prototype = fluid_layout$.FluidLayoutData.prototype;
  dart.addTypeTests(fluid_layout$.FluidLayoutData);
  dart.setGetterSignature(fluid_layout$.FluidLayoutData, () => ({
    __proto__: dart.getGetters(fluid_layout$.FluidLayoutData.__proto__),
    fluidPadding: core.double
  }));
  dart.setLibraryUri(fluid_layout$.FluidLayoutData, "package:fluid_layout/src/fluid_layout.dart");
  dart.setFieldSignature(fluid_layout$.FluidLayoutData, () => ({
    __proto__: dart.getFields(fluid_layout$.FluidLayoutData.__proto__),
    containerWidth: dart.finalFieldType(core.double),
    fluidWidth: dart.finalFieldType(core.double),
    horizontalPadding: dart.finalFieldType(core.double),
    fluidBreakpoint: dart.finalFieldType(fluid_breakpoint.FluidBreakpoint)
  }));
  const data$ = dart.privateName(fluid_layout$, "FluidLayoutInheritedWidget.data");
  fluid_layout$.FluidLayoutInheritedWidget = class FluidLayoutInheritedWidget extends framework.InheritedWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    updateShouldNotify(oldWidget) {
      fluid_layout$.FluidLayoutInheritedWidget._check(oldWidget);
      return oldWidget.data.containerWidth != this.data.containerWidth;
    }
  };
  (fluid_layout$.FluidLayoutInheritedWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    fluid_layout$.FluidLayoutInheritedWidget.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fluid_layout$.FluidLayoutInheritedWidget.prototype;
  dart.addTypeTests(fluid_layout$.FluidLayoutInheritedWidget);
  dart.setMethodSignature(fluid_layout$.FluidLayoutInheritedWidget, () => ({
    __proto__: dart.getMethods(fluid_layout$.FluidLayoutInheritedWidget.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(fluid_layout$.FluidLayoutInheritedWidget, "package:fluid_layout/src/fluid_layout.dart");
  dart.setFieldSignature(fluid_layout$.FluidLayoutInheritedWidget, () => ({
    __proto__: dart.getFields(fluid_layout$.FluidLayoutInheritedWidget.__proto__),
    data: dart.finalFieldType(fluid_layout$.FluidLayoutData)
  }));
  dart.defineLazy(fluid_layout$, {
    /*fluid_layout$._defaultFluidWidth*/get _defaultFluidWidth() {
      return new (FluidValueOfdouble()).new(dart.fn(containerWidth => {
        let t26, t26$;
        let breakpoint = fluid_breakpoint['FluidBreakpointsHelper|from'](containerWidth);
        switch (breakpoint) {
          case C0 || CT.C0:
          {
            return math.min(core.double, containerWidth, fluid_breakpoint['FluidBreakpointsHelper|get#maxFluidWidth'](breakpoint));
          }
          case C1 || CT.C1:
          case C2 || CT.C2:
          case C3 || CT.C3:
          {
            let currentDistance = dart.notNull((t26 = fluid_breakpoint['FluidBreakpointsHelper|get#maxContainerWidth'](breakpoint), t26 == null ? containerWidth : t26)) - dart.notNull(containerWidth);
            let totalDistance = dart.notNull((t26$ = fluid_breakpoint['FluidBreakpointsHelper|get#maxContainerWidth'](breakpoint), t26$ == null ? containerWidth : t26$)) - dart.notNull(fluid_breakpoint['FluidBreakpointsHelper|get#maxContainerWidth'](fluid_breakpoint['FluidBreakpointsHelper|get#smallerBreakpoint'](breakpoint)));
            let totalFluidDistance = dart.notNull(fluid_breakpoint['FluidBreakpointsHelper|get#maxFluidWidth'](breakpoint)) - dart.notNull(fluid_breakpoint['FluidBreakpointsHelper|get#maxFluidWidth'](fluid_breakpoint['FluidBreakpointsHelper|get#smallerBreakpoint'](breakpoint)));
            let progress = currentDistance / totalDistance;
            let fluidWidth = dart.notNull(fluid_breakpoint['FluidBreakpointsHelper|get#maxFluidWidth'](breakpoint)) - totalFluidDistance * progress;
            return fluidWidth;
          }
          case C4 || CT.C4:
          {
            return fluid_breakpoint['FluidBreakpointsHelper|get#maxFluidWidth'](breakpoint);
          }
        }
        return containerWidth;
      }, doubleTodouble()));
    },
    /*fluid_layout$._spacer*/get _spacer() {
      return 16;
    },
    /*fluid_layout$.defaultHorizontalSpacing*/get defaultHorizontalSpacing() {
      return new (FluidValueOfdouble()).new(dart.fn(containerWidth => {
        let breakpoint = fluid_breakpoint['FluidBreakpointsHelper|from'](containerWidth);
        return fluid_values.FluidValue.breakpointWithoutContext(core.double, breakpoint, 0.0, {xs: 16 * 1, s: 16 * 1.25, m: 16 * 1.5, l: 16 * 2, xl: 16 * 3});
      }, doubleTodouble()));
    }
  });
  dart.trackLibraries("packages/fluid_layout/fluid_layout", {
    "package:fluid_layout/src/fluid_breakpoint.dart": fluid_breakpoint,
    "package:fluid_layout/fluid_layout.dart": fluid_layout,
    "package:fluid_layout/src/fluid_values.dart": fluid_values,
    "package:fluid_layout/src/fluid_grid_view.dart": fluid_grid_view,
    "package:fluid_layout/src/fluid_container.dart": fluid_container,
    "package:fluid_layout/src/fluid_layout.dart": fluid_layout$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/fluid_breakpoint.dart","src/fluid_values.dart","src/fluid_grid_view.dart","src/fluid_container.dart","src/fluid_layout.dart"],"names":[],"mappings":"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","file":"fluid_layout.ddc.js"}');
  // Exports:
  return {
    src__fluid_breakpoint: fluid_breakpoint,
    fluid_layout: fluid_layout,
    src__fluid_values: fluid_values,
    src__fluid_grid_view: fluid_grid_view,
    src__fluid_container: fluid_container,
    src__fluid_layout: fluid_layout$
  };
});

//# sourceMappingURL=fluid_layout.ddc.js.map
