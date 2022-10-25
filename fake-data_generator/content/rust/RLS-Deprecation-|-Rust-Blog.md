---
id: 131
title: RLS-Deprecation-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The Rust Language Server (RLS) is being deprecated in favor of rust-analyzer.
Current users of RLS should migrate to using rust-analyzer instead.
Builds of RLS will continue to be released until at least the Rust 1.64 release (2022-09-22), after which no new releases will be made.
This timeline may change if any issues arise.
RLS is an implementation of the Language Server Protocol (LSP) which provides enhanced features with any editor that supports the protocol, such as code-checking and refactoring.
RLS was introduced by RFC 1317 and development was very active from 2016 through 2019.
However, the architecture of RLS has several limitations that can make it difficult to provide low-latency and high-quality responses needed for an interactive environment.
Development of rust-analyzer began near the beginning of 2018 to provide an alternate LSP implementation for Rust.
rust-analyzer uses a fundamentally different approach that does not rely on using rustc.
In RFC 2912 rust-analyzer was adopted as the official replacement for RLS.
How you migrate to rust-analyzer will depend on which editor you are using.
If you are using VSCode, you should uninstall the rust-lang.rust extension and install the official rust-lang.rust-analyzer extension.
For other editors, please consult the rust-analyzer manual for instructions on how to install it.
Should you have any issues migrating to rust-analyzer, the Editors and IDEs category on the Rust Users forum is available for help with installation and usage.
We will soon be marking the official rust-lang.rust VSCode extension as deprecated, and will be implementing notifications that will inform users about the transition.
After the end of release builds of RLS, we plan to replace the rls executable in official Rust releases with a small LSP implementation that informs the user that RLS is no longer available.
We would like to thank everyone who has worked on RLS and rust-analyzer.
These options would not exist without the tremendous effort of all the contributors to these projects.

    
