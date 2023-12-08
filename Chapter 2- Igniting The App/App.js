import React from "react";
import ReactDOM from "react-dom/client";
//create a heading
var heading1 = React.createElement("h1", {}, "First Heading");
var heading2 = React.createElement("h2", {}, "Second Heading");

var container = React.createElement("div", { id: "inside-root" }, [
  heading1,
  heading2,
]);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
