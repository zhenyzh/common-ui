import { ComponentProps } from "react";
import { Smile } from "lucide-react";

type IconProps = ComponentProps<typeof Smile>;

export function SmileIcon(props: IconProps) {
  return <Smile {...props} />;
}
