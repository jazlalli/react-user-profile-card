import React, { FunctionComponent } from "react";

type LinkProps = {
  href: string;
  openInNewTab?: boolean;
};

export const Link: FunctionComponent<LinkProps> = ({
  href,
  children,
  openInNewTab = false,
}) => {
  const opener = openInNewTab
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <a href={href} {...opener}>
      {children}
    </a>
  );
};
