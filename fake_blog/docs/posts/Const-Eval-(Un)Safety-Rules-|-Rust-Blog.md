---
id: 203
title: Const-Eval-(Un)Safety-Rules-|-Rust-Blog
date: 'Oct 25 2022'
tags: ["rust","blog"]
metaTags: ["rust","blog"]
cover_image: https://velog.velcdn.com/images/eslerkang/post/8a992631-4128-444f-9d54-9a354dc15984/cuddlyferris.png
description: ''
---


      In a recent Rust issue (#99923), a developer noted that the upcoming
1.64-beta version of Rust had started signalling errors on their crate,
icu4x. The icu4x crate uses unsafe code during const evaluation.
Const evaluation, or just "const-eval",
runs at compile-time but produces values that may end up embedded in the
final object code that executes at runtime.
Rust's const-eval system supports both safe and unsafe Rust, but the rules for
what unsafe code is allowed to do during const-eval are even more strict than
what is allowed for unsafe code at runtime. This post is going to go into detail
about one of those rules.
(Note: If your const code does not use any unsafe blocks or call any const fn
with an unsafe block, then you do not need to worry about this!)

A new diagnostic to watch for
The problem, reduced over the course of the comment thread of #99923, is that certain static initialization expressions (see below) are
defined as having undefined behavior (UB) at compile time (playground):
pub static FOO: () = unsafe {
    let illegal_ptr2int: usize = std::mem::transmute(&());
    let _copy = illegal_ptr2int;
};

(Many thanks to @eddyb for the minimal reproduction!)
The code above was accepted by Rust versions 1.63 and earlier, but in the Rust
1.64-beta, it now causes a compile time error with the following message:
error[E0080]: could not evaluate static initializer
 --> demo.rs:3:17
  |
3 |     let _copy = illegal_ptr2int;
  |                 ^^^^^^^^^^^^^^^ unable to turn pointer into raw bytes
  |
  = help: this code performed an operation that depends on the underlying bytes representing a pointer
  = help: the absolute address of a pointer is not known at compile-time, so such operations are not supported

As the message says, this operation is not supported: the transmute
above is trying to reinterpret the memory address &() as an integer of type
usize. The compiler cannot predict what memory address the () would be
associated with at execution time, so it refuses to allow that reinterpretation.
When you write safe Rust, then the compiler is responsible for preventing
undefined behavior. When you write any unsafe code (be it const or non-const),
you are responsible for preventing UB, and during const-eval, the rules about
what unsafe code has defined behavior are even more strict than the analogous
rules governing Rust's runtime semantics. (In other words, more code is
classified as "UB" than you may have otherwise realized.)
If you hit undefined behavior during const-eval, the Rust compiler will protect
itself from adverse effects such as the undefined
behavior leaking into the type system, but there are few guarantees
other than that. For example, compile-time UB could lead to runtime UB.
Furthermore, if you have UB at const-eval time, there is no guarantee that your
code will be accepted from one compiler version to another.
What is new here
You might be thinking: "it used to be accepted; therefore, there must be some
value for the memory address that the previous version of the compiler was using
here."
But such reasoning would be based on an imprecise view of what the Rust compiler
was doing here.
The const-eval machinery of the Rust compiler  (also known as "the CTFE engine")
is built upon a MIR interpreter which uses an abstract model of a hypothetical machine as the
foundation for evaluating such expressions. This abstract model doesn't have to
represent memory addresses as mere integers; in fact, to support
fine-grained checking for UB, it uses a much richer datatype for
the values that are held in the abstract memory store.
(The aforementioned MIR interpreter is also the basis for Miri, a research
tool that interprets non-const Rust code, with a focus on
explicit detection of undefined behavior. The Miri developers are the primary
contributors to the CTFE engine in the Rust compiler.)
The details of the CTFE engine's value representation do not matter too much for our
discussion here. We merely note that earlier versions of the compiler silently
accepted expressions that seemed to transmute memory addresses into integers,
copied them around, and then transmuted them back into addresses; but that was
not what was acutally happening under the hood. Instead, what was happening was
that the values were passed around blindly (after all, the whole point of
transmute is that it does no transformation on its input value, so it is a no-op
in terms of its operational semantics).
The fact that it was passing a memory address into a context where you would
expect there to always be an integer value would only be caught, if at all, at
some later point.
For example, the const-eval machinery rejects code that attempts to embed the
transmuted pointer into a value that could be used by runtime code, like so (playground):
pub static FOO: usize = unsafe {
    let illegal_ptr2int: usize = std::mem::transmute(&());
    illegal_ptr2int
};

Likewise, it rejects code that attempts to perform arithmetic on that
non-integer value, like so (playground):
pub static FOO: () = unsafe {
    let illegal_ptr2int: usize = std::mem::transmute(&());
    let _incremented = illegal_ptr2int + 1;
};

Both of the latter two variants are rejected in stable Rust, and have been for
as long as Rust has accepted pointer-to-integer conversions in static
initializers (see e.g. Rust 1.52).
More similar than different
In fact, all of the examples provided above are exhibiting undefined
behavior according to the semantics of Rust's const-eval system.
The first example with _copy was accepted in Rust versions 1.46 through 1.63
because of CTFE implementation artifacts. The CTFE engine puts considerable effort into
detecting UB, but does not catch all instances of it. Furthermore, by default,
such detection can be delayed to a point far after where the actual
problematic expression is found.
But with nightly Rust, we can opt into extra checks for UB that the engine provides,
by passing the unstable flag -Z extra-const-ub-checks. If we do that, then for
all of the above examples we get the same result:
error[E0080]: could not evaluate static initializer
 --> demo.rs:2:34
  |
2 |     let illegal_ptr2int: usize = std::mem::transmute(&());
  |                                  ^^^^^^^^^^^^^^^^^^^^^^^^ unable to turn pointer into raw bytes
  |
  = help: this code performed an operation that depends on the underlying bytes representing a pointer
  = help: the absolute address of a pointer is not known at compile-time, so such operations are not supported

The earlier examples had diagnostic output that put the blame in a misleading
place. With the more precise checking -Z extra-const-ub-checks enabled, the
compiler highlights the expression where we can first witness UB: the original
transmute itself! (Which was stated at the outset of this post; here we are just
pointing out that these tools can pinpoint the injection point more precisely.)
Why not have these extra const-ub checks on by default? Well, the checks
introduce performance overhead upon Rust compilation time, and we do not know if
that overhead can be made acceptable. (However, recent debate
among Miri developers indicates that the inherent cost here might not be as bad
as they had originally thought. Perhaps a future version of the compiler will
have these extra checks on by default.)
Change is hard
You might well be wondering at this point: "Wait, when is it okay to transmute
a pointer to a usize during const evaluation?" And the answer is simple:
"Never."
Transmuting a pointer to a usize during const-eval has always been undefined behavior,
ever since const-eval added support for
transmute and union. You can read more about this in the
const_fn_transmute / const_fn_union stabilization report,
specifically the subsection entitled "Pointer-integer-transmutes".
(It is also mentioned in the documentation for transmute.)
Thus, we can see that the classification of the above examples as UB during const evaluation
is not a new thing at all. The only change here was that the CTFE engine had some internal
changes that made it start detecting the UB rather than silently ignoring it.
This means the Rust compiler has a shifting notion of what UB it will
explicitly catch. We anticipated this: RFC 3016, "const UB", explicitly
says:

[...] there is no guarantee that UB is reliably detected during CTFE. This can
change from compiler version to compiler version: CTFE code that causes UB
could build fine with one compiler and fail to build with another. (This is in
accordance with the general policy that unsound code is not subject to
stability guarantees.)

Having said that: So much of Rust's success has been built around the trust that
we have earned with our community. Yes, the project has always reserved the
right to make breaking changes when resolving soundness bugs; but we have also
strived to mitigate such breakage whenever feasible, via things like
future-incompatible lints.
Today, with our current const-eval architecture, it is not
feasible to ensure that changes such as the one that injected issue
#99923 go through a future-incompat warning cycle.
The compiler team plans to keep our eye on issues in this space. If we see
evidence that these kinds of changes do cause breakage to a non-trivial number
of crates, then we will investigate further how we might smooth the transition
path between compiler releases. However, we need to balance any such goal
against the fact that Miri has very a limited set of developers: the researchers
determining how to define the semantics of unsafe languages like Rust. We do not
want to slow their work down!
What you can do for safety's sake
If you observe the could not evaluate static initializer message on your crate
atop Rust 1.64, and it was compiling with previous versions of Rust, we want you
to let us know: file an issue!

We have performed a crater run for the 1.64-beta and that did not find any other
instances of this particular problem.
If you can test compiling your crate atop the 1.64-beta before the stable
release goes out on September 22nd, all the better! One easy way to try the beta
is to use rustup's override shortand for it:
$ rustup update beta
$ cargo +beta build

As Rust's const-eval evolves, we may see another case like this arise again. If
you want to defend against future instances of const-eval UB, we recommend that
you set up a continuous integration service to invoke the nightly rustc with
the unstable -Z extra-const-ub-checks flag on your code.
Want to help?
As you might imagine, a lot of us are pretty interested in questions such as
"what should be undefined behavior?"
See for example Ralf Jung's excellent blog series on why pointers are
complicated (parts I, II, III), which contain some of
the details elided above about the representation of pointer values, and spell out reasons why
you might want to be concerned about pointer-to-usize transmutes even outside
of const-eval.
If you are interested in trying to help us figure out answers to those kinds of
questions, please join us in the unsafe code guidelines zulip.
If you are interested in learning more about Miri, or contributing to it, you
can say Hello in the miri zulip.
Conclusion
To sum it all up: When you write safe Rust, then the compiler is responsible for
preventing undefined behavior. When you write any unsafe code, you are
responsible for preventing undefined behavior. Rust's const-eval system has a
stricter set of rules governing what unsafe code has defined behavior:
specifically, reinterpreting (aka "transmuting") a pointer value as a usize is
undefined behavior during const-eval. If you have undefined behavior at
const-eval time, there is no guarantee that your code will be accepted from one
compiler version to another.
The compiler team is hoping that issue #99923 is an exceptional fluke and
that the 1.64 stable release will not encounter any other surprises related to
the aforementioned change to the const-eval machinery.
But fluke or not, the issue provided excellent motivation to spend some time
exploring facets of Rust's const-eval architecture and the interpreter
that underlies it.
We hope you enjoyed reading this as much as we did writing it.

    
