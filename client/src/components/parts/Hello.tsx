import * as React from "react";

export interface HelloProps {
  name: string;
}

const Hello = (props: HelloProps) => (
  <div>
    <h1>
      <span>Hello {props.name}!</span>
    </h1>
  </div>
);

export default Hello;
