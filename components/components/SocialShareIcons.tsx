"use client";

import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
} from "react-share";
import Icon from "./Icon";

export interface SocialShareIconProps {
  url: string;
  title: string;
}

export default function SocialShareIcons({ url, title }: SocialShareIconProps) {
  return (
    <ul className="flex items-center">
      <li className="mr-2">
        <TwitterShareButton
          url={url}
          title={title}
          className="w-5 flex justify-center items-center"
        >
          <Icon name="twitter" />
        </TwitterShareButton>
      </li>
      <li className="mr-2">
        <LinkedinShareButton
          url={url}
          title={title}
          className="w-5 flex justify-center items-center"
        >
          <Icon name="linkedin" />
        </LinkedinShareButton>
      </li>
      <li className="mr-2">
        <FacebookShareButton
          url={url}
          title={title}
          className="w-5 flex justify-center items-center"
        >
          <Icon name="facebook" />
        </FacebookShareButton>
      </li>
      <li className="mr-2">
        <a
          href={`mailto:?subject=${title}&body=${url}`}
          target="_blank"
          rel="noreferrer"
          className="w-5 flex justify-center items-center"
        >
          <Icon name="mail" />
        </a>
      </li>
    </ul>
  );
}
