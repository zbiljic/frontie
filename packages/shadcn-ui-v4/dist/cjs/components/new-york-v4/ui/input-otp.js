'use strict';

var React = require('react');
var inputOtp = require('input-otp');
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

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/input-otp.tsx
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    inputOtp.OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React__namespace.useContext(inputOtp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props
    },
    char,
    hasFakeCaret && /* @__PURE__ */ React__namespace.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React__namespace.createElement("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }))
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ React__namespace.createElement("div", { "data-slot": "input-otp-separator", role: "separator", ...props }, /* @__PURE__ */ React__namespace.createElement(lucideReact.MinusIcon, null));
}

exports.InputOTP = InputOTP;
exports.InputOTPGroup = InputOTPGroup;
exports.InputOTPSeparator = InputOTPSeparator;
exports.InputOTPSlot = InputOTPSlot;
