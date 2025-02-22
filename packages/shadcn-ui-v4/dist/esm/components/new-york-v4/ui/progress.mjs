import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ProgressPrimitive.Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React.createElement(
      ProgressPrimitive.Indicator,
      {
        "data-slot": "progress-indicator",
        className: "bg-primary h-full w-full flex-1 transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  );
}

export { Progress };
