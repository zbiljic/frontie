'use strict';

var React2 = require('react');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
require('@radix-ui/react-toggle');
var classVarianceAuthority = require('class-variance-authority');

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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// src-gen/components/new-york-v4/ui/toggle-group.tsx
var ToggleGroupContext = React2__namespace.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return /* @__PURE__ */ React2__namespace.createElement(
    ToggleGroupPrimitive__namespace.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      className: cn(
        "group/toggle-group flex items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React2__namespace.createElement(ToggleGroupContext.Provider, { value: { variant, size } }, children)
  );
}
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React2__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ React2__namespace.createElement(
    ToggleGroupPrimitive__namespace.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "min-w-0 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      ),
      ...props
    },
    children
  );
}

exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
