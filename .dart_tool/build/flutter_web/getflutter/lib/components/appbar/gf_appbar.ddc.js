define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/painting/_network_image_web', 'packages/getflutter/types/gf_typography_type', 'packages/getflutter/colors/gf_color', 'packages/getflutter/types/gf_toggle_type', 'packages/flutter/src/animation/animation', 'packages/getflutter/types/gf_toast_type', 'packages/flutter/src/gestures/arena', 'packages/getflutter/types/gf_button_type', 'packages/getflutter/shape/gf_icon_button_shape', 'packages/getflutter/size/gf_size', 'packages/getflutter/position/gf_position', 'packages/getflutter/components/image/gf_image_overlay', 'packages/getflutter/shape/gf_button_shape', 'packages/getflutter/shape/gf_badge_shape', 'packages/getflutter/shape/gf_avatar_shape'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__painting___network_image_web, packages__getflutter__types__gf_typography_type, packages__getflutter__colors__gf_color, packages__getflutter__types__gf_toggle_type, packages__flutter__src__animation__animation, packages__getflutter__types__gf_toast_type, packages__flutter__src__gestures__arena, packages__getflutter__types__gf_button_type, packages__getflutter__shape__gf_icon_button_shape, packages__getflutter__size__gf_size, packages__getflutter__position__gf_position, packages__getflutter__components__image__gf_image_overlay, packages__getflutter__shape__gf_button_shape, packages__getflutter__shape__gf_badge_shape, packages__getflutter__shape__gf_avatar_shape) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _engine = dart_sdk._engine;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const overlay$ = packages__flutter__src__widgets__actions.src__widgets__overlay;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
  const scroll_notification = packages__flutter__src__widgets__actions.src__widgets__scroll_notification;
  const notification_listener = packages__flutter__src__widgets__actions.src__widgets__notification_listener;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__actions.src__widgets__icon_theme_data;
  const focus_scope = packages__flutter__src__widgets__actions.src__widgets__focus_scope;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const debug = packages__flutter__src__widgets__actions.src__widgets__debug;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const routes = packages__flutter__src__widgets__actions.src__widgets__routes;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const navigation_toolbar = packages__flutter__src__widgets__actions.src__widgets__navigation_toolbar;
  const annotated_region = packages__flutter__src__widgets__actions.src__widgets__annotated_region;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const text_field = packages__flutter__material.src__material__text_field;
  const colors = packages__flutter__material.src__material__colors;
  const input_border = packages__flutter__material.src__material__input_border;
  const theme$ = packages__flutter__material.src__material__theme;
  const icons = packages__flutter__material.src__material__icons;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const divider = packages__flutter__material.src__material__divider;
  const material = packages__flutter__material.src__material__material;
  const tabs = packages__flutter__material.src__material__tabs;
  const tab_controller = packages__flutter__material.src__material__tab_controller;
  const constants = packages__flutter__material.src__material__constants;
  const debug$ = packages__flutter__material.src__material__debug;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const tooltip = packages__flutter__material.src__material__tooltip;
  const card_theme = packages__flutter__material.src__material__card_theme;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const color_scheme = packages__flutter__material.src__material__color_scheme;
  const material_state = packages__flutter__material.src__material__material_state;
  const text_theme = packages__flutter__material.src__material__text_theme;
  const scaffold$ = packages__flutter__material.src__material__scaffold;
  const app_bar_theme = packages__flutter__material.src__material__app_bar_theme;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const back_button = packages__flutter__material.src__material__back_button;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const layer = packages__flutter__src__rendering__animated_size.src__rendering__layer;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const wrap = packages__flutter__src__rendering__animated_size.src__rendering__wrap;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const shifted_box = packages__flutter__src__rendering__animated_size.src__rendering__shifted_box;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const decoration = packages__flutter__src__painting___network_image_web.src__painting__decoration;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const matrix_utils = packages__flutter__src__painting___network_image_web.src__painting__matrix_utils;
  const gf_typography_type = packages__getflutter__types__gf_typography_type.types__gf_typography_type;
  const gf_color = packages__getflutter__colors__gf_color.colors__gf_color;
  const gf_toggle_type = packages__getflutter__types__gf_toggle_type.types__gf_toggle_type;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const gf_toast_type = packages__getflutter__types__gf_toast_type.types__gf_toast_type;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const gf_button_type = packages__getflutter__types__gf_button_type.types__gf_button_type;
  const gf_icon_button_shape = packages__getflutter__shape__gf_icon_button_shape.shape__gf_icon_button_shape;
  const gf_size = packages__getflutter__size__gf_size.size__gf_size;
  const gf_position = packages__getflutter__position__gf_position.position__gf_position;
  const gf_image_overlay = packages__getflutter__components__image__gf_image_overlay.components__image__gf_image_overlay;
  const gf_button_shape = packages__getflutter__shape__gf_button_shape.shape__gf_button_shape;
  const gf_badge_shape = packages__getflutter__shape__gf_badge_shape.shape__gf_badge_shape;
  const gf_avatar_shape = packages__getflutter__shape__gf_avatar_shape.shape__gf_avatar_shape;
  const gf_search_bar = Object.create(dart.library);
  const getflutter = Object.create(dart.library);
  const gf_typography = Object.create(dart.library);
  const gf_toggle = Object.create(dart.library);
  const gf_toast = Object.create(dart.library);
  const gf_floating_widget = Object.create(dart.library);
  const gf_segment_tabs = Object.create(dart.library);
  const gf_tabs = Object.create(dart.library);
  const gf_tabbar_view = Object.create(dart.library);
  const gf_tabBar = Object.create(dart.library);
  const gf_list_tile = Object.create(dart.library);
  const gf_drawer_header = Object.create(dart.library);
  const gf_icon_button = Object.create(dart.library);
  const gf_card = Object.create(dart.library);
  const gf_button_bar = Object.create(dart.library);
  const gf_social_button = Object.create(dart.library);
  const gf_button = Object.create(dart.library);
  const gf_icon_badge = Object.create(dart.library);
  const gf_button_badge = Object.create(dart.library);
  const gf_badge = Object.create(dart.library);
  const gf_avatar = Object.create(dart.library);
  const gf_appbar = Object.create(dart.library);
  const $addAll = dartx.addAll;
  const $clear = dartx.clear;
  const $isNotEmpty = dartx.isNotEmpty;
  const $trim = dartx.trim;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $elementAt = dartx.elementAt;
  const $length = dartx.length;
  const $runtimeType = dartx.runtimeType;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $_set = dartx._set;
  const $floor = dartx.floor;
  const $clamp = dartx.clamp;
  const $round = dartx.round;
  const $take = dartx.take;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndintToDivider = () => (BuildContextAndintToDivider = dart.constFn(dart.fnType(divider.Divider, [framework.BuildContext, core.int])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndintToMaterial = () => (BuildContextAndintToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, core.int])))();
  let BuildContextToPositioned = () => (BuildContextToPositioned = dart.constFn(dart.fnType(basic.Positioned, [framework.BuildContext])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  let WidgetToPadding = () => (WidgetToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.Widget])))();
  let VoidToBoxDecoration = () => (VoidToBoxDecoration = dart.constFn(dart.fnType(box_decoration.BoxDecoration, [])))();
  let WidgetToWidget = () => (WidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.Widget])))();
  let LinkedHashSetOfMaterialState = () => (LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))();
  let VoidToColor = () => (VoidToColor = dart.constFn(dart.fnType(ui.Color, [])))();
  let VoidToTextStyle = () => (VoidToTextStyle = dart.constFn(dart.fnType(text_style.TextStyle, [])))();
  let BoxHitTestResultAndOffsetTobool = () => (BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 16
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1144473423
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C4 || CT.C4,
        [BorderSide_width]: 1,
        [BorderSide_color]: C5 || CT.C5
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C7 || CT.C7,
        [BorderRadius_bottomLeft]: C7 || CT.C7,
        [BorderRadius_topRight]: C7 || CT.C7,
        [BorderRadius_topLeft]: C7 || CT.C7
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C3 || CT.C3,
        [OutlineInputBorder_borderRadius]: C6 || CT.C6,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 14,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 14,
        [EdgeInsets_left]: 16
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "link",
        [_Location_column]: 13,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C35 || CT.C35,
        [BorderSide_width]: 0,
        [BorderSide_color]: C36 || CT.C36
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [RoundedRectangleBorder_borderRadius]: C6 || CT.C6,
        [RoundedRectangleBorder_side]: C34 || CT.C34
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 29,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 258,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 27,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 0
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 1
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 35,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 64,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "separatorBuilder",
        [_Location_column]: 31,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 31,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 31,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 266,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
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
        [Text_data]: "no items found"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 293,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 15,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 13,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showWhenUnlinked",
        [_Location_column]: 13,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "link",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 11,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/search_bar/gf_search_bar.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: gf_typography_type.GFTypographyType.prototype,
        [_name$]: "GFTypographyType.typo4",
        index: 3
      });
    },
    get C99() {
      return C99 = dart.constList([], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [Padding_padding]: C101 || CT.C101
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 5,
        [Radius_x]: 5
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C115 || CT.C115,
        [BorderRadius_bottomLeft]: C115 || CT.C115,
        [BorderRadius_topRight]: C115 || CT.C115,
        [BorderRadius_topLeft]: C115 || CT.C115
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/typography/gf_typography.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 400000
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name$0]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name$0]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C145 || CT.C145,
        [BorderRadius_bottomLeft]: C145 || CT.C145,
        [BorderRadius_topRight]: C145 || CT.C145,
        [BorderRadius_topLeft]: C145 || CT.C145
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 20,
        [Radius_x]: 20
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C147 || CT.C147,
        [BorderRadius_bottomLeft]: C147 || CT.C147,
        [BorderRadius_topRight]: C147 || CT.C147,
        [BorderRadius_topLeft]: C147 || CT.C147
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 3.5,
        [EdgeInsets_top]: 5.4,
        [EdgeInsets_left]: 3.5
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3.4,
        [EdgeInsets_left]: 3
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 46,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 27,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180, C181 || CT.C181, C182 || CT.C182], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 17,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C184 || CT.C184,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 13,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194, C195 || CT.C195], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toggle/gf_toggle.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: gf_toast_type.GFToastType.prototype,
        [_name$1]: "GFToastType.basic",
        index: 0
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3019898879.0
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C202 || CT.C202,
        [TextStyle_inherit]: true
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 50,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281479730.0
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 49,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C210 || CT.C210,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 23,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221, C222 || CT.C222], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C219 || CT.C219,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 31,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226, C227 || CT.C227], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 29,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 29,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.constList([C230 || CT.C230, C231 || CT.C231, C232 || CT.C232], widget_inspector._Location);
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C229 || CT.C229,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240, C241 || CT.C241, C242 || CT.C242, C243 || CT.C243, C244 || CT.C244], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247], widget_inspector._Location);
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C246 || CT.C246,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250, C251 || CT.C251], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C249 || CT.C249,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_toast.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C254 || CT.C254,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261, C262 || CT.C262, C263 || CT.C263], widget_inspector._Location);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C265 || CT.C265,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269, C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.constList([C274 || CT.C274], widget_inspector._Location);
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C273 || CT.C273,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.constList([C277 || CT.C277, C278 || CT.C278, C279 || CT.C279], widget_inspector._Location);
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C276 || CT.C276,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/toast/gf_floating_widget.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelColor",
        [_Location_column]: 15,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelColor",
        [_Location_column]: 15,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelStyle",
        [_Location_column]: 15,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelStyle",
        [_Location_column]: 15,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorColor",
        [_Location_column]: 15,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorSize",
        [_Location_column]: 15,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicator",
        [_Location_column]: 15,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorPadding",
        [_Location_column]: 15,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorWeight",
        [_Location_column]: 15,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 15,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C282() {
      return C282 = dart.constList([C283 || CT.C283, C284 || CT.C284, C285 || CT.C285, C286 || CT.C286, C287 || CT.C287, C288 || CT.C288, C289 || CT.C289, C290 || CT.C290, C291 || CT.C291, C292 || CT.C292, C293 || CT.C293], widget_inspector._Location);
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C282 || CT.C282,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_segment_tabs.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 13,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 13,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296, C297 || CT.C297, C298 || CT.C298, C195 || CT.C195], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_segment_tabs.dart"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialIndex",
        [_Location_column]: 11,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 11,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.constList([C301 || CT.C301, C302 || CT.C302, C303 || CT.C303], widget_inspector._Location);
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C300 || CT.C300,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_segment_tabs.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.constList([C306 || CT.C306, C307 || CT.C307, C308 || CT.C308, C309 || CT.C309], widget_inspector._Location);
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C305 || CT.C305,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_segment_tabs.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 19,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 19,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialIndex",
        [_Location_column]: 19,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabBarHeight",
        [_Location_column]: 19,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabBarColor",
        [_Location_column]: 19,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelColor",
        [_Location_column]: 19,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelColor",
        [_Location_column]: 19,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelStyle",
        [_Location_column]: 19,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelStyle",
        [_Location_column]: 19,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorColor",
        [_Location_column]: 19,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorSize",
        [_Location_column]: 19,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicator",
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorPadding",
        [_Location_column]: 19,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorWeight",
        [_Location_column]: 19,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 19,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.constList([C312 || CT.C312, C313 || CT.C313, C314 || CT.C314, C315 || CT.C315, C316 || CT.C316, C317 || CT.C317, C318 || CT.C318, C319 || CT.C319, C320 || CT.C320, C321 || CT.C321, C322 || CT.C322, C323 || CT.C323, C324 || CT.C324, C325 || CT.C325, C326 || CT.C326, C327 || CT.C327], widget_inspector._Location);
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C311 || CT.C311,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.constList([C333 || CT.C333], widget_inspector._Location);
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C332 || CT.C332,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart"
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.constList([C336 || CT.C336, C337 || CT.C337], widget_inspector._Location);
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C335 || CT.C335,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart"
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialIndex",
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 11,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.constList([C340 || CT.C340, C341 || CT.C341, C342 || CT.C342], widget_inspector._Location);
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C339 || CT.C339,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.constList([C345 || CT.C345], widget_inspector._Location);
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C344 || CT.C344,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$2]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 11,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 11,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.constList([C349 || CT.C349, C350 || CT.C350, C351 || CT.C351, C352 || CT.C352], widget_inspector._Location);
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C348 || CT.C348,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.constList([C355 || CT.C355, C356 || CT.C356], widget_inspector._Location);
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C354 || CT.C354,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart"
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 7,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.constList([C359 || CT.C359, C360 || CT.C360], widget_inspector._Location);
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C358 || CT.C358,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: page_view.PageScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: scroll_physics.ClampingScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelColor",
        [_Location_column]: 13,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelColor",
        [_Location_column]: 13,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelStyle",
        [_Location_column]: 13,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelStyle",
        [_Location_column]: 13,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorColor",
        [_Location_column]: 13,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorSize",
        [_Location_column]: 13,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicator",
        [_Location_column]: 13,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorPadding",
        [_Location_column]: 13,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorWeight",
        [_Location_column]: 13,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 13,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.constList([C365 || CT.C365, C366 || CT.C366, C367 || CT.C367, C368 || CT.C368, C369 || CT.C369, C370 || CT.C370, C371 || CT.C371, C372 || CT.C372, C373 || CT.C373, C374 || CT.C374, C375 || CT.C375], widget_inspector._Location);
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C364 || CT.C364,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabBar.dart"
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.constList([C378 || CT.C378, C379 || CT.C379, C380 || CT.C380, C381 || CT.C381], widget_inspector._Location);
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C377 || CT.C377,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabBar.dart"
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.constList([C384 || CT.C384, C385 || CT.C385], widget_inspector._Location);
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C383 || CT.C383,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabBar.dart"
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390, C391 || CT.C391], widget_inspector._Location);
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C389 || CT.C389,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.constList([C395 || CT.C395, C396 || CT.C396], widget_inspector._Location);
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C394 || CT.C394,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C400() {
      return C400 = dart.constList([C401 || CT.C401, C402 || CT.C402], widget_inspector._Location);
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C400 || CT.C400,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.constList([C405 || CT.C405, C406 || CT.C406], widget_inspector._Location);
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C404 || CT.C404,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.constList([C409 || CT.C409], widget_inspector._Location);
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C408 || CT.C408,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C412() {
      return C412 = dart.constList([C413 || CT.C413, C414 || CT.C414], widget_inspector._Location);
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C412 || CT.C412,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C416() {
      return C416 = dart.constList([C417 || CT.C417, C418 || CT.C418, C419 || CT.C419, C420 || CT.C420], widget_inspector._Location);
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C416 || CT.C416,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/list_tile/gf_list_tile.dart"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.constList([C423 || CT.C423, C424 || CT.C424], widget_inspector._Location);
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C422 || CT.C422,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 19,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427, C428 || CT.C428, C429 || CT.C429], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 0,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 8
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.constList([C434 || CT.C434, C435 || CT.C435, C436 || CT.C436, C437 || CT.C437], widget_inspector._Location);
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C433 || CT.C433,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 27,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.constList([C440 || CT.C440, C441 || CT.C441], widget_inspector._Location);
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C439 || CT.C439,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C443() {
      return C443 = dart.constList([C444 || CT.C444, C445 || CT.C445], widget_inspector._Location);
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C443 || CT.C443,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C447() {
      return C447 = dart.constList([C448 || CT.C448], widget_inspector._Location);
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C447 || CT.C447,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "end",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C450() {
      return C450 = dart.constList([C451 || CT.C451, C452 || CT.C452, C453 || CT.C453], widget_inspector._Location);
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C450 || CT.C450,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C455() {
      return C455 = dart.constList([C456 || CT.C456, C457 || CT.C457, C458 || CT.C458], widget_inspector._Location);
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C455 || CT.C455,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C460() {
      return C460 = dart.constList([C461 || CT.C461, C462 || CT.C462], widget_inspector._Location);
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C460 || CT.C460,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C464() {
      return C464 = dart.constList([C465 || CT.C465, C466 || CT.C466], widget_inspector._Location);
    },
    get C463() {
      return C463 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C464 || CT.C464,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C468() {
      return C468 = dart.constList([C469 || CT.C469], widget_inspector._Location);
    },
    get C467() {
      return C467 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C468 || CT.C468,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 0,
        [EdgeInsetsDirectional_top]: 16,
        [EdgeInsetsDirectional_start]: 16
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 16,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 0
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentAccountPicture",
        [_Location_column]: 21,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "otherAccountsPictures",
        [_Location_column]: 21,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "closeButton",
        [_Location_column]: 21,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C476() {
      return C476 = dart.constList([C477 || CT.C477, C478 || CT.C478, C479 || CT.C479], widget_inspector._Location);
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C476 || CT.C476,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C481() {
      return C481 = dart.constList([C482 || CT.C482, C483 || CT.C483], widget_inspector._Location);
    },
    get C480() {
      return C480 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C481 || CT.C481,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C485() {
      return C485 = dart.constList([C486 || CT.C486], widget_inspector._Location);
    },
    get C484() {
      return C484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C485 || CT.C485,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 17,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.constList([C490 || CT.C490, C491 || CT.C491, C492 || CT.C492, C493 || CT.C493], widget_inspector._Location);
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C489 || CT.C489,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C495() {
      return C495 = dart.constList([C496 || CT.C496, C497 || CT.C497, C498 || CT.C498], widget_inspector._Location);
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C495 || CT.C495,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C500() {
      return C500 = dart.constList([C501 || CT.C501, C502 || CT.C502], widget_inspector._Location);
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C500 || CT.C500,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.constList([C505 || CT.C505, C506 || CT.C506, C507 || CT.C507, C508 || CT.C508, C509 || CT.C509], widget_inspector._Location);
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C504 || CT.C504,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C511() {
      return C511 = dart.constList([C512 || CT.C512, C513 || CT.C513, C514 || CT.C514], widget_inspector._Location);
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C511 || CT.C511,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart"
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: gf_button_type.GFButtonType.prototype,
        [_name$3]: "GFButtonType.solid",
        index: 0
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: gf_icon_button_shape.GFIconButtonShape.prototype,
        [_name$4]: "GFIconButtonShape.standard",
        index: 2
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$5]: "GFColor.primary",
        index: 0
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: gf_size.GFSize.prototype,
        [_name$6]: "GFSize.medium",
        index: 1
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C521() {
      return C521 = dart.constList([C522 || CT.C522, C523 || CT.C523, C524 || CT.C524, C525 || CT.C525], widget_inspector._Location);
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C521 || CT.C521,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "message",
        [_Location_column]: 9,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C527() {
      return C527 = dart.constList([C528 || CT.C528, C529 || CT.C529], widget_inspector._Location);
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C527 || CT.C527,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 261,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 60,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 60,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusColor",
        [_Location_column]: 17,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 17,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 17,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 17,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 17,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C532() {
      return C532 = dart.constList([C533 || CT.C533, C534 || CT.C534, C535 || CT.C535, C536 || CT.C536, C537 || CT.C537, C538 || CT.C538, C539 || CT.C539], widget_inspector._Location);
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C532 || CT.C532,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 333,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 15,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C541() {
      return C541 = dart.constList([C542 || CT.C542, C543 || CT.C543, C544 || CT.C544, C545 || CT.C545], widget_inspector._Location);
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C541 || CT.C541,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.constList([C548 || CT.C548, C549 || CT.C549, C550 || CT.C550, C551 || CT.C551], widget_inspector._Location);
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C547 || CT.C547,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 313,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 11,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.constList([C554 || CT.C554, C555 || CT.C555], widget_inspector._Location);
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C553 || CT.C553,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 311,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 9,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 9,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.constList([C558 || CT.C558, C559 || CT.C559, C560 || CT.C560], widget_inspector._Location);
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C557 || CT.C557,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C563() {
      return C563 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 7,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 7,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C562() {
      return C562 = dart.constList([C563 || CT.C563, C564 || CT.C564, C565 || CT.C565], widget_inspector._Location);
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C562 || CT.C562,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart"
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 12
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C145 || CT.C145,
        [BorderRadius_bottomLeft]: C145 || CT.C145,
        [BorderRadius_topRight]: C7 || CT.C7,
        [BorderRadius_topLeft]: C7 || CT.C7
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 21,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C570() {
      return C570 = dart.constList([C571 || CT.C571, C572 || CT.C572], widget_inspector._Location);
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C570 || CT.C570,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C578() {
      return C578 = dart.constList([C579 || CT.C579, C580 || CT.C580], widget_inspector._Location);
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C578 || CT.C578,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C584() {
      return C584 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C583() {
      return C583 = dart.constList([C584 || CT.C584], widget_inspector._Location);
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C583 || CT.C583,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 7,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "boxFit",
        [_Location_column]: 7,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colorFilter",
        [_Location_column]: 7,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "border",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 7,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C586() {
      return C586 = dart.constList([C587 || CT.C587, C588 || CT.C588, C589 || CT.C589, C590 || CT.C590, C591 || CT.C591, C592 || CT.C592, C593 || CT.C593, C594 || CT.C594], widget_inspector._Location);
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C586 || CT.C586,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 15,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C599() {
      return C599 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 15,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderOnForeground",
        [_Location_column]: 15,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 15,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C597() {
      return C597 = dart.constList([C598 || CT.C598, C599 || CT.C599, C600 || CT.C600, C601 || CT.C601, C602 || CT.C602, C603 || CT.C603, C604 || CT.C604], widget_inspector._Location);
    },
    get C596() {
      return C596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C597 || CT.C597,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C607() {
      return C607 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C606() {
      return C606 = dart.constList([C607 || CT.C607, C608 || CT.C608, C609 || CT.C609, C610 || CT.C610], widget_inspector._Location);
    },
    get C605() {
      return C605 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C606 || CT.C606,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart"
      });
    },
    get C611() {
      return C611 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$7]: "Clip.none",
        index: 0
      });
    },
    get C612() {
      return C612 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$8]: "Axis.horizontal",
        index: 0
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$9]: "WrapAlignment.center",
        index: 2
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_name$9]: "WrapAlignment.start",
        index: 0
      });
    },
    get C615() {
      return C615 = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_name$9]: "WrapCrossAlignment.start",
        index: 0
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name$8]: "VerticalDirection.down",
        index: 1
      });
    },
    get C617() {
      return C617 = dart.constList([], framework.Widget);
    },
    get C620() {
      return C620 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 11,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C622() {
      return C622 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 11,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C623() {
      return C623 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "runAlignment",
        [_Location_column]: 11,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "runSpacing",
        [_Location_column]: 11,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "verticalDirection",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C619() {
      return C619 = dart.constList([C620 || CT.C620, C621 || CT.C621, C622 || CT.C622, C623 || CT.C623, C624 || CT.C624, C625 || CT.C625, C626 || CT.C626, C627 || CT.C627, C628 || CT.C628], widget_inspector._Location);
    },
    get C618() {
      return C618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C619 || CT.C619,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button_bar.dart"
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C630() {
      return C630 = dart.constList([C631 || CT.C631, C632 || CT.C632], widget_inspector._Location);
    },
    get C629() {
      return C629 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C630 || CT.C630,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button_bar.dart"
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C635() {
      return C635 = dart.const({
        __proto__: gf_button_shape.GFButtonShape.prototype,
        [_name$10]: "GFButtonShape.standard",
        index: 1
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: gf_position.GFPosition.prototype,
        [_name$11]: "GFPosition.start",
        index: 0
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C640() {
      return C640 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHighlightChanged",
        [_Location_column]: 9,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "boxShadow",
        [_Location_column]: 9,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "buttonBoxShadow",
        [_Location_column]: 9,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C644() {
      return C644 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusColor",
        [_Location_column]: 9,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C646() {
      return C646 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C647() {
      return C647 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 9,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusElevation",
        [_Location_column]: 9,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverElevation",
        [_Location_column]: 9,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C651() {
      return C651 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 9,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C652() {
      return C652 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledElevation",
        [_Location_column]: 9,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderShape",
        [_Location_column]: 9,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationDuration",
        [_Location_column]: 9,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 9,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 9,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C658() {
      return C658 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 9,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C659() {
      return C659 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 9,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C661() {
      return C661 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C662() {
      return C662 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C663() {
      return C663 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 9,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 9,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderSide",
        [_Location_column]: 9,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C668() {
      return C668 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C669() {
      return C669 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "blockButton",
        [_Location_column]: 9,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C670() {
      return C670 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fullWidthButton",
        [_Location_column]: 9,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C671() {
      return C671 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 9,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C672() {
      return C672 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 9,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C638() {
      return C638 = dart.constList([C639 || CT.C639, C640 || CT.C640, C641 || CT.C641, C642 || CT.C642, C643 || CT.C643, C644 || CT.C644, C645 || CT.C645, C646 || CT.C646, C647 || CT.C647, C648 || CT.C648, C649 || CT.C649, C650 || CT.C650, C651 || CT.C651, C652 || CT.C652, C653 || CT.C653, C654 || CT.C654, C655 || CT.C655, C656 || CT.C656, C657 || CT.C657, C658 || CT.C658, C659 || CT.C659, C660 || CT.C660, C661 || CT.C661, C662 || CT.C662, C663 || CT.C663, C664 || CT.C664, C665 || CT.C665, C666 || CT.C666, C667 || CT.C667, C668 || CT.C668, C669 || CT.C669, C670 || CT.C670, C671 || CT.C671, C672 || CT.C672], widget_inspector._Location);
    },
    get C637() {
      return C637 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C638 || CT.C638,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart"
      });
    },
    get C675() {
      return C675 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C674() {
      return C674 = dart.constList([C675 || CT.C675], widget_inspector._Location);
    },
    get C673() {
      return C673 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C674 || CT.C674,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 48,
        [OffsetBase__dx]: 48
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: theme_data.MaterialTapTargetSize.prototype,
        [_name$12]: "MaterialTapTargetSize.padded",
        index: 0
      });
    },
    get C678() {
      return C678 = dart.const({
        __proto__: theme_data.MaterialTapTargetSize.prototype,
        [_name$12]: "MaterialTapTargetSize.shrinkWrap",
        index: 1
      });
    },
    get C679() {
      return C679 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 80
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 90
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 8
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 596,
        [_Location_file]: null
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C683() {
      return C683 = dart.constList([C684 || CT.C684, C685 || CT.C685], widget_inspector._Location);
    },
    get C682() {
      return C682 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C683 || CT.C683,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 595,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 29,
        [_Location_line]: 605,
        [_Location_file]: null
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 606,
        [_Location_file]: null
      });
    },
    get C687() {
      return C687 = dart.constList([C688 || CT.C688, C689 || CT.C689], widget_inspector._Location);
    },
    get C686() {
      return C686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C687 || CT.C687,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 604,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "widthFactor",
        [_Location_column]: 17,
        [_Location_line]: 591,
        [_Location_file]: null
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 17,
        [_Location_line]: 592,
        [_Location_file]: null
      });
    },
    get C694() {
      return C694 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 593,
        [_Location_file]: null
      });
    },
    get C691() {
      return C691 = dart.constList([C692 || CT.C692, C693 || CT.C693, C694 || CT.C694], widget_inspector._Location);
    },
    get C690() {
      return C690 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C691 || CT.C691,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 590,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C697() {
      return C697 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C698() {
      return C698 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 588,
        [_Location_file]: null
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 589,
        [_Location_file]: null
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C696() {
      return C696 = dart.constList([C697 || CT.C697, C698 || CT.C698, C699 || CT.C699, C700 || CT.C700], widget_inspector._Location);
    },
    get C695() {
      return C695 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C696 || CT.C696,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 586,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 11,
        [_Location_line]: 568,
        [_Location_file]: null
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "canRequestFocus",
        [_Location_column]: 11,
        [_Location_line]: 569,
        [_Location_file]: null
      });
    },
    get C705() {
      return C705 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onFocusChange",
        [_Location_column]: 11,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C706() {
      return C706 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 11,
        [_Location_line]: 571,
        [_Location_file]: null
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHighlightChanged",
        [_Location_column]: 11,
        [_Location_line]: 572,
        [_Location_file]: null
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHover",
        [_Location_column]: 11,
        [_Location_line]: 573,
        [_Location_file]: null
      });
    },
    get C709() {
      return C709 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 574,
        [_Location_file]: null
      });
    },
    get C710() {
      return C710 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPress",
        [_Location_column]: 11,
        [_Location_line]: 575,
        [_Location_file]: null
      });
    },
    get C711() {
      return C711 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableFeedback",
        [_Location_column]: 11,
        [_Location_line]: 576,
        [_Location_file]: null
      });
    },
    get C712() {
      return C712 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 11,
        [_Location_line]: 577,
        [_Location_file]: null
      });
    },
    get C713() {
      return C713 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 11,
        [_Location_line]: 578,
        [_Location_file]: null
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusColor",
        [_Location_column]: 11,
        [_Location_line]: 579,
        [_Location_file]: null
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 11,
        [_Location_line]: 580,
        [_Location_file]: null
      });
    },
    get C716() {
      return C716 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customBorder",
        [_Location_column]: 11,
        [_Location_line]: 581,
        [_Location_file]: null
      });
    },
    get C717() {
      return C717 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 584,
        [_Location_file]: null
      });
    },
    get C702() {
      return C702 = dart.constList([C703 || CT.C703, C704 || CT.C704, C705 || CT.C705, C706 || CT.C706, C707 || CT.C707, C708 || CT.C708, C709 || CT.C709, C710 || CT.C710, C711 || CT.C711, C712 || CT.C712, C713 || CT.C713, C714 || CT.C714, C715 || CT.C715, C716 || CT.C716, C717 || CT.C717], widget_inspector._Location);
    },
    get C701() {
      return C701 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C702 || CT.C702,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 567,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C720() {
      return C720 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 558,
        [_Location_file]: null
      });
    },
    get C721() {
      return C721 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 559,
        [_Location_file]: null
      });
    },
    get C722() {
      return C722 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 560,
        [_Location_file]: null
      });
    },
    get C723() {
      return C723 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 563,
        [_Location_file]: null
      });
    },
    get C724() {
      return C724 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 9,
        [_Location_line]: 564,
        [_Location_file]: null
      });
    },
    get C725() {
      return C725 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationDuration",
        [_Location_column]: 9,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C726() {
      return C726 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 9,
        [_Location_line]: 566,
        [_Location_file]: null
      });
    },
    get C727() {
      return C727 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 567,
        [_Location_file]: null
      });
    },
    get C719() {
      return C719 = dart.constList([C720 || CT.C720, C721 || CT.C721, C722 || CT.C722, C723 || CT.C723, C724 || CT.C724, C725 || CT.C725, C726 || CT.C726, C727 || CT.C727], widget_inspector._Location);
    },
    get C718() {
      return C718 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C719 || CT.C719,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 557,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C730() {
      return C730 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C731() {
      return C731 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 556,
        [_Location_file]: null
      });
    },
    get C732() {
      return C732 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 557,
        [_Location_file]: null
      });
    },
    get C729() {
      return C729 = dart.constList([C730 || CT.C730, C731 || CT.C731, C732 || CT.C732], widget_inspector._Location);
    },
    get C728() {
      return C728 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C729 || CT.C729,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 552,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C735() {
      return C735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 11,
        [_Location_line]: 627,
        [_Location_file]: null
      });
    },
    get C736() {
      return C736 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onFocusChange",
        [_Location_column]: 11,
        [_Location_line]: 628,
        [_Location_file]: null
      });
    },
    get C737() {
      return C737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 11,
        [_Location_line]: 629,
        [_Location_file]: null
      });
    },
    get C738() {
      return C738 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C734() {
      return C734 = dart.constList([C735 || CT.C735, C736 || CT.C736, C737 || CT.C737, C738 || CT.C738], widget_inspector._Location);
    },
    get C733() {
      return C733 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C734 || CT.C734,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 626,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C741() {
      return C741 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minSize",
        [_Location_column]: 9,
        [_Location_line]: 625,
        [_Location_file]: null
      });
    },
    get C742() {
      return C742 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 626,
        [_Location_file]: null
      });
    },
    get C740() {
      return C740 = dart.constList([C741 || CT.C741, C742 || CT.C742], widget_inspector._Location);
    },
    get C739() {
      return C739 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C740 || CT.C740,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 624,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C745() {
      return C745 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 7,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 7,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 7,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C748() {
      return C748 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 624,
        [_Location_file]: null
      });
    },
    get C744() {
      return C744 = dart.constList([C745 || CT.C745, C746 || CT.C746, C747 || CT.C747, C748 || CT.C748], widget_inspector._Location);
    },
    get C743() {
      return C743 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C744 || CT.C744,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart"
      });
    },
    get C749() {
      return C749 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_icon_badge.dart"
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_icon_badge.dart"
      });
    },
    get C753() {
      return C753 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C752() {
      return C752 = dart.constList([C753 || CT.C753, C754 || CT.C754], widget_inspector._Location);
    },
    get C751() {
      return C751 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C752 || CT.C752,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_icon_badge.dart"
      });
    },
    get C757() {
      return C757 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C756() {
      return C756 = dart.constList([C757 || CT.C757], widget_inspector._Location);
    },
    get C755() {
      return C755 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C756 || CT.C756,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_icon_badge.dart"
      });
    },
    get C760() {
      return C760 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C761() {
      return C761 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C759() {
      return C759 = dart.constList([C760 || CT.C760, C761 || CT.C761], widget_inspector._Location);
    },
    get C758() {
      return C758 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C759 || CT.C759,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_icon_badge.dart"
      });
    },
    get C762() {
      return C762 = dart.const({
        __proto__: gf_position.GFPosition.prototype,
        [_name$11]: "GFPosition.end",
        index: 1
      });
    },
    get C763() {
      return C763 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 26,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 98
      });
    },
    get C766() {
      return C766 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C767() {
      return C767 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onHighlightChanged",
        [_Location_column]: 13,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C768() {
      return C768 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 13,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C769() {
      return C769 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "boxShadow",
        [_Location_column]: 13,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C770() {
      return C770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "buttonBoxShadow",
        [_Location_column]: 13,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C771() {
      return C771 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusColor",
        [_Location_column]: 13,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C772() {
      return C772 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 13,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C773() {
      return C773 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 13,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C774() {
      return C774 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 13,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C775() {
      return C775 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 13,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C776() {
      return C776 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusElevation",
        [_Location_column]: 13,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C777() {
      return C777 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverElevation",
        [_Location_column]: 13,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C778() {
      return C778 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 13,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C779() {
      return C779 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledElevation",
        [_Location_column]: 13,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C780() {
      return C780 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 13,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderShape",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C782() {
      return C782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationDuration",
        [_Location_column]: 13,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C783() {
      return C783 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 13,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C784() {
      return C784 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 13,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C785() {
      return C785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 13,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C786() {
      return C786 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 13,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C787() {
      return C787 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 13,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C788() {
      return C788 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C789() {
      return C789 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 13,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C790() {
      return C790 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 13,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C791() {
      return C791 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 13,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C792() {
      return C792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderSide",
        [_Location_column]: 13,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C793() {
      return C793 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 13,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C794() {
      return C794 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C795() {
      return C795 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "blockButton",
        [_Location_column]: 13,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fullWidthButton",
        [_Location_column]: 13,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 13,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C798() {
      return C798 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 13,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C765() {
      return C765 = dart.constList([C766 || CT.C766, C767 || CT.C767, C768 || CT.C768, C769 || CT.C769, C770 || CT.C770, C771 || CT.C771, C772 || CT.C772, C773 || CT.C773, C774 || CT.C774, C775 || CT.C775, C776 || CT.C776, C777 || CT.C777, C778 || CT.C778, C779 || CT.C779, C780 || CT.C780, C781 || CT.C781, C782 || CT.C782, C783 || CT.C783, C784 || CT.C784, C785 || CT.C785, C786 || CT.C786, C787 || CT.C787, C788 || CT.C788, C789 || CT.C789, C790 || CT.C790, C791 || CT.C791, C792 || CT.C792, C793 || CT.C793, C794 || CT.C794, C795 || CT.C795, C796 || CT.C796, C797 || CT.C797, C798 || CT.C798], widget_inspector._Location);
    },
    get C764() {
      return C764 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C765 || CT.C765,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart"
      });
    },
    get C801() {
      return C801 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C802() {
      return C802 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C800() {
      return C800 = dart.constList([C801 || CT.C801, C802 || CT.C802], widget_inspector._Location);
    },
    get C799() {
      return C799 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C800 || CT.C800,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart"
      });
    },
    get C805() {
      return C805 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C806() {
      return C806 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C804() {
      return C804 = dart.constList([C805 || CT.C805, C806 || CT.C806], widget_inspector._Location);
    },
    get C803() {
      return C803 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C804 || CT.C804,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart"
      });
    },
    get C807() {
      return C807 = dart.const({
        __proto__: gf_badge_shape.GFBadgeShape.prototype,
        [_name$13]: "GFBadgeShape.standard",
        index: 2
      });
    },
    get C808() {
      return C808 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$5]: "GFColor.danger",
        index: 5
      });
    },
    get C809() {
      return C809 = dart.const({
        __proto__: gf_color.GFColor.prototype,
        [_name$5]: "GFColor.white",
        index: 10
      });
    },
    get C810() {
      return C810 = dart.const({
        __proto__: gf_size.GFSize.prototype,
        [_name$6]: "GFSize.small",
        index: 0
      });
    },
    get C813() {
      return C813 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 52,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C812() {
      return C812 = dart.constList([C813 || CT.C813], widget_inspector._Location);
    },
    get C811() {
      return C811 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C812 || CT.C812,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_badge.dart"
      });
    },
    get C816() {
      return C816 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "widthFactor",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C817() {
      return C817 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 13,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C815() {
      return C815 = dart.constList([C816 || CT.C816, C817 || CT.C817, C176 || CT.C176], widget_inspector._Location);
    },
    get C814() {
      return C814 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C815 || CT.C815,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_badge.dart"
      });
    },
    get C820() {
      return C820 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C819() {
      return C819 = dart.constList([C820 || CT.C820], widget_inspector._Location);
    },
    get C818() {
      return C818 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C819 || CT.C819,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_badge.dart"
      });
    },
    get C823() {
      return C823 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textStyle",
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C824() {
      return C824 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C825() {
      return C825 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C826() {
      return C826 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 9,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C827() {
      return C827 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C822() {
      return C822 = dart.constList([C823 || CT.C823, C824 || CT.C824, C825 || CT.C825, C826 || CT.C826, C827 || CT.C827], widget_inspector._Location);
    },
    get C821() {
      return C821 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C822 || CT.C822,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_badge.dart"
      });
    },
    get C830() {
      return C830 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C831() {
      return C831 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C832() {
      return C832 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C829() {
      return C829 = dart.constList([C830 || CT.C830, C831 || CT.C831, C832 || CT.C832], widget_inspector._Location);
    },
    get C828() {
      return C828 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C829 || CT.C829,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/badge/gf_badge.dart"
      });
    },
    get C833() {
      return C833 = dart.const({
        __proto__: gf_avatar_shape.GFAvatarShape.prototype,
        [_name$14]: "GFAvatarShape.circle",
        index: 0
      });
    },
    get C834() {
      return C834 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name$7]: "Brightness.dark",
        index: 0
      });
    },
    get C835() {
      return C835 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name$7]: "Brightness.light",
        index: 1
      });
    },
    get C838() {
      return C838 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C839() {
      return C839 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C837() {
      return C837 = dart.constList([C838 || CT.C838, C839 || CT.C839], widget_inspector._Location);
    },
    get C836() {
      return C836 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C837 || CT.C837,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart"
      });
    },
    get C842() {
      return C842 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C843() {
      return C843 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C841() {
      return C841 = dart.constList([C842 || CT.C842, C843 || CT.C843], widget_inspector._Location);
    },
    get C840() {
      return C840 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C841 || CT.C841,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart"
      });
    },
    get C846() {
      return C846 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C847() {
      return C847 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C845() {
      return C845 = dart.constList([C846 || CT.C846, C847 || CT.C847], widget_inspector._Location);
    },
    get C844() {
      return C844 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C845 || CT.C845,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart"
      });
    },
    get C850() {
      return C850 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C849() {
      return C849 = dart.constList([C850 || CT.C850], widget_inspector._Location);
    },
    get C848() {
      return C848 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C849 || CT.C849,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart"
      });
    },
    get C853() {
      return C853 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C854() {
      return C854 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C855() {
      return C855 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C856() {
      return C856 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C852() {
      return C852 = dart.constList([C853 || CT.C853, C854 || CT.C854, C855 || CT.C855, C856 || CT.C856], widget_inspector._Location);
    },
    get C851() {
      return C851 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C852 || CT.C852,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart"
      });
    },
    get C858() {
      return C858 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C857() {
      return C857 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C858 || CT.C858,
        [TextStyle_inherit]: true
      });
    },
    get C859() {
      return C859 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C858 || CT.C858,
        [TextStyle_inherit]: true
      });
    },
    get C860() {
      return C860 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$15]: "TargetPlatform.android",
        index: 0
      });
    },
    get C861() {
      return C861 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$15]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C862() {
      return C862 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$15]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C863() {
      return C863 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C472 || CT.C472,
        [Interval_end]: 1,
        [Interval_begin]: 0.25
      });
    },
    get C865() {
      return C865 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58834
      });
    },
    get C864() {
      return C864 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C865 || CT.C865
      });
    },
    get C868() {
      return C868 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C869() {
      return C869 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C870() {
      return C870 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C867() {
      return C867 = dart.constList([C868 || CT.C868, C869 || CT.C869, C870 || CT.C870], widget_inspector._Location);
    },
    get C866() {
      return C866 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C867 || CT.C867,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C871() {
      return C871 = dart.const({
        __proto__: back_button.CloseButton.prototype,
        [Widget_key]: null,
        [CloseButton_color]: null
      });
    },
    get C872() {
      return C872 = dart.const({
        __proto__: back_button.BackButton.prototype,
        [Widget_key]: null,
        [BackButton_onPressed]: null,
        [BackButton_color]: null
      });
    },
    get C873() {
      return C873 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 56,
        [BoxConstraints_minWidth]: 56
      });
    },
    get C876() {
      return C876 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C877() {
      return C877 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C875() {
      return C875 = dart.constList([C876 || CT.C876, C877 || CT.C877], widget_inspector._Location);
    },
    get C874() {
      return C874 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C875 || CT.C875,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C880() {
      return C880 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C879() {
      return C879 = dart.constList([C880 || CT.C880], widget_inspector._Location);
    },
    get C878() {
      return C878 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C879 || CT.C879,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 395,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C883() {
      return C883 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 11,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C884() {
      return C884 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C885() {
      return C885 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 11,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C882() {
      return C882 = dart.constList([C883 || CT.C883, C884 || CT.C884, C885 || CT.C885], widget_inspector._Location);
    },
    get C881() {
      return C881 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C882 || CT.C882,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 393,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C888() {
      return C888 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C889() {
      return C889 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 9,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C890() {
      return C890 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 9,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C891() {
      return C891 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C887() {
      return C887 = dart.constList([C888 || CT.C888, C889 || CT.C889, C890 || CT.C890, C891 || CT.C891], widget_inspector._Location);
    },
    get C886() {
      return C886 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C887 || CT.C887,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 389,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C894() {
      return C894 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C895() {
      return C895 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C896() {
      return C896 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C893() {
      return C893 = dart.constList([C894 || CT.C894, C895 || CT.C895, C896 || CT.C896], widget_inspector._Location);
    },
    get C892() {
      return C892 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C893 || CT.C893,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C899() {
      return C899 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C900() {
      return C900 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 411,
        [_Location_file]: null
      });
    },
    get C901() {
      return C901 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C898() {
      return C898 = dart.constList([C899 || CT.C899, C900 || CT.C900, C901 || CT.C901], widget_inspector._Location);
    },
    get C897() {
      return C897 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C898 || CT.C898,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C904() {
      return C904 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 429,
        [_Location_file]: null
      });
    },
    get C905() {
      return C905 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 430,
        [_Location_file]: null
      });
    },
    get C906() {
      return C906 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 431,
        [_Location_file]: null
      });
    },
    get C903() {
      return C903 = dart.constList([C904 || CT.C904, C905 || CT.C905, C906 || CT.C906], widget_inspector._Location);
    },
    get C902() {
      return C902 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C903 || CT.C903,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 428,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C909() {
      return C909 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C910() {
      return C910 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C911() {
      return C911 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 13,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C908() {
      return C908 = dart.constList([C909 || CT.C909, C910 || CT.C910, C911 || CT.C911], widget_inspector._Location);
    },
    get C907() {
      return C907 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C908 || CT.C908,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 434,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C914() {
      return C914 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C915() {
      return C915 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C916() {
      return C916 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C913() {
      return C913 = dart.constList([C914 || CT.C914, C915 || CT.C915, C916 || CT.C916], widget_inspector._Location);
    },
    get C912() {
      return C912 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C913 || CT.C913,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C919() {
      return C919 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 7,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C920() {
      return C920 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 426,
        [_Location_file]: null
      });
    },
    get C921() {
      return C921 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 427,
        [_Location_file]: null
      });
    },
    get C922() {
      return C922 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C923() {
      return C923 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 456,
        [_Location_file]: null
      });
    },
    get C924() {
      return C924 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C925() {
      return C925 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 7,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C918() {
      return C918 = dart.constList([C919 || CT.C919, C920 || CT.C920, C921 || CT.C921, C922 || CT.C922, C923 || CT.C923, C924 || CT.C924, C925 || CT.C925], widget_inspector._Location);
    },
    get C917() {
      return C917 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C918 || CT.C918,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 424,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C928() {
      return C928 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C929() {
      return C929 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C930() {
      return C930 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 13,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C927() {
      return C927 = dart.constList([C928 || CT.C928, C929 || CT.C929, C930 || CT.C930], widget_inspector._Location);
    },
    get C926() {
      return C926 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C927 || CT.C927,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 466,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C933() {
      return C933 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C934() {
      return C934 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C935() {
      return C935 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 472,
        [_Location_file]: null
      });
    },
    get C932() {
      return C932 = dart.constList([C933 || CT.C933, C934 || CT.C934, C935 || CT.C935], widget_inspector._Location);
    },
    get C931() {
      return C931 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C932 || CT.C932,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 465,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C938() {
      return C938 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 9,
        [_Location_line]: 463,
        [_Location_file]: null
      });
    },
    get C939() {
      return C939 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C940() {
      return C940 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 9,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C937() {
      return C937 = dart.constList([C938 || CT.C938, C939 || CT.C939, C940 || CT.C940], widget_inspector._Location);
    },
    get C936() {
      return C936 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C937 || CT.C937,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 462,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C943() {
      return C943 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 7,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C944() {
      return C944 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "middle",
        [_Location_column]: 7,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C945() {
      return C945 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 7,
        [_Location_line]: 484,
        [_Location_file]: null
      });
    },
    get C946() {
      return C946 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerMiddle",
        [_Location_column]: 7,
        [_Location_line]: 485,
        [_Location_file]: null
      });
    },
    get C947() {
      return C947 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "middleSpacing",
        [_Location_column]: 7,
        [_Location_line]: 486,
        [_Location_file]: null
      });
    },
    get C942() {
      return C942 = dart.constList([C943 || CT.C943, C944 || CT.C944, C945 || CT.C945, C946 || CT.C946, C947 || CT.C947], widget_inspector._Location);
    },
    get C941() {
      return C941 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C942 || CT.C942,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 481,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C948() {
      return C948 = dart.const({
        __proto__: gf_appbar._ToolbarContainerLayout.prototype,
        [SingleChildLayoutDelegate__relayout]: null
      });
    },
    get C951() {
      return C951 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C952() {
      return C952 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 498,
        [_Location_file]: null
      });
    },
    get C950() {
      return C950 = dart.constList([C951 || CT.C951, C952 || CT.C952], widget_inspector._Location);
    },
    get C949() {
      return C949 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C950 || CT.C950,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 496,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C955() {
      return C955 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 9,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C956() {
      return C956 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C954() {
      return C954 = dart.constList([C955 || CT.C955, C956 || CT.C956], widget_inspector._Location);
    },
    get C953() {
      return C953 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C954 || CT.C954,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C959() {
      return C959 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 492,
        [_Location_file]: null
      });
    },
    get C958() {
      return C958 = dart.constList([C959 || CT.C959], widget_inspector._Location);
    },
    get C957() {
      return C957 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C958 || CT.C958,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 491,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C960() {
      return C960 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 56,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C963() {
      return C963 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 15,
        [_Location_line]: 509,
        [_Location_file]: null
      });
    },
    get C964() {
      return C964 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C962() {
      return C962 = dart.constList([C963 || CT.C963, C964 || CT.C964], widget_inspector._Location);
    },
    get C961() {
      return C961 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C962 || CT.C962,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 508,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C967() {
      return C967 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C966() {
      return C966 = dart.constList([C967 || CT.C967], widget_inspector._Location);
    },
    get C965() {
      return C965 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C966 || CT.C966,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 507,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C970() {
      return C970 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C971() {
      return C971 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C969() {
      return C969 = dart.constList([C970 || CT.C970, C971 || CT.C971], widget_inspector._Location);
    },
    get C968() {
      return C968 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C969 || CT.C969,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 513,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C974() {
      return C974 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 505,
        [_Location_file]: null
      });
    },
    get C975() {
      return C975 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 506,
        [_Location_file]: null
      });
    },
    get C973() {
      return C973 = dart.constList([C974 || CT.C974, C975 || CT.C975], widget_inspector._Location);
    },
    get C972() {
      return C972 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C973 || CT.C973,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 504,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C978() {
      return C978 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 9,
        [_Location_line]: 528,
        [_Location_file]: null
      });
    },
    get C979() {
      return C979 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C977() {
      return C977 = dart.constList([C978 || CT.C978, C979 || CT.C979], widget_inspector._Location);
    },
    get C976() {
      return C976 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C977 || CT.C977,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 527,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C982() {
      return C982 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 534,
        [_Location_file]: null
      });
    },
    get C983() {
      return C983 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 535,
        [_Location_file]: null
      });
    },
    get C981() {
      return C981 = dart.constList([C982 || CT.C982, C983 || CT.C983], widget_inspector._Location);
    },
    get C980() {
      return C980 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C981 || CT.C981,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 533,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C986() {
      return C986 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 540,
        [_Location_file]: null
      });
    },
    get C987() {
      return C987 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 541,
        [_Location_file]: null
      });
    },
    get C985() {
      return C985 = dart.constList([C986 || CT.C986, C987 || CT.C987], widget_inspector._Location);
    },
    get C984() {
      return C984 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C985 || CT.C985,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 539,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C990() {
      return C990 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 13,
        [_Location_line]: 566,
        [_Location_file]: null
      });
    },
    get C991() {
      return C991 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 567,
        [_Location_file]: null
      });
    },
    get C989() {
      return C989 = dart.constList([C990 || CT.C990, C991 || CT.C991], widget_inspector._Location);
    },
    get C988() {
      return C988 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C989 || CT.C989,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 565,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C994() {
      return C994 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 560,
        [_Location_file]: null
      });
    },
    get C995() {
      return C995 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 562,
        [_Location_file]: null
      });
    },
    get C996() {
      return C996 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 11,
        [_Location_line]: 564,
        [_Location_file]: null
      });
    },
    get C997() {
      return C997 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C993() {
      return C993 = dart.constList([C994 || CT.C994, C995 || CT.C995, C996 || CT.C996, C997 || CT.C997], widget_inspector._Location);
    },
    get C992() {
      return C992 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C993 || CT.C993,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 559,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C1000() {
      return C1000 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 558,
        [_Location_file]: null
      });
    },
    get C1001() {
      return C1001 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 559,
        [_Location_file]: null
      });
    },
    get C999() {
      return C999 = dart.constList([C1000 || CT.C1000, C1001 || CT.C1001], widget_inspector._Location);
    },
    get C998() {
      return C998 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C999 || CT.C999,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 557,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    },
    get C1004() {
      return C1004 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 7,
        [_Location_line]: 556,
        [_Location_file]: null
      });
    },
    get C1003() {
      return C1003 = dart.constList([C1004 || CT.C1004, C732 || CT.C732], widget_inspector._Location);
    },
    get C1002() {
      return C1002 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1003 || CT.C1003,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 555,
        [_Location_file]: "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart"
      });
    }
  });
  const _is_GFSearchBar_default = Symbol('_is_GFSearchBar_default');
  const searchList$ = dart.privateName(gf_search_bar, "GFSearchBar.searchList");
  const overlaySearchListItemBuilder$ = dart.privateName(gf_search_bar, "GFSearchBar.overlaySearchListItemBuilder");
  const hideSearchBoxWhenItemSelected$ = dart.privateName(gf_search_bar, "GFSearchBar.hideSearchBoxWhenItemSelected");
  const overlaySearchListHeight$ = dart.privateName(gf_search_bar, "GFSearchBar.overlaySearchListHeight");
  const searchQueryBuilder$ = dart.privateName(gf_search_bar, "GFSearchBar.searchQueryBuilder");
  const noItemsFoundWidget$ = dart.privateName(gf_search_bar, "GFSearchBar.noItemsFoundWidget");
  const onItemSelected$ = dart.privateName(gf_search_bar, "GFSearchBar.onItemSelected");
  const searchBoxInputDecoration$ = dart.privateName(gf_search_bar, "GFSearchBar.searchBoxInputDecoration");
  gf_search_bar.GFSearchBar$ = dart.generic(T => {
    let MySingleChoiceSearchStateOfT = () => (MySingleChoiceSearchStateOfT = dart.constFn(gf_search_bar.MySingleChoiceSearchState$(T)))();
    class GFSearchBar extends framework.StatefulWidget {
      get searchList() {
        return this[searchList$];
      }
      set searchList(value) {
        super.searchList = value;
      }
      get overlaySearchListItemBuilder() {
        return this[overlaySearchListItemBuilder$];
      }
      set overlaySearchListItemBuilder(value) {
        super.overlaySearchListItemBuilder = value;
      }
      get hideSearchBoxWhenItemSelected() {
        return this[hideSearchBoxWhenItemSelected$];
      }
      set hideSearchBoxWhenItemSelected(value) {
        super.hideSearchBoxWhenItemSelected = value;
      }
      get overlaySearchListHeight() {
        return this[overlaySearchListHeight$];
      }
      set overlaySearchListHeight(value) {
        super.overlaySearchListHeight = value;
      }
      get searchQueryBuilder() {
        return this[searchQueryBuilder$];
      }
      set searchQueryBuilder(value) {
        super.searchQueryBuilder = value;
      }
      get noItemsFoundWidget() {
        return this[noItemsFoundWidget$];
      }
      set noItemsFoundWidget(value) {
        super.noItemsFoundWidget = value;
      }
      get onItemSelected() {
        return this[onItemSelected$];
      }
      set onItemSelected(value) {
        super.onItemSelected = value;
      }
      get searchBoxInputDecoration() {
        return this[searchBoxInputDecoration$];
      }
      set searchBoxInputDecoration(value) {
        super.searchBoxInputDecoration = value;
      }
      createState() {
        return new (MySingleChoiceSearchStateOfT()).new();
      }
    }
    (GFSearchBar.new = function(opts) {
      let searchList = opts && 'searchList' in opts ? opts.searchList : null;
      let overlaySearchListItemBuilder = opts && 'overlaySearchListItemBuilder' in opts ? opts.overlaySearchListItemBuilder : null;
      let searchQueryBuilder = opts && 'searchQueryBuilder' in opts ? opts.searchQueryBuilder : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let onItemSelected = opts && 'onItemSelected' in opts ? opts.onItemSelected : null;
      let hideSearchBoxWhenItemSelected = opts && 'hideSearchBoxWhenItemSelected' in opts ? opts.hideSearchBoxWhenItemSelected : false;
      let overlaySearchListHeight = opts && 'overlaySearchListHeight' in opts ? opts.overlaySearchListHeight : null;
      let noItemsFoundWidget = opts && 'noItemsFoundWidget' in opts ? opts.noItemsFoundWidget : null;
      let searchBoxInputDecoration = opts && 'searchBoxInputDecoration' in opts ? opts.searchBoxInputDecoration : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[searchList$] = searchList;
      this[overlaySearchListItemBuilder$] = overlaySearchListItemBuilder;
      this[searchQueryBuilder$] = searchQueryBuilder;
      this[onItemSelected$] = onItemSelected;
      this[hideSearchBoxWhenItemSelected$] = hideSearchBoxWhenItemSelected;
      this[overlaySearchListHeight$] = overlaySearchListHeight;
      this[noItemsFoundWidget$] = noItemsFoundWidget;
      this[searchBoxInputDecoration$] = searchBoxInputDecoration;
      GFSearchBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = GFSearchBar.prototype;
    dart.addTypeTests(GFSearchBar);
    GFSearchBar.prototype[_is_GFSearchBar_default] = true;
    dart.setMethodSignature(GFSearchBar, () => ({
      __proto__: dart.getMethods(GFSearchBar.__proto__),
      createState: dart.fnType(gf_search_bar.MySingleChoiceSearchState$(T), [])
    }));
    dart.setLibraryUri(GFSearchBar, "package:getflutter/components/search_bar/gf_search_bar.dart");
    dart.setFieldSignature(GFSearchBar, () => ({
      __proto__: dart.getFields(GFSearchBar.__proto__),
      searchList: dart.finalFieldType(core.List$(T)),
      overlaySearchListItemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [T])),
      hideSearchBoxWhenItemSelected: dart.finalFieldType(core.bool),
      overlaySearchListHeight: dart.finalFieldType(core.double),
      searchQueryBuilder: dart.finalFieldType(dart.fnType(core.List$(T), [core.String, core.List$(T)])),
      noItemsFoundWidget: dart.finalFieldType(framework.Widget),
      onItemSelected: dart.finalFieldType(dart.fnType(dart.void, [T])),
      searchBoxInputDecoration: dart.finalFieldType(input_decorator.InputDecoration)
    }));
    return GFSearchBar;
  });
  gf_search_bar.GFSearchBar = gf_search_bar.GFSearchBar$();
  dart.addTypeTests(gf_search_bar.GFSearchBar, _is_GFSearchBar_default);
  const _controller = dart.privateName(gf_search_bar, "_controller");
  const _list = dart.privateName(gf_search_bar, "_list");
  const _searchList = dart.privateName(gf_search_bar, "_searchList");
  const _focusNode = dart.privateName(gf_search_bar, "_focusNode");
  const _layerLink = dart.privateName(gf_search_bar, "_layerLink");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  let C1;
  const _name = dart.privateName(borders, "_name");
  let C4;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color_value = dart.privateName(ui, "Color.value");
  let C5;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C3;
  const InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C7;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C6;
  const OutlineInputBorder_borderRadius = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  const OutlineInputBorder_gapPadding = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  let C2;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C10;
  let C9;
  let C8;
  let C11;
  let C14;
  let C15;
  let C16;
  let C17;
  let C13;
  let C12;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C23;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C32;
  let C29;
  let C28;
  const RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  let C35;
  let C36;
  let C34;
  const RoundedRectangleBorder_side = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.side");
  let C33;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C42;
  let C41;
  let C45;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C46;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C59;
  let C60;
  let C56;
  let C55;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C72;
  let C69;
  let C68;
  let C75;
  let C74;
  let C73;
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
  let C76;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C84;
  let C85;
  let C81;
  let C80;
  let C88;
  let C89;
  let C90;
  let C91;
  let C87;
  let C86;
  let C94;
  let C95;
  let C96;
  let C93;
  let C92;
  const _is_MySingleChoiceSearchState_default = Symbol('_is_MySingleChoiceSearchState_default');
  const isFocused = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.isFocused");
  const notifier = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.notifier");
  const isRequiredCheckFailed = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.isRequiredCheckFailed");
  const searchBox = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.searchBox");
  const overlaySearchList = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.overlaySearchList");
  const showTextBox = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.showTextBox");
  const overlaySearchListHeight = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.overlaySearchListHeight");
  const textBoxHeight = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.textBoxHeight");
  const textController = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.textController");
  const isSearchBoxSelected = dart.privateName(gf_search_bar, "MySingleChoiceSearchState.isSearchBoxSelected");
  gf_search_bar.MySingleChoiceSearchState$ = dart.generic(T => {
    let ValueNotifierOfT = () => (ValueNotifierOfT = dart.constFn(change_notifier.ValueNotifier$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StringAndListOfTToListOfT = () => (StringAndListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [core.String, ListOfT()])))();
    let GFSearchBarOfT = () => (GFSearchBarOfT = dart.constFn(gf_search_bar.GFSearchBar$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let TToWidget = () => (TToWidget = dart.constFn(dart.fnType(framework.Widget, [T])))();
    class MySingleChoiceSearchState extends framework.State$(gf_search_bar.GFSearchBar$(T)) {
      get isFocused() {
        return this[isFocused];
      }
      set isFocused(value) {
        this[isFocused] = value;
      }
      get notifier() {
        return this[notifier];
      }
      set notifier(value) {
        this[notifier] = ValueNotifierOfT()._check(value);
      }
      get isRequiredCheckFailed() {
        return this[isRequiredCheckFailed];
      }
      set isRequiredCheckFailed(value) {
        this[isRequiredCheckFailed] = value;
      }
      get searchBox() {
        return this[searchBox];
      }
      set searchBox(value) {
        this[searchBox] = value;
      }
      get overlaySearchList() {
        return this[overlaySearchList];
      }
      set overlaySearchList(value) {
        this[overlaySearchList] = value;
      }
      get showTextBox() {
        return this[showTextBox];
      }
      set showTextBox(value) {
        this[showTextBox] = value;
      }
      get overlaySearchListHeight() {
        return this[overlaySearchListHeight];
      }
      set overlaySearchListHeight(value) {
        this[overlaySearchListHeight] = value;
      }
      get textBoxHeight() {
        return this[textBoxHeight];
      }
      set textBoxHeight(value) {
        super.textBoxHeight = value;
      }
      get textController() {
        return this[textController];
      }
      set textController(value) {
        super.textController = value;
      }
      get isSearchBoxSelected() {
        return this[isSearchBoxSelected];
      }
      set isSearchBoxSelected(value) {
        this[isSearchBoxSelected] = value;
      }
      initState() {
        super.initState();
        this.init();
      }
      init() {
        this[_searchList] = JSArrayOfT().of([]);
        this.notifier = new (ValueNotifierOfT()).new(null);
        this[_focusNode] = new focus_manager.FocusNode.new();
        this.isFocused = false;
        this[_list] = ListOfT().from(this.widget.searchList);
        this[_searchList][$addAll](this[_list]);
        this[_focusNode].addListener(dart.fn(() => {
          let t0;
          if (!dart.test(this[_focusNode].hasFocus)) {
            this[_controller].clear();
            if (this.overlaySearchList != null) {
              this.overlaySearchList.remove();
            }
            this.overlaySearchList = null;
          } else {
            t0 = this[_searchList];
            t0[$clear]();
            t0[$addAll](this[_list]);
            t0;
            if (this.overlaySearchList == null) {
              this.onTextFieldFocus();
            } else {
              this.overlaySearchList.markNeedsBuild();
            }
          }
        }, VoidToNull()));
        this[_controller].addListener(dart.fn(() => {
          let t0;
          let text = this[_controller].text;
          if (text[$trim]()[$isNotEmpty]) {
            this[_searchList][$clear]();
            let filterList = StringAndListOfTToListOfT()._check(this.widget.searchQueryBuilder)(text, this.widget.searchList);
            if (filterList == null) {
              dart.throw(core.Exception.new("List cannot be null"));
            }
            this[_searchList][$addAll](filterList);
            if (this.overlaySearchList == null) {
              this.onTextFieldFocus();
            } else {
              this.overlaySearchList.markNeedsBuild();
            }
          } else {
            t0 = this[_searchList];
            t0[$clear]();
            t0[$addAll](this[_list]);
            t0;
            if (this.overlaySearchList == null) {
              this.onTextFieldFocus();
            } else {
              this.overlaySearchList.markNeedsBuild();
            }
          }
        }, VoidToNull()));
      }
      didUpdateWidget(oldWidget) {
        gf_search_bar.GFSearchBar._check(oldWidget);
        if (!dart.equals(oldWidget.searchList, this.widget.searchList)) {
          this.init();
        }
        super.didUpdateWidget(GFSearchBarOfT()._check(oldWidget));
      }
      build(context) {
        let t0;
        this.overlaySearchListHeight = (t0 = this.widget.overlaySearchListHeight, t0 == null ? dart.notNull(media_query.MediaQuery.of(context).size.height) / 4 : t0);
        this.searchBox = new container.Container.new({padding: C0 || CT.C0, margin: C1 || CT.C1, child: new text_field.TextField.new({controller: this[_controller], focusNode: this[_focusNode], style: new text_style.TextStyle.new({fontSize: 16.0, color: colors.Colors.grey._get(600)}), decoration: this.widget.searchBoxInputDecoration == null ? new input_decorator.InputDecoration.new({enabledBorder: C2 || CT.C2, focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: theme$.Theme.of(context).primaryColor})}), suffixIcon: new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), border: input_border.InputBorder.none, hintText: "Search here...", contentPadding: C11 || CT.C11}) : this.widget.searchBoxInputDecoration, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
        let searchBoxBody = new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            if (dart.test(this.widget.hideSearchBoxWhenItemSelected) && this.notifier.value != null)
              t0[$add](C23 || CT.C23);
            else
              t0[$add](new basic.CompositedTransformTarget.new({link: this[_layerLink], child: this.searchBox, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C28 || CT.C28});
        return searchBoxBody;
      }
      onCloseOverlaySearchList() {
        this.onSearchListItemSelected(null);
      }
      onSearchListItemSelected(item) {
        T._check(item);
        if (this.overlaySearchList != null) {
          this.overlaySearchList.remove();
        }
        this.overlaySearchList = null;
        this[_controller].clear();
        this[_focusNode].unfocus();
        this.setState(dart.fn(() => {
          this.notifier.value = item;
          this.isFocused = false;
          this.isRequiredCheckFailed = false;
        }, VoidToNull()));
        if (TTovoid()._check(this.widget.onItemSelected) != null) {
          TTovoid()._check(this.widget.onItemSelected)(item);
        }
      }
      onTextFieldFocus() {
        this.setState(dart.fn(() => {
          this.isSearchBoxSelected = true;
        }, VoidToNull()));
        let searchBoxRenderBox = box.RenderBox._check(this.context.findRenderObject());
        let overlay = box.RenderBox._check(overlay$.Overlay.of(this.context).context.findRenderObject());
        let width = searchBoxRenderBox.size.width;
        let position = stack.RelativeRect.fromRect(new ui.Rect.fromPoints(searchBoxRenderBox.localToGlobal(searchBoxRenderBox.size.topLeft(ui.Offset.zero), {ancestor: overlay}), searchBoxRenderBox.localToGlobal(searchBoxRenderBox.size.topRight(ui.Offset.zero), {ancestor: overlay})), ui.Offset.zero['&'](overlay.size));
        this.overlaySearchList = new overlay$.OverlayEntry.new({builder: dart.fn(context => {
            let height = media_query.MediaQuery.of(context).size.height;
            return new basic.Positioned.new({left: position.left, width: width, child: new basic.CompositedTransformFollower.new({offset: new ui.Offset.new(0.0, dart.notNull(height) - dart.notNull(position.bottom) < dart.notNull(this.overlaySearchListHeight) ? dart.notNull(this.textBoxHeight) + 6.0 : -(dart.notNull(this.overlaySearchListHeight) - 8.0)), showWhenUnlinked: false, link: this[_layerLink], child: new gf_card.GFCard.new({color: colors.Colors.white, elevation: 5.0, shape: C33 || CT.C33, content: dart.test(this[_searchList][$isNotEmpty]) ? new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.end, crossAxisAlignment: flex.CrossAxisAlignment.end, children: JSArrayOfWidget().of([new ink_well.InkWell.new({child: new icon.Icon.new(icons.Icons.close, {size: 22.0, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), onTap: dart.bind(this, 'onCloseOverlaySearchList'), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new container.Container.new({height: this.overlaySearchListHeight, child: new scrollbar.Scrollbar.new({child: new scroll_view.ListView.separated({padding: C45 || CT.C45, separatorBuilder: dart.fn((context, index) => C46 || CT.C46, BuildContextAndintToDivider()), itemBuilder: dart.fn((context, index) => new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({onTap: dart.fn(() => this.onSearchListItemSelected(this[_searchList][$_get](index)), VoidTovoid()), child: TToWidget()._check(this.widget.overlaySearchListItemBuilder)(this[_searchList][$elementAt](index)), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), BuildContextAndintToMaterial()), itemCount: this[_searchList][$length], $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64})]), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}) : this.widget.noItemsFoundWidget != null ? new basic.Center.new({child: this.widget.noItemsFoundWidget, $creationLocationd_0dea112b090073317d4: C73 || CT.C73}) : new container.Container.new({child: C76 || CT.C76, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92});
          }, BuildContextToPositioned())});
        overlay$.Overlay.of(this.context).insert(this.overlaySearchList);
      }
    }
    (MySingleChoiceSearchState.new = function() {
      this[_controller] = new editable_text.TextEditingController.new();
      this[_list] = null;
      this[_searchList] = null;
      this[isFocused] = null;
      this[_focusNode] = null;
      this[notifier] = null;
      this[isRequiredCheckFailed] = null;
      this[searchBox] = null;
      this[overlaySearchList] = null;
      this[showTextBox] = false;
      this[overlaySearchListHeight] = null;
      this[_layerLink] = new layer.LayerLink.new();
      this[textBoxHeight] = 48.0;
      this[textController] = new editable_text.TextEditingController.new();
      this[isSearchBoxSelected] = false;
      MySingleChoiceSearchState.__proto__.new.call(this);
      ;
    }).prototype = MySingleChoiceSearchState.prototype;
    dart.addTypeTests(MySingleChoiceSearchState);
    MySingleChoiceSearchState.prototype[_is_MySingleChoiceSearchState_default] = true;
    dart.setMethodSignature(MySingleChoiceSearchState, () => ({
      __proto__: dart.getMethods(MySingleChoiceSearchState.__proto__),
      init: dart.fnType(dart.void, []),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      onCloseOverlaySearchList: dart.fnType(dart.void, []),
      onSearchListItemSelected: dart.fnType(dart.void, [core.Object]),
      onTextFieldFocus: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(MySingleChoiceSearchState, "package:getflutter/components/search_bar/gf_search_bar.dart");
    dart.setFieldSignature(MySingleChoiceSearchState, () => ({
      __proto__: dart.getFields(MySingleChoiceSearchState.__proto__),
      [_controller]: dart.finalFieldType(editable_text.TextEditingController),
      [_list]: dart.fieldType(core.List$(T)),
      [_searchList]: dart.fieldType(core.List$(T)),
      isFocused: dart.fieldType(core.bool),
      [_focusNode]: dart.fieldType(focus_manager.FocusNode),
      notifier: dart.fieldType(change_notifier.ValueNotifier$(T)),
      isRequiredCheckFailed: dart.fieldType(core.bool),
      searchBox: dart.fieldType(framework.Widget),
      overlaySearchList: dart.fieldType(overlay$.OverlayEntry),
      showTextBox: dart.fieldType(core.bool),
      overlaySearchListHeight: dart.fieldType(core.double),
      [_layerLink]: dart.finalFieldType(layer.LayerLink),
      textBoxHeight: dart.finalFieldType(core.double),
      textController: dart.finalFieldType(editable_text.TextEditingController),
      isSearchBoxSelected: dart.fieldType(core.bool)
    }));
    return MySingleChoiceSearchState;
  });
  gf_search_bar.MySingleChoiceSearchState = gf_search_bar.MySingleChoiceSearchState$();
  dart.addTypeTests(gf_search_bar.MySingleChoiceSearchState, _is_MySingleChoiceSearchState_default);
  const _name$ = dart.privateName(gf_typography_type, "_name");
  let C97;
  let C99;
  let C98;
  let C101;
  const Padding_padding = dart.privateName(basic, "Padding.padding");
  let C100;
  let C102;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C108;
  let C107;
  let C112;
  let C111;
  let C110;
  let C113;
  let C115;
  let C114;
  let C118;
  let C119;
  let C120;
  let C117;
  let C116;
  let C123;
  let C124;
  let C125;
  let C122;
  let C121;
  let C126;
  let C129;
  let C130;
  let C128;
  let C127;
  let C133;
  let C134;
  let C135;
  let C132;
  let C131;
  const child$ = dart.privateName(gf_typography, "GFTypography.child");
  const text$ = dart.privateName(gf_typography, "GFTypography.text");
  const icon$ = dart.privateName(gf_typography, "GFTypography.icon");
  const dividerColor$ = dart.privateName(gf_typography, "GFTypography.dividerColor");
  const textColor$ = dart.privateName(gf_typography, "GFTypography.textColor");
  const dividerBorderRadius$ = dart.privateName(gf_typography, "GFTypography.dividerBorderRadius");
  const dividerAlignment$ = dart.privateName(gf_typography, "GFTypography.dividerAlignment");
  const showDivider$ = dart.privateName(gf_typography, "GFTypography.showDivider");
  const dividerWidth$ = dart.privateName(gf_typography, "GFTypography.dividerWidth");
  const backgroundImage$ = dart.privateName(gf_typography, "GFTypography.backgroundImage");
  const backgroundImagecolorFilter$ = dart.privateName(gf_typography, "GFTypography.backgroundImagecolorFilter");
  const type$ = dart.privateName(gf_typography, "GFTypography.type");
  gf_typography.GFTypography = class GFTypography extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get dividerColor() {
      return this[dividerColor$];
    }
    set dividerColor(value) {
      super.dividerColor = value;
    }
    get textColor() {
      return this[textColor$];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get dividerBorderRadius() {
      return this[dividerBorderRadius$];
    }
    set dividerBorderRadius(value) {
      super.dividerBorderRadius = value;
    }
    get dividerAlignment() {
      return this[dividerAlignment$];
    }
    set dividerAlignment(value) {
      super.dividerAlignment = value;
    }
    get showDivider() {
      return this[showDivider$];
    }
    set showDivider(value) {
      super.showDivider = value;
    }
    get dividerWidth() {
      return this[dividerWidth$];
    }
    set dividerWidth(value) {
      super.dividerWidth = value;
    }
    get backgroundImage() {
      return this[backgroundImage$];
    }
    set backgroundImage(value) {
      super.backgroundImage = value;
    }
    get backgroundImagecolorFilter() {
      return this[backgroundImagecolorFilter$];
    }
    set backgroundImagecolorFilter(value) {
      super.backgroundImagecolorFilter = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    build(context) {
      let t1, t1$;
      let fontSize = null;
      if (dart.equals(this.type, gf_typography_type.GFTypographyType.typo1)) {
        fontSize = 25.0;
      } else if (dart.equals(this.type, gf_typography_type.GFTypographyType.typo2)) {
        fontSize = 22.0;
      } else if (dart.equals(this.type, gf_typography_type.GFTypographyType.typo3)) {
        fontSize = 19.0;
      } else if (dart.equals(this.type, gf_typography_type.GFTypographyType.typo4)) {
        fontSize = 17.0;
      } else if (dart.equals(this.type, gf_typography_type.GFTypographyType.typo5)) {
        fontSize = 15.0;
      } else if (dart.equals(this.type, gf_typography_type.GFTypographyType.typo6)) {
        fontSize = 13.0;
      }
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(this.backgroundImage != null ? 10.0 : 0.0), decoration: new box_decoration.BoxDecoration.new({image: this.backgroundImage != null ? new decoration_image.DecorationImage.new({image: this.backgroundImage, fit: box_fit.BoxFit.cover, colorFilter: (t1 = this.backgroundImagecolorFilter, t1 == null ? new _engine.EngineColorFilter.mode(colors.Colors.black54, ui.BlendMode.darken) : t1)}) : null}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([(t1$ = this.icon, t1$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C98 || CT.C98}) : t1$), this.icon != null ? C100 || CT.C100 : new container.Container.new({$creationLocationd_0dea112b090073317d4: C102 || CT.C102}), this.text != null ? new basic.Expanded.new({child: new text.Text.new(this.text, {style: new text_style.TextStyle.new({color: this.textColor != null ? gf_color.GFColors.getGFColor(this.textColor) : this.backgroundImage != null ? colors.Colors.white : colors.Colors.black, fontSize: fontSize, letterSpacing: 0.3, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}) : this.child]), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), dart.test(this.showDivider) ? new container.Container.new({margin: C113 || CT.C113, alignment: this.dividerAlignment, child: new container.Container.new({width: this.dividerWidth != null ? this.dividerWidth : 70.0, height: dart.notNull(fontSize) / 5, decoration: new box_decoration.BoxDecoration.new({color: this.dividerColor != null ? gf_color.GFColors.getGFColor(this.dividerColor) : this.backgroundImage != null ? colors.Colors.white : colors.Colors.black, borderRadius: this.dividerBorderRadius != null ? this.dividerBorderRadius : C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C126 || CT.C126})]), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131});
    }
  };
  (gf_typography.GFTypography.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let type = opts && 'type' in opts ? opts.type : C97 || CT.C97;
    let child = opts && 'child' in opts ? opts.child : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let dividerBorderRadius = opts && 'dividerBorderRadius' in opts ? opts.dividerBorderRadius : null;
    let textColor = opts && 'textColor' in opts ? opts.textColor : null;
    let dividerAlignment = opts && 'dividerAlignment' in opts ? opts.dividerAlignment : null;
    let dividerColor = opts && 'dividerColor' in opts ? opts.dividerColor : null;
    let showDivider = opts && 'showDivider' in opts ? opts.showDivider : true;
    let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
    let backgroundImage = opts && 'backgroundImage' in opts ? opts.backgroundImage : null;
    let backgroundImagecolorFilter = opts && 'backgroundImagecolorFilter' in opts ? opts.backgroundImagecolorFilter : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[type$] = type;
    this[child$] = child;
    this[text$] = text;
    this[icon$] = icon;
    this[dividerBorderRadius$] = dividerBorderRadius;
    this[textColor$] = textColor;
    this[dividerAlignment$] = dividerAlignment;
    this[dividerColor$] = dividerColor;
    this[showDivider$] = showDivider;
    this[dividerWidth$] = dividerWidth;
    this[backgroundImage$] = backgroundImage;
    this[backgroundImagecolorFilter$] = backgroundImagecolorFilter;
    gf_typography.GFTypography.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_typography.GFTypography.prototype;
  dart.addTypeTests(gf_typography.GFTypography);
  dart.setMethodSignature(gf_typography.GFTypography, () => ({
    __proto__: dart.getMethods(gf_typography.GFTypography.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_typography.GFTypography, "package:getflutter/components/typography/gf_typography.dart");
  dart.setFieldSignature(gf_typography.GFTypography, () => ({
    __proto__: dart.getFields(gf_typography.GFTypography.__proto__),
    child: dart.finalFieldType(framework.Widget),
    text: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(framework.Widget),
    dividerColor: dart.finalFieldType(dart.dynamic),
    textColor: dart.finalFieldType(dart.dynamic),
    dividerBorderRadius: dart.finalFieldType(border_radius.BorderRadius),
    dividerAlignment: dart.finalFieldType(alignment.Alignment),
    showDivider: dart.finalFieldType(core.bool),
    dividerWidth: dart.finalFieldType(core.double),
    backgroundImage: dart.finalFieldType(image_provider.ImageProvider),
    backgroundImagecolorFilter: dart.finalFieldType(ui.ColorFilter),
    type: dart.finalFieldType(gf_typography_type.GFTypographyType)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C136;
  const enabledText$ = dart.privateName(gf_toggle, "GFToggle.enabledText");
  const disabledText$ = dart.privateName(gf_toggle, "GFToggle.disabledText");
  const enabledTextStyle$ = dart.privateName(gf_toggle, "GFToggle.enabledTextStyle");
  const disabledTextStyle$ = dart.privateName(gf_toggle, "GFToggle.disabledTextStyle");
  const enabledThumbColor$ = dart.privateName(gf_toggle, "GFToggle.enabledThumbColor");
  const disabledThumbColor$ = dart.privateName(gf_toggle, "GFToggle.disabledThumbColor");
  const enabledTrackColor$ = dart.privateName(gf_toggle, "GFToggle.enabledTrackColor");
  const disabledTrackColor$ = dart.privateName(gf_toggle, "GFToggle.disabledTrackColor");
  const boxShape$ = dart.privateName(gf_toggle, "GFToggle.boxShape");
  const borderRadius$ = dart.privateName(gf_toggle, "GFToggle.borderRadius");
  const duration$ = dart.privateName(gf_toggle, "GFToggle.duration");
  const type$0 = dart.privateName(gf_toggle, "GFToggle.type");
  const value$ = dart.privateName(gf_toggle, "GFToggle.value");
  const onChanged$ = dart.privateName(gf_toggle, "GFToggle.onChanged");
  gf_toggle.GFToggle = class GFToggle extends framework.StatefulWidget {
    get enabledText() {
      return this[enabledText$];
    }
    set enabledText(value) {
      super.enabledText = value;
    }
    get disabledText() {
      return this[disabledText$];
    }
    set disabledText(value) {
      super.disabledText = value;
    }
    get enabledTextStyle() {
      return this[enabledTextStyle$];
    }
    set enabledTextStyle(value) {
      super.enabledTextStyle = value;
    }
    get disabledTextStyle() {
      return this[disabledTextStyle$];
    }
    set disabledTextStyle(value) {
      super.disabledTextStyle = value;
    }
    get enabledThumbColor() {
      return this[enabledThumbColor$];
    }
    set enabledThumbColor(value) {
      super.enabledThumbColor = value;
    }
    get disabledThumbColor() {
      return this[disabledThumbColor$];
    }
    set disabledThumbColor(value) {
      super.disabledThumbColor = value;
    }
    get enabledTrackColor() {
      return this[enabledTrackColor$];
    }
    set enabledTrackColor(value) {
      super.enabledTrackColor = value;
    }
    get disabledTrackColor() {
      return this[disabledTrackColor$];
    }
    set disabledTrackColor(value) {
      super.disabledTrackColor = value;
    }
    get boxShape() {
      return this[boxShape$];
    }
    set boxShape(value) {
      super.boxShape = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    createState() {
      return new gf_toggle._GFToggleState.new();
    }
  };
  (gf_toggle.GFToggle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let enabledText = opts && 'enabledText' in opts ? opts.enabledText : null;
    let disabledText = opts && 'disabledText' in opts ? opts.disabledText : null;
    let enabledTextStyle = opts && 'enabledTextStyle' in opts ? opts.enabledTextStyle : null;
    let enabledThumbColor = opts && 'enabledThumbColor' in opts ? opts.enabledThumbColor : null;
    let enabledTrackColor = opts && 'enabledTrackColor' in opts ? opts.enabledTrackColor : null;
    let disabledTextStyle = opts && 'disabledTextStyle' in opts ? opts.disabledTextStyle : null;
    let disabledTrackColor = opts && 'disabledTrackColor' in opts ? opts.disabledTrackColor : null;
    let disabledThumbColor = opts && 'disabledThumbColor' in opts ? opts.disabledThumbColor : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let boxShape = opts && 'boxShape' in opts ? opts.boxShape : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let duration = opts && 'duration' in opts ? opts.duration : C136 || CT.C136;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onChanged$] = onChanged;
    this[value$] = value;
    this[enabledText$] = enabledText;
    this[disabledText$] = disabledText;
    this[enabledTextStyle$] = enabledTextStyle;
    this[enabledThumbColor$] = enabledThumbColor;
    this[enabledTrackColor$] = enabledTrackColor;
    this[disabledTextStyle$] = disabledTextStyle;
    this[disabledTrackColor$] = disabledTrackColor;
    this[disabledThumbColor$] = disabledThumbColor;
    this[type$0] = type;
    this[boxShape$] = boxShape;
    this[borderRadius$] = borderRadius;
    this[duration$] = duration;
    gf_toggle.GFToggle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_toggle.GFToggle.prototype;
  dart.addTypeTests(gf_toggle.GFToggle);
  dart.setMethodSignature(gf_toggle.GFToggle, () => ({
    __proto__: dart.getMethods(gf_toggle.GFToggle.__proto__),
    createState: dart.fnType(gf_toggle._GFToggleState, [])
  }));
  dart.setLibraryUri(gf_toggle.GFToggle, "package:getflutter/components/toggle/gf_toggle.dart");
  dart.setFieldSignature(gf_toggle.GFToggle, () => ({
    __proto__: dart.getFields(gf_toggle.GFToggle.__proto__),
    enabledText: dart.finalFieldType(core.String),
    disabledText: dart.finalFieldType(core.String),
    enabledTextStyle: dart.finalFieldType(text_style.TextStyle),
    disabledTextStyle: dart.finalFieldType(text_style.TextStyle),
    enabledThumbColor: dart.finalFieldType(ui.Color),
    disabledThumbColor: dart.finalFieldType(ui.Color),
    enabledTrackColor: dart.finalFieldType(ui.Color),
    disabledTrackColor: dart.finalFieldType(ui.Color),
    boxShape: dart.finalFieldType(box_border.BoxShape),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    duration: dart.finalFieldType(core.Duration),
    type: dart.finalFieldType(gf_toggle_type.GFToggleType),
    value: dart.finalFieldType(core.bool),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool]))
  }));
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C137;
  const _name$0 = dart.privateName(animation, "_name");
  let C138;
  let C139;
  let C142;
  let C143;
  let C141;
  let C140;
  let C145;
  let C144;
  let C147;
  let C146;
  let C148;
  let C149;
  let C152;
  let C153;
  let C151;
  let C150;
  let C156;
  let C157;
  let C158;
  let C155;
  let C154;
  let C161;
  let C162;
  let C160;
  let C159;
  let C165;
  let C166;
  let C167;
  let C168;
  let C164;
  let C163;
  let C171;
  let C172;
  let C170;
  let C169;
  let C175;
  let C176;
  let C174;
  let C173;
  let C179;
  let C180;
  let C181;
  let C182;
  let C178;
  let C177;
  let C185;
  let C186;
  let C184;
  let C183;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C194;
  let C195;
  let C192;
  let C191;
  let C198;
  let C197;
  let C196;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(gf_toggle.GFToggle) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(gf_toggle.GFToggle)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(gf_toggle.GFToggle));
  gf_toggle._GFToggleState = class _GFToggleState extends State_TickerProviderStateMixin$36 {
    initState() {
      this.setState(dart.fn(() => {
        let t1;
        this.isOn = (t1 = this.widget.value, t1 == null ? false : t1);
      }, VoidToNull()));
      this.controller = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration});
      this.offset = (dart.test(this.isOn) ? new (TweenOfOffset()).new({begin: C137 || CT.C137, end: ui.Offset.zero}) : new (TweenOfOffset()).new({begin: ui.Offset.zero, end: C137 || CT.C137})).animate(this.controller);
      super.initState();
    }
    dispose() {
      if (this.animationController != null) {
        this.animationController.dispose();
      }
      if (this.controller != null) {
        this.controller.dispose();
      }
      super.dispose();
    }
    onStatusChange() {
      if (this.widget.onChanged != null) {
        this.setState(dart.fn(() => {
          this.isOn = !dart.test(this.isOn);
        }, VoidToNull()));
        switch (this.controller.status) {
          case C138 || CT.C138:
          {
            this.controller.forward();
            break;
          }
          case C139 || CT.C139:
          {
            this.controller.reverse();
            break;
          }
          default:
        }
        this.widget.onChanged(this.isOn);
      }
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7;
      return new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({height: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.android) ? 25.0 : 30.0, width: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.android) ? 40.0 : 50.0, $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), new basic.Positioned.new({top: 5.0, child: new ink_well.InkWell.new({onTap: dart.bind(this, 'onStatusChange'), child: new container.Container.new({width: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? 45.0 : 36.0, height: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? 25.0 : 15.0, decoration: new box_decoration.BoxDecoration.new({color: dart.test(this.isOn) ? (t1 = this.widget.enabledTrackColor, t1 == null ? colors.Colors.lightGreen : t1) : (t1$ = this.widget.disabledTrackColor, t1$ == null ? colors.Colors.grey : t1$), borderRadius: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.square) ? C144 || CT.C144 : (t1$0 = this.widget.borderRadius, t1$0 == null ? C146 || CT.C146 : t1$0)}), child: new basic.Padding.new({padding: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? C148 || CT.C148 : C149 || CT.C149, child: dart.test(this.isOn) ? new text.Text.new((t1$1 = this.widget.enabledText, t1$1 == null ? dart.equals(this.widget.type, gf_toggle_type.GFToggleType.custom) ? "ON" : "" : t1$1), {style: (t1$2 = this.widget.enabledTextStyle, t1$2 == null ? dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 12.0}) : new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 8.0}) : t1$2), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}) : new text.Text.new((t1$3 = this.widget.disabledText, t1$3 == null ? dart.equals(this.widget.type, gf_toggle_type.GFToggleType.custom) ? "OFF" : "" : t1$3), {textAlign: ui.TextAlign.end, style: (t1$4 = this.widget.disabledTextStyle, t1$4 == null ? dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 12.0}) : new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 8.0}) : t1$4), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), new basic.Positioned.new({top: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? 7.5 : 3.0, left: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.ios) ? 2.0 : 0.0, child: new ink_well.InkWell.new({onTap: dart.bind(this, 'onStatusChange'), child: new transitions.SlideTransition.new({position: this.offset, child: new container.Container.new({padding: C101 || CT.C101, height: 20.0, width: 20.0, decoration: new box_decoration.BoxDecoration.new({shape: dart.equals(this.widget.type, gf_toggle_type.GFToggleType.square) ? box_border.BoxShape.rectangle : (t1$5 = this.widget.boxShape, t1$5 == null ? box_border.BoxShape.circle : t1$5), color: dart.test(this.isOn) ? (t1$6 = this.widget.enabledThumbColor, t1$6 == null ? colors.Colors.white : t1$6) : (t1$7 = this.widget.disabledThumbColor, t1$7 == null ? colors.Colors.white : t1$7), boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.black.withOpacity(0.16), blurRadius: 6.0, spreadRadius: 0.0})])}), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), $creationLocationd_0dea112b090073317d4: C183 || CT.C183}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191})]), $creationLocationd_0dea112b090073317d4: C196 || CT.C196});
    }
  };
  (gf_toggle._GFToggleState.new = function() {
    this.animationController = null;
    this.animation = null;
    this.controller = null;
    this.offset = null;
    this.isOn = null;
    gf_toggle._GFToggleState.__proto__.new.call(this);
    ;
  }).prototype = gf_toggle._GFToggleState.prototype;
  dart.addTypeTests(gf_toggle._GFToggleState);
  dart.setMethodSignature(gf_toggle._GFToggleState, () => ({
    __proto__: dart.getMethods(gf_toggle._GFToggleState.__proto__),
    onStatusChange: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_toggle._GFToggleState, "package:getflutter/components/toggle/gf_toggle.dart");
  dart.setFieldSignature(gf_toggle._GFToggleState, () => ({
    __proto__: dart.getFields(gf_toggle._GFToggleState.__proto__),
    animationController: dart.fieldType(animation_controller.AnimationController),
    animation: dart.fieldType(animation.Animation$(core.double)),
    controller: dart.fieldType(animation_controller.AnimationController),
    offset: dart.fieldType(animation.Animation$(ui.Offset)),
    isOn: dart.fieldType(core.bool)
  }));
  const _name$1 = dart.privateName(gf_toast_type, "_name");
  let C199;
  let C200;
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C202;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C201;
  const child$0 = dart.privateName(gf_toast, "GFToast.child");
  const button$ = dart.privateName(gf_toast, "GFToast.button");
  const backgroundColor$ = dart.privateName(gf_toast, "GFToast.backgroundColor");
  const text$0 = dart.privateName(gf_toast, "GFToast.text");
  const textStyle$ = dart.privateName(gf_toast, "GFToast.textStyle");
  const width$ = dart.privateName(gf_toast, "GFToast.width");
  const type$1 = dart.privateName(gf_toast, "GFToast.type");
  const autoDismiss$ = dart.privateName(gf_toast, "GFToast.autoDismiss");
  const animationDuration$ = dart.privateName(gf_toast, "GFToast.animationDuration");
  const duration$0 = dart.privateName(gf_toast, "GFToast.duration");
  const alignment$ = dart.privateName(gf_toast, "GFToast.alignment");
  gf_toast.GFToast = class GFToast extends framework.StatefulWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get type() {
      return this[type$1];
    }
    set type(value) {
      super.type = value;
    }
    get autoDismiss() {
      return this[autoDismiss$];
    }
    set autoDismiss(value) {
      super.autoDismiss = value;
    }
    get animationDuration() {
      return this[animationDuration$];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get duration() {
      return this[duration$0];
    }
    set duration(value) {
      super.duration = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    createState() {
      return new gf_toast._GFToastState.new();
    }
  };
  (gf_toast.GFToast.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let type = opts && 'type' in opts ? opts.type : C199 || CT.C199;
    let autoDismiss = opts && 'autoDismiss' in opts ? opts.autoDismiss : true;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : C200 || CT.C200;
    let duration = opts && 'duration' in opts ? opts.duration : C200 || CT.C200;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : C201 || CT.C201;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    this[button$] = button;
    this[backgroundColor$] = backgroundColor;
    this[text$0] = text;
    this[width$] = width;
    this[type$1] = type;
    this[autoDismiss$] = autoDismiss;
    this[alignment$] = alignment;
    this[animationDuration$] = animationDuration;
    this[duration$0] = duration;
    this[textStyle$] = textStyle;
    gf_toast.GFToast.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_toast.GFToast.prototype;
  dart.addTypeTests(gf_toast.GFToast);
  dart.setMethodSignature(gf_toast.GFToast, () => ({
    __proto__: dart.getMethods(gf_toast.GFToast.__proto__),
    createState: dart.fnType(gf_toast._GFToastState, [])
  }));
  dart.setLibraryUri(gf_toast.GFToast, "package:getflutter/components/toast/gf_toast.dart");
  dart.setFieldSignature(gf_toast.GFToast, () => ({
    __proto__: dart.getFields(gf_toast.GFToast.__proto__),
    child: dart.finalFieldType(framework.Widget),
    button: dart.finalFieldType(framework.Widget),
    backgroundColor: dart.finalFieldType(dart.dynamic),
    text: dart.finalFieldType(core.String),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    width: dart.finalFieldType(core.double),
    type: dart.finalFieldType(gf_toast_type.GFToastType),
    autoDismiss: dart.finalFieldType(core.bool),
    animationDuration: dart.finalFieldType(core.Duration),
    duration: dart.finalFieldType(core.Duration),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  let C203;
  const BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  const BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  const BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  const BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
  let C211;
  let C212;
  let C210;
  let C209;
  let C213;
  let C216;
  let C217;
  let C215;
  let C214;
  let C220;
  let C221;
  let C222;
  let C219;
  let C218;
  let C223;
  let C226;
  let C227;
  let C225;
  let C224;
  let C230;
  let C231;
  let C232;
  let C229;
  let C228;
  let C233;
  let C236;
  let C235;
  let C234;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C238;
  let C237;
  let C247;
  let C246;
  let C245;
  let C250;
  let C251;
  let C249;
  let C248;
  const State_TickerProviderStateMixin$36$ = class State_TickerProviderStateMixin extends framework.State$(gf_toast.GFToast) {};
  (State_TickerProviderStateMixin$36$.new = function() {
    ticker_provider.TickerProviderStateMixin$(gf_toast.GFToast)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$, ticker_provider.TickerProviderStateMixin$(gf_toast.GFToast));
  gf_toast._GFToastState = class _GFToastState extends State_TickerProviderStateMixin$36$ {
    initState() {
      let t1;
      this.animationController = new animation_controller.AnimationController.new({duration: C200 || CT.C200, vsync: this});
      this.animation = new animations.CurvedAnimation.new({parent: this.animationController, curve: curves.Curves.easeIn});
      this.animationController.forward();
      this.fadeanimationController = (t1 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.animationDuration}), t1.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t1);
      this.fadeanimation = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(this.fadeanimationController);
      async.Timer.new(this.widget.duration, dart.fn(() => {
        this.fadeanimationController.forward();
      }, VoidToNull()));
      this.fadeanimation = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(this.fadeanimationController);
      this.fadeanimation.addStatusListener(dart.fn(state => {
        if (dart.test(this.fadeanimation.isCompleted) && dart.test(this.widget.autoDismiss)) {
          this.setState(dart.fn(() => {
            this.hideToast = true;
          }, VoidToNull()));
        }
      }, AnimationStatusToNull()));
      super.initState();
    }
    dispose() {
      this.animationController.dispose();
      this.fadeanimationController.dispose();
      super.dispose();
    }
    build(context) {
      let t1, t1$;
      return dart.test(this.hideToast) ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C203 || CT.C203}) : new transitions.FadeTransition.new({opacity: dart.test(this.widget.autoDismiss) ? this.fadeanimation : this.animation, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({width: dart.equals(this.widget.type, gf_toast_type.GFToastType.fullWidth) ? media_query.MediaQuery.of(context).size.width : this.widget.width, constraints: C204 || CT.C204, margin: dart.equals(this.widget.type, gf_toast_type.GFToastType.fullWidth) ? C205 || CT.C205 : C206 || CT.C206, padding: C207 || CT.C207, decoration: new box_decoration.BoxDecoration.new({borderRadius: dart.equals(this.widget.type, gf_toast_type.GFToastType.basic) ? new border_radius.BorderRadius.circular(0.0) : dart.equals(this.widget.type, gf_toast_type.GFToastType.rounded) ? new border_radius.BorderRadius.circular(10.0) : border_radius.BorderRadius.zero, color: this.widget.backgroundColor != null ? gf_color.GFColors.getGFColor(this.widget.backgroundColor) : C208 || CT.C208, boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.black.withOpacity(0.4), blurRadius: 6.0})])}), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Flexible.new({flex: 7, fit: flex.FlexFit.tight, child: new basic.Align.new({alignment: (t1 = this.widget.alignment, t1 == null ? alignment.Alignment.topLeft : t1), child: this.widget.text != null ? new text.Text.new(this.widget.text, {style: this.widget.textStyle, $creationLocationd_0dea112b090073317d4: C209 || CT.C209}) : (t1$ = this.widget.child, t1$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C213 || CT.C213}) : t1$), $creationLocationd_0dea112b090073317d4: C214 || CT.C214}), $creationLocationd_0dea112b090073317d4: C218 || CT.C218}), C223 || CT.C223, this.widget.button != null ? new basic.Flexible.new({flex: 4, fit: flex.FlexFit.tight, child: new basic.Align.new({alignment: alignment.Alignment.topRight, child: this.widget.button, $creationLocationd_0dea112b090073317d4: C224 || CT.C224}), $creationLocationd_0dea112b090073317d4: C228 || CT.C228}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C233 || CT.C233})]), $creationLocationd_0dea112b090073317d4: C234 || CT.C234}), $creationLocationd_0dea112b090073317d4: C237 || CT.C237})]), $creationLocationd_0dea112b090073317d4: C245 || CT.C245}), $creationLocationd_0dea112b090073317d4: C248 || CT.C248});
    }
  };
  (gf_toast._GFToastState.new = function() {
    this.animationController = null;
    this.fadeanimationController = null;
    this.animation = null;
    this.fadeanimation = null;
    this.hideToast = false;
    gf_toast._GFToastState.__proto__.new.call(this);
    ;
  }).prototype = gf_toast._GFToastState.prototype;
  dart.addTypeTests(gf_toast._GFToastState);
  dart.setMethodSignature(gf_toast._GFToastState, () => ({
    __proto__: dart.getMethods(gf_toast._GFToastState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_toast._GFToastState, "package:getflutter/components/toast/gf_toast.dart");
  dart.setFieldSignature(gf_toast._GFToastState, () => ({
    __proto__: dart.getFields(gf_toast._GFToastState.__proto__),
    animationController: dart.fieldType(animation_controller.AnimationController),
    fadeanimationController: dart.fieldType(animation_controller.AnimationController),
    animation: dart.fieldType(animation.Animation$(core.double)),
    fadeanimation: dart.fieldType(animation.Animation$(core.double)),
    hideToast: dart.fieldType(core.bool)
  }));
  const child$1 = dart.privateName(gf_floating_widget, "GFFloatingWidget.child");
  const body$ = dart.privateName(gf_floating_widget, "GFFloatingWidget.body");
  const horizontalPosition$ = dart.privateName(gf_floating_widget, "GFFloatingWidget.horizontalPosition");
  const verticalPosition$ = dart.privateName(gf_floating_widget, "GFFloatingWidget.verticalPosition");
  const blurnessColor$ = dart.privateName(gf_floating_widget, "GFFloatingWidget.blurnessColor");
  const showblurness$ = dart.privateName(gf_floating_widget, "GFFloatingWidget.showblurness");
  gf_floating_widget.GFFloatingWidget = class GFFloatingWidget extends framework.StatefulWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    get horizontalPosition() {
      return this[horizontalPosition$];
    }
    set horizontalPosition(value) {
      super.horizontalPosition = value;
    }
    get verticalPosition() {
      return this[verticalPosition$];
    }
    set verticalPosition(value) {
      super.verticalPosition = value;
    }
    get blurnessColor() {
      return this[blurnessColor$];
    }
    set blurnessColor(value) {
      super.blurnessColor = value;
    }
    get showblurness() {
      return this[showblurness$];
    }
    set showblurness(value) {
      super.showblurness = value;
    }
    createState() {
      return new gf_floating_widget._GFFloatingWidgetState.new();
    }
  };
  (gf_floating_widget.GFFloatingWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let horizontalPosition = opts && 'horizontalPosition' in opts ? opts.horizontalPosition : null;
    let verticalPosition = opts && 'verticalPosition' in opts ? opts.verticalPosition : null;
    let blurnessColor = opts && 'blurnessColor' in opts ? opts.blurnessColor : null;
    let showblurness = opts && 'showblurness' in opts ? opts.showblurness : false;
    let body = opts && 'body' in opts ? opts.body : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$1] = child;
    this[horizontalPosition$] = horizontalPosition;
    this[verticalPosition$] = verticalPosition;
    this[blurnessColor$] = blurnessColor;
    this[showblurness$] = showblurness;
    this[body$] = body;
    gf_floating_widget.GFFloatingWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_floating_widget.GFFloatingWidget.prototype;
  dart.addTypeTests(gf_floating_widget.GFFloatingWidget);
  dart.setMethodSignature(gf_floating_widget.GFFloatingWidget, () => ({
    __proto__: dart.getMethods(gf_floating_widget.GFFloatingWidget.__proto__),
    createState: dart.fnType(gf_floating_widget._GFFloatingWidgetState, [])
  }));
  dart.setLibraryUri(gf_floating_widget.GFFloatingWidget, "package:getflutter/components/toast/gf_floating_widget.dart");
  dart.setFieldSignature(gf_floating_widget.GFFloatingWidget, () => ({
    __proto__: dart.getFields(gf_floating_widget.GFFloatingWidget.__proto__),
    child: dart.finalFieldType(framework.Widget),
    body: dart.finalFieldType(framework.Widget),
    horizontalPosition: dart.finalFieldType(core.double),
    verticalPosition: dart.finalFieldType(core.double),
    blurnessColor: dart.finalFieldType(dart.dynamic),
    showblurness: dart.finalFieldType(core.bool)
  }));
  let C252;
  let C255;
  let C256;
  let C254;
  let C253;
  let C257;
  let C260;
  let C261;
  let C262;
  let C263;
  let C259;
  let C258;
  let C266;
  let C265;
  let C264;
  let C269;
  let C270;
  let C271;
  let C268;
  let C267;
  let C274;
  let C273;
  let C272;
  let C277;
  let C278;
  let C279;
  let C276;
  let C275;
  gf_floating_widget._GFFloatingWidgetState = class _GFFloatingWidgetState extends framework.State$(gf_floating_widget.GFFloatingWidget) {
    build(context) {
      let t1, t1$;
      return new basic.Stack.new({alignment: alignment.Alignment.center, fit: stack.StackFit.loose, children: JSArrayOfWidget().of([new container.Container.new({height: media_query.MediaQuery.of(context).size.height, child: (t1 = this.widget.body, t1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C252 || CT.C252}) : t1), $creationLocationd_0dea112b090073317d4: C253 || CT.C253}), new basic.Positioned.new({child: new container.Container.new({height: media_query.MediaQuery.of(context).size.height, color: ui.Color._check(dart.test(this.widget.showblurness) ? this.widget.blurnessColor : null), child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: this.widget.verticalPosition != null ? this.widget.verticalPosition : 0.0, left: this.widget.horizontalPosition != null ? this.widget.horizontalPosition : 0.0, right: this.widget.horizontalPosition != null ? this.widget.horizontalPosition : 0.0, child: (t1$ = this.widget.child, t1$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C257 || CT.C257}) : t1$), $creationLocationd_0dea112b090073317d4: C258 || CT.C258})]), $creationLocationd_0dea112b090073317d4: C264 || CT.C264}), $creationLocationd_0dea112b090073317d4: C267 || CT.C267}), $creationLocationd_0dea112b090073317d4: C272 || CT.C272})]), $creationLocationd_0dea112b090073317d4: C275 || CT.C275});
    }
  };
  (gf_floating_widget._GFFloatingWidgetState.new = function() {
    gf_floating_widget._GFFloatingWidgetState.__proto__.new.call(this);
    ;
  }).prototype = gf_floating_widget._GFFloatingWidgetState.prototype;
  dart.addTypeTests(gf_floating_widget._GFFloatingWidgetState);
  dart.setMethodSignature(gf_floating_widget._GFFloatingWidgetState, () => ({
    __proto__: dart.getMethods(gf_floating_widget._GFFloatingWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_floating_widget._GFFloatingWidgetState, "package:getflutter/components/toast/gf_floating_widget.dart");
  const initialIndex$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.initialIndex");
  const length$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.length");
  const height$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.height");
  const tabBarColor$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.tabBarColor");
  const indicatorColor$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.indicatorColor");
  const indicatorWeight$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.indicatorWeight");
  const indicatorPadding$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.indicatorPadding");
  const indicator$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.indicator");
  const indicatorSize$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.indicatorSize");
  const labelColor$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.labelColor");
  const unselectedLabelColor$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.unselectedLabelColor");
  const labelStyle$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.labelStyle");
  const labelPadding$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.labelPadding");
  const unselectedLabelStyle$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.unselectedLabelStyle");
  const tabs$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.tabs");
  const border$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.border");
  const borderRadius$0 = dart.privateName(gf_segment_tabs, "GFSegmentTabs.borderRadius");
  const tabController$ = dart.privateName(gf_segment_tabs, "GFSegmentTabs.tabController");
  const width$0 = dart.privateName(gf_segment_tabs, "GFSegmentTabs.width");
  gf_segment_tabs.GFSegmentTabs = class GFSegmentTabs extends framework.StatefulWidget {
    get initialIndex() {
      return this[initialIndex$];
    }
    set initialIndex(value) {
      super.initialIndex = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get tabBarColor() {
      return this[tabBarColor$];
    }
    set tabBarColor(value) {
      super.tabBarColor = value;
    }
    get indicatorColor() {
      return this[indicatorColor$];
    }
    set indicatorColor(value) {
      super.indicatorColor = value;
    }
    get indicatorWeight() {
      return this[indicatorWeight$];
    }
    set indicatorWeight(value) {
      super.indicatorWeight = value;
    }
    get indicatorPadding() {
      return this[indicatorPadding$];
    }
    set indicatorPadding(value) {
      super.indicatorPadding = value;
    }
    get indicator() {
      return this[indicator$];
    }
    set indicator(value) {
      super.indicator = value;
    }
    get indicatorSize() {
      return this[indicatorSize$];
    }
    set indicatorSize(value) {
      super.indicatorSize = value;
    }
    get labelColor() {
      return this[labelColor$];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get unselectedLabelColor() {
      return this[unselectedLabelColor$];
    }
    set unselectedLabelColor(value) {
      super.unselectedLabelColor = value;
    }
    get labelStyle() {
      return this[labelStyle$];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    get labelPadding() {
      return this[labelPadding$];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    get unselectedLabelStyle() {
      return this[unselectedLabelStyle$];
    }
    set unselectedLabelStyle(value) {
      super.unselectedLabelStyle = value;
    }
    get tabs() {
      return this[tabs$];
    }
    set tabs(value) {
      super.tabs = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      super.border = value;
    }
    get borderRadius() {
      return this[borderRadius$0];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get tabController() {
      return this[tabController$];
    }
    set tabController(value) {
      super.tabController = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    createState() {
      return new gf_segment_tabs._GFSegmentTabsState.new();
    }
  };
  (gf_segment_tabs.GFSegmentTabs.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    let length = opts && 'length' in opts ? opts.length : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let tabBarColor = opts && 'tabBarColor' in opts ? opts.tabBarColor : null;
    let indicatorColor = opts && 'indicatorColor' in opts ? opts.indicatorColor : null;
    let indicatorWeight = opts && 'indicatorWeight' in opts ? opts.indicatorWeight : 2;
    let indicatorPadding = opts && 'indicatorPadding' in opts ? opts.indicatorPadding : C205 || CT.C205;
    let indicator = opts && 'indicator' in opts ? opts.indicator : null;
    let indicatorSize = opts && 'indicatorSize' in opts ? opts.indicatorSize : null;
    let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let unselectedLabelColor = opts && 'unselectedLabelColor' in opts ? opts.unselectedLabelColor : null;
    let unselectedLabelStyle = opts && 'unselectedLabelStyle' in opts ? opts.unselectedLabelStyle : null;
    let tabs = opts && 'tabs' in opts ? opts.tabs : null;
    let tabController = opts && 'tabController' in opts ? opts.tabController : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialIndex$] = initialIndex;
    this[length$] = length;
    this[height$] = height;
    this[width$0] = width;
    this[border$] = border;
    this[borderRadius$0] = borderRadius;
    this[tabBarColor$] = tabBarColor;
    this[indicatorColor$] = indicatorColor;
    this[indicatorWeight$] = indicatorWeight;
    this[indicatorPadding$] = indicatorPadding;
    this[indicator$] = indicator;
    this[indicatorSize$] = indicatorSize;
    this[labelColor$] = labelColor;
    this[labelStyle$] = labelStyle;
    this[labelPadding$] = labelPadding;
    this[unselectedLabelColor$] = unselectedLabelColor;
    this[unselectedLabelStyle$] = unselectedLabelStyle;
    this[tabs$] = tabs;
    this[tabController$] = tabController;
    if (!(length != null && dart.notNull(length) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_segment_tabs.dart", 33, 16, "length != null && length >= 0");
    if (!(initialIndex != null && dart.notNull(initialIndex) >= 0 && (length === 0 || dart.notNull(initialIndex) < dart.notNull(length)))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_segment_tabs.dart", 34, 16, "initialIndex != null &&\n            initialIndex >= 0 &&\n            (length == 0 || initialIndex < length)");
    gf_segment_tabs.GFSegmentTabs.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_segment_tabs.GFSegmentTabs.prototype;
  dart.addTypeTests(gf_segment_tabs.GFSegmentTabs);
  dart.setMethodSignature(gf_segment_tabs.GFSegmentTabs, () => ({
    __proto__: dart.getMethods(gf_segment_tabs.GFSegmentTabs.__proto__),
    createState: dart.fnType(gf_segment_tabs._GFSegmentTabsState, [])
  }));
  dart.setLibraryUri(gf_segment_tabs.GFSegmentTabs, "package:getflutter/components/tabs/gf_segment_tabs.dart");
  dart.setFieldSignature(gf_segment_tabs.GFSegmentTabs, () => ({
    __proto__: dart.getFields(gf_segment_tabs.GFSegmentTabs.__proto__),
    initialIndex: dart.finalFieldType(core.int),
    length: dart.finalFieldType(core.int),
    height: dart.finalFieldType(core.double),
    tabBarColor: dart.finalFieldType(ui.Color),
    indicatorColor: dart.finalFieldType(ui.Color),
    indicatorWeight: dart.finalFieldType(core.double),
    indicatorPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    indicator: dart.finalFieldType(decoration.Decoration),
    indicatorSize: dart.finalFieldType(tabs.TabBarIndicatorSize),
    labelColor: dart.finalFieldType(ui.Color),
    unselectedLabelColor: dart.finalFieldType(ui.Color),
    labelStyle: dart.finalFieldType(text_style.TextStyle),
    labelPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    unselectedLabelStyle: dart.finalFieldType(text_style.TextStyle),
    tabs: dart.finalFieldType(core.List$(framework.Widget)),
    border: dart.finalFieldType(box_border.Border),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    tabController: dart.finalFieldType(tab_controller.TabController),
    width: dart.finalFieldType(core.double)
  }));
  let C280;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C282;
  let C281;
  let C296;
  let C297;
  let C298;
  let C295;
  let C294;
  let C301;
  let C302;
  let C303;
  let C300;
  let C299;
  let C306;
  let C307;
  let C308;
  let C309;
  let C305;
  let C304;
  gf_segment_tabs._GFSegmentTabsState = class _GFSegmentTabsState extends framework.State$(gf_segment_tabs.GFSegmentTabs) {
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7;
      return new container.Container.new({height: (t1 = this.widget.height, t1 == null ? 28.0 : t1), width: (t1$ = this.widget.width, t1$ == null ? 240.0 : t1$), decoration: new box_decoration.BoxDecoration.new({border: (t1$0 = this.widget.border, t1$0 == null ? box_border.Border.all({color: gf_color.GFColors.getGFColor(gf_color.GFColor.primary), width: 1.0}) : t1$0), borderRadius: (t1$1 = this.widget.borderRadius, t1$1 == null ? new border_radius.BorderRadius.circular(2.0) : t1$1)}), child: new tab_controller.DefaultTabController.new({initialIndex: this.widget.initialIndex, length: this.widget.length, child: new material.Material.new({borderRadius: (t1$2 = this.widget.borderRadius, t1$2 == null ? new border_radius.BorderRadius.circular(2.0) : t1$2), type: material.MaterialType.button, color: (t1$3 = this.widget.tabBarColor, t1$3 == null ? colors.Colors.transparent : t1$3), child: new tabs.TabBar.new({controller: this.widget.tabController, labelColor: (t1$4 = this.widget.labelColor, t1$4 == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.white) : t1$4), unselectedLabelColor: (t1$5 = this.widget.unselectedLabelColor, t1$5 == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : t1$5), labelStyle: (t1$6 = this.widget.labelStyle, t1$6 == null ? C280 || CT.C280 : t1$6), unselectedLabelStyle: (t1$7 = this.widget.unselectedLabelStyle, t1$7 == null ? C280 || CT.C280 : t1$7), indicatorColor: this.widget.indicatorColor == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : this.widget.indicatorColor, indicatorSize: this.widget.indicatorSize, indicator: this.widget.indicator == null ? new box_decoration.BoxDecoration.new({color: this.widget.indicatorColor == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : this.widget.indicatorColor, border: box_border.Border.all({color: this.widget.indicatorColor == null ? colors.Colors.transparent : this.widget.indicatorColor, width: 2.0}), borderRadius: this.widget.borderRadius == null ? new border_radius.BorderRadius.circular(0.0) : this.widget.borderRadius}) : this.widget.indicator, indicatorPadding: this.widget.indicatorPadding, indicatorWeight: this.widget.indicatorWeight, tabs: this.widget.tabs, $creationLocationd_0dea112b090073317d4: C281 || CT.C281}), $creationLocationd_0dea112b090073317d4: C294 || CT.C294}), $creationLocationd_0dea112b090073317d4: C299 || CT.C299}), $creationLocationd_0dea112b090073317d4: C304 || CT.C304});
    }
  };
  (gf_segment_tabs._GFSegmentTabsState.new = function() {
    gf_segment_tabs._GFSegmentTabsState.__proto__.new.call(this);
    ;
  }).prototype = gf_segment_tabs._GFSegmentTabsState.prototype;
  dart.addTypeTests(gf_segment_tabs._GFSegmentTabsState);
  dart.setMethodSignature(gf_segment_tabs._GFSegmentTabsState, () => ({
    __proto__: dart.getMethods(gf_segment_tabs._GFSegmentTabsState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_segment_tabs._GFSegmentTabsState, "package:getflutter/components/tabs/gf_segment_tabs.dart");
  const initialIndex$0 = dart.privateName(gf_tabs, "GFTabs.initialIndex");
  const length$0 = dart.privateName(gf_tabs, "GFTabs.length");
  const height$0 = dart.privateName(gf_tabs, "GFTabs.height");
  const tabBarColor$0 = dart.privateName(gf_tabs, "GFTabs.tabBarColor");
  const indicatorColor$0 = dart.privateName(gf_tabs, "GFTabs.indicatorColor");
  const indicatorWeight$0 = dart.privateName(gf_tabs, "GFTabs.indicatorWeight");
  const indicatorPadding$0 = dart.privateName(gf_tabs, "GFTabs.indicatorPadding");
  const indicator$0 = dart.privateName(gf_tabs, "GFTabs.indicator");
  const indicatorSize$0 = dart.privateName(gf_tabs, "GFTabs.indicatorSize");
  const labelColor$0 = dart.privateName(gf_tabs, "GFTabs.labelColor");
  const unselectedLabelColor$0 = dart.privateName(gf_tabs, "GFTabs.unselectedLabelColor");
  const labelStyle$0 = dart.privateName(gf_tabs, "GFTabs.labelStyle");
  const labelPadding$0 = dart.privateName(gf_tabs, "GFTabs.labelPadding");
  const unselectedLabelStyle$0 = dart.privateName(gf_tabs, "GFTabs.unselectedLabelStyle");
  const tabBarView$ = dart.privateName(gf_tabs, "GFTabs.tabBarView");
  const tabs$0 = dart.privateName(gf_tabs, "GFTabs.tabs");
  const controller$ = dart.privateName(gf_tabs, "GFTabs.controller");
  const tabBarHeight$ = dart.privateName(gf_tabs, "GFTabs.tabBarHeight");
  const shape$ = dart.privateName(gf_tabs, "GFTabs.shape");
  gf_tabs.GFTabs = class GFTabs extends framework.StatefulWidget {
    get initialIndex() {
      return this[initialIndex$0];
    }
    set initialIndex(value) {
      super.initialIndex = value;
    }
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get tabBarColor() {
      return this[tabBarColor$0];
    }
    set tabBarColor(value) {
      super.tabBarColor = value;
    }
    get indicatorColor() {
      return this[indicatorColor$0];
    }
    set indicatorColor(value) {
      super.indicatorColor = value;
    }
    get indicatorWeight() {
      return this[indicatorWeight$0];
    }
    set indicatorWeight(value) {
      super.indicatorWeight = value;
    }
    get indicatorPadding() {
      return this[indicatorPadding$0];
    }
    set indicatorPadding(value) {
      super.indicatorPadding = value;
    }
    get indicator() {
      return this[indicator$0];
    }
    set indicator(value) {
      super.indicator = value;
    }
    get indicatorSize() {
      return this[indicatorSize$0];
    }
    set indicatorSize(value) {
      super.indicatorSize = value;
    }
    get labelColor() {
      return this[labelColor$0];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get unselectedLabelColor() {
      return this[unselectedLabelColor$0];
    }
    set unselectedLabelColor(value) {
      super.unselectedLabelColor = value;
    }
    get labelStyle() {
      return this[labelStyle$0];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    get labelPadding() {
      return this[labelPadding$0];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    get unselectedLabelStyle() {
      return this[unselectedLabelStyle$0];
    }
    set unselectedLabelStyle(value) {
      super.unselectedLabelStyle = value;
    }
    get tabBarView() {
      return this[tabBarView$];
    }
    set tabBarView(value) {
      super.tabBarView = value;
    }
    get tabs() {
      return this[tabs$0];
    }
    set tabs(value) {
      super.tabs = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get tabBarHeight() {
      return this[tabBarHeight$];
    }
    set tabBarHeight(value) {
      super.tabBarHeight = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    createState() {
      return new gf_tabs._GFTabsState.new();
    }
  };
  (gf_tabs.GFTabs.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    let length = opts && 'length' in opts ? opts.length : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let tabBarColor = opts && 'tabBarColor' in opts ? opts.tabBarColor : null;
    let indicatorColor = opts && 'indicatorColor' in opts ? opts.indicatorColor : null;
    let indicatorWeight = opts && 'indicatorWeight' in opts ? opts.indicatorWeight : 2;
    let indicatorPadding = opts && 'indicatorPadding' in opts ? opts.indicatorPadding : C205 || CT.C205;
    let indicator = opts && 'indicator' in opts ? opts.indicator : null;
    let indicatorSize = opts && 'indicatorSize' in opts ? opts.indicatorSize : null;
    let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let unselectedLabelColor = opts && 'unselectedLabelColor' in opts ? opts.unselectedLabelColor : null;
    let unselectedLabelStyle = opts && 'unselectedLabelStyle' in opts ? opts.unselectedLabelStyle : null;
    let tabBarView = opts && 'tabBarView' in opts ? opts.tabBarView : null;
    let tabs = opts && 'tabs' in opts ? opts.tabs : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let tabBarHeight = opts && 'tabBarHeight' in opts ? opts.tabBarHeight : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialIndex$0] = initialIndex;
    this[length$0] = length;
    this[height$0] = height;
    this[tabBarColor$0] = tabBarColor;
    this[indicatorColor$0] = indicatorColor;
    this[indicatorWeight$0] = indicatorWeight;
    this[indicatorPadding$0] = indicatorPadding;
    this[indicator$0] = indicator;
    this[indicatorSize$0] = indicatorSize;
    this[labelColor$0] = labelColor;
    this[labelStyle$0] = labelStyle;
    this[labelPadding$0] = labelPadding;
    this[unselectedLabelColor$0] = unselectedLabelColor;
    this[unselectedLabelStyle$0] = unselectedLabelStyle;
    this[tabBarView$] = tabBarView;
    this[tabs$0] = tabs;
    this[controller$] = controller;
    this[tabBarHeight$] = tabBarHeight;
    this[shape$] = shape;
    if (!(length != null && dart.notNull(length) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart", 35, 16, "length != null && length >= 0");
    if (!(initialIndex != null && dart.notNull(initialIndex) >= 0 && (length === 0 || dart.notNull(initialIndex) < dart.notNull(length)))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabs.dart", 36, 16, "initialIndex != null &&\n            initialIndex >= 0 &&\n            (length == 0 || initialIndex < length)");
    gf_tabs.GFTabs.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_tabs.GFTabs.prototype;
  dart.addTypeTests(gf_tabs.GFTabs);
  dart.setMethodSignature(gf_tabs.GFTabs, () => ({
    __proto__: dart.getMethods(gf_tabs.GFTabs.__proto__),
    createState: dart.fnType(gf_tabs._GFTabsState, [])
  }));
  dart.setLibraryUri(gf_tabs.GFTabs, "package:getflutter/components/tabs/gf_tabs.dart");
  dart.setFieldSignature(gf_tabs.GFTabs, () => ({
    __proto__: dart.getFields(gf_tabs.GFTabs.__proto__),
    initialIndex: dart.finalFieldType(core.int),
    length: dart.finalFieldType(core.int),
    height: dart.finalFieldType(core.double),
    tabBarColor: dart.finalFieldType(ui.Color),
    indicatorColor: dart.finalFieldType(ui.Color),
    indicatorWeight: dart.finalFieldType(core.double),
    indicatorPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    indicator: dart.finalFieldType(decoration.Decoration),
    indicatorSize: dart.finalFieldType(tabs.TabBarIndicatorSize),
    labelColor: dart.finalFieldType(ui.Color),
    unselectedLabelColor: dart.finalFieldType(ui.Color),
    labelStyle: dart.finalFieldType(text_style.TextStyle),
    labelPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    unselectedLabelStyle: dart.finalFieldType(text_style.TextStyle),
    tabBarView: dart.finalFieldType(gf_tabbar_view.GFTabBarView),
    tabs: dart.finalFieldType(core.List$(framework.Widget)),
    controller: dart.finalFieldType(tab_controller.TabController),
    tabBarHeight: dart.finalFieldType(core.double),
    shape: dart.finalFieldType(borders.ShapeBorder)
  }));
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C318;
  let C319;
  let C320;
  let C321;
  let C322;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C311;
  let C310;
  let C330;
  let C329;
  let C328;
  let C333;
  let C332;
  let C331;
  let C336;
  let C337;
  let C335;
  let C334;
  let C340;
  let C341;
  let C342;
  let C339;
  let C338;
  let C345;
  let C344;
  let C343;
  gf_tabs._GFTabsState = class _GFTabsState extends framework.State$(gf_tabs.GFTabs) {
    build(context) {
      let t1, t1$;
      return new container.Container.new({child: new tab_controller.DefaultTabController.new({initialIndex: this.widget.initialIndex, length: this.widget.length, child: new container.Container.new({height: (t1 = this.widget.height, t1 == null ? dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.5 : t1), child: new basic.Column.new({children: JSArrayOfWidget().of([new gf_tabBar.GFTabBar.new({shape: this.widget.shape, length: this.widget.length, initialIndex: this.widget.initialIndex, tabBarHeight: this.widget.tabBarHeight, tabBarColor: (t1$ = this.widget.tabBarColor, t1$ == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : t1$), controller: this.widget.controller, labelColor: this.widget.labelColor, unselectedLabelColor: this.widget.unselectedLabelColor, labelStyle: this.widget.labelStyle, unselectedLabelStyle: this.widget.unselectedLabelStyle, indicatorColor: this.widget.indicatorColor, indicatorSize: this.widget.indicatorSize, indicator: this.widget.indicator, indicatorPadding: this.widget.indicatorPadding, indicatorWeight: this.widget.indicatorWeight, tabs: this.widget.tabs, $creationLocationd_0dea112b090073317d4: C310 || CT.C310}), new basic.Expanded.new({child: this.widget.tabBarView, $creationLocationd_0dea112b090073317d4: C328 || CT.C328})]), $creationLocationd_0dea112b090073317d4: C331 || CT.C331}), $creationLocationd_0dea112b090073317d4: C334 || CT.C334}), $creationLocationd_0dea112b090073317d4: C338 || CT.C338}), $creationLocationd_0dea112b090073317d4: C343 || CT.C343});
    }
  };
  (gf_tabs._GFTabsState.new = function() {
    gf_tabs._GFTabsState.__proto__.new.call(this);
    ;
  }).prototype = gf_tabs._GFTabsState.prototype;
  dart.addTypeTests(gf_tabs._GFTabsState);
  dart.setMethodSignature(gf_tabs._GFTabsState, () => ({
    __proto__: dart.getMethods(gf_tabs._GFTabsState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_tabs._GFTabsState, "package:getflutter/components/tabs/gf_tabs.dart");
  const _name$2 = dart.privateName(recognizer, "_name");
  let C346;
  const controller$0 = dart.privateName(gf_tabbar_view, "GFTabBarView.controller");
  const children$ = dart.privateName(gf_tabbar_view, "GFTabBarView.children");
  const physics$ = dart.privateName(gf_tabbar_view, "GFTabBarView.physics");
  const dragStartBehavior$ = dart.privateName(gf_tabbar_view, "GFTabBarView.dragStartBehavior");
  const height$1 = dart.privateName(gf_tabbar_view, "GFTabBarView.height");
  gf_tabbar_view.GFTabBarView = class GFTabBarView extends framework.StatefulWidget {
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get height() {
      return this[height$1];
    }
    set height(value) {
      super.height = value;
    }
    createState() {
      return new gf_tabbar_view._GFTabBarViewState.new();
    }
  };
  (gf_tabbar_view.GFTabBarView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C346 || CT.C346;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    this[controller$0] = controller;
    this[physics$] = physics;
    this[height$1] = height;
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(children != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart", 24, 16, "children != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart", 25, 16, "dragStartBehavior != null");
    gf_tabbar_view.GFTabBarView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_tabbar_view.GFTabBarView.prototype;
  dart.addTypeTests(gf_tabbar_view.GFTabBarView);
  dart.setMethodSignature(gf_tabbar_view.GFTabBarView, () => ({
    __proto__: dart.getMethods(gf_tabbar_view.GFTabBarView.__proto__),
    createState: dart.fnType(gf_tabbar_view._GFTabBarViewState, [])
  }));
  dart.setLibraryUri(gf_tabbar_view.GFTabBarView, "package:getflutter/components/tabs/gf_tabbar_view.dart");
  dart.setFieldSignature(gf_tabbar_view.GFTabBarView, () => ({
    __proto__: dart.getFields(gf_tabbar_view.GFTabBarView.__proto__),
    controller: dart.finalFieldType(tab_controller.TabController),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    physics: dart.finalFieldType(scroll_physics.ScrollPhysics),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    height: dart.finalFieldType(core.double)
  }));
  const _controller$ = dart.privateName(gf_tabbar_view, "_controller");
  const _pageController = dart.privateName(gf_tabbar_view, "_pageController");
  const _children = dart.privateName(gf_tabbar_view, "_children");
  const _childrenWithKey = dart.privateName(gf_tabbar_view, "_childrenWithKey");
  const _currentIndex = dart.privateName(gf_tabbar_view, "_currentIndex");
  const _warpUnderwayCount = dart.privateName(gf_tabbar_view, "_warpUnderwayCount");
  const _controllerIsValid = dart.privateName(gf_tabbar_view, "_controllerIsValid");
  const _handleTabControllerAnimationTick = dart.privateName(gf_tabbar_view, "_handleTabControllerAnimationTick");
  const _updateTabController = dart.privateName(gf_tabbar_view, "_updateTabController");
  const _updateChildren = dart.privateName(gf_tabbar_view, "_updateChildren");
  const _warpToCurrentIndex = dart.privateName(gf_tabbar_view, "_warpToCurrentIndex");
  const _handleScrollNotification = dart.privateName(gf_tabbar_view, "_handleScrollNotification");
  let C349;
  let C350;
  let C351;
  let C352;
  let C348;
  let C347;
  let C355;
  let C356;
  let C354;
  let C353;
  let C359;
  let C360;
  let C358;
  let C357;
  gf_tabbar_view._GFTabBarViewState = class _GFTabBarViewState extends framework.State$(gf_tabbar_view.GFTabBarView) {
    get [_controllerIsValid]() {
      let t1;
      return (t1 = this[_controller$], t1 == null ? null : t1.animation) != null;
    }
    [_updateTabController]() {
      let t1;
      let newController = (t1 = this.widget.controller, t1 == null ? tab_controller.DefaultTabController.of(this.context) : t1);
      if (!dart.test(dart.fn(() => {
        if (newController == null) {
          dart.throw(assertions.FlutterError.new("No TabController for " + dart.str(dart.runtimeType(this.widget)) + ".\n" + "When creating a " + dart.str(dart.runtimeType(this.widget)) + ", you must either provide an explicit " + "TabController using the \"controller\" property, or you must ensure that there " + "is a DefaultTabController above the " + dart.str(dart.runtimeType(this.widget)) + ".\n" + "In this case, there was neither an explicit controller nor a default controller."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart", 77, 12, "() {\n      if (newController == null) {\n        throw FlutterError('No TabController for ${widget.runtimeType}.\\n'\n            'When creating a ${widget.runtimeType}, you must either provide an explicit '\n            'TabController using the \"controller\" property, or you must ensure that there '\n            'is a DefaultTabController above the ${widget.runtimeType}.\\n'\n            'In this case, there was neither an explicit controller nor a default controller.');\n      }\n      return true;\n    }()");
      if (dart.equals(newController, this[_controller$])) {
        return;
      }
      if (dart.test(this[_controllerIsValid])) {
        this[_controller$].animation.removeListener(dart.bind(this, _handleTabControllerAnimationTick));
      }
      this[_controller$] = newController;
      if (this[_controller$] != null) {
        this[_controller$].animation.addListener(dart.bind(this, _handleTabControllerAnimationTick));
      }
    }
    initState() {
      super.initState();
      this[_updateChildren]();
    }
    didChangeDependencies() {
      let t1, t1$;
      super.didChangeDependencies();
      this[_updateTabController]();
      this[_currentIndex] = (t1 = this[_controller$], t1 == null ? null : t1.index);
      this[_pageController] = new page_view.PageController.new({initialPage: (t1$ = this[_currentIndex], t1$ == null ? 0 : t1$)});
    }
    didUpdateWidget(oldWidget) {
      gf_tabbar_view.GFTabBarView._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.controller, oldWidget.controller)) {
        this[_updateTabController]();
      }
      if (!dart.equals(this.widget.children, oldWidget.children) && this[_warpUnderwayCount] === 0) {
        this[_updateChildren]();
      }
    }
    dispose() {
      if (dart.test(this[_controllerIsValid])) {
        this[_controller$].animation.removeListener(dart.bind(this, _handleTabControllerAnimationTick));
      }
      this[_controller$] = null;
      super.dispose();
    }
    [_updateChildren]() {
      this[_children] = this.widget.children;
      this[_childrenWithKey] = basic.KeyedSubtree.ensureUniqueKeysForList(this.widget.children);
    }
    [_handleTabControllerAnimationTick]() {
      if (dart.notNull(this[_warpUnderwayCount]) > 0 || !dart.test(this[_controller$].indexIsChanging)) {
        return;
      }
      if (this[_controller$].index != this[_currentIndex]) {
        this[_currentIndex] = this[_controller$].index;
        this[_warpToCurrentIndex]();
      }
    }
    [_warpToCurrentIndex]() {
      return async.async(dart.void, (function* _warpToCurrentIndex() {
        if (!dart.test(this.mounted)) {
          return FutureOfvoid().value();
        }
        if (this[_pageController].page === this[_currentIndex][$toDouble]()) {
          return FutureOfvoid().value();
        }
        let previousIndex = this[_controller$].previousIndex;
        if ((dart.notNull(this[_currentIndex]) - dart.notNull(previousIndex))[$abs]() === 1) {
          return this[_pageController].animateToPage(this[_currentIndex], {duration: constants.kTabScrollDuration, curve: curves.Curves.ease});
        }
        if (!((dart.notNull(this[_currentIndex]) - dart.notNull(previousIndex))[$abs]() > 1)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart", 166, 12, "(_currentIndex - previousIndex).abs() > 1");
        let initialPage = dart.notNull(this[_currentIndex]) > dart.notNull(previousIndex) ? dart.notNull(this[_currentIndex]) - 1 : dart.notNull(this[_currentIndex]) + 1;
        let originalChildren = this[_childrenWithKey];
        this.setState(dart.fn(() => {
          this[_warpUnderwayCount] = dart.notNull(this[_warpUnderwayCount]) + 1;
          this[_childrenWithKey] = ListOfWidget().from(this[_childrenWithKey], {growable: false});
          let temp = this[_childrenWithKey][$_get](initialPage);
          this[_childrenWithKey][$_set](initialPage, this[_childrenWithKey][$_get](previousIndex));
          this[_childrenWithKey][$_set](previousIndex, temp);
        }, VoidToNull()));
        this[_pageController].jumpToPage(initialPage);
        yield this[_pageController].animateToPage(this[_currentIndex], {duration: constants.kTabScrollDuration, curve: curves.Curves.ease});
        if (!dart.test(this.mounted)) {
          return FutureOfvoid().value();
        }
        this.setState(dart.fn(() => {
          this[_warpUnderwayCount] = dart.notNull(this[_warpUnderwayCount]) - 1;
          if (!dart.equals(this.widget.children, this[_children])) {
            this[_updateChildren]();
          } else {
            this[_childrenWithKey] = originalChildren;
          }
        }, VoidToNull()));
      }).bind(this));
    }
    [_handleScrollNotification](notification) {
      if (dart.notNull(this[_warpUnderwayCount]) > 0) {
        return false;
      }
      if (notification.depth !== 0) {
        return false;
      }
      this[_warpUnderwayCount] = dart.notNull(this[_warpUnderwayCount]) + 1;
      if (scroll_notification.ScrollUpdateNotification.is(notification) && !dart.test(this[_controller$].indexIsChanging)) {
        if ((dart.notNull(this[_pageController].page) - dart.notNull(this[_controller$].index))[$abs]() > 1.0) {
          this[_controller$].index = this[_pageController].page[$floor]();
          this[_currentIndex] = this[_controller$].index;
        }
        this[_controller$].offset = (dart.notNull(this[_pageController].page) - dart.notNull(this[_controller$].index))[$clamp](-1.0, 1.0);
      } else if (scroll_notification.ScrollEndNotification.is(notification)) {
        this[_controller$].index = this[_pageController].page[$round]();
        this[_currentIndex] = this[_controller$].index;
      }
      this[_warpUnderwayCount] = dart.notNull(this[_warpUnderwayCount]) - 1;
      return false;
    }
    build(context) {
      let t1;
      if (!dart.test(dart.fn(() => {
        if (this[_controller$].length != this.widget.children[$length]) {
          dart.throw(assertions.FlutterError.new("Controller's length property (" + dart.str(this[_controller$].length) + ") does not match the \n" + "number of tabs (" + dart.str(this.widget.children[$length]) + ") present in TabBar's tabs property."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabbar_view.dart", 222, 12, "() {\n      if (_controller.length != widget.children.length) {\n        throw FlutterError(\n            'Controller\\'s length property (${_controller.length}) does not match the \\n'\n            'number of tabs (${widget.children.length}) present in TabBar\\'s tabs property.');\n      }\n      return true;\n    }()");
      return new (NotificationListenerOfScrollNotification()).new({onNotification: dart.bind(this, _handleScrollNotification), child: new container.Container.new({height: (t1 = this.widget.height, t1 == null ? media_query.MediaQuery.of(context).size.height : t1), child: new page_view.PageView.new({dragStartBehavior: this.widget.dragStartBehavior, controller: this[_pageController], physics: this.widget.physics == null ? gf_tabbar_view._kGFTabBarViewPhysics : gf_tabbar_view._kGFTabBarViewPhysics.applyTo(this.widget.physics), children: this[_childrenWithKey], $creationLocationd_0dea112b090073317d4: C347 || CT.C347}), $creationLocationd_0dea112b090073317d4: C353 || CT.C353}), $creationLocationd_0dea112b090073317d4: C357 || CT.C357});
    }
  };
  (gf_tabbar_view._GFTabBarViewState.new = function() {
    this[_controller$] = null;
    this[_pageController] = null;
    this[_children] = null;
    this[_childrenWithKey] = null;
    this[_currentIndex] = null;
    this[_warpUnderwayCount] = 0;
    gf_tabbar_view._GFTabBarViewState.__proto__.new.call(this);
    ;
  }).prototype = gf_tabbar_view._GFTabBarViewState.prototype;
  dart.addTypeTests(gf_tabbar_view._GFTabBarViewState);
  dart.setMethodSignature(gf_tabbar_view._GFTabBarViewState, () => ({
    __proto__: dart.getMethods(gf_tabbar_view._GFTabBarViewState.__proto__),
    [_updateTabController]: dart.fnType(dart.void, []),
    [_updateChildren]: dart.fnType(dart.void, []),
    [_handleTabControllerAnimationTick]: dart.fnType(dart.void, []),
    [_warpToCurrentIndex]: dart.fnType(async.Future$(dart.void), []),
    [_handleScrollNotification]: dart.fnType(core.bool, [scroll_notification.ScrollNotification]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(gf_tabbar_view._GFTabBarViewState, () => ({
    __proto__: dart.getGetters(gf_tabbar_view._GFTabBarViewState.__proto__),
    [_controllerIsValid]: core.bool
  }));
  dart.setLibraryUri(gf_tabbar_view._GFTabBarViewState, "package:getflutter/components/tabs/gf_tabbar_view.dart");
  dart.setFieldSignature(gf_tabbar_view._GFTabBarViewState, () => ({
    __proto__: dart.getFields(gf_tabbar_view._GFTabBarViewState.__proto__),
    [_controller$]: dart.fieldType(tab_controller.TabController),
    [_pageController]: dart.fieldType(page_view.PageController),
    [_children]: dart.fieldType(core.List$(framework.Widget)),
    [_childrenWithKey]: dart.fieldType(core.List$(framework.Widget)),
    [_currentIndex]: dart.fieldType(core.int),
    [_warpUnderwayCount]: dart.fieldType(core.int)
  }));
  const ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  let C361;
  let C362;
  dart.defineLazy(gf_tabbar_view, {
    /*gf_tabbar_view._kGFTabBarViewPhysics*/get _kGFTabBarViewPhysics() {
      return (C361 || CT.C361).applyTo(C362 || CT.C362);
    }
  });
  const initialIndex$1 = dart.privateName(gf_tabBar, "GFTabBar.initialIndex");
  const length$1 = dart.privateName(gf_tabBar, "GFTabBar.length");
  const tabBarHeight$0 = dart.privateName(gf_tabBar, "GFTabBar.tabBarHeight");
  const tabBarColor$1 = dart.privateName(gf_tabBar, "GFTabBar.tabBarColor");
  const indicatorColor$1 = dart.privateName(gf_tabBar, "GFTabBar.indicatorColor");
  const indicatorWeight$1 = dart.privateName(gf_tabBar, "GFTabBar.indicatorWeight");
  const indicatorPadding$1 = dart.privateName(gf_tabBar, "GFTabBar.indicatorPadding");
  const indicator$1 = dart.privateName(gf_tabBar, "GFTabBar.indicator");
  const indicatorSize$1 = dart.privateName(gf_tabBar, "GFTabBar.indicatorSize");
  const labelColor$1 = dart.privateName(gf_tabBar, "GFTabBar.labelColor");
  const unselectedLabelColor$1 = dart.privateName(gf_tabBar, "GFTabBar.unselectedLabelColor");
  const labelStyle$1 = dart.privateName(gf_tabBar, "GFTabBar.labelStyle");
  const labelPadding$1 = dart.privateName(gf_tabBar, "GFTabBar.labelPadding");
  const unselectedLabelStyle$1 = dart.privateName(gf_tabBar, "GFTabBar.unselectedLabelStyle");
  const tabs$1 = dart.privateName(gf_tabBar, "GFTabBar.tabs");
  const controller$1 = dart.privateName(gf_tabBar, "GFTabBar.controller");
  const shape$0 = dart.privateName(gf_tabBar, "GFTabBar.shape");
  gf_tabBar.GFTabBar = class GFTabBar extends framework.StatefulWidget {
    get initialIndex() {
      return this[initialIndex$1];
    }
    set initialIndex(value) {
      super.initialIndex = value;
    }
    get length() {
      return this[length$1];
    }
    set length(value) {
      super.length = value;
    }
    get tabBarHeight() {
      return this[tabBarHeight$0];
    }
    set tabBarHeight(value) {
      super.tabBarHeight = value;
    }
    get tabBarColor() {
      return this[tabBarColor$1];
    }
    set tabBarColor(value) {
      super.tabBarColor = value;
    }
    get indicatorColor() {
      return this[indicatorColor$1];
    }
    set indicatorColor(value) {
      super.indicatorColor = value;
    }
    get indicatorWeight() {
      return this[indicatorWeight$1];
    }
    set indicatorWeight(value) {
      super.indicatorWeight = value;
    }
    get indicatorPadding() {
      return this[indicatorPadding$1];
    }
    set indicatorPadding(value) {
      super.indicatorPadding = value;
    }
    get indicator() {
      return this[indicator$1];
    }
    set indicator(value) {
      super.indicator = value;
    }
    get indicatorSize() {
      return this[indicatorSize$1];
    }
    set indicatorSize(value) {
      super.indicatorSize = value;
    }
    get labelColor() {
      return this[labelColor$1];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get unselectedLabelColor() {
      return this[unselectedLabelColor$1];
    }
    set unselectedLabelColor(value) {
      super.unselectedLabelColor = value;
    }
    get labelStyle() {
      return this[labelStyle$1];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    get labelPadding() {
      return this[labelPadding$1];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    get unselectedLabelStyle() {
      return this[unselectedLabelStyle$1];
    }
    set unselectedLabelStyle(value) {
      super.unselectedLabelStyle = value;
    }
    get tabs() {
      return this[tabs$1];
    }
    set tabs(value) {
      super.tabs = value;
    }
    get controller() {
      return this[controller$1];
    }
    set controller(value) {
      super.controller = value;
    }
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    createState() {
      return new gf_tabBar._GFTabBarState.new();
    }
  };
  (gf_tabBar.GFTabBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    let length = opts && 'length' in opts ? opts.length : null;
    let tabBarHeight = opts && 'tabBarHeight' in opts ? opts.tabBarHeight : null;
    let tabBarColor = opts && 'tabBarColor' in opts ? opts.tabBarColor : null;
    let indicatorColor = opts && 'indicatorColor' in opts ? opts.indicatorColor : null;
    let indicatorWeight = opts && 'indicatorWeight' in opts ? opts.indicatorWeight : 2;
    let indicatorPadding = opts && 'indicatorPadding' in opts ? opts.indicatorPadding : C205 || CT.C205;
    let indicator = opts && 'indicator' in opts ? opts.indicator : null;
    let indicatorSize = opts && 'indicatorSize' in opts ? opts.indicatorSize : null;
    let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let unselectedLabelColor = opts && 'unselectedLabelColor' in opts ? opts.unselectedLabelColor : null;
    let unselectedLabelStyle = opts && 'unselectedLabelStyle' in opts ? opts.unselectedLabelStyle : null;
    let tabs = opts && 'tabs' in opts ? opts.tabs : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialIndex$1] = initialIndex;
    this[length$1] = length;
    this[tabBarHeight$0] = tabBarHeight;
    this[tabBarColor$1] = tabBarColor;
    this[indicatorColor$1] = indicatorColor;
    this[indicatorWeight$1] = indicatorWeight;
    this[indicatorPadding$1] = indicatorPadding;
    this[indicator$1] = indicator;
    this[indicatorSize$1] = indicatorSize;
    this[labelColor$1] = labelColor;
    this[labelStyle$1] = labelStyle;
    this[labelPadding$1] = labelPadding;
    this[unselectedLabelColor$1] = unselectedLabelColor;
    this[unselectedLabelStyle$1] = unselectedLabelStyle;
    this[tabs$1] = tabs;
    this[controller$1] = controller;
    this[shape$0] = shape;
    if (!(length != null && dart.notNull(length) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabBar.dart", 36, 16, "length != null && length >= 0");
    if (!(initialIndex != null && dart.notNull(initialIndex) >= 0 && (length === 0 || dart.notNull(initialIndex) < dart.notNull(length)))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/tabs/gf_tabBar.dart", 37, 16, "initialIndex != null &&\n            initialIndex >= 0 &&\n            (length == 0 || initialIndex < length)");
    gf_tabBar.GFTabBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_tabBar.GFTabBar.prototype;
  dart.addTypeTests(gf_tabBar.GFTabBar);
  dart.setMethodSignature(gf_tabBar.GFTabBar, () => ({
    __proto__: dart.getMethods(gf_tabBar.GFTabBar.__proto__),
    createState: dart.fnType(gf_tabBar._GFTabBarState, [])
  }));
  dart.setLibraryUri(gf_tabBar.GFTabBar, "package:getflutter/components/tabs/gf_tabBar.dart");
  dart.setFieldSignature(gf_tabBar.GFTabBar, () => ({
    __proto__: dart.getFields(gf_tabBar.GFTabBar.__proto__),
    initialIndex: dart.finalFieldType(core.int),
    length: dart.finalFieldType(core.int),
    tabBarHeight: dart.finalFieldType(core.double),
    tabBarColor: dart.finalFieldType(ui.Color),
    indicatorColor: dart.finalFieldType(ui.Color),
    indicatorWeight: dart.finalFieldType(core.double),
    indicatorPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    indicator: dart.finalFieldType(decoration.Decoration),
    indicatorSize: dart.finalFieldType(tabs.TabBarIndicatorSize),
    labelColor: dart.finalFieldType(ui.Color),
    unselectedLabelColor: dart.finalFieldType(ui.Color),
    labelStyle: dart.finalFieldType(text_style.TextStyle),
    labelPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    unselectedLabelStyle: dart.finalFieldType(text_style.TextStyle),
    tabs: dart.finalFieldType(core.List$(framework.Widget)),
    controller: dart.finalFieldType(tab_controller.TabController),
    shape: dart.finalFieldType(borders.ShapeBorder)
  }));
  let C365;
  let C366;
  let C367;
  let C368;
  let C369;
  let C370;
  let C371;
  let C372;
  let C373;
  let C374;
  let C375;
  let C364;
  let C363;
  let C378;
  let C379;
  let C380;
  let C381;
  let C377;
  let C376;
  let C384;
  let C385;
  let C383;
  let C382;
  gf_tabBar._GFTabBarState = class _GFTabBarState extends framework.State$(gf_tabBar.GFTabBar) {
    build(context) {
      let t1, t1$;
      return new container.Container.new({height: (t1 = this.widget.tabBarHeight, t1 == null ? dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.1 : t1), child: new material.Material.new({shape: this.widget.shape, type: material.MaterialType.button, color: (t1$ = this.widget.tabBarColor, t1$ == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : t1$), child: new tabs.TabBar.new({controller: this.widget.controller, labelColor: this.widget.labelColor, unselectedLabelColor: this.widget.unselectedLabelColor, labelStyle: this.widget.labelStyle, unselectedLabelStyle: this.widget.unselectedLabelStyle, indicatorColor: this.widget.indicatorColor, indicatorSize: this.widget.indicatorSize, indicator: this.widget.indicator, indicatorPadding: this.widget.indicatorPadding, indicatorWeight: this.widget.indicatorWeight, tabs: this.widget.tabs, $creationLocationd_0dea112b090073317d4: C363 || CT.C363}), $creationLocationd_0dea112b090073317d4: C376 || CT.C376}), $creationLocationd_0dea112b090073317d4: C382 || CT.C382});
    }
  };
  (gf_tabBar._GFTabBarState.new = function() {
    gf_tabBar._GFTabBarState.__proto__.new.call(this);
    ;
  }).prototype = gf_tabBar._GFTabBarState.prototype;
  dart.addTypeTests(gf_tabBar._GFTabBarState);
  dart.setMethodSignature(gf_tabBar._GFTabBarState, () => ({
    __proto__: dart.getMethods(gf_tabBar._GFTabBarState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_tabBar._GFTabBarState, "package:getflutter/components/tabs/gf_tabBar.dart");
  let C386;
  let C387;
  let C390;
  let C391;
  let C389;
  let C388;
  let C392;
  let C395;
  let C396;
  let C394;
  let C393;
  let C397;
  let C398;
  let C401;
  let C402;
  let C400;
  let C399;
  let C405;
  let C406;
  let C404;
  let C403;
  let C409;
  let C408;
  let C407;
  let C410;
  let C413;
  let C414;
  let C412;
  let C411;
  let C417;
  let C418;
  let C419;
  let C420;
  let C416;
  let C415;
  const titleText$ = dart.privateName(gf_list_tile, "GFListTile.titleText");
  const subtitleText$ = dart.privateName(gf_list_tile, "GFListTile.subtitleText");
  const color$ = dart.privateName(gf_list_tile, "GFListTile.color");
  const avatar$ = dart.privateName(gf_list_tile, "GFListTile.avatar");
  const title$ = dart.privateName(gf_list_tile, "GFListTile.title");
  const subTitle$ = dart.privateName(gf_list_tile, "GFListTile.subTitle");
  const description$ = dart.privateName(gf_list_tile, "GFListTile.description");
  const icon$0 = dart.privateName(gf_list_tile, "GFListTile.icon");
  const padding$ = dart.privateName(gf_list_tile, "GFListTile.padding");
  gf_list_tile.GFListTile = class GFListTile extends framework.StatelessWidget {
    get titleText() {
      return this[titleText$];
    }
    set titleText(value) {
      super.titleText = value;
    }
    get subtitleText() {
      return this[subtitleText$];
    }
    set subtitleText(value) {
      super.subtitleText = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get avatar() {
      return this[avatar$];
    }
    set avatar(value) {
      super.avatar = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subTitle() {
      return this[subTitle$];
    }
    set subTitle(value) {
      super.subTitle = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2;
      return new container.Container.new({constraints: C204 || CT.C204, padding: C386 || CT.C386, decoration: new box_decoration.BoxDecoration.new({color: ui.Color._check(this.color), borderRadius: C114 || CT.C114}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([(t1 = this.avatar, t1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C387 || CT.C387}) : t1), new basic.Expanded.new({child: new basic.Padding.new({padding: C206 || CT.C206, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this.titleText != null ? new text.Text.new(this.titleText, {style: new text_style.TextStyle.new({fontSize: 17.0, fontWeight: ui.FontWeight.w500, color: gf_color.GFColors.getGFColor(gf_color.GFColor.dark)}), $creationLocationd_0dea112b090073317d4: C388 || CT.C388}) : (t1$ = this.title, t1$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C392 || CT.C392}) : t1$), this.subtitleText != null ? new text.Text.new(this.subtitleText, {style: new text_style.TextStyle.new({fontSize: 14.5, color: colors.Colors.black54}), $creationLocationd_0dea112b090073317d4: C393 || CT.C393}) : (t1$0 = this.subTitle, t1$0 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C397 || CT.C397}) : t1$0), (t1$1 = this.description, t1$1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C398 || CT.C398}) : t1$1)]), $creationLocationd_0dea112b090073317d4: C399 || CT.C399}), $creationLocationd_0dea112b090073317d4: C403 || CT.C403}), $creationLocationd_0dea112b090073317d4: C407 || CT.C407}), (t1$2 = this.icon, t1$2 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C410 || CT.C410}) : t1$2)]), $creationLocationd_0dea112b090073317d4: C411 || CT.C411}), $creationLocationd_0dea112b090073317d4: C415 || CT.C415});
    }
  };
  (gf_list_tile.GFListTile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let titleText = opts && 'titleText' in opts ? opts.titleText : null;
    let subtitleText = opts && 'subtitleText' in opts ? opts.subtitleText : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let avatar = opts && 'avatar' in opts ? opts.avatar : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subTitle = opts && 'subTitle' in opts ? opts.subTitle : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let padding = opts && 'padding' in opts ? opts.padding : C386 || CT.C386;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[titleText$] = titleText;
    this[subtitleText$] = subtitleText;
    this[color$] = color;
    this[avatar$] = avatar;
    this[title$] = title;
    this[subTitle$] = subTitle;
    this[description$] = description;
    this[icon$0] = icon;
    this[padding$] = padding;
    gf_list_tile.GFListTile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_list_tile.GFListTile.prototype;
  dart.addTypeTests(gf_list_tile.GFListTile);
  dart.setMethodSignature(gf_list_tile.GFListTile, () => ({
    __proto__: dart.getMethods(gf_list_tile.GFListTile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_list_tile.GFListTile, "package:getflutter/components/list_tile/gf_list_tile.dart");
  dart.setFieldSignature(gf_list_tile.GFListTile, () => ({
    __proto__: dart.getFields(gf_list_tile.GFListTile.__proto__),
    titleText: dart.finalFieldType(core.String),
    subtitleText: dart.finalFieldType(core.String),
    color: dart.finalFieldType(dart.dynamic),
    avatar: dart.finalFieldType(framework.Widget),
    title: dart.finalFieldType(framework.Widget),
    subTitle: dart.finalFieldType(framework.Widget),
    description: dart.finalFieldType(framework.Widget),
    icon: dart.finalFieldType(framework.Widget),
    padding: dart.finalFieldType(edge_insets.EdgeInsets)
  }));
  let C423;
  let C424;
  let C422;
  let C421;
  let C427;
  let C428;
  let C429;
  let C426;
  let C425;
  const EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  const EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  const EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  const EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  let C430;
  let C431;
  let C434;
  let C435;
  let C436;
  let C437;
  let C433;
  let C432;
  let C440;
  let C441;
  let C439;
  let C438;
  let C444;
  let C445;
  let C443;
  let C442;
  let C448;
  let C447;
  let C446;
  let C451;
  let C452;
  let C453;
  let C450;
  let C449;
  let C456;
  let C457;
  let C458;
  let C455;
  let C454;
  let C461;
  let C462;
  let C460;
  let C459;
  let C465;
  let C466;
  let C464;
  let C463;
  let C469;
  let C468;
  let C467;
  const currentAccountPicture$ = dart.privateName(gf_drawer_header, "GFDrawerHeaderPictures.currentAccountPicture");
  const otherAccountsPictures$ = dart.privateName(gf_drawer_header, "GFDrawerHeaderPictures.otherAccountsPictures");
  const closeButton$ = dart.privateName(gf_drawer_header, "GFDrawerHeaderPictures.closeButton");
  gf_drawer_header.GFDrawerHeaderPictures = class GFDrawerHeaderPictures extends framework.StatelessWidget {
    get currentAccountPicture() {
      return this[currentAccountPicture$];
    }
    set currentAccountPicture(value) {
      super.currentAccountPicture = value;
    }
    get otherAccountsPictures() {
      return this[otherAccountsPictures$];
    }
    set otherAccountsPictures(value) {
      super.otherAccountsPictures = value;
    }
    get closeButton() {
      return this[closeButton$];
    }
    set closeButton(value) {
      super.closeButton = value;
    }
    build(context) {
      let t1;
      return new basic.Stack.new({children: JSArrayOfWidget().of([this.closeButton == null ? new gf_icon_button.GFIconButton.new({icon: new icon.Icon.new(icons.Icons.close, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C421 || CT.C421}), onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.Object, context);
            }, VoidToNull()), type: gf_button_type.GFButtonType.transparent, $creationLocationd_0dea112b090073317d4: C425 || CT.C425}) : this.closeButton, new basic.PositionedDirectional.new({top: 0.0, end: 0.0, child: new basic.Row.new({children: (t1 = this.otherAccountsPictures, t1 == null ? JSArrayOfWidget().of([]) : t1)[$take](3)[$map](framework.Widget, dart.fn(picture => new basic.Padding.new({padding: C430 || CT.C430, child: new basic.Semantics.new({container: true, child: new container.Container.new({padding: C431 || CT.C431, width: 48.0, height: 48.0, child: picture, $creationLocationd_0dea112b090073317d4: C432 || CT.C432}), $creationLocationd_0dea112b090073317d4: C438 || CT.C438}), $creationLocationd_0dea112b090073317d4: C442 || CT.C442}), WidgetToPadding()))[$toList](), $creationLocationd_0dea112b090073317d4: C446 || CT.C446}), $creationLocationd_0dea112b090073317d4: C449 || CT.C449}), new basic.Positioned.new({top: 40.0, child: new basic.Semantics.new({explicitChildNodes: true, child: new basic.SizedBox.new({width: 72.0, height: 72.0, child: this.currentAccountPicture, $creationLocationd_0dea112b090073317d4: C454 || CT.C454}), $creationLocationd_0dea112b090073317d4: C459 || CT.C459}), $creationLocationd_0dea112b090073317d4: C463 || CT.C463})]), $creationLocationd_0dea112b090073317d4: C467 || CT.C467});
    }
  };
  (gf_drawer_header.GFDrawerHeaderPictures.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let currentAccountPicture = opts && 'currentAccountPicture' in opts ? opts.currentAccountPicture : null;
    let otherAccountsPictures = opts && 'otherAccountsPictures' in opts ? opts.otherAccountsPictures : null;
    let closeButton = opts && 'closeButton' in opts ? opts.closeButton : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[currentAccountPicture$] = currentAccountPicture;
    this[otherAccountsPictures$] = otherAccountsPictures;
    this[closeButton$] = closeButton;
    gf_drawer_header.GFDrawerHeaderPictures.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_drawer_header.GFDrawerHeaderPictures.prototype;
  dart.addTypeTests(gf_drawer_header.GFDrawerHeaderPictures);
  dart.setMethodSignature(gf_drawer_header.GFDrawerHeaderPictures, () => ({
    __proto__: dart.getMethods(gf_drawer_header.GFDrawerHeaderPictures.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_drawer_header.GFDrawerHeaderPictures, "package:getflutter/components/drawer/gf_drawer_header.dart");
  dart.setFieldSignature(gf_drawer_header.GFDrawerHeaderPictures, () => ({
    __proto__: dart.getFields(gf_drawer_header.GFDrawerHeaderPictures.__proto__),
    currentAccountPicture: dart.finalFieldType(framework.Widget),
    otherAccountsPictures: dart.finalFieldType(core.List$(framework.Widget)),
    closeButton: dart.finalFieldType(framework.Widget)
  }));
  let C470;
  let C471;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C472;
  const decoration$ = dart.privateName(gf_drawer_header, "GFDrawerHeader.decoration");
  const margin$ = dart.privateName(gf_drawer_header, "GFDrawerHeader.margin");
  const currentAccountPicture$0 = dart.privateName(gf_drawer_header, "GFDrawerHeader.currentAccountPicture");
  const otherAccountsPictures$0 = dart.privateName(gf_drawer_header, "GFDrawerHeader.otherAccountsPictures");
  const child$2 = dart.privateName(gf_drawer_header, "GFDrawerHeader.child");
  const duration$1 = dart.privateName(gf_drawer_header, "GFDrawerHeader.duration");
  const curve$ = dart.privateName(gf_drawer_header, "GFDrawerHeader.curve");
  const closeButton$0 = dart.privateName(gf_drawer_header, "GFDrawerHeader.closeButton");
  gf_drawer_header.GFDrawerHeader = class GFDrawerHeader extends framework.StatefulWidget {
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get currentAccountPicture() {
      return this[currentAccountPicture$0];
    }
    set currentAccountPicture(value) {
      super.currentAccountPicture = value;
    }
    get otherAccountsPictures() {
      return this[otherAccountsPictures$0];
    }
    set otherAccountsPictures(value) {
      super.otherAccountsPictures = value;
    }
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    get duration() {
      return this[duration$1];
    }
    set duration(value) {
      super.duration = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get closeButton() {
      return this[closeButton$0];
    }
    set closeButton(value) {
      super.closeButton = value;
    }
    createState() {
      return new gf_drawer_header._GFDrawerHeaderState.new();
    }
  };
  (gf_drawer_header.GFDrawerHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let margin = opts && 'margin' in opts ? opts.margin : C470 || CT.C470;
    let currentAccountPicture = opts && 'currentAccountPicture' in opts ? opts.currentAccountPicture : null;
    let otherAccountsPictures = opts && 'otherAccountsPictures' in opts ? opts.otherAccountsPictures : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let duration = opts && 'duration' in opts ? opts.duration : C471 || CT.C471;
    let curve = opts && 'curve' in opts ? opts.curve : C472 || CT.C472;
    let closeButton = opts && 'closeButton' in opts ? opts.closeButton : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[decoration$] = decoration;
    this[margin$] = margin;
    this[currentAccountPicture$0] = currentAccountPicture;
    this[otherAccountsPictures$0] = otherAccountsPictures;
    this[child$2] = child;
    this[duration$1] = duration;
    this[curve$] = curve;
    this[closeButton$0] = closeButton;
    gf_drawer_header.GFDrawerHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_drawer_header.GFDrawerHeader.prototype;
  dart.addTypeTests(gf_drawer_header.GFDrawerHeader);
  dart.setMethodSignature(gf_drawer_header.GFDrawerHeader, () => ({
    __proto__: dart.getMethods(gf_drawer_header.GFDrawerHeader.__proto__),
    createState: dart.fnType(gf_drawer_header._GFDrawerHeaderState, [])
  }));
  dart.setLibraryUri(gf_drawer_header.GFDrawerHeader, "package:getflutter/components/drawer/gf_drawer_header.dart");
  dart.setFieldSignature(gf_drawer_header.GFDrawerHeader, () => ({
    __proto__: dart.getFields(gf_drawer_header.GFDrawerHeader.__proto__),
    decoration: dart.finalFieldType(decoration.Decoration),
    margin: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    currentAccountPicture: dart.finalFieldType(framework.Widget),
    otherAccountsPictures: dart.finalFieldType(core.List$(framework.Widget)),
    child: dart.finalFieldType(framework.Widget),
    duration: dart.finalFieldType(core.Duration),
    curve: dart.finalFieldType(curves.Curve),
    closeButton: dart.finalFieldType(framework.Widget)
  }));
  let C473;
  let C474;
  let C477;
  let C478;
  let C479;
  let C476;
  let C475;
  let C482;
  let C483;
  let C481;
  let C480;
  let C486;
  let C485;
  let C484;
  let C487;
  let C490;
  let C491;
  let C492;
  let C493;
  let C489;
  let C488;
  let C496;
  let C497;
  let C498;
  let C495;
  let C494;
  let C501;
  let C502;
  let C500;
  let C499;
  let C505;
  let C506;
  let C507;
  let C508;
  let C509;
  let C504;
  let C503;
  let C512;
  let C513;
  let C514;
  let C511;
  let C510;
  gf_drawer_header._GFDrawerHeaderState = class _GFDrawerHeaderState extends framework.State$(gf_drawer_header.GFDrawerHeader) {
    build(context) {
      let t1;
      if (!dart.test(debug$.debugCheckHasMaterial(context))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart", 133, 12, "debugCheckHasMaterial(context)");
      if (!dart.test(debug$.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/drawer/gf_drawer_header.dart", 134, 12, "debugCheckHasMaterialLocalizations(context)");
      let statusBarHeight = media_query.MediaQuery.of(context).padding.top;
      return new basic.Semantics.new({container: true, label: material_localizations.MaterialLocalizations.of(context).signedInLabel, child: new container.Container.new({height: dart.notNull(statusBarHeight) + 185.0, decoration: (t1 = this.widget.decoration, t1 == null ? new box_decoration.BoxDecoration.new({color: theme$.Theme.of(context).primaryColor}) : t1), margin: this.widget.margin, padding: C473 || CT.C473, child: new safe_area.SafeArea.new({bottom: false, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Padding.new({padding: C474 || CT.C474, child: new gf_drawer_header.GFDrawerHeaderPictures.new({currentAccountPicture: this.widget.currentAccountPicture, otherAccountsPictures: this.widget.otherAccountsPictures, closeButton: this.widget.closeButton, $creationLocationd_0dea112b090073317d4: C475 || CT.C475}), $creationLocationd_0dea112b090073317d4: C480 || CT.C480}), $creationLocationd_0dea112b090073317d4: C484 || CT.C484}), new implicit_animations.AnimatedContainer.new({padding: C487 || CT.C487, duration: this.widget.duration, curve: this.widget.curve, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C488 || CT.C488})]), $creationLocationd_0dea112b090073317d4: C494 || CT.C494}), $creationLocationd_0dea112b090073317d4: C499 || CT.C499}), $creationLocationd_0dea112b090073317d4: C503 || CT.C503}), $creationLocationd_0dea112b090073317d4: C510 || CT.C510});
    }
  };
  (gf_drawer_header._GFDrawerHeaderState.new = function() {
    gf_drawer_header._GFDrawerHeaderState.__proto__.new.call(this);
    ;
  }).prototype = gf_drawer_header._GFDrawerHeaderState.prototype;
  dart.addTypeTests(gf_drawer_header._GFDrawerHeaderState);
  dart.setMethodSignature(gf_drawer_header._GFDrawerHeaderState, () => ({
    __proto__: dart.getMethods(gf_drawer_header._GFDrawerHeaderState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_drawer_header._GFDrawerHeaderState, "package:getflutter/components/drawer/gf_drawer_header.dart");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C515;
  const _name$3 = dart.privateName(gf_button_type, "_name");
  let C516;
  const _name$4 = dart.privateName(gf_icon_button_shape, "_name");
  let C517;
  const _name$5 = dart.privateName(gf_color, "_name");
  let C518;
  const _name$6 = dart.privateName(gf_size, "_name");
  let C519;
  const iconSize$ = dart.privateName(gf_icon_button, "GFIconButton.iconSize");
  const padding$0 = dart.privateName(gf_icon_button, "GFIconButton.padding");
  const alignment$0 = dart.privateName(gf_icon_button, "GFIconButton.alignment");
  const icon$1 = dart.privateName(gf_icon_button, "GFIconButton.icon");
  const focusColor$ = dart.privateName(gf_icon_button, "GFIconButton.focusColor");
  const hoverColor$ = dart.privateName(gf_icon_button, "GFIconButton.hoverColor");
  const type$2 = dart.privateName(gf_icon_button, "GFIconButton.type");
  const shape$1 = dart.privateName(gf_icon_button, "GFIconButton.shape");
  const color$0 = dart.privateName(gf_icon_button, "GFIconButton.color");
  const splashColor$ = dart.privateName(gf_icon_button, "GFIconButton.splashColor");
  const highlightColor$ = dart.privateName(gf_icon_button, "GFIconButton.highlightColor");
  const disabledColor$ = dart.privateName(gf_icon_button, "GFIconButton.disabledColor");
  const onPressed$ = dart.privateName(gf_icon_button, "GFIconButton.onPressed");
  const focusNode$ = dart.privateName(gf_icon_button, "GFIconButton.focusNode");
  const autofocus$ = dart.privateName(gf_icon_button, "GFIconButton.autofocus");
  const tooltip$ = dart.privateName(gf_icon_button, "GFIconButton.tooltip");
  const boxShadow$ = dart.privateName(gf_icon_button, "GFIconButton.boxShadow");
  const borderShape$ = dart.privateName(gf_icon_button, "GFIconButton.borderShape");
  const size$ = dart.privateName(gf_icon_button, "GFIconButton.size");
  const buttonBoxShadow$ = dart.privateName(gf_icon_button, "GFIconButton.buttonBoxShadow");
  const borderSide$ = dart.privateName(gf_icon_button, "GFIconButton.borderSide");
  gf_icon_button.GFIconButton = class GFIconButton extends framework.StatefulWidget {
    get iconSize() {
      return this[iconSize$];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      super.padding = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get icon() {
      return this[icon$1];
    }
    set icon(value) {
      super.icon = value;
    }
    get focusColor() {
      return this[focusColor$];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get type() {
      return this[type$2];
    }
    set type(value) {
      super.type = value;
    }
    get shape() {
      return this[shape$1];
    }
    set shape(value) {
      super.shape = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get splashColor() {
      return this[splashColor$];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get highlightColor() {
      return this[highlightColor$];
    }
    set highlightColor(value) {
      super.highlightColor = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get tooltip() {
      return this[tooltip$];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    get boxShadow() {
      return this[boxShadow$];
    }
    set boxShadow(value) {
      super.boxShadow = value;
    }
    get borderShape() {
      return this[borderShape$];
    }
    set borderShape(value) {
      super.borderShape = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get buttonBoxShadow() {
      return this[buttonBoxShadow$];
    }
    set buttonBoxShadow(value) {
      super.buttonBoxShadow = value;
    }
    get borderSide() {
      return this[borderSide$];
    }
    set borderSide(value) {
      super.borderSide = value;
    }
    createState() {
      return new gf_icon_button._GFIconButtonState.new();
    }
  };
  (gf_icon_button.GFIconButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : 0;
    let padding = opts && 'padding' in opts ? opts.padding : C386 || CT.C386;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C515 || CT.C515;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let type = opts && 'type' in opts ? opts.type : C516 || CT.C516;
    let shape = opts && 'shape' in opts ? opts.shape : C517 || CT.C517;
    let color = opts && 'color' in opts ? opts.color : C518 || CT.C518;
    let borderShape = opts && 'borderShape' in opts ? opts.borderShape : null;
    let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
    let size = opts && 'size' in opts ? opts.size : C519 || CT.C519;
    let buttonBoxShadow = opts && 'buttonBoxShadow' in opts ? opts.buttonBoxShadow : null;
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[iconSize$] = iconSize;
    this[padding$0] = padding;
    this[alignment$0] = alignment;
    this[icon$1] = icon;
    this[focusColor$] = focusColor;
    this[hoverColor$] = hoverColor;
    this[highlightColor$] = highlightColor;
    this[splashColor$] = splashColor;
    this[disabledColor$] = disabledColor;
    this[onPressed$] = onPressed;
    this[focusNode$] = focusNode;
    this[autofocus$] = autofocus;
    this[tooltip$] = tooltip;
    this[type$2] = type;
    this[shape$1] = shape;
    this[color$0] = color;
    this[borderShape$] = borderShape;
    this[boxShadow$] = boxShadow;
    this[size$] = size;
    this[buttonBoxShadow$] = buttonBoxShadow;
    this[borderSide$] = borderSide;
    if (!(iconSize != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart", 32, 16, "iconSize != null");
    if (!(padding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart", 33, 16, "padding != null");
    if (!(alignment != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart", 34, 16, "alignment != null");
    if (!(autofocus != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart", 35, 16, "autofocus != null");
    if (!(icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart", 36, 16, "icon != null");
    gf_icon_button.GFIconButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_icon_button.GFIconButton.prototype;
  dart.addTypeTests(gf_icon_button.GFIconButton);
  dart.setMethodSignature(gf_icon_button.GFIconButton, () => ({
    __proto__: dart.getMethods(gf_icon_button.GFIconButton.__proto__),
    createState: dart.fnType(gf_icon_button._GFIconButtonState, [])
  }));
  dart.setLibraryUri(gf_icon_button.GFIconButton, "package:getflutter/components/button/gf_icon_button.dart");
  dart.setFieldSignature(gf_icon_button.GFIconButton, () => ({
    __proto__: dart.getFields(gf_icon_button.GFIconButton.__proto__),
    iconSize: dart.finalFieldType(core.double),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    icon: dart.finalFieldType(framework.Widget),
    focusColor: dart.finalFieldType(ui.Color),
    hoverColor: dart.finalFieldType(ui.Color),
    type: dart.finalFieldType(gf_button_type.GFButtonType),
    shape: dart.finalFieldType(gf_icon_button_shape.GFIconButtonShape),
    color: dart.finalFieldType(dart.dynamic),
    splashColor: dart.finalFieldType(dart.dynamic),
    highlightColor: dart.finalFieldType(dart.dynamic),
    disabledColor: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    autofocus: dart.finalFieldType(core.bool),
    tooltip: dart.finalFieldType(core.String),
    boxShadow: dart.finalFieldType(box_shadow.BoxShadow),
    borderShape: dart.finalFieldType(borders.ShapeBorder),
    size: dart.finalFieldType(dart.dynamic),
    buttonBoxShadow: dart.finalFieldType(core.bool),
    borderSide: dart.finalFieldType(borders.BorderSide)
  }));
  let C522;
  let C523;
  let C524;
  let C525;
  let C521;
  let C520;
  let C528;
  let C529;
  let C527;
  let C526;
  let C530;
  let C533;
  let C534;
  let C535;
  let C536;
  let C537;
  let C538;
  let C539;
  let C532;
  let C531;
  let C542;
  let C543;
  let C544;
  let C545;
  let C541;
  let C540;
  let C548;
  let C549;
  let C550;
  let C551;
  let C547;
  let C546;
  let C554;
  let C555;
  let C553;
  let C552;
  let C558;
  let C559;
  let C560;
  let C557;
  let C556;
  let C563;
  let C564;
  let C565;
  let C562;
  let C561;
  gf_icon_button._GFIconButtonState = class _GFIconButtonState extends framework.State$(gf_icon_button.GFIconButton) {
    initState() {
      this.color = gf_color.GFColors.getGFColor(this.widget.color);
      this.onPressed = this.widget.onPressed;
      this.type = this.widget.type;
      this.shape = this.widget.shape;
      super.initState();
    }
    getBorderColor() {
      if (this.widget.onPressed != null) {
        return this.color;
      } else {
        if (this.widget.disabledColor != null) {
          return ui.Color._check(this.widget.disabledColor);
        } else {
          return this.color.withOpacity(0.48);
        }
      }
    }
    getDisabledFillColor() {
      if (dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x)) {
        return colors.Colors.transparent;
      }
      if (this.widget.disabledColor != null) {
        return ui.Color._check(this.widget.disabledColor);
      } else {
        return this.color.withOpacity(0.48);
      }
    }
    getColor() {
      if (dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x)) {
        return colors.Colors.transparent;
      } else {
        return this.color;
      }
    }
    getIconColor() {
      if (dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x)) {
        return this.widget.onPressed != null ? dart.equals(this.color, gf_color.GFColors.getGFColor(gf_color.GFColor.transparent)) ? gf_color.GFColors.getGFColor(gf_color.GFColor.dark) : this.color : this.color.withOpacity(0.48);
      } else if (dart.equals(this.color, gf_color.GFColors.getGFColor(gf_color.GFColor.transparent))) {
        return this.widget.onPressed != null ? gf_color.GFColors.getGFColor(gf_color.GFColor.dark) : gf_color.GFColors.getGFColor(gf_color.GFColor.white);
      } else {
        return gf_color.GFColors.getGFColor(gf_color.GFColor.white);
      }
    }
    build(context) {
      let t1, t1$;
      if (!dart.test(debug$.debugCheckHasMaterial(context))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_icon_button.dart", 180, 12, "debugCheckHasMaterial(context)");
      let themeColor = theme$.Theme.of(context).colorScheme.onSurface.withOpacity(0.12);
      let outlineBorder = new borders.BorderSide.new({color: this.widget.borderSide == null ? this.getBorderColor() : this.widget.borderSide.color, width: (t1 = this.widget.borderSide, t1 == null ? null : t1.width) == null ? dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) ? 2.0 : 1.0 : (t1$ = this.widget.borderSide, t1$ == null ? null : t1$.width)});
      let shapeBorder = dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) ? outlineBorder : this.widget.borderSide != null ? this.widget.borderSide : new borders.BorderSide.new({color: this.color, width: 0.0});
      let shapeBorderType = null;
      if (dart.equals(this.shape, gf_icon_button_shape.GFIconButtonShape.pills)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(20.0), side: shapeBorder});
      } else if (dart.equals(this.shape, gf_icon_button_shape.GFIconButtonShape.square)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(0.0), side: shapeBorder});
      } else if (dart.equals(this.shape, gf_icon_button_shape.GFIconButtonShape.standard)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(3.0), side: shapeBorder});
      } else if (dart.equals(this.shape, gf_icon_button_shape.GFIconButtonShape.circle)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(50.0), side: shapeBorder});
      }
      if (dart.equals(this.widget.size, gf_size.GFSize.small)) {
        this.height = 30.0;
        this.width = 30.0;
        this.iconPixel = 18.0;
      } else if (dart.equals(this.widget.size, gf_size.GFSize.medium)) {
        this.height = 35.0;
        this.width = 35.0;
        this.iconPixel = 18.0;
      } else if (dart.equals(this.widget.size, gf_size.GFSize.large)) {
        this.height = 40.0;
        this.width = 40.0;
        this.iconPixel = 18.0;
      } else {
        this.height = 35.0;
        this.width = 35.0;
        this.iconPixel = 18.0;
      }
      let result = new container.Container.new({height: dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.circle) ? dart.notNull(this.height) + 6.0 : this.height, width: dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.pills) ? dart.notNull(this.width) + 10 : dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.circle) ? dart.notNull(this.height) + 6 : this.width, padding: this.widget.padding, child: icon_theme.IconTheme.merge({data: new icon_theme_data.IconThemeData.new({size: dart.notNull(this.widget.iconSize) > 0.0 ? this.widget.iconSize : this.iconPixel, color: this.getIconColor()}), child: this.widget.icon}), $creationLocationd_0dea112b090073317d4: C520 || CT.C520});
      if (this.widget.tooltip != null) {
        result = new tooltip.Tooltip.new({message: this.widget.tooltip, child: result, $creationLocationd_0dea112b090073317d4: C526 || CT.C526});
      }
      const getBoxShadow = () => {
        if (!dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent)) {
          if (this.widget.boxShadow == null && !dart.equals(this.widget.buttonBoxShadow, true)) {
            return null;
          } else {
            return new box_decoration.BoxDecoration.new({color: this.widget.onPressed != null ? this.getColor() : this.getDisabledFillColor(), borderRadius: dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.circle) ? new border_radius.BorderRadius.circular(50.0) : dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.standard) ? new border_radius.BorderRadius.circular(3.0) : dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.pills) ? new border_radius.BorderRadius.circular(20.0) : border_radius.BorderRadius.zero, boxShadow: JSArrayOfBoxShadow().of([this.widget.boxShadow == null && dart.equals(this.widget.buttonBoxShadow, true) ? new box_shadow.BoxShadow.new({color: themeColor, blurRadius: 1.5, spreadRadius: 2.0, offset: ui.Offset.zero}) : this.widget.boxShadow != null ? this.widget.boxShadow : new box_shadow.BoxShadow.new({color: theme$.Theme.of(context).canvasColor, blurRadius: 0.0, spreadRadius: 0.0, offset: ui.Offset.zero})])});
          }
        }
        return null;
      };
      dart.fn(getBoxShadow, VoidToBoxDecoration());
      return new basic.Semantics.new({button: true, enabled: this.widget.onPressed != null, child: new focus_scope.Focus.new({focusNode: this.widget.focusNode, autofocus: this.widget.autofocus, child: new basic.ConstrainedBox.new({constraints: C530 || CT.C530, child: new container.Container.new({height: dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.circle) ? dart.notNull(this.height) + 6 : this.height, width: dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.pills) ? dart.notNull(this.width) + 10 : dart.equals(this.widget.shape, gf_icon_button_shape.GFIconButtonShape.circle) ? dart.notNull(this.height) + 6 : this.width, decoration: dart.equals(this.widget.type, gf_button_type.GFButtonType.solid) ? getBoxShadow() : null, child: new material.Material.new({shape: dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) ? null : this.widget.borderShape == null ? shapeBorderType : this.widget.borderShape, color: this.widget.onPressed != null ? this.getColor() : this.getDisabledFillColor(), type: dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) ? material.MaterialType.transparency : material.MaterialType.button, child: new ink_well.InkResponse.new({onTap: this.widget.onPressed, child: result, focusColor: this.widget.focusColor != null ? gf_color.GFColors.getGFColor(this.widget.focusColor) : theme$.Theme.of(context).focusColor, hoverColor: this.widget.hoverColor != null ? gf_color.GFColors.getGFColor(this.widget.hoverColor) : theme$.Theme.of(context).hoverColor, highlightColor: this.widget.highlightColor != null ? gf_color.GFColors.getGFColor(this.widget.highlightColor) : theme$.Theme.of(context).highlightColor, splashColor: this.widget.splashColor != null ? gf_color.GFColors.getGFColor(this.widget.splashColor) : theme$.Theme.of(context).splashColor, radius: math.max(core.double, 35, (dart.notNull(this.widget.iconSize) + math.min(core.num, this.widget.padding.horizontal, this.widget.padding.vertical)) * 0.7), $creationLocationd_0dea112b090073317d4: C531 || CT.C531}), $creationLocationd_0dea112b090073317d4: C540 || CT.C540}), $creationLocationd_0dea112b090073317d4: C546 || CT.C546}), $creationLocationd_0dea112b090073317d4: C552 || CT.C552}), $creationLocationd_0dea112b090073317d4: C556 || CT.C556}), $creationLocationd_0dea112b090073317d4: C561 || CT.C561});
    }
  };
  (gf_icon_button._GFIconButtonState.new = function() {
    this.color = null;
    this.onPressed = null;
    this.type = null;
    this.shape = null;
    this.boxShadow = null;
    this.height = null;
    this.width = null;
    this.iconPixel = null;
    gf_icon_button._GFIconButtonState.__proto__.new.call(this);
    ;
  }).prototype = gf_icon_button._GFIconButtonState.prototype;
  dart.addTypeTests(gf_icon_button._GFIconButtonState);
  dart.setMethodSignature(gf_icon_button._GFIconButtonState, () => ({
    __proto__: dart.getMethods(gf_icon_button._GFIconButtonState.__proto__),
    getBorderColor: dart.fnType(ui.Color, []),
    getDisabledFillColor: dart.fnType(ui.Color, []),
    getColor: dart.fnType(ui.Color, []),
    getIconColor: dart.fnType(ui.Color, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_icon_button._GFIconButtonState, "package:getflutter/components/button/gf_icon_button.dart");
  dart.setFieldSignature(gf_icon_button._GFIconButtonState, () => ({
    __proto__: dart.getFields(gf_icon_button._GFIconButtonState.__proto__),
    color: dart.fieldType(ui.Color),
    onPressed: dart.fieldType(core.Function),
    type: dart.fieldType(gf_button_type.GFButtonType),
    shape: dart.fieldType(gf_icon_button_shape.GFIconButtonShape),
    boxShadow: dart.fieldType(box_shadow.BoxShadow),
    height: dart.fieldType(core.double),
    width: dart.fieldType(core.double),
    iconPixel: dart.fieldType(core.double)
  }));
  let C566;
  let C567;
  let C568;
  let C571;
  let C572;
  let C570;
  let C569;
  let C573;
  let C574;
  let C575;
  let C576;
  let C579;
  let C580;
  let C578;
  let C577;
  let C581;
  let C584;
  let C583;
  let C582;
  let C587;
  let C588;
  let C589;
  let C590;
  let C591;
  let C592;
  let C593;
  let C594;
  let C586;
  let C585;
  let C595;
  let C598;
  let C599;
  let C600;
  let C601;
  let C602;
  let C603;
  let C604;
  let C597;
  let C596;
  let C607;
  let C608;
  let C609;
  let C610;
  let C606;
  let C605;
  const height$2 = dart.privateName(gf_card, "GFCard.height");
  const titlePosition$ = dart.privateName(gf_card, "GFCard.titlePosition");
  const color$1 = dart.privateName(gf_card, "GFCard.color");
  const elevation$ = dart.privateName(gf_card, "GFCard.elevation");
  const shape$2 = dart.privateName(gf_card, "GFCard.shape");
  const borderOnForeground$ = dart.privateName(gf_card, "GFCard.borderOnForeground");
  const clipBehavior$ = dart.privateName(gf_card, "GFCard.clipBehavior");
  const margin$0 = dart.privateName(gf_card, "GFCard.margin");
  const padding$1 = dart.privateName(gf_card, "GFCard.padding");
  const semanticContainer$ = dart.privateName(gf_card, "GFCard.semanticContainer");
  const title$0 = dart.privateName(gf_card, "GFCard.title");
  const content$ = dart.privateName(gf_card, "GFCard.content");
  const image$ = dart.privateName(gf_card, "GFCard.image");
  const imageOverlay$ = dart.privateName(gf_card, "GFCard.imageOverlay");
  const buttonBar$ = dart.privateName(gf_card, "GFCard.buttonBar");
  const boxFit$ = dart.privateName(gf_card, "GFCard.boxFit");
  const colorFilter$ = dart.privateName(gf_card, "GFCard.colorFilter");
  const borderRadius$1 = dart.privateName(gf_card, "GFCard.borderRadius");
  const border$0 = dart.privateName(gf_card, "GFCard.border");
  const gradient$ = dart.privateName(gf_card, "GFCard.gradient");
  const _name$7 = dart.privateName(ui, "_name");
  let C611;
  gf_card.GFCard = class GFCard extends framework.StatelessWidget {
    get height() {
      return this[height$2];
    }
    set height(value) {
      super.height = value;
    }
    get titlePosition() {
      return this[titlePosition$];
    }
    set titlePosition(value) {
      super.titlePosition = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get shape() {
      return this[shape$2];
    }
    set shape(value) {
      super.shape = value;
    }
    get borderOnForeground() {
      return this[borderOnForeground$];
    }
    set borderOnForeground(value) {
      super.borderOnForeground = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get margin() {
      return this[margin$0];
    }
    set margin(value) {
      super.margin = value;
    }
    get padding() {
      return this[padding$1];
    }
    set padding(value) {
      super.padding = value;
    }
    get semanticContainer() {
      return this[semanticContainer$];
    }
    set semanticContainer(value) {
      super.semanticContainer = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get imageOverlay() {
      return this[imageOverlay$];
    }
    set imageOverlay(value) {
      super.imageOverlay = value;
    }
    get buttonBar() {
      return this[buttonBar$];
    }
    set buttonBar(value) {
      super.buttonBar = value;
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
      return this[borderRadius$1];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get border() {
      return this[border$0];
    }
    set border(value) {
      super.border = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t1$9, t1$10, t1$11, t1$12, t1$13, t1$14, t1$15;
      let cardTheme = card_theme.CardTheme.of(context);
      let cardChild = new basic.Column.new({children: JSArrayOfWidget().of([dart.equals(this.titlePosition, gf_position.GFPosition.start) ? (t1 = this.title, t1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C567 || CT.C567}) : t1) : this.image != null ? new basic.ClipRRect.new({borderRadius: C568 || CT.C568, child: this.image, $creationLocationd_0dea112b090073317d4: C569 || CT.C569}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C573 || CT.C573}), dart.equals(this.titlePosition, gf_position.GFPosition.start) ? (t1$ = this.image, t1$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C574 || CT.C574}) : t1$) : (t1$0 = this.title, t1$0 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C575 || CT.C575}) : t1$0), new basic.Padding.new({padding: this.padding, child: (t1$1 = this.content, t1$1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C576 || CT.C576}) : t1$1), $creationLocationd_0dea112b090073317d4: C577 || CT.C577}), (t1$2 = this.buttonBar, t1$2 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C581 || CT.C581}) : t1$2)]), $creationLocationd_0dea112b090073317d4: C582 || CT.C582});
      let overlayImage = new gf_image_overlay.GFImageOverlay.new({width: media_query.MediaQuery.of(context).size.width, child: cardChild, color: (t1$4 = (t1$3 = this.color, t1$3 == null ? cardTheme.color : t1$3), t1$4 == null ? theme$.Theme.of(context).cardColor : t1$4), image: this.imageOverlay, boxFit: this.boxFit, colorFilter: this.colorFilter, border: this.border, borderRadius: (t1$5 = this.borderRadius, t1$5 == null ? C6 || CT.C6 : t1$5), $creationLocationd_0dea112b090073317d4: C585 || CT.C585});
      return new container.Container.new({height: this.height, margin: (t1$7 = (t1$6 = this.margin, t1$6 == null ? cardTheme.margin : t1$6), t1$7 == null ? C595 || CT.C595 : t1$7), decoration: this.gradient != null ? new box_decoration.BoxDecoration.new({gradient: this.gradient, borderRadius: C6 || CT.C6}) : null, child: this.gradient == null ? new material.Material.new({type: material.MaterialType.card, color: (t1$9 = (t1$8 = this.color, t1$8 == null ? cardTheme.color : t1$8), t1$9 == null ? theme$.Theme.of(context).cardColor : t1$9), elevation: (t1$11 = (t1$10 = this.elevation, t1$10 == null ? cardTheme.elevation : t1$10), t1$11 == null ? 1 : t1$11), shape: (t1$13 = (t1$12 = this.shape, t1$12 == null ? cardTheme.shape : t1$12), t1$13 == null ? C33 || CT.C33 : t1$13), borderOnForeground: this.borderOnForeground, clipBehavior: (t1$15 = (t1$14 = this.clipBehavior, t1$14 == null ? cardTheme.clipBehavior : t1$14), t1$15 == null ? gf_card.GFCard._defaultClipBehavior : t1$15), child: this.imageOverlay == null ? cardChild : overlayImage, $creationLocationd_0dea112b090073317d4: C596 || CT.C596}) : this.imageOverlay == null ? cardChild : overlayImage, $creationLocationd_0dea112b090073317d4: C605 || CT.C605});
    }
  };
  (gf_card.GFCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let borderOnForeground = opts && 'borderOnForeground' in opts ? opts.borderOnForeground : true;
    let padding = opts && 'padding' in opts ? opts.padding : C566 || CT.C566;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let semanticContainer = opts && 'semanticContainer' in opts ? opts.semanticContainer : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let buttonBar = opts && 'buttonBar' in opts ? opts.buttonBar : null;
    let imageOverlay = opts && 'imageOverlay' in opts ? opts.imageOverlay : null;
    let titlePosition = opts && 'titlePosition' in opts ? opts.titlePosition : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let boxFit = opts && 'boxFit' in opts ? opts.boxFit : null;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$1] = color;
    this[elevation$] = elevation;
    this[shape$2] = shape;
    this[borderOnForeground$] = borderOnForeground;
    this[padding$1] = padding;
    this[margin$0] = margin;
    this[clipBehavior$] = clipBehavior;
    this[semanticContainer$] = semanticContainer;
    this[title$0] = title;
    this[content$] = content;
    this[image$] = image;
    this[buttonBar$] = buttonBar;
    this[imageOverlay$] = imageOverlay;
    this[titlePosition$] = titlePosition;
    this[borderRadius$1] = borderRadius;
    this[border$0] = border;
    this[boxFit$] = boxFit;
    this[colorFilter$] = colorFilter;
    this[height$2] = height;
    this[gradient$] = gradient;
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart", 36, 16, "elevation == null || elevation >= 0.0");
    if (!(borderOnForeground != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart", 37, 16, "borderOnForeground != null");
    if (!(color == null || gradient == null)) dart.assertFailed("Cannot provide both a color and a decoration\n" + "The color argument is just a shorthand for \"decoration: new BoxDecoration(color: color)\".", "org-dartlang-app:///packages/getflutter/components/card/gf_card.dart", 39, 13, "color == null || gradient == null");
    gf_card.GFCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_card.GFCard.prototype;
  dart.addTypeTests(gf_card.GFCard);
  dart.setMethodSignature(gf_card.GFCard, () => ({
    __proto__: dart.getMethods(gf_card.GFCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_card.GFCard, "package:getflutter/components/card/gf_card.dart");
  dart.setFieldSignature(gf_card.GFCard, () => ({
    __proto__: dart.getFields(gf_card.GFCard.__proto__),
    height: dart.finalFieldType(core.double),
    titlePosition: dart.finalFieldType(gf_position.GFPosition),
    color: dart.finalFieldType(ui.Color),
    elevation: dart.finalFieldType(core.double),
    shape: dart.finalFieldType(borders.ShapeBorder),
    borderOnForeground: dart.finalFieldType(core.bool),
    clipBehavior: dart.finalFieldType(ui.Clip),
    margin: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    semanticContainer: dart.finalFieldType(core.bool),
    title: dart.finalFieldType(gf_list_tile.GFListTile),
    content: dart.finalFieldType(framework.Widget),
    image: dart.finalFieldType(image.Image),
    imageOverlay: dart.finalFieldType(image_provider.ImageProvider),
    buttonBar: dart.finalFieldType(gf_button_bar.GFButtonBar),
    boxFit: dart.finalFieldType(box_fit.BoxFit),
    colorFilter: dart.finalFieldType(ui.ColorFilter),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    border: dart.finalFieldType(box_border.Border),
    gradient: dart.finalFieldType(gradient.LinearGradient)
  }));
  dart.defineLazy(gf_card.GFCard, {
    /*gf_card.GFCard._defaultElevation*/get _defaultElevation() {
      return 1;
    },
    /*gf_card.GFCard._defaultClipBehavior*/get _defaultClipBehavior() {
      return C611 || CT.C611;
    }
  });
  const _name$8 = dart.privateName(basic_types, "_name");
  let C612;
  const _name$9 = dart.privateName(wrap, "_name");
  let C613;
  let C614;
  let C615;
  let C616;
  let C617;
  let C620;
  let C621;
  let C622;
  let C623;
  let C624;
  let C625;
  let C626;
  let C627;
  let C628;
  let C619;
  let C618;
  let C631;
  let C632;
  let C630;
  let C629;
  const padding$2 = dart.privateName(gf_button_bar, "GFButtonBar.padding");
  const direction$ = dart.privateName(gf_button_bar, "GFButtonBar.direction");
  const alignment$1 = dart.privateName(gf_button_bar, "GFButtonBar.alignment");
  const spacing$ = dart.privateName(gf_button_bar, "GFButtonBar.spacing");
  const runAlignment$ = dart.privateName(gf_button_bar, "GFButtonBar.runAlignment");
  const runSpacing$ = dart.privateName(gf_button_bar, "GFButtonBar.runSpacing");
  const crossAxisAlignment$ = dart.privateName(gf_button_bar, "GFButtonBar.crossAxisAlignment");
  const textDirection$ = dart.privateName(gf_button_bar, "GFButtonBar.textDirection");
  const verticalDirection$ = dart.privateName(gf_button_bar, "GFButtonBar.verticalDirection");
  const children$0 = dart.privateName(gf_button_bar, "GFButtonBar.children");
  gf_button_bar.GFButtonBar = class GFButtonBar extends framework.StatelessWidget {
    get padding() {
      return this[padding$2];
    }
    set padding(value) {
      super.padding = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get spacing() {
      return this[spacing$];
    }
    set spacing(value) {
      super.spacing = value;
    }
    get runAlignment() {
      return this[runAlignment$];
    }
    set runAlignment(value) {
      super.runAlignment = value;
    }
    get runSpacing() {
      return this[runSpacing$];
    }
    set runSpacing(value) {
      super.runSpacing = value;
    }
    get crossAxisAlignment() {
      return this[crossAxisAlignment$];
    }
    set crossAxisAlignment(value) {
      super.crossAxisAlignment = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get verticalDirection() {
      return this[verticalDirection$];
    }
    set verticalDirection(value) {
      super.verticalDirection = value;
    }
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
    build(context) {
      return new basic.Padding.new({padding: this.padding, child: new basic.Wrap.new({direction: this.direction, alignment: this.alignment, spacing: this.spacing, runAlignment: this.runAlignment, runSpacing: this.runSpacing, crossAxisAlignment: this.crossAxisAlignment, textDirection: this.textDirection, verticalDirection: this.verticalDirection, children: this.children[$map](framework.Widget, dart.fn(child => child, WidgetToWidget()))[$toList](), $creationLocationd_0dea112b090073317d4: C618 || CT.C618}), $creationLocationd_0dea112b090073317d4: C629 || CT.C629});
    }
  };
  (gf_button_bar.GFButtonBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let direction = opts && 'direction' in opts ? opts.direction : C612 || CT.C612;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C613 || CT.C613;
    let spacing = opts && 'spacing' in opts ? opts.spacing : 8;
    let runAlignment = opts && 'runAlignment' in opts ? opts.runAlignment : C614 || CT.C614;
    let runSpacing = opts && 'runSpacing' in opts ? opts.runSpacing : 0;
    let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C615 || CT.C615;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C616 || CT.C616;
    let children = opts && 'children' in opts ? opts.children : C617 || CT.C617;
    let padding = opts && 'padding' in opts ? opts.padding : C205 || CT.C205;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[direction$] = direction;
    this[alignment$1] = alignment;
    this[spacing$] = spacing;
    this[runAlignment$] = runAlignment;
    this[runSpacing$] = runSpacing;
    this[crossAxisAlignment$] = crossAxisAlignment;
    this[textDirection$] = textDirection;
    this[verticalDirection$] = verticalDirection;
    this[children$0] = children;
    this[padding$2] = padding;
    gf_button_bar.GFButtonBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_button_bar.GFButtonBar.prototype;
  dart.addTypeTests(gf_button_bar.GFButtonBar);
  dart.setMethodSignature(gf_button_bar.GFButtonBar, () => ({
    __proto__: dart.getMethods(gf_button_bar.GFButtonBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_button_bar.GFButtonBar, "package:getflutter/components/button/gf_button_bar.dart");
  dart.setFieldSignature(gf_button_bar.GFButtonBar, () => ({
    __proto__: dart.getFields(gf_button_bar.GFButtonBar.__proto__),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    direction: dart.finalFieldType(basic_types.Axis),
    alignment: dart.finalFieldType(wrap.WrapAlignment),
    spacing: dart.finalFieldType(core.double),
    runAlignment: dart.finalFieldType(wrap.WrapAlignment),
    runSpacing: dart.finalFieldType(core.double),
    crossAxisAlignment: dart.finalFieldType(wrap.WrapCrossAlignment),
    textDirection: dart.finalFieldType(ui.TextDirection),
    verticalDirection: dart.finalFieldType(basic_types.VerticalDirection),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C633;
  let C634;
  const _name$10 = dart.privateName(gf_button_shape, "_name");
  let C635;
  const _name$11 = dart.privateName(gf_position, "_name");
  let C636;
  let C639;
  let C640;
  let C641;
  let C642;
  let C643;
  let C644;
  let C645;
  let C646;
  let C647;
  let C648;
  let C649;
  let C650;
  let C651;
  let C652;
  let C653;
  let C654;
  let C655;
  let C656;
  let C657;
  let C658;
  let C659;
  let C660;
  let C661;
  let C662;
  let C663;
  let C664;
  let C665;
  let C666;
  let C667;
  let C668;
  let C669;
  let C670;
  let C671;
  let C672;
  let C638;
  let C637;
  const onPressed$0 = dart.privateName(gf_button, "GFButton.onPressed");
  const onHighlightChanged$ = dart.privateName(gf_button, "GFButton.onHighlightChanged");
  const textStyle$0 = dart.privateName(gf_button, "GFButton.textStyle");
  const borderSide$0 = dart.privateName(gf_button, "GFButton.borderSide");
  const boxShadow$0 = dart.privateName(gf_button, "GFButton.boxShadow");
  const focusColor$0 = dart.privateName(gf_button, "GFButton.focusColor");
  const hoverColor$0 = dart.privateName(gf_button, "GFButton.hoverColor");
  const highlightColor$0 = dart.privateName(gf_button, "GFButton.highlightColor");
  const splashColor$0 = dart.privateName(gf_button, "GFButton.splashColor");
  const elevation$0 = dart.privateName(gf_button, "GFButton.elevation");
  const hoverElevation$ = dart.privateName(gf_button, "GFButton.hoverElevation");
  const focusElevation$ = dart.privateName(gf_button, "GFButton.focusElevation");
  const highlightElevation$ = dart.privateName(gf_button, "GFButton.highlightElevation");
  const disabledElevation$ = dart.privateName(gf_button, "GFButton.disabledElevation");
  const padding$3 = dart.privateName(gf_button, "GFButton.padding");
  const constraints$ = dart.privateName(gf_button, "GFButton.constraints");
  const borderShape$0 = dart.privateName(gf_button, "GFButton.borderShape");
  const animationDuration$0 = dart.privateName(gf_button, "GFButton.animationDuration");
  const child$3 = dart.privateName(gf_button, "GFButton.child");
  const materialTapTargetSize$ = dart.privateName(gf_button, "GFButton.materialTapTargetSize");
  const focusNode$0 = dart.privateName(gf_button, "GFButton.focusNode");
  const autofocus$0 = dart.privateName(gf_button, "GFButton.autofocus");
  const clipBehavior$0 = dart.privateName(gf_button, "GFButton.clipBehavior");
  const type$3 = dart.privateName(gf_button, "GFButton.type");
  const shape$3 = dart.privateName(gf_button, "GFButton.shape");
  const color$2 = dart.privateName(gf_button, "GFButton.color");
  const disabledColor$0 = dart.privateName(gf_button, "GFButton.disabledColor");
  const textColor$0 = dart.privateName(gf_button, "GFButton.textColor");
  const disabledTextColor$ = dart.privateName(gf_button, "GFButton.disabledTextColor");
  const size$0 = dart.privateName(gf_button, "GFButton.size");
  const text$1 = dart.privateName(gf_button, "GFButton.text");
  const icon$2 = dart.privateName(gf_button, "GFButton.icon");
  const position$ = dart.privateName(gf_button, "GFButton.position");
  const blockButton$ = dart.privateName(gf_button, "GFButton.blockButton");
  const fullWidthButton$ = dart.privateName(gf_button, "GFButton.fullWidthButton");
  const buttonBoxShadow$0 = dart.privateName(gf_button, "GFButton.buttonBoxShadow");
  const colorScheme$ = dart.privateName(gf_button, "GFButton.colorScheme");
  const enableFeedback$ = dart.privateName(gf_button, "GFButton.enableFeedback");
  const onLongPress$ = dart.privateName(gf_button, "GFButton.onLongPress");
  gf_button.GFButton = class GFButton extends framework.StatefulWidget {
    get onPressed() {
      return this[onPressed$0];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get onHighlightChanged() {
      return this[onHighlightChanged$];
    }
    set onHighlightChanged(value) {
      super.onHighlightChanged = value;
    }
    get textStyle() {
      return this[textStyle$0];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get borderSide() {
      return this[borderSide$0];
    }
    set borderSide(value) {
      super.borderSide = value;
    }
    get boxShadow() {
      return this[boxShadow$0];
    }
    set boxShadow(value) {
      super.boxShadow = value;
    }
    get focusColor() {
      return this[focusColor$0];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$0];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get highlightColor() {
      return this[highlightColor$0];
    }
    set highlightColor(value) {
      super.highlightColor = value;
    }
    get splashColor() {
      return this[splashColor$0];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get elevation() {
      return this[elevation$0];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get hoverElevation() {
      return this[hoverElevation$];
    }
    set hoverElevation(value) {
      super.hoverElevation = value;
    }
    get focusElevation() {
      return this[focusElevation$];
    }
    set focusElevation(value) {
      super.focusElevation = value;
    }
    get highlightElevation() {
      return this[highlightElevation$];
    }
    set highlightElevation(value) {
      super.highlightElevation = value;
    }
    get disabledElevation() {
      return this[disabledElevation$];
    }
    set disabledElevation(value) {
      super.disabledElevation = value;
    }
    get padding() {
      return this[padding$3];
    }
    set padding(value) {
      super.padding = value;
    }
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
    get borderShape() {
      return this[borderShape$0];
    }
    set borderShape(value) {
      super.borderShape = value;
    }
    get animationDuration() {
      return this[animationDuration$0];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get child() {
      return this[child$3];
    }
    set child(value) {
      super.child = value;
    }
    get materialTapTargetSize() {
      return this[materialTapTargetSize$];
    }
    set materialTapTargetSize(value) {
      super.materialTapTargetSize = value;
    }
    get focusNode() {
      return this[focusNode$0];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get autofocus() {
      return this[autofocus$0];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get type() {
      return this[type$3];
    }
    set type(value) {
      super.type = value;
    }
    get shape() {
      return this[shape$3];
    }
    set shape(value) {
      super.shape = value;
    }
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$0];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get textColor() {
      return this[textColor$0];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get disabledTextColor() {
      return this[disabledTextColor$];
    }
    set disabledTextColor(value) {
      super.disabledTextColor = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get text() {
      return this[text$1];
    }
    set text(value) {
      super.text = value;
    }
    get icon() {
      return this[icon$2];
    }
    set icon(value) {
      super.icon = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get blockButton() {
      return this[blockButton$];
    }
    set blockButton(value) {
      super.blockButton = value;
    }
    get fullWidthButton() {
      return this[fullWidthButton$];
    }
    set fullWidthButton(value) {
      super.fullWidthButton = value;
    }
    get buttonBoxShadow() {
      return this[buttonBoxShadow$0];
    }
    set buttonBoxShadow(value) {
      super.buttonBoxShadow = value;
    }
    get colorScheme() {
      return this[colorScheme$];
    }
    set colorScheme(value) {
      super.colorScheme = value;
    }
    get enableFeedback() {
      return this[enableFeedback$];
    }
    set enableFeedback(value) {
      super.enableFeedback = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get enabled() {
      return this.onPressed != null;
    }
    createState() {
      return new gf_button._GFButtonState.new();
    }
  };
  (gf_button.GFButton.new = function(opts) {
    let t1;
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onHighlightChanged = opts && 'onHighlightChanged' in opts ? opts.onHighlightChanged : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
    let buttonBoxShadow = opts && 'buttonBoxShadow' in opts ? opts.buttonBoxShadow : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : 4;
    let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : 4;
    let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : 1;
    let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : 0;
    let padding = opts && 'padding' in opts ? opts.padding : C633 || CT.C633;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    let borderShape = opts && 'borderShape' in opts ? opts.borderShape : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : C634 || CT.C634;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C611 || CT.C611;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let type = opts && 'type' in opts ? opts.type : C516 || CT.C516;
    let shape = opts && 'shape' in opts ? opts.shape : C635 || CT.C635;
    let color = opts && 'color' in opts ? opts.color : C518 || CT.C518;
    let textColor = opts && 'textColor' in opts ? opts.textColor : null;
    let position = opts && 'position' in opts ? opts.position : C636 || CT.C636;
    let size = opts && 'size' in opts ? opts.size : C519 || CT.C519;
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let blockButton = opts && 'blockButton' in opts ? opts.blockButton : null;
    let fullWidthButton = opts && 'fullWidthButton' in opts ? opts.fullWidthButton : null;
    let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
    let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let disabledTextColor = opts && 'disabledTextColor' in opts ? opts.disabledTextColor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$0] = onPressed;
    this[onHighlightChanged$] = onHighlightChanged;
    this[textStyle$0] = textStyle;
    this[boxShadow$0] = boxShadow;
    this[buttonBoxShadow$0] = buttonBoxShadow;
    this[focusColor$0] = focusColor;
    this[hoverColor$0] = hoverColor;
    this[highlightColor$0] = highlightColor;
    this[splashColor$0] = splashColor;
    this[elevation$0] = elevation;
    this[focusElevation$] = focusElevation;
    this[hoverElevation$] = hoverElevation;
    this[highlightElevation$] = highlightElevation;
    this[disabledElevation$] = disabledElevation;
    this[padding$3] = padding;
    this[constraints$] = constraints;
    this[borderShape$0] = borderShape;
    this[animationDuration$0] = animationDuration;
    this[clipBehavior$0] = clipBehavior;
    this[focusNode$0] = focusNode;
    this[autofocus$0] = autofocus;
    this[child$3] = child;
    this[type$3] = type;
    this[shape$3] = shape;
    this[color$2] = color;
    this[textColor$0] = textColor;
    this[position$] = position;
    this[size$0] = size;
    this[borderSide$0] = borderSide;
    this[text$1] = text;
    this[icon$2] = icon;
    this[blockButton$] = blockButton;
    this[fullWidthButton$] = fullWidthButton;
    this[colorScheme$] = colorScheme;
    this[enableFeedback$] = enableFeedback;
    this[onLongPress$] = onLongPress;
    this[disabledColor$0] = disabledColor;
    this[disabledTextColor$] = disabledTextColor;
    this[materialTapTargetSize$] = (t1 = materialTapTargetSize, t1 == null ? theme_data.MaterialTapTargetSize.padded : t1);
    if (!(shape != null)) dart.assertFailed("Button shape can not be null", "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 54, 16, "shape != null");
    if (!(focusElevation != null && dart.notNull(focusElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 56, 16, "focusElevation != null && focusElevation >= 0.0");
    if (!(hoverElevation != null && dart.notNull(hoverElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 57, 16, "hoverElevation != null && hoverElevation >= 0.0");
    if (!(highlightElevation != null && dart.notNull(highlightElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 58, 16, "highlightElevation != null && highlightElevation >= 0.0");
    if (!(disabledElevation != null && dart.notNull(disabledElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 59, 16, "disabledElevation != null && disabledElevation >= 0.0");
    if (!(padding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 60, 16, "padding != null");
    if (!(animationDuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 61, 16, "animationDuration != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 62, 16, "clipBehavior != null");
    if (!(autofocus != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 63, 16, "autofocus != null");
    gf_button.GFButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_button.GFButton.prototype;
  dart.addTypeTests(gf_button.GFButton);
  dart.setMethodSignature(gf_button.GFButton, () => ({
    __proto__: dart.getMethods(gf_button.GFButton.__proto__),
    createState: dart.fnType(gf_button._GFButtonState, [])
  }));
  dart.setGetterSignature(gf_button.GFButton, () => ({
    __proto__: dart.getGetters(gf_button.GFButton.__proto__),
    enabled: core.bool
  }));
  dart.setLibraryUri(gf_button.GFButton, "package:getflutter/components/button/gf_button.dart");
  dart.setFieldSignature(gf_button.GFButton, () => ({
    __proto__: dart.getFields(gf_button.GFButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    onHighlightChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    borderSide: dart.finalFieldType(borders.BorderSide),
    boxShadow: dart.finalFieldType(box_shadow.BoxShadow),
    focusColor: dart.finalFieldType(dart.dynamic),
    hoverColor: dart.finalFieldType(dart.dynamic),
    highlightColor: dart.finalFieldType(dart.dynamic),
    splashColor: dart.finalFieldType(dart.dynamic),
    elevation: dart.finalFieldType(core.double),
    hoverElevation: dart.finalFieldType(core.double),
    focusElevation: dart.finalFieldType(core.double),
    highlightElevation: dart.finalFieldType(core.double),
    disabledElevation: dart.finalFieldType(core.double),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    constraints: dart.finalFieldType(box.BoxConstraints),
    borderShape: dart.finalFieldType(borders.ShapeBorder),
    animationDuration: dart.finalFieldType(core.Duration),
    child: dart.finalFieldType(framework.Widget),
    materialTapTargetSize: dart.finalFieldType(theme_data.MaterialTapTargetSize),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    autofocus: dart.finalFieldType(core.bool),
    clipBehavior: dart.finalFieldType(ui.Clip),
    type: dart.finalFieldType(gf_button_type.GFButtonType),
    shape: dart.finalFieldType(gf_button_shape.GFButtonShape),
    color: dart.finalFieldType(dart.dynamic),
    disabledColor: dart.finalFieldType(dart.dynamic),
    textColor: dart.finalFieldType(dart.dynamic),
    disabledTextColor: dart.finalFieldType(dart.dynamic),
    size: dart.finalFieldType(dart.dynamic),
    text: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(framework.Widget),
    position: dart.finalFieldType(gf_position.GFPosition),
    blockButton: dart.finalFieldType(core.bool),
    fullWidthButton: dart.finalFieldType(core.bool),
    buttonBoxShadow: dart.finalFieldType(core.bool),
    colorScheme: dart.finalFieldType(color_scheme.ColorScheme),
    enableFeedback: dart.finalFieldType(core.bool),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const onPressed$1 = dart.privateName(gf_social_button, "GFSocialButton.onPressed");
  const onHighlightChanged$0 = dart.privateName(gf_social_button, "GFSocialButton.onHighlightChanged");
  const textStyle$1 = dart.privateName(gf_social_button, "GFSocialButton.textStyle");
  const borderSide$1 = dart.privateName(gf_social_button, "GFSocialButton.borderSide");
  const boxShadow$1 = dart.privateName(gf_social_button, "GFSocialButton.boxShadow");
  const focusColor$1 = dart.privateName(gf_social_button, "GFSocialButton.focusColor");
  const hoverColor$1 = dart.privateName(gf_social_button, "GFSocialButton.hoverColor");
  const highlightColor$1 = dart.privateName(gf_social_button, "GFSocialButton.highlightColor");
  const splashColor$1 = dart.privateName(gf_social_button, "GFSocialButton.splashColor");
  const elevation$1 = dart.privateName(gf_social_button, "GFSocialButton.elevation");
  const hoverElevation$0 = dart.privateName(gf_social_button, "GFSocialButton.hoverElevation");
  const focusElevation$0 = dart.privateName(gf_social_button, "GFSocialButton.focusElevation");
  const highlightElevation$0 = dart.privateName(gf_social_button, "GFSocialButton.highlightElevation");
  const disabledElevation$0 = dart.privateName(gf_social_button, "GFSocialButton.disabledElevation");
  const padding$4 = dart.privateName(gf_social_button, "GFSocialButton.padding");
  const constraints$0 = dart.privateName(gf_social_button, "GFSocialButton.constraints");
  const borderShape$1 = dart.privateName(gf_social_button, "GFSocialButton.borderShape");
  const animationDuration$1 = dart.privateName(gf_social_button, "GFSocialButton.animationDuration");
  const child$4 = dart.privateName(gf_social_button, "GFSocialButton.child");
  const materialTapTargetSize$0 = dart.privateName(gf_social_button, "GFSocialButton.materialTapTargetSize");
  const focusNode$1 = dart.privateName(gf_social_button, "GFSocialButton.focusNode");
  const autofocus$1 = dart.privateName(gf_social_button, "GFSocialButton.autofocus");
  const clipBehavior$1 = dart.privateName(gf_social_button, "GFSocialButton.clipBehavior");
  const type$4 = dart.privateName(gf_social_button, "GFSocialButton.type");
  const shape$4 = dart.privateName(gf_social_button, "GFSocialButton.shape");
  const color$3 = dart.privateName(gf_social_button, "GFSocialButton.color");
  const disabledColor$1 = dart.privateName(gf_social_button, "GFSocialButton.disabledColor");
  const textColor$1 = dart.privateName(gf_social_button, "GFSocialButton.textColor");
  const disabledTextColor$0 = dart.privateName(gf_social_button, "GFSocialButton.disabledTextColor");
  const size$1 = dart.privateName(gf_social_button, "GFSocialButton.size");
  const text$2 = dart.privateName(gf_social_button, "GFSocialButton.text");
  const icon$3 = dart.privateName(gf_social_button, "GFSocialButton.icon");
  const position$0 = dart.privateName(gf_social_button, "GFSocialButton.position");
  const blockButton$0 = dart.privateName(gf_social_button, "GFSocialButton.blockButton");
  const fullWidthButton$0 = dart.privateName(gf_social_button, "GFSocialButton.fullWidthButton");
  const buttonBoxShadow$1 = dart.privateName(gf_social_button, "GFSocialButton.buttonBoxShadow");
  const colorScheme$0 = dart.privateName(gf_social_button, "GFSocialButton.colorScheme");
  const enableFeedback$0 = dart.privateName(gf_social_button, "GFSocialButton.enableFeedback");
  const onLongPress$0 = dart.privateName(gf_social_button, "GFSocialButton.onLongPress");
  gf_social_button.GFSocialButton = class GFSocialButton extends gf_button.GFButton {
    get onPressed() {
      return this[onPressed$1];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get onHighlightChanged() {
      return this[onHighlightChanged$0];
    }
    set onHighlightChanged(value) {
      super.onHighlightChanged = value;
    }
    get textStyle() {
      return this[textStyle$1];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get borderSide() {
      return this[borderSide$1];
    }
    set borderSide(value) {
      super.borderSide = value;
    }
    get boxShadow() {
      return this[boxShadow$1];
    }
    set boxShadow(value) {
      super.boxShadow = value;
    }
    get focusColor() {
      return this[focusColor$1];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$1];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get highlightColor() {
      return this[highlightColor$1];
    }
    set highlightColor(value) {
      super.highlightColor = value;
    }
    get splashColor() {
      return this[splashColor$1];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get elevation() {
      return this[elevation$1];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get hoverElevation() {
      return this[hoverElevation$0];
    }
    set hoverElevation(value) {
      super.hoverElevation = value;
    }
    get focusElevation() {
      return this[focusElevation$0];
    }
    set focusElevation(value) {
      super.focusElevation = value;
    }
    get highlightElevation() {
      return this[highlightElevation$0];
    }
    set highlightElevation(value) {
      super.highlightElevation = value;
    }
    get disabledElevation() {
      return this[disabledElevation$0];
    }
    set disabledElevation(value) {
      super.disabledElevation = value;
    }
    get padding() {
      return this[padding$4];
    }
    set padding(value) {
      super.padding = value;
    }
    get constraints() {
      return this[constraints$0];
    }
    set constraints(value) {
      super.constraints = value;
    }
    get borderShape() {
      return this[borderShape$1];
    }
    set borderShape(value) {
      super.borderShape = value;
    }
    get animationDuration() {
      return this[animationDuration$1];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get child() {
      return this[child$4];
    }
    set child(value) {
      super.child = value;
    }
    get materialTapTargetSize() {
      return this[materialTapTargetSize$0];
    }
    set materialTapTargetSize(value) {
      super.materialTapTargetSize = value;
    }
    get focusNode() {
      return this[focusNode$1];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get autofocus() {
      return this[autofocus$1];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get clipBehavior() {
      return this[clipBehavior$1];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get type() {
      return this[type$4];
    }
    set type(value) {
      super.type = value;
    }
    get shape() {
      return this[shape$4];
    }
    set shape(value) {
      super.shape = value;
    }
    get color() {
      return this[color$3];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$1];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get textColor() {
      return this[textColor$1];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get disabledTextColor() {
      return this[disabledTextColor$0];
    }
    set disabledTextColor(value) {
      super.disabledTextColor = value;
    }
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get text() {
      return this[text$2];
    }
    set text(value) {
      super.text = value;
    }
    get icon() {
      return this[icon$3];
    }
    set icon(value) {
      super.icon = value;
    }
    get position() {
      return this[position$0];
    }
    set position(value) {
      super.position = value;
    }
    get blockButton() {
      return this[blockButton$0];
    }
    set blockButton(value) {
      super.blockButton = value;
    }
    get fullWidthButton() {
      return this[fullWidthButton$0];
    }
    set fullWidthButton(value) {
      super.fullWidthButton = value;
    }
    get buttonBoxShadow() {
      return this[buttonBoxShadow$1];
    }
    set buttonBoxShadow(value) {
      super.buttonBoxShadow = value;
    }
    get colorScheme() {
      return this[colorScheme$0];
    }
    set colorScheme(value) {
      super.colorScheme = value;
    }
    get enableFeedback() {
      return this[enableFeedback$0];
    }
    set enableFeedback(value) {
      super.enableFeedback = value;
    }
    get onLongPress() {
      return this[onLongPress$0];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get enabled() {
      return this.onPressed != null;
    }
    build(context) {
      return new gf_button.GFButton.new({onPressed: this.onPressed, onHighlightChanged: this.onHighlightChanged, textStyle: this.textStyle, boxShadow: this.boxShadow, buttonBoxShadow: this.buttonBoxShadow, focusColor: this.focusColor, hoverColor: this.hoverColor, highlightColor: this.highlightColor, splashColor: this.splashColor, elevation: this.elevation, focusElevation: this.focusElevation, hoverElevation: this.hoverElevation, highlightElevation: this.highlightElevation, disabledElevation: this.disabledElevation, constraints: this.constraints, borderShape: this.borderShape, animationDuration: this.animationDuration, clipBehavior: this.clipBehavior, focusNode: this.focusNode, autofocus: this.autofocus, child: this.child, type: gf_button_type.GFButtonType.solid, shape: gf_button_shape.GFButtonShape.standard, color: gf_color.GFColor.primary, textColor: this.textColor, position: gf_position.GFPosition.start, size: gf_size.GFSize.medium, borderSide: this.borderSide, text: this.text, icon: this.icon, blockButton: this.blockButton, fullWidthButton: this.fullWidthButton, disabledColor: this.disabledTextColor, disabledTextColor: this.disabledColor, $creationLocationd_0dea112b090073317d4: C637 || CT.C637});
    }
  };
  (gf_social_button.GFSocialButton.new = function(opts) {
    let t1;
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onHighlightChanged = opts && 'onHighlightChanged' in opts ? opts.onHighlightChanged : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
    let buttonBoxShadow = opts && 'buttonBoxShadow' in opts ? opts.buttonBoxShadow : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : 4;
    let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : 4;
    let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : 1;
    let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : 0;
    let padding = opts && 'padding' in opts ? opts.padding : C633 || CT.C633;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    let borderShape = opts && 'borderShape' in opts ? opts.borderShape : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : C634 || CT.C634;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C611 || CT.C611;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let type = opts && 'type' in opts ? opts.type : C516 || CT.C516;
    let shape = opts && 'shape' in opts ? opts.shape : C635 || CT.C635;
    let color = opts && 'color' in opts ? opts.color : C518 || CT.C518;
    let textColor = opts && 'textColor' in opts ? opts.textColor : null;
    let position = opts && 'position' in opts ? opts.position : C636 || CT.C636;
    let size = opts && 'size' in opts ? opts.size : C519 || CT.C519;
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let blockButton = opts && 'blockButton' in opts ? opts.blockButton : null;
    let fullWidthButton = opts && 'fullWidthButton' in opts ? opts.fullWidthButton : null;
    let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
    let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let disabledTextColor = opts && 'disabledTextColor' in opts ? opts.disabledTextColor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$1] = onPressed;
    this[onHighlightChanged$0] = onHighlightChanged;
    this[textStyle$1] = textStyle;
    this[boxShadow$1] = boxShadow;
    this[buttonBoxShadow$1] = buttonBoxShadow;
    this[focusColor$1] = focusColor;
    this[hoverColor$1] = hoverColor;
    this[highlightColor$1] = highlightColor;
    this[splashColor$1] = splashColor;
    this[elevation$1] = elevation;
    this[focusElevation$0] = focusElevation;
    this[hoverElevation$0] = hoverElevation;
    this[highlightElevation$0] = highlightElevation;
    this[disabledElevation$0] = disabledElevation;
    this[padding$4] = padding;
    this[constraints$0] = constraints;
    this[borderShape$1] = borderShape;
    this[animationDuration$1] = animationDuration;
    this[clipBehavior$1] = clipBehavior;
    this[focusNode$1] = focusNode;
    this[autofocus$1] = autofocus;
    this[child$4] = child;
    this[type$4] = type;
    this[shape$4] = shape;
    this[color$3] = color;
    this[textColor$1] = textColor;
    this[position$0] = position;
    this[size$1] = size;
    this[borderSide$1] = borderSide;
    this[text$2] = text;
    this[icon$3] = icon;
    this[blockButton$0] = blockButton;
    this[fullWidthButton$0] = fullWidthButton;
    this[colorScheme$0] = colorScheme;
    this[enableFeedback$0] = enableFeedback;
    this[onLongPress$0] = onLongPress;
    this[disabledColor$1] = disabledColor;
    this[disabledTextColor$0] = disabledTextColor;
    this[materialTapTargetSize$0] = (t1 = materialTapTargetSize, t1 == null ? theme_data.MaterialTapTargetSize.padded : t1);
    if (!(shape != null)) dart.assertFailed("Button shape can not be null", "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 52, 16, "shape != null");
    if (!(focusElevation != null && dart.notNull(focusElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 54, 16, "focusElevation != null && focusElevation >= 0.0");
    if (!(hoverElevation != null && dart.notNull(hoverElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 55, 16, "hoverElevation != null && hoverElevation >= 0.0");
    if (!(highlightElevation != null && dart.notNull(highlightElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 56, 16, "highlightElevation != null && highlightElevation >= 0.0");
    if (!(disabledElevation != null && dart.notNull(disabledElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 57, 16, "disabledElevation != null && disabledElevation >= 0.0");
    if (!(padding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 58, 16, "padding != null");
    if (!(animationDuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 59, 16, "animationDuration != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 60, 16, "clipBehavior != null");
    if (!(autofocus != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_social_button.dart", 61, 16, "autofocus != null");
    gf_social_button.GFSocialButton.__proto__.new.call(this, {key: key, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_social_button.GFSocialButton.prototype;
  dart.addTypeTests(gf_social_button.GFSocialButton);
  dart.setMethodSignature(gf_social_button.GFSocialButton, () => ({
    __proto__: dart.getMethods(gf_social_button.GFSocialButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_social_button.GFSocialButton, "package:getflutter/components/button/gf_social_button.dart");
  dart.setFieldSignature(gf_social_button.GFSocialButton, () => ({
    __proto__: dart.getFields(gf_social_button.GFSocialButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    onHighlightChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    borderSide: dart.finalFieldType(borders.BorderSide),
    boxShadow: dart.finalFieldType(box_shadow.BoxShadow),
    focusColor: dart.finalFieldType(dart.dynamic),
    hoverColor: dart.finalFieldType(dart.dynamic),
    highlightColor: dart.finalFieldType(dart.dynamic),
    splashColor: dart.finalFieldType(dart.dynamic),
    elevation: dart.finalFieldType(core.double),
    hoverElevation: dart.finalFieldType(core.double),
    focusElevation: dart.finalFieldType(core.double),
    highlightElevation: dart.finalFieldType(core.double),
    disabledElevation: dart.finalFieldType(core.double),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    constraints: dart.finalFieldType(box.BoxConstraints),
    borderShape: dart.finalFieldType(borders.ShapeBorder),
    animationDuration: dart.finalFieldType(core.Duration),
    child: dart.finalFieldType(framework.Widget),
    materialTapTargetSize: dart.finalFieldType(theme_data.MaterialTapTargetSize),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    autofocus: dart.finalFieldType(core.bool),
    clipBehavior: dart.finalFieldType(ui.Clip),
    type: dart.finalFieldType(gf_button_type.GFButtonType),
    shape: dart.finalFieldType(gf_button_shape.GFButtonShape),
    color: dart.finalFieldType(dart.dynamic),
    disabledColor: dart.finalFieldType(dart.dynamic),
    textColor: dart.finalFieldType(dart.dynamic),
    disabledTextColor: dart.finalFieldType(dart.dynamic),
    size: dart.finalFieldType(dart.dynamic),
    text: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(framework.Widget),
    position: dart.finalFieldType(gf_position.GFPosition),
    blockButton: dart.finalFieldType(core.bool),
    fullWidthButton: dart.finalFieldType(core.bool),
    buttonBoxShadow: dart.finalFieldType(core.bool),
    colorScheme: dart.finalFieldType(color_scheme.ColorScheme),
    enableFeedback: dart.finalFieldType(core.bool),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const _states = dart.privateName(gf_button, "_states");
  let C675;
  let C674;
  let C673;
  const _updateState = dart.privateName(gf_button, "_updateState");
  const _hovered = dart.privateName(gf_button, "_hovered");
  const _focused = dart.privateName(gf_button, "_focused");
  const _pressed = dart.privateName(gf_button, "_pressed");
  const _disabled = dart.privateName(gf_button, "_disabled");
  const _handleHighlightChanged = dart.privateName(gf_button, "_handleHighlightChanged");
  const _handleHoveredChanged = dart.privateName(gf_button, "_handleHoveredChanged");
  const _handleFocusedChanged = dart.privateName(gf_button, "_handleFocusedChanged");
  const _effectiveElevation = dart.privateName(gf_button, "_effectiveElevation");
  let C676;
  const _name$12 = dart.privateName(theme_data, "_name");
  let C677;
  let C678;
  let C679;
  let C680;
  let C681;
  let C684;
  let C685;
  let C683;
  let C682;
  let C688;
  let C689;
  let C687;
  let C686;
  let C692;
  let C693;
  let C694;
  let C691;
  let C690;
  let C697;
  let C698;
  let C699;
  let C700;
  let C696;
  let C695;
  let C703;
  let C704;
  let C705;
  let C706;
  let C707;
  let C708;
  let C709;
  let C710;
  let C711;
  let C712;
  let C713;
  let C714;
  let C715;
  let C716;
  let C717;
  let C702;
  let C701;
  let C720;
  let C721;
  let C722;
  let C723;
  let C724;
  let C725;
  let C726;
  let C727;
  let C719;
  let C718;
  let C730;
  let C731;
  let C732;
  let C729;
  let C728;
  let C735;
  let C736;
  let C737;
  let C738;
  let C734;
  let C733;
  let C741;
  let C742;
  let C740;
  let C739;
  let C745;
  let C746;
  let C747;
  let C748;
  let C744;
  let C743;
  gf_button._GFButtonState = class _GFButtonState extends framework.State$(gf_button.GFButton) {
    initState() {
      this.color = gf_color.GFColors.getGFColor(this.widget.color);
      this.textColor = gf_color.GFColors.getGFColor(this.widget.textColor);
      this.child = this.widget.text != null ? new text.Text.new(this.widget.text, {$creationLocationd_0dea112b090073317d4: C673 || CT.C673}) : this.widget.child;
      this.icon = this.widget.icon;
      this.onPressed = this.widget.onPressed;
      this.type = this.widget.type;
      this.shape = this.widget.shape;
      this.size = gf_size.GFSizesClass.getGFSize(this.widget.size);
      this.position = this.widget.position;
      this.disabledColor = gf_color.GFColors.getGFColor(this.widget.disabledColor);
      this.disabledTextColor = gf_color.GFColors.getGFColor(this.widget.disabledTextColor);
      this[_updateState](material_state.MaterialState.disabled, !dart.test(this.widget.enabled));
      super.initState();
    }
    get [_hovered]() {
      return this[_states].contains(material_state.MaterialState.hovered);
    }
    get [_focused]() {
      return this[_states].contains(material_state.MaterialState.focused);
    }
    get [_pressed]() {
      return this[_states].contains(material_state.MaterialState.pressed);
    }
    get [_disabled]() {
      return this[_states].contains(material_state.MaterialState.disabled);
    }
    buttonWidth() {
      if (dart.equals(this.widget.blockButton, true)) {
        return dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.88;
      } else if (dart.equals(this.widget.fullWidthButton, true)) {
        return media_query.MediaQuery.of(this.context).size.width;
      } else {
        return null;
      }
    }
    [_updateState](state, value) {
      dart.test(value) ? this[_states].add(state) : this[_states].remove(state);
    }
    [_handleHighlightChanged](value) {
      if (!dart.equals(this[_pressed], value)) {
        this.setState(dart.fn(() => {
          this[_updateState](material_state.MaterialState.pressed, value);
          if (this.widget.onHighlightChanged != null) {
            this.widget.onHighlightChanged(value);
          }
        }, VoidToNull()));
      }
    }
    [_handleHoveredChanged](value) {
      if (!dart.equals(this[_hovered], value)) {
        this.setState(dart.fn(() => {
          this[_updateState](material_state.MaterialState.hovered, value);
        }, VoidToNull()));
      }
    }
    [_handleFocusedChanged](value) {
      if (!dart.equals(this[_focused], value)) {
        this.setState(dart.fn(() => {
          this[_updateState](material_state.MaterialState.focused, value);
        }, VoidToNull()));
      }
    }
    didUpdateWidget(oldWidget) {
      gf_button.GFButton._check(oldWidget);
      this[_updateState](material_state.MaterialState.disabled, !dart.test(this.widget.enabled));
      if (dart.test(this[_disabled]) && dart.test(this[_pressed])) {
        this[_handleHighlightChanged](false);
      }
      super.didUpdateWidget(oldWidget);
    }
    get [_effectiveElevation]() {
      if (dart.test(this[_disabled])) {
        return this.widget.disabledElevation;
      }
      if (dart.test(this[_pressed])) {
        return this.widget.highlightElevation;
      }
      if (dart.test(this[_hovered])) {
        return this.widget.hoverElevation;
      }
      if (dart.test(this[_focused])) {
        return this.widget.focusElevation;
      }
      return this.widget.elevation;
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2;
      let shapeBorderType = null;
      const getBorderColor = () => {
        if (dart.test(this.widget.enabled)) {
          let fillColor = this.color == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : this.color;
          if (fillColor != null) {
            return fillColor;
          }
        } else {
          if (this.disabledColor != null) {
            return this.disabledColor;
          } else {
            return this.color.withOpacity(0.48);
          }
        }
        return this.color == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : this.color;
      };
      dart.fn(getBorderColor, VoidToColor());
      const getDisabledFillColor = () => {
        if (dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x)) {
          return colors.Colors.transparent;
        }
        if (this.disabledColor != null) {
          return this.disabledColor;
        } else {
          return this.color.withOpacity(0.48);
        }
      };
      dart.fn(getDisabledFillColor, VoidToColor());
      const getColor = () => {
        if (dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x)) {
          return colors.Colors.transparent;
        }
        let fillColor = this.color == null ? gf_color.GFColors.getGFColor(gf_color.GFColor.primary) : this.color;
        return fillColor;
      };
      dart.fn(getColor, VoidToColor());
      const getDisabledTextColor = () => {
        if (this.disabledTextColor != null) {
          return this.disabledTextColor;
        } else if (dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) || dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent)) {
          return this.color;
        } else {
          return gf_color.GFColors.getGFColor(gf_color.GFColor.dark);
        }
      };
      dart.fn(getDisabledTextColor, VoidToColor());
      const getTextColor = () => {
        if (dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) || dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent)) {
          return dart.test(this.widget.enabled) ? this.textColor == null ? dart.equals(this.color, gf_color.GFColors.getGFColor(gf_color.GFColor.transparent)) ? gf_color.GFColors.getGFColor(gf_color.GFColor.dark) : this.color : this.textColor : getDisabledTextColor();
        }
        if (this.textColor == null) {
          if (dart.equals(this.color, gf_color.GFColors.getGFColor(gf_color.GFColor.transparent))) {
            return gf_color.GFColors.getGFColor(gf_color.GFColor.dark);
          } else {
            return gf_color.GFColors.getGFColor(gf_color.GFColor.white);
          }
        } else {
          return this.textColor;
        }
      };
      dart.fn(getTextColor, VoidToColor());
      let effectiveTextColor = material_state.MaterialStateProperty.resolveAs(ui.Color, (t1 = this.widget.textStyle, t1 == null ? null : t1.color), this[_states]);
      let themeColor = theme$.Theme.of(context).colorScheme.onSurface.withOpacity(0.12);
      let outlineBorder = new borders.BorderSide.new({color: this.color == null ? themeColor : this.widget.borderSide == null ? getBorderColor() : this.widget.borderSide.color, width: (t1$ = this.widget.borderSide, t1$ == null ? null : t1$.width) == null ? dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) ? 2.0 : 1.0 : (t1$0 = this.widget.borderSide, t1$0 == null ? null : t1$0.width)});
      let minSize = null;
      switch (this.widget.materialTapTargetSize) {
        case C677 || CT.C677:
        {
          minSize = C676 || CT.C676;
          break;
        }
        case C678 || CT.C678:
        {
          minSize = ui.Size.zero;
          break;
        }
        default:
        {
          minSize = ui.Size.zero;
          break;
        }
      }
      let shapeBorder = dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) ? outlineBorder : this.widget.borderSide != null ? this.widget.borderSide : new borders.BorderSide.new({color: this.color == null ? themeColor : getBorderColor(), width: 0.0});
      if (dart.equals(this.shape, gf_button_shape.GFButtonShape.pills)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(50.0), side: shapeBorder});
      } else if (dart.equals(this.shape, gf_button_shape.GFButtonShape.square)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(0.0), side: shapeBorder});
      } else if (dart.equals(this.shape, gf_button_shape.GFButtonShape.standard)) {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(3.0), side: shapeBorder});
      } else {
        shapeBorderType = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(50.0), side: shapeBorder});
      }
      const getBoxShadow = () => {
        if (!dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent)) {
          if (this.widget.boxShadow == null && !dart.equals(this.widget.buttonBoxShadow, true)) {
            return null;
          } else {
            return new box_decoration.BoxDecoration.new({color: dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline) || dart.equals(this.widget.type, gf_button_type.GFButtonType.outline2x) ? colors.Colors.transparent : this.color, borderRadius: dart.equals(this.widget.shape, gf_button_shape.GFButtonShape.pills) ? new border_radius.BorderRadius.circular(50.0) : dart.equals(this.widget.shape, gf_button_shape.GFButtonShape.standard) ? new border_radius.BorderRadius.circular(5.0) : border_radius.BorderRadius.zero, boxShadow: JSArrayOfBoxShadow().of([this.widget.boxShadow == null && dart.equals(this.widget.buttonBoxShadow, true) ? new box_shadow.BoxShadow.new({color: themeColor, blurRadius: 1.5, spreadRadius: 2.0, offset: ui.Offset.zero}) : this.widget.boxShadow != null ? this.widget.boxShadow : new box_shadow.BoxShadow.new({color: theme$.Theme.of(context).canvasColor, blurRadius: 0.0, spreadRadius: 0.0, offset: ui.Offset.zero})])});
          }
        }
        return null;
      };
      dart.fn(getBoxShadow, VoidToBoxDecoration());
      const getTextStyle = () => {
        if (dart.equals(this.widget.size, gf_size.GFSize.small)) {
          return new text_style.TextStyle.new({color: dart.test(this.widget.enabled) ? getTextColor() : getDisabledTextColor(), fontSize: 12.0});
        } else if (dart.equals(this.widget.size, gf_size.GFSize.medium)) {
          return new text_style.TextStyle.new({color: dart.test(this.widget.enabled) ? getTextColor() : getDisabledTextColor(), fontSize: 13.0, fontWeight: ui.FontWeight.w400});
        } else if (dart.equals(this.widget.size, gf_size.GFSize.large)) {
          return new text_style.TextStyle.new({color: dart.test(this.widget.enabled) ? getTextColor() : getDisabledTextColor(), fontSize: 14.0, fontWeight: ui.FontWeight.w500});
        }
        return new text_style.TextStyle.new({color: dart.test(this.widget.enabled) ? getTextColor() : getDisabledTextColor(), fontSize: 13.0, fontWeight: ui.FontWeight.w400});
      };
      dart.fn(getTextStyle, VoidToTextStyle());
      let result = new container.Container.new({constraints: this.icon == null ? C679 || CT.C679 : C680 || CT.C680, decoration: dart.equals(this.widget.type, gf_button_type.GFButtonType.solid) ? getBoxShadow() : null, child: new material.Material.new({elevation: this[_effectiveElevation], textStyle: this.widget.textStyle == null ? getTextStyle() : this.widget.textStyle, shape: dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) ? null : (t1$1 = this.widget.borderShape, t1$1 == null ? shapeBorderType : t1$1), color: dart.test(this.widget.enabled) ? getColor() : getDisabledFillColor(), type: this.color == null ? material.MaterialType.transparency : material.MaterialType.button, animationDuration: this.widget.animationDuration, clipBehavior: this.widget.clipBehavior, child: new ink_well.InkWell.new({focusNode: this.widget.focusNode, canRequestFocus: this.widget.enabled, onFocusChange: dart.bind(this, _handleFocusedChanged), autofocus: this.widget.autofocus, onHighlightChanged: dart.bind(this, _handleHighlightChanged), onHover: dart.bind(this, _handleHoveredChanged), onTap: this.widget.onPressed, onLongPress: this.widget.onLongPress, enableFeedback: this.widget.enableFeedback, splashColor: gf_color.GFColors.getGFColor(this.widget.splashColor), highlightColor: gf_color.GFColors.getGFColor(this.widget.highlightColor), focusColor: gf_color.GFColors.getGFColor(this.widget.focusColor), hoverColor: gf_color.GFColors.getGFColor(this.widget.hoverColor), customBorder: dart.equals(this.widget.type, gf_button_type.GFButtonType.transparent) ? null : (t1$2 = this.widget.borderShape, t1$2 == null ? shapeBorderType : t1$2), child: icon_theme.IconTheme.merge({data: new icon_theme_data.IconThemeData.new({color: effectiveTextColor}), child: new container.Container.new({height: this.size, width: this.buttonWidth(), padding: this.widget.padding, child: new basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: this.icon != null && (dart.equals(this.position, gf_position.GFPosition.start) || this.position == null) ? new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([this.icon, C681 || CT.C681, this.child]), $creationLocationd_0dea112b090073317d4: C682 || CT.C682}) : this.icon != null && dart.equals(this.position, gf_position.GFPosition.end) ? new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([this.child, C681 || CT.C681, this.icon]), $creationLocationd_0dea112b090073317d4: C686 || CT.C686}) : this.child, $creationLocationd_0dea112b090073317d4: C690 || CT.C690}), $creationLocationd_0dea112b090073317d4: C695 || CT.C695})}), $creationLocationd_0dea112b090073317d4: C701 || CT.C701}), $creationLocationd_0dea112b090073317d4: C718 || CT.C718}), $creationLocationd_0dea112b090073317d4: C728 || CT.C728});
      return new basic.Semantics.new({container: true, button: true, enabled: this.widget.enabled, child: new gf_button._InputPadding.new({minSize: minSize, child: new focus_scope.Focus.new({focusNode: this.widget.focusNode, onFocusChange: dart.bind(this, _handleFocusedChanged), autofocus: this.widget.autofocus, child: result, $creationLocationd_0dea112b090073317d4: C733 || CT.C733}), $creationLocationd_0dea112b090073317d4: C739 || CT.C739}), $creationLocationd_0dea112b090073317d4: C743 || CT.C743});
    }
  };
  (gf_button._GFButtonState.new = function() {
    this.color = null;
    this.disabledColor = null;
    this.textColor = null;
    this.disabledTextColor = null;
    this.child = null;
    this.icon = null;
    this.onPressed = null;
    this.type = null;
    this.shape = null;
    this.size = null;
    this.position = null;
    this.boxShadow = null;
    this[_states] = LinkedHashSetOfMaterialState().new();
    gf_button._GFButtonState.__proto__.new.call(this);
    ;
  }).prototype = gf_button._GFButtonState.prototype;
  dart.addTypeTests(gf_button._GFButtonState);
  dart.setMethodSignature(gf_button._GFButtonState, () => ({
    __proto__: dart.getMethods(gf_button._GFButtonState.__proto__),
    buttonWidth: dart.fnType(core.double, []),
    [_updateState]: dart.fnType(dart.void, [material_state.MaterialState, core.bool]),
    [_handleHighlightChanged]: dart.fnType(dart.void, [core.bool]),
    [_handleHoveredChanged]: dart.fnType(dart.void, [core.bool]),
    [_handleFocusedChanged]: dart.fnType(dart.void, [core.bool]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(gf_button._GFButtonState, () => ({
    __proto__: dart.getGetters(gf_button._GFButtonState.__proto__),
    [_hovered]: core.bool,
    [_focused]: core.bool,
    [_pressed]: core.bool,
    [_disabled]: core.bool,
    [_effectiveElevation]: core.double
  }));
  dart.setLibraryUri(gf_button._GFButtonState, "package:getflutter/components/button/gf_button.dart");
  dart.setFieldSignature(gf_button._GFButtonState, () => ({
    __proto__: dart.getFields(gf_button._GFButtonState.__proto__),
    color: dart.fieldType(ui.Color),
    disabledColor: dart.fieldType(ui.Color),
    textColor: dart.fieldType(ui.Color),
    disabledTextColor: dart.fieldType(ui.Color),
    child: dart.fieldType(framework.Widget),
    icon: dart.fieldType(framework.Widget),
    onPressed: dart.fieldType(core.Function),
    type: dart.fieldType(gf_button_type.GFButtonType),
    shape: dart.fieldType(gf_button_shape.GFButtonShape),
    size: dart.fieldType(core.double),
    position: dart.fieldType(gf_position.GFPosition),
    boxShadow: dart.fieldType(box_shadow.BoxShadow),
    [_states]: dart.finalFieldType(core.Set$(material_state.MaterialState))
  }));
  const minSize$ = dart.privateName(gf_button, "_InputPadding.minSize");
  gf_button._InputPadding = class _InputPadding extends framework.SingleChildRenderObjectWidget {
    get minSize() {
      return this[minSize$];
    }
    set minSize(value) {
      super.minSize = value;
    }
    createRenderObject(context) {
      return new gf_button._RenderInputPadding.new(this.minSize);
    }
    updateRenderObject(context, renderObject) {
      gf_button._RenderInputPadding._check(renderObject);
      renderObject.minSize = this.minSize;
    }
  };
  (gf_button._InputPadding.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let minSize = opts && 'minSize' in opts ? opts.minSize : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[minSize$] = minSize;
    gf_button._InputPadding.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_button._InputPadding.prototype;
  dart.addTypeTests(gf_button._InputPadding);
  dart.setMethodSignature(gf_button._InputPadding, () => ({
    __proto__: dart.getMethods(gf_button._InputPadding.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_button._InputPadding, "package:getflutter/components/button/gf_button.dart");
  dart.setFieldSignature(gf_button._InputPadding, () => ({
    __proto__: dart.getFields(gf_button._InputPadding.__proto__),
    minSize: dart.finalFieldType(ui.Size)
  }));
  const _minSize$ = dart.privateName(gf_button, "_minSize");
  gf_button._RenderInputPadding = class _RenderInputPadding extends shifted_box.RenderShiftedBox {
    get minSize() {
      return this[_minSize$];
    }
    set minSize(value) {
      this[_minSize$] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (this.child != null) {
        return math.max(core.double, this.child.getMinIntrinsicWidth(height), this.minSize.width);
      }
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (this.child != null) {
        return math.max(core.double, this.child.getMinIntrinsicHeight(width), this.minSize.height);
      }
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child != null) {
        return math.max(core.double, this.child.getMaxIntrinsicWidth(height), this.minSize.width);
      }
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (this.child != null) {
        return math.max(core.double, this.child.getMaxIntrinsicHeight(width), this.minSize.height);
      }
      return 0.0;
    }
    performLayout() {
      if (this.child != null) {
        this.child.layout(this.constraints, {parentUsesSize: true});
        let childParentData = box.BoxParentData._check(this.child.parentData);
        let height = math.max(core.double, this.child.size.width, this.minSize.width);
        let width = math.max(core.double, this.child.size.height, this.minSize.height);
        this.size = this.constraints.constrain(new ui.Size.new(height, width));
        childParentData.offset = alignment.Alignment.center.alongOffset(ui.Offset._check(this.size['-'](this.child.size)));
      } else {
        this.size = ui.Size.zero;
      }
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (dart.test(super.hitTest(result, {position: position}))) {
        return true;
      }
      let center = this.child.size.center(ui.Offset.zero);
      return result.addWithRawTransform({transform: matrix_utils.MatrixUtils.forceToPoint(center), position: center, hitTest: dart.fn((result, position) => {
          if (!dart.equals(position, center)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/button/gf_button.dart", 732, 16, "position == center");
          return this.child.hitTest(result, {position: center});
        }, BoxHitTestResultAndOffsetTobool())});
    }
  };
  (gf_button._RenderInputPadding.new = function(_minSize, child = null) {
    this[_minSize$] = _minSize;
    gf_button._RenderInputPadding.__proto__.new.call(this, child);
    ;
  }).prototype = gf_button._RenderInputPadding.prototype;
  dart.addTypeTests(gf_button._RenderInputPadding);
  dart.setGetterSignature(gf_button._RenderInputPadding, () => ({
    __proto__: dart.getGetters(gf_button._RenderInputPadding.__proto__),
    minSize: ui.Size
  }));
  dart.setSetterSignature(gf_button._RenderInputPadding, () => ({
    __proto__: dart.getSetters(gf_button._RenderInputPadding.__proto__),
    minSize: ui.Size
  }));
  dart.setLibraryUri(gf_button._RenderInputPadding, "package:getflutter/components/button/gf_button.dart");
  dart.setFieldSignature(gf_button._RenderInputPadding, () => ({
    __proto__: dart.getFields(gf_button._RenderInputPadding.__proto__),
    [_minSize$]: dart.fieldType(ui.Size)
  }));
  const child$5 = dart.privateName(gf_icon_badge, "GFIconBadge.child");
  const counterChild$ = dart.privateName(gf_icon_badge, "GFIconBadge.counterChild");
  const padding$5 = dart.privateName(gf_icon_badge, "GFIconBadge.padding");
  gf_icon_badge.GFIconBadge = class GFIconBadge extends framework.StatefulWidget {
    get child() {
      return this[child$5];
    }
    set child(value) {
      super.child = value;
    }
    get counterChild() {
      return this[counterChild$];
    }
    set counterChild(value) {
      super.counterChild = value;
    }
    get padding() {
      return this[padding$5];
    }
    set padding(value) {
      super.padding = value;
    }
    createState() {
      return new gf_icon_badge._GFIconBadgeState.new();
    }
  };
  (gf_icon_badge.GFIconBadge.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let padding = opts && 'padding' in opts ? opts.padding : C633 || CT.C633;
    let child = opts && 'child' in opts ? opts.child : null;
    let counterChild = opts && 'counterChild' in opts ? opts.counterChild : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[padding$5] = padding;
    this[child$5] = child;
    this[counterChild$] = counterChild;
    if (!(padding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_icon_badge.dart", 11, 16, "padding != null");
    gf_icon_badge.GFIconBadge.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_icon_badge.GFIconBadge.prototype;
  dart.addTypeTests(gf_icon_badge.GFIconBadge);
  dart.setMethodSignature(gf_icon_badge.GFIconBadge, () => ({
    __proto__: dart.getMethods(gf_icon_badge.GFIconBadge.__proto__),
    createState: dart.fnType(gf_icon_badge._GFIconBadgeState, [])
  }));
  dart.setLibraryUri(gf_icon_badge.GFIconBadge, "package:getflutter/components/badge/gf_icon_badge.dart");
  dart.setFieldSignature(gf_icon_badge.GFIconBadge, () => ({
    __proto__: dart.getFields(gf_icon_badge.GFIconBadge.__proto__),
    child: dart.finalFieldType(framework.Widget),
    counterChild: dart.finalFieldType(framework.Widget),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry)
  }));
  let C749;
  let C750;
  let C753;
  let C754;
  let C752;
  let C751;
  let C757;
  let C756;
  let C755;
  let C760;
  let C761;
  let C759;
  let C758;
  gf_icon_badge._GFIconBadgeState = class _GFIconBadgeState extends framework.State$(gf_icon_badge.GFIconBadge) {
    build(context) {
      let t1, t1$;
      return new container.Container.new({padding: this.widget.padding, child: new basic.Stack.new({children: JSArrayOfWidget().of([(t1 = this.widget.child, t1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C749 || CT.C749}) : t1), new basic.Positioned.new({right: 0.0, child: (t1$ = this.widget.counterChild, t1$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C750 || CT.C750}) : t1$), $creationLocationd_0dea112b090073317d4: C751 || CT.C751})]), $creationLocationd_0dea112b090073317d4: C755 || CT.C755}), $creationLocationd_0dea112b090073317d4: C758 || CT.C758});
    }
  };
  (gf_icon_badge._GFIconBadgeState.new = function() {
    gf_icon_badge._GFIconBadgeState.__proto__.new.call(this);
    ;
  }).prototype = gf_icon_badge._GFIconBadgeState.prototype;
  dart.addTypeTests(gf_icon_badge._GFIconBadgeState);
  dart.setMethodSignature(gf_icon_badge._GFIconBadgeState, () => ({
    __proto__: dart.getMethods(gf_icon_badge._GFIconBadgeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_icon_badge._GFIconBadgeState, "package:getflutter/components/badge/gf_icon_badge.dart");
  let C762;
  let C763;
  let C766;
  let C767;
  let C768;
  let C769;
  let C770;
  let C771;
  let C772;
  let C773;
  let C774;
  let C775;
  let C776;
  let C777;
  let C778;
  let C779;
  let C780;
  let C781;
  let C782;
  let C783;
  let C784;
  let C785;
  let C786;
  let C787;
  let C788;
  let C789;
  let C790;
  let C791;
  let C792;
  let C793;
  let C794;
  let C795;
  let C796;
  let C797;
  let C798;
  let C765;
  let C764;
  let C801;
  let C802;
  let C800;
  let C799;
  let C805;
  let C806;
  let C804;
  let C803;
  const onPressed$2 = dart.privateName(gf_button_badge, "GFButtonBadge.onPressed");
  const onHighlightChanged$1 = dart.privateName(gf_button_badge, "GFButtonBadge.onHighlightChanged");
  const textStyle$2 = dart.privateName(gf_button_badge, "GFButtonBadge.textStyle");
  const borderSide$2 = dart.privateName(gf_button_badge, "GFButtonBadge.borderSide");
  const boxShadow$2 = dart.privateName(gf_button_badge, "GFButtonBadge.boxShadow");
  const focusColor$2 = dart.privateName(gf_button_badge, "GFButtonBadge.focusColor");
  const hoverColor$2 = dart.privateName(gf_button_badge, "GFButtonBadge.hoverColor");
  const highlightColor$2 = dart.privateName(gf_button_badge, "GFButtonBadge.highlightColor");
  const splashColor$2 = dart.privateName(gf_button_badge, "GFButtonBadge.splashColor");
  const elevation$2 = dart.privateName(gf_button_badge, "GFButtonBadge.elevation");
  const hoverElevation$1 = dart.privateName(gf_button_badge, "GFButtonBadge.hoverElevation");
  const focusElevation$1 = dart.privateName(gf_button_badge, "GFButtonBadge.focusElevation");
  const highlightElevation$1 = dart.privateName(gf_button_badge, "GFButtonBadge.highlightElevation");
  const disabledElevation$1 = dart.privateName(gf_button_badge, "GFButtonBadge.disabledElevation");
  const padding$6 = dart.privateName(gf_button_badge, "GFButtonBadge.padding");
  const constraints$1 = dart.privateName(gf_button_badge, "GFButtonBadge.constraints");
  const borderShape$2 = dart.privateName(gf_button_badge, "GFButtonBadge.borderShape");
  const animationDuration$2 = dart.privateName(gf_button_badge, "GFButtonBadge.animationDuration");
  const materialTapTargetSize$1 = dart.privateName(gf_button_badge, "GFButtonBadge.materialTapTargetSize");
  const focusNode$2 = dart.privateName(gf_button_badge, "GFButtonBadge.focusNode");
  const autofocus$2 = dart.privateName(gf_button_badge, "GFButtonBadge.autofocus");
  const clipBehavior$2 = dart.privateName(gf_button_badge, "GFButtonBadge.clipBehavior");
  const type$5 = dart.privateName(gf_button_badge, "GFButtonBadge.type");
  const shape$5 = dart.privateName(gf_button_badge, "GFButtonBadge.shape");
  const color$4 = dart.privateName(gf_button_badge, "GFButtonBadge.color");
  const disabledColor$2 = dart.privateName(gf_button_badge, "GFButtonBadge.disabledColor");
  const textColor$2 = dart.privateName(gf_button_badge, "GFButtonBadge.textColor");
  const disabledTextColor$1 = dart.privateName(gf_button_badge, "GFButtonBadge.disabledTextColor");
  const size$2 = dart.privateName(gf_button_badge, "GFButtonBadge.size");
  const text$3 = dart.privateName(gf_button_badge, "GFButtonBadge.text");
  const position$1 = dart.privateName(gf_button_badge, "GFButtonBadge.position");
  const blockButton$1 = dart.privateName(gf_button_badge, "GFButtonBadge.blockButton");
  const fullWidthButton$1 = dart.privateName(gf_button_badge, "GFButtonBadge.fullWidthButton");
  const badgeBoxShadow$ = dart.privateName(gf_button_badge, "GFButtonBadge.badgeBoxShadow");
  const colorScheme$1 = dart.privateName(gf_button_badge, "GFButtonBadge.colorScheme");
  const enableFeedback$1 = dart.privateName(gf_button_badge, "GFButtonBadge.enableFeedback");
  const onLongPress$1 = dart.privateName(gf_button_badge, "GFButtonBadge.onLongPress");
  const icon$4 = dart.privateName(gf_button_badge, "GFButtonBadge.icon");
  gf_button_badge.GFButtonBadge = class GFButtonBadge extends gf_button.GFButton {
    get onPressed() {
      return this[onPressed$2];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get onHighlightChanged() {
      return this[onHighlightChanged$1];
    }
    set onHighlightChanged(value) {
      super.onHighlightChanged = value;
    }
    get textStyle() {
      return this[textStyle$2];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get borderSide() {
      return this[borderSide$2];
    }
    set borderSide(value) {
      super.borderSide = value;
    }
    get boxShadow() {
      return this[boxShadow$2];
    }
    set boxShadow(value) {
      super.boxShadow = value;
    }
    get focusColor() {
      return this[focusColor$2];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$2];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get highlightColor() {
      return this[highlightColor$2];
    }
    set highlightColor(value) {
      super.highlightColor = value;
    }
    get splashColor() {
      return this[splashColor$2];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get elevation() {
      return this[elevation$2];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get hoverElevation() {
      return this[hoverElevation$1];
    }
    set hoverElevation(value) {
      super.hoverElevation = value;
    }
    get focusElevation() {
      return this[focusElevation$1];
    }
    set focusElevation(value) {
      super.focusElevation = value;
    }
    get highlightElevation() {
      return this[highlightElevation$1];
    }
    set highlightElevation(value) {
      super.highlightElevation = value;
    }
    get disabledElevation() {
      return this[disabledElevation$1];
    }
    set disabledElevation(value) {
      super.disabledElevation = value;
    }
    get padding() {
      return this[padding$6];
    }
    set padding(value) {
      super.padding = value;
    }
    get constraints() {
      return this[constraints$1];
    }
    set constraints(value) {
      super.constraints = value;
    }
    get borderShape() {
      return this[borderShape$2];
    }
    set borderShape(value) {
      super.borderShape = value;
    }
    get animationDuration() {
      return this[animationDuration$2];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get materialTapTargetSize() {
      return this[materialTapTargetSize$1];
    }
    set materialTapTargetSize(value) {
      super.materialTapTargetSize = value;
    }
    get focusNode() {
      return this[focusNode$2];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get autofocus() {
      return this[autofocus$2];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get clipBehavior() {
      return this[clipBehavior$2];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get type() {
      return this[type$5];
    }
    set type(value) {
      super.type = value;
    }
    get shape() {
      return this[shape$5];
    }
    set shape(value) {
      super.shape = value;
    }
    get color() {
      return this[color$4];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$2];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get textColor() {
      return this[textColor$2];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get disabledTextColor() {
      return this[disabledTextColor$1];
    }
    set disabledTextColor(value) {
      super.disabledTextColor = value;
    }
    get size() {
      return this[size$2];
    }
    set size(value) {
      super.size = value;
    }
    get text() {
      return this[text$3];
    }
    set text(value) {
      super.text = value;
    }
    get position() {
      return this[position$1];
    }
    set position(value) {
      super.position = value;
    }
    get blockButton() {
      return this[blockButton$1];
    }
    set blockButton(value) {
      super.blockButton = value;
    }
    get fullWidthButton() {
      return this[fullWidthButton$1];
    }
    set fullWidthButton(value) {
      super.fullWidthButton = value;
    }
    get badgeBoxShadow() {
      return this[badgeBoxShadow$];
    }
    set badgeBoxShadow(value) {
      super.badgeBoxShadow = value;
    }
    get colorScheme() {
      return this[colorScheme$1];
    }
    set colorScheme(value) {
      super.colorScheme = value;
    }
    get enableFeedback() {
      return this[enableFeedback$1];
    }
    set enableFeedback(value) {
      super.enableFeedback = value;
    }
    get onLongPress() {
      return this[onLongPress$1];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get icon() {
      return this[icon$4];
    }
    set icon(value) {
      super.icon = value;
    }
    get enabled() {
      return this.onPressed != null;
    }
    build(context) {
      return new basic.ConstrainedBox.new({constraints: C763 || CT.C763, child: new container.Container.new({height: gf_size.GFSizesClass.getGFSize(this.size), child: new gf_button.GFButton.new({onPressed: this.onPressed, onHighlightChanged: this.onHighlightChanged, textStyle: this.textStyle, boxShadow: this.boxShadow, buttonBoxShadow: this.badgeBoxShadow, focusColor: this.focusColor, hoverColor: this.hoverColor, highlightColor: this.highlightColor, splashColor: this.splashColor, elevation: this.elevation, focusElevation: this.focusElevation, hoverElevation: this.hoverElevation, highlightElevation: this.highlightElevation, disabledElevation: this.disabledElevation, constraints: this.constraints, borderShape: this.borderShape, animationDuration: this.animationDuration, clipBehavior: this.clipBehavior, focusNode: this.focusNode, autofocus: this.autofocus, type: this.type, shape: this.shape, color: this.color, textColor: this.textColor, position: this.position, size: gf_size.GFSizesClass.getGFSize(this.size), borderSide: this.borderSide, text: this.text, icon: this.icon, blockButton: this.blockButton, fullWidthButton: this.fullWidthButton, disabledColor: this.disabledTextColor, disabledTextColor: this.disabledColor, $creationLocationd_0dea112b090073317d4: C764 || CT.C764}), $creationLocationd_0dea112b090073317d4: C799 || CT.C799}), $creationLocationd_0dea112b090073317d4: C803 || CT.C803});
    }
  };
  (gf_button_badge.GFButtonBadge.new = function(opts) {
    let t1;
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onHighlightChanged = opts && 'onHighlightChanged' in opts ? opts.onHighlightChanged : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
    let badgeBoxShadow = opts && 'badgeBoxShadow' in opts ? opts.badgeBoxShadow : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : 4;
    let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : 4;
    let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : 1;
    let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : 0;
    let padding = opts && 'padding' in opts ? opts.padding : C633 || CT.C633;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    let borderShape = opts && 'borderShape' in opts ? opts.borderShape : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : C634 || CT.C634;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C611 || CT.C611;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
    let type = opts && 'type' in opts ? opts.type : C516 || CT.C516;
    let shape = opts && 'shape' in opts ? opts.shape : C635 || CT.C635;
    let color = opts && 'color' in opts ? opts.color : C518 || CT.C518;
    let textColor = opts && 'textColor' in opts ? opts.textColor : null;
    let position = opts && 'position' in opts ? opts.position : C762 || CT.C762;
    let size = opts && 'size' in opts ? opts.size : C519 || CT.C519;
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let blockButton = opts && 'blockButton' in opts ? opts.blockButton : null;
    let fullWidthButton = opts && 'fullWidthButton' in opts ? opts.fullWidthButton : null;
    let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
    let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let disabledTextColor = opts && 'disabledTextColor' in opts ? opts.disabledTextColor : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$2] = onPressed;
    this[onHighlightChanged$1] = onHighlightChanged;
    this[textStyle$2] = textStyle;
    this[boxShadow$2] = boxShadow;
    this[badgeBoxShadow$] = badgeBoxShadow;
    this[focusColor$2] = focusColor;
    this[hoverColor$2] = hoverColor;
    this[highlightColor$2] = highlightColor;
    this[splashColor$2] = splashColor;
    this[elevation$2] = elevation;
    this[focusElevation$1] = focusElevation;
    this[hoverElevation$1] = hoverElevation;
    this[highlightElevation$1] = highlightElevation;
    this[disabledElevation$1] = disabledElevation;
    this[padding$6] = padding;
    this[constraints$1] = constraints;
    this[borderShape$2] = borderShape;
    this[animationDuration$2] = animationDuration;
    this[clipBehavior$2] = clipBehavior;
    this[focusNode$2] = focusNode;
    this[autofocus$2] = autofocus;
    this[type$5] = type;
    this[shape$5] = shape;
    this[color$4] = color;
    this[textColor$2] = textColor;
    this[position$1] = position;
    this[size$2] = size;
    this[borderSide$2] = borderSide;
    this[text$3] = text;
    this[blockButton$1] = blockButton;
    this[fullWidthButton$1] = fullWidthButton;
    this[colorScheme$1] = colorScheme;
    this[enableFeedback$1] = enableFeedback;
    this[onLongPress$1] = onLongPress;
    this[disabledColor$2] = disabledColor;
    this[disabledTextColor$1] = disabledTextColor;
    this[icon$4] = icon;
    this[materialTapTargetSize$1] = (t1 = materialTapTargetSize, t1 == null ? theme_data.MaterialTapTargetSize.padded : t1);
    if (!(shape != null)) dart.assertFailed("Button shape can not be null", "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 51, 16, "shape != null");
    if (!(focusElevation != null && dart.notNull(focusElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 53, 16, "focusElevation != null && focusElevation >= 0.0");
    if (!(hoverElevation != null && dart.notNull(hoverElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 54, 16, "hoverElevation != null && hoverElevation >= 0.0");
    if (!(highlightElevation != null && dart.notNull(highlightElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 55, 16, "highlightElevation != null && highlightElevation >= 0.0");
    if (!(disabledElevation != null && dart.notNull(disabledElevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 56, 16, "disabledElevation != null && disabledElevation >= 0.0");
    if (!(padding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 57, 16, "padding != null");
    if (!(animationDuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 58, 16, "animationDuration != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 59, 16, "clipBehavior != null");
    if (!(autofocus != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/badge/gf_button_badge.dart", 60, 16, "autofocus != null");
    gf_button_badge.GFButtonBadge.__proto__.new.call(this, {key: key, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_button_badge.GFButtonBadge.prototype;
  dart.addTypeTests(gf_button_badge.GFButtonBadge);
  dart.setMethodSignature(gf_button_badge.GFButtonBadge, () => ({
    __proto__: dart.getMethods(gf_button_badge.GFButtonBadge.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_button_badge.GFButtonBadge, "package:getflutter/components/badge/gf_button_badge.dart");
  dart.setFieldSignature(gf_button_badge.GFButtonBadge, () => ({
    __proto__: dart.getFields(gf_button_badge.GFButtonBadge.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    onHighlightChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    borderSide: dart.finalFieldType(borders.BorderSide),
    boxShadow: dart.finalFieldType(box_shadow.BoxShadow),
    focusColor: dart.finalFieldType(dart.dynamic),
    hoverColor: dart.finalFieldType(dart.dynamic),
    highlightColor: dart.finalFieldType(dart.dynamic),
    splashColor: dart.finalFieldType(dart.dynamic),
    elevation: dart.finalFieldType(core.double),
    hoverElevation: dart.finalFieldType(core.double),
    focusElevation: dart.finalFieldType(core.double),
    highlightElevation: dart.finalFieldType(core.double),
    disabledElevation: dart.finalFieldType(core.double),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    constraints: dart.finalFieldType(box.BoxConstraints),
    borderShape: dart.finalFieldType(borders.ShapeBorder),
    animationDuration: dart.finalFieldType(core.Duration),
    materialTapTargetSize: dart.finalFieldType(theme_data.MaterialTapTargetSize),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    autofocus: dart.finalFieldType(core.bool),
    clipBehavior: dart.finalFieldType(ui.Clip),
    type: dart.finalFieldType(gf_button_type.GFButtonType),
    shape: dart.finalFieldType(gf_button_shape.GFButtonShape),
    color: dart.finalFieldType(dart.dynamic),
    disabledColor: dart.finalFieldType(dart.dynamic),
    textColor: dart.finalFieldType(dart.dynamic),
    disabledTextColor: dart.finalFieldType(dart.dynamic),
    size: dart.finalFieldType(dart.dynamic),
    text: dart.finalFieldType(core.String),
    position: dart.finalFieldType(gf_position.GFPosition),
    blockButton: dart.finalFieldType(core.bool),
    fullWidthButton: dart.finalFieldType(core.bool),
    badgeBoxShadow: dart.finalFieldType(core.bool),
    colorScheme: dart.finalFieldType(color_scheme.ColorScheme),
    enableFeedback: dart.finalFieldType(core.bool),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, [])),
    icon: dart.finalFieldType(framework.Widget)
  }));
  const _name$13 = dart.privateName(gf_badge_shape, "_name");
  let C807;
  let C808;
  let C809;
  let C810;
  const border$1 = dart.privateName(gf_badge, "GFBadge.border");
  const borderShape$3 = dart.privateName(gf_badge, "GFBadge.borderShape");
  const shape$6 = dart.privateName(gf_badge, "GFBadge.shape");
  const color$5 = dart.privateName(gf_badge, "GFBadge.color");
  const size$3 = dart.privateName(gf_badge, "GFBadge.size");
  const child$6 = dart.privateName(gf_badge, "GFBadge.child");
  const text$4 = dart.privateName(gf_badge, "GFBadge.text");
  const textStyle$3 = dart.privateName(gf_badge, "GFBadge.textStyle");
  const textColor$3 = dart.privateName(gf_badge, "GFBadge.textColor");
  gf_badge.GFBadge = class GFBadge extends framework.StatefulWidget {
    get border() {
      return this[border$1];
    }
    set border(value) {
      super.border = value;
    }
    get borderShape() {
      return this[borderShape$3];
    }
    set borderShape(value) {
      super.borderShape = value;
    }
    get shape() {
      return this[shape$6];
    }
    set shape(value) {
      super.shape = value;
    }
    get color() {
      return this[color$5];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$3];
    }
    set size(value) {
      super.size = value;
    }
    get child() {
      return this[child$6];
    }
    set child(value) {
      super.child = value;
    }
    get text() {
      return this[text$4];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$3];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get textColor() {
      return this[textColor$3];
    }
    set textColor(value) {
      super.textColor = value;
    }
    createState() {
      return new gf_badge._GFBadgeState.new();
    }
  };
  (gf_badge.GFBadge.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let borderShape = opts && 'borderShape' in opts ? opts.borderShape : null;
    let shape = opts && 'shape' in opts ? opts.shape : C807 || CT.C807;
    let color = opts && 'color' in opts ? opts.color : C808 || CT.C808;
    let textColor = opts && 'textColor' in opts ? opts.textColor : C809 || CT.C809;
    let size = opts && 'size' in opts ? opts.size : C810 || CT.C810;
    let border = opts && 'border' in opts ? opts.border : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[textStyle$3] = textStyle;
    this[borderShape$3] = borderShape;
    this[shape$6] = shape;
    this[color$5] = color;
    this[textColor$3] = textColor;
    this[size$3] = size;
    this[border$1] = border;
    this[text$4] = text;
    this[child$6] = child;
    if (!(shape != null)) dart.assertFailed("Counter shape can not be null", "org-dartlang-app:///packages/getflutter/components/badge/gf_badge.dart", 17, 16, "shape != null");
    gf_badge.GFBadge.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_badge.GFBadge.prototype;
  dart.addTypeTests(gf_badge.GFBadge);
  dart.setMethodSignature(gf_badge.GFBadge, () => ({
    __proto__: dart.getMethods(gf_badge.GFBadge.__proto__),
    createState: dart.fnType(gf_badge._GFBadgeState, [])
  }));
  dart.setLibraryUri(gf_badge.GFBadge, "package:getflutter/components/badge/gf_badge.dart");
  dart.setFieldSignature(gf_badge.GFBadge, () => ({
    __proto__: dart.getFields(gf_badge.GFBadge.__proto__),
    border: dart.finalFieldType(borders.BorderSide),
    borderShape: dart.finalFieldType(borders.ShapeBorder),
    shape: dart.finalFieldType(gf_badge_shape.GFBadgeShape),
    color: dart.finalFieldType(dart.dynamic),
    size: dart.finalFieldType(dart.dynamic),
    child: dart.finalFieldType(framework.Widget),
    text: dart.finalFieldType(core.String),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    textColor: dart.finalFieldType(dart.dynamic)
  }));
  let C813;
  let C812;
  let C811;
  let C816;
  let C817;
  let C815;
  let C814;
  let C820;
  let C819;
  let C818;
  let C823;
  let C824;
  let C825;
  let C826;
  let C827;
  let C822;
  let C821;
  let C830;
  let C831;
  let C832;
  let C829;
  let C828;
  gf_badge._GFBadgeState = class _GFBadgeState extends framework.State$(gf_badge.GFBadge) {
    initState() {
      let t1;
      this.color = gf_color.GFColors.getGFColor(this.widget.color);
      this.textColor = gf_color.GFColors.getGFColor(this.widget.textColor);
      this.child = this.widget.text != null ? new text.Text.new((t1 = this.widget.text, t1 == null ? "" : t1), {$creationLocationd_0dea112b090073317d4: C811 || CT.C811}) : this.widget.child;
      this.counterShape = this.widget.shape;
      this.size = gf_size.GFSizesClass.getGFSize(this.widget.size);
      super.initState();
    }
    build(context) {
      let t1;
      let shapeBorder = this.widget.border != null ? this.widget.border : new borders.BorderSide.new({color: this.color, width: 0.0});
      let shape = null;
      if (dart.equals(this.counterShape, gf_badge_shape.GFBadgeShape.pills)) {
        shape = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(50.0), side: shapeBorder});
      } else if (dart.equals(this.counterShape, gf_badge_shape.GFBadgeShape.square)) {
        shape = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(0.0), side: shapeBorder});
      } else if (dart.equals(this.counterShape, gf_badge_shape.GFBadgeShape.standard)) {
        shape = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(5.0), side: shapeBorder});
      } else if (dart.equals(this.counterShape, gf_badge_shape.GFBadgeShape.circle)) {
        shape = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(100.0), side: shapeBorder});
      } else {
        shape = new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(5.0), side: shapeBorder});
      }
      if (dart.equals(this.widget.size, gf_size.GFSize.small)) {
        this.height = dart.notNull(this.size) * 0.56;
        this.width = dart.notNull(this.size) * 0.73;
        this.fontSize = dart.notNull(this.size) * 0.31;
      } else if (dart.equals(this.widget.size, gf_size.GFSize.medium)) {
        this.height = dart.notNull(this.size) * 0.58;
        this.width = dart.notNull(this.size) * 0.76;
        this.fontSize = dart.notNull(this.size) * 0.34;
      } else if (dart.equals(this.widget.size, gf_size.GFSize.large)) {
        this.height = dart.notNull(this.size) * 0.6;
        this.width = dart.notNull(this.size) * 0.79;
        this.fontSize = dart.notNull(this.size) * 0.37;
      } else {
        this.height = dart.notNull(this.size) * 0.58;
        this.width = dart.notNull(this.size) * 0.76;
        this.fontSize = dart.notNull(this.size) * 0.34;
      }
      return new container.Container.new({height: this.height, width: dart.equals(this.counterShape, gf_badge_shape.GFBadgeShape.circle) ? this.height : this.width, child: new material.Material.new({textStyle: this.textColor != null ? new text_style.TextStyle.new({color: this.textColor, fontSize: this.fontSize}) : this.widget.textStyle, shape: (t1 = this.widget.borderShape, t1 == null ? shape : t1), color: this.color, type: material.MaterialType.button, child: new container.Container.new({child: new basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: this.child, $creationLocationd_0dea112b090073317d4: C814 || CT.C814}), $creationLocationd_0dea112b090073317d4: C818 || CT.C818}), $creationLocationd_0dea112b090073317d4: C821 || CT.C821}), $creationLocationd_0dea112b090073317d4: C828 || CT.C828});
    }
  };
  (gf_badge._GFBadgeState.new = function() {
    this.color = null;
    this.textColor = null;
    this.child = null;
    this.counterShape = null;
    this.size = null;
    this.height = null;
    this.width = null;
    this.fontSize = null;
    gf_badge._GFBadgeState.__proto__.new.call(this);
    ;
  }).prototype = gf_badge._GFBadgeState.prototype;
  dart.addTypeTests(gf_badge._GFBadgeState);
  dart.setMethodSignature(gf_badge._GFBadgeState, () => ({
    __proto__: dart.getMethods(gf_badge._GFBadgeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_badge._GFBadgeState, "package:getflutter/components/badge/gf_badge.dart");
  dart.setFieldSignature(gf_badge._GFBadgeState, () => ({
    __proto__: dart.getFields(gf_badge._GFBadgeState.__proto__),
    color: dart.fieldType(ui.Color),
    textColor: dart.fieldType(ui.Color),
    child: dart.fieldType(framework.Widget),
    counterShape: dart.fieldType(gf_badge_shape.GFBadgeShape),
    size: dart.fieldType(core.double),
    height: dart.fieldType(core.double),
    width: dart.fieldType(core.double),
    fontSize: dart.fieldType(core.double)
  }));
  const _name$14 = dart.privateName(gf_avatar_shape, "_name");
  let C833;
  const _minDiameter = dart.privateName(gf_avatar, "_minDiameter");
  const _maxDiameter = dart.privateName(gf_avatar, "_maxDiameter");
  const _avatarShape = dart.privateName(gf_avatar, "_avatarShape");
  let C834;
  let C835;
  let C838;
  let C839;
  let C837;
  let C836;
  let C842;
  let C843;
  let C841;
  let C840;
  let C846;
  let C847;
  let C845;
  let C844;
  let C850;
  let C849;
  let C848;
  let C853;
  let C854;
  let C855;
  let C856;
  let C852;
  let C851;
  const child$7 = dart.privateName(gf_avatar, "GFAvatar.child");
  const backgroundColor$0 = dart.privateName(gf_avatar, "GFAvatar.backgroundColor");
  const foregroundColor$ = dart.privateName(gf_avatar, "GFAvatar.foregroundColor");
  const backgroundImage$0 = dart.privateName(gf_avatar, "GFAvatar.backgroundImage");
  const radius$ = dart.privateName(gf_avatar, "GFAvatar.radius");
  const minRadius$ = dart.privateName(gf_avatar, "GFAvatar.minRadius");
  const maxRadius$ = dart.privateName(gf_avatar, "GFAvatar.maxRadius");
  const size$4 = dart.privateName(gf_avatar, "GFAvatar.size");
  const shape$7 = dart.privateName(gf_avatar, "GFAvatar.shape");
  const borderRadius$2 = dart.privateName(gf_avatar, "GFAvatar.borderRadius");
  gf_avatar.GFAvatar = class GFAvatar extends framework.StatelessWidget {
    get child() {
      return this[child$7];
    }
    set child(value) {
      super.child = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
    get backgroundImage() {
      return this[backgroundImage$0];
    }
    set backgroundImage(value) {
      super.backgroundImage = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get minRadius() {
      return this[minRadius$];
    }
    set minRadius(value) {
      super.minRadius = value;
    }
    get maxRadius() {
      return this[maxRadius$];
    }
    set maxRadius(value) {
      super.maxRadius = value;
    }
    get size() {
      return this[size$4];
    }
    set size(value) {
      super.size = value;
    }
    get shape() {
      return this[shape$7];
    }
    set shape(value) {
      super.shape = value;
    }
    get borderRadius() {
      return this[borderRadius$2];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get [_minDiameter]() {
      let t1, t1$;
      if (this.radius == null && this.minRadius == null && this.maxRadius == null) {
        return 1.5 * dart.notNull(gf_size.GFSizesClass.getGFSize(this.size));
      } else {
        return 2.0 * dart.notNull((t1$ = (t1 = this.radius, t1 == null ? this.minRadius : t1), t1$ == null ? 0 : t1$));
      }
    }
    get [_maxDiameter]() {
      let t1, t1$;
      if (this.radius == null && this.minRadius == null && this.maxRadius == null) {
        return 1.5 * dart.notNull(gf_size.GFSizesClass.getGFSize(this.size));
      } else {
        return 2.0 * dart.notNull((t1$ = (t1 = this.radius, t1 == null ? this.maxRadius : t1), t1$ == null ? 0 : t1$));
      }
    }
    get [_avatarShape]() {
      if (dart.equals(this.shape, gf_avatar_shape.GFAvatarShape.circle)) {
        return box_border.BoxShape.circle;
      } else if (dart.equals(this.shape, gf_avatar_shape.GFAvatarShape.square)) {
        return box_border.BoxShape.rectangle;
      } else if (dart.equals(this.shape, gf_avatar_shape.GFAvatarShape.standard)) {
        return box_border.BoxShape.rectangle;
      } else {
        return box_border.BoxShape.rectangle;
      }
    }
    build(context) {
      let backgroundColor = gf_color.GFColors.getGFColor(this.backgroundColor);
      let foregroundColor = gf_color.GFColors.getGFColor(this.foregroundColor);
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart", 88, 12, "debugCheckHasMediaQuery(context)");
      let theme = theme$.Theme.of(context);
      let textStyle = theme.primaryTextTheme.subhead.copyWith({color: foregroundColor});
      let effectiveBackgroundColor = backgroundColor;
      if (effectiveBackgroundColor == null) {
        switch (theme_data.ThemeData.estimateBrightnessForColor(textStyle.color)) {
          case C834 || CT.C834:
          {
            effectiveBackgroundColor = theme.primaryColorLight;
            break;
          }
          case C835 || CT.C835:
          {
            effectiveBackgroundColor = theme.primaryColorDark;
            break;
          }
        }
      } else if (foregroundColor == null) {
        switch (theme_data.ThemeData.estimateBrightnessForColor(backgroundColor)) {
          case C834 || CT.C834:
          {
            textStyle = textStyle.copyWith({color: theme.primaryColorLight});
            break;
          }
          case C835 || CT.C835:
          {
            textStyle = textStyle.copyWith({color: theme.primaryColorDark});
            break;
          }
        }
      }
      let minDiameter = this[_minDiameter];
      let maxDiameter = this[_maxDiameter];
      return new implicit_animations.AnimatedContainer.new({constraints: new box.BoxConstraints.new({minHeight: minDiameter, minWidth: minDiameter, maxWidth: maxDiameter, maxHeight: maxDiameter}), duration: constants.kThemeChangeDuration, decoration: new box_decoration.BoxDecoration.new({color: effectiveBackgroundColor, image: this.backgroundImage != null ? new decoration_image.DecorationImage.new({image: this.backgroundImage, fit: box_fit.BoxFit.cover}) : null, shape: this[_avatarShape], borderRadius: dart.equals(this.shape, gf_avatar_shape.GFAvatarShape.standard) && this.borderRadius == null ? new border_radius.BorderRadius.circular(10.0) : this.borderRadius}), child: this.child == null ? null : new basic.Center.new({child: new media_query.MediaQuery.new({data: media_query.MediaQuery.of(context).copyWith({textScaleFactor: 1.0}), child: new icon_theme.IconTheme.new({data: theme.iconTheme.copyWith({color: textStyle.color}), child: new text.DefaultTextStyle.new({style: textStyle, child: this.child, $creationLocationd_0dea112b090073317d4: C836 || CT.C836}), $creationLocationd_0dea112b090073317d4: C840 || CT.C840}), $creationLocationd_0dea112b090073317d4: C844 || CT.C844}), $creationLocationd_0dea112b090073317d4: C848 || CT.C848}), $creationLocationd_0dea112b090073317d4: C851 || CT.C851});
    }
  };
  (gf_avatar.GFAvatar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let backgroundImage = opts && 'backgroundImage' in opts ? opts.backgroundImage : null;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let minRadius = opts && 'minRadius' in opts ? opts.minRadius : null;
    let maxRadius = opts && 'maxRadius' in opts ? opts.maxRadius : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let shape = opts && 'shape' in opts ? opts.shape : C833 || CT.C833;
    let size = opts && 'size' in opts ? opts.size : C519 || CT.C519;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$7] = child;
    this[backgroundColor$0] = backgroundColor;
    this[backgroundImage$0] = backgroundImage;
    this[foregroundColor$] = foregroundColor;
    this[radius$] = radius;
    this[minRadius$] = minRadius;
    this[maxRadius$] = maxRadius;
    this[borderRadius$2] = borderRadius;
    this[shape$7] = shape;
    this[size$4] = size;
    if (!(radius == null || minRadius == null && maxRadius == null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/avatar/gf_avatar.dart", 19, 16, "radius == null || (minRadius == null && maxRadius == null)");
    gf_avatar.GFAvatar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_avatar.GFAvatar.prototype;
  dart.addTypeTests(gf_avatar.GFAvatar);
  dart.setMethodSignature(gf_avatar.GFAvatar, () => ({
    __proto__: dart.getMethods(gf_avatar.GFAvatar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(gf_avatar.GFAvatar, () => ({
    __proto__: dart.getGetters(gf_avatar.GFAvatar.__proto__),
    [_minDiameter]: core.double,
    [_maxDiameter]: core.double,
    [_avatarShape]: box_border.BoxShape
  }));
  dart.setLibraryUri(gf_avatar.GFAvatar, "package:getflutter/components/avatar/gf_avatar.dart");
  dart.setFieldSignature(gf_avatar.GFAvatar, () => ({
    __proto__: dart.getFields(gf_avatar.GFAvatar.__proto__),
    child: dart.finalFieldType(framework.Widget),
    backgroundColor: dart.finalFieldType(dart.dynamic),
    foregroundColor: dart.finalFieldType(dart.dynamic),
    backgroundImage: dart.finalFieldType(image_provider.ImageProvider),
    radius: dart.finalFieldType(core.double),
    minRadius: dart.finalFieldType(core.double),
    maxRadius: dart.finalFieldType(core.double),
    size: dart.finalFieldType(dart.dynamic),
    shape: dart.finalFieldType(gf_avatar_shape.GFAvatarShape),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius)
  }));
  let C858;
  let C857;
  let C859;
  const _name$15 = dart.privateName(platform, "_name");
  let C860;
  let C861;
  let C862;
  const _getEffectiveCenterTitle = dart.privateName(gf_appbar, "_getEffectiveCenterTitle");
  const leading$ = dart.privateName(gf_appbar, "GFAppBar.leading");
  const automaticallyImplyLeading$ = dart.privateName(gf_appbar, "GFAppBar.automaticallyImplyLeading");
  const title$1 = dart.privateName(gf_appbar, "GFAppBar.title");
  const actions$ = dart.privateName(gf_appbar, "GFAppBar.actions");
  const flexibleSpace$ = dart.privateName(gf_appbar, "GFAppBar.flexibleSpace");
  const bottom$ = dart.privateName(gf_appbar, "GFAppBar.bottom");
  const elevation$3 = dart.privateName(gf_appbar, "GFAppBar.elevation");
  const shape$8 = dart.privateName(gf_appbar, "GFAppBar.shape");
  const backgroundColor$1 = dart.privateName(gf_appbar, "GFAppBar.backgroundColor");
  const brightness$ = dart.privateName(gf_appbar, "GFAppBar.brightness");
  const iconTheme$ = dart.privateName(gf_appbar, "GFAppBar.iconTheme");
  const actionsIconTheme$ = dart.privateName(gf_appbar, "GFAppBar.actionsIconTheme");
  const textTheme$ = dart.privateName(gf_appbar, "GFAppBar.textTheme");
  const primary$ = dart.privateName(gf_appbar, "GFAppBar.primary");
  const centerTitle$ = dart.privateName(gf_appbar, "GFAppBar.centerTitle");
  const titleSpacing$ = dart.privateName(gf_appbar, "GFAppBar.titleSpacing");
  const toolbarOpacity$ = dart.privateName(gf_appbar, "GFAppBar.toolbarOpacity");
  const bottomOpacity$ = dart.privateName(gf_appbar, "GFAppBar.bottomOpacity");
  const preferredSize = dart.privateName(gf_appbar, "GFAppBar.preferredSize");
  const searchBar$ = dart.privateName(gf_appbar, "GFAppBar.searchBar");
  const searchHintText$ = dart.privateName(gf_appbar, "GFAppBar.searchHintText");
  const searchHintStyle$ = dart.privateName(gf_appbar, "GFAppBar.searchHintStyle");
  const searchTextStyle$ = dart.privateName(gf_appbar, "GFAppBar.searchTextStyle");
  const searchBarColorTheme$ = dart.privateName(gf_appbar, "GFAppBar.searchBarColorTheme");
  const onChanged$0 = dart.privateName(gf_appbar, "GFAppBar.onChanged");
  const onSubmitted$ = dart.privateName(gf_appbar, "GFAppBar.onSubmitted");
  const searchController$ = dart.privateName(gf_appbar, "GFAppBar.searchController");
  const onTap$ = dart.privateName(gf_appbar, "GFAppBar.onTap");
  gf_appbar.GFAppBar = class GFAppBar extends framework.StatefulWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get automaticallyImplyLeading() {
      return this[automaticallyImplyLeading$];
    }
    set automaticallyImplyLeading(value) {
      super.automaticallyImplyLeading = value;
    }
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get flexibleSpace() {
      return this[flexibleSpace$];
    }
    set flexibleSpace(value) {
      super.flexibleSpace = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get elevation() {
      return this[elevation$3];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get shape() {
      return this[shape$8];
    }
    set shape(value) {
      super.shape = value;
    }
    get backgroundColor() {
      return this[backgroundColor$1];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get iconTheme() {
      return this[iconTheme$];
    }
    set iconTheme(value) {
      super.iconTheme = value;
    }
    get actionsIconTheme() {
      return this[actionsIconTheme$];
    }
    set actionsIconTheme(value) {
      super.actionsIconTheme = value;
    }
    get textTheme() {
      return this[textTheme$];
    }
    set textTheme(value) {
      super.textTheme = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get centerTitle() {
      return this[centerTitle$];
    }
    set centerTitle(value) {
      super.centerTitle = value;
    }
    get titleSpacing() {
      return this[titleSpacing$];
    }
    set titleSpacing(value) {
      super.titleSpacing = value;
    }
    get toolbarOpacity() {
      return this[toolbarOpacity$];
    }
    set toolbarOpacity(value) {
      super.toolbarOpacity = value;
    }
    get bottomOpacity() {
      return this[bottomOpacity$];
    }
    set bottomOpacity(value) {
      super.bottomOpacity = value;
    }
    get preferredSize() {
      return this[preferredSize];
    }
    set preferredSize(value) {
      super.preferredSize = value;
    }
    get searchBar() {
      return this[searchBar$];
    }
    set searchBar(value) {
      super.searchBar = value;
    }
    get searchHintText() {
      return this[searchHintText$];
    }
    set searchHintText(value) {
      super.searchHintText = value;
    }
    get searchHintStyle() {
      return this[searchHintStyle$];
    }
    set searchHintStyle(value) {
      super.searchHintStyle = value;
    }
    get searchTextStyle() {
      return this[searchTextStyle$];
    }
    set searchTextStyle(value) {
      super.searchTextStyle = value;
    }
    get searchBarColorTheme() {
      return this[searchBarColorTheme$];
    }
    set searchBarColorTheme(value) {
      super.searchBarColorTheme = value;
    }
    get onChanged() {
      return this[onChanged$0];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get onSubmitted() {
      return this[onSubmitted$];
    }
    set onSubmitted(value) {
      super.onSubmitted = value;
    }
    get searchController() {
      return this[searchController$];
    }
    set searchController(value) {
      super.searchController = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    [_getEffectiveCenterTitle](theme) {
      if (this.centerTitle != null) {
        return this.centerTitle;
      }
      if (!(theme.platform != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 276, 12, "theme.platform != null");
      switch (theme.platform) {
        case C860 || CT.C860:
        case C861 || CT.C861:
        {
          return false;
        }
        case C862 || CT.C862:
        {
          return this.actions == null || dart.notNull(this.actions[$length]) < 2;
        }
        default:
        {
          return false;
        }
      }
    }
    createState() {
      return new gf_appbar._GFAppBarState.new();
    }
  };
  (gf_appbar.GFAppBar.new = function(opts) {
    let t1, t1$, t1$0;
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : true;
    let title = opts && 'title' in opts ? opts.title : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let flexibleSpace = opts && 'flexibleSpace' in opts ? opts.flexibleSpace : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let iconTheme = opts && 'iconTheme' in opts ? opts.iconTheme : null;
    let actionsIconTheme = opts && 'actionsIconTheme' in opts ? opts.actionsIconTheme : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let primary = opts && 'primary' in opts ? opts.primary : true;
    let centerTitle = opts && 'centerTitle' in opts ? opts.centerTitle : null;
    let titleSpacing = opts && 'titleSpacing' in opts ? opts.titleSpacing : 16;
    let toolbarOpacity = opts && 'toolbarOpacity' in opts ? opts.toolbarOpacity : 1;
    let bottomOpacity = opts && 'bottomOpacity' in opts ? opts.bottomOpacity : 1;
    let searchBar = opts && 'searchBar' in opts ? opts.searchBar : false;
    let searchHintText = opts && 'searchHintText' in opts ? opts.searchHintText : "Search...";
    let searchHintStyle = opts && 'searchHintStyle' in opts ? opts.searchHintStyle : C857 || CT.C857;
    let searchTextStyle = opts && 'searchTextStyle' in opts ? opts.searchTextStyle : C859 || CT.C859;
    let searchBarColorTheme = opts && 'searchBarColorTheme' in opts ? opts.searchBarColorTheme : C858 || CT.C858;
    let searchController = opts && 'searchController' in opts ? opts.searchController : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[leading$] = leading;
    this[automaticallyImplyLeading$] = automaticallyImplyLeading;
    this[title$1] = title;
    this[actions$] = actions;
    this[flexibleSpace$] = flexibleSpace;
    this[bottom$] = bottom;
    this[elevation$3] = elevation;
    this[shape$8] = shape;
    this[backgroundColor$1] = backgroundColor;
    this[brightness$] = brightness;
    this[iconTheme$] = iconTheme;
    this[actionsIconTheme$] = actionsIconTheme;
    this[textTheme$] = textTheme;
    this[primary$] = primary;
    this[centerTitle$] = centerTitle;
    this[titleSpacing$] = titleSpacing;
    this[toolbarOpacity$] = toolbarOpacity;
    this[bottomOpacity$] = bottomOpacity;
    this[searchBar$] = searchBar;
    this[searchHintText$] = searchHintText;
    this[searchHintStyle$] = searchHintStyle;
    this[searchTextStyle$] = searchTextStyle;
    this[searchBarColorTheme$] = searchBarColorTheme;
    this[searchController$] = searchController;
    this[onTap$] = onTap;
    this[onChanged$0] = onChanged;
    this[onSubmitted$] = onSubmitted;
    if (!(automaticallyImplyLeading != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 59, 16, "automaticallyImplyLeading != null");
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 60, 16, "elevation == null || elevation >= 0.0");
    if (!(primary != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 61, 16, "primary != null");
    if (!(titleSpacing != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 62, 16, "titleSpacing != null");
    if (!(toolbarOpacity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 63, 16, "toolbarOpacity != null");
    if (!(bottomOpacity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 64, 16, "bottomOpacity != null");
    this[preferredSize] = new ui.Size.fromHeight(56 + dart.notNull((t1$0 = (t1$ = (t1 = bottom, t1 == null ? null : t1.preferredSize), t1$ == null ? null : t1$.height), t1$0 == null ? 0 : t1$0)));
    gf_appbar.GFAppBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_appbar.GFAppBar.prototype;
  dart.addTypeTests(gf_appbar.GFAppBar);
  gf_appbar.GFAppBar[dart.implements] = () => [preferred_size.PreferredSizeWidget];
  dart.setMethodSignature(gf_appbar.GFAppBar, () => ({
    __proto__: dart.getMethods(gf_appbar.GFAppBar.__proto__),
    [_getEffectiveCenterTitle]: dart.fnType(core.bool, [theme_data.ThemeData]),
    createState: dart.fnType(gf_appbar._GFAppBarState, [])
  }));
  dart.setLibraryUri(gf_appbar.GFAppBar, "package:getflutter/components/appbar/gf_appbar.dart");
  dart.setFieldSignature(gf_appbar.GFAppBar, () => ({
    __proto__: dart.getFields(gf_appbar.GFAppBar.__proto__),
    leading: dart.finalFieldType(framework.Widget),
    automaticallyImplyLeading: dart.finalFieldType(core.bool),
    title: dart.finalFieldType(framework.Widget),
    actions: dart.finalFieldType(core.List$(framework.Widget)),
    flexibleSpace: dart.finalFieldType(framework.Widget),
    bottom: dart.finalFieldType(preferred_size.PreferredSizeWidget),
    elevation: dart.finalFieldType(core.double),
    shape: dart.finalFieldType(borders.ShapeBorder),
    backgroundColor: dart.finalFieldType(ui.Color),
    brightness: dart.finalFieldType(ui.Brightness),
    iconTheme: dart.finalFieldType(icon_theme_data.IconThemeData),
    actionsIconTheme: dart.finalFieldType(icon_theme_data.IconThemeData),
    textTheme: dart.finalFieldType(text_theme.TextTheme),
    primary: dart.finalFieldType(core.bool),
    centerTitle: dart.finalFieldType(core.bool),
    titleSpacing: dart.finalFieldType(core.double),
    toolbarOpacity: dart.finalFieldType(core.double),
    bottomOpacity: dart.finalFieldType(core.double),
    preferredSize: dart.finalFieldType(ui.Size),
    searchBar: dart.finalFieldType(core.bool),
    searchHintText: dart.finalFieldType(core.String),
    searchHintStyle: dart.finalFieldType(text_style.TextStyle),
    searchTextStyle: dart.finalFieldType(text_style.TextStyle),
    searchBarColorTheme: dart.finalFieldType(ui.Color),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    onSubmitted: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    searchController: dart.finalFieldType(editable_text.TextEditingController),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const _handleDrawerButton = dart.privateName(gf_appbar, "_handleDrawerButton");
  const _handleDrawerButtonEnd = dart.privateName(gf_appbar, "_handleDrawerButtonEnd");
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C863;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C865;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C864;
  let C868;
  let C869;
  let C870;
  let C867;
  let C866;
  const CloseButton_color = dart.privateName(back_button, "CloseButton.color");
  let C871;
  const BackButton_onPressed = dart.privateName(back_button, "BackButton.onPressed");
  const BackButton_color = dart.privateName(back_button, "BackButton.color");
  let C872;
  let C873;
  let C876;
  let C877;
  let C875;
  let C874;
  let C880;
  let C879;
  let C878;
  let C883;
  let C884;
  let C885;
  let C882;
  let C881;
  let C888;
  let C889;
  let C890;
  let C891;
  let C887;
  let C886;
  let C894;
  let C895;
  let C896;
  let C893;
  let C892;
  let C899;
  let C900;
  let C901;
  let C898;
  let C897;
  let C904;
  let C905;
  let C906;
  let C903;
  let C902;
  let C909;
  let C910;
  let C911;
  let C908;
  let C907;
  let C914;
  let C915;
  let C916;
  let C913;
  let C912;
  let C919;
  let C920;
  let C921;
  let C922;
  let C923;
  let C924;
  let C925;
  let C918;
  let C917;
  let C928;
  let C929;
  let C930;
  let C927;
  let C926;
  let C933;
  let C934;
  let C935;
  let C932;
  let C931;
  let C938;
  let C939;
  let C940;
  let C937;
  let C936;
  let C943;
  let C944;
  let C945;
  let C946;
  let C947;
  let C942;
  let C941;
  const SingleChildLayoutDelegate__relayout = dart.privateName(shifted_box, "SingleChildLayoutDelegate._relayout");
  let C948;
  let C951;
  let C952;
  let C950;
  let C949;
  let C955;
  let C956;
  let C954;
  let C953;
  let C959;
  let C958;
  let C957;
  let C960;
  let C963;
  let C964;
  let C962;
  let C961;
  let C967;
  let C966;
  let C965;
  let C970;
  let C971;
  let C969;
  let C968;
  let C974;
  let C975;
  let C973;
  let C972;
  let C978;
  let C979;
  let C977;
  let C976;
  let C982;
  let C983;
  let C981;
  let C980;
  let C986;
  let C987;
  let C985;
  let C984;
  let C990;
  let C991;
  let C989;
  let C988;
  let C994;
  let C995;
  let C996;
  let C997;
  let C993;
  let C992;
  let C1000;
  let C1001;
  let C999;
  let C998;
  let C1004;
  let C1003;
  let C1002;
  gf_appbar._GFAppBarState = class _GFAppBarState extends framework.State$(gf_appbar.GFAppBar) {
    [_handleDrawerButton]() {
      scaffold$.Scaffold.of(this.context).openDrawer();
    }
    [_handleDrawerButtonEnd]() {
      scaffold$.Scaffold.of(this.context).openEndDrawer();
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t2, t1$9, t1$10, t1$11, t2$, t1$12, t1$13, t1$14, t1$15, t1$16, t1$17, t1$18, t1$19, t1$20, t1$21, t1$22, t1$23;
      if (!(!dart.test(this.widget.primary) || dart.test(debug.debugCheckHasMediaQuery(context)))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 307, 12, "!widget.primary || debugCheckHasMediaQuery(context)");
      if (!dart.test(debug$.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 308, 12, "debugCheckHasMaterialLocalizations(context)");
      let theme = theme$.Theme.of(context);
      let appBarTheme = app_bar_theme.AppBarTheme.of(context);
      let scaffold = scaffold$.Scaffold.of(context, {nullOk: true});
      let parentRoute = routes.ModalRoute.of(core.Object, context);
      let hasDrawer = (t1$ = (t1 = scaffold, t1 == null ? null : t1.hasDrawer), t1$ == null ? false : t1$);
      let hasEndDrawer = (t1$1 = (t1$0 = scaffold, t1$0 == null ? null : t1$0.hasEndDrawer), t1$1 == null ? false : t1$1);
      let canPop = (t1$3 = (t1$2 = parentRoute, t1$2 == null ? null : t1$2.canPop), t1$3 == null ? false : t1$3);
      let useCloseButton = pages.PageRoute.is(parentRoute) && dart.test(parentRoute.fullscreenDialog);
      let overallIconTheme = (t1$5 = (t1$4 = this.widget.iconTheme, t1$4 == null ? appBarTheme.iconTheme : t1$4), t1$5 == null ? theme.primaryIconTheme : t1$5);
      let actionsIconTheme = (t1$7 = (t1$6 = this.widget.actionsIconTheme, t1$6 == null ? appBarTheme.actionsIconTheme : t1$6), t1$7 == null ? overallIconTheme : t1$7);
      let centerStyle = (t1$10 = (t1$9 = (t1$8 = this.widget.textTheme, t1$8 == null ? null : t1$8.title), t1$9 == null ? (t2 = appBarTheme.textTheme, t2 == null ? null : t2.title) : t1$9), t1$10 == null ? theme.primaryTextTheme.title : t1$10);
      let sideStyle = (t1$13 = (t1$12 = (t1$11 = this.widget.textTheme, t1$11 == null ? null : t1$11.body1), t1$12 == null ? (t2$ = appBarTheme.textTheme, t2$ == null ? null : t2$.body1) : t1$12), t1$13 == null ? theme.primaryTextTheme.body1 : t1$13);
      if (this.widget.toolbarOpacity !== 1.0) {
        let opacity = (C863 || CT.C863).transform(this.widget.toolbarOpacity);
        if ((t1$14 = centerStyle, t1$14 == null ? null : t1$14.color) != null) {
          centerStyle = centerStyle.copyWith({color: centerStyle.color.withOpacity(opacity)});
        }
        if ((t1$15 = sideStyle, t1$15 == null ? null : t1$15.color) != null) {
          sideStyle = sideStyle.copyWith({color: sideStyle.color.withOpacity(opacity)});
        }
        overallIconTheme = overallIconTheme.copyWith({opacity: dart.notNull(opacity) * dart.notNull((t1$16 = overallIconTheme.opacity, t1$16 == null ? 1.0 : t1$16))});
        actionsIconTheme = actionsIconTheme.copyWith({opacity: dart.notNull(opacity) * dart.notNull((t1$17 = actionsIconTheme.opacity, t1$17 == null ? 1.0 : t1$17))});
      }
      let leading = this.widget.leading;
      if (leading == null && dart.test(this.widget.automaticallyImplyLeading)) {
        if (dart.test(hasDrawer)) {
          leading = new icon_button.IconButton.new({icon: C864 || CT.C864, onPressed: dart.bind(this, _handleDrawerButton), tooltip: material_localizations.MaterialLocalizations.of(context).openAppDrawerTooltip, $creationLocationd_0dea112b090073317d4: C866 || CT.C866});
        } else {
          if (dart.test(canPop)) {
            leading = useCloseButton ? C871 || CT.C871 : C872 || CT.C872;
          }
        }
      }
      if (leading != null) {
        leading = new basic.ConstrainedBox.new({constraints: C873 || CT.C873, child: leading, $creationLocationd_0dea112b090073317d4: C874 || CT.C874});
      }
      let title = this.widget.title;
      if (title != null) {
        let namesRoute = null;
        switch (theme.platform) {
          case C860 || CT.C860:
          case C861 || CT.C861:
          {
            namesRoute = true;
            break;
          }
          case C862 || CT.C862:
          {
            break;
          }
          default:
          {
            break;
          }
        }
        title = new text.DefaultTextStyle.new({style: centerStyle, softWrap: false, overflow: paragraph.TextOverflow.ellipsis, child: new basic.Semantics.new({namesRoute: namesRoute, child: new gf_appbar.GFAppBarTitleBar.new({child: title, $creationLocationd_0dea112b090073317d4: C878 || CT.C878}), header: true, $creationLocationd_0dea112b090073317d4: C881 || CT.C881}), $creationLocationd_0dea112b090073317d4: C886 || CT.C886});
      }
      let actions = null;
      if (this.widget.actions != null && dart.test(this.widget.actions[$isNotEmpty])) {
        actions = new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: this.widget.actions, $creationLocationd_0dea112b090073317d4: C892 || CT.C892});
      } else if (dart.test(hasEndDrawer)) {
        actions = new icon_button.IconButton.new({icon: C864 || CT.C864, onPressed: dart.bind(this, _handleDrawerButtonEnd), tooltip: material_localizations.MaterialLocalizations.of(context).openAppDrawerTooltip, $creationLocationd_0dea112b090073317d4: C897 || CT.C897});
      }
      if (actions != null) {
        actions = icon_theme.IconTheme.merge({data: actionsIconTheme, child: actions});
      }
      this.searchBar = new text_field.TextField.new({cursorColor: this.widget.searchBarColorTheme, style: this.widget.searchTextStyle, decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.search, {color: this.widget.searchBarColorTheme, size: 18.0, $creationLocationd_0dea112b090073317d4: C902 || CT.C902}), suffixIcon: new gf_icon_button.GFIconButton.new({icon: new icon.Icon.new(icons.Icons.close, {color: this.widget.searchBarColorTheme, size: 20.0, $creationLocationd_0dea112b090073317d4: C907 || CT.C907}), type: gf_button_type.GFButtonType.transparent, onPressed: dart.fn(() => {
              this.setState(dart.fn(() => {
                this.showSearchBar = !dart.test(this.showSearchBar);
              }, VoidToNull()));
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C912 || CT.C912}), hintText: this.widget.searchHintText, hintStyle: this.widget.searchHintStyle, focusedBorder: new input_border.UnderlineInputBorder.new({borderSide: new borders.BorderSide.new({width: 1.0, color: this.widget.searchBarColorTheme})})}), onTap: this.widget.onTap, onChanged: this.widget.onChanged, controller: this.widget.searchController, onSubmitted: this.widget.onSubmitted, $creationLocationd_0dea112b090073317d4: C917 || CT.C917});
      if (!dart.test(this.showSearchBar)) {
        this.searchBar = new list_tile.ListTile.new({contentPadding: edge_insets.EdgeInsets.zero, title: title, trailing: new gf_icon_button.GFIconButton.new({icon: new icon.Icon.new(icons.Icons.search, {color: this.widget.searchBarColorTheme, size: 20.0, $creationLocationd_0dea112b090073317d4: C926 || CT.C926}), type: gf_button_type.GFButtonType.transparent, onPressed: dart.fn(() => {
              this.setState(dart.fn(() => {
                this.showSearchBar = !dart.test(this.showSearchBar);
              }, VoidToNull()));
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C931 || CT.C931}), $creationLocationd_0dea112b090073317d4: C936 || CT.C936});
      }
      let toolbar = new navigation_toolbar.NavigationToolbar.new({leading: leading, middle: dart.test(this.widget.searchBar) ? this.searchBar : title, trailing: actions, centerMiddle: this.widget[_getEffectiveCenterTitle](theme), middleSpacing: this.widget.titleSpacing, $creationLocationd_0dea112b090073317d4: C941 || CT.C941});
      let appBar = new basic.ClipRect.new({child: new basic.CustomSingleChildLayout.new({delegate: C948 || CT.C948, child: icon_theme.IconTheme.merge({data: overallIconTheme, child: new text.DefaultTextStyle.new({style: sideStyle, child: toolbar, $creationLocationd_0dea112b090073317d4: C949 || CT.C949})}), $creationLocationd_0dea112b090073317d4: C953 || CT.C953}), $creationLocationd_0dea112b090073317d4: C957 || CT.C957});
      if (this.widget.bottom != null) {
        appBar = new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.ConstrainedBox.new({constraints: C960 || CT.C960, child: appBar, $creationLocationd_0dea112b090073317d4: C961 || CT.C961}), $creationLocationd_0dea112b090073317d4: C965 || CT.C965}), new basic.Opacity.new({opacity: (C863 || CT.C863).transform(this.widget.bottomOpacity), child: this.widget.bottom, $creationLocationd_0dea112b090073317d4: C968 || CT.C968})]), $creationLocationd_0dea112b090073317d4: C972 || CT.C972});
      }
      if (dart.test(this.widget.primary)) {
        appBar = new safe_area.SafeArea.new({top: true, child: appBar, $creationLocationd_0dea112b090073317d4: C976 || CT.C976});
      }
      appBar = new basic.Align.new({alignment: alignment.Alignment.topCenter, child: appBar, $creationLocationd_0dea112b090073317d4: C980 || CT.C980});
      if (this.widget.flexibleSpace != null) {
        appBar = new basic.Stack.new({fit: stack.StackFit.passthrough, children: JSArrayOfWidget().of([this.widget.flexibleSpace, appBar]), $creationLocationd_0dea112b090073317d4: C984 || CT.C984});
      }
      let brightness = (t1$19 = (t1$18 = this.widget.brightness, t1$18 == null ? appBarTheme.brightness : t1$18), t1$19 == null ? theme.primaryColorBrightness : t1$19);
      let overlayStyle = dart.equals(brightness, ui.Brightness.dark) ? system_chrome.SystemUiOverlayStyle.light : system_chrome.SystemUiOverlayStyle.dark;
      return new basic.Semantics.new({container: true, child: new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: overlayStyle, child: new material.Material.new({color: (t1$21 = (t1$20 = this.widget.backgroundColor, t1$20 == null ? appBarTheme.color : t1$20), t1$21 == null ? theme.primaryColor : t1$21), elevation: (t1$23 = (t1$22 = this.widget.elevation, t1$22 == null ? appBarTheme.elevation : t1$22), t1$23 == null ? 4 : t1$23), shape: this.widget.shape, child: new basic.Semantics.new({explicitChildNodes: true, child: appBar, $creationLocationd_0dea112b090073317d4: C988 || CT.C988}), $creationLocationd_0dea112b090073317d4: C992 || CT.C992}), $creationLocationd_0dea112b090073317d4: C998 || CT.C998}), $creationLocationd_0dea112b090073317d4: C1002 || CT.C1002});
    }
  };
  (gf_appbar._GFAppBarState.new = function() {
    this.searchBar = null;
    this.showSearchBar = true;
    gf_appbar._GFAppBarState.__proto__.new.call(this);
    ;
  }).prototype = gf_appbar._GFAppBarState.prototype;
  dart.addTypeTests(gf_appbar._GFAppBarState);
  dart.setMethodSignature(gf_appbar._GFAppBarState, () => ({
    __proto__: dart.getMethods(gf_appbar._GFAppBarState.__proto__),
    [_handleDrawerButton]: dart.fnType(dart.void, []),
    [_handleDrawerButtonEnd]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_appbar._GFAppBarState, "package:getflutter/components/appbar/gf_appbar.dart");
  dart.setFieldSignature(gf_appbar._GFAppBarState, () => ({
    __proto__: dart.getFields(gf_appbar._GFAppBarState.__proto__),
    searchBar: dart.fieldType(framework.Widget),
    showSearchBar: dart.fieldType(core.bool)
  }));
  dart.defineLazy(gf_appbar._GFAppBarState, {
    /*gf_appbar._GFAppBarState._defaultElevation*/get _defaultElevation() {
      return 4;
    }
  });
  gf_appbar._ToolbarContainerLayout = class _ToolbarContainerLayout extends shifted_box.SingleChildLayoutDelegate {
    getConstraintsForChild(constraints) {
      return constraints.tighten({height: 56});
    }
    getSize(constraints) {
      return new ui.Size.new(constraints.maxWidth, 56);
    }
    getPositionForChild(size, childSize) {
      return new ui.Offset.new(0.0, dart.notNull(size.height) - dart.notNull(childSize.height));
    }
    shouldRelayout(oldDelegate) {
      gf_appbar._ToolbarContainerLayout._check(oldDelegate);
      return false;
    }
  };
  (gf_appbar._ToolbarContainerLayout.new = function() {
    gf_appbar._ToolbarContainerLayout.__proto__.new.call(this);
    ;
  }).prototype = gf_appbar._ToolbarContainerLayout.prototype;
  dart.addTypeTests(gf_appbar._ToolbarContainerLayout);
  dart.setMethodSignature(gf_appbar._ToolbarContainerLayout, () => ({
    __proto__: dart.getMethods(gf_appbar._ToolbarContainerLayout.__proto__),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(gf_appbar._ToolbarContainerLayout, "package:getflutter/components/appbar/gf_appbar.dart");
  gf_appbar.GFAppBarTitleBar = class GFAppBarTitleBar extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      return new gf_appbar.RenderGFAppBarTitleBar.new({textDirection: basic.Directionality.of(context)});
    }
    updateRenderObject(context, renderObject) {
      gf_appbar.RenderGFAppBarTitleBar._check(renderObject);
      renderObject.textDirection = basic.Directionality.of(context);
    }
  };
  (gf_appbar.GFAppBarTitleBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/getflutter/components/appbar/gf_appbar.dart", 605, 16, "child != null");
    gf_appbar.GFAppBarTitleBar.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = gf_appbar.GFAppBarTitleBar.prototype;
  dart.addTypeTests(gf_appbar.GFAppBarTitleBar);
  dart.setMethodSignature(gf_appbar.GFAppBarTitleBar, () => ({
    __proto__: dart.getMethods(gf_appbar.GFAppBarTitleBar.__proto__),
    createRenderObject: dart.fnType(gf_appbar.RenderGFAppBarTitleBar, [framework.BuildContext])
  }));
  dart.setLibraryUri(gf_appbar.GFAppBarTitleBar, "package:getflutter/components/appbar/gf_appbar.dart");
  gf_appbar.RenderGFAppBarTitleBar = class RenderGFAppBarTitleBar extends shifted_box.RenderAligningShiftedBox {
    performLayout() {
      let innerConstraints = this.constraints.copyWith({maxHeight: 1 / 0});
      this.child.layout(innerConstraints, {parentUsesSize: true});
      this.size = this.constraints.constrain(this.child.size);
      this.alignChild();
    }
  };
  (gf_appbar.RenderGFAppBarTitleBar.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    gf_appbar.RenderGFAppBarTitleBar.__proto__.new.call(this, {child: child, alignment: alignment.Alignment.center, textDirection: textDirection});
    ;
  }).prototype = gf_appbar.RenderGFAppBarTitleBar.prototype;
  dart.addTypeTests(gf_appbar.RenderGFAppBarTitleBar);
  dart.setLibraryUri(gf_appbar.RenderGFAppBarTitleBar, "package:getflutter/components/appbar/gf_appbar.dart");
  dart.defineLazy(gf_appbar, {
    /*gf_appbar._kLeadingWidth*/get _kLeadingWidth() {
      return 56;
    }
  });
  dart.trackLibraries("packages/getflutter/components/appbar/gf_appbar", {
    "package:getflutter/components/search_bar/gf_search_bar.dart": gf_search_bar,
    "package:getflutter/getflutter.dart": getflutter,
    "package:getflutter/components/typography/gf_typography.dart": gf_typography,
    "package:getflutter/components/toggle/gf_toggle.dart": gf_toggle,
    "package:getflutter/components/toast/gf_toast.dart": gf_toast,
    "package:getflutter/components/toast/gf_floating_widget.dart": gf_floating_widget,
    "package:getflutter/components/tabs/gf_segment_tabs.dart": gf_segment_tabs,
    "package:getflutter/components/tabs/gf_tabs.dart": gf_tabs,
    "package:getflutter/components/tabs/gf_tabbar_view.dart": gf_tabbar_view,
    "package:getflutter/components/tabs/gf_tabBar.dart": gf_tabBar,
    "package:getflutter/components/list_tile/gf_list_tile.dart": gf_list_tile,
    "package:getflutter/components/drawer/gf_drawer_header.dart": gf_drawer_header,
    "package:getflutter/components/button/gf_icon_button.dart": gf_icon_button,
    "package:getflutter/components/card/gf_card.dart": gf_card,
    "package:getflutter/components/button/gf_button_bar.dart": gf_button_bar,
    "package:getflutter/components/button/gf_social_button.dart": gf_social_button,
    "package:getflutter/components/button/gf_button.dart": gf_button,
    "package:getflutter/components/badge/gf_icon_badge.dart": gf_icon_badge,
    "package:getflutter/components/badge/gf_button_badge.dart": gf_button_badge,
    "package:getflutter/components/badge/gf_badge.dart": gf_badge,
    "package:getflutter/components/avatar/gf_avatar.dart": gf_avatar,
    "package:getflutter/components/appbar/gf_appbar.dart": gf_appbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../search_bar/gf_search_bar.dart","../typography/gf_typography.dart","../toggle/gf_toggle.dart","../toast/gf_toast.dart","../toast/gf_floating_widget.dart","../tabs/gf_segment_tabs.dart","../tabs/gf_tabs.dart","../tabs/gf_tabbar_view.dart","../tabs/gf_tabBar.dart","../list_tile/gf_list_tile.dart","../drawer/gf_drawer_header.dart","../button/gf_icon_button.dart","../card/gf_card.dart","../button/gf_button_bar.dart","../button/gf_button.dart","../button/gf_social_button.dart","../badge/gf_icon_badge.dart","../badge/gf_button_badge.dart","../badge/gf_badge.dart","../avatar/gf_avatar.dart","gf_appbar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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,qBACS,+BAAU,wBACjB,uBACN,iBACA,wBACO,mCACI,qCACF,2CACI;IAGxB;;;;QAhQC;QACW;QACV;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACiB;QACjB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IArCU;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACqB,iCACI,KAAtB,qBAAqB,QAArB,OAA+C;UAC5C,AAAM,KAAD,IAAI,yBAAM;UAEf,AAAuB,cAAT,IAAI,QAAuB,aAAf,cAAc,KAAI;UAC5C,AAAuB,cAAT,IAAI,QAAuB,aAAf,cAAc,KAAI;UAC5C,AAA2B,kBAAT,IAAI,QAA2B,aAAnB,kBAAkB,KAAI;UACpD,AAA0B,iBAAT,IAAI,QAA0B,aAAlB,iBAAiB,KAAI;UAClD,AAAQ,OAAD,IAAI;UACX,AAAkB,iBAAD,IAAI;UACrB,AAAa,YAAD,IAAI;UAChB,AAAU,SAAD,IAAI;AACpB,iEAAW,GAAG,aAAa,SAAS;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICxC1B;;;;;;IAGC;;;;;;IAGC;;;;;;IAGL;;;;;;IAGA;;;;;;IAGD;;;;;;IAGA;;;;;;IAGG;;;;;;IAGF;;;;;;;AAGiB;IAAe;;;QAzCxC;QACC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IARA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAM,KAAD,IAAI,yBAAM;AACtB,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6CsB,MAAzC,aAAiB,6BAAW,AAAO;A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","file":"gf_appbar.ddc.js"}');
  // Exports:
  return {
    components__search_bar__gf_search_bar: gf_search_bar,
    getflutter: getflutter,
    components__typography__gf_typography: gf_typography,
    components__toggle__gf_toggle: gf_toggle,
    components__toast__gf_toast: gf_toast,
    components__toast__gf_floating_widget: gf_floating_widget,
    components__tabs__gf_segment_tabs: gf_segment_tabs,
    components__tabs__gf_tabs: gf_tabs,
    components__tabs__gf_tabbar_view: gf_tabbar_view,
    components__tabs__gf_tabBar: gf_tabBar,
    components__list_tile__gf_list_tile: gf_list_tile,
    components__drawer__gf_drawer_header: gf_drawer_header,
    components__button__gf_icon_button: gf_icon_button,
    components__card__gf_card: gf_card,
    components__button__gf_button_bar: gf_button_bar,
    components__button__gf_social_button: gf_social_button,
    components__button__gf_button: gf_button,
    components__badge__gf_icon_badge: gf_icon_badge,
    components__badge__gf_button_badge: gf_button_badge,
    components__badge__gf_badge: gf_badge,
    components__avatar__gf_avatar: gf_avatar,
    components__appbar__gf_appbar: gf_appbar
  };
});

//# sourceMappingURL=gf_appbar.ddc.js.map
