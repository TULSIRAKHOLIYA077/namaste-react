/*
<div id="parent">
  <div id="child">
    <h1>H1 Tag</h1>
    <h2>H2 Tag</h2>
  </div>
    <div id="child">
    <h1>H1 Tag</h1>
    <h2>H2 Tag</h2>
  </div>//this will be hell and that is why jsx came

</div>
*/
const parent = React.createElement(
  "div",
  {id:"parent"},
  React.createElement("div",{id:"child"},[React.createElement("h1",{},"H1 Tag"),React.createElement("h2",{},"H2 Tag")])
)

const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World!");

console.log(heading);//object(react element) not h1 element


const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);//root.render will convert that object into an html tag

root.render(parent);

