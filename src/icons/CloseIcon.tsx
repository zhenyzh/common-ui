import { ComponentProps } from "react";
import { X } from "lucide-react";

type IconProps = ComponentProps<typeof X>;

export function CloseIcon(props: IconProps) {
  return <X {...props} />;
}
