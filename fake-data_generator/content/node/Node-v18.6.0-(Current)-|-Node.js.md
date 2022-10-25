---
id: 197
title: Node-v18.6.0-(Current)-|-Node.js
date: 'Oct 25 2022'
tags: ["node","news"]
metaTags: ["node","news"]
cover_image: https://velog.velcdn.com/images/mayinjanuary/post/e1ff9d4e-541f-418f-b411-4ab9f39aee16/nodejs.png
description: ''
---


        
          Node v18.6.0 (Current)
          by Michaël Zasso, 2022-07-13
        

        Notable ChangesExperimental ESM Loader Hooks APINode.js ESM Loader hooks now support multiple custom loaders, and composition is
achieved via "chaining": foo-loader calls bar-loader calls qux-loader
(a custom loader must now signal a short circuit when intentionally not
calling the next). See the ESM docs for details.
Real-world use-cases are laid out for end-users with working examples in the
article Custom ESM loaders: Who, what, when, where, why, how.
Contributed by Jacob Smith, Geoffrey Booth, and Bradley Farias - https://github.com/nodejs/node/pull/42623
CommitsSemver-minor commits
[0bca7b722e] - (SEMVER-MINOR) dns: export error code constants from dns/promises (Feng Yu) #43176
[da61e2330f] - (SEMVER-MINOR) esm: add chaining to loaders (Jacob Smith) #42623
[8c97f63401] - (SEMVER-MINOR) http: add diagnostics channel for http client (theanarkh) #43580
[b27856d3d4] - (SEMVER-MINOR) http: add perf_hooks detail for http request and client (theanarkh) #43361
[9d918d9923] - (SEMVER-MINOR) module: add isBuiltIn method (hemanth.hm) #43396
[a0e7b9983c] - (SEMVER-MINOR) net: add drop event for net server (theanarkh) #43582
[4bda6e02a3] - (SEMVER-MINOR) test_runner: expose describe and it (Moshe Atlow) #43420
[34e83312a4] - (SEMVER-MINOR) v8: add v8.startupSnapshot utils (Joyee Cheung) #43329

Semver-patch commits
[ef174eac87] - assert: callTracker throw a specific error message when possible (Moshe Atlow) #43640
[07836637af] - bootstrap: move global initialization to js (Alena Khineika) #43625
[e9ee7e44be] - build,test: increase stack size limit on Windows (Tobias Nießen) #43632
[3ca9e653a6] - child_process: improve ipc write performance (rubikscraft) #42931
[cad6d990ec] - child_process: speed up 'advanced' ipc receiving (rubikscraft) #42931
[ce3a22a9e3] - cluster: fix closing dgram sockets in cluster workers throws errors (Ouyang Yadong) #43709
[5d8ee519db] - cluster: fix fd leak (theanarkh) #43650
[fa5c4643e2] - cluster, net: fix listen pipe with readable and writable in cluster (theanarkh) #43634
[4df96b501d] - crypto: don't disable TLS 1.3 without suites (Adam Majer) #43427
[a43928ae78] - crypto: use ByteSource::Builder in To*Copy (Tobias Nießen) #43477
[bb326f7ece] - crypto: handle webcrypto generateKey() usages edge case (Filip Skokan) #43454
[9bd13bbb3a] - crypto: update Wrapping and unwrapping keys webcrypto example (Filip Skokan) #43452
[679f19128e] - crypto: fix webcrypto generateKey() with empty usages (Filip Skokan) #43431
[64a9dd7b83] - crypto: fix webcrypto digest() invalid algorithm (Filip Skokan) #43431
[dedb22e965] - crypto: fix webcrypto RSA generateKey() use of publicExponent (Filip Skokan) #43431
[018f61cb4f] - crypto: fix webcrypto AES-KW keys accepting encrypt/decrypt usages (Filip Skokan) #43431
[3ee0bb8d03] - crypto: fix webcrypto deriveBits for non-byte lengths (Filip Skokan) #43431
[7fc075b23a] - deps: update undici to 5.7.0 (Node.js GitHub Bot) #43790
[d6a9e93426] - deps: patch V8 to 10.2.154.13 (Michaël Zasso) #43727
[428d03cb94] - deps: update corepack to 0.12.0 (Node.js GitHub Bot) #43748
[74914698e5] - deps: upgrade npm to 8.13.2 (npm team) #43622
[0636f86ecc] - deps: upgrade npm to 8.13.1 (npm team) #43552
[2149acda60] - dns: make promise API fully constructed from lib/internal/dns/promises (Feng Yu) #43227
[79ea19e5e2] - errors: extract type detection & use in ERR_INVALID_RETURN_VALUE (Jacob Smith) #43558
[80ced1ae31] - esm: treat 307 and 308 as redirects in HTTPS imports (Kid) #43689
[953fefe77b] - esm: restore next<HookName>'s context as optional arg (Jacob Smith) #43553
[10bcad5c6e] - esm: fix chain advances when loader calls next<HookName> multiple times (Jacob Smith) #43303
[50d64edd49] - esm: refactor responseURL handling (Guy Bedford) #43164
[254efd9e3b] - esm: fix http(s) import via custom loader (Jacob Smith) #43130
[061ed0e76b] - events: improve Event compatibility (Daeyeon Jeong) #43461
[66fb059547] - events: improve EventListener validation (Daeyeon Jeong) #43491
[12a591a676] - fs: refactor realpath with Map and Set (LiviaMedeiros) #43569
[df501316c1] - fs: don't end fs promises on Isolate termination (Santiago Gimeno) #42910
[e6d4837fad] - http: fix failing test (Paolo Insogna) #43641
[491c7619c4] - http: defer reentrant execution of Parser::Execute (Paolo Insogna) #43369
[d71ba322b0] - http: fix http agent keep alive (theanarkh) #43380
[1f4f811de5] - http2: log debug only when in debug mode (Basit) #43626
[c8cbec4cef] - lib: make validateObject less affected by prototype tampering (Antoine du Hamel) #42929
[dc484b6f6f] - lib: implement safe alternatives to Promise static methods (Antoine du Hamel) #43728
[2233567331] - lib: use null-prototype objects for property descriptors (Antoine du Hamel) #43473
[b9198d977f] - lib: refactor to avoid unsafe regex primordials (Antoine du Hamel) #43475
[deaf4bb5cd] - lib: fix TODO in freeze_intrinsics (Antoine du Hamel) #43472
[61e6d7858a] - lib,src: add source map support for global eval (Chengzhong Wu) #43428
[58646eaad6] - loader: make require.resolve throw for unknown builtin modules (木杉) #43336
[e914185c44] - module: cjs-module-lexer WebAssembly fallback (Guy Bedford) #43612
[3ad4d37b3c] - module: also enable subpath imports in REPL (Ray) #43450
[bf4ac4c55f] - net: remove redundant connecting assignment (Ouyang Yadong) #43710
[ad1d0541c5] - net: fix net keepalive and noDelay (theanarkh) #43561
[f8bdc53e4f] - net: prevent /32 ipv4 mask from matching all ips (supriyo-biswas) #43381
[47a252257b] - net: fix net.Server keepalive and noDelay (theanarkh) #43497
[d834d216f2] - perf_hooks: add initiatorType getter (Rafael Gonzaga) #43593
[02009b7069] - perf_hooks: fix miscounted gc performance entry starttime (#43066) (Xuguang Mei) #43066
[e9574f3009] - readline: fix to not access a property on an undefined value (Kohei Ueno) #43543
[fe1f740f61] - src: merge RunInThisContext() with RunInContext() (Daeyeon Jeong) #43225
[0f6d19489a] - src: fix crash on FSReqPromise destructor (Santiago Gimeno) #43533
[4e6a844207] - src: delegate NodeArrayBufferAllocator to v8's allocator (Jeremy Rose) #43594
[5ae30bf17a] - src: remove a stale comment in async_hooks (Daeyeon Jeong) #43317
[0b432b957e] - src: fix compiler warning in src/heap_utils.cc (Darshan Sen) #43579
[d3fc791c3d] - src: improve and update ByteSource description (Tobias Nießen) #43478
[4e0afa4133] - src: remove CopyBuffer (Tobias Nießen) #43463
[0659d5e3b0] - src: change FormatSize to actually accept a size_t (Tobias Nießen) #43464
[66ee1f1e3c] - src: register StreamBase while registering LibuvStreamWrap (Darshan Sen) #43321
[48ee6b9dc9] - src,bootstrap: remove NodeMainInstance::registry_ (Darshan Sen) #43392
[2e181f68a3] - src,stream: change return type to Maybe (Daeyeon Jeong) #43575
[0f07abc80d] - stream: finish pipeline if dst closes before src (Robert Nagy) #43701
[1617a4621e] - stream: pass error on legacy destroy (Giacomo Gregoletto) #43519
[40f51d8e83] - test_runner: protect internals against prototype tampering (Antoine du Hamel) #43578
[ddf7518520] - test_runner: cancel on termination (Moshe Atlow) #43549
[e51d8c6004] - test_runner: wait for stderr and stdout to complete (Moshe Atlow) #43666
[dda64ddfbd] - test_runner: add Subtest to tap protocol output (Moshe Atlow) #43417
[a1f1d3a7b3] - url: update WHATWG URL parser to align with latest spec (Feng Yu) #43190
[5a5c4be5a3] - util: add AggregateError.prototype.errors to inspect output (LiviaMedeiros) #43646
[bdca4d3ccf] - util: remove unnecessary template string (Ruben Bridgewater) #41082
[6b16836448] - util: mark cwd grey while inspecting errors (Ruben Bridgewater) #41082
[baa22a7b7d] - util: avoid inline access to Symbol.iterator (Kohei Ueno) #43683
[a1f581a61e] - util: fix TypeError of symbol in template literals (cola119) #42790
[ba9b2f021f] - wasi: use WasmMemoryObject handle for perf (#43544) (snek) #43544

Documentation commits
[e0769554a5] - doc: remove bullet point referring to Node.js 12 (Luigi Pinca) #43744
[7ffcd85ace] - doc: include last security release date (Rafael Gonzaga) #43774
[4569d6ebcb] - doc: add details for July 2022 security releases (Beth Griggs) #43733
[1bd56339c5] - doc: remove openssl 1.x reference (Rafael Gonzaga) #43734
[bf62ffd848] - doc: remove node-report from support tiers (RafaelGSS) #43737
[ca5af0dbf7] - doc: update changelog-maker to the new flags (RafaelGSS) #43696
[088b9266d0] - doc: remove extra 'in's (Colin Ihrig) #43705
[7679c77347] - doc: add Geoffrey Booth to TSC (Rich Trott) #43706
[d46261ceed] - doc: improve readability of dns.md (0xSanyam) #43694
[ca0fbfd87f] - doc: add note regarding special case of 0 stat.size (Douglas Wilson) #43690
[267f66b5cc] - doc: fix default of duplex.allowHalfOpen (Vincent Weevers) #43665
[46ad2061db] - doc: fix typo in errors.md (Kazuma Ohashi) #43677
[3a8edb363e] - doc: improve description of --input-type (cola119) #43507
[b4b15b71d7] - doc: add daeyeon to triagers (Daeyeon Jeong) #43637
[cb77b3e3f7] - doc: remove appmetrics from tierlist (Tony Gorez) #43608
[0fe825ac07] - doc: remove systemtap from tierlist (Tony Gorez) #43605
[6fc5a13fe0] - doc: add single executable application initiative (Michael Dawson) #43611
[350e6ae04c] - doc: remove windows xperf from tierlist (Tony Gorez) #43607
[a6e98dfd65] - doc: remove lttng from tierlist (Tony Gorez) #43604
[22512427b3] - doc: remove dtrace from tierlist (Tony Gorez) #43606
[a3659e3547] - doc: promote 0x to tier 4 (Tony Gorez) #43609
[6ede1c2162] - doc: include CVSS mention (Rafael Gonzaga) #43602
[23c5de3579] - doc: fix icu-small example (Michael Dawson) #43591
[54a8a0c9c7] - doc: add backport-open-vN.x step to backporting guide (LiviaMedeiros) #43590
[60b949d8ff] - doc: move MylesBorins to TSC Emeritus (Myles Borins) #43524
[08ed28c31e] - doc: add Juan as a security steward (Michael Dawson) #43512
[2e799bcd35] - doc: update link to MDN page about dynamic imports (James Scott-Brown) #43530
[c8aafe2036] - doc: fix Visual Studio 2019 download link (Feng Yu) #43236
[d0c78d21e0] - doc: update link of ICU data slicer (Feng Yu) #43483
[324728094c] - doc: update v8 doc link to v8.dev (Feng Yu) #43482
[b111331c9c] - doc: add ESM version examples to events api doc (Feng Yu) #43226
[038decfbc3] - doc: update default branch name in test/** (Luigi Pinca) #43445
[a23051af84] - doc: add new useful V8 option (JialuZhang-intel) #42575
[7f406fd77b] - doc: remove branch name mention in src/README.md (Feng Yu) #43442
[06fe60a6f9] - doc: update default branch name in Makefile (Feng Yu) #43441
[9d61da0aef] - doc: update main branch name in release guide (Richard Lau) #43437
[739d3a35ed] - doc: update main branch name in onboarding.md (Feng Yu) #43443
[e0fedcfb18] - doc: fixup after rename of primary nodejs branch (Michael Dawson) #43453
[429e0f433b] - doc: update main branch name in doc/contributing/* (Luigi Pinca) #43438
[cbaf1207f4] - doc: add code examples to node test runner (Wassim Chegham) #43359
[462e526237] - doc,test: clarify timingSafeEqual semantics (Tobias Nießen) #43228

Other commits
[7ee0be71f9] - benchmark: fix output regression (Brian White) #43635
[d90a6f9bda] - benchmark: fix fork detection (Paolo Insogna) #43601
[f9c30abcdc] - benchmark: forcefully close processes (Paolo Insogna) #43557
[ebf962c053] - build: enable GitPod prebuilds (Rich Trott) #43698
[482bd53357] - build: clarify missing clang-format tool (Tobias Nießen) #42762
[919c5ee5c2] - build: update main branch name in GH workflow (Feng Yu) #43481
[3b08dfdc5d] - meta: update AUTHORS (Node.js GitHub Bot) #43750
[508cbbcbf9] - meta: update AUTHORS (Node.js GitHub Bot) #43660
[d650c9c6b0] - meta: update AUTHORS (Node.js GitHub Bot) #43573
[b9204c9be8] - meta: update AUTHORS (Node.js GitHub Bot) #43480
[294f0ef4df] - test: mark test-net-connect-reset-until-connected flaky on freebsd (Feng Yu) #43613
[f2f7d7b207] - test: remove unnecessary .toString() calls in HTTP tests (Anna Henningsen) #43731
[38e92fd88f] - test: mark test-gc-http-client-timeout as flaky on arm (Chengzhong Wu) #43754
[b164848c55] - test: fix typo in file name (Antoine du Hamel) #43764
[a0b799f645] - test: add test for profile command of node inspect (Kohei Ueno) #43058
[c4d88b3345] - test: use Object for tests variable in fs trace test (Feng Yu) #43585
[c9f130e1cf] - test: improve code coverage for performance_entry (Kohei Ueno) #43434
[0b4956079a] - test: add test to ensure repl doesn't support --input-type (cola119) #43507
[2adf4e7727] - test: fix flaky test-perf-hooks-histogram (Santiago Gimeno) #43567
[043756d540] - test: fill DOMException names (LiviaMedeiros) #43615
[e718a6e913] - test: fix Buffer.from(ArrayBufferView) call (LiviaMedeiros) #43614
[ac72f4e812] - test: mark test-worker-http2-stream-terminate flaky on all platforms (Finn Yu) #43620
[dabccef69f] - test: mark flaky tests on smartos (Feng Yu) #43596
[705e85e736] - test: improve code coverage for SourceMap class (italo jose) #43285
[7c6f548382] - test: mark test-http-server-request-timeouts-mixed flaky on macOS (F3n67u) #43597
[bd91337988] - test: refactor to top-level await (Meek Simbule) #43500
[9940dc38c1] - test: skip test-v8-serialize-leak on IBM i (Richard Lau) #43511
[17b92f0679] - test: use unique file names in fs trace test (Ben Noordhuis) #43504
[7ca58b8ee7] - test: allow EOVERFLOW errors in fs position tests (Richard Lau) #43510
[eece34cddb] - test: add WPT tests for dom/events (Daiki Nishikawa) #43151
[70d297c271] - test: replace gc(true) with gc({ type: 'minor' }) (Tobias Nießen) #43493
[1022c0d0d4] - test: fix flaky test-https-server-close- tests (Santiago Gimeno) #43216
[a9ab41cb38] - test: refactor to top-level await (Meek Simbule) #43366
[b1a7798821] - test: skip test-net-connect-reset-until-connected on SmartOS (Filip Skokan) #43449
[3b0703fd0d] - test: rename test-eventtarget-whatwg-*.js (Daeyeon Jeong) #43467
[5c0a24d5be] - test: mark test-worker-http2-stream-terminate flaky on Windows (Darshan Sen) #43425
[48ae00c0b1] - test: improve coverage for load hooks (Antoine du Hamel) #43374
[2b55b606f7] - Revert "test: mark test_buffer/test_finalizer flaky" (Matteo Collina) #43418
[3948accbf4] - test: make node-api/test_buffer/test_finalizer not flaky (Matteo Collina) #43418
[c954bcd20b] - tools: remove rpm build scripts (Ben Noordhuis) #43647
[8a06b7b9d0] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43749
[aafdf1239e] - tools: refactor tools/license2rtf to ESM (Feng Yu) #43232
[99ffabf2dd] - tools: update eslint to 8.19.0 (Node.js GitHub Bot) #43662
[c6396c179f] - tools: update lint-md-dependencies (Node.js GitHub Bot) #43572
[8d14d6e215] - tools: fix CJS/ESM toggle on small screens (Antoine du Hamel) #43506
[59d4da699e] - tools: update eslint to 8.18.0 (Node.js GitHub Bot) #43479
[752380a959] - tools: update main branch name (Feng Yu) #43440
[06c367ef8b] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43386

Windows 32-bit Installer: https://nodejs.org/dist/v18.6.0/node-v18.6.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v18.6.0/node-v18.6.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v18.6.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v18.6.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v18.6.0/node-v18.6.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v18.6.0/node-v18.6.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v18.6.0/node-v18.6.0.tar.gz
Other release files: https://nodejs.org/dist/v18.6.0/
Documentation: https://nodejs.org/docs/v18.6.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

692b81d30ee0e03397ec13a74e65012db5a31dc4513f6abb73d290dbf6f85f48  node-v18.6.0-aix-ppc64.tar.gz
b68009204398118dd2806a96a9a4cec35f19c2ba454a325519e0f74ffb9c855e  node-v18.6.0-darwin-arm64.tar.gz
19ae8111bf2e8ba914f722a04fa68bc1cb27eab07aaac8f92a6f78d96e9c3bde  node-v18.6.0-darwin-arm64.tar.xz
9a4ba2455fdb4f1fe8c07d0aa17ae8369dd4843855e4de8b9d6fc8bc50e473a9  node-v18.6.0-darwin-x64.tar.gz
7ab90206566873f30426a6c524b7b253f530acb568bfe6a59b4f929d8ca1c7fb  node-v18.6.0-darwin-x64.tar.xz
d57107b9160b2493fc7664bac868c5b83959c4f9f6fc3d6591ceb3b31febc210  node-v18.6.0-headers.tar.gz
3aa3442d436a4e00bcf24ca5510a2ca56c1bd01c2a60a86770b25280e2f80a03  node-v18.6.0-headers.tar.xz
6ac2d56cf22b525e2e1d701718e6bae5eeb512cc249d7071b6472b7e8df491ac  node-v18.6.0-linux-arm64.tar.gz
2f7d5b0e1bd9d52deecbf257cceafdf3c513bec667491c152d08f36317de5714  node-v18.6.0-linux-arm64.tar.xz
08d2c2f43268612d50bb6f173d57a50a2157ca125afe40ab13708be028e03765  node-v18.6.0-linux-armv7l.tar.gz
f564028b6ba00f7fb2864df8a85fbde53c463d6cebe9a23aa4e65a60bd257673  node-v18.6.0-linux-armv7l.tar.xz
b45f15f8322869e45340ec0be99f00383ad6cc90e9f46df400ee5086abbf0fa5  node-v18.6.0-linux-ppc64le.tar.gz
cba65d1158141a0fed863adee39cdc5872c202ccaad5bd3c877eddcc9f5809ba  node-v18.6.0-linux-ppc64le.tar.xz
327b4850ef2d691f72fbada170126b1f9bbfb2c8e79fb88ed48f381eac165e4e  node-v18.6.0-linux-s390x.tar.gz
f6e17f9a01e1669605b78ffca6b6ce95ee2319e1349fa3af3705db569fcafe8c  node-v18.6.0-linux-s390x.tar.xz
eff59cd54fdcd24dc09965b41dc8d347ab4ce367b6c395fd983cfb4c3a542e03  node-v18.6.0-linux-x64.tar.gz
6a33e0ad02c9a3ce0ab298bba95055d45df05dfe0810e871ab5087d9f7852017  node-v18.6.0-linux-x64.tar.xz
09c5a18ca4cfc84ce8e50f9ee9b81dbc140368172bc843092d30093cc2fb19e7  node-v18.6.0.pkg
11a2f77f69987068fe9d3f5fd8f6b4e79570656f97f6b576716b8250544d47cd  node-v18.6.0.tar.gz
5f8b0c33a12fcaec9643b4367a5daa94314bf26f9b75b5f431c4f14b37bc054c  node-v18.6.0.tar.xz
32319a7805edfd6c08361648cd37347c027dcd2d7a5182669c71a65b1f7124d9  node-v18.6.0-win-x64.7z
0990d36064d4f5df3e35c62c3010a0b293ac7af9e9327207b8a534ffbef56822  node-v18.6.0-win-x64.zip
8502453f0d13020d4c22569c8280fd3bd43de88a3a4c1491e5a98736a3e02b94  node-v18.6.0-win-x86.7z
dd253ea0fa4be72b45b8b721da4825432bcda24430216a0bc88ee9988c9f0b21  node-v18.6.0-win-x86.zip
fe4e0d93369d6ea9325af7ec837b1af1ab07a42def9004e2616a5cd9725bf555  node-v18.6.0-x64.msi
b3a4cc3e09f9e3e41677c3cde883fb03b9cd720d97682dfc07cea4bfcf80c9d5  node-v18.6.0-x86.msi
7c5a0bc43bb93d16c8dd9823780495d775ebf8c64e7266d9d6055c88364c5d22  win-x64/node.exe
79a4477a289e361dc72f266a3cb3e7a7c6b75680f801b162955254ebf327dab5  win-x64/node.lib
ea53077d1d7476ea51df6b6a80c235fcdba41ea05e5019555567e77825f7e295  win-x64/node_pdb.7z
ce9406c0addaad973e2970451516b1fb64935fb906356ef05bc0a827fc861868  win-x64/node_pdb.zip
dead29f2171f572984d038518194f9c8acebac379d1d9d6ec05832df03826e69  win-x86/node.exe
1b1ded85cf23eda464bdfaff3980939ac0cbb720185c27ba9de602152f94d594  win-x86/node.lib
d813657e382fb66718efa28b7de051b23e0febd2d014e4fcf504b6a5f0b474cd  win-x86/node_pdb.7z
8f9c45f6e0c5bd986bcf8bbdd60daa24414c75a8c4c8fe9e00013e365d7a7039  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCAAdFiEEj8yhP+8dDC6RAI4Jdw96mlrhVgAFAmLPMSIACgkQdw96mlrh
VgAFQxAAgefOei89eXOr7N2j/5TSnLCRhELa2/45grQZXv88m0o0Ai+DHKZOkQ0U
Cxr7F4j5zpvTB+nfIkB4ognloXevXX5aaXzIahVi3TZusY9gWIFPs8PwOPom/rO7
c8dU9ZIpLnR5wll3pvF4YnDV+p0UvJozSfntg5k9uFxjEx9vry8wFINWs98Vv3Tn
ri9sRAn+cg9t2snbEG9MFoJPSoVYP3zX18ZTCsPsE3L5ZeAOL325gdNf8s232TK+
sBCPtbCvO9n3JSCQTo47FxePaSg0STyasObC9F/idmStowTA9g+G9WpkX31e6ipv
jHEfJYUuhJ8MElp5fvbIwGOgljMFLk5kqTvgVe1wGaphvf9GaocfFBBvKEo+u//a
qs2qEcoO93ME9lsUUyOSewBgBAmSopiI7CNK8zwDxpbVbTQVNRUrM3LU5c9P4PuQ
/C751ODqqiLJMLt3MP9PTT1xPN7XVbEoYZS0p5GCEsqDIxgllyXSibgSSyfU37DL
w4LK9QEgeXxT+Vm1oBMWVDIVTwO3ojt3Dx0sUnEtgyaNHANLmu3O5jwnhySLjkT8
KStv7meAJ/+pDYasvjq4xvKbDTqxx59OeDhmEbB7ibz8QDXgIU5iFDW/bYhZkT+s
Jq2/hEOj12+ZxPg7hd+x24X1z3jJA4sHH0HyKZb64bWanHwO0Yo=
=wiwo
-----END PGP SIGNATURE-----


      
