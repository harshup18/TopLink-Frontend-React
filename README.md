A Front-end Twitter TopLink application build in React. 
VISIT the application from here -> 
https://toplink-app-frontend-harsh.herokuapp.com/

==============
App flow ->
1. Click on the above mentioned url.
2. Enter your twitter username.
3. App redirects to user timeline.
4. As soon as timeline opens some analytics are displayed in alert box. [Analytics -> MostSearchedDomain and its count, FriendWhoSendMaxLinks and its count]
5. Then the list of tweets having links is displayed.

[Note: Please refresh the page to query for different username.]

Uses REST api to fetch the tweets having urls.  
API ->
EndPoint = https://toplink-app.herokuapp.com/getTweets
Method= POST 
Body = {
  "username" : "TwitterUserName"
}

The backend of this application is written in Django 
Git Repo link - https://github.com/harshup18/Twitter-TopLink-App
