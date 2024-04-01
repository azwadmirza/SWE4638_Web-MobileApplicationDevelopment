import React from "react";


const ButtonFunctional = React.memo((props) => {
  console.log("Button Component Rendered");
  const { handleSubmit } = props;
    return (
        <button type="submit" onClick={handleSubmit}>Add</button>
    );
});

export default ButtonFunctional;