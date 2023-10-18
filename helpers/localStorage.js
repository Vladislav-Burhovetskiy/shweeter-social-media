import { tweetsData } from "../data.js";

export function saveDataToLocalStorage() {
  localStorage.setItem("tweetsData", JSON.stringify(tweetsData));
}

export function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("tweetsData");
  if (storedData) {
    tweetsData.length = 0; // Очищення поточних даних
    const parsedData = JSON.parse(storedData);
    tweetsData.push(...parsedData);
  }
}