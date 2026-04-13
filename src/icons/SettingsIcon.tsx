import { ComponentProps } from "react";
import { Settings } from "lucide-react";

type IconProps = ComponentProps<typeof Settings>;

export function SettingsIcon(props: IconProps) {
  return <Settings {...props} />;
}
