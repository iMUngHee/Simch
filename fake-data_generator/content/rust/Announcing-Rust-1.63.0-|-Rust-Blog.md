---
id: 151
title: Announcing-Rust-1.63.0-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The Rust team is happy to announce a new version of Rust, 1.63.0. Rust is a programming language
empowering everyone to build reliable and efficient software.
If you have a previous version of Rust installed via rustup, you can get 1.63.0 with:
rustup update stable

If you don't have it already, you can get rustup
from the appropriate page on our website, and check out the
detailed release notes for 1.63.0 on GitHub.
If you'd like to help us out by testing future releases, you might consider updating locally to use
the beta channel (rustup default beta) or the nightly channel (rustup default nightly).
Please report any bugs you might come across!
What's in 1.63.0 stable
Scoped threads
Rust code could launch new threads with std::thread::spawn since 1.0, but this
function bounds its closure with 'static. Roughly, this means that threads
currently must have ownership of any arguments passed into their closure; you
can't pass borrowed data into a thread. In cases where the threads are expected
to exit by the end of the function (by being join()'d), this isn't strictly
necessary and can require workarounds like placing the data in an Arc.
Now, with 1.63.0, the standard library is adding scoped threads, which allow
spawning a thread borrowing from the local stack frame. The
std::thread::scope API provides the necessary guarantee that any spawned threads
will have exited prior to itself returning, which allows for safely borrowing
data. Here's an example:
let mut a = vec![1, 2, 3];
let mut x = 0;

std::thread::scope(|s| {
    s.spawn(|| {
        println!("hello from the first scoped thread");
        // We can borrow `a` here.
        dbg!(&a);
    });
    s.spawn(|| {
        println!("hello from the second scoped thread");
        // We can even mutably borrow `x` here,
        // because no other threads are using it.
        x += a[0] + a[2];
    });
    println!("hello from the main thread");
});

// After the scope, we can modify and access our variables again:
a.push(4);
assert_eq!(x, a.len());

Rust ownership for raw file descriptors/handles (I/O Safety)
Previously, Rust code working with platform APIs taking raw file descriptors (on
unix-style platforms) or handles (on Windows) would typically work directly with
a platform-specific representation of the descriptor (for example, a c_int, or the alias RawFd).
For Rust bindings to such native APIs, the type system then failed to encode
whether the API would take ownership of the file descriptor (e.g., close) or
merely borrow it (e.g., dup).
Now, Rust provides wrapper types such as BorrowedFd and OwnedFd, which are marked as
#[repr(transparent)], meaning that extern "C" bindings can directly take
these types to encode the ownership semantics. See the stabilized APIs section
for the full list of wrapper types stabilized in 1.63, currently, they are
available on cfg(unix) platforms, Windows, and WASI.
We recommend that new APIs use these types instead of the previous type aliases
(like RawFd).
const Mutex, RwLock, Condvar initialization
The Condvar::new, Mutex::new, and RwLock::new functions are now
callable in const contexts, which allows avoiding the use of crates like
lazy_static for creating global statics with Mutex, RwLock, or Condvar
values. This builds on the work in 1.62 to enable thinner and faster mutexes
on Linux.
Turbofish for generics in functions with impl Trait
For a function signature like fn foo<T>(value: T, f: impl Copy), it was an
error to specify the concrete type of T via turbofish: foo::<u32>(3, 3)
would fail with:
error[E0632]: cannot provide explicit generic arguments when `impl Trait` is used in argument position
 --> src/lib.rs:4:11
  |
4 |     foo::<u32>(3, 3);
  |           ^^^ explicit generic argument not allowed
  |
  = note: see issue #83701 <https://github.com/rust-lang/rust/issues/83701> for more information

In 1.63, this restriction is relaxed, and the explicit type of the generic can be specified.
However, the impl Trait parameter, despite desugaring to a generic, remains
opaque and cannot be specified via turbofish.
Non-lexical lifetimes migration complete
As detailed in this blog post, we've fully removed the previous lexical borrow checker
from rustc across all editions, fully enabling the non-lexical, new, version of the borrow
checker. Since the borrow checker doesn't affect the output of rustc, this won't change
the behavior of any programs, but it completes a long-running migration (started in the
initial stabilization of NLL for the 2018 edition) to deliver the full benefits of the new
borrow checker across all editions of Rust. For most users, this change will bring
slightly better diagnostics for some borrow checking errors, but will not otherwise impact
which code they can write.
You can read more about non-lexical lifetimes in this section of the 2018 edition announcement.
Stabilized APIs
The following methods and trait implementations are now stabilized:

array::from_fn
Box::into_pin
BinaryHeap::try_reserve
BinaryHeap::try_reserve_exact
OsString::try_reserve
OsString::try_reserve_exact
PathBuf::try_reserve
PathBuf::try_reserve_exact
Path::try_exists
Ref::filter_map
RefMut::filter_map
NonNull::<[T]>::len
ToOwned::clone_into
Ipv6Addr::to_ipv4_mapped
unix::io::AsFd
unix::io::BorrowedFd<'fd>
unix::io::OwnedFd
windows::io::AsHandle
windows::io::BorrowedHandle<'handle>
windows::io::OwnedHandle
windows::io::HandleOrInvalid
windows::io::HandleOrNull
windows::io::InvalidHandleError
windows::io::NullHandleError
windows::io::AsSocket
windows::io::BorrowedSocket<'handle>
windows::io::OwnedSocket
thread::scope
thread::Scope
thread::ScopedJoinHandle

These APIs are now usable in const contexts:

array::from_ref
slice::from_ref
intrinsics::copy
intrinsics::copy_nonoverlapping
<*const T>::copy_to
<*const T>::copy_to_nonoverlapping
<*mut T>::copy_to
<*mut T>::copy_to_nonoverlapping
<*mut T>::copy_from
<*mut T>::copy_from_nonoverlapping
str::from_utf8
Utf8Error::error_len
Utf8Error::valid_up_to
Condvar::new
Mutex::new
RwLock::new

Other changes
There are other changes in the Rust 1.63.0 release. Check out what changed in
Rust,
Cargo,
and Clippy.
Contributors to 1.63.0
Many people came together to create Rust 1.63.0.
We couldn't have done it without all of you.
Thanks!

    
