# Frontend Mentor - REST Countries API with color theme switcher solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Setup]
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
A responsive web application that displays country data with detailed information and interactive features such as search, region filtering, dark mode, and border navigation.  

### The challenge

- **Country Listing**: Shows a list of country cards with flags, name, population, region, and capital.  
- **Search**: Search for countries by name using the input field.  
- **Filter by Region**: Select a region from a dropdown to filter countries.  
- **Country Details Modal**: Click on a country card to open a modal with:
  - Full country name  
  - Native name  
  - Population, region, sub-region, and capital  
  - Top-level domain, currencies, languages  
  - Bordering countries with a clickable buttons.
- **Dark Mode**: Toggle between light and dark themes.  
- **Responsive Design**: Works on desktops, tablets, and mobile devices. 

### Screenshot

![](./screenshot/Screenshot%202025-11-26%20162310.png)

![](./screenshot/Screenshot%202025-11-26%20162503.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid
-css block
- Javascript
- Typescript

### What I learned

* Dynamically render data using TypeScript and the DOM
* Handle API responses
* Build a modal with dynamic content including borders that navigate to other countries
* Use CSS variables for theme switching (light and dark mode)


### Continued development
* Improve accessibility (keyboard navigation, ARIA labels)

* Add smooth transitions when opening/closing the modal

* Explore using a frontend framework like React to simplify state management

### Useful esources:
* [Vite](https://vitejs.dev/) – Bundler and build tool
* [TypeScript](https://www.typescriptlang.org/) –Typescript
* [REST Countries API](https://restcountries.com/) – Country data source
* [Font Awesome](https://fontawesome.com/) – Icons used for dark mode toggle
* [Google Fonts – Material Symbols](https://fonts.google.com/icons) – Icons used for search input
* [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – Layout reference
* [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) – Grid reference
* [MDN Web Docs](https://developer.mozilla.org/) – JavaScript & DOM references
* [Vercel](https://vercel.com/) – Deployment platform
* [Medium](https://medium.com/geekculture/accessing-data-inside-nested-data-structures-in-javascript-an-example-21c5ea1372e3) netsed Objects
* [youtube](https://www.youtube.com/watch?v=VU0BQnuPfwc) maping nested objects


## setup
**Clone the repository**:

```bash
git clone https://github.com/hasnasalah/REST-Countries-API
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init
npx tsc
npm install -g live-server
live-server
```
---



 



## Author

- Website - [Hasna Ben Jillali](https://rest-countries-iu6smzjgd-hasna-ben-jillalis-projects.vercel.app/)


## Acknowledgments
I want to acknowlege Ervin Bani For the Moon icon for dark mode.

