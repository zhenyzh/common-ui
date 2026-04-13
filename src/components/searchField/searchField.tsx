import { clsx } from "clsx";
import type { ComponentProps, ReactNode } from "react";

import { SearchIcon } from "../../icons";

import s from "./searchField.module.css";

export type SearchFieldProps = {
  label?: ReactNode;
  placeholder?: string;
  classNameInput?: string;
  endIcon?: ReactNode;
} & ComponentProps<"input">;

export const SearchField = ({
  className,
  classNameInput,
  placeholder = "Search...",
  endIcon,
  ...props
}: SearchFieldProps) => {
  return (
    <div className={clsx(s.inputWrapper, className)}>
      <SearchIcon className={s.searchIcon} />
      <input
        className={clsx(s.input, classNameInput)}
        type="text"
        placeholder={placeholder}
        {...props}
      />
      <div className={s.searchEndIcon}>{endIcon}</div>
    </div>
  );
};
