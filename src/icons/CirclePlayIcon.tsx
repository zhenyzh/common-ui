import { ComponentProps } from "react";
import { CirclePlay } from "lucide-react";

type IconProps = ComponentProps<typeof CirclePlay>;

export function CirclePlayIcon(props: IconProps) {
  return <CirclePlay {...props} />;
}
