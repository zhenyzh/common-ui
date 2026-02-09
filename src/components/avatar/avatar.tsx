import React from "react";
import clsx from "clsx";

import defaultAvatar from "../../icons/default-avatar.png";
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
  const renderImage = () => {
    if (React.isValidElement(image)) {
      return image;
    }

    if (typeof image === "string" && !!image.trim()) {
      return <img src={image} alt="" aria-hidden />;
    }

    return <img src={defaultAvatar} alt="" aria-hidden />;
  };

  return (
    <div
      className={clsx(s.card, className)}
      style={{ width: size, height: size }}
    >
      <div className={clsx(s.image, s[variant])}>{renderImage()}</div>
    </div>
  );
};
