import { cn } from './chunk-WSNCRTSW.mjs';
import * as React from 'react';

function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-primary/10 animate-pulse rounded-md", className),
      ...props
    }
  );
}

export { Skeleton };
