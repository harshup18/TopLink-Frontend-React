import React from "react";
import Faker from "faker";
import like from "./twitter_fav.png";


const PostItem = ({ username, body, favCount, date, profileImg}) => {
  return (
    <div
      style={{
        border: "1px solid  black",
        marginBottom: 5,
        marginLeft: 200,
        width: "70%",
        display: "flex",
        padding: "15",
        borderRadius: "5%"
      }}
    >
      <div>
        <img
          src={profileImg}
          alt="user"
          style={{ borderRadius: "50%", width: 100, height: "auto" }}
        />
        <p style={{color: "white"}}>{username}</p>
      </div>
      <div style={{ width: "100%" }}>
        <p style={{ textAlign: 'right', marginRight: "20px", fontWeight: "bold", color: "white"}}> Date: {date}</p>
        <p style={{ color: "white"}}>{body}</p>
        <div style={{ position: "relative" , color: "white"}}>
          <p style={{ textAlign: 'right', marginRight: "20px", fontWeight: "bold" , color: "pink"}}> <img src={like} style ={{width:"30px"}}/> : {favCount}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
