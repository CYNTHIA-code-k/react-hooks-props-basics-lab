import React from "react";
import links from "./Links"

function About({bio, github,linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio? <p>{bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <links links = {links}/>
    </div>
  );
}

export default About;
