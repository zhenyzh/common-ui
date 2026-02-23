import { forwardRef, ReactNode } from "react";
import { clsx } from "clsx";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import { Typography } from "../typography";

import { useGetId } from "../../hooks/useGetId";

import s from "./textareaAutosizeField.module.css";

type TextareaFieldProps = {
  errorMessage?: string;
  label?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  minRows?: number;
  maxRows?: number;
  stretching?: boolean;
} & TextareaAutosizeProps;

export const TextareaAutosizeField = forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(
  (
    {
      className,
      errorMessage,
      label,
      iconStart,
      iconEnd,
      minRows = 1,
      maxRows = 6,
      stretching,
      ...props
    },
    ref,
  ) => {
    const textareaId = useGetId();
    const showError = Boolean(errorMessage);

    return (
      <div className={clsx(s.box, className)}>
        {label && (
          <Typography variant="label" as="label" htmlFor={textareaId}>
            {label}
          </Typography>
        )}

        <div className={s.textareaWrapper}>
          {iconStart && <span className={s.iconStart}>{iconStart}</span>}

          <TextareaAutosize
            ref={ref}
            className={clsx(
              s.textarea,
              showError && s.error,
              iconStart && s.withIconStart,
              iconEnd && s.withIconEnd,
              !stretching && s.stretching,
            )}
            id={textareaId}
            minRows={minRows}
            maxRows={maxRows}
            {...props}
          />

          {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
        </div>
        {showError && <Typography variant="error">{errorMessage}</Typography>}
      </div>
    );
  },
);
