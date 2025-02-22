'use strict';

var React = require('react');
var SheetPrimitive = require('@radix-ui/react-dialog');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/sheet.tsx
function Sheet({ ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(SheetPrimitive__namespace.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SheetPrimitive__namespace.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SheetPrimitive__namespace.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SheetPrimitive__namespace.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SheetPrimitive__namespace.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SheetPortal, null, /* @__PURE__ */ React__namespace.createElement(SheetOverlay, null), /* @__PURE__ */ React__namespace.createElement(
    SheetPrimitive__namespace.Content,
    {
      "data-slot": "sheet-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
        side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React__namespace.createElement(SheetPrimitive__namespace.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, /* @__PURE__ */ React__namespace.createElement(lucideReact.XIcon, { className: "size-4" }), /* @__PURE__ */ React__namespace.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SheetPrimitive__namespace.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SheetPrimitive__namespace.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
