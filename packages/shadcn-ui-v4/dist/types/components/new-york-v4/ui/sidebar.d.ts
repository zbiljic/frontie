import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { Button } from "@/components/new-york-v4/ui/button";
import { Input } from "@/components/new-york-v4/ui/input";
import { Separator } from "@/components/new-york-v4/ui/separator";
import { TooltipContent } from "@/components/new-york-v4/ui/tooltip";
type SidebarContext = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare const SidebarContext: React.Context<SidebarContext>;
declare function useSidebar(): SidebarContext;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): React.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): React.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>): React.JSX.Element;
declare function SidebarRail({ className, ...props }: React.ComponentProps<"button">): React.JSX.Element;
declare function SidebarInset({ className, ...props }: React.ComponentProps<"main">): React.JSX.Element;
declare function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>): React.JSX.Element;
declare function SidebarHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SidebarFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): React.JSX.Element;
declare function SidebarContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SidebarGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React.ComponentProps<"div"> & {
    asChild?: boolean;
}): React.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
}): React.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">): React.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">): React.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): React.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): React.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React.ComponentProps<"div"> & {
    showIcon?: boolean;
}): React.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">): React.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">): React.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): React.JSX.Element;
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar, };
