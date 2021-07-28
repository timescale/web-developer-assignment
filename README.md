# Timescale Frontend Interview Assignment

Thank you for taking the time to apply for a front end position at Timescale!
Because we get hundreds of applicants for the front end positions, we are asking
applicants to build a small React movie app. This exercise should take around
3 hours to complete at a time of your choosing and should follow the instructions
below. If you have any questions, feel free to reach out to use and we'll be happy
to help. Happy hacking!

## Assignment

![Screenshot](./src/images/screenshot.png)

You are tasked with building a movie discovery app built in react. This app will
display movies in a grid and give the user more information when they click on
one of the posters. To fetch the movie info, we will be using [The Movie DB][movieDB]
and will include the API key for you to add to the `.env` in the initial email.

### Features

The main features that should be implemented
- On the initial visit to the site, it will show the most recent movies
- Allow users to put in a search term and display matches from the movie database in the same grid
  - Matches should come from an API call, not filtering prior downloaded results  
- When a user clicks on one of the cards, open a modal and display more information about the movie


### The rules

- Follow the [designs in Figma][figma] as closely as possible
- Use **only** the packages provided in the package.json. You dont have to use all of them, 
  but we ask for you not to add any additional
- Site should have a simple responsive design
- Site should work in the latest Chrome on Mac OS
- Fork the repo to your own account, make it public and send us the repo url when you are completed. We will
  clone and run the site on our local.


[movieDB]: https://developers.themoviedb.org/3/getting-started/introduction
[figma]: https://www.figma.com/file/KKkrDYSUAuRavpqRingRdZ/Movie-Grid?node-id=0%3A1
