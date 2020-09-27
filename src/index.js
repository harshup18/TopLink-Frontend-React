// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

import React, {useState} from "react";
import { render } from "react-dom";
// import "./css/index.css";
// import Demo from "./examples/Demo.js";
// import PostList from "./Tweets/PostList";
// import LandingPage from "./Tweets/LandingPage";

import LoginPage from "./Tweets/LoginPage";


const App = () => (
  // const [displayFirst,setDisplayFirst] useState(false)

  <LoginPage/>
  // <div>
  //   {displayFirst===false?
  //   <Demo setDisplayFirst={setDisplayFirst}/>
  //   :
  //     <div style={{backgroundColor: "#243447"}}
  //         className="App">
  //          <PostList />
  //     </div>
  // }
  // </div>
);

render(<App />, document.getElementById("root"));
