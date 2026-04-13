import { ComponentProps } from "react";
import { CheckCheck } from "lucide-react";

type IconProps = ComponentProps<typeof CheckCheck>;

export function CheckCheckIcon(props: IconProps) {
  return <CheckCheck {...props} />;
}
