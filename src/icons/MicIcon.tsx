import { ComponentProps } from "react";
import { Mic } from "lucide-react";

type IconProps = ComponentProps<typeof Mic>;

export function MicIcon(props: IconProps) {
  return <Mic {...props} />;
}
