import { tweetsData } from "../data.js";

export function saveDataToLocalStorage() {
  localStorage.setItem("tweetData", JSON.stringify(tweetsData));
}

export function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("tweetData");

  if (storedData) {
    tweetsData.length = 0;
    const parsedData = JSON.parse(storedData);
    tweetsData.push(...parsedData);
  }
}
