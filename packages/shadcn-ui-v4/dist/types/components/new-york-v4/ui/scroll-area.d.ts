import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
declare function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): React.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): React.JSX.Element;
export { ScrollArea, ScrollBar };
