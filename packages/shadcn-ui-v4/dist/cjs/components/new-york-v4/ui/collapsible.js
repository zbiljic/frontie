'use strict';

var React = require('react');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');

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
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);

// src-gen/components/new-york-v4/ui/collapsible.tsx
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(CollapsiblePrimitive__namespace.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger2({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    CollapsiblePrimitive__namespace.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent2({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    CollapsiblePrimitive__namespace.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
