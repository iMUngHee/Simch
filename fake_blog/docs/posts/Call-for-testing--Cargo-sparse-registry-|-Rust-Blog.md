---
id: 189
title: Call-for-testing--Cargo-sparse-registry-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The Cargo nightly sparse-registry feature is ready for testing. The
feature causes Cargo to access the crates.io index over HTTP, rather than git. It can
provide a significant performance improvement, especially if the local copy of
the git index is out-of-date or not yet cloned.
Overview
To try it out, add the -Z sparse-registry flag on a recent nightly build of Cargo.
For example, to update dependencies:
rustup update nightly
cargo +nightly -Z sparse-registry update

The feature can also be enabled by setting the environment variable
CARGO_UNSTABLE_SPARSE_REGISTRY=true. Setting this variable will have no effect on stable
Cargo, making it easy to opt-in for CI jobs.
The minimum Cargo version is cargo 2022-06-17, which is bundled with rustc 2022-06-20.
You can leave feedback on the internals thread.
If you see any issues please report them on the Cargo repo. The output of Cargo
with the environment variable CARGO_LOG=cargo::sources::registry::http_remote=trace set
will be helpful in debugging.
Details
Accessing the index over HTTP allows crates.io to continue growing without hampering
performance. The current git index continues to grow as new crates are published,
and clients must download the entire index. The HTTP index only requires downloading
metadata for crates in your dependency tree.
The performance improvement for clients should be especially noticeable in CI
environments, particularly if no local cache of the index exists.
On the server side, the HTTP protocol is much simpler to cache on a CDN, which improves
scalability and reduces server load. Due to this caching, crate updates may take an
extra minute to appear in the index.
The Cargo team plans to eventually make this the default way to access crates.io
(though the git index will remain for compatibility with older versions of Cargo and
external tools). Cargo.lock files will continue to reference the existing crates.io
index on GitHub to avoid churn.
The -Z sparse-registry flag also enables alternative registries to be accessed over
HTTP. For more details, see the tracking issue.
Thank you
This project has been in the works for over 2.5 years with collaboration from the crates.io,
infra, and Cargo teams.
@kornelski wrote the sparse-index RFC and initial
performance proof of concept. @jonhoo created the initial
implementation in Cargo and gathered performance data. @arlosi
completed the implementation in Cargo and implemented the changes to crates.io to serve the
index. @eh2406 provided numerous reviews and feedback to get
all the changes landed. Many others from the community helped by providing suggestions,
feedback, and testing.
Thank you to everyone involved!

    
