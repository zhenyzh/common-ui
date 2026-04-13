import { ComponentProps } from "react";
import { Check } from "lucide-react";

type IconProps = ComponentProps<typeof Check>;

export function CheckIcon(props: IconProps) {
  return <Check {...props} />;
}
