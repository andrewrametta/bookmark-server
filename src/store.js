const { v4: uuid } = require("uuid");

const bookmarks = [
  {
    id: uuid(),
    title: "ESPN",
    url: "https://www.espn.com",
    description: "Serving Sports Fans. Anytime. Anywhere.",
    rating: 5,
  },
  {
    id: uuid(),
    title: "CNN",
    url: "https://www.cnn.com",
    description: "Breaking News, Latest News and Videos.",
    rating: 4,
  },
  {
    id: uuid(),
    title: "Youtube",
    url: "https://www.youtube.com",
    description: "Youtube",
    rating: 5,
  },
];

module.exports = { bookmarks };
