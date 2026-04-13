import { ComponentProps } from "react";
import { SendHorizontal } from "lucide-react";

type IconProps = ComponentProps<typeof SendHorizontal>;

export function SendHorizontalIcon(props: IconProps) {
  return <SendHorizontal {...props} />;
}
