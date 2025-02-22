import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React.createElement(
      SwitchPrimitive.Thumb,
      {
        "data-slot": "switch-thumb",
        className: cn(
          "bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
}

export { Switch };
