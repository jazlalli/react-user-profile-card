import React, { FunctionComponent } from "react";

export enum IconSize {
  small = "16px",
  medium = "24px",
  large = "32px",
}

export type IconProps = {
  size?: keyof typeof IconSize;
};

export const Icon: FunctionComponent<IconProps> = ({
  size = IconSize.small,
  children,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
};
