import cx from "classnames";
import React from "react";
import classes from "./Button.module.scss";
import ButtonLoader from "./ButtonLoader";

export default function BaseButton({
  children,
  variant = "primary",
  styles,
  size,
  className,
  image,
  loading,
  type,
  ...rest
}: {
  readonly children: React.ReactNode;
  readonly variant: string;
  readonly styles?: object;
  readonly size?: string;
  readonly className?: string;
  readonly image?: any;
  readonly loading?: boolean;
  readonly type?: string;
  readonly color?: string;
}) {
  return (
    <button
      className={cx([
        className,
        classes.btn,
        classes[variant],
        { [classes.loading]: loading },
      ])}
      style={{ ...styles }}
      {...rest}
    >
      {variant === "primary" ? <div className={classes.green}></div> : null}

      {loading ? <ButtonLoader color={""} /> : <>{children}</>}
    </button>
  );
}
