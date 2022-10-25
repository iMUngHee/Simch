---
id: 60
title: Data-Compression-and-Archiving-—-Python-3.10.8-documentation
date: 'Oct 25 2022'
tags: ["python","guide"]
metaTags: ["python","guide"]
cover_image: https://velog.velcdn.com/images/daybreak/post/4bc365ac-d62b-4417-a21a-735f6432fb2d/python001.png
description: ''
---


Data Compression and Archiving¶
The modules described in this chapter support data compression with the zlib,
gzip, bzip2 and lzma algorithms, and the creation of ZIP- and tar-format
archives.  See also Archiving operations provided by the shutil
module.


zlib — Compression compatible with gzip
gzip — Support for gzip files
Examples of usage
Command Line Interface
Command line options




bz2 — Support for bzip2 compression
(De)compression of files
Incremental (de)compression
One-shot (de)compression
Examples of usage


lzma — Compression using the LZMA algorithm
Reading and writing compressed files
Compressing and decompressing data in memory
Miscellaneous
Specifying custom filter chains
Examples


zipfile — Work with ZIP archives
ZipFile Objects
Path Objects
PyZipFile Objects
ZipInfo Objects
Command-Line Interface
Command-line options


Decompression pitfalls
From file itself
File System limitations
Resources limitations
Interruption
Default behaviors of extraction




tarfile — Read and write tar archive files
TarFile Objects
TarInfo Objects
Command-Line Interface
Command-line options


Examples
Supported tar formats
Unicode issues





