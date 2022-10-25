---
id: 46
title: React-v16.4.0--Pointer-Events-–-React-Blog
date: 'Oct 25 2022'
tags: ["react","blog"]
metaTags: ["react","blog"]
cover_image: https://velog.velcdn.com/images/snkim/post/e93c6ce9-6d8f-4957-8e4f-30ab8330e217/reactJS.png
description: ''
---

The latest minor release adds support for an oft-requested feature: pointer events!
It also includes a bugfix for getDerivedStateFromProps. Check out the full changelog below.
Pointer Events 
The following event types are now available in React DOM:

onPointerDown
onPointerMove
onPointerUp
onPointerCancel
onGotPointerCapture
onLostPointerCapture
onPointerEnter
onPointerLeave
onPointerOver
onPointerOut

Please note that these events will only work in browsers that support the Pointer Events specification. (At the time of this writing, this includes the latest versions of Chrome, Firefox, Edge, and Internet Explorer.) If your application depends on pointer events, we recommend using a third-party pointer events polyfill. We have opted not to include such a polyfill in React DOM, to avoid an increase in bundle size.
Check out this example on CodeSandbox.
Huge thanks to Philipp Spiess for contributing this change!
Bugfix for getDerivedStateFromProps 
getDerivedStateFromProps is now called every time a component is rendered, regardless of the cause of the update. Previously, it was only called if the component was re-rendered by its parent, and would not fire as the result of a local setState. This was an oversight in the initial implementation that has now been corrected. The previous behavior was more similar to componentWillReceiveProps, but the improved behavior ensures compatibility with React’s upcoming asynchronous rendering mode.
This bug fix will not affect most apps, but it may cause issues with a small fraction of components. The rare cases where it does matter fall into one of two categories:
1. Avoid Side Effects in getDerivedStateFromProps 
Like the render method, getDerivedStateFromProps should be a pure function of props and state. Side effects in getDerivedStateFromProps were never supported, but since it now fires more often than it used to, the recent change may expose previously undiscovered bugs.
Side effectful code should be moved to other methods: for example, Flux dispatches typically belong inside the originating event handler, and manual DOM mutations belong inside componentDidMount or componentDidUpdate. You can read more about this in our recent post about preparing for asynchronous rendering.
2. Compare Incoming Props to Previous Props When Computing Controlled Values 
The following code assumes getDerivedStateFromProps only fires on prop changes:
static getDerivedStateFromProps(props, state) {
  if (props.value !== state.controlledValue) {
    return {
      // Since this method fires on both props and state changes, local updates
      // to the controlled value will be ignored, because the props version
      // always overrides it. Oops!
      controlledValue: props.value,
    };
  }
  return null;
}
One possible way to fix this is to compare the incoming value to the previous value by storing the previous props in state:
static getDerivedStateFromProps(props, state) {
  const prevProps = state.prevProps || {};
  // Compare the incoming prop to previous prop
  const controlledValue =
    prevProps.value !== props.value
      ? props.value
      : state.controlledValue;
  return {
    // Store the previous props in state
    prevProps: props,
    controlledValue,
  };
}
However, code that “mirrors” props in state usually contains bugs, whether you use the newer getDerivedStateFromProps or the legacy componentWillReceiveProps. We published a follow-up blog post that explains these problems in more detail, and suggests simpler solutions that don’t involve getDerivedStateFromProps().
Installation 
React v16.4.0 is available on the npm registry.
To install React 16 with Yarn, run:
yarn add react@^16.4.0 react-dom@^16.4.0
To install React 16 with npm, run:
npm install --save react@^16.4.0 react-dom@^16.4.0
We also provide UMD builds of React via a CDN:
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
Refer to the documentation for detailed installation instructions.
Changelog 
React 

Add a new experimental React.unstable_Profiler component for measuring performance. (@bvaughn in #12745)

React DOM 

Add support for the Pointer Events specification. (@philipp-spiess in #12507)
Properly call getDerivedStateFromProps() regardless of the reason for re-rendering. (@acdlite in #12600 and #12802)
Fix a bug that prevented context propagation in some cases. (@gaearon in #12708)
Fix re-rendering of components using forwardRef() on a deeper setState(). (@gaearon in #12690)
Fix some attributes incorrectly getting removed from custom element nodes. (@airamrguez in #12702)
Fix context providers to not bail out on children if there’s a legacy context provider above. (@gaearon in #12586)
Add the ability to specify propTypes on a context provider component. (@nicolevy in #12658)
Fix a false positive warning when using react-lifecycles-compat in <StrictMode>. (@bvaughn in #12644)
Warn when the forwardRef() render function has propTypes or defaultProps. (@bvaughn in #12644)
Improve how forwardRef() and context consumers are displayed in the component stack. (@sophiebits in #12777)
Change internal event names. This can break third-party packages that rely on React internals in unsupported ways. (@philipp-spiess in #12629)

React Test Renderer 

Fix the getDerivedStateFromProps() support to match the new React DOM behavior. (@koba04 in #12676)
Fix a testInstance.parent crash when the parent is a fragment or another special node. (@gaearon in #12813)
forwardRef() components are now discoverable by the test renderer traversal methods. (@gaearon in #12725)
Shallow renderer now ignores setState() updaters that return null or undefined. (@koba04 in #12756)

React ART 

Fix reading context provided from the tree managed by React DOM. (@acdlite in #12779)

React Call Return (Experimental) 

This experiment was deleted because it was affecting the bundle size and the API wasn’t good enough. It’s likely to come back in the future in some other form. (@gaearon in #12820)

React Reconciler (Experimental) 

The new host config shape is flat and doesn’t use nested objects. (@gaearon in #12792)
Is this page useful?Edit this page
