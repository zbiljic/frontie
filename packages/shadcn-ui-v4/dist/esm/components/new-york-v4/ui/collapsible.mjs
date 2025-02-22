import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

// src-gen/components/new-york-v4/ui/collapsible.tsx
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger2({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent2({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

export { Collapsible, CollapsibleContent2 as CollapsibleContent, CollapsibleTrigger2 as CollapsibleTrigger };
