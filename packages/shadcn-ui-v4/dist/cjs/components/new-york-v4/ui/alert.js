'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
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

// src-gen/components/new-york-v4/ui/alert.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/alert.tsx
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "text-destructive-foreground [&>svg]:text-current *:data-[slot=alert-description]:text-destructive-foreground/80"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}

exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
