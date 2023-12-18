import {
  popUpModal_default
} from "/build/_shared/chunk-OOFJIAWI.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Link,
  init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-L6A3M6NF.js";
import {
  Button,
  Card,
  FormLayout,
  Layout,
  Page,
  TextField,
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

// app/routes/app.collections.jsx
init_remix_hmr();
init_esm2();
var import_shopify = __toESM(require_shopify());
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.collections.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.collections.jsx"
  );
  import.meta.hot.lastModified = "1702053155922.38";
}
var Collections = () => {
  _s();
  const {
    data
  } = useLoaderData();
  const submit = useSubmit();
  const [id, setId] = (0, import_react2.useState)(null);
  const [title, setTitle] = (0, import_react2.useState)("");
  const [description, setDescription] = (0, import_react2.useState)("");
  const [showModal, setShowModal] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
        setShowModal(true);
        setId(null);
      }, tone: "success", variant: "primary", children: "Add New Collection" }, void 0, false, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 128,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Title" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Description" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Edit" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 139,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Delete" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 140,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "View Products" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.collections.jsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        data.collections.edges.map((cl, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: cl.node.title }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 144,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: cl.node.description }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 145,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
            setId(cl.node.id);
            setTitle(cl.node.title);
            setDescription(cl.node.description);
            setShowModal(true);
          }, tone: "success", children: "edit" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 147,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 146,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
            const formData = new FormData();
            formData.set("collectionId", cl.node.id);
            submit(formData, {
              method: "delete",
              encType: "application/x-www-form-urlencoded",
              preventScrollReset: false,
              replace: false,
              relative: "route"
            });
          }, variant: "primary", children: "Delete" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 157,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 156,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { style: {
            color: "#fff",
            textDecoration: "none"
          }, to: `/app/products?collectionId=${cl.node.id}`, children: "View Products" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 173,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 172,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 171,
            columnNumber: 21
          }, this)
        ] }, index, true, {
          fileName: "app/routes/app.collections.jsx",
          lineNumber: 143,
          columnNumber: 60
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 135,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.collections.jsx",
      lineNumber: 127,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.collections.jsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(popUpModal_default, { title: id ? "Edit Collection" : "Create Collection", setShowModal, onPrimaryAction: () => {
      submit({
        id,
        title,
        description
      }, {
        replace: true,
        method: id ? "PATCH" : "POST"
      });
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLayout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Title", type: "text", value: title, autoComplete: "off", onChange: setTitle }, void 0, false, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 199,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Description", type: "text", value: description, autoComplete: "off", onChange: setDescription }, void 0, false, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 200,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.collections.jsx",
      lineNumber: 198,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/app.collections.jsx",
      lineNumber: 188,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.collections.jsx",
      lineNumber: 187,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.collections.jsx",
    lineNumber: 125,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.collections.jsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
};
_s(Collections, "wJCG5n1ESg0+0G2s+xhakUCLc8A=", false, function() {
  return [useLoaderData, useSubmit];
});
_c = Collections;
var app_collections_default = Collections;
var _c;
$RefreshReg$(_c, "Collections");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_collections_default as default
};
//# sourceMappingURL=/build/routes/app.collections-GW2TYMWN.js.map
