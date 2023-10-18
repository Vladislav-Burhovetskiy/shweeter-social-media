import { tweetsData } from "../data.js";
import { saveDataToLocalStorage } from "./localStorage.js";
import { render } from "./render.js";

export function handleReplyClick(tweetId) {
  document.getElementById(`replies-${tweetId}`).classList.toggle("hidden");

  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.replies.length > 0) {
    document
      .getElementById(`reply-icon-${tweetId}`)
      .classList.toggle("uncomment");
  }
}

export function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
  } else {
    targetTweetObj.likes++;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;

  saveDataToLocalStorage();
  render();
}

export function handleRetweetClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--;
  } else {
    targetTweetObj.retweets++;
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;

  saveDataToLocalStorage();
  render();
}

export function handleDeleteClick(tweetId) {
  const myIndex = tweetsData.findIndex(function (tweet) {
    return tweet.uuid === tweetId;
  });
  tweetsData.splice(myIndex, 1);

  saveDataToLocalStorage();
  render();
}
