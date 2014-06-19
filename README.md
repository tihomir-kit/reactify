Reactify
=======================

Reactify is a simple AngularJS demo web app which uses [ReactJS](http://facebook.github.io/react/index.html) to improve the rendering speed of a long item list. Here is a [blog post](http://www.mono-software.com/blog/post/Mono/242/Improving-AngularJS-long-list-rendering-performance-using-ReactJS/) which explains the workflow of implementing ReactJS into your Angular app through [ngReact](https://github.com/davidchang/ngReact) directive.

## Running JSX

To translate JSX into plain JS you'll need to install [NodeJS](http://nodejs.org/) and after that the JSX npm package using:

```npm install -g react-tools```

after you've successfully installed JSX on your machine, you can run the JSX watcher by running:

```jsx --watch jsx --watch jsx/ scripts/```

Any change you make to the "jsx/reactor.js" file will translate into "scripts/reactor.js" which is included in the app.

## Additional reads

* ["NgReact - React Components in Angular"](http://davidandsuzi.com/ngreact-react-components-in-angular/)
* ["Faster AngularJS Rendering (AngularJS and ReactJS)"](http://www.williambrownstreet.net/blog/2014/04/faster-angularjs-rendering-angularjs-and-reactjs/)
* ["AngularJS: My solution to the ng-repeat performance problem"](http://www.williambrownstreet.net/blog/2013/07/angularjs-my-solution-to-the-ng-repeat-performance-problem/)

======================

Made at: [Mono Software Ltd.](http://www.mono-software.com/)
