---
id: 286
title: React-v16.8--The-One-With-Hooks-–-React-Blog
date: 'Oct 25 2022'
tags: ["react","blog"]
metaTags: ["react","blog"]
cover_image: https://velog.velcdn.com/images/snkim/post/e93c6ce9-6d8f-4957-8e4f-30ab8330e217/reactJS.png
description: ''
---

With React 16.8, React Hooks are available in a stable release!
What Are Hooks? 
Hooks let you use state and other React features without writing a class. You can also build your own Hooks to share reusable stateful logic between components.
If you’ve never heard of Hooks before, you might find these resources interesting:

Introducing Hooks explains why we’re adding Hooks to React.
Hooks at a Glance is a fast-paced overview of the built-in Hooks.
Building Your Own Hooks demonstrates code reuse with custom Hooks.
Making Sense of React Hooks explores the new possibilities unlocked by Hooks.
useHooks.com showcases community-maintained Hooks recipes and demos.

You don’t have to learn Hooks right now. Hooks have no breaking changes, and we have no plans to remove classes from React. The Hooks FAQ describes the gradual adoption strategy.
No Big Rewrites 
We don’t recommend rewriting your existing applications to use Hooks overnight. Instead, try using Hooks in some of the new components, and let us know what you think. Code using Hooks will work side by side with existing code using classes.
Can I Use Hooks Today? 
Yes! Starting with 16.8.0, React includes a stable implementation of React Hooks for:

React DOM
React DOM Server
React Test Renderer
React Shallow Renderer

Note that to enable Hooks, all React packages need to be 16.8.0 or higher. Hooks won’t work if you forget to update, for example, React DOM.
React Native will support Hooks in the 0.59 release.
Tooling Support 
React Hooks are now supported by React DevTools. They are also supported in the latest Flow and TypeScript definitions for React. We strongly recommend enabling a new lint rule called eslint-plugin-react-hooks to enforce best practices with Hooks. It will soon be included into Create React App by default.
What’s Next 
We described our plan for the next months in the recently published React Roadmap.
Note that React Hooks don’t cover all use cases for classes yet but they’re very close. Currently, only getSnapshotBeforeUpdate() and componentDidCatch() methods don’t have equivalent Hooks APIs, and these lifecycles are relatively uncommon. If you want, you should be able to use Hooks in most of the new code you’re writing.
Even while Hooks were in alpha, the React community created many interesting examples and recipes using Hooks for animations, forms, subscriptions, integrating with other libraries, and so on. We’re excited about Hooks because they make code reuse easier, helping you write your components in a simpler way and make great user experiences. We can’t wait to see what you’ll create next!
Testing Hooks 
We have added a new API called ReactTestUtils.act() in this release. It ensures that the behavior in your tests matches what happens in the browser more closely. We recommend to wrap any code rendering and triggering updates to your components into act() calls. Testing libraries can also wrap their APIs with it (for example, react-testing-library’s render and fireEvent utilities do this).
For example, the counter example from this page can be tested like this:
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and effect
  act(() => {    ReactDOM.render(<Counter />, container);  });  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and effect
  act(() => {    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));  });  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
The calls to act() will also flush the effects inside of them.
If you need to test a custom Hook, you can do so by creating a component in your test, and using your Hook from it. Then you can test the component you wrote.
To reduce the boilerplate, we recommend using react-testing-library which is designed to encourage writing tests that use your components as the end users do.
Thanks 
We’d like to thank everybody who commented on the Hooks RFC for sharing their feedback. We’ve read all of your comments and made some adjustments to the final API based on them.
Installation 
React 
React v16.8.0 is available on the npm registry.
To install React 16 with Yarn, run:
yarn add react@^16.8.0 react-dom@^16.8.0
To install React 16 with npm, run:
npm install --save react@^16.8.0 react-dom@^16.8.0
We also provide UMD builds of React via a CDN:
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
Refer to the documentation for detailed installation instructions.
ESLint Plugin for React Hooks 

Note
As mentioned above, we strongly recommend using the eslint-plugin-react-hooks lint rule.
If you’re using Create React App, instead of manually configuring ESLint you can wait for the next version of react-scripts which will come out shortly and will include this rule.

Assuming you already have ESLint installed, run:
# npm
npm install eslint-plugin-react-hooks --save-dev

# yarn
yarn add eslint-plugin-react-hooks --dev
Then add it to your ESLint configuration:
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error"
  }
}
Changelog 
React 

Add Hooks — a way to use state and other React features without writing a class. (@acdlite et al. in #13968)
Improve the useReducer Hook lazy initialization API. (@acdlite in #14723)

React DOM 

Bail out of rendering on identical values for useState and useReducer Hooks. (@acdlite in #14569)
Don’t compare the first argument passed to useEffect/useMemo/useCallback Hooks. (@acdlite in #14594)
Use Object.is algorithm for comparing useState and useReducer values. (@Jessidhia in #14752)
Support synchronous thenables passed to React.lazy(). (@gaearon in #14626)
Render components with Hooks twice in Strict Mode (DEV-only) to match class behavior. (@gaearon in #14654)
Warn about mismatching Hook order in development. (@threepointone in #14585 and @acdlite in #14591)
Effect clean-up functions must return either undefined or a function. All other values, including null, are not allowed. @acdlite in #14119

React Test Renderer 

Support Hooks in the shallow renderer. (@trueadm in #14567)
Fix wrong state in shouldComponentUpdate in the presence of getDerivedStateFromProps for Shallow Renderer. (@chenesan in #14613)
Add ReactTestRenderer.act() and ReactTestUtils.act() for batching updates so that tests more closely match real behavior. (@threepointone in #14744)

ESLint Plugin: React Hooks 

Initial release. (@calebmer in #13968)
Fix reporting after encountering a loop. (@calebmer and @Yurickh in #14661)
Don’t consider throwing to be a rule violation. (@sophiebits in #14040)

Hooks Changelog Since Alpha Versions 
The above changelog contains all notable changes since our last stable release (16.7.0). As with all our minor releases, none of the changes break backwards compatibility.
If you’re currently using Hooks from an alpha build of React, note that this release does contain some small breaking changes to Hooks. We don’t recommend depending on alphas in production code. We publish them so we can make changes in response to community feedback before the API is stable.
Here are all breaking changes to Hooks that have been made since the first alpha release:

Remove useMutationEffect. (@sophiebits in #14336)
Rename useImperativeMethods to useImperativeHandle. (@threepointone in #14565)
Bail out of rendering on identical values for useState and useReducer Hooks. (@acdlite in #14569)
Don’t compare the first argument passed to useEffect/useMemo/useCallback Hooks. (@acdlite in #14594)
Use Object.is algorithm for comparing useState and useReducer values. (@Jessidhia in #14752)
Render components with Hooks twice in Strict Mode (DEV-only). (@gaearon in #14654)
Improve the useReducer Hook lazy initialization API. (@acdlite in #14723)
Is this page useful?Edit this page
