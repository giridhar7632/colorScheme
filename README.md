---
name: "Color Scheme Generator"
description: "Create color schemes while learning React Hooks"
author: "@giridhar7632"
---

# Color Scheme Generator

This workshop is an introduction to [React Hooks](https://reactjs.org/docs/hooks-intro.html). We're building a colorful app - 'random-color scheme generator' using react. It will look something like this.

![Final Result](https://cloud-16p9skn27.vercel.app/0colorscheme.png)

Here's the [Live demo](https://color-scheme-generator.giridharhackclu.repl.co/) and [Source Code](https://repl.it/@Giridharhackclu/Color-scheme-generator#src/index.js)

## Prerequisites

Before staring this workshop, you should have some knowledge about [React.js](https://reactjs.org) and some ES6 features of JavaScript.

- React Fundamentals
  - [JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [Components and Props](https://reactjs.org/docs/components-and-props.html)
  - [State and LifeCycle](https://reactjs.org/docs/state-and-lifecycle.html)

If you are familar with these, Lets get going.

## React Hooks API

[Hooks](https://reactjs.org/docs/hooks-intro.html) are introduced in React 16.8 version. Previously, [Class components](https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/) were the only way to define a component that had its own state, and lifecycle methods. [Functional components](https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/) of React, which are light and more flexible, are limited in functionality. Hooks enables us to use state and other React features, like lifecycle methods and event handlers, without writing a Class component.

There are many benifits of using Functional components. They are :

- Easier to read, test and debug.
- Have better performance.
- More reusable.

## Setup

For setting up the project fork the repl [here](https://repl.it/@Giridharhackclu/color-scheme-generator-starter#README.md). The starter repl contains ['create-react-app'](https://github.com/facebook/create-react-app) installed. There are some basic styles applied, you will get cleared along the workshop.

Let's start creating our React app.
After setting up the above [repl](https://repl.it/@Giridharhackclu/color-scheme-generator-starter#README.md), click run button to start the live-server (it’ll take a moment to get running the first time). After running successfully, kick down the console, you can see `Hello world!` on the webpage.

Then navigate to `src` folder and create a component `Color.js`. The `Color.js` component displays the colors on the page. Add the following code. The element with class `container` has it's styles in `index.css`. Don't forget too include classes to the elements through out the project.

```javascript
import React from 'react'

export default function Color() {
  return (
    <div className="container">
      
    </div>
  )
}
```

