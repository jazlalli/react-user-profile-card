import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfileCard } from "./";

test("a basic ProfileCard is rendered", () => {
  render(
    <ProfileCard
      name="Jaz"
      jobTitle="Tester"
      avatarUrl="https://www.placecage.com/c/200/200"
    />
  );

  expect(screen.getByText("Jaz")).toBeInTheDocument();
  expect(screen.getByText("Tester")).toBeInTheDocument();

  const avatar = screen.getByAltText("Jaz's avatar");
  expect(avatar).toBeInTheDocument();
  expect(avatar.src).toEqual("https://www.placecage.com/c/200/200");
});

test("a basic ProfileCard is rendered in portrait", () => {
  const { container } = render(
    <ProfileCard
      name="Jaz"
      jobTitle="Tester"
      avatarUrl="https://www.placecage.com/c/200/200"
      stacked
    />
  );

  expect(container.firstChild.className).toContain("stacked");
});
