import React, { useState } from "react";

import "./Bag.css";

function App() {
  let [아이탬제목, 아이탬변경] = useState([
    "product",
    "product",
    "product"
  ]);
  let [아이탬, 아이탬보기] = useState(0);
  let posts = "item";
    
  return (
    <div className="App">
      <div className="black-nav">
        <div className="text">장바구니</div>
      </div>
     
      <h4>screen png</h4>

      <div className="list">
        <h3>
          {" "}
          {아이탬제목[0]}{" "}
          <span
            onClick={() => {
              아이탬보기(아이탬 + 1);
            }}
          >
            💄
          </span>
          {아이탬}
        </h3>
        <p>{posts}</p>
        <hr />
        <h3> {아이탬제목[1]} </h3>
        <p>{posts}</p>
        <hr />
        <h3> {아이탬제목[2]} </h3>
        <p>{posts}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
