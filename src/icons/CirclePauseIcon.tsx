import { ComponentProps } from "react";
import { CirclePause } from "lucide-react";

type IconProps = ComponentProps<typeof CirclePause>;

export function CirclePauseIcon(props: IconProps) {
  return <CirclePause {...props} />;
}
