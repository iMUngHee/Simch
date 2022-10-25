---
id: 273
title: Announcing-Rustup-1.25.1-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The rustup working group is announcing the release of rustup version 1.25.1.
Rustup is the recommended tool to install Rust, a
programming language that is empowering everyone to build reliable and
efficient software.
If you have a previous version of rustup installed, getting rustup 1.25.1 is as
easy as stopping any programs which may be using Rustup (e.g. closing your IDE)
and running:
rustup self update

Rustup will also automatically update itself at the end of a normal toolchain
update:
rustup update

If you don't have it already, you can get rustup from the
appropriate page on our website.
What's new in rustup 1.25.1
This version of rustup fixes a regression introduced in the previous release
(1.25.0), which caused some workflows to fail.
Regression in nested Cargo invocations with different toolchains
When you invoke Rust or Cargo installed by rustup, you're not running them
directly. Instead, you run rustup "proxy" binaries, whose job is to
detect the right toolchain (parsing the +channel CLI argument or using one of
the defaults) and run it.
Running these proxies is not instantaneous though, and for example a cargo build invocation might execute several of them (the initial cargo invocation
plus one rustc for every dependency), slowing down the build.
To improve performance, rustup 1.25.0 changed the proxies code to set the
RUSTC and RUSTDOC environment variables when missing, which
instructed Cargo to skip the proxies and invoke the binaries defined in those
variables directly. This provided a performance gain when building crates with
lots of dependencies.
Unfortunately this change broke some users of rustup, who did something like:


The first Cargo invocation (for example an extension, an alias or an
integration test) uses toolchain foo, setting the RUSTC and RUSTDOC
environment variables pointing to that toolchain.


The first invocation calls Cargo again, but this time using toolchain bar
(for example cargo +bar build). This does not set the RUSTC and
RUSTDOC environment variables pointing to bar, as those variables are
already present.


The second invocation of Cargo then invokes rustc by using the RUSTC
environment variable and skipping the proxy, which results in the foo
toolchain being invoked. Previous versions of rustup invoked the proxy
instead, which would correctly detect and use the bar toolchain.


Rustup 1.25.1 fixes this regression by reverting the change. The rustup working
group is discussing in issue #3035 plans to re-introduce the change in
a future release while avoiding breakage.
Thanks
Thanks again to all the contributors who made rustup 1.25.1 possible!

Daniel Silverstone (kinnison)
Robert Collins (rbtcollins)
Joshua Nelson (jyn514)
Pietro Albini (pietroalbini)


    
