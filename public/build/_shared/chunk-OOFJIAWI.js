import {
  Modal,
  init_esm
} from "/build/_shared/chunk-MPMEMSUZ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TJRF2VKW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/popUpModal.jsx
init_remix_hmr();
init_esm();
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

export {
  popUpModal_default
};
//# sourceMappingURL=/build/_shared/chunk-OOFJIAWI.js.map
