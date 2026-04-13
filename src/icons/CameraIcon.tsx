import { ComponentProps } from "react";
import { Camera } from "lucide-react";

type IconProps = ComponentProps<typeof Camera>;

export function CameraIcon(props: IconProps) {
  return <Camera {...props} />;
}
