define(['dart_sdk', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__gestures__arena, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver_grid = packages__flutter__src__rendering__animated_size.src__rendering__sliver_grid;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const sliver = packages__flutter__src__rendering__animated_size.src__rendering__sliver;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__animated_size.src__rendering__sliver_multi_box_adaptor;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const hit_test = packages__flutter__src__gestures__arena.src__gestures__hit_test;
  const sliver$ = packages__flutter__src__widgets__actions.src__widgets__sliver;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const sliver_staggered_grid = Object.create(dart.library);
  const sliver_variable_size_box_adaptor = Object.create(dart.library);
  const tile_container_render_object_mixin = Object.create(dart.library);
  const staggered_tile = Object.create(dart.library);
  const sliver$0 = Object.create(dart.library);
  const staggered_grid_view = Object.create(dart.library);
  const flutter_staggered_grid_view = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $runtimeType = dartx.runtimeType;
  const $truncate = dartx.truncate;
  const $putIfAbsent = dartx.putIfAbsent;
  const $toList = dartx.toList;
  const $any = dartx.any;
  const $contains = dartx.contains;
  const $_set = dartx._set;
  const $reduce = dartx.reduce;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $values = dartx.values;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  const $containsKey = dartx.containsKey;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $sort = dartx.sort;
  const $ceil = dartx.ceil;
  const $abs = dartx.abs;
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let SplayTreeMapOfint$_ViewportOffsets = () => (SplayTreeMapOfint$_ViewportOffsets = dart.constFn(collection.SplayTreeMap$(core.int, sliver_staggered_grid._ViewportOffsets)))();
  let IdentityMapOfdouble$SplayTreeMapOfint$_ViewportOffsets = () => (IdentityMapOfdouble$SplayTreeMapOfint$_ViewportOffsets = dart.constFn(_js_helper.IdentityMap$(core.double, SplayTreeMapOfint$_ViewportOffsets())))();
  let VoidToSplayTreeMapOfint$_ViewportOffsets = () => (VoidToSplayTreeMapOfint$_ViewportOffsets = dart.constFn(dart.fnType(SplayTreeMapOfint$_ViewportOffsets(), [])))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  let TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  let IdentityMapOfint$RenderBox = () => (IdentityMapOfint$RenderBox = dart.constFn(_js_helper.IdentityMap$(core.int, box.RenderBox)))();
  let SliverConstraintsToNull = () => (SliverConstraintsToNull = dart.constFn(dart.fnType(core.Null, [sliver.SliverConstraints])))();
  let RenderBoxTovoid = () => (RenderBoxTovoid = dart.constFn(dart.fnType(dart.void, [box.RenderBox])))();
  let RenderBoxTobool = () => (RenderBoxTobool = dart.constFn(dart.fnType(core.bool, [box.RenderBox])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let DiagnosticsPropertyOfSliverChildDelegate = () => (DiagnosticsPropertyOfSliverChildDelegate = dart.constFn(diagnostics.DiagnosticsProperty$(sliver$.SliverChildDelegate)))();
  let IdentityMapOfint$Widget = () => (IdentityMapOfint$Widget = dart.constFn(_js_helper.IdentityMap$(core.int, framework.Widget)))();
  let SplayTreeMapOfint$Element = () => (SplayTreeMapOfint$Element = dart.constFn(collection.SplayTreeMap$(core.int, framework.Element)))();
  let VoidToWidget = () => (VoidToWidget = dart.constFn(dart.fnType(framework.Widget, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))();
  let intToStaggeredTile = () => (intToStaggeredTile = dart.constFn(dart.fnType(staggered_tile.StaggeredTile, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(math.max, TAndTToT());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.constList([], framework.Widget);
    },
    get C12() {
      return C12 = dart.constList([], staggered_tile.StaggeredTile);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 7,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 7,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart"
      });
    }
  });
  const _normalizeStaggeredTile = dart.privateName(sliver_staggered_grid, "_normalizeStaggeredTile");
  const _getStaggeredTileMainAxisExtent = dart.privateName(sliver_staggered_grid, "_getStaggeredTileMainAxisExtent");
  const crossAxisCount$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.crossAxisCount");
  const cellExtent$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.cellExtent");
  const mainAxisSpacing$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.mainAxisSpacing");
  const crossAxisSpacing$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.crossAxisSpacing");
  const staggeredTileBuilder$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.staggeredTileBuilder");
  const staggeredTileCount$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.staggeredTileCount");
  const reverseCrossAxis$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.reverseCrossAxis");
  const cellStride = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.cellStride");
  const mainAxisOffsetsCacheSize$ = dart.privateName(sliver_staggered_grid, "StaggeredGridConfiguration.mainAxisOffsetsCacheSize");
  sliver_staggered_grid.StaggeredGridConfiguration = class StaggeredGridConfiguration extends core.Object {
    get crossAxisCount() {
      return this[crossAxisCount$];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get cellExtent() {
      return this[cellExtent$];
    }
    set cellExtent(value) {
      super.cellExtent = value;
    }
    get mainAxisSpacing() {
      return this[mainAxisSpacing$];
    }
    set mainAxisSpacing(value) {
      super.mainAxisSpacing = value;
    }
    get crossAxisSpacing() {
      return this[crossAxisSpacing$];
    }
    set crossAxisSpacing(value) {
      super.crossAxisSpacing = value;
    }
    get staggeredTileBuilder() {
      return this[staggeredTileBuilder$];
    }
    set staggeredTileBuilder(value) {
      super.staggeredTileBuilder = value;
    }
    get staggeredTileCount() {
      return this[staggeredTileCount$];
    }
    set staggeredTileCount(value) {
      super.staggeredTileCount = value;
    }
    get reverseCrossAxis() {
      return this[reverseCrossAxis$];
    }
    set reverseCrossAxis(value) {
      super.reverseCrossAxis = value;
    }
    get cellStride() {
      return this[cellStride];
    }
    set cellStride(value) {
      super.cellStride = value;
    }
    get mainAxisOffsetsCacheSize() {
      return this[mainAxisOffsetsCacheSize$];
    }
    set mainAxisOffsetsCacheSize(value) {
      super.mainAxisOffsetsCacheSize = value;
    }
    generateMainAxisOffsets() {
      return ListOfdouble().generate(this.crossAxisCount, dart.fn(i => 0.0, intTodouble()));
    }
    getStaggeredTile(index) {
      let tile = null;
      if (this.staggeredTileCount == null || dart.notNull(index) < dart.notNull(this.staggeredTileCount)) {
        tile = this[_normalizeStaggeredTile](this.staggeredTileBuilder(index));
      }
      return tile;
    }
    [_getStaggeredTileMainAxisExtent](tile) {
      let t0;
      t0 = tile.mainAxisExtent;
      return t0 == null ? dart.notNull(tile.mainAxisCellCount) * dart.notNull(this.cellExtent) + (dart.notNull(tile.mainAxisCellCount) - 1) * dart.notNull(this.mainAxisSpacing) : t0;
    }
    [_normalizeStaggeredTile](staggeredTile) {
      if (staggeredTile == null) {
        return null;
      } else {
        let crossAxisCellCount = dart.asInt(staggeredTile.crossAxisCellCount[$clamp](0, this.crossAxisCount));
        if (dart.test(staggeredTile.fitContent)) {
          return new staggered_tile.StaggeredTile.fit(crossAxisCellCount);
        } else {
          return new staggered_tile.StaggeredTile.extent(crossAxisCellCount, this[_getStaggeredTileMainAxisExtent](staggeredTile));
        }
      }
    }
  };
  (sliver_staggered_grid.StaggeredGridConfiguration.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let cellExtent = opts && 'cellExtent' in opts ? opts.cellExtent : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : null;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : null;
    let reverseCrossAxis = opts && 'reverseCrossAxis' in opts ? opts.reverseCrossAxis : null;
    let staggeredTileCount = opts && 'staggeredTileCount' in opts ? opts.staggeredTileCount : null;
    let mainAxisOffsetsCacheSize = opts && 'mainAxisOffsetsCacheSize' in opts ? opts.mainAxisOffsetsCacheSize : 3;
    this[crossAxisCount$] = crossAxisCount;
    this[staggeredTileBuilder$] = staggeredTileBuilder;
    this[cellExtent$] = cellExtent;
    this[mainAxisSpacing$] = mainAxisSpacing;
    this[crossAxisSpacing$] = crossAxisSpacing;
    this[reverseCrossAxis$] = reverseCrossAxis;
    this[staggeredTileCount$] = staggeredTileCount;
    this[mainAxisOffsetsCacheSize$] = mainAxisOffsetsCacheSize;
    if (!(crossAxisCount != null && dart.notNull(crossAxisCount) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 26, 16, "crossAxisCount != null && crossAxisCount > 0");
    if (!(staggeredTileBuilder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 27, 16, "staggeredTileBuilder != null");
    if (!(cellExtent != null && dart.notNull(cellExtent) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 28, 16, "cellExtent != null && cellExtent >= 0");
    if (!(mainAxisSpacing != null && dart.notNull(mainAxisSpacing) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 29, 16, "mainAxisSpacing != null && mainAxisSpacing >= 0");
    if (!(crossAxisSpacing != null && dart.notNull(crossAxisSpacing) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 30, 16, "crossAxisSpacing != null && crossAxisSpacing >= 0");
    if (!(mainAxisOffsetsCacheSize != null && dart.notNull(mainAxisOffsetsCacheSize) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 32, 13, "mainAxisOffsetsCacheSize != null && mainAxisOffsetsCacheSize > 0");
    this[cellStride] = dart.notNull(cellExtent) + dart.notNull(crossAxisSpacing);
    ;
  }).prototype = sliver_staggered_grid.StaggeredGridConfiguration.prototype;
  dart.addTypeTests(sliver_staggered_grid.StaggeredGridConfiguration);
  dart.setMethodSignature(sliver_staggered_grid.StaggeredGridConfiguration, () => ({
    __proto__: dart.getMethods(sliver_staggered_grid.StaggeredGridConfiguration.__proto__),
    generateMainAxisOffsets: dart.fnType(core.List$(core.double), []),
    getStaggeredTile: dart.fnType(staggered_tile.StaggeredTile, [core.int]),
    [_getStaggeredTileMainAxisExtent]: dart.fnType(core.double, [staggered_tile.StaggeredTile]),
    [_normalizeStaggeredTile]: dart.fnType(staggered_tile.StaggeredTile, [staggered_tile.StaggeredTile])
  }));
  dart.setLibraryUri(sliver_staggered_grid.StaggeredGridConfiguration, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid.StaggeredGridConfiguration, () => ({
    __proto__: dart.getFields(sliver_staggered_grid.StaggeredGridConfiguration.__proto__),
    crossAxisCount: dart.finalFieldType(core.int),
    cellExtent: dart.finalFieldType(core.double),
    mainAxisSpacing: dart.finalFieldType(core.double),
    crossAxisSpacing: dart.finalFieldType(core.double),
    staggeredTileBuilder: dart.finalFieldType(dart.fnType(staggered_tile.StaggeredTile, [core.int])),
    staggeredTileCount: dart.finalFieldType(core.int),
    reverseCrossAxis: dart.finalFieldType(core.bool),
    cellStride: dart.finalFieldType(core.double),
    mainAxisOffsetsCacheSize: dart.finalFieldType(core.int)
  }));
  const index$ = dart.privateName(sliver_staggered_grid, "_Block.index");
  const crossAxisCount$0 = dart.privateName(sliver_staggered_grid, "_Block.crossAxisCount");
  const minOffset$ = dart.privateName(sliver_staggered_grid, "_Block.minOffset");
  const maxOffset$ = dart.privateName(sliver_staggered_grid, "_Block.maxOffset");
  sliver_staggered_grid._Block = class _Block extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get crossAxisCount() {
      return this[crossAxisCount$0];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get minOffset() {
      return this[minOffset$];
    }
    set minOffset(value) {
      super.minOffset = value;
    }
    get maxOffset() {
      return this[maxOffset$];
    }
    set maxOffset(value) {
      super.maxOffset = value;
    }
  };
  (sliver_staggered_grid._Block.new = function(index, crossAxisCount, minOffset, maxOffset) {
    this[index$] = index;
    this[crossAxisCount$0] = crossAxisCount;
    this[minOffset$] = minOffset;
    this[maxOffset$] = maxOffset;
    ;
  }).prototype = sliver_staggered_grid._Block.prototype;
  dart.addTypeTests(sliver_staggered_grid._Block);
  dart.setLibraryUri(sliver_staggered_grid._Block, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid._Block, () => ({
    __proto__: dart.getFields(sliver_staggered_grid._Block.__proto__),
    index: dart.finalFieldType(core.int),
    crossAxisCount: dart.finalFieldType(core.int),
    minOffset: dart.finalFieldType(core.double),
    maxOffset: dart.finalFieldType(core.double)
  }));
  const crossAxisCellCount$ = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridGeometry.crossAxisCellCount");
  const blockIndex$ = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridGeometry.blockIndex");
  sliver_staggered_grid.SliverStaggeredGridGeometry = class SliverStaggeredGridGeometry extends sliver_grid.SliverGridGeometry {
    get crossAxisCellCount() {
      return this[crossAxisCellCount$];
    }
    set crossAxisCellCount(value) {
      super.crossAxisCellCount = value;
    }
    get blockIndex() {
      return this[blockIndex$];
    }
    set blockIndex(value) {
      super.blockIndex = value;
    }
    get hasTrailingScrollOffset() {
      return this.mainAxisExtent != null;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
      let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
      let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      let crossAxisCellCount = opts && 'crossAxisCellCount' in opts ? opts.crossAxisCellCount : null;
      let blockIndex = opts && 'blockIndex' in opts ? opts.blockIndex : null;
      return new sliver_staggered_grid.SliverStaggeredGridGeometry.new({scrollOffset: (t0 = scrollOffset, t0 == null ? this.scrollOffset : t0), crossAxisOffset: (t0$ = crossAxisOffset, t0$ == null ? this.crossAxisOffset : t0$), mainAxisExtent: (t0$0 = mainAxisExtent, t0$0 == null ? this.mainAxisExtent : t0$0), crossAxisExtent: (t0$1 = crossAxisExtent, t0$1 == null ? this.crossAxisExtent : t0$1), crossAxisCellCount: (t0$2 = crossAxisCellCount, t0$2 == null ? this.crossAxisCellCount : t0$2), blockIndex: (t0$3 = blockIndex, t0$3 == null ? this.blockIndex : t0$3)});
    }
    getBoxConstraints(constraints) {
      let t0, t0$;
      return constraints.asBoxConstraints({minExtent: (t0 = this.mainAxisExtent, t0 == null ? 0.0 : t0), maxExtent: (t0$ = this.mainAxisExtent, t0$ == null ? 1 / 0 : t0$), crossAxisExtent: this.crossAxisExtent});
    }
    toString() {
      return "SliverStaggeredGridGeometry(" + "scrollOffset: " + dart.str(this.scrollOffset) + ", " + "crossAxisOffset: " + dart.str(this.crossAxisOffset) + ", " + "mainAxisExtent: " + dart.str(this.mainAxisExtent) + ", " + "crossAxisExtent: " + dart.str(this.crossAxisExtent) + ", " + "crossAxisCellCount: " + dart.str(this.crossAxisCellCount) + ", " + "startIndex: " + dart.str(this.blockIndex) + ")";
    }
  };
  (sliver_staggered_grid.SliverStaggeredGridGeometry.new = function(opts) {
    let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
    let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
    let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
    let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
    let crossAxisCellCount = opts && 'crossAxisCellCount' in opts ? opts.crossAxisCellCount : null;
    let blockIndex = opts && 'blockIndex' in opts ? opts.blockIndex : null;
    this[crossAxisCellCount$] = crossAxisCellCount;
    this[blockIndex$] = blockIndex;
    sliver_staggered_grid.SliverStaggeredGridGeometry.__proto__.new.call(this, {scrollOffset: core.double._check(scrollOffset), crossAxisOffset: core.double._check(crossAxisOffset), mainAxisExtent: core.double._check(mainAxisExtent), crossAxisExtent: core.double._check(crossAxisExtent)});
    ;
  }).prototype = sliver_staggered_grid.SliverStaggeredGridGeometry.prototype;
  dart.addTypeTests(sliver_staggered_grid.SliverStaggeredGridGeometry);
  dart.setMethodSignature(sliver_staggered_grid.SliverStaggeredGridGeometry, () => ({
    __proto__: dart.getMethods(sliver_staggered_grid.SliverStaggeredGridGeometry.__proto__),
    copyWith: dart.fnType(sliver_staggered_grid.SliverStaggeredGridGeometry, [], {blockIndex: core.int, crossAxisCellCount: core.int, crossAxisExtent: core.double, crossAxisOffset: core.double, mainAxisExtent: core.double, scrollOffset: core.double}, {})
  }));
  dart.setGetterSignature(sliver_staggered_grid.SliverStaggeredGridGeometry, () => ({
    __proto__: dart.getGetters(sliver_staggered_grid.SliverStaggeredGridGeometry.__proto__),
    hasTrailingScrollOffset: core.bool
  }));
  dart.setLibraryUri(sliver_staggered_grid.SliverStaggeredGridGeometry, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid.SliverStaggeredGridGeometry, () => ({
    __proto__: dart.getFields(sliver_staggered_grid.SliverStaggeredGridGeometry.__proto__),
    crossAxisCellCount: dart.finalFieldType(core.int),
    blockIndex: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(sliver_staggered_grid.SliverStaggeredGridGeometry, ['toString']);
  const _gridDelegate = dart.privateName(sliver_staggered_grid, "_gridDelegate");
  const _pageSizeToViewportOffsets = dart.privateName(sliver_staggered_grid, "_pageSizeToViewportOffsets");
  let C0;
  const _keepAliveBucket = dart.privateName(sliver_variable_size_box_adaptor, "_keepAliveBucket");
  const _childManager = dart.privateName(sliver_variable_size_box_adaptor, "_childManager");
  const _keptAlive = dart.privateName(sliver_variable_size_box_adaptor, "_keptAlive");
  const _debugAssertChildListLocked = dart.privateName(sliver_variable_size_box_adaptor, "_debugAssertChildListLocked");
  const _createOrObtainChild = dart.privateName(sliver_variable_size_box_adaptor, "_createOrObtainChild");
  const _destroyOrCacheChild = dart.privateName(sliver_variable_size_box_adaptor, "_destroyOrCacheChild");
  const _name = dart.privateName(basic_types, "_name");
  let C1;
  let C2;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  const _childRenderObjects = dart.privateName(tile_container_render_object_mixin, "_childRenderObjects");
  const _removeChild = dart.privateName(tile_container_render_object_mixin, "_removeChild");
  const _is_TileContainerRenderObjectMixin_default = Symbol('_is_TileContainerRenderObjectMixin_default');
  tile_container_render_object_mixin.TileContainerRenderObjectMixin$ = dart.generic((ChildType, ParentDataType) => {
    let SplayTreeMapOfint$ChildType = () => (SplayTreeMapOfint$ChildType = dart.constFn(collection.SplayTreeMap$(core.int, ChildType)))();
    let ChildTypeTovoid = () => (ChildTypeTovoid = dart.constFn(dart.fnType(dart.void, [ChildType])))();
    let intAndChildTypeTovoid = () => (intAndChildTypeTovoid = dart.constFn(dart.fnType(dart.void, [core.int, ChildType])))();
    class TileContainerRenderObjectMixin extends object.RenderObject {}
    TileContainerRenderObjectMixin[dart.mixinOn] = RenderObject => class TileContainerRenderObjectMixin extends RenderObject {
      get childCount() {
        return this[_childRenderObjects].length;
      }
      get children() {
        return this[_childRenderObjects].values;
      }
      get indices() {
        return this[_childRenderObjects].keys;
      }
      debugValidateChild(child) {
        if (!dart.test(dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(dart.runtimeType(child)) + ".\n" + "RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol.\n" + "\n" + "The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by:\n" + "  " + dart.str(this.debugCreator) + "\n" + "\n" + "The " + dart.str(dart.runtimeType(child)) + " that did not match the expected child type " + "was created by:\n" + "  " + dart.str(child.debugCreator) + "\n"));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/tile_container_render_object_mixin.dart", 28, 12, "() {\r\n      if (child is! ChildType) {\r\n        throw new FlutterError(\r\n            'A $runtimeType expected a child of type $ChildType but received a '\r\n            'child of type ${child.runtimeType}.\\n'\r\n            'RenderObjects expect specific types of children because they '\r\n            'coordinate with their children during layout and paint. For '\r\n            'example, a RenderSliver cannot be the child of a RenderBox because '\r\n            'a RenderSliver does not understand the RenderBox layout protocol.\\n'\r\n            '\\n'\r\n            'The $runtimeType that expected a $ChildType child was created by:\\n'\r\n            '  $debugCreator\\n'\r\n            '\\n'\r\n            'The ${child.runtimeType} that did not match the expected child type '\r\n            'was created by:\\n'\r\n            '  ${child.debugCreator}\\n');\r\n      }\r\n      return true;\r\n    }()");
        return true;
      }
      _get(index) {
        return this[_childRenderObjects]._get(index);
      }
      _set(index, child$) {
        let child = child$;
        ChildType._check(child);
        if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/tile_container_render_object_mixin.dart", 53, 12, "child != null");
        if (index == null || dart.notNull(index) < 0) dart.throw(new core.ArgumentError.new(index));
        this[_removeChild](this[_childRenderObjects]._get(index));
        this.adoptChild(child);
        this[_childRenderObjects]._set(index, child);
        return child$;
      }
      forEachChild(f) {
        this[_childRenderObjects].values[$forEach](f);
      }
      remove(index) {
        let child = this[_childRenderObjects].remove(index);
        this[_removeChild](child);
      }
      [_removeChild](child) {
        if (child != null) {
          this.dropChild(child);
        }
      }
      removeAll() {
        this[_childRenderObjects].values[$forEach](dart.bind(this, 'dropChild'));
        this[_childRenderObjects].clear();
      }
      attach(owner) {
        object.PipelineOwner._check(owner);
        super.attach(owner);
        this[_childRenderObjects].values[$forEach](dart.fn(child => child.attach(owner), ChildTypeTovoid()));
      }
      detach() {
        super.detach();
        this[_childRenderObjects].values[$forEach](dart.fn(child => child.detach(), ChildTypeTovoid()));
      }
      redepthChildren() {
        this[_childRenderObjects].values[$forEach](dart.bind(this, 'redepthChild'));
      }
      visitChildren(visitor) {
        this[_childRenderObjects].values[$forEach](visitor);
      }
      debugDescribeChildren() {
        let children = JSArrayOfDiagnosticsNode().of([]);
        this[_childRenderObjects].forEach(dart.fn((index, child) => children[$add](child.toDiagnosticsNode({name: "child " + dart.str(index)})), intAndChildTypeTovoid()));
        return children;
      }
    };
    (TileContainerRenderObjectMixin[dart.mixinNew] = function() {
      this[_childRenderObjects] = new (SplayTreeMapOfint$ChildType()).new();
    }).prototype = TileContainerRenderObjectMixin.prototype;
    dart.addTypeTests(TileContainerRenderObjectMixin);
    TileContainerRenderObjectMixin.prototype[_is_TileContainerRenderObjectMixin_default] = true;
    TileContainerRenderObjectMixin[dart.implements] = () => [object.RenderObject];
    dart.setMethodSignature(TileContainerRenderObjectMixin, () => ({
      __proto__: dart.getMethods(TileContainerRenderObjectMixin.__proto__),
      debugValidateChild: dart.fnType(core.bool, [object.RenderObject]),
      _get: dart.fnType(ChildType, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      forEachChild: dart.fnType(dart.void, [dart.fnType(dart.void, [ChildType])]),
      remove: dart.fnType(dart.void, [core.int]),
      [_removeChild]: dart.fnType(dart.void, [ChildType]),
      removeAll: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(TileContainerRenderObjectMixin, () => ({
      __proto__: dart.getGetters(TileContainerRenderObjectMixin.__proto__),
      childCount: core.int,
      children: core.Iterable$(ChildType),
      indices: core.Iterable$(core.int)
    }));
    dart.setLibraryUri(TileContainerRenderObjectMixin, "package:flutter_staggered_grid_view/src/rendering/tile_container_render_object_mixin.dart");
    dart.setFieldSignature(TileContainerRenderObjectMixin, () => ({
      __proto__: dart.getFields(TileContainerRenderObjectMixin.__proto__),
      [_childRenderObjects]: dart.finalFieldType(collection.SplayTreeMap$(core.int, ChildType))
    }));
    return TileContainerRenderObjectMixin;
  });
  tile_container_render_object_mixin.TileContainerRenderObjectMixin = tile_container_render_object_mixin.TileContainerRenderObjectMixin$();
  dart.addTypeTests(tile_container_render_object_mixin.TileContainerRenderObjectMixin, _is_TileContainerRenderObjectMixin_default);
  const crossAxisOffset = dart.privateName(sliver_variable_size_box_adaptor, "SliverVariableSizeBoxAdaptorParentData.crossAxisOffset");
  sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData = class SliverVariableSizeBoxAdaptorParentData extends sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData {
    get crossAxisOffset() {
      return this[crossAxisOffset];
    }
    set crossAxisOffset(value) {
      this[crossAxisOffset] = value;
    }
    toString() {
      return "crossAxisOffset=" + dart.str(this.crossAxisOffset) + "; " + dart.str(super.toString());
    }
  };
  (sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.new = function() {
    this[crossAxisOffset] = null;
    this[_keptAlive] = false;
    sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.prototype;
  dart.addTypeTests(sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData);
  dart.setLibraryUri(sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData, "package:flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart");
  dart.setFieldSignature(sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData, () => ({
    __proto__: dart.getFields(sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.__proto__),
    crossAxisOffset: dart.fieldType(core.double),
    [_keptAlive]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData, ['toString']);
  const RenderSliver_TileContainerRenderObjectMixin$36 = class RenderSliver_TileContainerRenderObjectMixin extends sliver.RenderSliver {};
  (RenderSliver_TileContainerRenderObjectMixin$36.new = function() {
    tile_container_render_object_mixin.TileContainerRenderObjectMixin$(box.RenderBox, sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData)[dart.mixinNew].call(this);
    RenderSliver_TileContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_TileContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderSliver_TileContainerRenderObjectMixin$36, tile_container_render_object_mixin.TileContainerRenderObjectMixin$(box.RenderBox, sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData));
  const RenderSliver_RenderSliverWithKeepAliveMixin$36 = class RenderSliver_RenderSliverWithKeepAliveMixin extends RenderSliver_TileContainerRenderObjectMixin$36 {};
  (RenderSliver_RenderSliverWithKeepAliveMixin$36.new = function() {
    RenderSliver_RenderSliverWithKeepAliveMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverWithKeepAliveMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverWithKeepAliveMixin$36, sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_RenderSliverWithKeepAliveMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver.RenderSliverHelpers);
  sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor = class RenderSliverVariableSizeBoxAdaptor extends RenderSliver_RenderSliverHelpers$36 {
    setupParentData(child) {
      object.RenderObject._check(child);
      if (!sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.is(child.parentData)) {
        child.parentData = new sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.new();
      }
    }
    get childManager() {
      return this[_childManager];
    }
    adoptChild(child) {
      object.RenderObject._check(child);
      super.adoptChild(child);
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      if (!dart.test(childParentData[_keptAlive])) this.childManager.didAdoptChild(box.RenderBox._check(child));
    }
    [_debugAssertChildListLocked]() {
      return this.childManager.debugAssertChildListLocked();
    }
    remove(index) {
      let child = this._get(index);
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      if (!dart.test(childParentData[_keptAlive])) {
        super.remove(index);
        return;
      }
      if (!dart.equals(this[_keepAliveBucket][$_get](childParentData.index), child)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 214, 12, "_keepAliveBucket[childParentData.index] == child");
      this[_keepAliveBucket][$remove](childParentData.index);
      this.dropChild(child);
    }
    removeAll() {
      super.removeAll();
      this[_keepAliveBucket][$values][$forEach](dart.bind(this, 'dropChild'));
      this[_keepAliveBucket][$clear]();
    }
    [_createOrObtainChild](index) {
      this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
        if (!dart.equals(constraints, this.constraints)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 228, 14, "constraints == this.constraints");
        if (dart.test(this[_keepAliveBucket][$containsKey](index))) {
          let child = this[_keepAliveBucket][$remove](index);
          let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
          if (!dart.test(childParentData[_keptAlive])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 233, 16, "childParentData._keptAlive");
          this.dropChild(child);
          child.parentData = childParentData;
          this._set(index, child);
          childParentData[_keptAlive] = false;
        } else {
          this[_childManager].createChild(index);
        }
      }, SliverConstraintsToNull()));
    }
    [_destroyOrCacheChild](index) {
      let child = this._get(index);
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      if (dart.test(childParentData.keepAlive)) {
        if (!!dart.test(childParentData[_keptAlive])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 249, 14, "!childParentData._keptAlive");
        this.remove(index);
        this[_keepAliveBucket][$_set](childParentData.index, child);
        child.parentData = childParentData;
        super.adoptChild(child);
        childParentData[_keptAlive] = true;
      } else {
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 256, 14, "child.parent == this");
        this[_childManager].removeChild(child);
        if (!(child.parent == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 258, 14, "child.parent == null");
      }
    }
    attach(owner) {
      object.PipelineOwner._check(owner);
      super.attach(owner);
      this[_keepAliveBucket][$values][$forEach](dart.fn(child => child.attach(owner), RenderBoxTovoid()));
    }
    detach() {
      super.detach();
      this[_keepAliveBucket][$values][$forEach](dart.fn(child => child.detach(), RenderBoxTovoid()));
    }
    redepthChildren() {
      super.redepthChildren();
      this[_keepAliveBucket][$values][$forEach](dart.bind(this, 'redepthChild'));
    }
    visitChildren(visitor) {
      super.visitChildren(visitor);
      this[_keepAliveBucket][$values][$forEach](visitor);
    }
    addChild(index) {
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 287, 12, "_debugAssertChildListLocked()");
      this[_createOrObtainChild](index);
      let child = this._get(index);
      if (child != null) {
        if (!(this.indexOf(child) == index)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 291, 14, "indexOf(child) == index");
        return true;
      }
      this.childManager.setDidUnderflow(true);
      return false;
    }
    addAndLayoutChild(index, childConstraints, opts) {
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 303, 12, "_debugAssertChildListLocked()");
      this[_createOrObtainChild](index);
      let child = this._get(index);
      if (child != null) {
        if (!(this.indexOf(child) == index)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 307, 14, "indexOf(child) == index");
        child.layout(childConstraints, {parentUsesSize: parentUsesSize});
        return child;
      }
      this.childManager.setDidUnderflow(true);
      return null;
    }
    collectGarbage(visibleIndices) {
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 326, 12, "_debugAssertChildListLocked()");
      if (!(dart.notNull(this.childCount) >= dart.notNull(visibleIndices[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 327, 12, "childCount >= visibleIndices.length");
      this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
        this.indices[$toSet]().difference(visibleIndices)[$forEach](dart.bind(this, _destroyOrCacheChild));
        this[_keepAliveBucket][$values][$where](dart.fn(child => {
          let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
          return !dart.test(childParentData.keepAlive);
        }, RenderBoxTobool()))[$toList]()[$forEach](dart.bind(this[_childManager], 'removeChild'));
        if (!dart.test(this[_keepAliveBucket][$values][$where](dart.fn(child => {
          let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
          return !dart.test(childParentData.keepAlive);
        }, RenderBoxTobool()))[$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 343, 14, "_keepAliveBucket.values.where((RenderBox child) {\r\n        final SliverVariableSizeBoxAdaptorParentData childParentData =\r\n            child.parentData;\r\n        return !childParentData.keepAlive;\r\n      }).isEmpty");
      }, SliverConstraintsToNull()));
    }
    indexOf(child) {
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 354, 12, "child != null");
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      if (!(childParentData.index != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 357, 12, "childParentData.index != null");
      return childParentData.index;
    }
    paintExtentOf(child) {
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 365, 12, "child != null");
      if (!dart.test(child.hasSize)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 366, 12, "child.hasSize");
      switch (this.constraints.axis) {
        case C1 || CT.C1:
        {
          return child.size.width;
        }
        case C2 || CT.C2:
        {
          return child.size.height;
        }
      }
      return null;
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      for (let child of this.children) {
        if (dart.test(this.hitTestBoxChild(new box.BoxHitTestResult.wrap(result), child, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}))) return true;
      }
      return false;
    }
    childMainAxisPosition(child) {
      box.RenderBox._check(child);
      return dart.notNull(this.childScrollOffset(child)) - dart.notNull(this.constraints.scrollOffset);
    }
    childCrossAxisPosition(child) {
      box.RenderBox._check(child);
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      return childParentData.crossAxisOffset;
    }
    childScrollOffset(child) {
      object.RenderObject._check(child);
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 401, 12, "child != null");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 402, 12, "child.parent == this");
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      if (!(childParentData.layoutOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 405, 12, "childParentData.layoutOffset != null");
      return childParentData.layoutOffset;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject._check(child);
      this.applyPaintTransformForBoxChild(box.RenderBox._check(child), transform);
    }
    paint(context, offset) {
      if (this.childCount === 0) return;
      let mainAxisUnit = null;
      let crossAxisUnit = null;
      let originOffset = null;
      let addExtent = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C5 || CT.C5:
        {
          mainAxisUnit = C3 || CT.C3;
          crossAxisUnit = C4 || CT.C4;
          originOffset = offset['+'](new ui.Offset.new(0.0, this.geometry.paintExtent));
          addExtent = true;
          break;
        }
        case C7 || CT.C7:
        {
          mainAxisUnit = C4 || CT.C4;
          crossAxisUnit = C6 || CT.C6;
          originOffset = offset;
          addExtent = false;
          break;
        }
        case C8 || CT.C8:
        {
          mainAxisUnit = C6 || CT.C6;
          crossAxisUnit = C4 || CT.C4;
          originOffset = offset;
          addExtent = false;
          break;
        }
        case C10 || CT.C10:
        {
          mainAxisUnit = C9 || CT.C9;
          crossAxisUnit = C6 || CT.C6;
          originOffset = offset['+'](new ui.Offset.new(this.geometry.paintExtent, 0.0));
          addExtent = true;
          break;
        }
      }
      if (!(mainAxisUnit != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 448, 12, "mainAxisUnit != null");
      if (!(addExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 449, 12, "addExtent != null");
      for (let child of this.children) {
        let mainAxisDelta = this.childMainAxisPosition(child);
        let crossAxisDelta = this.childCrossAxisPosition(child);
        let childOffset = new ui.Offset.new(dart.notNull(originOffset.dx) + dart.notNull(mainAxisUnit.dx) * dart.notNull(mainAxisDelta) + dart.notNull(crossAxisUnit.dx) * dart.notNull(crossAxisDelta), dart.notNull(originOffset.dy) + dart.notNull(mainAxisUnit.dy) * dart.notNull(mainAxisDelta) + dart.notNull(crossAxisUnit.dy) * dart.notNull(crossAxisDelta));
        if (dart.test(addExtent)) childOffset = childOffset['+'](mainAxisUnit['*'](this.paintExtentOf(child)));
        context.paintChild(child, childOffset);
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(diagnostics.DiagnosticsNode.message(dart.notNull(this.childCount) > 0 ? "currently live children: " + dart.str(this.indices[$join](",")) : "no children current live"));
    }
    debugDescribeChildren() {
      let t0;
      let childList = JSArrayOfDiagnosticsNode().of([]);
      if (dart.notNull(this.childCount) > 0) {
        for (let child of this.children) {
          let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
          childList[$add](child.toDiagnosticsNode({name: "child with index " + dart.str(childParentData.index)}));
        }
      }
      if (dart.test(this[_keepAliveBucket][$isNotEmpty])) {
        let indices = (t0 = this[_keepAliveBucket][$keys][$toList](), t0[$sort](), t0);
        for (let index of indices) {
          childList[$add](this[_keepAliveBucket][$_get](index).toDiagnosticsNode({name: "child with index " + dart.str(index) + " (kept alive offstage)", style: diagnostics.DiagnosticsTreeStyle.offstage}));
        }
      }
      return childList;
    }
  };
  (sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    this[_keepAliveBucket] = new (IdentityMapOfint$RenderBox()).new();
    if (!(childManager != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart", 171, 16, "childManager != null");
    this[_childManager] = childManager;
    sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor.__proto__.new.call(this);
    ;
  }).prototype = sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor.prototype;
  dart.addTypeTests(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor);
  dart.setMethodSignature(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor, () => ({
    __proto__: dart.getMethods(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor.__proto__),
    [_debugAssertChildListLocked]: dart.fnType(core.bool, []),
    [_createOrObtainChild]: dart.fnType(dart.void, [core.int]),
    [_destroyOrCacheChild]: dart.fnType(dart.void, [core.int]),
    addChild: dart.fnType(core.bool, [core.int]),
    addAndLayoutChild: dart.fnType(box.RenderBox, [core.int, box.BoxConstraints], {parentUsesSize: core.bool}, {}),
    collectGarbage: dart.fnType(dart.void, [core.Set$(core.int)]),
    indexOf: dart.fnType(core.int, [box.RenderBox]),
    paintExtentOf: dart.fnType(core.double, [box.RenderBox]),
    hitTestChildren: dart.fnType(core.bool, [hit_test.HitTestResult], {crossAxisPosition: core.double, mainAxisPosition: core.double}, {})
  }));
  dart.setGetterSignature(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor, () => ({
    __proto__: dart.getGetters(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor.__proto__),
    childManager: sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager
  }));
  dart.setLibraryUri(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor, "package:flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart");
  dart.setFieldSignature(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor, () => ({
    __proto__: dart.getFields(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor.__proto__),
    [_childManager]: dart.finalFieldType(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager),
    [_keepAliveBucket]: dart.finalFieldType(core.Map$(core.int, box.RenderBox))
  }));
  sliver_staggered_grid.RenderSliverStaggeredGrid = class RenderSliverStaggeredGrid extends sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor {
    setupParentData(child) {
      object.RenderObject._check(child);
      if (!sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.is(child.parentData)) {
        let data = new sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData.new();
        child.parentData = data;
      }
    }
    get gridDelegate() {
      return this[_gridDelegate];
    }
    set gridDelegate(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 237, 12, "value != null");
      if (dart.equals(this[_gridDelegate], value)) return;
      if (!dart.equals(dart.runtimeType(value), dart.runtimeType(this[_gridDelegate])) || dart.test(value.shouldRelayout(this[_gridDelegate]))) this.markNeedsLayout();
      this[_gridDelegate] = value;
    }
    performLayout() {
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let scrollOffset = dart.notNull(this.constraints.scrollOffset) + dart.notNull(this.constraints.cacheOrigin);
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 254, 12, "scrollOffset >= 0.0");
      let remainingExtent = this.constraints.remainingCacheExtent;
      if (!(dart.notNull(remainingExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 256, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + dart.notNull(remainingExtent);
      let reachedEnd = false;
      let trailingScrollOffset = 0.0;
      let leadingScrollOffset = 1 / 0;
      let visible = false;
      let firstIndex = 0;
      let lastIndex = 0;
      let configuration = this[_gridDelegate].getConfiguration(this.constraints);
      let pageSize = dart.notNull(configuration.mainAxisOffsetsCacheSize) * dart.notNull(this.constraints.viewportMainAxisExtent);
      if (pageSize === 0.0) {
        this.geometry = sliver.SliverGeometry.zero;
        this.childManager.didFinishLayout();
        return;
      }
      let pageIndex = (scrollOffset / pageSize)[$truncate]();
      if (!(pageIndex >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 277, 12, "pageIndex >= 0");
      let viewportOffsets = this[_pageSizeToViewportOffsets][$putIfAbsent](pageSize, dart.fn(() => new (SplayTreeMapOfint$_ViewportOffsets()).new(), VoidToSplayTreeMapOfint$_ViewportOffsets()));
      let viewportOffset = null;
      if (dart.test(viewportOffsets.isEmpty)) {
        viewportOffset = new sliver_staggered_grid._ViewportOffsets.new(configuration.generateMainAxisOffsets(), pageSize);
        viewportOffsets._set(0, viewportOffset);
      } else {
        let smallestKey = viewportOffsets.lastKeyBefore(pageIndex + 1);
        viewportOffset = viewportOffsets._get(smallestKey);
      }
      let mainAxisOffsets = viewportOffset.mainAxisOffsets[$toList]();
      let visibleIndices = new (_IdentityHashSetOfint()).new();
      for (let index = viewportOffset.firstChildIndex; dart.test(mainAxisOffsets[$any](dart.fn(o => dart.notNull(o) <= targetEndScrollOffset, doubleTobool()))); index = dart.notNull(index) + 1) {
        let geometry = sliver_staggered_grid.RenderSliverStaggeredGrid.getSliverStaggeredGeometry(index, configuration, mainAxisOffsets);
        if (geometry == null) {
          reachedEnd = true;
          break;
        }
        let hasTrailingScrollOffset = geometry.hasTrailingScrollOffset;
        let child = null;
        if (!dart.test(hasTrailingScrollOffset)) {
          let constraints = new box.BoxConstraints.tightFor({width: geometry.crossAxisExtent});
          child = this.addAndLayoutChild(index, constraints, {parentUsesSize: true});
          geometry = geometry.copyWith({mainAxisExtent: this.paintExtentOf(child)});
        }
        if (!visible && targetEndScrollOffset >= dart.notNull(geometry.scrollOffset) && scrollOffset <= dart.notNull(geometry.trailingScrollOffset)) {
          visible = true;
          leadingScrollOffset = geometry.scrollOffset;
          firstIndex = index;
        }
        if (visible && dart.test(hasTrailingScrollOffset)) {
          child = this.addAndLayoutChild(index, geometry.getBoxConstraints(this.constraints));
        }
        if (child != null) {
          let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
          childParentData.layoutOffset = geometry.scrollOffset;
          childParentData.crossAxisOffset = geometry.crossAxisOffset;
          if (!(childParentData.index == index)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 338, 16, "childParentData.index == index");
        }
        if (visible && dart.test(this.indices[$contains](index))) {
          visibleIndices.add(index);
        }
        if (dart.notNull(geometry.trailingScrollOffset) >= dart.notNull(viewportOffset.trailingScrollOffset)) {
          let nextPageIndex = dart.notNull(viewportOffset.pageIndex) + 1;
          let nextViewportOffset = new sliver_staggered_grid._ViewportOffsets.new(mainAxisOffsets, (nextPageIndex + 1) * pageSize, nextPageIndex, index);
          viewportOffsets._set(nextPageIndex, nextViewportOffset);
          viewportOffset = nextViewportOffset;
        }
        let endOffset = dart.notNull(geometry.trailingScrollOffset) + dart.notNull(configuration.mainAxisSpacing);
        for (let i = 0; i < dart.notNull(geometry.crossAxisCellCount); i = i + 1) {
          mainAxisOffsets[$_set](i + dart.notNull(geometry.blockIndex), endOffset);
        }
        trailingScrollOffset = mainAxisOffsets[$reduce](dart.gbind(C0 || CT.C0, core.double));
        lastIndex = index;
      }
      this.collectGarbage(visibleIndices);
      if (!visible) {
        if (scrollOffset > dart.notNull(viewportOffset.trailingScrollOffset)) {
          let viewportOffsetScrollOffset = pageSize * dart.notNull(viewportOffset.pageIndex);
          let correction = viewportOffsetScrollOffset - scrollOffset;
          this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: correction});
        } else {
          this.geometry = sliver.SliverGeometry.zero;
          this.childManager.didFinishLayout();
        }
        return;
      }
      let estimatedMaxScrollOffset = null;
      if (reachedEnd) {
        estimatedMaxScrollOffset = trailingScrollOffset;
      } else {
        estimatedMaxScrollOffset = this.childManager.estimateMaxScrollOffset(this.constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset});
        if (!(dart.notNull(estimatedMaxScrollOffset) >= dart.notNull(trailingScrollOffset) - dart.notNull(leadingScrollOffset))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 392, 14, "estimatedMaxScrollOffset >=\r\n          trailingScrollOffset - leadingScrollOffset");
      }
      let paintExtent = this.calculatePaintOffset(this.constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      let cacheExtent = this.calculateCacheOffset(this.constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedMaxScrollOffset, paintExtent: paintExtent, cacheExtent: cacheExtent, maxPaintExtent: estimatedMaxScrollOffset, hasVisualOverflow: dart.notNull(trailingScrollOffset) > targetEndScrollOffset || dart.notNull(this.constraints.scrollOffset) > 0.0});
      if (estimatedMaxScrollOffset == trailingScrollOffset) this.childManager.setDidUnderflow(true);
      this.childManager.didFinishLayout();
    }
    static getSliverStaggeredGeometry(index, configuration, offsets) {
      let tile = configuration.getStaggeredTile(index);
      if (tile == null) return null;
      let block = sliver_staggered_grid.RenderSliverStaggeredGrid._findFirstAvailableBlockWithCrossAxisCount(tile.crossAxisCellCount, offsets);
      let scrollOffset = block.minOffset;
      let blockIndex = block.index;
      if (dart.test(configuration.reverseCrossAxis)) {
        blockIndex = dart.notNull(configuration.crossAxisCount) - dart.notNull(tile.crossAxisCellCount) - dart.notNull(blockIndex);
      }
      let crossAxisOffset = dart.notNull(blockIndex) * dart.notNull(configuration.cellStride);
      let geometry = new sliver_staggered_grid.SliverStaggeredGridGeometry.new({scrollOffset: scrollOffset, crossAxisOffset: crossAxisOffset, mainAxisExtent: tile.mainAxisExtent, crossAxisExtent: dart.notNull(configuration.cellStride) * dart.notNull(tile.crossAxisCellCount) - dart.notNull(configuration.crossAxisSpacing), crossAxisCellCount: tile.crossAxisCellCount, blockIndex: block.index});
      return geometry;
    }
    static _findFirstAvailableBlockWithCrossAxisCount(crossAxisCount, offsets) {
      return sliver_staggered_grid.RenderSliverStaggeredGrid._findFirstAvailableBlockWithCrossAxisCountAndOffsets(crossAxisCount, ListOfdouble().from(offsets));
    }
    static _findFirstAvailableBlockWithCrossAxisCountAndOffsets(crossAxisCount, offsets) {
      let block = sliver_staggered_grid.RenderSliverStaggeredGrid._findFirstAvailableBlock(offsets);
      if (dart.notNull(block.crossAxisCount) < dart.notNull(crossAxisCount)) {
        for (let i = 0; i < dart.notNull(block.crossAxisCount); i = i + 1) {
          offsets[$_set](i + dart.notNull(block.index), block.maxOffset);
        }
        return sliver_staggered_grid.RenderSliverStaggeredGrid._findFirstAvailableBlockWithCrossAxisCountAndOffsets(crossAxisCount, offsets);
      } else {
        return block;
      }
    }
    static _findFirstAvailableBlock(offsets) {
      let index = 0;
      let minBlockOffset = 1 / 0;
      let maxBlockOffset = 1 / 0;
      let crossAxisCount = 1;
      let contiguous = false;
      for (let i = index; i < dart.notNull(offsets[$length]); i = i + 1) {
        let offset = offsets[$_get](i);
        if (dart.notNull(offset) < dart.notNull(minBlockOffset) && !dart.test(sliver_staggered_grid._nearEqual(offset, minBlockOffset))) {
          index = i;
          maxBlockOffset = minBlockOffset;
          minBlockOffset = offset;
          crossAxisCount = 1;
          contiguous = true;
        } else if (dart.test(sliver_staggered_grid._nearEqual(offset, minBlockOffset)) && contiguous) {
          crossAxisCount = crossAxisCount + 1;
        } else if (dart.notNull(offset) < dart.notNull(maxBlockOffset) && dart.notNull(offset) > dart.notNull(minBlockOffset) && !dart.test(sliver_staggered_grid._nearEqual(offset, minBlockOffset))) {
          contiguous = false;
          maxBlockOffset = offset;
        } else {
          contiguous = false;
        }
      }
      return new sliver_staggered_grid._Block.new(index, crossAxisCount, minBlockOffset, maxBlockOffset);
    }
  };
  (sliver_staggered_grid.RenderSliverStaggeredGrid.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    if (!(gridDelegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 216, 16, "gridDelegate != null");
    this[_gridDelegate] = gridDelegate;
    this[_pageSizeToViewportOffsets] = new (IdentityMapOfdouble$SplayTreeMapOfint$_ViewportOffsets()).new();
    sliver_staggered_grid.RenderSliverStaggeredGrid.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_staggered_grid.RenderSliverStaggeredGrid.prototype;
  dart.addTypeTests(sliver_staggered_grid.RenderSliverStaggeredGrid);
  dart.setMethodSignature(sliver_staggered_grid.RenderSliverStaggeredGrid, () => ({
    __proto__: dart.getMethods(sliver_staggered_grid.RenderSliverStaggeredGrid.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_staggered_grid.RenderSliverStaggeredGrid, () => ({
    __proto__: dart.getGetters(sliver_staggered_grid.RenderSliverStaggeredGrid.__proto__),
    gridDelegate: sliver_staggered_grid.SliverStaggeredGridDelegate
  }));
  dart.setSetterSignature(sliver_staggered_grid.RenderSliverStaggeredGrid, () => ({
    __proto__: dart.getSetters(sliver_staggered_grid.RenderSliverStaggeredGrid.__proto__),
    gridDelegate: sliver_staggered_grid.SliverStaggeredGridDelegate
  }));
  dart.setLibraryUri(sliver_staggered_grid.RenderSliverStaggeredGrid, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid.RenderSliverStaggeredGrid, () => ({
    __proto__: dart.getFields(sliver_staggered_grid.RenderSliverStaggeredGrid.__proto__),
    [_gridDelegate]: dart.fieldType(sliver_staggered_grid.SliverStaggeredGridDelegate),
    [_pageSizeToViewportOffsets]: dart.fieldType(collection.HashMap$(core.double, collection.SplayTreeMap$(core.int, sliver_staggered_grid._ViewportOffsets)))
  }));
  sliver_staggered_grid._ViewportOffsets = class _ViewportOffsets extends core.Object {
    toString() {
      return "[" + dart.str(this.pageIndex) + "-" + dart.str(this.trailingScrollOffset) + "] (" + dart.str(this.firstChildIndex) + ", " + dart.str(this.mainAxisOffsets) + ")";
    }
  };
  (sliver_staggered_grid._ViewportOffsets.new = function(mainAxisOffsets, trailingScrollOffset, pageIndex = 0, firstChildIndex = 0) {
    this.trailingScrollOffset = trailingScrollOffset;
    this.pageIndex = pageIndex;
    this.firstChildIndex = firstChildIndex;
    this.mainAxisOffsets = ListOfdouble().from(mainAxisOffsets);
    ;
  }).prototype = sliver_staggered_grid._ViewportOffsets.prototype;
  dart.addTypeTests(sliver_staggered_grid._ViewportOffsets);
  dart.setLibraryUri(sliver_staggered_grid._ViewportOffsets, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid._ViewportOffsets, () => ({
    __proto__: dart.getFields(sliver_staggered_grid._ViewportOffsets.__proto__),
    pageIndex: dart.finalFieldType(core.int),
    firstChildIndex: dart.finalFieldType(core.int),
    trailingScrollOffset: dart.finalFieldType(core.double),
    mainAxisOffsets: dart.finalFieldType(core.List$(core.double))
  }));
  dart.defineExtensionMethods(sliver_staggered_grid._ViewportOffsets, ['toString']);
  const _debugAssertIsValid = dart.privateName(sliver_staggered_grid, "_debugAssertIsValid");
  const mainAxisSpacing$0 = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridDelegate.mainAxisSpacing");
  const crossAxisSpacing$0 = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridDelegate.crossAxisSpacing");
  const staggeredTileBuilder$0 = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridDelegate.staggeredTileBuilder");
  const staggeredTileCount$0 = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridDelegate.staggeredTileCount");
  sliver_staggered_grid.SliverStaggeredGridDelegate = class SliverStaggeredGridDelegate extends core.Object {
    get mainAxisSpacing() {
      return this[mainAxisSpacing$0];
    }
    set mainAxisSpacing(value) {
      super.mainAxisSpacing = value;
    }
    get crossAxisSpacing() {
      return this[crossAxisSpacing$0];
    }
    set crossAxisSpacing(value) {
      super.crossAxisSpacing = value;
    }
    get staggeredTileBuilder() {
      return this[staggeredTileBuilder$0];
    }
    set staggeredTileBuilder(value) {
      super.staggeredTileBuilder = value;
    }
    get staggeredTileCount() {
      return this[staggeredTileCount$0];
    }
    set staggeredTileCount(value) {
      super.staggeredTileCount = value;
    }
    [_debugAssertIsValid]() {
      if (!(this.staggeredTileBuilder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 574, 12, "staggeredTileBuilder != null");
      if (!(dart.notNull(this.mainAxisSpacing) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 575, 12, "mainAxisSpacing >= 0.0");
      if (!(dart.notNull(this.crossAxisSpacing) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 576, 12, "crossAxisSpacing >= 0.0");
      return true;
    }
    shouldRelayout(oldDelegate) {
      return oldDelegate.mainAxisSpacing != this.mainAxisSpacing || oldDelegate.crossAxisSpacing != this.crossAxisSpacing || oldDelegate.staggeredTileCount != this.staggeredTileCount || !dart.equals(oldDelegate.staggeredTileBuilder, this.staggeredTileBuilder);
    }
  };
  (sliver_staggered_grid.SliverStaggeredGridDelegate.new = function(opts) {
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let staggeredTileCount = opts && 'staggeredTileCount' in opts ? opts.staggeredTileCount : null;
    this[staggeredTileBuilder$0] = staggeredTileBuilder;
    this[mainAxisSpacing$0] = mainAxisSpacing;
    this[crossAxisSpacing$0] = crossAxisSpacing;
    this[staggeredTileCount$0] = staggeredTileCount;
    if (!(staggeredTileBuilder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 553, 16, "staggeredTileBuilder != null");
    if (!(mainAxisSpacing != null && dart.notNull(mainAxisSpacing) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 554, 16, "mainAxisSpacing != null && mainAxisSpacing >= 0");
    if (!(crossAxisSpacing != null && dart.notNull(crossAxisSpacing) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 555, 16, "crossAxisSpacing != null && crossAxisSpacing >= 0");
    ;
  }).prototype = sliver_staggered_grid.SliverStaggeredGridDelegate.prototype;
  dart.addTypeTests(sliver_staggered_grid.SliverStaggeredGridDelegate);
  dart.setMethodSignature(sliver_staggered_grid.SliverStaggeredGridDelegate, () => ({
    __proto__: dart.getMethods(sliver_staggered_grid.SliverStaggeredGridDelegate.__proto__),
    [_debugAssertIsValid]: dart.fnType(core.bool, []),
    shouldRelayout: dart.fnType(core.bool, [sliver_staggered_grid.SliverStaggeredGridDelegate])
  }));
  dart.setLibraryUri(sliver_staggered_grid.SliverStaggeredGridDelegate, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid.SliverStaggeredGridDelegate, () => ({
    __proto__: dart.getFields(sliver_staggered_grid.SliverStaggeredGridDelegate.__proto__),
    mainAxisSpacing: dart.finalFieldType(core.double),
    crossAxisSpacing: dart.finalFieldType(core.double),
    staggeredTileBuilder: dart.finalFieldType(dart.fnType(staggered_tile.StaggeredTile, [core.int])),
    staggeredTileCount: dart.finalFieldType(core.int)
  }));
  const crossAxisCount$1 = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridDelegateWithFixedCrossAxisCount.crossAxisCount");
  sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount = class SliverStaggeredGridDelegateWithFixedCrossAxisCount extends sliver_staggered_grid.SliverStaggeredGridDelegate {
    get crossAxisCount() {
      return this[crossAxisCount$1];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    [_debugAssertIsValid]() {
      if (!(dart.notNull(this.crossAxisCount) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 642, 12, "crossAxisCount > 0");
      return super[_debugAssertIsValid]();
    }
    getConfiguration(constraints) {
      if (!dart.test(this[_debugAssertIsValid]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 648, 12, "_debugAssertIsValid()");
      let usableCrossAxisExtent = dart.notNull(constraints.crossAxisExtent) - dart.notNull(this.crossAxisSpacing) * (dart.notNull(this.crossAxisCount) - 1);
      let cellExtent = usableCrossAxisExtent / dart.notNull(this.crossAxisCount);
      return new sliver_staggered_grid.StaggeredGridConfiguration.new({crossAxisCount: this.crossAxisCount, staggeredTileBuilder: this.staggeredTileBuilder, staggeredTileCount: this.staggeredTileCount, cellExtent: cellExtent, mainAxisSpacing: this.mainAxisSpacing, crossAxisSpacing: this.crossAxisSpacing, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount._check(oldDelegate);
      return oldDelegate.crossAxisCount != this.crossAxisCount || dart.test(super.shouldRelayout(oldDelegate));
    }
  };
  (sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let staggeredTileCount = opts && 'staggeredTileCount' in opts ? opts.staggeredTileCount : null;
    this[crossAxisCount$1] = crossAxisCount;
    if (!(crossAxisCount != null && dart.notNull(crossAxisCount) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 629, 16, "crossAxisCount != null && crossAxisCount > 0");
    sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.__proto__.new.call(this, {staggeredTileBuilder: staggeredTileBuilder, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileCount: staggeredTileCount});
    ;
  }).prototype = sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.prototype;
  dart.addTypeTests(sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount);
  dart.setMethodSignature(sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount, () => ({
    __proto__: dart.getMethods(sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.__proto__),
    getConfiguration: dart.fnType(sliver_staggered_grid.StaggeredGridConfiguration, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount, () => ({
    __proto__: dart.getFields(sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.__proto__),
    crossAxisCount: dart.finalFieldType(core.int)
  }));
  const maxCrossAxisExtent$ = dart.privateName(sliver_staggered_grid, "SliverStaggeredGridDelegateWithMaxCrossAxisExtent.maxCrossAxisExtent");
  sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent = class SliverStaggeredGridDelegateWithMaxCrossAxisExtent extends sliver_staggered_grid.SliverStaggeredGridDelegate {
    get maxCrossAxisExtent() {
      return this[maxCrossAxisExtent$];
    }
    set maxCrossAxisExtent(value) {
      super.maxCrossAxisExtent = value;
    }
    [_debugAssertIsValid]() {
      if (!(dart.notNull(this.maxCrossAxisExtent) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 732, 12, "maxCrossAxisExtent >= 0");
      return super[_debugAssertIsValid]();
    }
    getConfiguration(constraints) {
      if (!dart.test(this[_debugAssertIsValid]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 738, 12, "_debugAssertIsValid()");
      let crossAxisCount = ((dart.notNull(constraints.crossAxisExtent) + dart.notNull(this.crossAxisSpacing)) / (dart.notNull(this.maxCrossAxisExtent) + dart.notNull(this.crossAxisSpacing)))[$ceil]();
      let usableCrossAxisExtent = dart.notNull(constraints.crossAxisExtent) - dart.notNull(this.crossAxisSpacing) * (crossAxisCount - 1);
      let cellExtent = usableCrossAxisExtent / crossAxisCount;
      return new sliver_staggered_grid.StaggeredGridConfiguration.new({crossAxisCount: crossAxisCount, staggeredTileBuilder: this.staggeredTileBuilder, staggeredTileCount: this.staggeredTileCount, cellExtent: cellExtent, mainAxisSpacing: this.mainAxisSpacing, crossAxisSpacing: this.crossAxisSpacing, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent._check(oldDelegate);
      return oldDelegate.maxCrossAxisExtent != this.maxCrossAxisExtent || dart.test(super.shouldRelayout(oldDelegate));
    }
  };
  (sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.new = function(opts) {
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let staggeredTileCount = opts && 'staggeredTileCount' in opts ? opts.staggeredTileCount : null;
    this[maxCrossAxisExtent$] = maxCrossAxisExtent;
    if (!(maxCrossAxisExtent != null && dart.notNull(maxCrossAxisExtent) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart", 709, 16, "maxCrossAxisExtent != null && maxCrossAxisExtent > 0");
    sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.__proto__.new.call(this, {staggeredTileBuilder: staggeredTileBuilder, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileCount: staggeredTileCount});
    ;
  }).prototype = sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.prototype;
  dart.addTypeTests(sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent);
  dart.setMethodSignature(sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent, () => ({
    __proto__: dart.getMethods(sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.__proto__),
    getConfiguration: dart.fnType(sliver_staggered_grid.StaggeredGridConfiguration, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent, "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart");
  dart.setFieldSignature(sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent, () => ({
    __proto__: dart.getFields(sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.__proto__),
    maxCrossAxisExtent: dart.finalFieldType(core.double)
  }));
  sliver_staggered_grid._nearEqual = function _nearEqual(d1, d2) {
    return (dart.notNull(d1) - dart.notNull(d2))[$abs]() < 0.0001;
  };
  dart.defineLazy(sliver_staggered_grid, {
    /*sliver_staggered_grid._epsilon*/get _epsilon() {
      return 0.0001;
    }
  });
  sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager = class RenderSliverVariableSizeBoxChildManager extends core.Object {
    didStartLayout() {
    }
    didFinishLayout() {
    }
    debugAssertChildListLocked() {
      return true;
    }
  };
  (sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager.new = function() {
    ;
  }).prototype = sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager.prototype;
  dart.addTypeTests(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager);
  dart.setMethodSignature(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager, () => ({
    __proto__: dart.getMethods(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager.__proto__),
    didStartLayout: dart.fnType(dart.void, []),
    didFinishLayout: dart.fnType(dart.void, []),
    debugAssertChildListLocked: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager, "package:flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart");
  const crossAxisCellCount$0 = dart.privateName(staggered_tile, "StaggeredTile.crossAxisCellCount");
  const mainAxisCellCount$ = dart.privateName(staggered_tile, "StaggeredTile.mainAxisCellCount");
  const mainAxisExtent$ = dart.privateName(staggered_tile, "StaggeredTile.mainAxisExtent");
  staggered_tile.StaggeredTile = class StaggeredTile extends core.Object {
    get crossAxisCellCount() {
      return this[crossAxisCellCount$0];
    }
    set crossAxisCellCount(value) {
      super.crossAxisCellCount = value;
    }
    get mainAxisCellCount() {
      return this[mainAxisCellCount$];
    }
    set mainAxisCellCount(value) {
      super.mainAxisCellCount = value;
    }
    get mainAxisExtent() {
      return this[mainAxisExtent$];
    }
    set mainAxisExtent(value) {
      super.mainAxisExtent = value;
    }
    get fitContent() {
      return this.mainAxisCellCount == null && this.mainAxisExtent == null;
    }
  };
  (staggered_tile.StaggeredTile.count = function(crossAxisCellCount, mainAxisCellCount) {
    this[crossAxisCellCount$0] = crossAxisCellCount;
    this[mainAxisCellCount$] = mainAxisCellCount;
    if (!(crossAxisCellCount != null && dart.notNull(crossAxisCellCount) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_tile.dart", 14, 16, "crossAxisCellCount != null && crossAxisCellCount >= 0");
    if (!(mainAxisCellCount != null && dart.notNull(mainAxisCellCount) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_tile.dart", 15, 16, "mainAxisCellCount != null && mainAxisCellCount >= 0");
    this[mainAxisExtent$] = null;
    ;
  }).prototype = staggered_tile.StaggeredTile.prototype;
  (staggered_tile.StaggeredTile.extent = function(crossAxisCellCount, mainAxisExtent) {
    this[crossAxisCellCount$0] = crossAxisCellCount;
    this[mainAxisExtent$] = mainAxisExtent;
    if (!(crossAxisCellCount != null && dart.notNull(crossAxisCellCount) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_tile.dart", 23, 16, "crossAxisCellCount != null && crossAxisCellCount >= 0");
    if (!(mainAxisExtent != null && dart.notNull(mainAxisExtent) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_tile.dart", 24, 16, "mainAxisExtent != null && mainAxisExtent >= 0");
    this[mainAxisCellCount$] = null;
    ;
  }).prototype = staggered_tile.StaggeredTile.prototype;
  (staggered_tile.StaggeredTile.fit = function(crossAxisCellCount) {
    this[crossAxisCellCount$0] = crossAxisCellCount;
    if (!(crossAxisCellCount != null && dart.notNull(crossAxisCellCount) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_tile.dart", 32, 16, "crossAxisCellCount != null && crossAxisCellCount >= 0");
    this[mainAxisExtent$] = null;
    this[mainAxisCellCount$] = null;
    ;
  }).prototype = staggered_tile.StaggeredTile.prototype;
  dart.addTypeTests(staggered_tile.StaggeredTile);
  dart.setGetterSignature(staggered_tile.StaggeredTile, () => ({
    __proto__: dart.getGetters(staggered_tile.StaggeredTile.__proto__),
    fitContent: core.bool
  }));
  dart.setLibraryUri(staggered_tile.StaggeredTile, "package:flutter_staggered_grid_view/src/widgets/staggered_tile.dart");
  dart.setFieldSignature(staggered_tile.StaggeredTile, () => ({
    __proto__: dart.getFields(staggered_tile.StaggeredTile.__proto__),
    crossAxisCellCount: dart.finalFieldType(core.int),
    mainAxisCellCount: dart.finalFieldType(core.num),
    mainAxisExtent: dart.finalFieldType(core.double)
  }));
  const delegate$ = dart.privateName(sliver$0, "SliverVariableSizeBoxAdaptorWidget.delegate");
  sliver$0.SliverVariableSizeBoxAdaptorWidget = class SliverVariableSizeBoxAdaptorWidget extends sliver$.SliverWithKeepAliveWidget {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    createElement() {
      return new sliver$0.SliverVariableSizeBoxAdaptorElement.new(this);
    }
    estimateMaxScrollOffset(constraints, firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset) {
      if (!(dart.notNull(lastIndex) >= dart.notNull(firstIndex))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 58, 12, "lastIndex >= firstIndex");
      return this.delegate.estimateMaxScrollOffset(firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfSliverChildDelegate()).new("delegate", this.delegate));
    }
  };
  (sliver$0.SliverVariableSizeBoxAdaptorWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    sliver$0.SliverVariableSizeBoxAdaptorWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver$0.SliverVariableSizeBoxAdaptorWidget.prototype;
  dart.addTypeTests(sliver$0.SliverVariableSizeBoxAdaptorWidget);
  dart.setMethodSignature(sliver$0.SliverVariableSizeBoxAdaptorWidget, () => ({
    __proto__: dart.getMethods(sliver$0.SliverVariableSizeBoxAdaptorWidget.__proto__),
    createElement: dart.fnType(sliver$0.SliverVariableSizeBoxAdaptorElement, []),
    estimateMaxScrollOffset: dart.fnType(core.double, [sliver.SliverConstraints, core.int, core.int, core.double, core.double])
  }));
  dart.setLibraryUri(sliver$0.SliverVariableSizeBoxAdaptorWidget, "package:flutter_staggered_grid_view/src/widgets/sliver.dart");
  dart.setFieldSignature(sliver$0.SliverVariableSizeBoxAdaptorWidget, () => ({
    __proto__: dart.getFields(sliver$0.SliverVariableSizeBoxAdaptorWidget.__proto__),
    delegate: dart.finalFieldType(sliver$.SliverChildDelegate)
  }));
  const _childWidgets = dart.privateName(sliver$0, "_childWidgets");
  const _childElements = dart.privateName(sliver$0, "_childElements");
  const _currentlyUpdatingChildIndex = dart.privateName(sliver$0, "_currentlyUpdatingChildIndex");
  const _didUnderflow = dart.privateName(sliver$0, "_didUnderflow");
  const _build = dart.privateName(sliver$0, "_build");
  const _extrapolateMaxScrollOffset = dart.privateName(sliver$0, "_extrapolateMaxScrollOffset");
  sliver$0.SliverVariableSizeBoxAdaptorElement = class SliverVariableSizeBoxAdaptorElement extends framework.RenderObjectElement {
    get widget() {
      return sliver$0.SliverVariableSizeBoxAdaptorWidget._check(super.widget);
    }
    get renderObject() {
      return sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor._check(super.renderObject);
    }
    update(newWidget) {
      sliver$0.SliverVariableSizeBoxAdaptorWidget._check(newWidget);
      let oldWidget = this.widget;
      super.update(newWidget);
      let newDelegate = newWidget.delegate;
      let oldDelegate = oldWidget.delegate;
      if (!dart.equals(newDelegate, oldDelegate) && (!dart.equals(dart.runtimeType(newDelegate), dart.runtimeType(oldDelegate)) || dart.test(newDelegate.shouldRebuild(oldDelegate)))) this.performRebuild();
    }
    performRebuild() {
      this[_childWidgets][$clear]();
      super.performRebuild();
      if (!(this[_currentlyUpdatingChildIndex] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 117, 12, "_currentlyUpdatingChildIndex == null");
      try {
        let firstIndex = this[_childElements].firstKey();
        let lastIndex = this[_childElements].lastKey();
        if (dart.test(this[_childElements].isEmpty)) {
          firstIndex = 0;
          lastIndex = 0;
        } else if (dart.test(this[_didUnderflow])) {
          lastIndex = dart.notNull(lastIndex) + 1;
        }
        for (let index = firstIndex; dart.notNull(index) <= dart.notNull(lastIndex); index = dart.notNull(index) + 1) {
          this[_currentlyUpdatingChildIndex] = index;
          let newChild = this.updateChild(this[_childElements]._get(index), this[_build](index), index);
          if (newChild != null) {
            this[_childElements]._set(index, newChild);
          } else {
            this[_childElements].remove(index);
          }
        }
      } finally {
        this[_currentlyUpdatingChildIndex] = null;
      }
    }
    [_build](index) {
      return this[_childWidgets][$putIfAbsent](index, dart.fn(() => this.widget.delegate.build(this, index), VoidToWidget()));
    }
    createChild(index) {
      if (!(this[_currentlyUpdatingChildIndex] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 149, 12, "_currentlyUpdatingChildIndex == null");
      this.owner.buildScope(this, dart.fn(() => {
        let newChild = null;
        try {
          this[_currentlyUpdatingChildIndex] = index;
          newChild = this.updateChild(this[_childElements]._get(index), this[_build](index), index);
        } finally {
          this[_currentlyUpdatingChildIndex] = null;
        }
        if (newChild != null) {
          this[_childElements]._set(index, newChild);
        } else {
          this[_childElements].remove(index);
        }
      }, VoidToNull()));
    }
    updateChild(child, newWidget, newSlot) {
      let t0, t0$, t0$0, t0$1;
      let oldParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check((t0$ = (t0 = child, t0 == null ? null : t0.renderObject), t0$ == null ? null : t0$.parentData));
      let newChild = super.updateChild(child, newWidget, newSlot);
      let newParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check((t0$1 = (t0$0 = newChild, t0$0 == null ? null : t0$0.renderObject), t0$1 == null ? null : t0$1.parentData));
      if (!dart.equals(oldParentData, newParentData) && oldParentData != null && newParentData != null) {
        newParentData.layoutOffset = oldParentData.layoutOffset;
      }
      return newChild;
    }
    forgetChild(child) {
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 186, 12, "child != null");
      if (!(child.slot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 187, 12, "child.slot != null");
      if (!dart.test(this[_childElements].containsKey(child.slot))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 188, 12, "_childElements.containsKey(child.slot)");
      this[_childElements].remove(child.slot);
    }
    removeChild(child) {
      let index = this.renderObject.indexOf(child);
      if (!(this[_currentlyUpdatingChildIndex] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 195, 12, "_currentlyUpdatingChildIndex == null");
      if (!(dart.notNull(index) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 196, 12, "index >= 0");
      this.owner.buildScope(this, dart.fn(() => {
        if (!dart.test(this[_childElements].containsKey(index))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 198, 14, "_childElements.containsKey(index)");
        try {
          this[_currentlyUpdatingChildIndex] = index;
          let result = this.updateChild(this[_childElements]._get(index), null, index);
          if (!(result == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 202, 16, "result == null");
        } finally {
          this[_currentlyUpdatingChildIndex] = null;
        }
        this[_childElements].remove(index);
        if (!!dart.test(this[_childElements].containsKey(index))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 207, 14, "!_childElements.containsKey(index)");
      }, VoidToNull()));
    }
    [_extrapolateMaxScrollOffset](firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset) {
      let childCount = this.childCount;
      if (childCount == null) return 1 / 0;
      if (lastIndex === dart.notNull(childCount) - 1) return trailingScrollOffset;
      let reifiedCount = dart.notNull(lastIndex) - dart.notNull(firstIndex) + 1;
      let averageExtent = (dart.notNull(trailingScrollOffset) - dart.notNull(leadingScrollOffset)) / reifiedCount;
      let remainingCount = dart.notNull(childCount) - dart.notNull(lastIndex) - 1;
      return dart.notNull(trailingScrollOffset) + averageExtent * remainingCount;
    }
    estimateMaxScrollOffset(constraints, opts) {
      let t0;
      let firstIndex = opts && 'firstIndex' in opts ? opts.firstIndex : null;
      let lastIndex = opts && 'lastIndex' in opts ? opts.lastIndex : null;
      let leadingScrollOffset = opts && 'leadingScrollOffset' in opts ? opts.leadingScrollOffset : null;
      let trailingScrollOffset = opts && 'trailingScrollOffset' in opts ? opts.trailingScrollOffset : null;
      t0 = this.widget.estimateMaxScrollOffset(constraints, firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset);
      return t0 == null ? this[_extrapolateMaxScrollOffset](firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset) : t0;
    }
    get childCount() {
      return this.widget.delegate.estimatedChildCount;
    }
    didStartLayout() {
      if (!dart.test(this.debugAssertChildListLocked())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 255, 12, "debugAssertChildListLocked()");
    }
    didFinishLayout() {
      let t0, t0$;
      if (!dart.test(this.debugAssertChildListLocked())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 260, 12, "debugAssertChildListLocked()");
      let firstIndex = (t0 = this[_childElements].firstKey(), t0 == null ? 0 : t0);
      let lastIndex = (t0$ = this[_childElements].lastKey(), t0$ == null ? 0 : t0$);
      this.widget.delegate.didFinishLayout(firstIndex, lastIndex);
    }
    debugAssertChildListLocked() {
      if (!(this[_currentlyUpdatingChildIndex] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 270, 12, "_currentlyUpdatingChildIndex == null");
      return true;
    }
    didAdoptChild(child) {
      if (!(this[_currentlyUpdatingChildIndex] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 276, 12, "_currentlyUpdatingChildIndex != null");
      let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
      childParentData.index = this[_currentlyUpdatingChildIndex];
    }
    setDidUnderflow(value) {
      this[_didUnderflow] = value;
    }
    insertChildRenderObject(child, slot) {
      object.RenderObject._check(child);
      core.int._check(slot);
      if (!(slot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 291, 12, "slot != null");
      if (!(this[_currentlyUpdatingChildIndex] == slot)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 292, 12, "_currentlyUpdatingChildIndex == slot");
      if (!dart.test(this.renderObject.debugValidateChild(child))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 293, 12, "renderObject.debugValidateChild(child)");
      this.renderObject._set(this[_currentlyUpdatingChildIndex], box.RenderBox._check(child));
      if (!dart.test(dart.fn(() => {
        let childParentData = sliver_variable_size_box_adaptor.SliverVariableSizeBoxAdaptorParentData._check(child.parentData);
        if (!(slot == childParentData.index)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 298, 14, "slot == childParentData.index");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 295, 12, "() {\r\n      final SliverVariableSizeBoxAdaptorParentData childParentData =\r\n          child.parentData;\r\n      assert(slot == childParentData.index);\r\n      return true;\r\n    }()");
    }
    moveChildRenderObject(child, slot) {
      object.RenderObject._check(child);
      core.int._check(slot);
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 307, 12, "false");
    }
    removeChildRenderObject(child) {
      object.RenderObject._check(child);
      if (!(this[_currentlyUpdatingChildIndex] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 312, 12, "_currentlyUpdatingChildIndex != null");
      this.renderObject.remove(this[_currentlyUpdatingChildIndex]);
    }
    visitChildren(visitor) {
      if (!!dart.test(this[_childElements].values[$any](dart.fn(child => child == null, ElementTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/sliver.dart", 320, 12, "!_childElements.values.any((Element child) => child == null)");
      this[_childElements].values[$toList]()[$forEach](visitor);
    }
    debugVisitOnstageChildren(visitor) {
      this[_childElements].values[$where](dart.fn(child => {
        let parentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData._check(child.renderObject.parentData);
        let itemExtent = null;
        switch (this.renderObject.constraints.axis) {
          case C1 || CT.C1:
          {
            itemExtent = child.renderObject.paintBounds.width;
            break;
          }
          case C2 || CT.C2:
          {
            itemExtent = child.renderObject.paintBounds.height;
            break;
          }
        }
        return dart.notNull(parentData.layoutOffset) < dart.notNull(this.renderObject.constraints.scrollOffset) + dart.notNull(this.renderObject.constraints.remainingPaintExtent) && dart.notNull(parentData.layoutOffset) + dart.notNull(itemExtent) > dart.notNull(this.renderObject.constraints.scrollOffset);
      }, ElementTobool()))[$forEach](visitor);
    }
  };
  (sliver$0.SliverVariableSizeBoxAdaptorElement.new = function(widget) {
    this[_childWidgets] = new (IdentityMapOfint$Widget()).new();
    this[_childElements] = new (SplayTreeMapOfint$Element()).new();
    this[_currentlyUpdatingChildIndex] = null;
    this[_didUnderflow] = false;
    sliver$0.SliverVariableSizeBoxAdaptorElement.__proto__.new.call(this, widget);
    ;
  }).prototype = sliver$0.SliverVariableSizeBoxAdaptorElement.prototype;
  dart.addTypeTests(sliver$0.SliverVariableSizeBoxAdaptorElement);
  sliver$0.SliverVariableSizeBoxAdaptorElement[dart.implements] = () => [sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxChildManager];
  dart.setMethodSignature(sliver$0.SliverVariableSizeBoxAdaptorElement, () => ({
    __proto__: dart.getMethods(sliver$0.SliverVariableSizeBoxAdaptorElement.__proto__),
    [_build]: dart.fnType(framework.Widget, [core.int]),
    createChild: dart.fnType(dart.void, [core.int]),
    removeChild: dart.fnType(dart.void, [box.RenderBox]),
    [_extrapolateMaxScrollOffset]: dart.fnType(core.double, [core.int, core.int, core.double, core.double]),
    estimateMaxScrollOffset: dart.fnType(core.double, [sliver.SliverConstraints], {firstIndex: core.int, lastIndex: core.int, leadingScrollOffset: core.double, trailingScrollOffset: core.double}, {}),
    didStartLayout: dart.fnType(dart.void, []),
    didFinishLayout: dart.fnType(dart.void, []),
    debugAssertChildListLocked: dart.fnType(core.bool, []),
    didAdoptChild: dart.fnType(dart.void, [box.RenderBox]),
    setDidUnderflow: dart.fnType(dart.void, [core.bool]),
    insertChildRenderObject: dart.fnType(dart.void, [core.Object, core.Object]),
    moveChildRenderObject: dart.fnType(dart.void, [core.Object, core.Object]),
    removeChildRenderObject: dart.fnType(dart.void, [core.Object])
  }));
  dart.setGetterSignature(sliver$0.SliverVariableSizeBoxAdaptorElement, () => ({
    __proto__: dart.getGetters(sliver$0.SliverVariableSizeBoxAdaptorElement.__proto__),
    widget: sliver$0.SliverVariableSizeBoxAdaptorWidget,
    renderObject: sliver_variable_size_box_adaptor.RenderSliverVariableSizeBoxAdaptor,
    childCount: core.int
  }));
  dart.setLibraryUri(sliver$0.SliverVariableSizeBoxAdaptorElement, "package:flutter_staggered_grid_view/src/widgets/sliver.dart");
  dart.setFieldSignature(sliver$0.SliverVariableSizeBoxAdaptorElement, () => ({
    __proto__: dart.getFields(sliver$0.SliverVariableSizeBoxAdaptorElement.__proto__),
    [_childWidgets]: dart.finalFieldType(core.Map$(core.int, framework.Widget)),
    [_childElements]: dart.finalFieldType(collection.SplayTreeMap$(core.int, framework.Element)),
    [_currentlyUpdatingChildIndex]: dart.fieldType(core.int),
    [_didUnderflow]: dart.fieldType(core.bool)
  }));
  let C11;
  let C12;
  const gridDelegate$ = dart.privateName(sliver$0, "SliverStaggeredGrid.gridDelegate");
  sliver$0.SliverStaggeredGrid = class SliverStaggeredGrid extends sliver$0.SliverVariableSizeBoxAdaptorWidget {
    get gridDelegate() {
      return this[gridDelegate$];
    }
    set gridDelegate(value) {
      super.gridDelegate = value;
    }
    createRenderObject(context) {
      let element = sliver$0.SliverVariableSizeBoxAdaptorElement._check(context);
      return new sliver_staggered_grid.RenderSliverStaggeredGrid.new({childManager: element, gridDelegate: this.gridDelegate});
    }
    updateRenderObject(context, renderObject) {
      sliver_staggered_grid.RenderSliverStaggeredGrid._check(renderObject);
      renderObject.gridDelegate = this.gridDelegate;
    }
    estimateMaxScrollOffset(constraints, firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset) {
      return super.estimateMaxScrollOffset(constraints, firstIndex, lastIndex, leadingScrollOffset, trailingScrollOffset);
    }
  };
  (sliver$0.SliverStaggeredGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    sliver$0.SliverStaggeredGrid.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver$0.SliverStaggeredGrid.prototype;
  (sliver$0.SliverStaggeredGrid.count = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let children = opts && 'children' in opts ? opts.children : C11 || CT.C11;
    let staggeredTiles = opts && 'staggeredTiles' in opts ? opts.staggeredTiles : C12 || CT.C12;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: dart.fn(i => staggeredTiles[$_get](i), intToStaggeredTile()), staggeredTileCount: (t0 = staggeredTiles, t0 == null ? null : t0[$length])});
    sliver$0.SliverStaggeredGrid.__proto__.new.call(this, {key: key, delegate: new sliver$.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: true}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver$0.SliverStaggeredGrid.prototype;
  (sliver$0.SliverStaggeredGrid.countBuilder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: staggeredTileBuilder, staggeredTileCount: itemCount});
    sliver$0.SliverStaggeredGrid.__proto__.new.call(this, {key: key, delegate: new sliver$.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: true, addRepaintBoundaries: true}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver$0.SliverStaggeredGrid.prototype;
  (sliver$0.SliverStaggeredGrid.extent = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let children = opts && 'children' in opts ? opts.children : C11 || CT.C11;
    let staggeredTiles = opts && 'staggeredTiles' in opts ? opts.staggeredTiles : C12 || CT.C12;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: dart.fn(i => staggeredTiles[$_get](i), intToStaggeredTile()), staggeredTileCount: (t0 = staggeredTiles, t0 == null ? null : t0[$length])});
    sliver$0.SliverStaggeredGrid.__proto__.new.call(this, {key: key, delegate: new sliver$.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: true}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver$0.SliverStaggeredGrid.prototype;
  (sliver$0.SliverStaggeredGrid.extentBuilder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: staggeredTileBuilder, staggeredTileCount: itemCount});
    sliver$0.SliverStaggeredGrid.__proto__.new.call(this, {key: key, delegate: new sliver$.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: true, addRepaintBoundaries: true}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver$0.SliverStaggeredGrid.prototype;
  dart.addTypeTests(sliver$0.SliverStaggeredGrid);
  dart.setMethodSignature(sliver$0.SliverStaggeredGrid, () => ({
    __proto__: dart.getMethods(sliver$0.SliverStaggeredGrid.__proto__),
    createRenderObject: dart.fnType(sliver_staggered_grid.RenderSliverStaggeredGrid, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver$0.SliverStaggeredGrid, "package:flutter_staggered_grid_view/src/widgets/sliver.dart");
  dart.setFieldSignature(sliver$0.SliverStaggeredGrid, () => ({
    __proto__: dart.getFields(sliver$0.SliverStaggeredGrid.__proto__),
    gridDelegate: dart.finalFieldType(sliver_staggered_grid.SliverStaggeredGridDelegate)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C15;
  let C16;
  let C14;
  let C13;
  const gridDelegate$0 = dart.privateName(staggered_grid_view, "StaggeredGridView.gridDelegate");
  const childrenDelegate$ = dart.privateName(staggered_grid_view, "StaggeredGridView.childrenDelegate");
  staggered_grid_view.StaggeredGridView = class StaggeredGridView extends scroll_view.BoxScrollView {
    get gridDelegate() {
      return this[gridDelegate$0];
    }
    set gridDelegate(value) {
      super.gridDelegate = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    buildChildLayout(context) {
      return new sliver$0.SliverStaggeredGrid.new({delegate: this.childrenDelegate, gridDelegate: this.gridDelegate, $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
    }
  };
  (staggered_grid_view.StaggeredGridView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let children = opts && 'children' in opts ? opts.children : C11 || CT.C11;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = gridDelegate;
    if (!(gridDelegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart", 139, 16, "gridDelegate != null");
    this[childrenDelegate$] = new sliver$.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries});
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  (staggered_grid_view.StaggeredGridView.builder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = gridDelegate;
    if (!(gridDelegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart", 189, 16, "gridDelegate != null");
    this[childrenDelegate$] = new sliver$.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries});
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  (staggered_grid_view.StaggeredGridView.custom = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = gridDelegate;
    this[childrenDelegate$] = childrenDelegate;
    if (!(gridDelegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart", 226, 16, "gridDelegate != null");
    if (!(childrenDelegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart", 227, 16, "childrenDelegate != null");
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  (staggered_grid_view.StaggeredGridView.count = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let children = opts && 'children' in opts ? opts.children : C11 || CT.C11;
    let staggeredTiles = opts && 'staggeredTiles' in opts ? opts.staggeredTiles : C12 || CT.C12;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: dart.fn(i => staggeredTiles[$_get](i), intToStaggeredTile()), staggeredTileCount: (t0 = staggeredTiles, t0 == null ? null : t0[$length])});
    this[childrenDelegate$] = new sliver$.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries});
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  (staggered_grid_view.StaggeredGridView.countBuilder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: staggeredTileBuilder, staggeredTileCount: itemCount});
    this[childrenDelegate$] = new sliver$.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries});
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  (staggered_grid_view.StaggeredGridView.extent = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let children = opts && 'children' in opts ? opts.children : C11 || CT.C11;
    let staggeredTiles = opts && 'staggeredTiles' in opts ? opts.staggeredTiles : C12 || CT.C12;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: dart.fn(i => staggeredTiles[$_get](i), intToStaggeredTile()), staggeredTileCount: (t0 = staggeredTiles, t0 == null ? null : t0[$length])});
    this[childrenDelegate$] = new sliver$.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries});
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  (staggered_grid_view.StaggeredGridView.extentBuilder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C2 || CT.C2;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let staggeredTileBuilder = opts && 'staggeredTileBuilder' in opts ? opts.staggeredTileBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$0] = new sliver_staggered_grid.SliverStaggeredGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, staggeredTileBuilder: staggeredTileBuilder, staggeredTileCount: itemCount});
    this[childrenDelegate$] = new sliver$.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries});
    staggered_grid_view.StaggeredGridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = staggered_grid_view.StaggeredGridView.prototype;
  dart.addTypeTests(staggered_grid_view.StaggeredGridView);
  dart.setMethodSignature(staggered_grid_view.StaggeredGridView, () => ({
    __proto__: dart.getMethods(staggered_grid_view.StaggeredGridView.__proto__),
    buildChildLayout: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(staggered_grid_view.StaggeredGridView, "package:flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart");
  dart.setFieldSignature(staggered_grid_view.StaggeredGridView, () => ({
    __proto__: dart.getFields(staggered_grid_view.StaggeredGridView.__proto__),
    gridDelegate: dart.finalFieldType(sliver_staggered_grid.SliverStaggeredGridDelegate),
    childrenDelegate: dart.finalFieldType(sliver$.SliverChildDelegate)
  }));
  dart.trackLibraries("packages/flutter_staggered_grid_view/flutter_staggered_grid_view", {
    "package:flutter_staggered_grid_view/src/rendering/sliver_staggered_grid.dart": sliver_staggered_grid,
    "package:flutter_staggered_grid_view/src/rendering/sliver_variable_size_box_adaptor.dart": sliver_variable_size_box_adaptor,
    "package:flutter_staggered_grid_view/src/rendering/tile_container_render_object_mixin.dart": tile_container_render_object_mixin,
    "package:flutter_staggered_grid_view/src/widgets/staggered_tile.dart": staggered_tile,
    "package:flutter_staggered_grid_view/src/widgets/sliver.dart": sliver$0,
    "package:flutter_staggered_grid_view/src/widgets/staggered_grid_view.dart": staggered_grid_view,
    "package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart": flutter_staggered_grid_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/rendering/sliver_staggered_grid.dart","src/rendering/tile_container_render_object_mixin.dart","src/rendering/sliver_variable_size_box_adaptor.dart","src/widgets/staggered_tile.dart","src/widgets/sliver.dart","src/widgets/staggered_grid_view.dart"],"names":[],"mappings":"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","file":"flutter_staggered_grid_view.ddc.js"}');
  // Exports:
  return {
    src__rendering__sliver_staggered_grid: sliver_staggered_grid,
    src__rendering__sliver_variable_size_box_adaptor: sliver_variable_size_box_adaptor,
    src__rendering__tile_container_render_object_mixin: tile_container_render_object_mixin,
    src__widgets__staggered_tile: staggered_tile,
    src__widgets__sliver: sliver$0,
    src__widgets__staggered_grid_view: staggered_grid_view,
    flutter_staggered_grid_view: flutter_staggered_grid_view
  };
});

//# sourceMappingURL=flutter_staggered_grid_view.ddc.js.map
