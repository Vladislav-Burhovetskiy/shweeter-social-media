import { loadDataFromLocalStorage } from "./helpers/localStorage.js";
import {
  handleReplyClick,
  handleLikeClick,
  handleRetweetClick,
  handleDeleteTweetClick,
  handleDeleteReplyClick,
} from "./helpers/iconsClick.js";
import {
  handleTweetBtnClick,
  handleReplyBtnClick,
} from "./helpers/buttonsClick.js";
import { render } from "./helpers/render.js";

// const tweetBtn = document.getElementById("tweet-btn");
// tweetBtn.addEventListener("click", handleTweetBtnClick);

// localStorage.clear();
loadDataFromLocalStorage();
render();

document.addEventListener("click", function (e) {
  const dataTarget = e.target.dataset;

  if (e.target.dataset.like) {
    handleLikeClick(dataTarget.like);
  } else if (dataTarget.retweet) {
    handleRetweetClick(dataTarget.retweet);
  } else if (dataTarget.reply) {
    handleReplyClick(dataTarget.reply);
  } else if (dataTarget.deleteTweet) {
    handleDeleteTweetClick(dataTarget.deleteTweet);
  } else if (dataTarget.deleteReply && dataTarget.deleteReplyTweetId) {
    handleDeleteReplyClick(dataTarget.deleteReply, dataTarget.deleteReplyTweetId);
  } else if (e.target.id === "tweet-btn") {
    handleTweetBtnClick();
  } else if (dataTarget.replyBtn) {
    handleReplyBtnClick(dataTarget.replyBtn);
  }
});
