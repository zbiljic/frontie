import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { ChevronRightIcon, CheckIcon, CircleIcon } from 'lucide-react';

function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(ContextMenuPrimitive.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(ContextMenuPrimitive.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(ContextMenuPrimitive.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...props
    }
  );
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React.createElement(ChevronRightIcon, { className: "ml-auto" })
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(ContextMenuPrimitive.Portal, null, /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ));
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props
    },
    /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React.createElement(ContextMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React.createElement(CheckIcon, { className: "size-4" }))),
    children
  );
}
function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React.createElement(ContextMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React.createElement(CircleIcon, { className: "size-2 fill-current" }))),
    children
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    ContextMenuPrimitive.Separator,
    {
      "data-slot": "context-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function ContextMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}

export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger };
