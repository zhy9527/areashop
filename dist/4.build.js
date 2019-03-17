webpackJsonp([4],{

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__(76);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_6aee2544_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__(84);
function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6aee2544"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_6aee2544_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'footer',
  data: function data() {
    return {
      msg: ''
    };
  }
});

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("73357d49", content, true, {});

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*\n *常用颜色和主色\n */\n/*\n *分割线\n */\n/*\n *主要和次要颜色\n */\n/*\n *成功，信息，警告，危险对应色值\n */\n/*\n *排版Typography\n */\n/*\n *Font, line-height, and color for body text, headings, and more.\n */\n/* 动画 */\n/* 边框圆角 */\n/* 弹性布局 */\n/* Box pack,横轴对其方式\n** start:左对齐\n** end: 右对齐\n** center:中间对齐\n** justify:两端对齐\n*/\n/* 项目排列方向\n** horizontal: 从左到右排列\n** vertical: 从上到下垂直排列\n** inline-axis: 沿着行内轴来排列子元素\n** block-axis: 沿着块轴来排列子元素\n** inherit: 从父级继承box-orient属性\n*/\n/* 关闭按钮 */\n/* 显示省略号（...） */\n/* 阴影（...） */\n/* 定位（...） */\n/* 清除浮动 */\n/* 定义高宽 */\n/* 盒子模型 */\n/* 过渡 */\n.has-footer[data-v-6aee2544] {\n  margin-bottom: .46rem;\n}\n.main-nav[data-v-6aee2544] {\n  top: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  position: fixed;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.15);\n  background: #fff;\n  height: .44rem;\n  line-height: 1.2;\n  z-index: 100;\n}\n.main-nav a[data-v-6aee2544] {\n    width: 1%;\n    color: #3a3a3a;\n    display: block;\n    text-align: center;\n    -webkit-flex: 1;\n    -moz-flex: 1;\n    -ms-flex: 1;\n    -o-flex: 1;\n    flex: 1;\n}\n.main-nav a.router-link-exact-active[data-v-6aee2544] {\n      color: #75A739;\n      fill: #75A739;\n}\n.main-nav span[data-v-6aee2544] {\n    font-size: .1rem;\n    font-weight: 200;\n    display: inherit;\n}\n.main-nav .icon[data-v-6aee2544] {\n    width: .24rem;\n    height: .24rem;\n    display: block;\n    margin: auto;\n    overflow: hidden;\n    padding: .04rem 0 .03rem 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"has-footer"},[_c('footer',{staticClass:"main-nav"},[_c('router-link',{staticClass:"footer-item",attrs:{"to":"/","href":"#"}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":"#icon-shouye"}})]),_vm._v(" "),_c('span',[_vm._v("首页")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"class"}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":"#icon-all"}})]),_vm._v(" "),_c('span',[_vm._v("分类")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"cart"}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":"#icon-gouwuche"}})]),_vm._v(" "),_c('span',[_vm._v("购物车")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"me"}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":"#icon-yonghumorentouxiang"}})]),_vm._v(" "),_c('span',[_vm._v("我的")])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});