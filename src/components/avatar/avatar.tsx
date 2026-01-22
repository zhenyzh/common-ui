import s from "./avatar.module.css";
import clsx from "clsx";

export type AvatarVariant = "user" | "logo";

export type AvatarProps = {
  image: string | React.ReactNode;
  size?: number;
  variant?: AvatarVariant;
  className?: string;
};

export const Avatar = ({
  image,
  size,
  variant = "user",
  className,
}: AvatarProps) => {
  return (
    <div
      className={clsx(s.card, className)}
      style={{ width: size, height: size }}
    >
      <div className={clsx(s.image, s[variant])}>
        {typeof image === "string" ? (
          <img src={image} alt="" aria-hidden />
        ) : (
          image
        )}
      </div>
    </div>
  );
};
