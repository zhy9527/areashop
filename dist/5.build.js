webpackJsonp([5],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue__ = __webpack_require__(78);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_07b31e74_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_bottom_vue__ = __webpack_require__(90);
function injectStyle (ssrContext) {
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07b31e74"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_07b31e74_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_bottom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 78:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bottom',
  data: function data() {
    return {
      con: ''
    };
  },
  props: {
    bottomData: {
      default: function _default() {
        return bottomData;
      }
    }
  },
  methods: {
    receive: function receive() {
      console.log(1);
      this.$emit('submit');
    }
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("278053ce", content, true, {});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*\n *常用颜色和主色\n */\n/*\n *分割线\n */\n/*\n *主要和次要颜色\n */\n/*\n *成功，信息，警告，危险对应色值\n */\n/*\n *排版Typography\n */\n/*\n *Font, line-height, and color for body text, headings, and more.\n */\n/*\n *常用颜色和主色\n */\n/*\n *分割线\n */\n/*\n *主要和次要颜色\n */\n/*\n *成功，信息，警告，危险对应色值\n */\n/*\n *排版Typography\n */\n/*\n *Font, line-height, and color for body text, headings, and more.\n */\n/* 动画 */\n/* 边框圆角 */\n/* 弹性布局 */\n/* Box pack,横轴对其方式\n** start:左对齐\n** end: 右对齐\n** center:中间对齐\n** justify:两端对齐\n*/\n/* 项目排列方向\n** horizontal: 从左到右排列\n** vertical: 从上到下垂直排列\n** inline-axis: 沿着行内轴来排列子元素\n** block-axis: 沿着块轴来排列子元素\n** inherit: 从父级继承box-orient属性\n*/\n/* 关闭按钮 */\n/* 显示省略号（...） */\n/* 阴影（...） */\n/* 定位（...） */\n/* 清除浮动 */\n/* 定义高宽 */\n/* 盒子模型 */\n/* 过渡 */\nfooter[data-v-07b31e74] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n  height: .45rem;\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.15);\n}\nfooter > div[data-v-07b31e74] {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-box;\n    display: -o-box;\n    display: box;\n}\nfooter .price[data-v-07b31e74] {\n    -webkit-box-flex: 1;\n    -moz-box-flex: 1;\n    -ms-box-flex: 1;\n    -o-box-flex: 1;\n    box-flex: 1;\n    line-height: .5rem;\n    padding-left: .1rem;\n}\nfooter .price small[data-v-07b31e74] {\n      font-size: 0.12rem;\n      color: #ff8000;\n}\nfooter .price strong[data-v-07b31e74] {\n      font-size: .18rem;\n      color: #ff8000;\n      font-weight: 500;\n}\nfooter .price span[data-v-07b31e74] {\n      color: #878787;\n      font-size: 0.12rem;\n}\nfooter .btn[data-v-07b31e74] {\n    width: 1.1rem;\n    text-align: center;\n    background: #ff8000;\n    font-size: .18rem;\n    line-height: .45rem;\n    color: #fff;\n}\nfooter .footer-item[data-v-07b31e74] {\n    -webkit-box-flex: 1;\n    -moz-box-flex: 1;\n    -ms-box-flex: 1;\n    -o-box-flex: 1;\n    box-flex: 1;\n    display: block;\n    width: 100%;\n    color: #3a3a3a;\n    text-align: center;\n    line-height: .45rem;\n    font-size: .18rem;\n}\nfooter .footer-item[data-v-07b31e74]:last-of-type {\n    background: #ff8000;\n    color: #fff;\n}\nfooter .footer-item:last-of-type.dis[data-v-07b31e74] {\n      background: #bfbfbf;\n}\n", ""]);

// exports


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.bottomData.con == 0),expression:"bottomData.con == 0"}]},[_c('div',{staticClass:"price"},[_c('small',[_vm._v("待支付: ￥")]),_vm._v(" "),_c('span',{staticClass:"totalPrice"},[_c('strong',[_vm._v(_vm._s(_vm.bottomData.price))]),_c('small',[_vm._v(_vm._s(_vm.bottomData.price))])]),_vm._v(" "),_c('span',[_vm._v("(20人可领)")])]),_vm._v(" "),_c('div',{staticClass:"btn"},[_vm._v("提交订单")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.bottomData.con == 1),expression:"bottomData.con == 1"}]},[_c('a',{staticClass:"footer-item cancel",attrs:{"href":"javascript:;"}},[_vm._v(" 取消订单 ")]),_vm._v(" "),_c('a',{staticClass:"footer-item pay",attrs:{"href":"javascript:;"}},[_vm._v(" 立即支付 ")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.bottomData.con == 2),expression:"bottomData.con == 2"}]},[_c('a',{staticClass:"footer-item refund",attrs:{"href":"javascript:;"}},[_vm._v(" 退款进度 ")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});