'use strict';

var React = require('react');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
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
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/hover-card.tsx
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(HoverCardPrimitive__namespace.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(HoverCardPrimitive__namespace.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    HoverCardPrimitive__namespace.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  );
}

exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
