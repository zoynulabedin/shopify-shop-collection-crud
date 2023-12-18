import {
  require_faq
} from "/build/_shared/chunk-6W2SNVX2.js";
import {
  styles_default
} from "/build/_shared/chunk-5M2WSUUV.js";
import {
  init_esm,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-L6A3M6NF.js";
import {
  Card,
  init_esm as init_esm2
} from "/build/_shared/chunk-MPMEMSUZ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TJRF2VKW.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/faq.$group.jsx
init_remix_hmr();
init_esm2();
var import_faq = __toESM(require_faq());
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/faq.$group.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/faq.$group.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: styles_default
}];
var FaqSingleGroup = () => {
  _s();
  const [filterItem, setFilterItem] = (0, import_react2.useState)([]);
  const {
    faqs
  } = useLoaderData();
  const params = useParams();
  (0, import_react2.useEffect)(() => {
    const items = faqs.filter((item) => item.group === params.group);
    setFilterItem(items);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    padding: "20px"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Title" }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 48,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Description" }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Edit" }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 50,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Delete" }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 51,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "View Products" }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 52,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/faq.$group.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    filterItem == null ? void 0 : filterItem.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { style: {
      border: 0
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.question }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.answer }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.group }, void 0, false, {
        fileName: "app/routes/faq.$group.jsx",
        lineNumber: 59,
        columnNumber: 17
      }, this)
    ] }, item.id, true, {
      fileName: "app/routes/faq.$group.jsx",
      lineNumber: 54,
      columnNumber: 38
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/faq.$group.jsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/faq.$group.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/faq.$group.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/faq.$group.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(FaqSingleGroup, "jqzevpMUHFPn2OkjMndIv5nMXB8=", false, function() {
  return [useLoaderData, useParams];
});
_c = FaqSingleGroup;
var faq_group_default = FaqSingleGroup;
var _c;
$RefreshReg$(_c, "FaqSingleGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  faq_group_default as default,
  links
};
//# sourceMappingURL=/build/routes/faq.$group-HHEN5PVA.js.map
