import React, { useState } from "react";
import { ProfileCard, UserProfile } from "./ProfileCard";
import "./App.css";

const profile: UserProfile = {
  name: "Jasdeep Lalli",
  jobTitle: "Software Engineer",
  avatarUrl: new URL(
    "https://www.gravatar.com/avatar/93de315c2b5af80e362e81c62d2d0da9.png?s=128"
  ),
  emailAddress: "jazlalli@hotmail.com",
  twitterUsername: "jazlalli1",
  githubUsername: "jazlalli",
  favoriteFoodOrDrink: "Ribs",
};

enum Shape {
  Square = "Square",
  Circle = "Circle",
}

enum Orientation {
  Landscape = "Landscape",
  Portrait = "Portrait",
}

type AvatarShape = keyof typeof Shape;
type CardOrientation = keyof typeof Orientation;

function App() {
  const [roundedCorners, setRoundedCorners] = useState<boolean>(false);
  const [avatarShape, setAvatarShape] = useState<AvatarShape>(Shape.Square);
  const [cardOrientation, setCardOrientation] = useState<CardOrientation>(
    Orientation.Landscape
  );

  return (
    <div className="App">
      <ProfileCard
        roundedCorners={roundedCorners}
        circleAvatar={avatarShape === Shape.Circle ? true : false}
        stacked={cardOrientation === Orientation.Portrait ? true : false}
        {...profile}
      />

      <fieldset>
        <legend>Card Options</legend>
        <div className="row">
          <span>Corners:</span>
          <label>
            No radius{" "}
            <input
              type="radio"
              name="none"
              checked={roundedCorners === false}
              onChange={() => setRoundedCorners(!roundedCorners)}
            />
          </label>
          <label>
            Rounded{" "}
            <input
              type="radio"
              name="rounded"
              checked={roundedCorners === true}
              onChange={() => setRoundedCorners(!roundedCorners)}
            />
          </label>
        </div>

        <div className="row">
          <span>Orientation:</span>
          <label>
            Landscape{" "}
            <input
              type="radio"
              name="landscape"
              checked={cardOrientation === Orientation.Landscape}
              onChange={(evt) =>
                setCardOrientation(
                  evt.target.checked
                    ? Orientation.Landscape
                    : Orientation.Portrait
                )
              }
            />
          </label>
          <label>
            Portrait{" "}
            <input
              type="radio"
              name="portrait"
              checked={cardOrientation === Orientation.Portrait}
              onChange={(evt) =>
                setCardOrientation(
                  evt.target.checked
                    ? Orientation.Portrait
                    : Orientation.Landscape
                )
              }
            />
          </label>
        </div>

        <div className="row">
          <span>Avatar:</span>
          <label>
            Square{" "}
            <input
              type="radio"
              name="square"
              checked={avatarShape === Shape.Square}
              onChange={(evt) =>
                setAvatarShape(evt.target.checked ? Shape.Square : Shape.Circle)
              }
            />
          </label>
          <label>
            Circle{" "}
            <input
              type="radio"
              name="circle"
              checked={avatarShape === Shape.Circle}
              onChange={(evt) =>
                setAvatarShape(evt.target.checked ? Shape.Circle : Shape.Square)
              }
            />
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
