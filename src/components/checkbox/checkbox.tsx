import { type InputHTMLAttributes } from "react";
import clsx from "clsx";
import s from "./checkbox.module.css";

export type CheckboxProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const CheckBox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label className={clsx(s.check, s.option, className)}>
      <input type="checkbox" className={s.checkInput} {...props} />
      <span className={s.checkBox}></span>
      {label}
    </label>
  );
};
