import s from "./avatar.module.css";
import clsx from "clsx";

type Props = {
  image: string | React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
};

export const Avatar = ({ image, width, height, className }: Props) => {
  return (
    <div className={clsx(s.card)}>
      <div className={clsx(s.image, className)}>
        {typeof image === "string" ? (
          <img src={image} width={width} height={height} alt="" aria-hidden />
        ) : (
          image
        )}
      </div>
    </div>
  );
};
