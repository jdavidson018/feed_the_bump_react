"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/zustand/esm/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   createStore: () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore),\n/* harmony export */   \"default\": () => (/* binding */ react),\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ \"(ssr)/./node_modules/zustand/esm/vanilla.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ \"(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\");\n\n\n\n\n\nconst { useDebugValue } = react__WEBPACK_IMPORTED_MODULE_1__;\nconst { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;\nlet didWarnAboutEqualityFn = false;\nfunction useStore(api, selector = api.getState, equalityFn) {\n  if (( false ? 0 : void 0) !== \"production\" && equalityFn && !didWarnAboutEqualityFn) {\n    console.warn(\n      \"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937\"\n    );\n    didWarnAboutEqualityFn = true;\n  }\n  const slice = useSyncExternalStoreWithSelector(\n    api.subscribe,\n    api.getState,\n    api.getServerState || api.getState,\n    selector,\n    equalityFn\n  );\n  useDebugValue(slice);\n  return slice;\n}\nconst createImpl = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\" && typeof createState !== \"function\") {\n    console.warn(\n      \"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.\"\n    );\n  }\n  const api = typeof createState === \"function\" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore)(createState) : createState;\n  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);\n  Object.assign(useBoundStore, api);\n  return useBoundStore;\n};\nconst create = (createState) => createState ? createImpl(createState) : createImpl;\nvar react = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\") {\n    console.warn(\n      \"[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.\"\n    );\n  }\n  return create(createState);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUNDO0FBQ3VEOztBQUV4RixRQUFRLGdCQUFnQixFQUFFLGtDQUFZO0FBQ3RDLFFBQVEsbUNBQW1DLEVBQUUsMEVBQTJCO0FBQ3hFO0FBQ0E7QUFDQSxPQUFPLE1BQWUsR0FBRyxDQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0EsMkdBQTJHLFdBQVc7QUFDdEg7QUFDQTtBQUNBLGtEQUFrRCw0REFBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQWUsR0FBRyxDQUFvQjtBQUM3QztBQUNBLHdFQUF3RSxTQUFTO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kdWktcHJvdG9jb2wvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXgubWpzPzk2YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd6dXN0YW5kL3ZhbmlsbGEnO1xuZXhwb3J0ICogZnJvbSAnenVzdGFuZC92YW5pbGxhJztcbmltcG9ydCBSZWFjdEV4cG9ydHMgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlRXhwb3J0cyBmcm9tICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuanMnO1xuXG5jb25zdCB7IHVzZURlYnVnVmFsdWUgfSA9IFJlYWN0RXhwb3J0cztcbmNvbnN0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgfSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlRXhwb3J0cztcbmxldCBkaWRXYXJuQWJvdXRFcXVhbGl0eUZuID0gZmFsc2U7XG5mdW5jdGlvbiB1c2VTdG9yZShhcGksIHNlbGVjdG9yID0gYXBpLmdldFN0YXRlLCBlcXVhbGl0eUZuKSB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBlcXVhbGl0eUZuICYmICFkaWRXYXJuQWJvdXRFcXVhbGl0eUZuKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbREVQUkVDQVRFRF0gVXNlIGBjcmVhdGVXaXRoRXF1YWxpdHlGbmAgaW5zdGVhZCBvZiBgY3JlYXRlYCBvciB1c2UgYHVzZVN0b3JlV2l0aEVxdWFsaXR5Rm5gIGluc3RlYWQgb2YgYHVzZVN0b3JlYC4gVGhleSBjYW4gYmUgaW1wb3J0ZWQgZnJvbSAnenVzdGFuZC90cmFkaXRpb25hbCcuIGh0dHBzOi8vZ2l0aHViLmNvbS9wbW5kcnMvenVzdGFuZC9kaXNjdXNzaW9ucy8xOTM3XCJcbiAgICApO1xuICAgIGRpZFdhcm5BYm91dEVxdWFsaXR5Rm4gPSB0cnVlO1xuICB9XG4gIGNvbnN0IHNsaWNlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgYXBpLnN1YnNjcmliZSxcbiAgICBhcGkuZ2V0U3RhdGUsXG4gICAgYXBpLmdldFNlcnZlclN0YXRlIHx8IGFwaS5nZXRTdGF0ZSxcbiAgICBzZWxlY3RvcixcbiAgICBlcXVhbGl0eUZuXG4gICk7XG4gIHVzZURlYnVnVmFsdWUoc2xpY2UpO1xuICByZXR1cm4gc2xpY2U7XG59XG5jb25zdCBjcmVhdGVJbXBsID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgY3JlYXRlU3RhdGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIFBhc3NpbmcgYSB2YW5pbGxhIHN0b3JlIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgYGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnenVzdGFuZCdgLlwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBhcGkgPSB0eXBlb2YgY3JlYXRlU3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0YXRlO1xuICBjb25zdCB1c2VCb3VuZFN0b3JlID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuKSA9PiB1c2VTdG9yZShhcGksIHNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgT2JqZWN0LmFzc2lnbih1c2VCb3VuZFN0b3JlLCBhcGkpO1xuICByZXR1cm4gdXNlQm91bmRTdG9yZTtcbn07XG5jb25zdCBjcmVhdGUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlSW1wbChjcmVhdGVTdGF0ZSkgOiBjcmVhdGVJbXBsO1xudmFyIHJlYWN0ID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIERlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgdXNlIGBpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd6dXN0YW5kJ2AuXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGUoY3JlYXRlU3RhdGUpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlLCByZWFjdCBhcyBkZWZhdWx0LCB1c2VTdG9yZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand/esm/vanilla.mjs":
/*!**********************************************!*\
  !*** ./node_modules/zustand/esm/vanilla.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   \"default\": () => (/* binding */ vanilla)\n/* harmony export */ });\nconst createStoreImpl = (createState) => {\n  let state;\n  const listeners = /* @__PURE__ */ new Set();\n  const setState = (partial, replace) => {\n    const nextState = typeof partial === \"function\" ? partial(state) : partial;\n    if (!Object.is(nextState, state)) {\n      const previousState = state;\n      state = (replace != null ? replace : typeof nextState !== \"object\" || nextState === null) ? nextState : Object.assign({}, state, nextState);\n      listeners.forEach((listener) => listener(state, previousState));\n    }\n  };\n  const getState = () => state;\n  const subscribe = (listener) => {\n    listeners.add(listener);\n    return () => listeners.delete(listener);\n  };\n  const destroy = () => {\n    if (( false ? 0 : void 0) !== \"production\") {\n      console.warn(\n        \"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.\"\n      );\n    }\n    listeners.clear();\n  };\n  const api = { setState, getState, subscribe, destroy };\n  state = createState(setState, getState, api);\n  return api;\n};\nconst createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;\nvar vanilla = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\") {\n    console.warn(\n      \"[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.\"\n    );\n  }\n  return createStore(createState);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhIQUE4SDtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQWUsR0FBRyxDQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0EsdUVBQXVFLGNBQWM7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS1wcm90b2NvbC8uL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS92YW5pbGxhLm1qcz85ZmEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZVN0b3JlSW1wbCA9IChjcmVhdGVTdGF0ZSkgPT4ge1xuICBsZXQgc3RhdGU7XG4gIGNvbnN0IGxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IHNldFN0YXRlID0gKHBhcnRpYWwsIHJlcGxhY2UpID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB0eXBlb2YgcGFydGlhbCA9PT0gXCJmdW5jdGlvblwiID8gcGFydGlhbChzdGF0ZSkgOiBwYXJ0aWFsO1xuICAgIGlmICghT2JqZWN0LmlzKG5leHRTdGF0ZSwgc3RhdGUpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlID0gc3RhdGU7XG4gICAgICBzdGF0ZSA9IChyZXBsYWNlICE9IG51bGwgPyByZXBsYWNlIDogdHlwZW9mIG5leHRTdGF0ZSAhPT0gXCJvYmplY3RcIiB8fCBuZXh0U3RhdGUgPT09IG51bGwpID8gbmV4dFN0YXRlIDogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKHN0YXRlLCBwcmV2aW91c1N0YXRlKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHN0YXRlO1xuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiW0RFUFJFQ0FURURdIFRoZSBgZGVzdHJveWAgbWV0aG9kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgdW5zdWJzY3JpYmUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgc3Vic2NyaWJlLiBFdmVyeXRoaW5nIHdpbGwgYmUgZ2FyYmFnZS1jb2xsZWN0ZWQgaWYgc3RvcmUgaXMgZ2FyYmFnZS1jb2xsZWN0ZWQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICB9O1xuICBjb25zdCBhcGkgPSB7IHNldFN0YXRlLCBnZXRTdGF0ZSwgc3Vic2NyaWJlLCBkZXN0cm95IH07XG4gIHN0YXRlID0gY3JlYXRlU3RhdGUoc2V0U3RhdGUsIGdldFN0YXRlLCBhcGkpO1xuICByZXR1cm4gYXBpO1xufTtcbmNvbnN0IGNyZWF0ZVN0b3JlID0gKGNyZWF0ZVN0YXRlKSA9PiBjcmVhdGVTdGF0ZSA/IGNyZWF0ZVN0b3JlSW1wbChjcmVhdGVTdGF0ZSkgOiBjcmVhdGVTdG9yZUltcGw7XG52YXIgdmFuaWxsYSA9IChjcmVhdGVTdGF0ZSkgPT4ge1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBEZWZhdWx0IGV4cG9ydCBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkIHVzZSBpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3p1c3RhbmQvdmFuaWxsYScuXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGVTdG9yZShjcmVhdGVTdGF0ZSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVTdG9yZSwgdmFuaWxsYSBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/vanilla.mjs\n");

/***/ })

};
;