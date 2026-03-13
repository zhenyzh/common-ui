import type { SVGProps } from "react";
import { clsx } from "clsx";
import s from "./AnimationLogoIcon.module.css";

export function AnimationLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <div className={s.container}>
      <svg
        className={s.animatedBubbles}
        viewBox="0 0 512 512"
        width="500"
        height="500"
        {...props}
      >
        {/* Красный пузырь */}
        <g className={clsx(s.bubble, s.red)}>
          <ellipse cx="210" cy="160" rx="190" ry="120" fill="#ff8c8c" />
          <path d="M120 260 C110 300, 140 300, 150 260 Z" fill="#ff8c8c" />
          <circle cx="160" cy="170" r="8" fill="#6b6b6b" />
          <circle cx="210" cy="170" r="8" fill="#6b6b6b" />
          <circle cx="260" cy="170" r="8" fill="#6b6b6b" />
        </g>

        {/* Синий пузырь */}
        <g className={clsx(s.bubble, s.blue)}>
          <ellipse cx="320" cy="260" rx="170" ry="110" fill="#8ecbff" />
          <path d="M400 360 C420 400, 360 400, 350 360 Z" fill="#8ecbff" />
          <circle cx="270" cy="270" r="7" fill="#6b6b6b" />
          <circle cx="320" cy="270" r="7" fill="#6b6b6b" />
          <circle cx="370" cy="270" r="7" fill="#6b6b6b" />
        </g>

        {/* Желтый пузырь */}
        <g className={clsx(s.bubble, s.yellow)}>
          <ellipse cx="260" cy="360" rx="120" ry="80" fill="#ffd400" />
          <path d="M220 430 C210 460, 250 460, 255 430 Z" fill="#ffd400" />
          <circle cx="230" cy="360" r="6" fill="#6b6b6b" />
          <circle cx="260" cy="360" r="6" fill="#6b6b6b" />
          <circle cx="290" cy="360" r="6" fill="#6b6b6b" />
        </g>
      </svg>
    </div>
  );
}
