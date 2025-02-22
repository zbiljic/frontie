import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

function Popover({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React.createElement(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ));
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
