'use strict';

var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
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

// src-gen/components/new-york-v4/ui/breadcrumb.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/breadcrumb.tsx
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ React__namespace.createElement("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ React__namespace.createElement(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props
    },
    children ?? /* @__PURE__ */ React__namespace.createElement(lucideReact.ChevronRight, null)
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(lucideReact.MoreHorizontal, { className: "size-4" }),
    /* @__PURE__ */ React__namespace.createElement("span", { className: "sr-only" }, "More")
  );
}

exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
