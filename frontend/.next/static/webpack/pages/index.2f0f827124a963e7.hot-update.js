"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getTodos();\n    }, []);\n    const getTodos = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:8000/todos\");\n            const todos = await response.json();\n            setTodos(todos);\n        } catch (error) {\n            console.error(\"Error fetching todos:\", error);\n        }\n    };\n    const handleInputChange = (event)=>{\n        setInputValue(event.target.value);\n    };\n    const handleAddTodo = async ()=>{\n        if (inputValue.trim() !== \"\") {\n            try {\n                const response = await fetch(\"http://localhost:8000/todos\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: inputValue\n                    })\n                });\n                const newTodo = await response.json();\n                setTodos([\n                    ...todos,\n                    newTodo\n                ]);\n                setInputValue(\"\");\n            } catch (error) {\n                console.error(\"Error creating todo:\", error);\n            }\n        }\n    };\n    const handleUpdateTodo = async (todoId, completed)=>{\n        try {\n            await fetch(\"http://localhost:8000/todos/\".concat(todoId), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    completed\n                })\n            });\n            const updatedTodos = todos.map((todo)=>todo.id === todoId ? {\n                    ...todo,\n                    completed\n                } : todo);\n            setTodos(updatedTodos);\n        } catch (error) {\n            console.error(\"Error updating todo:\", error);\n        }\n    };\n    const handleDeleteTodo = async (todoId)=>{\n        try {\n            await fetch(\"http://localhost:8000/todos/\".concat(todoId), {\n                method: \"DELETE\"\n            });\n            const updatedTodos = todos.filter((todo)=>todo.id !== todoId);\n            setTodos(updatedTodos);\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: inputValue,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos && todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo.id,\n                            todo.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleUpdateTodo(todo.id, !todo.completed),\n                                children: todo.completed ? \"Mark Incomplete\" : \"Mark Complete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeleteTodo(todo.id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, todo.id, true, {\n                        fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/preeti/Documents/To-do-application/frontend/components/TodoList.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"YD8CIw6vJ/5S1zlFmL1qMmWdmXY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MDZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RvZG9zXCIpO1xuICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRUb2Rvcyh0b2Rvcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0b2RvczpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnB1dFZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvc1wiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGU6IGlucHV0VmFsdWUgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIG5ld1RvZG9dKTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0b2RvOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVRvZG8gPSBhc3luYyAodG9kb0lkLCBjb21wbGV0ZWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvcy8ke3RvZG9JZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbXBsZXRlZCB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICB0b2RvLmlkID09PSB0b2RvSWQgPyB7IC4uLnRvZG8sIGNvbXBsZXRlZCB9IDogdG9kb1xuICAgICAgKTtcbiAgICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0b2RvOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSBhc3luYyAodG9kb0lkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdG9kb3MvJHt0b2RvSWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gdG9kb0lkKTtcbiAgICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0b2RvOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ub2RvIEFwcDwvaDE+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfT5BZGQ8L2J1dHRvbj5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zICYmXG4gICAgICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAge3RvZG8uaWR9XG4gICAgICAgICAgICAgIHt0b2RvLnRpdGxlfVxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGVUb2RvKHRvZG8uaWQsICF0b2RvLmNvbXBsZXRlZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby5jb21wbGV0ZWQgPyBcIk1hcmsgSW5jb21wbGV0ZVwiIDogXCJNYXJrIENvbXBsZXRlXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8odG9kby5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwidG9kb3MiLCJzZXRUb2RvcyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZ2V0VG9kb3MiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGl0bGUiLCJuZXdUb2RvIiwiaGFuZGxlVXBkYXRlVG9kbyIsInRvZG9JZCIsImNvbXBsZXRlZCIsInVwZGF0ZWRUb2RvcyIsIm1hcCIsInRvZG8iLCJpZCIsImhhbmRsZURlbGV0ZVRvZG8iLCJmaWx0ZXIiLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoList.js\n"));

/***/ })

});