import { ComponentProps } from "react";
import { File } from "lucide-react";

type IconProps = ComponentProps<typeof File>;

export function FileIcon(props: IconProps) {
  return <File {...props} />;
}
