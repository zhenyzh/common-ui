import { ComponentProps } from "react";
import { CirclePlus } from "lucide-react";

type IconProps = ComponentProps<typeof CirclePlus>;

export function CirclePlusIcon(props: IconProps) {
  return <CirclePlus {...props} />;
}
