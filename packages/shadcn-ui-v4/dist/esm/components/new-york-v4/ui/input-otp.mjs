import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';

function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    OTPInput,
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
  return /* @__PURE__ */ React.createElement(
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
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ React.createElement(
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
    hasFakeCaret && /* @__PURE__ */ React.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }))
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ React.createElement("div", { "data-slot": "input-otp-separator", role: "separator", ...props }, /* @__PURE__ */ React.createElement(MinusIcon, null));
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
