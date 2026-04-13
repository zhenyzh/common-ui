import { ComponentProps } from "react";
import { UserPen } from "lucide-react";

type IconProps = ComponentProps<typeof UserPen>;

export function UserPenIcon(props: IconProps) {
  return <UserPen {...props} />;
}
