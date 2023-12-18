import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((story) =>
  story.categories.includes("politics")
);

console.log("filteredNews:", filteredNews);

// Part 2 - start here
const sortedNews = filteredNews.slice().sort((a, b) => {
  if (a.body.length < b.body.length) {
    return -1;
  } else if (a.body.length > b.body.length) {
    return 1;
  } else {
    return 0;
  }
});

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
