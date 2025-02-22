import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps } from "class-variance-authority";
declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): React.JSX.Element;
export { Toggle, toggleVariants };
