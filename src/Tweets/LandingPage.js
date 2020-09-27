import React, {useState} from "react";
import { render } from "react-dom";
import "../css/index.css";
import Demo from "../examples/Demo.js";
import PostList from "./PostList";

const LandingPage = (props) => {

	const [displayFirst,setDisplayFirst] = useState(false);
	return(
			<div>
		    {displayFirst===false?
		    <Demo setDisplayFirst={setDisplayFirst} displayFirst={displayFirst}/>
		    :
		      <div style={{backgroundColor: "#243447"}}
		          className="App">
		           <PostList />
		      </div>
		  }
		  </div>
	)
}

export default LandingPage;