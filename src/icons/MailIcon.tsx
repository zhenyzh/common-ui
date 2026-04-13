import { ComponentProps } from "react";
import { Mail } from "lucide-react";

type IconProps = ComponentProps<typeof Mail>;

export function MailIcon(props: IconProps) {
  return <Mail {...props} />;
}
