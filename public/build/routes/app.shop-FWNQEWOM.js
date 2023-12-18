import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-L6A3M6NF.js";
import {
  BlockStack,
  Card,
  Layout,
  List,
  Page,
  Text,
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
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.shop.jsx
init_remix_hmr();
init_esm2();
var import_shopify = __toESM(require_shopify());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.shop.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.shop.jsx"
  );
  import.meta.hot.lastModified = "1702054804910.6685";
}
function Shop() {
  _s();
  const {
    data
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Shop Details" }, void 0, false, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "Your Shop Details" }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
          "Shope Name: ",
          data.shop.name
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
          "Shop Id: ",
          data.shop.id
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Shop, "i3EQa2OpTaChqoa6mfJhC/QpjfA=", false, function() {
  return [useLoaderData];
});
_c = Shop;
var _c;
$RefreshReg$(_c, "Shop");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Shop as default
};
//# sourceMappingURL=/build/routes/app.shop-FWNQEWOM.js.map
