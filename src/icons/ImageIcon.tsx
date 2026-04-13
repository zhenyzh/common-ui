import { ComponentProps } from "react";
import { Image } from "lucide-react";

type IconProps = ComponentProps<typeof Image>;

export function ImageIcon(props: IconProps) {
  return <Image {...props} />;
}
