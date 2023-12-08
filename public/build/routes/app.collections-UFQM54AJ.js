import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Link,
  init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-B7CADMCY.js";
import {
  Button,
  Card,
  FormLayout,
  Layout,
  Modal,
  Page,
  TextField,
  init_esm as init_esm2
} from "/build/_shared/chunk-WVMH67TV.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-V5OGST22.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.collections.jsx
init_remix_hmr();
init_esm2();
var import_shopify = __toESM(require_shopify());
init_esm();
var import_react2 = __toESM(require_react());

// app/components/popUpModal.jsx
init_remix_hmr();
init_esm2();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/popUpModal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/popUpModal.jsx"
  );
  import.meta.hot.lastModified = "1702015530563.7651";
}
var PopUpModal = ({
  title,
  children,
  onPrimaryAction,
  setShowModal
}) => {
  const handlePrimaryAction = () => {
    onPrimaryAction();
    setShowModal(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { open: true, onClose: () => setShowModal(false), title: title || "", primaryAction: {
    content: "Save",
    onAction: handlePrimaryAction
  }, secondaryActions: [{
    content: "Cancel",
    onAction: () => setShowModal(false)
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal.Section, { children }, void 0, false, {
    fileName: "app/components/popUpModal.jsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/popUpModal.jsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/popUpModal.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c = PopUpModal;
var popUpModal_default = PopUpModal;
var _c;
$RefreshReg$(_c, "PopUpModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.collections.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1702053154922.3809";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => {
        setShowModal(true);
        setId(null);
      }, tone: "success", variant: "primary", children: "Add New Collection" }, void 0, false, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 128,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Title" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Description" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Edit" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 139,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Delete" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 140,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "View Products" }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.collections.jsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        data.collections.edges.map((cl, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { children: cl.node.title }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 144,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { children: cl.node.description }, void 0, false, {
            fileName: "app/routes/app.collections.jsx",
            lineNumber: 145,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { style: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout.Section, { children: showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(popUpModal_default, { title: id ? "Edit Collection" : "Create Collection", setShowModal, onPrimaryAction: () => {
      submit({
        id,
        title,
        description
      }, {
        replace: true,
        method: id ? "PATCH" : "POST"
      });
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLayout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextField, { label: "Title", type: "text", value: title, autoComplete: "off", onChange: setTitle }, void 0, false, {
        fileName: "app/routes/app.collections.jsx",
        lineNumber: 199,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextField, { label: "Description", type: "text", value: description, autoComplete: "off", onChange: setDescription }, void 0, false, {
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
_c2 = Collections;
var app_collections_default = Collections;
var _c2;
$RefreshReg$(_c2, "Collections");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_collections_default as default
};
//# sourceMappingURL=/build/routes/app.collections-UFQM54AJ.js.map
