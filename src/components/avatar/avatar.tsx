import s from "./avatar.module.css";
import { Typography } from "../typography";

type Props = {
  image: string | React.ReactNode;
  name?: string;
  width?: string;
  height?: string;
};

export const Avatar = ({ image, name, width, height }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        {typeof image === "string" ? (
          <img src={image} width={width} height={height} alt="" aria-hidden />
        ) : (
          image
        )}
      </div>

      {name && (
        <Typography variant="h3" className={s.title}>
          {name}
        </Typography>
      )}
    </div>
  );
};
