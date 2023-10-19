import { tweetsData } from "../data.js";
import { saveDataToLocalStorage } from "./localStorage.js";
import { render } from "./render.js";

export function handleReplyClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  targetTweetObj.isReplied = !targetTweetObj.isReplied;

  saveDataToLocalStorage();
  render();
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

export function handleDeleteTweetClick(tweetId) {
  const myIndex = tweetsData.findIndex(function (tweet) {
    return tweet.uuid === tweetId;
  });
  tweetsData.splice(myIndex, 1);

  saveDataToLocalStorage();
  render();
}

export function handleDeleteReplyClick(replyId, tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  const myIndex = targetTweetObj.replies.findIndex(function (reply) {
    return reply.uuid === replyId;
  });

  targetTweetObj.replies.splice(myIndex, 1);

  saveDataToLocalStorage();
  render();
}
