---
id: 213
title: Node-v18.8.0-(Current)-|-Node.js
date: 'Oct 25 2022'
tags: ["node","news"]
metaTags: ["node","news"]
cover_image: https://velog.velcdn.com/images/mayinjanuary/post/e1ff9d4e-541f-418f-b411-4ab9f39aee16/nodejs.png
description: ''
---


        
          Node v18.8.0 (Current)
          by Ruy Adorno, 2022-08-24
        

        Notable changesbootstrap: implement run-time user-land snapshots via --build-snapshot and --snapshot-blobThis patch introduces --build-snapshot and --snapshot-blob options for creating and using user land snapshots.
To generate a snapshot using snapshot.js as an entry point and write the snapshot blob to snapshot.blob:
echo "globalThis.foo = 'I am from the snapshot'" > snapshot.js
node --snapshot-blob snapshot.blob --build-snapshot snapshot.js

To restore application state from snapshot.blob, with index.js as the entry point script for the deserialized application:
echo "console.log(globalThis.foo)" > index.js
node --snapshot-blob snapshot.blob index.js
# => I am from the snapshot

Users can also use the v8.startupSnapshot API to specify an entry point at snapshot building time, thus avoiding the need of an additional entry script at deserialization time:
echo "require('v8').startupSnapshot.setDeserializeMainFunction(() => console.log('I am from the snapshot'))" > snapshot.js
node --snapshot-blob snapshot.blob --build-snapshot snapshot.js
node --snapshot-blob snapshot.blob
# => I am from the snapshot

Contributed by Joyee Cheung in #38905
Other notable changes
crypto:
(SEMVER-MINOR) allow zero-length IKM in HKDF and in webcrypto PBKDF2 (Filip Skokan) #44201
(SEMVER-MINOR) allow zero-length secret KeyObject (Filip Skokan) #44201


deps:
upgrade npm to 8.18.0 (npm team) #44263 - Adds a new npm query command


doc:
add Erick Wendel to collaborators (Erick Wendel) #44088
add theanarkh to collaborators (theanarkh) #44131
add MoLow to collaborators (Moshe Atlow) #44214
add cola119 to collaborators (cola119) #44248
deprecate --trace-atomics-wait (Keyhan Vakil) #44093


http:
(SEMVER-MINOR) make idle http parser count configurable (theanarkh) #43974


net:
(SEMVER-MINOR) add local family (theanarkh) #43975


src:
(SEMVER-MINOR) print source map error source on demand (Chengzhong Wu) #43875


tls:
(SEMVER-MINOR) pass a valid socket on tlsClientError (Daeyeon Jeong) #44021



Commits
[0e20072e32] - assert: add getCalls and reset to callTracker (Moshe Atlow) #44191
[126fbbab74] - assert: add assert.Snapshot (Moshe Atlow) #44095
[87d7845b4f] - bootstrap: fixup Error.stackTraceLimit for user-land snapshot (Joyee Cheung) #44203
[597a5171ee] - (SEMVER-MINOR) bootstrap: clean up warning setup during serialization (Joyee Cheung) #38905
[3561514ff5] - (SEMVER-MINOR) bootstrap: implement --snapshot-blob and --build-snapshot (Joyee Cheung) #38905
[123b2d6795] - bootstrap: turn on FunctionCodeHandling::kKeep in the snapshot builder (Joyee Cheung) #44104
[e7d101fbd4] - bootstrap: support more builtins in the embedded code cache (Joyee Cheung) #44018
[2ae2828040] - build: enable pointer authentication for branch protection on arm64 (Jeremiah Gowdy) #43200
[fecec4d3ba] - build: add workflow to label flaky-test platform (Rafael Gonzaga) #44042
[c975c4f674] - build: optimized and fixed building configuration to Android (BuShe) #44016
[ec1b31e6ad] - build: allow test-internet on forks if not scheduled (Rich Trott) #44073
[ea48c5673b] - build: skip test-internet run on forks (Rich Trott) #44054
[1c0d66e927] - (SEMVER-MINOR) crypto: allow zero-length IKM in HKDF and in webcrypto PBKDF2 (Filip Skokan) #44201
[07d90c8a71] - (SEMVER-MINOR) crypto: allow zero-length secret KeyObject (Filip Skokan) #44201
[ac2b10e0c7] - crypto: fix webcrypto deriveBits validations (Filip Skokan) #44173
[4c902be5a5] - crypto: fix webcrypto EC key namedCurve validation errors (Filip Skokan) #44172
[81e1ec4f6f] - crypto: fix webcrypto generateKey() AES key length validation error (Filip Skokan) #44170
[ad8ef3a56c] - crypto: fix webcrypto operation errors to be OperationError (Filip Skokan) #44171
[c270b9a0aa] - deps: update corepack to 0.13.0 (Node.js GitHub Bot) #44318
[bce8041d67] - deps: upgrade npm to 8.18.0 (npm team) #44263
[a26997263b] - deps: update corepack to 0.12.3 (Node.js GitHub Bot) #44229
[b1590bbca2] - deps: upgrade npm to 8.17.0 (npm team) #44205
[818271c1c3] - deps: update undici to 5.8.2 (Node.js GitHub Bot) #44187
[d09bc5402d] - deps: update undici to 5.8.1 (Node.js GitHub Bot) #44158
[a92d90b482] - deps: update corepack to 0.12.2 (Node.js GitHub Bot) #44159
[52a516a281] - deps: V8: cherry-pick 9861ce1deae2 (Milad Fa) #44115
[763b956f07] - deps: remove unnecessary file (Brian White) #44133
[194587e767] - deps: upgrade npm to 8.16.0 (npm team) #44119
[116dcccc79] - deps: upgrade base64 to dc6a41ce36e (Brian White) #44032
[b7aaf3d4ca] - deps: upgrade npm to 8.15.1 (npm team) #44013
[a0c57837c4] - deps: cherry-pick 00704f5a from V8 upstream (Keyhan Vakil) #43921
[19557ad6a4] - dgram: add dgram send queue info (theanarkh) #44149
[a93371205b] - doc: fix optionality of callback arg of checkPrime (Tobias Nießen) #44311
[d3f3bf602d] - doc: fix typo (Hana) #44262
[7a567875b0] - doc: add TypeScript execution requirements (Michael Dawson) #44030
[e8916fa758] - doc: add cola119 to collaborators (cola119) #44248
[8c1fe86026] - doc: fix added version for readable.closed/destroyed (Matthew Peveler) #44033
[f39a0514d3] - doc: improved building doc for Android (BuShe) #44166
[4d26cb9bb2] - doc: add MoLow to collaborators (Moshe Atlow) #44214
[6bff14b6f1] - doc: update tags in adding-new-napi-api.md (Chengzhong Wu) #44190
[721639a1d4] - doc: fix typo in diagnostics_channel (Evan Lucas) #44199
[0fffc24caa] - doc: add Retry CI in collaborator guide (Livia Medeiros) #44130
[fb11643e31] - doc: add performance note to --enable-source-maps docs (Saurabh Daware) #43817
[cb7a9e78fd] - doc: remove unused code in call tracker example (Colin Ihrig) #44127
[8c26daff7c] - doc: add theanarkh to collaborators (theanarkh) #44131
[46f8fb8e53] - doc: clarify tls.tlsSocket.getCipher().version (Adam Majer) #44086
[02236032f0] - doc: update repository list in onboarding doc (Rich Trott) #44089
[58f2739e32] - doc: add Erick Wendel to collaborators (Erick Wendel) #44088
[fe83d514b2] - doc: update collaborator email (Ruy Adorno) #44044
[76011dd7f7] - doc: copyedit test.md (Antoine du Hamel) #44061
[1d6029aa3d] - doc: add kvakil to triagers (Keyhan Vakil) #43996
[7f7a0eb2f5] - doc: clarify part of onboarding guide regarding adding to teams (Darshan Sen) #44024
[2ae5d853a7] - doc: fix code examples in crypto.md (Antoine du Hamel) #44053
[1b9537b6a5] - doc: claim ABI version for Electron 21 (Keeley Hammond) #44034
[d23dfa4dcb] - doc: remove old reference from crypto/README.md (Tobias Nießen) #44012
[222ecd6e14] - doc: add missing env vars to man page (cola119) #43492
[374b77619b] - doc: list supported MODP groups explicitly (Tobias Nießen) #43986
[72a9ecf94f] - doc: fix typo in packages.md (Dominic Saadi) #44005
[1b328305f0] - doc: fix typos in test.md (Antoine du Hamel) #43997
[7af55dbc40] - doc: add missing test runner option (Moshe Atlow) #43989
[e8441a2864] - doc,report: document special filenames (Chengzhong Wu) #44257
[da7bc5acdf] - doc,worker: deprecate --trace-atomics-wait (Keyhan Vakil) #44093
[37a9d7a754] - errors: refactor to use optional chaining (SindreXie) #44184
[a6dccc969f] - esm: do not bind loader hook functions (Antoine du Hamel) #44122
[5e9c197d85] - esm: fix loader hooks accepting too many arguments (Jacob Smith) #44109
[e072c3aa70] - esm: move package config helpers (Geoffrey Booth) #43967
[d57178cdfc] - events: use bitset to save memory (Basit Chonka) #43700
[4ec3f671af] - fs: add encoding parameter to benchmarks (Yagiz Nizipli) #44278
[851264ca90] - http: add max for http keepalive (theanarkh) #44217
[340ca4d8fe] - http: fix error message when specifying headerTimeout for createServer (Nick Sia) #44163
[c340344641] - http: trace http request / response (theanarkh) #44102
[a2cd8b316c] - (SEMVER-MINOR) http: make idle http parser count configurable (theanarkh) #43974
[5dc39a10bd] - http: reuse socket only when it is drained (ywave620) #43902
[8c2d19b2d6] - http: do not leak error listeners (Paolo Insogna) #43587
[1a44fbc19e] - lib: add diagnostics channel and perf hooks detail (Danielle Adams) #43984
[8cfc8b0e7b] - lib: refactor to avoid prototype pollution (Antoine du Hamel) #43474
[04007f2f51] - lib: fix diagnostics channel (theanarkh) #44154
[c02bbdd921] - lib: pass env variables to child process on z/OS (alexcfyung) #42255
[617ea4af1c] - lib: add missing env vars to --help (cola119) #43492
[94912bb09c] - lib: add Promise methods to avoid-prototype-pollution lint rule (Antoine du Hamel) #43849
[8977a87504] - meta: update AUTHORS (Node.js GitHub Bot) #44321
[f7be92fe86] - meta: update web streams in label-pr-config (Daeyeon Jeong) #44235
[2c72ded880] - meta: update AUTHORS (Node.js GitHub Bot) #44231
[c59dc7a4c1] - meta: update AUTHORS (Node.js GitHub Bot) #44161
[e0efd9af50] - meta: add codeowner for src/node_snapshot* (Chengzhong Wu) #44113
[a996f53c78] - meta: update AUTHORS (Node.js GitHub Bot) #44065
[697dbfb174] - meta: shorten PowerShell snippet for bug-report template (NicoNekoru) #44011
[05802c2877] - module: protect against prototype mutation (Antoine du Hamel) #44007
[1b3fcf765f] - (SEMVER-MINOR) net: create diagnostics channels lazily (Joyee Cheung) #38905
[aa7c053926] - net: remove unused callback (theanarkh) #44204
[b6b632c09c] - (SEMVER-MINOR) net: add local family (theanarkh) #43975
[c3d87564d4] - net, dns: socket should handle its output as input (Adam Majer) #44083
[3ba75b341b] - (SEMVER-MINOR) net,tls: pass a valid socket on tlsClientError (Daeyeon Jeong) #44021
[0e38fba552] - perf_hooks: add resourcetiming buffer limit (Chengzhong Wu) #44220
[b9fd240f63] - perf_hooks: fix gc elapsed time (theanarkh) #44058
[8cf64998e2] - report: print javascript stack on fatal error (Chengzhong Wu) #44242
[c842ab36b6] - report: skip report if uncaught exception is handled (Chengzhong Wu) #44208
[ab73cc8706] - src: disambiguate terms used to refer to builtins and addons (Joyee Cheung) #44135
[e9d19ac64c] - src: use imported namespaces in node_contextify.cc (Juan José) #44299
[3dadc95cd2] - src: refactor to avoid using a moved object (Tobias Nießen) #44269
[3765c6335b] - src: extract common context embedder tag checks (Chengzhong Wu) #44258
[d2dce59729] - src: avoid copying BaseObjectPtrs in loop (Tobias Nießen) #44270
[9614907104] - src: remove usage on ScriptCompiler::CompileFunctionInContext (Chengzhong Wu) #44198
[4e1ffd932e] - src: fix --heapsnapshot-near-heap-limit error hint (Chengzhong Wu) #44216
[960a20928f] - src: prevent copying ArrayBufferViewContents (Keyhan Vakil) #44091
[4755ad5495] - src: remove usages of GetBackingStore in crypto (Keyhan Vakil) #44079
[a2022e5aff] - src: remove unowned usages of GetBackingStore (Keyhan Vakil) #44080
[8e1b7e2b8f] - src: remove usages of GetBackingStore in node-api (Keyhan Vakil) #44075
[cddf3eda28] - src: remove usages of GetBackingStore in modules (Keyhan Vakil) #44076
[a54e4d4170] - src: remove usages of GetBackingStore in WASI (Keyhan Vakil) #44077
[38cdb1f9b6] - src: remove usages of GetBackingStore in startup (Keyhan Vakil) #44078
[c4783e37d7] - src: nest namespace report in namespace node (Chengzhong Wu) #44069
[04bcdf63a0] - src: use a typed array internally for process._exiting (Darshan Sen) #43883
[b90b8abdd5] - src: fix bug in GetErrorSource() (Tobias Nießen) #44019
[728e18e025] - src: fix to use replacement character (Kohei Ueno) #43999
[cc6e0fc8ff] - src: improve SPKAC::ExportChallenge() (Tobias Nießen) #44002
[9763e2fba9] - src: fix typo in src/README.md (Anna Henningsen) #44009
[460397709b] - src: remove unnecessary cast in crypto_sig.cc (Tobias Nießen) #44001
[68ee8e9089] - src: split property helpers from node::Environment (Chengzhong Wu) #44056
[9990dc7d18] - src,buffer: remove unused chars_written parameter (Keyhan Vakil) #44092
[ecf82186e0] - src,fs: refactor duplicated code in fs.readdir (Daeyeon Jeong) #43204
[ee6412a992] - src,lib: print prinstine source when source map source not found (Chengzhong Wu) #44052
[4249276783] - (SEMVER-MINOR) src,lib: print source map error source on demand (Chengzhong Wu) #43875
[1dabdbf05c] - src,test: fix typos (SADIK KUZU) #44110
[a3ac445198] - stream: fix isDetachedBuffer validations (Daeyeon Jeong) #44114
[c079abe017] - stream: improve views validation on BYOBRequest (Daeyeon Jeong) #44155
[2f904bc8bf] - stream: update TextEncoderStream to align the latest spec (Kohei Ueno) #44101
[40b817cfb9] - (SEMVER-MINOR) test: test snapshotting TypeScript compiler (Joyee Cheung) #38905
[d4189ab609] - (SEMVER-MINOR) test: add UMD module test with marked (Joyee Cheung) #38905
[514e5162d2] - test: deflake test-diagnostics-channel-net (Keyhan Vakil) #44144
[a2707d0f48] - test: add coverage for invalid RSA-PSS digests (Tobias Nießen) #44271
[7b6126a59a] - test: update Web Streams WPT (Daeyeon Jeong) #44234
[a02492f96c] - test: move "errors" test to "parallel" (Michaël Zasso) #44233
[b4224dd192] - test: reduce http-server-request-timeouts-mixed flakiness (Nick Sia) #44169
[f5e2f6c362] - test: remove cjs loader from stack traces (Geoffrey Booth) #44197
[e37314497a] - test: add filesystem check to test-fs-stat-date.mjs (Livia Medeiros) #44174
[9755b1f979] - test: mark connection leak test flaky on IBM i (Richard Lau) #44215
[beaf5f5776] - test: use mustSucceed instead of mustCall with assert.ifError (MURAKAMI Masahiko) #44196
[11f74e72a7] - test: update WPT runner (Filip Skokan) #43455
[b2a15b6275] - test: update wpt url status (Kohei Ueno) #44175
[6b84451d70] - test: update wasm/jsapi web platform tests (Yagiz Nizipli) #44100
[537d52fa0f] - test: update hr-time web platform tests (Yagiz Nizipli) #44100
[79445cb215] - test: update console web platform tests (Yagiz Nizipli) #44100
[70267a0eeb] - test: move tests with many workers to sequential (Keyhan Vakil) #44139
[86a7fb0c8a] - test: deflake gc-http-client tests by restricting number of requests (Nick Sia) #44146
[e17117dfda] - test: move test-vm-break-on-sigint to sequential (Keyhan Vakil) #44140
[e5113fab05] - test: remove test-http-client-response-timeout flaky designation (Luigi Pinca) #44145
[f1b5f933d7] - test: s390x z15 accelerated zlib fixes (Adam Majer) #44117
[86bbd5e61a] - test: tune down parallelism for some flaky tests (Keyhan Vakil) #44090
[40e2ca7f66] - test: fix internet/test-inspector-help-page (Daeyeon Jeong) #44025
[b19564b9d2] - test: refactor ESM tests to improve performance (Jacob Smith) #43784
[d964b308ae] - test: remove test-gc-http-client-timeout from flaky list (Feng Yu) #43971
[2cab7bb791] - test: reduce loop times for preventing test from timeout (theanarkh) #43981
[9244d6d416] - test: fix test-cluster-concurrent-disconnect (Daeyeon Jeong) #43961
[3c8037a9fa] - test: change misleading variable name (Tobias Nießen) #43990
[82164344e2] - test,crypto: update WebCryptoAPI WPT (Filip Skokan) #44223
[c0b160c842] - test_runner: fix test runner hooks failure stack (Moshe Atlow) #44284
[8ed39397d5] - test_runner: refactor to use more primordials (Antoine du Hamel) #44062
[d8749c3b87] - test_runner: verbous error when entire test tree is canceled (Moshe Atlow) #44060
[0d007471fa] - test_runner: empty pending tests queue post running (Moshe Atlow) #44059
[c3fa82f007] - test_runner: add before/after/each hooks (Moshe Atlow) #43730
[50c854bbfe] - test_runner: fix top level describe queuing (Moshe Atlow) #43998
[04fdc3e1fa] - test_runner: graceful termination on --test only (Moshe Atlow) #43977
[51a0310398] - test_runner: validate concurrency option (Antoine du Hamel) #43976
[ecf7b0720a] - tls: use logical OR operator (Mohammed Keyvanzadeh) #44236
[f7c1b838ba] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44320
[36b39db74d] - tools: update ESLint to 8.22.0 (Luigi Pinca) #44243
[87f75a27fb] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44244
[a3cc8ce959] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44230
[873941a43e] - tools: update eslint to 8.21.0 (Node.js GitHub Bot) #44162
[6be7e6d136] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #44160
[b252f389d7] - tools: update undici CPE in vuln checking script (Facundo Tuesca) #44128
[3eacf25789] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44064
[1175d9036a] - tools: add verbose flag to find-inactive-collaborators (Rich Trott) #43964
[2cf3ce83d8] - trace_events: add example (theanarkh) #43253
[2efce0fe5b] - typings: add JSDoc for internal/validators (Yagiz Nizipli) #44181

Windows 32-bit Installer: https://nodejs.org/dist/v18.8.0/node-v18.8.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v18.8.0/node-v18.8.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v18.8.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v18.8.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v18.8.0/node-v18.8.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v18.8.0/node-v18.8.0.tar.gz
Other release files: https://nodejs.org/dist/v18.8.0/
Documentation: https://nodejs.org/docs/v18.8.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

30c6f976deae4cd35f8c24abf3b89b0787bf57c86622a006edcea8aaa5e67e6b  node-v18.8.0-aix-ppc64.tar.gz
4952a8ec7ca07328571ba0b06d228c2a8220041a6f07df4f46765c341a80ccd4  node-v18.8.0-darwin-arm64.tar.gz
a03cb97533447a5005accef871b899df0e9da33d8a805675ac53715a534b3dcb  node-v18.8.0-darwin-arm64.tar.xz
57457aeb1b3bfa2295235a134ebcdb58a72144b88049b72d9f7739f6591f850f  node-v18.8.0-darwin-x64.tar.gz
f8527a1820f50a5f4c835d933e5c5318c4f93f7382294db5875791e2cb0cc4fa  node-v18.8.0-darwin-x64.tar.xz
c8042d08d3bc8a1f9529a093a6db97d851528660d5b8e0577e7ee42755644632  node-v18.8.0-headers.tar.gz
b15d251e843344d66a201853cbb121cf7f2d59256bb56c3ca5cbb56af9f8ef5b  node-v18.8.0-headers.tar.xz
94cbe9128f1319b18fe33255f753da16ae7eca2f652afdfb1aabe75c3aa75631  node-v18.8.0-linux-arm64.tar.gz
b0d86c8e3da7d88ecc32112b3e41775583d4c7125fcb775af34d103b29e11bea  node-v18.8.0-linux-arm64.tar.xz
da30d0db3fd66dfd4c5ffb24851db683123777e280e225b9aa8717c3af61916e  node-v18.8.0-linux-armv7l.tar.gz
25453fa230f5e374d978306ffe1a9222c1eeebc76d0c9ff6102cf49691aeddf8  node-v18.8.0-linux-armv7l.tar.xz
c2a1ec6628a7d32530896ac2e1ce6be4a858f878303e3d6fe9c221b714f53b9d  node-v18.8.0-linux-ppc64le.tar.gz
51a668d9d89bf8e91fe249dd8d56e72a1f33d4b92a78d4b93b7026ab655d161f  node-v18.8.0-linux-ppc64le.tar.xz
57b3413dbf694418340e61d9957fca717b02ee67c1c56330ee58e02f035aa188  node-v18.8.0-linux-s390x.tar.gz
5b64ad16d05cbd771552ac7bb08f1349005f7303c9fa663fbb5ae5db88eb325a  node-v18.8.0-linux-s390x.tar.xz
01c2060503bb42caa1c6cc2ee4b432f80c0b38ad46b4eed956774fb36302f46e  node-v18.8.0-linux-x64.tar.gz
c4add613391e51406caad37fafe12ef67eb53eeff11f233f63cc65e643bf6700  node-v18.8.0-linux-x64.tar.xz
0b899a314c6b8bcdbbf1292839535dd048ce0d1a5260e4147d7fde2483451b35  node-v18.8.0.pkg
676a3ca9bdbe7381e49652f2f78705f83175f3844a7450893d562faa35537ba2  node-v18.8.0.tar.gz
2b5d9825d05ede6614f1668a8d97d774fe92ebc81088ec5fdf58184dce3c86b9  node-v18.8.0.tar.xz
931cafa3e839b31e62cabb38132c4662e4212f15b4f7bf0fee67abe2c8820f40  node-v18.8.0-win-x64.7z
b53996eac3eccd229b647ec042f338e4b4ba00352ece05b2e3162e25cb19ab19  node-v18.8.0-win-x64.zip
80c33de8105a3b2a81319c21a7de6af11ba4c1d576ed2f2fc09f0791c5de36d9  node-v18.8.0-win-x86.7z
ce5addf3d94540e7047fe562acb0b63e9a160d22b12946f544c1909fb4dbc0d9  node-v18.8.0-win-x86.zip
94f700c0ea9b45a3d3997f47143378fc000d5bb6c8cbfbceef13a8fef9a1dd06  node-v18.8.0-x64.msi
f458ac2827dd576899663fc5e2161142731e456aca69ed9e716b2f367fde1c72  node-v18.8.0-x86.msi
3577185e3117cf4d9ac81045d975de659bbf855949f009c9227aa0a79a7ac802  win-x64/node.exe
1dd6f33e5388a357da5c9887754251152f204beea779432ce1136f0d04a194b1  win-x64/node.lib
5654d5d639308cfea740cbf2f701538c652533c3be83e4fe2258b05279ecee3a  win-x64/node_pdb.7z
942f8c8fb4f01c60b6fde1fa2196bc2feb9f37d1592e2e76294b3cff96e8f8a3  win-x64/node_pdb.zip
fe7996cd15b6a9e50c1a52ae97f91bb4effd1ab96d98336d0c91f9ac6c772228  win-x86/node.exe
c17d8bd29099e0f3a1cfc833051693be9a42dab2eb3ac2a8c81c62504fb0b9f9  win-x86/node.lib
9d1e8ad7638febc9b7a72d34b0000e7092a53e83c4cfeace112eac1957a58cbd  win-x86/node_pdb.7z
2280c282e178f99e95ce1f3f62bf2b3bf75348ff1440541873a96aff7c9f2f1b  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCAAdFiEEEI9StI21e7DMQ5spl7AUGb2S+AoFAmMGSvAACgkQl7AUGb2S
+ArJCBAAjKrQFySWoUqDk0pHNHm/q4tvKzShZ3FrHhfXoFI44IpuJ9C6KDT+64Vx
VTpIjmMFUHtaAESUYf6D4zyBFOoKmAHvvACdOWusiA4kkUfcVNxn1uy7jclwQ9ih
R7I6YhJns5eMFv1WH/dAfTUNRXPV8patL202qJR5Nj01qpKhzX6y04iktB2BXKrJ
F93zA06rZMIU1fKX8s8tjwsfZm5fSg5PCEhBaWaRraZ3HqZwHneSXYjFIHWbhGud
RSUZtOqfvFIe+RigREKdzVy6W3zvusfdPH8nYVz4Ujw9wckcivqm+bJT1vfcfb4e
zFblzN7vXQEVOJ+c1Mj+74nZkM1hAHZNwkxssg3LSWlVL2NGFMvJUBP9PJXCuSDt
RM+uzS0JPXlsa1E1Pa50CuXq8R1rSmDoepzYD+tDenAYbwGTDse9wrWgDflEIgsl
Y4aqhlsxJpYWgWZXwEeuF/FlW6qDBMZbmK63Mmc99srUwoFcxNlCCZS4N7Ioo7Dx
HUSFlRRoEg3DrjlLysBqJVkifYz0wq/W1u9UJyjPKbY3bo1c2w1lJtjCtiCEKMOp
CQvz28lpHrnEnHIGbp1WvRKmWetYciguMTgbiVSPzXngDyWnLeIz49goU3HCveoZ
sO3JGtkS+bKpQTdLUShuiRu4+CVMT99fsMfUiJiCgpDLuE6D3t4=
=rfCR
-----END PGP SIGNATURE-----


      
