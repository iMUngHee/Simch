---
id: 7
title: React-v17.0-–-React-Blog
date: 'Oct 25 2022'
tags: ["react","blog"]
metaTags: ["react","blog"]
cover_image: https://velog.velcdn.com/images/snkim/post/e93c6ce9-6d8f-4957-8e4f-30ab8330e217/reactJS.png
description: ''
---

Today, we are releasing React 17! We’ve written at length about the role of the React 17 release and the changes it contains in the React 17 RC blog post. This post is a brief summary of it, so if you’ve already read the RC post, you can skip this one.
No New Features 
The React 17 release is unusual because it doesn’t add any new developer-facing features. Instead, this release is primarily focused on making it easier to upgrade React itself.
In particular, React 17 is a “stepping stone” release that makes it safer to embed a tree managed by one version of React inside a tree managed by a different version of React.
It also makes it easier to embed React into apps built with other technologies.
Gradual Upgrades 
React 17 enables gradual React upgrades. When you upgrade from React 15 to 16 (or, this time, from React 16 to 17), you would usually upgrade your whole app at once. This works well for many apps. But it can get increasingly challenging if the codebase was written more than a few years ago and isn’t actively maintained. And while it’s possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events.
We’re fixing many of those problems with React 17. This means that when React 18 and the next future versions come out, you will now have more options. The first option will be to upgrade your whole app at once, like you might have done before. But you will also have an option to upgrade your app piece by piece. For example, you might decide to migrate most of your app to React 18, but keep some lazy-loaded dialog or a subroute on React 17.
This doesn’t mean you have to do gradual upgrades. For most apps, upgrading all at once is still the best solution. Loading two versions of React — even if one of them is loaded lazily on demand — is still not ideal. However, for larger apps that aren’t actively maintained, this option makes sense to consider, and React 17 lets those apps not get left behind.
We’ve prepared an example repository demonstrating how to lazy-load an older version of React if necessary. This demo uses Create React App, but it should be possible to follow a similar approach with any other tool. We welcome demos using other tooling as pull requests.

Note
We’ve postponed other changes until after React 17. The goal of this release is to enable gradual upgrades. If upgrading to React 17 were too difficult, it would defeat its purpose.

Changes to Event Delegation 
To enable gradual updates, we’ve needed to make some changes to the React event system. React 17 is a major release because these changes are potentially breaking. You can check out our versioning FAQ to learn more about our commitment to stability.
In React 17, React will no longer attach event handlers at the document level under the hood. Instead, it will attach them to the root DOM container into which your React tree is rendered:
const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
In React 16 and earlier, React would do document.addEventListener() for most events. React 17 will call rootNode.addEventListener() under the hood instead.

  
  
  
    
      
    
  
  
  
    
We’ve confirmed that numerous problems reported over the years on our issue tracker related to integrating React with non-React code have been fixed by the new behavior.
If you run into issues with this change, here’s a common way to resolve them.
Other Breaking Changes 
The React 17 RC blog post describes the rest of the breaking changes in React 17.
We’ve only had to change fewer than twenty components out of 100,000+ in the Facebook product code to work with these changes, so we expect that most apps can upgrade to React 17 without too much trouble. Please tell us if you run into problems.
New JSX Transform 
React 17 supports the new JSX transform. We’ve also backported support for it to React 16.14.0, React 15.7.0, and 0.14.10. Note that it is completely opt-in, and you don’t have to use it. The classic JSX transform will keep working, and there are no plans to stop supporting it.
React Native 
React Native has a separate release schedule. We landed the support for React 17 in React Native 0.64. As always, you can track the release discussions on the React Native Community releases issue tracker.
Installation 
To install React 17 with npm, run:
npm install react@17.0.0 react-dom@17.0.0
To install React 17 with Yarn, run:
yarn add react@17.0.0 react-dom@17.0.0
We also provide UMD builds of React via a CDN:
<script crossorigin src="https://unpkg.com/react@17.0.0/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.production.min.js"></script>
Refer to the documentation for detailed installation instructions.
Changelog 
React 

Add react/jsx-runtime and react/jsx-dev-runtime for the new JSX transform. (@lunaruan in #18299)
Build component stacks from native error frames. (@sebmarkbage in #18561)
Allow to specify displayName on context for improved stacks. (@eps1lon in #18224)
Prevent 'use strict' from leaking in the UMD bundles. (@koba04 in #19614)
Stop using fb.me for redirects. (@cylim in #19598)

React DOM 

Delegate events to roots instead of document. (@trueadm in #18195 and others)
Clean up all effects before running any next effects. (@bvaughn in #17947)
Run useEffect cleanup functions asynchronously. (@bvaughn in #17925)
Use browser focusin and focusout for onFocus and onBlur. (@trueadm in #19186)
Make all Capture events use the browser capture phase. (@trueadm in #19221)
Don’t emulate bubbling of the onScroll event. (@gaearon in #19464)
Throw if forwardRef or memo component returns undefined. (@gaearon in #19550)
Remove event pooling. (@trueadm in #18969)
Stop exposing internals that won’t be needed by React Native Web. (@necolas in #18483)
Attach all known event listeners when the root mounts. (@gaearon in #19659)
Disable console in the second render pass of DEV mode double render. (@sebmarkbage in #18547)
Deprecate the undocumented and misleading ReactTestUtils.SimulateNative API. (@gaearon in #13407)
Rename private field names used in the internals. (@gaearon in #18377)
Don’t call User Timing API in development. (@gaearon in #18417)
Disable console during the repeated render in Strict Mode. (@sebmarkbage in #18547)
In Strict Mode, double-render components without Hooks too. (@eps1lon in #18430)
Allow calling ReactDOM.flushSync during lifecycle methods (but warn). (@sebmarkbage in #18759)
Add the code property to the keyboard event objects. (@bl00mber in #18287)
Add the disableRemotePlayback property for video elements. (@tombrowndev in #18619)
Add the enterKeyHint property for input elements. (@eps1lon in #18634)
Warn when no value is provided to <Context.Provider>. (@charlie1404 in #19054)
Warn when memo or forwardRef components return undefined. (@bvaughn in #19550)
Improve the error message for invalid updates. (@JoviDeCroock in #18316)
Exclude forwardRef and memo from stack frames. (@sebmarkbage in #18559)
Improve the error message when switching between controlled and uncontrolled inputs. (@vcarl in #17070)
Keep onTouchStart, onTouchMove, and onWheel passive. (@gaearon in #19654)
Fix setState hanging in development inside a closed iframe. (@gaearon in #19220)
Fix rendering bailout for lazy components with defaultProps. (@jddxf in #18539)
Fix a false positive warning when dangerouslySetInnerHTML is undefined. (@eps1lon in #18676)
Fix Test Utils with non-standard require implementation. (@just-boris in #18632)
Fix onBeforeInput reporting an incorrect event.type. (@eps1lon in #19561)
Fix event.relatedTarget reported as undefined in Firefox. (@claytercek in #19607)
Fix “unspecified error” in IE11. (@hemakshis in #19664)
Fix rendering into a shadow root. (@Jack-Works in #15894)
Fix movementX/Y polyfill with capture events. (@gaearon in #19672)
Use delegation for onSubmit and onReset events. (@gaearon in #19333)
Improve memory usage. (@trueadm in #18970)

React DOM Server 

Make useCallback behavior consistent with useMemo for the server renderer. (@alexmckenley in #18783)
Fix state leaking when a function component throws. (@pmaccart in #19212)

React Test Renderer 

Improve findByType error message. (@henryqdineen in #17439)

Concurrent Mode (Experimental) 

Revamp the priority batching heuristics. (@acdlite in #18796)
Add the unstable_ prefix before the experimental APIs. (@acdlite in #18825)
Remove unstable_discreteUpdates and unstable_flushDiscreteUpdates. (@trueadm in #18825)
Remove the timeoutMs argument. (@acdlite in #19703)
Disable <div hidden /> prerendering in favor of a different future API. (@acdlite in #18917)
Add unstable_expectedLoadTime to Suspense for CPU-bound trees. (@acdlite in #19936)
Add an experimental unstable_useOpaqueIdentifier Hook. (@lunaruan in #17322)
Add an experimental unstable_startTransition API. (@rickhanlonii in #19696)
Using act in the test renderer no longer flushes Suspense fallbacks. (@acdlite in #18596)
Use global render timeout for CPU Suspense. (@sebmarkbage in #19643)
Clear the existing root content before mounting. (@bvaughn in #18730)
Fix a bug with error boundaries. (@acdlite in #18265)
Fix a bug causing dropped updates in a suspended tree. (@acdlite in #18384 and #18457)
Fix a bug causing dropped render phase updates. (@acdlite in #18537)
Fix a bug in SuspenseList. (@sebmarkbage in #18412)
Fix a bug causing Suspense fallback to show too early. (@acdlite in #18411)
Fix a bug with class components inside SuspenseList. (@sebmarkbage in #18448)
Fix a bug with inputs that may cause updates to be dropped. (@jddxf in #18515 and @acdlite in #18535)
Fix a bug causing Suspense fallback to get stuck.  (@acdlite in #18663)
Don’t cut off the tail of a SuspenseList if hydrating. (@sebmarkbage in #18854)
Fix a bug in useMutableSource that may happen when getSnapshot changes. (@bvaughn in #18297)
Fix a tearing bug in useMutableSource. (@bvaughn in #18912)
Warn if calling setState outside of render but before commit. (@sebmarkbage in #18838)
Is this page useful?Edit this page
