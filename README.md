Redux Test App
==============

Web app to test redux implementation techniques
 
* Node App with Express
* JSON and HTML endpoints
* Simple Redux app
* Feature Tests with Chai
* Unit Tests with Jest
* SCSS asset path
* EJS for html templating
* Hosted on Heroku
    
Run it locally
--------------

    `npm start`

Run Tests
---------

    `npm test`
    `npm run test:watch`
    `npm run test:feature`

Deploy instructions
-------------------

Build Static Files

    `./node_modules/.bin/webpack -p`

Deploy new app to heroku
    `heroku create`
    `git push heroku master`
    `heroku open`

Links
-----

* [Simple Node Redux App](https://github.com/Ashdown/node-redux)
* [Redux/Babel Hello World](https://github.com/helols/so-hello-world)
* [Redux Tutorial]([Original Tutorial](http://www.jchapron.com/2015/08/14/getting-started-with-redux/) )
* [Testing NodeJs with Mocha and Chai](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WPJ7vVMrK9Y)
* [Testing Redux with Jest](http://redux.js.org/docs/recipes/WritingTests.html)
* [Styling with React](http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/)
* [App on Heroku](http://warm-plateau-32517.herokuapp.com/)