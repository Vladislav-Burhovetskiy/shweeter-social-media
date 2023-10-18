import { tweetsData } from "../data.js";
import { saveDataToLocalStorage } from "./localStorage.js";
import { render } from "./render.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export function handleTweetBtnClick(string) {
  const tweetInput = document.getElementById("tweet-input");

  if (tweetInput.value) {
    tweetsData.unshift({
      handle: `@ZitzBattletoads`,
      profilePic: `images/avatar.jpeg`,
      myTweet: true,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      isReplied: false,
      uuid: uuidv4(),
    });
    console.log(string)
    saveDataToLocalStorage();
    render();
    tweetInput.value = "";
  }
}
