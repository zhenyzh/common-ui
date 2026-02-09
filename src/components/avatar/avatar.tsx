import clsx from "clsx";

import DefaultAvatarIcon from "../../icons/img/default-avatar.png";
import s from "./avatar.module.css";

export type AvatarVariant = "cropped" | "whole";

export type AvatarProps = {
  image: string | React.ReactNode;
  size?: number;
  variant?: AvatarVariant;
  className?: string;
};

export const Avatar = ({
  image,
  size = 50,
  variant = "cropped",
  className,
}: AvatarProps) => {
  return (
    <div
      className={clsx(s.card, className)}
      style={{ width: size, height: size }}
    >
      <div className={clsx(s.image, s[variant])}>
        {typeof image === "string" ? (
          <img src={image || DefaultAvatarIcon} alt="" aria-hidden />
        ) : (
          image
        )}
      </div>
    </div>
  );
};
