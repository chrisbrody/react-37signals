import React from "react";

function Link(props) {
  return (
    <a href={props.href} target={props.target} className={props.class}>
      {props.txt}
    </a>
  );
}

export default Link;
