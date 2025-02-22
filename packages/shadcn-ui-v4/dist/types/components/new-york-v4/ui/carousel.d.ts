import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { Button } from "@/components/new-york-v4/ui/button";
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React.ComponentProps<"div"> & CarouselProps): React.JSX.Element;
declare function CarouselContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CarouselItem({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CarouselPrevious({ className, variant, size, ...props }: React.ComponentProps<typeof Button>): React.JSX.Element;
declare function CarouselNext({ className, variant, size, ...props }: React.ComponentProps<typeof Button>): React.JSX.Element;
export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, };
