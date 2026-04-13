import { ComponentProps } from "react";
import { LockKeyhole } from "lucide-react";

type IconProps = ComponentProps<typeof LockKeyhole>;

export function LockKeyholeIcon(props: IconProps) {
  return <LockKeyhole {...props} />;
}
