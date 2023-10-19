import { tweetsData } from "../data.js";

function getFeedHtml() {
  let feedHtml = ``;

  tweetsData.forEach(function (tweet) {
    const likeIconClass = tweet.isLiked ? "liked" : "";
    const retweetIconClass = tweet.isRetweeted ? "retweeted" : "";
    const replyIconClass = tweet.isReplied ? "" : "uncomment";
    const replyHiddenClass = tweet.isReplied ? "hidden" : "";

    let repliesHtml = "";

    if (tweet.replies.length > 0) {
      tweet.replies.forEach(function (reply) {
        const deleteReplyIcon = reply.myReply
          ? `<i 
            class="fa-regular fa-trash-can" 
            data-delete-reply="${reply.uuid}" 
            data-delete-reply-tweet-id="${tweet.uuid}"
            ></i>`
          : ``;

        repliesHtml += `
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <div class="handle-delete-reply-container">
                  <p class="handle">${reply.handle}</p>
                  ${deleteReplyIcon}
                </div>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`;
      });
    }

    const deleteTweetIcon = tweet.myTweet
      ? `<i class="fa-regular fa-trash-can" data-delete-tweet="${tweet.uuid}"></i>`
      : ``;

    feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
          <div class="handle-delete-tweet-container">
            <p class="handle">${tweet.handle}</p>
            ${deleteTweetIcon}
          </div>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots ${replyIconClass}"
                    data-reply="${tweet.uuid}" id="reply-icon-${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
    <div ${replyHiddenClass} id="replies-${tweet.uuid}">
        ${repliesHtml}
        <div class="tweet-reply reply-container">
          <input 
            class="reply-input" 
            id="reply-input-${tweet.uuid}"
            placeholder="Your reply..."
          >
          <button class="reply-btn" data-reply-btn="${tweet.uuid}">reply</button>
        </div>
    </div>
</div>
`;
  });
  return feedHtml;
}

export function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
}
