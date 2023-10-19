import { tweetsData } from "../data.js";
import { saveDataToLocalStorage } from "./localStorage.js";
import { render } from "./render.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export function handleTweetBtnClick() {
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
      isReplied: true,
      uuid: uuidv4(),
    });

    saveDataToLocalStorage();
    render();
    tweetInput.value = "";
  }
}

export function handleReplyBtnClick(tweetId) {
  const replyInput = document.getElementById(`reply-input-${tweetId}`);
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (replyInput.value) {
    targetTweetObj.replies.push({
      handle: `@ZitzBattletoads`,
      profilePic: `images/avatar.jpeg`,
      tweetText: replyInput.value,
      myReply: true,
      uuid: uuidv4()
    });

    saveDataToLocalStorage();
    render();
    replyInput.value = "";
  }
}
