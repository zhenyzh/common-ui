import { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";

type IconProps = ComponentProps<typeof ChevronRight>;

export function ChevronRightIcon(props: IconProps) {
  return <ChevronRight {...props} />;
}
