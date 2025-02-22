'use strict';

var React = require('react');
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

// src-gen/components/new-york-v4/ui/card.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/card.tsx
function Card({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "card-header",
      className: cn("flex flex-col gap-1.5 px-6", className),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6", className),
      ...props
    }
  );
}

exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
