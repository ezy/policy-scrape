"use strict";

// const scrapeIt = require("scrape-it");
const scrapeURL = "http://www.interest.co.nz/news/election-2017-policies";

// Promise interface
scrapeIt(scrapeURL, {
  title: ".header h1",
  desc: ".header h2",
  avatar: {
    selector: ".header img",
    attr: "src"
  }
}).then(page => {
  console.log(page);
});

// Callback interface
scrapeIt(scrapeURL, {
  // Fetch the articles
  articles: {
    listItem: ".article",
    data: {

      // Get the article date and convert it into a Date object
      createdAt: {
        selector: ".date",
        convert: x => new Date(x)
      },

      // Get the title
      title: "a.article-title",

      // Nested list

      tags: {
        listItem: ".tags > span"
      },

      // Get the content

      content: {
        selector: ".article-content",
        how: "html"
      }
    }
  },

  // Fetch the blog pages

  pages: {
    listItem: "li.page",
    name: "pages",
    data: {
      title: "a",
      url: {
        selector: "a",
        attr: "href"
      }
    }
  },

  // Fetch some other data from the page

  title: ".header h1",
  desc: ".header h2",
  avatar: {
    selector: ".header img",
    attr: "src"
  }
}, (err, page) => {
  console.log(err || page);
});
