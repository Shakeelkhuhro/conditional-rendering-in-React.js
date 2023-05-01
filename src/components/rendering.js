import React from "react";

function MyComponent(props) {
    if (props.isVisible) {
      return (
        <div>
          <h1>Visible content</h1>
          <p>This content is only visible when isVisible is true.</p>
        </div>
      );
    } else {
      return null;
    }
  }

export default MyComponent;