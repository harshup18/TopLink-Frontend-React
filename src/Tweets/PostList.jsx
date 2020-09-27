import React, { Component } from "react";
import PostItem from "./PostItem";
import GifLoader from 'react-gif-loader';
import Logo from "./twitter_icon.png";

class PostList extends Component {
  /*state = {
    posts: []
  };*/

  constructor(props) {
    super(props);
    this.state = { posts: [],name:props.name };
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {

   const requestOptions= {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username : this.state.name })
    };

    fetch('http://127.0.0.1:8000/getTweets', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data.data });
      })
      .catch(error => {
        this.setState({ error: error })
        console.log(error)
      })  
  }  

  render() {
    const { posts } = this.state;
    return (
      <div >
        
        <h1 style={{color: "white"}}> <img src={Logo} style ={{width:"50px"}}/> -- List of Tweets having links -- </h1>
        {posts.length === 0 ? (
           <GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/SMKiEh9WDO6ze/source.gif"
                /*imageStyle= {marginTop: "20%"}*/
                overlayBackground="rgba(0,0,0,0.5)"
          />
          
        ) : null}
        {posts.map((item, index) => (
          <div key={index}>
            {item.user != undefined ? (
            <PostItem username = {item.user != undefined ? item.user.name : "Dummy" }  date = {item.created_at} profileImg = {item.user != undefined ? item.user.profile_image_url : "" }  body={item.text} favCount = {item.favorite_count} />
            ) : alert("Most Searched Domain : "+ item.mostSharedDomain+ "\n " + "Domain Search Count : "+ item.mostSharedDomainCount+ "\n " + "Most Active Friend : "+ item.friendWithMaxUrlTweet + "\n " + "Tweet Count : "+ item.friendWithMaxUrlTweetCount+ "\n " )}
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;

