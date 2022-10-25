---
id: 67
title: Introducing-the-New-React-DevTools-–-React-Blog
date: 'Oct 25 2022'
tags: ["react","blog"]
metaTags: ["react","blog"]
cover_image: https://velog.velcdn.com/images/snkim/post/e93c6ce9-6d8f-4957-8e4f-30ab8330e217/reactJS.png
description: ''
---

We are excited to announce a new release of the React Developer Tools, available today in Chrome, Firefox, and (Chromium) Edge!
What’s changed? 
A lot has changed in version 4!
At a high level, this new version should offer significant performance gains and an improved navigation experience.
It also offers full support for React Hooks, including inspecting nested objects.

  
  
  
    
      
    
  
  
  
    
Visit the interactive tutorial to try out the new version or see the changelog for demo videos and more details.
Which versions of React are supported? 
react-dom

0-14.x: Not supported
15.x: Supported (except for the new component filters feature)
16.x: Supported

react-native

0-0.61.x: Not supported
0.62: Supported

How do I get the new DevTools? 
React DevTools is available as an extension for Chrome and Firefox.
If you have already installed the extension, it should update automatically within the next couple of hours.
If you use the standalone shell (e.g. in React Native or Safari), you can install the new version from NPM:
npm install -g react-devtools@^4
Where did all of the DOM elements go? 
The new DevTools provides a way to filter components from the tree to make it easier to navigate deeply nested hierarchies.
Host nodes (e.g. HTML <div>, React Native <View>) are hidden by default, but this filter can be disabled:

How do I get the old version back? 
If you are working with React Native version 60 (or older) you can install the previous release of DevTools from NPM:
npm install --dev react-devtools@^3
For older versions of React DOM (v0.14 or earlier) you will need to build the extension from source:
# Checkout the extension source
git clone https://github.com/facebook/react-devtools

cd react-devtools

# Checkout the previous release branch
git checkout v3

# Install dependencies and build the unpacked extension
yarn install
yarn build:extension

# Follow the on-screen instructions to complete installation
Thank you! 
We’d like to thank everyone who tested the early release of DevTools version 4.
Your feedback helped improve this initial release significantly.
We still have many exciting features planned and feedback is always welcome!
Please feel free to open a GitHub issue or tag @reactjs on Twitter.Is this page useful?Edit this page
