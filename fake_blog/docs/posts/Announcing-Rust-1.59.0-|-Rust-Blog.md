---
id: 153
title: Announcing-Rust-1.59.0-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      The Rust team has published a new version of Rust, 1.59.0. Rust is a programming
language that is empowering everyone to build reliable and efficient software.

Today's release falls on the day in which the world's attention is captured by
the sudden invasion of Ukraine by Putin's forces. Before going into the details
of the new Rust release, we'd like to state that we stand in solidarity with the
people of Ukraine and express our support for all people affected by this
conflict.

If you have a previous version of Rust installed via rustup, you can get 1.59.0
with:
rustup update stable

If you don't have it already, you can get rustup
from the appropriate page on our website, and check out the
detailed release notes for 1.59.0 on GitHub.
What's in 1.59.0 stable
Inline assembly
The Rust language now supports inline assembly. This enables many applications
that need very low-level control over their execution, or access to
specialized machine instructions.
When compiling for x86-64 targets, for instance, you can now write:
use std::arch::asm;

// Multiply x by 6 using shifts and adds
let mut x: u64 = 4;
unsafe {
    asm!(
        "mov {tmp}, {x}",
        "shl {tmp}, 1",
        "shl {x}, 2",
        "add {x}, {tmp}",
        x = inout(reg) x,
        tmp = out(reg) _,
    );
}
assert_eq!(x, 4 * 6);

The format string syntax used to name registers in the asm! and global_asm!
macros is the same used in Rust format strings, so it should feel quite familiar
to Rust programmers.
The assembly language and instructions available with inline assembly vary
according to the target architecture. Today, the stable Rust compiler supports
inline assembly on the following architectures:

x86 and x86-64
ARM
AArch64
RISC-V

You can see more examples of inline assembly in Rust By Example,
and find more detailed documentation in the reference.
Destructuring assignments
You can now use tuple, slice, and struct patterns as the left-hand side of an
assignment.
let (a, b, c, d, e);

(a, b) = (1, 2);
[c, .., d, _] = [1, 2, 3, 4, 5];
Struct { e, .. } = Struct { e: 5, f: 3 };

assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);

This makes assignment more consistent with let bindings, which have long
supported the same thing. Note that destructuring assignments with operators
such as += are not allowed.
Const generics defaults and interleaving
Generic types can now specify default values for their const generics. For
example, you can now write the following:
struct ArrayStorage<T, const N: usize = 2> {
    arr: [T; N],
}

impl<T> ArrayStorage<T> {
    fn new(a: T, b: T) -> ArrayStorage<T> {
        ArrayStorage {
            arr: [a, b],
        }
    }
}

Previously, type parameters were required to come before all const parameters.
That restriction has been relaxed and you can now interleave them.
fn cartesian_product<
    T, const N: usize,
    U, const M: usize,
    V, F
>(a: [T; N], b: [U; M], f: F) -> [[V; N]; M]
where
    F: FnMut(&T, &U) -> V
{
    // ...
}

Future incompatibility warnings
Sometimes bugs in the Rust compiler cause it to accept code that should not
have been accepted. An example of this was borrows of packed struct
fields being allowed in safe code.
While this happens very rarely, it can be quite disruptive when a crate used by
your project has code that will no longer be allowed. In fact, you might not
notice until your project inexplicably stops building!
Cargo now shows you warnings when a dependency will be rejected by a future
version of Rust. After running cargo build or cargo check, you might see:
warning: the following packages contain code that will be rejected by a future version of Rust: old_dep v0.1.0
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`

You can run the cargo report command mentioned in the warning to see a full
report of the code that will be rejected. This gives you time to upgrade your
dependency before it breaks your build.
Creating stripped binaries
It's often useful to strip unnecessary information like debuginfo from binaries
you distribute, making them smaller.
While it has always been possible to do this manually after the binary is
created, cargo and rustc now support stripping when the binary is linked. To
enable this, add the following to your Cargo.toml:
[profile.release]
strip = "debuginfo"

This causes debuginfo to be stripped from release binaries. You can also supply
"symbols" or just true to strip all symbol information where supported.
The standard library typically ships with debug symbols and line-level
debuginfo, so Rust binaries built without debug symbols enabled still include
the debug information from the standard library by default. Using the strip
option allows you to remove this extra information, producing smaller Rust
binaries.
See Cargo's documentation for more details.
Incremental compilation off by default
The 1.59.0 release disables incremental by default (unless explicitly asked for
by via an environment variable: RUSTC_FORCE_INCREMENTAL=1). This mitigates
the effects of a known bug, #94124, which can cause deserialization errors (and panics) during compilation
with incremental compilation turned on.
The specific fix for #94124 has landed and is currently in the 1.60 beta,
which will ship in six weeks. We are not presently aware of other issues that
would encourage a decision to disable incremental in 1.60 stable, and if none
arise it is likely that 1.60 stable will re-enable incremental compilation
again. Incremental compilation remains on by default in the beta and nightly
channels.
As always, we encourage users to test on the nightly and beta channels and
report issues you find: particularly for incremental bugs, this is the best way
to ensure the Rust team can judge whether there is breakage and the number of
users it affects.
Stabilized APIs
The following methods and trait implementations are now stabilized:

std::thread::available_parallelism
Result::copied
Result::cloned
arch::asm!
arch::global_asm!
ops::ControlFlow::is_break
ops::ControlFlow::is_continue
TryFrom<char> for u8
char::TryFromCharError
implementing Clone, Debug, Display, PartialEq, Copy, Eq, Error
iter::zip
NonZeroU8::is_power_of_two
NonZeroU16::is_power_of_two
NonZeroU32::is_power_of_two
NonZeroU64::is_power_of_two
NonZeroU128::is_power_of_two
DoubleEndedIterator for ToLowercase
DoubleEndedIterator for ToUppercase
TryFrom<&mut [T]> for [T; N]
UnwindSafe for Once
RefUnwindSafe for Once
armv8 neon intrinsics for aarch64

The following previously stable functions are now const:

mem::MaybeUninit::as_ptr
mem::MaybeUninit::assume_init
mem::MaybeUninit::assume_init_ref
ffi::CStr::from_bytes_with_nul_unchecked

Other changes
There are other changes in the Rust 1.59.0 release. Check out what changed in
Rust,
Cargo,
and Clippy.
Contributors to 1.59.0
Many people came together to create Rust 1.59.0.
We couldn't have done it without all of you.
Thanks!

    
