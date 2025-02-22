'use strict';

var React = require('react');
var SwitchPrimitive = require('@radix-ui/react-switch');
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
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/switch.tsx
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SwitchPrimitive__namespace.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(
      SwitchPrimitive__namespace.Thumb,
      {
        "data-slot": "switch-thumb",
        className: cn(
          "bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
}

exports.Switch = Switch;
