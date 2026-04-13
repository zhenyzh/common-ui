import { ComponentProps } from "react";
import { ChevronLeft } from "lucide-react";

type IconProps = ComponentProps<typeof ChevronLeft>;

export function ChevronLeftIcon(props: IconProps) {
  return <ChevronLeft {...props} />;
}
