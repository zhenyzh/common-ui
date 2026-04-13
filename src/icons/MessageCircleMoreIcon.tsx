import { ComponentProps } from "react";
import { MessageCircleMore } from "lucide-react";

type IconProps = ComponentProps<typeof MessageCircleMore>;

export function MessageCircleMoreIcon(props: IconProps) {
  return <MessageCircleMore {...props} />;
}
