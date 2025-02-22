'use strict';

var React = require('react');
var SelectPrimitive = require('@radix-ui/react-select');
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
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/select.tsx
function Select({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:line-clamp-1",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.Icon, { asChild: true }, /* @__PURE__ */ React__namespace.createElement(lucideReact.ChevronDownIcon, { className: "size-4 opacity-50" }))
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.Portal, null, /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React__namespace.createElement(
      SelectPrimitive__namespace.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      children
    ),
    /* @__PURE__ */ React__namespace.createElement(SelectScrollDownButton, null)
  ));
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.Label,
    {
      "data-slot": "select-label",
      className: cn("px-2 py-1.5 text-sm font-medium", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement("span", { className: "absolute right-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React__namespace.createElement(lucideReact.CheckIcon, { className: "size-4" }))),
    /* @__PURE__ */ React__namespace.createElement(SelectPrimitive__namespace.ItemText, null, children)
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(lucideReact.ChevronUpIcon, { className: "size-4" })
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React__namespace.createElement(
    SelectPrimitive__namespace.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(lucideReact.ChevronDownIcon, { className: "size-4" })
  );
}

exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
