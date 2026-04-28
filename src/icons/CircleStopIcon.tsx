import { ComponentProps } from "react";
import { CircleStop } from "lucide-react";

type IconProps = ComponentProps<typeof CircleStop>;

export function CircleStopIcon(props: IconProps) {
  return <CircleStop {...props} />;
}
