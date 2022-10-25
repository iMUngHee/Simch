---
id: 198
title: Announcing-Rust-1.62.1-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The Rust team has published a new point release of Rust, 1.62.1. Rust is a
programming language that is empowering everyone to build reliable and
efficient software.
If you have a previous version of Rust installed via rustup, you can get 1.62.1 with:
rustup update stable

If you don't have it already, you can get rustup
from the appropriate page on our website, and check out the
detailed release notes for 1.62.1 on GitHub.
What's in 1.62.1 stable
Rust 1.62.1 addresses a few recent regressions in the compiler and standard
library, and also mitigates a CPU vulnerability on Intel SGX.

The compiler fixed unsound function coercions involving impl Trait return types.
The compiler fixed an incremental compilation bug with async fn lifetimes.
Windows added a fallback for overlapped I/O in synchronous reads and writes.
The x86_64-fortanix-unknown-sgx target added a mitigation for the
MMIO stale data vulnerability, advisory INTEL-SA-00615.

Contributors to 1.62.1
Many people came together to create Rust 1.62.1. We couldn't have done it
without all of you. Thanks!

    
