---
id: 191
title: Networking-and-Interprocess-Communication-—-Python-3.10.8-documentation
date: 'Oct 25 2022'
tags: ["python","guide"]
metaTags: ["python","guide"]
cover_image: https://velog.velcdn.com/images/daybreak/post/4bc365ac-d62b-4417-a21a-735f6432fb2d/python001.png
description: ''
---


Networking and Interprocess Communication¶
The modules described in this chapter provide mechanisms for
networking and inter-processes communication.
Some modules only work for two processes that are on the same machine, e.g.
signal and mmap.  Other modules support networking protocols
that two or more processes can use to communicate across machines.
The list of modules described in this chapter is:


asyncio — Asynchronous I/O
socket — Low-level networking interface
ssl — TLS/SSL wrapper for socket objects
select — Waiting for I/O completion
selectors — High-level I/O multiplexing
signal — Set handlers for asynchronous events
mmap — Memory-mapped file support



