import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-II6HIUQK.js";
import {
  Icon,
  Layout,
  LegacyCard,
  Page,
  SvgDeleteMajor,
  SvgEditMajor,
  SvgViewMajor,
  init_dist,
  init_esm as init_esm2
} from "/build/_shared/chunk-L73NP4IV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-ILI2N36M.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.shop.jsx
init_remix_hmr();
init_esm2();
var import_shopify = __toESM(require_shopify());
init_esm();
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.shop.jsx"
  );
  import.meta.hot.lastModified = "1701623988197.602";
}
function shop() {
  const { data } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { fullWidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { title: "Shop Name and ID", sectioned: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: { width: "100%", textAlign: "left" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Shop Name" }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 58,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Shop ID" }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 59,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Action" }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 60,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 57,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: data.shop.name }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 64,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: data.shop.id }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 65,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgViewMajor, tone: "base" }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 68,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgEditMajor, tone: "base" }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 71,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgDeleteMajor, tone: "base" }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 74,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 73,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 66,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 63,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 56,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 55,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 54,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var app_shop_default = shop;
export {
  app_shop_default as default
};
//# sourceMappingURL=/build/routes/app.shop-XYESPX4F.js.map
