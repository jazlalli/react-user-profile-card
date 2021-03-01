import React, { FunctionComponent } from "react";
import { Link } from "../Link";
import * as Icons from "../Icons";
import "./index.css";

export type UserProfile = {
  name: string;
  jobTitle: string;
  avatarUrl: URL;
  emailAddress?: string;
  twitterUsername?: string;
  githubUsername?: string;
  favoriteFoodOrDrink?: string;
};

type ProfileCardProps = UserProfile & {
  circleAvatar?: boolean;
  roundedCorners?: boolean;
  stacked?: boolean;
};

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  name,
  jobTitle,
  avatarUrl,
  emailAddress,
  twitterUsername,
  githubUsername,
  favoriteFoodOrDrink,
  circleAvatar,
  roundedCorners,
  stacked,
}) => {
  return (
    <div
      className={`profile-card ${stacked ? "stacked" : ""} ${
        roundedCorners ? "rounded" : ""
      }`}
    >
      <img
        src={avatarUrl.toString()}
        alt={`${name}'s avatar`}
        className={`avatar ${circleAvatar ? "circle" : ""}`}
      />
      <div className="main">
        <h3 className="details">
          {name}
          <small className="job-title">{jobTitle}</small>
        </h3>
        {favoriteFoodOrDrink && (
          <p className="favorite-food">
            Favorite Food/Drink: {favoriteFoodOrDrink}
          </p>
        )}
        <span className="links">
          {emailAddress && (
            <Link href={`mailto:${emailAddress}`}>
              <Icons.Email />
            </Link>
          )}
          {githubUsername && (
            <Link href={`https://github.com/${githubUsername}`} openInNewTab>
              <Icons.GitHub />
            </Link>
          )}
          {twitterUsername && (
            <Link href={`https://twitter.com/${twitterUsername}`} openInNewTab>
              <Icons.Twitter />
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
