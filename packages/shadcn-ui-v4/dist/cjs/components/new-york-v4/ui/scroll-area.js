'use strict';

var React = require('react');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
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
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/scroll-area.tsx
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    ScrollAreaPrimitive__namespace.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(
      ScrollAreaPrimitive__namespace.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
      },
      children
    ),
    /* @__PURE__ */ React__namespace.createElement(ScrollBar, null),
    /* @__PURE__ */ React__namespace.createElement(ScrollAreaPrimitive__namespace.Corner, null)
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(
      ScrollAreaPrimitive__namespace.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}

exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
