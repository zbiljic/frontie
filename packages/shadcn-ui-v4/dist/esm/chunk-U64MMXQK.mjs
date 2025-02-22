import { cn } from './chunk-WSNCRTSW.mjs';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(TooltipProvider, null, /* @__PURE__ */ React.createElement(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }));
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ React.createElement(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React.createElement(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
  ));
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
