import { clsx } from "clsx";
import type { ComponentProps, ReactNode } from "react";

import { SearchIcon } from "../../icons";

import s from "./searchField.module.css";

export type SearchFieldProps = {
  label?: ReactNode;
  placeholder?: string;
  classNameInput?: string;
} & ComponentProps<"input">;

export const SearchField = ({
  className,
  classNameInput,
  placeholder = "Search...",
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
    </div>
  );
};
