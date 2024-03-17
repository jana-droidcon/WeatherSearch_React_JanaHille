import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by
      <a
        href="https://github.com/jana-droidcon"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Jana Hille
      </a>{" "}
      , is on
      <a
        href="https://github.com/jana-droidcon"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Github
      </a>
      , hosted on
      <a
        href="https://github.com/jana-droidcon"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Netlify
      </a>
      .
    </div>
  );
}
