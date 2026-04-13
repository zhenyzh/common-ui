import { ComponentProps } from "react";
import { Ellipsis } from "lucide-react";

type IconProps = ComponentProps<typeof Ellipsis>;

export function EllipsisIcon(props: IconProps) {
  return <Ellipsis {...props} />;
}
