import { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";

type IconProps = ComponentProps<typeof ChevronDown>;

export function ChevronDownIcon(props: IconProps) {
  return <ChevronDown {...props} />;
}
