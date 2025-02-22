'use strict';

var React = require('react');
var DialogPrimitive = require('@radix-ui/react-dialog');
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
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/dialog.tsx
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(DialogPrimitive__namespace.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(DialogPrimitive__namespace.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(DialogPrimitive__namespace.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(DialogPrimitive__namespace.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    DialogPrimitive__namespace.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React__namespace.createElement(DialogOverlay, null), /* @__PURE__ */ React__namespace.createElement(
    DialogPrimitive__namespace.Content,
    {
      "data-slot": "dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React__namespace.createElement(DialogPrimitive__namespace.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" }, /* @__PURE__ */ React__namespace.createElement(lucideReact.XIcon, null), /* @__PURE__ */ React__namespace.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    DialogPrimitive__namespace.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    DialogPrimitive__namespace.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
