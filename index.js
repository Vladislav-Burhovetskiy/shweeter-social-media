import {
  loadDataFromLocalStorage,
} from "./helpers/localStorage.js";
import {
  handleReplyClick,
  handleLikeClick,
  handleRetweetClick,
  handleDeleteClick,
} from "./helpers/iconsClick.js";
import { handleTweetBtnClick } from "./helpers/buttonsClick.js";
import { render } from "./helpers/render.js";

const tweetBtn = document.getElementById("tweet-btn");

loadDataFromLocalStorage();

tweetBtn.addEventListener("click", () => {
  handleTweetBtnClick("hi");
});


document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet);
  } else if (e.target.dataset.reply) {
    handleReplyClick(e.target.dataset.reply);
  } else if (e.target.dataset.delete) {
    handleDeleteClick(e.target.dataset.delete);
  }
});

render();
