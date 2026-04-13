import { ComponentProps } from "react";
import { Save } from "lucide-react";

type IconProps = ComponentProps<typeof Save>;

export function SaveIcon(props: IconProps) {
  return <Save {...props} />;
}
