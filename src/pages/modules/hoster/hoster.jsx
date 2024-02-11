// hoster.jsx

import React from 'react';
import "./hoster.scss";

function Hoster({ name, picture }) {
  return (
    <div className="hostBlock">
      <div id="host-name">
        {name.split(" ").map((part, index) => (
          <React.Fragment key={index}>
            {part}
            <br />
          </React.Fragment>
        ))}
      </div>
      <img
        id="host-picture"
        src={picture}
        alt={name}
      />
    </div>
  );
}

export default Hoster;
