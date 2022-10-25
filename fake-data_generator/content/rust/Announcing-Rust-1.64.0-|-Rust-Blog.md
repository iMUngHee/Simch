---
id: 145
title: Announcing-Rust-1.64.0-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The Rust team is happy to announce a new version of Rust, 1.64.0. Rust is a
programming language empowering everyone to build reliable and efficient
software.
If you have a previous version of Rust installed via rustup, you can get 1.64.0
with:
rustup update stable

If you don't have it already, you can get
rustup from the appropriate page on
our website, and check out the detailed release notes for
1.64.0
on GitHub.
If you'd like to help us out by testing future releases, you might consider
updating locally to use the beta channel (rustup default beta) or the nightly
channel (rustup default nightly). Please
report any bugs you
might come across!
What's in 1.64.0 stable
Enhancing .await with IntoFuture
Rust 1.64 stabilizes the
IntoFuture
trait. IntoFuture is a trait similar to
IntoIterator,
but rather than supporting for ... in ... loops, IntoFuture changes how
.await works. With IntoFuture, the .await keyword can await more than
just futures; it can await anything which can be converted into a Future via
IntoFuture - which can help make your APIs more user-friendly!
Take for example a builder which constructs requests to some storage provider
over the network:
pub struct Error { ... }
pub struct StorageResponse { ... }:
pub struct StorageRequest(bool);

impl StorageRequest {
    /// Create a new instance of `StorageRequest`.
    pub fn new() -> Self { ... }
    /// Decide whether debug mode should be enabled.
    pub fn set_debug(self, b: bool) -> Self { ... }
    /// Send the request and receive a response.
    pub async fn send(self) -> Result<StorageResponse, Error> { ... }
}

Typical usage would likely look something like this:
let response = StorageRequest::new()  // 1. create a new instance
    .set_debug(true)                  // 2. set some option
    .send()                           // 3. construct the future
    .await?;                          // 4. run the future + propagate errors

This is not bad, but we can do better here. Using IntoFuture we can combine
"construct the future" (line 3) and "run the future" (line 4) into a single
step:
let response = StorageRequest::new()  // 1. create a new instance
    .set_debug(true)                  // 2. set some option
    .await?;                          // 3. construct + run the future + propagate errors

We can do this by implementing IntoFuture for StorageRequest. IntoFuture
requires us to have a named future we can return, which we can do by creating a
"boxed future" and defining a type alias for it:
// First we must import some new types into the scope.
use std::pin::Pin;
use std::future::{Future, IntoFuture};

pub struct Error { ... }
pub struct StorageResponse { ... }
pub struct StorageRequest(bool);

impl StorageRequest {
    /// Create a new instance of `StorageRequest`.
    pub fn new() -> Self { ... }
    /// Decide whether debug mode should be enabled.
    pub fn set_debug(self, b: bool) -> Self { ... }
    /// Send the request and receive a response.
    pub async fn send(self) -> Result<StorageResponse, Error> { ... }
}

// The new implementations:
// 1. create a new named future type
// 2. implement `IntoFuture` for `StorageRequest`
pub type StorageRequestFuture = Pin<Box<dyn Future<Output = Result<StorageResponse, Error>> + Send + 'static>>
impl IntoFuture for StorageRequest {
    type IntoFuture = StorageRequestFuture;
    type Output = <StorageRequestFuture as Future>::Output;
    fn into_future(self) -> Self::IntoFuture {
        Box::pin(self.send())
    }
}

This takes a bit more code to implement, but provides a simpler API for users.
In the future, the Rust Async WG hopes to simplify the creating new named
futures by supporting impl Trait in type aliases (Type Alias Impl Trait or
TAIT).
This should make implementing IntoFuture easier by simplifying the type
alias' signature, and make it more performant by removing the Box from the
type alias.
C-compatible FFI types in core and alloc
When calling or being called by C ABIs, Rust code can use type aliases like
c_uint or c_ulong to match the corresponding types from C on any target,
without requiring target-specific code or conditionals.
Previously, these type aliases were only available in std, so code written
for embedded targets and other scenarios that could only use core or alloc
could not use these types.
Rust 1.64 now provides all of the c_* type aliases in
core::ffi, as well as
core::ffi::CStr for
working with C strings. Rust 1.64 also provides
alloc::ffi::CString
for working with owned C strings using only the alloc crate, rather than the
full std library.
rust-analyzer is now available via rustup
rust-analyzer is now included as part of
the collection of tools included with Rust. This makes it easier to download
and access rust-analyzer, and makes it available on more platforms. It is
available as a rustup
component which
can be installed with:
rustup component add rust-analyzer

At this time, to run the rustup-installed version, you need to invoke it this
way:
rustup run stable rust-analyzer

The next release of rustup will provide a built-in proxy so that running the
executable rust-analyzer will launch the appropriate version.
Most users should continue to use the releases provided by the rust-analyzer
team (available on the rust-analyzer releases
page), which are
published more frequently. Users of the official VSCode
extension
are not affected since it automatically downloads and updates releases in the
background.
Cargo improvements: workspace inheritance and multi-target builds
When working with collections of related libraries or binary crates in one
Cargo workspace, you can now avoid duplication of common field values between
crates, such as common version numbers, repository URLs, or rust-version.
This also helps keep these values in sync between crates when updating them.
For more details, see
workspace.package,
workspace.dependencies,
and "inheriting a dependency from a
workspace".
When building for multiple targets, you can now pass multiple --target
options to cargo build, to build all of those targets at once. You can also
set
build.target
to an array of multiple targets in .cargo/config.toml to build for multiple
targets by default.
Stabilized APIs
The following methods and trait implementations are now stabilized:

future::IntoFuture
num::NonZero*::checked_mul
num::NonZero*::checked_pow
num::NonZero*::saturating_mul
num::NonZero*::saturating_pow
num::NonZeroI*::abs
num::NonZeroI*::checked_abs
num::NonZeroI*::overflowing_abs
num::NonZeroI*::saturating_abs
num::NonZeroI*::unsigned_abs
num::NonZeroI*::wrapping_abs
num::NonZeroU*::checked_add
num::NonZeroU*::checked_next_power_of_two
num::NonZeroU*::saturating_add
os::unix::process::CommandExt::process_group
os::windows::fs::FileTypeExt::is_symlink_dir
os::windows::fs::FileTypeExt::is_symlink_file

These types were previously stable in std::ffi, but are now also available in
core and alloc:

core::ffi::CStr
core::ffi::FromBytesWithNulError
alloc::ffi::CString
alloc::ffi::FromVecWithNulError
alloc::ffi::IntoStringError
alloc::ffi::NulError

These types were previously stable in std::os::raw, but are now also
available in core::ffi and std::ffi:

ffi::c_char
ffi::c_double
ffi::c_float
ffi::c_int
ffi::c_long
ffi::c_longlong
ffi::c_schar
ffi::c_short
ffi::c_uchar
ffi::c_uint
ffi::c_ulong
ffi::c_ulonglong
ffi::c_ushort

We've stabilized some helpers for use with Poll, the low-level implementation
underneath futures:

future::poll_fn
task::ready!

In the future, we hope to provide simpler APIs that require less use of
low-level details like Poll and Pin, but in the meantime, these helpers
make it easier to write such code.
These APIs are now usable in const contexts:

slice::from_raw_parts

Compatibility notes


As previously
announced,
linux targets now require at least Linux kernel 3.2 (except for targets which
already required a newer kernel), and linux-gnu targets now require glibc
2.17 (except for targets which already required a newer glibc).


Rust 1.64.0 changes the memory layout of Ipv4Addr, Ipv6Addr,
SocketAddrV4 and SocketAddrV6 to be more compact and memory efficient.
This internal representation was never exposed, but some crates relied on
it anyway by using std::mem::transmute, resulting in invalid memory
accesses. Such internal implementation details of the standard library are
never considered a stable interface. To limit the damage, we worked with
the authors of all of the still-maintained crates doing so to release fixed
versions, which have been out for more than a year. The vast majority of
impacted users should be able to mitigate with a cargo update.


As part of the RLS
deprecation,
this is also the last release containing a copy of RLS. Starting from Rust
1.65.0, RLS will be replaced by a small LSP server showing the deprecation
warning.


Other changes
There are other changes in the Rust 1.64 release, including:


Windows builds of the Rust compiler now use profile-guided optimization,
providing performance improvements of 10-20% for compiling Rust code on
Windows.


If you define a struct containing fields that are never used, rustc will warn
about the unused fields. Now, in Rust 1.64, you can enable the
unused_tuple_struct_fields lint to get the same warnings about unused
fields in a tuple struct. In future versions, we plan to make this lint
warn by default.  Fields of type unit (()) do not produce this warning,
to make it easier to migrate existing code without having to change tuple
indices.


Check out everything that changed in
Rust,
Cargo,
and Clippy.
Contributors to 1.64.0
Many people came together to create Rust 1.64.0.
We couldn't have done it without all of you.
Thanks!

    
