"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FeedbackCarousel.tsx":
/*!*********************************************!*\
  !*** ./src/components/FeedbackCarousel.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeedbackCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Quote_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Quote!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/quote.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Quote_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Quote!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Quote_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Quote!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants/index.ts\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/effect-coverflow */ \"(app-pages-browser)/./node_modules/swiper/modules/effect-coverflow.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction FeedbackCarousel() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);\n    const goToImg = (idx)=>{\n        setCurrentIndex(idx);\n    };\n    const handleSlideChange = (swiper)=>{\n        setCurrentIndex(swiper.activeIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex justify-center items-center w-full h-[400px] lg:h-[594px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/Feedback bg.jpg\",\n                    alt: \"Feedback BG\",\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute flex items-center flex-col gap-8 w-[50%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-[-20px] left-[49%] p-2 rounded-full bg-yellow-700 w-fit \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_Quote_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                color: \"white\",\n                                size: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        _constants__WEBPACK_IMPORTED_MODULE_2__.feedbacks.map((feedback, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center shadow-lg shadow-black bg-white rounded-lg p-6 \".concat(idx === currentIndex ? \"opacity-100\" : \"opacity-0 hidden\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-gray-500\",\n                                        children: feedback.comment\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold pt-3 text-xl capitalize\",\n                                        children: feedback.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-orange-800 capitalize\",\n                                        children: feedback.verified\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, idx, true, {\n                                fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                            effect: \"coverflow\",\n                            grabCursor: true,\n                            centeredSlides: true,\n                            loop: true,\n                            slidesPerView: 5,\n                            coverflowEffect: {\n                                rotate: 0,\n                                stretch: 0,\n                                depth: 100,\n                                modifier: 2.5\n                            },\n                            navigation: {\n                                nextEl: \".swiper-button-next\",\n                                prevEl: \".swiper-button-prev\"\n                            },\n                            modules: [\n                                swiper_modules__WEBPACK_IMPORTED_MODULE_4__.EffectCoverflow,\n                                swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation\n                            ],\n                            onSlideChange: (swiper)=>handleSlideChange(swiper),\n                            className: \"swiper_container\",\n                            children: [\n                                _constants__WEBPACK_IMPORTED_MODULE_2__.feedbacks.map((feedback, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: ()=>goToImg(idx),\n                                            className: \"relative mx-3 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-yellow-700\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                src: feedback.image,\n                                                alt: feedback.name,\n                                                layout: \"fill\",\n                                                objectFit: \"cover\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, idx, false, {\n                                            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"swiper-button-prev hover:scale-150 ease-in-out duration-300\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_Quote_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                size: 10\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"swiper-button-next \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_Quote_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"swiper-pagination\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\16676\\\\Web Dev\\\\Official\\\\onyiisi\\\\src\\\\components\\\\FeedbackCarousel.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(FeedbackCarousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = FeedbackCarousel;\nvar _c;\n$RefreshReg$(_c, \"FeedbackCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlZWRiYWNrQ2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStEO0FBQ2pDO0FBQ1M7QUFDVztBQUNzQjtBQUVyRDtBQUNpQjtBQUNOO0FBQ0E7QUFDRTtBQUVqQixTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0gsK0NBQVFBLENBQUM7SUFDakQsTUFBTUksVUFBVSxDQUFDQztRQUNmRixnQkFBZ0JFO0lBQ2xCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCSixnQkFBZ0JJLE9BQU9DLFdBQVc7SUFDcEM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNoQixrREFBS0E7b0JBQ0ppQixLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxRQUFPO29CQUNQQyxXQUFVOzs7Ozs7OEJBRVosOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNqQiwyR0FBS0E7Z0NBQUNzQixPQUFNO2dDQUFRQyxNQUFNOzs7Ozs7Ozs7Ozt3QkFFNUJyQixpREFBU0EsQ0FBQ3NCLEdBQUcsQ0FBQyxDQUFDQyxVQUFVYixvQkFDeEIsOERBQUNJO2dDQUVDQyxXQUFXLDhEQUVWLE9BRENMLFFBQVFILGVBQWUsZ0JBQWdCLG9CQUN4Qzs7a0RBRUQsOERBQUNpQjt3Q0FBRVQsV0FBVTtrREFBeUJRLFNBQVNFLE9BQU87Ozs7OztrREFDdEQsOERBQUNDO3dDQUFHWCxXQUFVO2tEQUNYUSxTQUFTSSxJQUFJOzs7Ozs7a0RBRWhCLDhEQUFDSDt3Q0FBRVQsV0FBVTtrREFDVlEsU0FBU0ssUUFBUTs7Ozs7OzsrQkFWZmxCOzs7OztzQ0FjVCw4REFBQ1QsZ0RBQU1BOzRCQUNMNEIsUUFBUTs0QkFDUkMsWUFBWTs0QkFDWkMsZ0JBQWdCOzRCQUNoQkMsTUFBTTs0QkFDTkMsZUFBZTs0QkFDZkMsaUJBQWlCO2dDQUNmQyxRQUFRO2dDQUNSQyxTQUFTO2dDQUNUQyxPQUFPO2dDQUNQQyxVQUFVOzRCQUNaOzRCQUNBQyxZQUFZO2dDQUNWQyxRQUFRO2dDQUNSQyxRQUFROzRCQUNWOzRCQUNBQyxTQUFTO2dDQUFDdkMsMkRBQWVBO2dDQUFFQyxzREFBVUE7NkJBQUM7NEJBQ3RDdUMsZUFBZSxDQUFDL0IsU0FBbUJELGtCQUFrQkM7NEJBQ3JERyxXQUFVOztnQ0FFVGYsaURBQVNBLENBQUNzQixHQUFHLENBQUMsQ0FBQ0MsVUFBVWIsb0JBQ3hCLDhEQUFDUixxREFBV0E7a0RBQ1YsNEVBQUNZOzRDQUNDOEIsU0FBUyxJQUFNbkMsUUFBUUM7NENBRXZCSyxXQUFVO3NEQUVWLDRFQUFDaEIsa0RBQUtBO2dEQUNKaUIsS0FBS08sU0FBU3NCLEtBQUs7Z0RBQ25CNUIsS0FBS00sU0FBU0ksSUFBSTtnREFDbEJULFFBQU87Z0RBQ1BDLFdBQVU7Ozs7OzsyQ0FQUFQ7Ozs7Ozs7Ozs7OENBYVgsOERBQUNJO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNuQiwyR0FBV0E7Z0RBQUN5QixNQUFNOzs7Ozs7Ozs7OztzREFFckIsOERBQUNQOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDbEIsMkdBQVlBOzs7Ozs7Ozs7O3NEQUVmLDhEQUFDaUI7NENBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0dBMUZ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVlZGJhY2tDYXJvdXNlbC50c3g/ZGZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQsIFF1b3RlIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgZmVlZGJhY2tzIH0gZnJvbSAnQC9jb25zdGFudHMnXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnXHJcbmltcG9ydCB7IEVmZmVjdENvdmVyZmxvdywgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJ1xyXG5cclxuaW1wb3J0ICdzd2lwZXIvY3NzJ1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvZWZmZWN0LWNvdmVyZmxvdydcclxuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nXHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZGJhY2tDYXJvdXNlbCgpIHtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBnb1RvSW1nID0gKGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgoaWR4KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2xpZGVDaGFuZ2UgPSAoc3dpcGVyOiBTd2lwZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbmRleChzd2lwZXIuYWN0aXZlSW5kZXgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21iLTEwJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLVs0MDBweF0gbGc6aC1bNTk0cHhdJz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz0nL0ZlZWRiYWNrIGJnLmpwZydcclxuICAgICAgICAgIGFsdD0nRmVlZGJhY2sgQkcnXHJcbiAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXHJcbiAgICAgICAgICBvYmplY3RGaXQ9J2NvdmVyJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIGdhcC04IHctWzUwJV0nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bLTIwcHhdIGxlZnQtWzQ5JV0gcC0yIHJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNzAwIHctZml0ICc+XHJcbiAgICAgICAgICAgIDxRdW90ZSBjb2xvcj0nd2hpdGUnIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZmVlZGJhY2tzLm1hcCgoZmVlZGJhY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgc2hhZG93LWxnIHNoYWRvdy1ibGFjayBiZy13aGl0ZSByb3VuZGVkLWxnIHAtNiAke1xyXG4gICAgICAgICAgICAgICAgaWR4ID09PSBjdXJyZW50SW5kZXggPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCBoaWRkZW4nXHJcbiAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIHRleHQtZ3JheS01MDAnPntmZWVkYmFjay5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHB0LTMgdGV4dC14bCBjYXBpdGFsaXplJz5cclxuICAgICAgICAgICAgICAgIHtmZWVkYmFjay5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtb3JhbmdlLTgwMCBjYXBpdGFsaXplJz5cclxuICAgICAgICAgICAgICAgIHtmZWVkYmFjay52ZXJpZmllZH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgIGVmZmVjdD17J2NvdmVyZmxvdyd9XHJcbiAgICAgICAgICAgIGdyYWJDdXJzb3I9e3RydWV9XHJcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxyXG4gICAgICAgICAgICBsb29wPXt0cnVlfVxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXs1fVxyXG4gICAgICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q9e3tcclxuICAgICAgICAgICAgICByb3RhdGU6IDAsXHJcbiAgICAgICAgICAgICAgc3RyZXRjaDogMCxcclxuICAgICAgICAgICAgICBkZXB0aDogMTAwLFxyXG4gICAgICAgICAgICAgIG1vZGlmaWVyOiAyLjUsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb249e3tcclxuICAgICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbW9kdWxlcz17W0VmZmVjdENvdmVyZmxvdywgTmF2aWdhdGlvbl19XHJcbiAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eyhzd2lwZXI6IFN3aXBlcikgPT4gaGFuZGxlU2xpZGVDaGFuZ2Uoc3dpcGVyKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzd2lwZXJfY29udGFpbmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZmVlZGJhY2tzLm1hcCgoZmVlZGJhY2ssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub0ltZyhpZHgpfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBteC0zIGgtWzEyMHB4XSB3LVsxMjBweF0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXIteWVsbG93LTcwMCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWVkYmFjay5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2ZlZWRiYWNrLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzd2lwZXItYnV0dG9uLXByZXYgaG92ZXI6c2NhbGUtMTUwIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCc+XHJcbiAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnQgc2l6ZT17MTB9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N3aXBlci1idXR0b24tbmV4dCAnPlxyXG4gICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzd2lwZXItcGFnaW5hdGlvbic+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDaGV2cm9uTGVmdCIsIkNoZXZyb25SaWdodCIsIlF1b3RlIiwiSW1hZ2UiLCJmZWVkYmFja3MiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkVmZmVjdENvdmVyZmxvdyIsIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsIkZlZWRiYWNrQ2Fyb3VzZWwiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJnb1RvSW1nIiwiaWR4IiwiaGFuZGxlU2xpZGVDaGFuZ2UiLCJzd2lwZXIiLCJhY3RpdmVJbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImNvbG9yIiwic2l6ZSIsIm1hcCIsImZlZWRiYWNrIiwicCIsImNvbW1lbnQiLCJoMyIsIm5hbWUiLCJ2ZXJpZmllZCIsImVmZmVjdCIsImdyYWJDdXJzb3IiLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJzbGlkZXNQZXJWaWV3IiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibW9kdWxlcyIsIm9uU2xpZGVDaGFuZ2UiLCJvbkNsaWNrIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FeedbackCarousel.tsx\n"));

/***/ })

});