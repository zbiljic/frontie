import * as React from "react";
import * as ResizablePrimitive from "react-resizable-panels";
declare function ResizablePanelGroup({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>): React.JSX.Element;
declare function ResizablePanel({ ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel>): React.JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}): React.JSX.Element;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
