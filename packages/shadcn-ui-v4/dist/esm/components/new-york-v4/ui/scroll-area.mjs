import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props
    },
    /* @__PURE__ */ React.createElement(
      ScrollAreaPrimitive.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
      },
      children
    ),
    /* @__PURE__ */ React.createElement(ScrollBar, null),
    /* @__PURE__ */ React.createElement(ScrollAreaPrimitive.Corner, null)
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React.createElement(
      ScrollAreaPrimitive.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}

export { ScrollArea, ScrollBar };
