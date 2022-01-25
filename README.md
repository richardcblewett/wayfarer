# Wayfarer

## Mission
Design a travel website, for the shadowy organization Wayfarer*.
- Tackle 4 Sprints
- Present an MVP to investors in four days time.
- Overwhelm them with our wit and coding prowess.
- Get the job!!! $$$

*-This project is not associated with any actual company named Wayfarer. 😉 
## Design Decisions
- "The Clients" requested that we create the website using Angular framework.
- We decided to incorporate Bootstrap for our CSS in order to enhance our  familiarity with the technology.
- We chose to deploy on Heroku because we wanted the opportunity to learn how to do that. [Wayfarer](https://wayfarer-sethrichard.herokuapp.com/)


## WireFrames
[WireFrames](./src/assets/wireframes.png)

## User Stories

### Sprint 1: Making A Big Splash(Day 1)

**A user should be able to:**
 1. Navigate to "/" and see a basic splash page with the name of the website. 
 2. See the site-wide header on every page with a link to home page with list of cities. 

### Sprint 2 A Window Into Far Off Lands(Days 2-3)

**A user should be able to:** 
1. View the "San Francisco" page (at "/cities/1") including:
  * The site-wide header.
  * The name of the city.
  * An iconic photo of the city.
2. View a list of posts on the San Francisco page:
  * Sorted by newest first.
  * With the post titles linked to the individual post "show" pages.
3. Use the search bar to search through the posts' title and/or content.
4. Click on the title of one of their posts and be redirected to a "show" page for that post.
5. View post "show" pages with title, author, and content.

### Sprint 3 Whole New World With Jasmine(Day 3)

**A user should be able to:**

1. View city pages for "London" and "Gibraltar".
2. A post's title must be between 1 and 200 characters.
3. A post's content must not be empty.

### Sprint 4: It's Raining...(Day 4 and beyond)
1. Call [Open Weather API](https://openweathermap.org/current) for each city to display the current weather on each city's page.

### Where to go from here

**A user should be able to:**

1. Visit city pages via pretty urls, like "/cities/san-francisco".
2. On a city's page:
  * See post content truncated to 1000 characters max, with a link to view more.
  * See a relative published date, e.g. "2 days ago".
3. View an error message when form validations fail, for the following validations:
  * Title must be between 1 and 200 characters.
  * Content must not be empty.
4. View only the 10 most recent posts on a city page (pagination), with
  * A link/button to the "Next" 10.
  * A link/button to the "Previous" 10.
5. View all vagabond cities as markers/pins on a map on the site's homepage.
6. Click on a pin on the homepage map and be redirected to the corresponding city page.

## Program Details
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
### Other technologies used:

- Node.js
- BootStrap
- Heroku
- Jasmine
- Agile
- Pair Programming

### Hiccups and Areas to Grow:
  - Testing for components that did not exist yet.
  - Underestimating the need to clarify details for sprints 3 and 4. 
  - Gain a better understanding of who Wayfarer is and how they want to use this site.

