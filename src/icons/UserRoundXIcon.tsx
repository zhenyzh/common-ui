import { ComponentProps } from "react";
import { UserRoundX } from "lucide-react";

type IconProps = ComponentProps<typeof UserRoundX>;

export function UserRoundXIcon(props: IconProps) {
  return <UserRoundX {...props} />;
}
