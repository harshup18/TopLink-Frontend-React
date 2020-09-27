import React, {useState,Fragment} from "react";
import { render } from "react-dom";
import "../css/index.css";
import PostList from "./PostList";

const LoginPage = () => {

	const [displayFirst,setDisplayFirst] = useState(false)
	const [inputVal,setIputVal] = useState("")
	return(
			
		    <Fragment>

		    {displayFirst==false?
		    	<div style={{ width: "100%", height: "100%", position: "fixed",backgroundColor: "cadetblue"}}  >
		    	<div  style={{ top: "50%", left: "50%", position: "fixed",display: "grid"}}   >
			    	<input value={inputVal} onChange={(event)=>{setIputVal(event.target.value)}} placeholder="Twitter User Name" />
			    	<button onClick={()=>{setDisplayFirst(!displayFirst)}} disabled={inputVal==""} >Proceed</button>
		    	</div>
		    	</div>
		    :
		    	<div style={{backgroundColor: "#243447"}} className="App">
		           <PostList name={inputVal} />
		      	</div>
		    }	
		    </Fragment>	
		    
	);
}

export default LoginPage;


