'use strict';

var React = require('react');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
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
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/radio-group.tsx
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    RadioGroupPrimitive__namespace.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    RadioGroupPrimitive__namespace.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(
      RadioGroupPrimitive__namespace.Indicator,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center"
      },
      /* @__PURE__ */ React__namespace.createElement(lucideReact.CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
    )
  );
}

exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
