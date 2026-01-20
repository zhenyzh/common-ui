import type {ComponentProps, ElementType} from "react";

export type BoxProps<T extends ElementType = "div"> = {
    as?: T;
} & ComponentProps<T>;

export const Box = <T extends ElementType = "div">({as = "div", ...props}: BoxProps<T>) => {
    const Component = as;
    return <Component {...props} />;
};