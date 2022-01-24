import React from 'react';
import githubIcon from "../images/gitHubMark.png";

export default function Footer() {
  return (
    <footer>
    Powered by &nbsp;
    <a
      href="https://github.com/PPKan/shopping-cart"
      target={"_blank"}
      rel="noreferrer"
    >
      <img src={githubIcon} alt="github icon" /> PPKan
    </a>
  </footer>
  );
}
