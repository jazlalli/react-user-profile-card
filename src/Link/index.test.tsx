import React from "react";
import { render, screen } from "@testing-library/react";
import { Link } from "./";

test("a link is rendered", () => {
  const { container } = render(<Link href="https://bbc.co.uk">NEWS</Link>);

  expect(screen.getByText("NEWS")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot(`
    <a href="https://bbc.co.uk">NEWS</a>`);
});

test("a link is rendered with target=_blank and noreferrer noopener", () => {
  const { container } = render(
    <Link href="https://bbc.co.uk" openInNewTab>
      NEWS
    </Link>
  );

  expect(screen.getByText("NEWS")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot(`
    <a href="https://bbc.co.uk" target="_blank" rel="noreferrer noopener">NEWS</a>`);
});
