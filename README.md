# Deprecated: react-express-base

This is a small demo project for an [`React`](http://facebook.github.io/react/) single page application (spa).

It is bundled by [`webpack`](https://webpack.github.io/), initially served by an [`Express.js`](http://expressjs.com/) 
server and shows some basic functionality of React. As react itself is only used as the view component of application, 
things like the routing are not handled by itself. This is an advantage as well as a disadvantage - use the right tool 
for the job: React offers a great amount of flexibility, testability and readability. It is however not the easiest to 
understand and start developing if you don't have any experience in it. The learning curve compared to complete frameworks 
like Angular might be a bit higher. Nevertheless I'd recommend React for most projects that don't have a pure fast 
prototyping focus.

This project uses the popular [`react-router`](https://github.com/rackt/react-router) which can be used for client side 
routing.

The project includes a ready to go development workflow.

Note: This project uses ES6. It currently lacks component tests as the current code does not have any functionallity worth testing apart from wiring.

### Getting started

* Clone the repository: `git clone git@github.com:lxanders/angular-express-base.git`
* Install required modules: `npm install`
* Start playing with this project by starting the server in development mode: `npm run dev`
    * Changes to the server will result in a server restart
    * Changes to components will trigger a new bundling through webpack
