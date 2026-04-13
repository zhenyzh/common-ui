import { ComponentProps } from "react";
import { LogOut } from "lucide-react";

type IconProps = ComponentProps<typeof LogOut>;

export function LogOutIcon(props: IconProps) {
  return <LogOut {...props} />;
}
