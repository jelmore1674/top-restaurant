<!-- @format -->

# TOP-Restaurant

This project is for
[_The Odin Project_.](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page)
I will be creating a web application for a restaurant.

In this project I will be using CSS, JS, and webpack. All HTML will be created
using JS.

I will be adding updates and put my thoughts here to help expain what I have
learned building this page.

---

## Planning

I started out by planning out my path to complete this challenge. First thing I
did was create a restaurant name and come up with a menu. Second, I created the
base boilerplate to start this project off. Setup webpack, create all base
files, etc...

Now that I have that out of the way, here is my plan of attack on this.

### Build the homepage/landing page

1. So, the challenge is to build the entire project using JS and the DOM.
2. Before I get to the JS, I will build the site using HTML and CSS to get the
   styling where I want it. Then move an element at a time to be built using JS.

#### Styling

When I create the styling I will be sure to focus on mobile first design. I
struggle with it, so it is a challeng for me to be able to create a fully
responsive web application.

### Create Tab Navigation

1. My planning here will be the same as the main page, hard code to get the
   styling. Then move things over to JS/DOM.
2. Then I need to build the logic to wipe the previous container and add the
   current container.
3. I will use an imported function that I can reuse to create the container for
   each tab.

---

## Updates

### Update 1

So far, I created the landing page. What I did was hard code the lanidng page.
Then, I actually created component files for each section _header.js, about.js,
footer.js_. Which held the content for the project. I then took those
_"components"_ and created a _landingpage.js_ Which is where I imported all 3
compnents and created a function that held the content for the entire landing
page.
