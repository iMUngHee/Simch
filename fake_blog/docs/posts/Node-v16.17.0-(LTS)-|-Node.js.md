---
id: 206
title: Node-v16.17.0-(LTS)-|-Node.js
date: 'Oct 25 2022'
tags: ["node","news"]
metaTags: ["node","news"]
cover_image: https://velog.velcdn.com/images/mayinjanuary/post/e1ff9d4e-541f-418f-b411-4ab9f39aee16/nodejs.png
description: ''
---


        
          Node v16.17.0 (LTS)
          by Michaël Zasso, 2022-08-16
        

        Notable ChangesExperimental command-line argument parser APIAdds util.parseArgs helper for higher level command-line argument parsing.
Contributed by Benjamin Coe, John Gee, Darcy Clarke, Joe Sepi, Kevin Gibbons, Aaron Casanova, Jessica Nahulan, and Jordan Harband - #42675
Experimental ESM Loader Hooks APINode.js ESM Loader hooks now support multiple custom loaders, and composition is
achieved via "chaining": foo-loader calls bar-loader calls qux-loader
(a custom loader must now signal a short circuit when intentionally not
calling the next). See the ESM docs for details.
Real-world use-cases are laid out for end-users with working examples in the
article Custom ESM loaders: Who, what, when, where, why, how.
Contributed by Jacob Smith, Geoffrey Booth, and Bradley Farias - #42623
Experimental test runnerThe node:test module, which was initially introduced in Node.js v18.0.0,
is now available with all the changes done to it up to Node.js v18.7.0.
Improved interoperability of the Web Crypto APITo better align Node.js' experimental implementation of the Web Crypto API with other runtimes, several changes were made:

Support for CFRG curves was added, with the 'Ed25519', 'Ed448', 'X25519', and 'X448' algorithms.
The proprietary 'NODE-DSA', 'NODE-DH', 'NODE-SCRYPT', 'NODE-ED25519', 'NODE-ED448', 'NODE-X25519', and 'NODE-X448' algorithms were removed.
The proprietary 'node.keyObject' import/export format was removed.

Contributed by Filip Skokan - #42507, #43310
Dependency updates
Updated Corepack to 0.12.1 - #43965
Updated ICU to 71.1 - #42655
Updated npm to 8.15.0 - #43917
Updated Undici to 5.8.0 - #43886

Other notable changes
[5f1e9e2030] - (SEMVER-MINOR) crypto: make authTagLength optional for CC20P1305 (Tobias Nießen) #42427
[934077a137] - (SEMVER-MINOR) crypto: align webcrypto RSA key import/export with other implementations (Filip Skokan) #42816
[7683e9623c] - (SEMVER-MINOR) dns: export error code constants from dns/promises (Feng Yu) #43176
[302a134b83] - doc: deprecate coercion to integer in process.exit (Daeyeon Jeong) #43738
[4884f18ce5] - (SEMVER-MINOR) doc: deprecate diagnostics_channel object subscribe method (Stephen Belanger) #42714
[90f395dda9] - (SEMVER-MINOR) errors: add support for cause in aborterror (James M Snell) #41008
[7a5de2cc0c] - (SEMVER-MINOR) events: expose CustomEvent on global with CLI flag (Daeyeon Jeong) #43885
[087adbb7a3] - (SEMVER-MINOR) events: add CustomEvent (Daeyeon Jeong) #43514
[979c98a3cb] - (SEMVER-MINOR) events: propagate abortsignal reason in new AbortError ctor in events (James M Snell) #41008
[e04c8a4921] - (SEMVER-MINOR) fs: propagate abortsignal reason in new AbortSignal constructors (James M Snell) #41008
[464830993e] - (SEMVER-MINOR) fs: make params in writing methods optional (LiviaMedeiros) #42601
[3d7808ec3f] - (SEMVER-MINOR) fs: add read(buffer[, options]) versions (LiviaMedeiros) #42768
[082a2630fd] - (SEMVER-MINOR) http: add drop request event for http server (theanarkh) #43806
[5a74939770] - (SEMVER-MINOR) http: add diagnostics channel for http client (theanarkh) #43580
[f05fd1a423] - (SEMVER-MINOR) http: add perf_hooks detail for http request and client (theanarkh) #43361
[9d1b4b7e29] - (SEMVER-MINOR) http: add uniqueHeaders option to request and createServer (Paolo Insogna) #41397
[fa5ac5a2eb] - (SEMVER-MINOR) http2: propagate abortsignal reason in new AbortError constructor (James M Snell) #41008
[94070f152e] - (SEMVER-MINOR) http2: compat support for array headers (OneNail) #42901
[36dd39dec0] - (SEMVER-MINOR) lib: propagate abortsignal reason in new AbortError constructor in blob (James M Snell) #41008
[8adf7d5e91] - (SEMVER-MINOR) lib: add abortSignal.throwIfAborted() (James M Snell) #40951
[3c1ed86840] - (SEMVER-MINOR) lib: improved diagnostics_channel subscribe/unsubscribe (Stephen Belanger) #42714
[e6186af5cc] - (SEMVER-MINOR) module: add isBuiltIn method (hemanth.hm) #43396
[3d851d6d6b] - (SEMVER-MINOR) module,repl: support 'node:'-only core modules (Colin Ihrig) #42325
[303bd08d88] - (SEMVER-MINOR) net: add drop event for net server (theanarkh) #43582
[da03e9f484] - (SEMVER-MINOR) net: add ability to reset a tcp socket (pupilTong) #43112
[73f852e1e3] - (SEMVER-MINOR) node-api: emit uncaught-exception on unhandled tsfn callbacks (Chengzhong Wu) #36510
[6dcdcd7f50] - (SEMVER-MINOR) perf_hooks: add PerformanceResourceTiming (RafaelGSS) #42725
[5750358872] - (SEMVER-MINOR) report: add more heap infos in process report (theanarkh) #43116
[e7b99e8c8d] - (SEMVER-MINOR) src: add --openssl-legacy-provider option (Daniel Bevenius) #40478
[1281a48b89] - (SEMVER-MINOR) src: define fs.constants.S_IWUSR & S_IRUSR for Win (Liviu Ionescu) #42757
[9ea9797d34] - (SEMVER-MINOR) src,doc,test: add --openssl-shared-config option (Daniel Bevenius) #43124
[046debaee0] - (SEMVER-MINOR) stream: use cause options in AbortError constructors (James M Snell) #41008
[6641fda10a] - (SEMVER-MINOR) stream: add iterator helper find (Nitzan Uziely) #41849
[edec73032c] - (SEMVER-MINOR) stream: add writableAborted (Robert Nagy) #40802
[2aae868fa2] - (SEMVER-MINOR) timers: propagate signal.reason in awaitable timers (James M Snell) #41008
[513f52445b] - (SEMVER-MINOR) v8: add v8.startupSnapshot utils (Joyee Cheung) #43329
[a8eca74450] - (SEMVER-MINOR) v8: export more fields in getHeapStatistics (theanarkh) #42784
[845279e331] - (SEMVER-MINOR) worker: add hasRef() to MessagePort (Darshan Sen) #42849

CommitsSemver-minor commits
[58279d5b76] - (SEMVER-MINOR) buffer: graduate Blob from experimental (James M Snell) #41270
[72a0c5c743] - (SEMVER-MINOR) crypto: remove Node.js-specific webcrypto extensions (Filip Skokan) #43310
[2e3a69a2ba] - (SEMVER-MINOR) crypto: add CFRG curves to Web Crypto API (Filip Skokan) #42507
[5f1e9e2030] - (SEMVER-MINOR) crypto: make authTagLength optional for CC20P1305 (Tobias Nießen) #42427
[934077a137] - (SEMVER-MINOR) crypto: align webcrypto RSA key import/export with other implementations (Filip Skokan) #42816
[7683e9623c] - (SEMVER-MINOR) dns: export error code constants from dns/promises (Feng Yu) #43176
[4884f18ce5] - (SEMVER-MINOR) doc: deprecate diagnostics_channel object subscribe method (Stephen Belanger) #42714
[90f395dda9] - (SEMVER-MINOR) errors: add support for cause in aborterror (James M Snell) #41008
[247a6f6e85] - (SEMVER-MINOR) esm: add chaining to loaders (Jacob Smith) #42623
[7a5de2cc0c] - (SEMVER-MINOR) events: expose CustomEvent on global with CLI flag (Daeyeon Jeong) #43885
[087adbb7a3] - (SEMVER-MINOR) events: add CustomEvent (Daeyeon Jeong) #43514
[979c98a3cb] - (SEMVER-MINOR) events: propagate abortsignal reason in new AbortError ctor in events (James M Snell) #41008
[e04c8a4921] - (SEMVER-MINOR) fs: propagate abortsignal reason in new AbortSignal constructors (James M Snell) #41008
[464830993e] - (SEMVER-MINOR) fs: make params in writing methods optional (LiviaMedeiros) #42601
[3d7808ec3f] - (SEMVER-MINOR) fs: add read(buffer[, options]) versions (LiviaMedeiros) #42768
[082a2630fd] - (SEMVER-MINOR) http: add drop request event for http server (theanarkh) #43806
[5a74939770] - (SEMVER-MINOR) http: add diagnostics channel for http client (theanarkh) #43580
[f05fd1a423] - (SEMVER-MINOR) http: add perf_hooks detail for http request and client (theanarkh) #43361
[9d1b4b7e29] - (SEMVER-MINOR) http: add uniqueHeaders option to request and createServer (Paolo Insogna) #41397
[fa5ac5a2eb] - (SEMVER-MINOR) http2: propagate abortsignal reason in new AbortError constructor (James M Snell) #41008
[94070f152e] - (SEMVER-MINOR) http2: compat support for array headers (OneNail) #42901
[36dd39dec0] - (SEMVER-MINOR) lib: propagate abortsignal reason in new AbortError constructor in blob (James M Snell) #41008
[8adf7d5e91] - (SEMVER-MINOR) lib: add abortSignal.throwIfAborted() (James M Snell) #40951
[3c1ed86840] - (SEMVER-MINOR) lib: improved diagnostics_channel subscribe/unsubscribe (Stephen Belanger) #42714
[e6186af5cc] - (SEMVER-MINOR) module: add isBuiltIn method (hemanth.hm) #43396
[3d851d6d6b] - (SEMVER-MINOR) module,repl: support 'node:'-only core modules (Colin Ihrig) #42325
[303bd08d88] - (SEMVER-MINOR) net: add drop event for net server (theanarkh) #43582
[da03e9f484] - (SEMVER-MINOR) net: add ability to reset a tcp socket (pupilTong) #43112
[73f852e1e3] - (SEMVER-MINOR) node-api: emit uncaught-exception on unhandled tsfn callbacks (Chengzhong Wu) #36510
[6dcdcd7f50] - (SEMVER-MINOR) perf_hooks: add PerformanceResourceTiming (RafaelGSS) #42725
[5750358872] - (SEMVER-MINOR) report: add more heap infos in process report (theanarkh) #43116
[e7b99e8c8d] - (SEMVER-MINOR) src: add --openssl-legacy-provider option (Daniel Bevenius) #40478
[1281a48b89] - (SEMVER-MINOR) src: define fs.constants.S_IWUSR & S_IRUSR for Win (Liviu Ionescu) #42757
[9ea9797d34] - (SEMVER-MINOR) src,doc,test: add --openssl-shared-config option (Daniel Bevenius) #43124
[046debaee0] - (SEMVER-MINOR) stream: use cause options in AbortError constructors (James M Snell) #41008
[6641fda10a] - (SEMVER-MINOR) stream: add iterator helper find (Nitzan Uziely) #41849
[edec73032c] - (SEMVER-MINOR) stream: add writableAborted (Robert Nagy) #40802
[9a530832cb] - (SEMVER-MINOR) test: add initial test module (Colin Ihrig) #42325
[61a2ddc597] - (SEMVER-MINOR) test_runner: expose describe and it (Moshe Atlow) #43420
[cd6f24be4c] - (SEMVER-MINOR) test_runner: add initial CLI runner (Colin Ihrig) #42658
[a4b277cb4d] - (SEMVER-MINOR) test_runner: support 'only' tests (Colin Ihrig) #42514
[2aae868fa2] - (SEMVER-MINOR) timers: propagate signal.reason in awaitable timers (James M Snell) #41008
[432e3054be] - (SEMVER-MINOR) util: add tokens to parseArgs (John Gee) #43459
[a1e122be62] - (SEMVER-MINOR) util: add parseArgs module (Benjamin Coe) #42675
[513f52445b] - (SEMVER-MINOR) v8: add v8.startupSnapshot utils (Joyee Cheung) #43329
[a8eca74450] - (SEMVER-MINOR) v8: export more fields in getHeapStatistics (theanarkh) #42784
[845279e331] - (SEMVER-MINOR) worker: add hasRef() to MessagePort (Darshan Sen) #42849

Semver-patch commits
[480a754ddc] - assert: callTracker throw a specific error message when possible (Moshe Atlow) #43640
[ebb334b124] - assert: fix CallTracker wraps the function causes the length to be lost (OneNail) #42909
[7f8f83d4d0] - assert: make assert.fail less affected by prototype tampering (Antoine du Hamel) #42918
[a6a46f9578] - async_hooks: use kEmptyObject (LiviaMedeiros) #43159
[84075821be] - async_hooks: remove destroyed symbol on Promises (Gerhard Stöbich) #42402
[b69396a41a] - async_hooks: avoid decrementing iterator after erase (Gabriel Bota) #42749
[6b7c6192ff] - bootstrap: move global initialization to js (Alena Khineika) #43625
[4fbe24588a] - bootstrap: use the isolate snapshot in workers (Joyee Cheung) #42702
[3a83e5cfd9] - bootstrap: move embedded snapshot to SnapshotBuilder (Joyee Cheung) #42702
[b4201ace9b] - bootstrap: reset process._exit and process.exitCode in pre-execution (Joyee Cheung) #42466
[f8f7c1e5bd] - bootstrap: run inspector and event loop in snapshot builder (Joyee Cheung) #42466
[2d79480fcb] - bootstrap: make I/O streams work with user-land snapshot (Joyee Cheung) #42466
[1b2946b1a4] - bootstrap: refresh options in pre-execution (Joyee Cheung) #42466
[ca57563522] - bootstrap: use SnapshotData to pass snapshot data around (Joyee Cheung) #42360
[60d032b89c] - buffer: do not leak memory if buffer is too big (Keyhan Vakil) #43938
[5ddd367bec] - buffer: improve Blob constructor error message when passing a string (Xuguang Mei) #42338
[691e5d8bf3] - buffer: fix atob input validation (Antoine du Hamel) #42539
[a948fb8b56] - build: add .gitattributes for npm and other shims (Hrishikesh Kadam) #43879
[623dd2a70b] - build: remove precompiled header and debug information for host builds (Niyas Sait) #42538
[129b05e0c5] - build: fix various shared library build issues (William Marlow) #41850
[fba6e96326] - build: fix indeterminacy of icu_locales value (Sergey Nazaryev) #42865
[74bce1c448] - build: improve reliability of find_python.cmd script (Luigi Pinca) #42810
[637af6c068] - build: windows/arm64 native compilation support (Niyas Sait) #42408
[fe661fadad] - build: add --node-snapshot-main configure option (Joyee Cheung) #42466
[daadd58baa] - build,test: increase stack size limit on Windows (Tobias Nießen) #43632
[1e1634ae99] - child_process: do not need to count length when maxBuffer is Infinity (theanarkh) #43822
[2b6e98b6b2] - child_process: improve ipc write performance (rubikscraft) #42931
[7aac430b3f] - child_process: speed up 'advanced' ipc receiving (rubikscraft) #42931
[6844930290] - child_process: use kEmptyObject (LiviaMedeiros) #43159
[72400b7a7b] - child_process: add env contents types in JSDoc (Rich Trott) #42494
[fe57e5685d] - cluster: send connection to other server when worker drop it (theanarkh) #43747
[61b5d4a999] - cluster: fix closing dgram sockets in cluster workers throws errors (Ouyang Yadong) #43709
[97f4cc7766] - cluster: fix fd leak (theanarkh) #43650
[1cb19ec96a] - cluster: use kEmptyObject (LiviaMedeiros) #43159
[c8706f3a7f] - cluster, net: fix listen pipe with readable and writable in cluster (theanarkh) #43634
[35fc1c205e] - console: fix console.dir crash on a revoked proxy (Daeyeon Jeong) #43100
[3449472f3d] - crypto: remove unneeded guard (Rich Trott) #43856
[a3a845b8ba] - crypto: don't disable TLS 1.3 without suites (Adam Majer) #43427
[588a84e11d] - crypto: handle webcrypto generateKey() usages edge case (Filip Skokan) #43454
[224d3f40dc] - crypto: update Wrapping and unwrapping keys webcrypto example (Filip Skokan) #43452
[8dca8d7805] - crypto: fix webcrypto generateKey() with empty usages (Filip Skokan) #43431
[bef600e787] - crypto: fix webcrypto digest() invalid algorithm (Filip Skokan) #43431
[077ad7e90d] - crypto: fix webcrypto RSA generateKey() use of publicExponent (Filip Skokan) #43431
[04572ec914] - crypto: fix webcrypto AES-KW keys accepting encrypt/decrypt usages (Filip Skokan) #43431
[52ea86908d] - crypto: fix webcrypto deriveBits for non-byte lengths (Filip Skokan) #43431
[97b2fef24a] - crypto: fix webcrypto import of cfrg raw public keys (Filip Skokan) #43404
[a57149d14e] - crypto: fix webcrypto JWK EC and OKP import crv check (Filip Skokan) #43346
[1cb267261c] - crypto: test webcrypto ec raw public key import (Filip Skokan) #43405
[02cf57b8d6] - crypto: use kEmptyObject (LiviaMedeiros) #43159
[4600892a45] - crypto: adjust minimum length in generateKey('hmac', ...) (LiviaMedeiros) #42944
[baaf77898b] - crypto: clean up parameter validation in HKDF (Tobias Nießen) #42924
[3f43dadeda] - crypto: validate this in all webcrypto methods and getters (Filip Skokan) #42815
[297e374565] - crypto: do not add undefined hash in webcrypto normalizeAlgorithm (Filip Skokan) #42559
[c764e81a69] - crypto: cleanup webcrypto jwk code (Filip Skokan) #42562
[c605ad1343] - crypto: fix webcrypto derive key lengths (Filip Skokan) #42542
[0b1b616a9c] - crypto: improve prime size argument validation (Tobias Nießen) #42234
[f1c12aa6df] - debugger: throw a more useful error when the frame is missing (Kohei Ueno) #42776
[f75a5a92ec] - debugger: fix inconsistent inspector output of exec new Map() (Kohei Ueno) #42423
[e3d8893265] - deps: V8: backport 22698d267667 (Chengzhong Wu) #43751
[06a6bdaf7a] - deps: update corepack to 0.12.1 (Node.js GitHub Bot) #43965
[c7be356dd7] - deps: update hast-util-raw (Moshe Atlow) #43927
[62c27d0d84] - deps: update undici to 5.8.0 (Node.js GitHub Bot) #43886
[92051cb4a1] - deps: cherry-pick libuv/[email protected] (Ben Noordhuis) #43950
[8835898e43] - deps: cherry-pick libuv/[email protected] (Ben Noordhuis) #43950
[1566854218] - deps: upgrade npm to 8.15.0 (npm team) #43917
[e6baa8a113] - deps: upgrade npm to 8.14.0 (npm team) #43826
[aa137caac3] - deps: update corepack to 0.12.0 (Node.js GitHub Bot) #43748
[04188e54f5] - deps: update undici to 5.7.0 (Node.js GitHub Bot) #43790
[09f9060f7d] - deps: upgrade npm to 8.13.2 (npm team) #43622
[1343615224] - deps: upgrade npm to 8.13.1 (npm team) #43552
[49080bc42f] - deps: patch V8 to 9.4.146.26 (Michaël Zasso) #43778
[705a8afd81] - deps: update Corepack to 0.11.2 (Maël Nison) #43402
[552e91121b] - deps: update undici to 5.5.1 (Node.js GitHub Bot) #43412
[0ff00945d5] - deps: update undici to 5.4.0 (Node.js GitHub Bot) #43262
[170bec811b] - deps: update undici to 5.3.0 (Node.js GitHub Bot) #43197
[b97075dfec] - deps: update undici to 5.2.0 (Node.js GitHub Bot) #43059
[4d4e00a6b0] - deps: update undici to 5.1.1 (Michaël Zasso) #42939
[cba4f6c8a0] - deps: update Acorn to v8.7.0 (Michaël Zasso) #42667
[a5507fd409] - deps: update ICU to 71.1 (Michaël Zasso) #42655
[cbb253e61e] - deps: upgrade npm to 8.12.1 (npm team) #43301
[01e7d1f349] - deps: cherry-pick 4ab70f6 from V8 upstream (Khaidi Chu) #43328
[fea892a168] - dns: fix getServers return undefined (jiahao.si) #43922
[43a3239d85] - dns: fix cares memory leak (theanarkh) #43912
[8d2a256bf4] - dns: make promise API fully constructed from lib/internal/dns/promises (Feng Yu) #43227
[71f7b00fca] - domain: fix vm promise tracking while keeping isolation (Stephen Belanger) #43556
[9f75f26ad9] - errors: extract type detection & use in ERR_INVALID_RETURN_VALUE (Jacob Smith) #43558
[f5115b4abc] - errors,console: refactor to use ES2021 syntax (小菜) #42872
[85ba4e069d] - errors,vm: update error and use cause (Gus Caplan) #42820
[ae157d9098] - esm: fix loader hooks accepting too many arguments (Jacob Smith) #44109
[3139c110dc] - esm: remove superfluous argument (Rich Trott) #43884
[63228efe08] - esm: throw on any non-2xx response (LiviaMedeiros) #43742
[a6d4d31da5] - esm: fix erroneous re-initialization of ESMLoader (Jacob Smith) #43763
[953e663e58] - esm: treat 307 and 308 as redirects in HTTPS imports (Kid) #43689
[33a2902a33] - esm: restore next<HookName>'s context as optional arg (Jacob Smith) #43553
[df3f5cb93e] - esm: fix chain advances when loader calls next<HookName> multiple times (Jacob Smith) #43303
[eac4e20525] - esm: refactor responseURL handling (Guy Bedford) #43164
[e114ed0cda] - esm: fix http(s) import via custom loader (Jacob Smith) #43130
[6564e69c78] - esm: fix imports from non-file module (Antoine du Hamel) #42881
[e1bc88764d] - esm: graduate top-level-await to stable (Antoine du Hamel) #42875
[14a929b0b0] - esm: emit experimental warnings in common place (Jacob Smith) #42314
[0167988ce3] - events: improve Event compatibility (Daeyeon Jeong) #43461
[e51c0e9939] - events: improve EventListener validation (Daeyeon Jeong) #43491
[393c021d7f] - events: fix adding abort listener in events.once (Daeyeon Jeong) #43373
[a7eaf3981d] - events: use kEmptyObject (LiviaMedeiros) #43159
[fcf74c53d8] - fs: refactor realpath with Map and Set (LiviaMedeiros) #43569
[bfb8a0bfac] - fs: don't end fs promises on Isolate termination (Santiago Gimeno) #42910
[ca4157ea40] - fs: use kEmptyObject (LiviaMedeiros) #43159
[835056cbcb] - fs: remove unnecessary ?? operator (Morgan Roderick) #43073
[8b89c7fbab] - fs: export constants from fs/promises (Feng Yu) #43177
[b0d9915bc6] - fs: add trailing commas (LiviaMedeiros) #43127
[637820d1e3] - fs: fix write methods param validation and docs (LiviaMedeiros) #41677
[5d8b2cb51d] - fs: fix mkdirSync so ENOSPC is correctly reported (Santiago Gimeno) #42811
[58eebaf717] - http: defer reentrant execution of Parser::Execute (Paolo Insogna) #43369
[ea3ca874da] - http: fix http agent keep alive (theanarkh) #43380
[85d93f0bf6] - http: use kEmptyObject (LiviaMedeiros) #43159
[1bfff396ac] - http: document that ClientRequest inherits from OutgoingMessage (K.C.Ashish Kumar) #42642
[db53e9b387] - http2: log debug only when in debug mode (Basit) #43626
[95083cb0ad] - http2: use kEmptyObject (LiviaMedeiros) #43159
[367454205d] - http2: set origin name correctly when servername is empty (ofirbarak) #42838
[c73f739acd] - http2: improve tests and docs (Daeyeon Jeong) #42858
[4fbedffb55] - https: use kEmptyObject (LiviaMedeiros) #43159
[5879642260] - inspector: set sampling interval before start (Shelley Vohr) #43779
[096f7fc59a] - inspector: add missing initialization (Michael Dawson) #43254
[a8c24185f8] - lib: refactor to avoid unsafe regex primordials (Antoine du Hamel) #43475
[2a5d5e0726] - lib: modify DOMException to pass WPT (Khaidi Chu) #41517
[26d63f004f] - lib: implement safe alternatives to Promise static methods (Antoine du Hamel) #43728
[aab5adbcbe] - lib: use null-prototype objects for property descriptors (Antoine du Hamel) #43473
[a97d0ba3af] - lib: fix TODO in freeze_intrinsics (Antoine du Hamel) #43472
[519cdd94c0] - lib: use kEmptyObject in various places (LiviaMedeiros) #43159
[7d5e7b43f6] - lib: give names to promisified methods (LiviaMedeiros) #43218
[cd55e221b5] - lib: use null-prototype objects for property descriptors (Antoine du Hamel) #43270
[9e613f7f3d] - lib: prepare files for no-var lint rule (Rich Trott) #42573
[327da6acde] - lib: source maps filter null prefix (Fabian Cook) #42522
[58f80b0dcc] - lib: improve the coverage of the validator (mawaregetsuka) #42443
[e48ccf5934] - lib: update JSDoc for linting (Rich Trott) #42489
[abc134cacc] - lib,src: add source map support for global eval (Chengzhong Wu) #43428
[288d9fbe5a] - loader: make require.resolve throw for unknown builtin modules (木杉) #43336
[7c4e1ad1ed] - module: also enable subpath imports in REPL (Ray) #43450
[c284eb3745] - module: ensure 'node:'-only modules can access node_modules (Colin Ihrig) #42430
[70a4033841] - module: cjs-module-lexer WebAssembly fallback (Guy Bedford) #43612
[abda05a3a7] - module: prefer async/await in https imports (Benjamin Gruenbaum) #41950
[f66872e36c] - net: fix socket._getpeername (Daeyeon Jeong) #43010
[b2d02bc2c0] - net: remove redundant connecting assignment (Ouyang Yadong) #43710
[ff5310a9c7] - net: fix net keepalive and noDelay (theanarkh) #43561
[265810a1e5] - net: prevent /32 ipv4 mask from matching all ips (supriyo-biswas) #43381
[e4a5bd1cf8] - net: fix net.Server keepalive and noDelay (theanarkh) #43497
[d766cfaca9] - net,dns: move hasObserver out of perf function (theanarkh) #43217
[b240868960] - net,dns: trace tcp connection and dns by perf_hooks (theanarkh) #42390
[112bce394d] - node-api: explicitly set __cdecl for API functions (Vladimir Morozov) #42780
[49103e3240] - node-api: fix napi_get_all_property_names (Vladimir Morozov) #42463
[5a1e1b3f33] - node-api: format Node-API related code (Vladimir Morozov) #42396
[31ee218eff] - node-api,src: fix module registration in MSVC C++ (Vladimir Morozov) #42459
[e7899ba1f7] - os: avoid unnecessary usage of var (Mohammed Keyvanzadeh) #42563
[463f9a6c4f] - perf_hooks: add initiatorType getter (Rafael Gonzaga) #43593
[096a2d9434] - perf_hooks: fix miscounted gc performance entry starttime (#43066) (Xuguang Mei) #43066
[f08a282098] - perf_hooks: use kEmptyObject (LiviaMedeiros) #43159
[8b0ae63316] - perf_hooks: fix start_time of perf_hooks (theanarkh) #43069
[7a5972fe9e] - perf_hooks: fix function wrapped by timerify to work correctly (Kohei Ueno) #43330
[5ab3da3f26] - perf_hooks: return different functions in timerify (Himself65) #42854
[15da462cea] - process: use defineProperty instead of assignment (Mark S. Miller) #43907
[67e91aa20f] - readline: fix to not access a property on an undefined value (Kohei Ueno) #43543
[37066f0319] - readline: use kEmptyObject (LiviaMedeiros) #43159
[d260569b85] - repl: fix overzealous top-level await (Tobias Nießen) #43827
[0bd4a04c42] - repl: use SafePromiseAll and SafePromiseRace (Antoine du Hamel) #43758
[bef9a36024] - repl: make autocomplete case-insensitive (Sergey Petushkov) #41632
[0dc96e4474] - src: pass only Isolate* and env_vars to EnabledDebugList::Parse() (Darshan Sen) #43668
[be3343aed3] - src: use named struct instead of typedef (Tobias Nießen) #43881
[eaa611c53a] - src: use named enum instead of typedef (Tobias Nießen) #43880
[3a32f0ecb2] - src: fix node watchdog race condition (theanarkh) #43780
[67ecd274b7] - src: fix napi_check_object_type_tag() (Daeyeon Jeong) #43788
[364b67cf7e] - src: slim down env-inl.h (Ben Noordhuis) #43745
[ccac1fc2e7] - src: improve and update ByteSource description (Tobias Nießen) #43478
[a1f1ff197e] - src: merge RunInThisContext() with RunInContext() (Daeyeon Jeong) #43225
[3e21ae8733] - src: fix crash on FSReqPromise destructor (Santiago Gimeno) #43533
[b9649a4959] - src: delegate NodeArrayBufferAllocator to v8's allocator (Jeremy Rose) #43594
[26e4dc83a8] - src: remove a stale comment in async_hooks (Daeyeon Jeong) #43317
[733739dd3f] - src: remove CopyBuffer (Tobias Nießen) #43463
[bf553fd26a] - src: register StreamBase while registering LibuvStreamWrap (Darshan Sen) #43321
[f18867b2c0] - src: fix static analysis warning and use smart ptr (Tobias Nießen) #43117
[094d5fc31a] - src: fix json utils escapes for U+000B (Chengzhong Wu) #43206
[c82d992b77] - src: convey potential exceptions during StreamPipe construction (Darshan Sen) #43240
[07b7f8375e] - src: make SecureContext fields private (Tobias Nießen) #43173
[eb2c504542] - src: reuse GetServerName (Tobias Nießen) #43168
[7bdd31929c] - src: remove SecureContext::operator* (Tobias Nießen) #43121
[438c4723f6] - src: replace TraceEventScope with sync events (Chengzhong Wu) #42977
[32446d8c8a] - src: delete AllocatedBuffer (Darshan Sen) #43008
[4cfcb6f883] - src: remove unnecessary comment (Kohei Ueno) #42952
[6adbb062e6] - src: fix memory leak for v8.serialize (liuxingbaoyu) #42695
[e769a0f19b] - src: use node: prefix in example (Antoine du Hamel) #42794
[b19018468c] - src: large page attributing an id on Linux (David CARLIER) #42644
[a26fd031bf] - src: fix coverity report (Michael Dawson) #42663
[8687ba8732] - src: fix alphabetically sorted binding list (Tobias Nießen) #42687
[4e1378b2d6] - src: fix typo in InspectorIoDelegate constructor (Kohei Ueno) #42520
[1dc912ebdc] - src: remove unnecessary static qualifier in crypto_dh.cc (Darshan Sen) #42492
[a280f88266] - src: address 3 useless call coverity warnings (Michael Dawson) #42426
[5195ea3cd2] - src: properly report exceptions from AddressToJS() (Darshan Sen) #42054
[a8553151ee] - src: suppress false coverity warning (Michael Dawson) #42284
[1e8611f048] - src: refactor IsSupportedAuthenticatedMode (Tobias Nießen) #42368
[7778ebecaa] - src: turn SSL_CTX_new CHECK/segfault into JS exception (Anna Henningsen) #42799
[4ffc08861a] - src: add proper mutexes for accessing FIPS state (Anna Henningsen) #42278
[6353a4dc8a] - src,bootstrap: remove NodeMainInstance::registry_ (Darshan Sen) #43392
[1a98f166bf] - src,crypto: remove uses of AllocatedBuffer from crypto_rsa.cc (Darshan Sen) #42852
[c336ffc059] - src,crypto: remove uses of AllocatedBuffer from crypto_ec.cc (Darshan Sen) #42766
[1669b94cd6] - src,crypto: remove uses of AllocatedBuffer from crypto_tls.cc (Darshan Sen) #42589
[6d98a51970] - src,crypto: handle empty maybe correctly in crypto_dh.cc (Darshan Sen) #42492
[5a2e277f93] - src,crypto: remove uses of AllocatedBuffer from crypto_dh.cc (Darshan Sen) #42492
[4a6649cb28] - src,stream: change return type to Maybe (Daeyeon Jeong) #43575
[99a3b19974] - stream: fix 0 transform hwm backpressure (Robert Nagy) #43685
[c4dc8b6297] - stream: add more filter tests (Benjamin Gruenbaum) #41936
[4b17a94b67] - stream: port more test262 tests (Benjamin Gruenbaum) #41974
[3bc12c69a4] - stream: avoid usage of deprecated APIs (Mohammed Keyvanzadeh) #41871
[4ad5a28b54] - stream: refactor to use more validators (Mohammed Keyvanzadeh) #41871
[545b2cd4c2] - stream: use standard for loop instead of for..of (Mohammed Keyvanzadeh) #41871
[3ef9f8da30] - stream: initial port of test262 tests (Benjamin Gruenbaum) #41775
[f793ed550a] - stream: use synchronous error validation & validate abort signal option (iMoses) #41777
[31cee4f914] - stream: never flatten on toArray (Benjamin Gruenbaum) #41615
[d63c4c68a0] - stream: use kEmptyObject (LiviaMedeiros) #43159
[6f9c62206b] - test_runner: add support for boolean values for concurrency option (Lenvin Gonsalves) #43887
[e33f6bd384] - test_runner: validate timeout option (Antoine du Hamel) #43843
[a167daa311] - test_runner: pass signal on timeout (Moshe Atlow) #43911
[b1db85023e] - test_runner: do not report an error when tests are passing (Antoine du Hamel) #43919
[f193ac6cd5] - test_runner: recieve and pass AbortSignal (Moshe Atlow) #43554
[f8f1d16097] - test_runner: fix it concurrency (Moshe Atlow) #43757
[e9ca1efe67] - test_runner: support timeout for tests (Moshe Atlow) #43505
[5dca44d5eb] - test_runner: catch errors thrown within describe (Moshe Atlow) #43729
[0bdc141dd0] - test_runner: protect internals against prototype tampering (Antoine du Hamel) #43578
[4d4dcade90] - test_runner: cancel on termination (Moshe Atlow) #43549
[dccbd9ee95] - test_runner: wait for stderr and stdout to complete (Moshe Atlow) #43666
[27841bee3d] - test_runner: use kEmptyObject (LiviaMedeiros) #43159
[1a4235961e] - test_runner: add Subtest to tap protocol output (Moshe Atlow) #43417
[3fbc5e441c] - timers: use kEmptyObject (LiviaMedeiros) #43159
[444d77391c] - tls: use kEmptyObject (LiviaMedeiros) #43159
[ba3cf5d59e] - tls: fix performance regression in convertALPNProtocols() (LiviaMedeiros) #43250
[4a3a8a6164] - tls: fix convertALPNProtocols accepting ArrayBufferViews (LiviaMedeiros) #43211
[a6710f50c4] - trace_events: trace net connect event (theanarkh) #43903
[8cda4156a5] - url: update WHATWG URL parser to align with latest spec (Feng Yu) #43190
[69f9a3a78e] - url,lib: pass urlsearchparams-constructor.any.js (Khaidi Chu) #41197
[24cabbf32f] - util: remove unicode support todo for perf implications (Rhys) #43762
[0f9d5ac0b0] - util: refactor to use validateObject (Kohei Ueno) #43769
[5edfccfc4c] - util: add AggregateError.prototype.errors to inspect output (LiviaMedeiros) #43646
[fa89a617bc] - util: remove unnecessary template string (Ruben Bridgewater) #41082
[fa74d45e09] - util: mark cwd grey while inspecting errors (Ruben Bridgewater) #41082
[053368c3d0] - util: avoid inline access to Symbol.iterator (Kohei Ueno) #43683
[3959dffc7d] - util: fix TypeError of symbol in template literals (cola119) #42790
[053347ca55] - util: freeze kEnumerableProperty (LiviaMedeiros) #43390
[2cdae4332d] - util: add kEmptyObject to internal/util (LiviaMedeiros) #43159
[49cbed6ced] - v8: serialize BigInt64Array and BigUint64Array (Ben Noordhuis) #43571
[ca8da5f3f8] - vm: use kEmptyObject (LiviaMedeiros) #43159
[3ccf5acd23] - wasi: use WasmMemoryObject handle for perf (#43544) (snek) #43544
[4ff19daf54] - wasi: use kEmptyObject (LiviaMedeiros) #43159
[bbbc54f8d4] - wasi: remove unecessary null check (Michael Dawson) #42819
[51633a23c7] - worker: use kEmptyObject (LiviaMedeiros) #43159
[c4caf20ec3] - worker: fix heap snapshot crash on exit (Chengzhong Wu) #43123
[c583508324] - worker: fix stream racing with terminate (Keyhan Vakil) #42874
[293bab7684] - worker: add hasRef() to the handle object (Darshan Sen) #42756

Documentation commits
[1bd581678c] - doc: update email and mailmap for BethGriggs (Beth Griggs) #43985
[c37f90415b] - doc: inspector.close undefined in worker threads (Keyhan Vakil) #43867
[bd0e463d27] - doc: improve documentation for safe Promise statics alternatives (Antoine du Hamel) #43759
[3022958abd] - doc: recommend git-node-v8 (Keyhan Vakil) #43934
[d528c55c13] - doc: clarify subprocess.stdout/in/err property (Kohei Ueno) #43910
[067d69f051] - doc: fix typo in src/crypto/README.md (Jianru Lin) #43968
[3c85e0c88b] - doc: remind backporter about v8_embedder_string (Keyhan Vakil) #43924
[86fb313fe8] - doc: fix typo in http.md (Airing) #43933
[37cf3b9551] - doc: add F3n67u to collaborators (Feng Yu) #43953
[da6041c89f] - doc: mention Win 32-bit openssl build issue (RafaelGSS) #43853
[c6e2eaec2b] - doc: add security release specifics to releases.md (Beth Griggs) #43835
[7a44613819] - doc: add history info for global.performance (Antoine du Hamel) #43841
[1685332371] - doc: add platform-windows-arm to who to CC (Michael Dawson) #43808
[fcfb2c95c1] - doc: document ES2022's Error "cause" property (James Ide) #43830
[a0d055e945] - doc: add link to diagnostic tools (Rafael Gonzaga) #43736
[8c4cf710a5] - doc: update links to MDN page about dynamic imports (Jannis R) #43847
[302a134b83] - doc: deprecate coercion to integer in process.exit (Daeyeon Jeong) #43738
[2a410975c6] - doc: add MoLow to triagers (Moshe Atlow) #43799
[44291afca4] - doc: revert anachronistic 'node:' module require()s in API history notes (DeeDeeG) #43768
[97bda1fa57] - doc: clarify release process for new releasers (Rafael Gonzaga) #43739
[f7b8340efe] - doc: fix typo in ngtcp2 readme (Dan Castillo) #43767
[c6bdb5cb22] - doc: fix typo in errors.md (Kazuma Ohashi) #43677
[20fa30c871] - doc: add new useful V8 option (JialuZhang-intel) #42575
[2b498fe7f5] - doc: fix typo in util.parseArgs usage example (Michael Ficarra) #43332
[3244217e9a] - doc: improve test runner timeout docs (Tobias Nießen) #43836
[65699a2132] - doc: add code examples to node test runner (Wassim Chegham) #43359
[c7c769fe67] - doc: include last security release date (Rafael Gonzaga) #43774
[3cda9686bd] - doc: remove node-report from support tiers (RafaelGSS) #43737
[ae70ada8cb] - doc: update changelog-maker to the new flags (RafaelGSS) #43696
[f42d674225] - doc: remove extra 'in's (Colin Ihrig) #43705
[cfb236e6ba] - doc: add Geoffrey Booth to TSC (Rich Trott) #43706
[c941798e88] - doc: improve readability of dns.md (0xSanyam) #43694
[a8980b2468] - doc: add note regarding special case of 0 stat.size (Douglas Wilson) #43690
[26cd4e2ae6] - doc: fix default of duplex.allowHalfOpen (Vincent Weevers) #43665
[a8d1670ffa] - doc: improve description of --input-type (cola119) #43507
[50a1b26605] - doc: add daeyeon to triagers (Daeyeon Jeong) #43637
[ee10320c9e] - doc: remove appmetrics from tierlist (Tony Gorez) #43608
[352628244b] - doc: remove systemtap from tierlist (Tony Gorez) #43605
[407beb2bc6] - doc: add single executable application initiative (Michael Dawson) #43611
[e5a7b0ff7c] - doc: remove windows xperf from tierlist (Tony Gorez) #43607
[d514ee763f] - doc: remove lttng from tierlist (Tony Gorez) #43604
[8f475e6d00] - doc: remove dtrace from tierlist (Tony Gorez) #43606
[31f45288f5] - doc: promote 0x to tier 4 (Tony Gorez) #43609
[78bedcd158] - doc: include CVSS mention (Rafael Gonzaga) #43602
[c1ea44db51] - doc: fix icu-small example (Michael Dawson) #43591
[a649d0175d] - doc: add backport-open-vN.x step to backporting guide (LiviaMedeiros) #43590
[267e493448] - doc: move MylesBorins to TSC Emeritus (Myles Borins) #43524
[444c1a6dcd] - doc: add Juan as a security steward (Michael Dawson) #43512
[1da1722be8] - doc: update link to MDN page about dynamic imports (James Scott-Brown) #43530
[70ab660107] - doc: fix Visual Studio 2019 download link (Feng Yu) #43236
[23ec1a8727] - doc: update link of ICU data slicer (Feng Yu) #43483
[cda04013a0] - doc: update v8 doc link to v8.dev (Feng Yu) #43482
[982e99eb6c] - doc: add ESM version examples to events api doc (Feng Yu) #43226
[3d271f16b4] - doc: update default branch name in test/** (Luigi Pinca) #43445
[18789d5b4a] - doc: remove branch name mention in src/README.md (Feng Yu) #43442
[f2dfe9b708] - doc: update default branch name in Makefile (Feng Yu) #43441
[8d0bca586f] - doc: update main branch name in release guide (Richard Lau) #43437
[1945e9ba4a] - doc: update main branch name in onboarding.md (Feng Yu) #43443
[98b27e7f4d] - doc: fixup after rename of primary nodejs branch (Michael Dawson) #43453
[d5832e29b6] - doc: update main branch name in doc/contributing/* (Luigi Pinca) #43438
[3f1ec10a66] - doc: packages documentation updates for 12 EOL (Guy Bedford) #43375
[82dc48d36c] - doc: fix specifier example in esm.md (hiroki osame) #43351
[143186145c] - doc: add missing require to stream api doc (Feng Yu) #43237
[7feff014c4] - doc: use serial comma in worker_threads docs (Tobias Nießen) #43220
[c41bf4dc59] - doc: use serial comma in assert docs (Tobias Nießen) #43154
[b6469537e4] - doc: use consistent method symbol (Paolo Insogna) #42974
[a61b7fabc3] - doc: use serial comma in fs docs (Tobias Nießen) #43104
[14c8f46091] - doc: use serial comma in http docs (Tobias Nießen) #43026
[751f09eb28] - doc: fix examples in cluster.md (OneNail) #42889
[cc398a829b] - doc: add node: prefix for all core modules (Antoine du Hamel) #42752
[2922fbb9b2] - doc: clarify some default values in fs.md (LiviaMedeiros) #42892
[10e9868cbb] - doc: fix napi version for node_api_symbol_for (Danielle Adams) #42878
[3ccb5b4f3f] - doc: add initial doc on how to update cjs-module-lexer (Michael Dawson) #43255
[9515ca6f0a] - doc: clarify use of deps/icu-small (Michael Dawson) #43287
[7de20b518a] - doc: remove llnode from diag tierlist (Tony Gorez) #43289
[5b0ad85fde] - doc: remove ETW from diag tierlist (Tony Gorez) #43295
[5d2a4bd886] - doc: use serial comma in report docs (Tobias Nießen) #43394
[18c6d17f4f] - doc: add fspromises mkdir example (Tierney Cyren) #40843
[e44427954f] - doc: add F3n67u to triagers (Feng Yu) #43350
[fb1566101c] - doc: fix typo in globals.md (Daeyeon Jeong) #43365
[12e7a24b48] - doc: use serial comma in webstreams docs (Tobias Nießen) #43353
[f7bfa10a29] - doc: add undici to glossary (F3n67u) #43327
[961aeffffd] - doc: change glossary link in pull request guide to node's glossary doc (Feng Yu) #43318
[759861d0d4] - doc: improve description of TZ (Tobias Nießen) #43334
[288f6c0c04] - doc: use serial comma in net docs (Tobias Nießen) #43335
[3d47c6655b] - doc: make clear the result of comparison between Symbol.for (Kohei Ueno) #43309
[5029fc3beb] - doc: add CIGTM to glossary.md (Feng Yu) #43316
[7e4dab6ad9] - doc: use serial comma in pull request doc (Feng Yu) #43319
[f94d4ea73b] - doc: use serial comma in ESM docs (Tobias Nießen) #43322
[2f831105a3] - doc: promote cdt to tier 3 (Tony Gorez) #43290
[3e50a1a9e5] - doc: fix chromium document link in pull-requests.md (rikapo) #43265
[b20cd1b756] - doc: fix 404 link of BUILDING.md (Feng Yu) #43234
[b34fce7ad5] - doc: add src/crypto to CC list for nodejs/crypto (Tobias Nießen) #43286
[d50c5585b6] - doc: use serial comma in console docs (Tobias Nießen) #43257
[f453918086] - doc: use serial comma in errors docs (Tobias Nießen) #43242
[ed9e3b7007] - doc: add note regarding %Array.prototype.concat% in primordials.md (Antoine du Hamel) #43166
[1867462f15] - doc: document signal option for EventTarget#addEventListener (Antoine du Hamel) #43170
[ffee27216f] - doc: make minor adjustments (LiviaMedeiros) #43175
[1b97800c2c] - doc: use serial comma in dgram docs (Tobias Nießen) #43191
[a51bdf6f91] - doc: use serial comma in process docs (Tobias Nießen) #43179
[4b4ce99b63] - doc: improved parallel specification (mawaregetsuka) #42679
[c591a2964c] - doc: improve callback params for fs.mkdir (Daeyeon Jeong) #43016
[086f8f426a] - doc: fix errors in Performance hooks doc (OneNail) #43152
[fb18ade83b] - doc: use serial comma in dns docs (Tobias Nießen) #43145
[2071b57666] - doc: use ASCII apostrophes consistently (Tobias Nießen) #43114
[ae2ec73a69] - doc: add strategic initiative for shadow realm (Chengzhong Wu) #43037
[cccc45653a] - doc: use serial comma in events docs (Tobias Nießen) #43113
[6f3d6596b7] - doc: use serial comma in modules docs (Tobias Nießen) #43103
[0eb8c46db6] - doc: use serial comma in util docs (Tobias Nießen) #43063
[2a72a8ae66] - doc: remove git:// protocol, adjust nits in onboarding.md (LiviaMedeiros) #43045
[b559dfe177] - doc: add maintaining info for shared libary option (Michael Dawson) #42517
[9101aa89ce] - doc: add detail for how to update llhttp (Michael Dawson) #43028
[c6f87e7987] - doc: use serial comma in buffer docs (Tobias Nießen) #43048
[f0f3f1c1ec] - doc: add Rafael to the security steward for NearForm (Matteo Collina) #42966
[e913dbf9e7] - doc: mark some node-api functions as experimental (NickNaso) #42987
[65a5d49268] - doc: add LiviaMedeiros to collaborators (LiviaMedeiros) #43039
[5129127db5] - doc: add the preferred name for @himself65 (Himself65) #43024
[d0a95c97b5] - doc: rename N-API to Node-API in test/README.md (Daeyeon Jeong) #42946
[48f6d0b19b] - doc: use serial comma in tls docs (Tobias Nießen) #43001
[14569c7e9d] - doc: improve commit message example for releases (Juan José) #42954
[78a08ab4c0] - doc: use serial comma in cluster docs (Tobias Nießen) #42989
[42783cc205] - doc: fix errors in Web Streams doc (OneNail) #42862
[40f552c4d8] - doc: add additional step to security release process (Michael Dawson) #42916
[cbb20bea42] - doc: add section regarding property definition in primordials.md (Antoine du Hamel) #42921
[841b690359] - doc: reword "test directory" (LiviaMedeiros) #42817
[e1127b6154] - doc: remove legacy -J test.py option from BUILDING.md (LiviaMedeiros) #42817
[64919a59b5] - doc: http2.createServer options as optional (Daeyeon Jeong) #42832
[54ac0102c1] - doc: record March 2022 security release steward (Richard Lau) #42876
[ca117b2fb0] - doc: initial version of security-model-strategy.md (Michael Dawson) #42709
[e45861ff36] - doc: clarify guide on testing internal errors (LiviaMedeiros) #42813
[cf8620394d] - doc: fix markdown formatting in primordials.md (Tobias Nießen) #42877
[619414567f] - doc: add primordials guidelines (Antoine du Hamel) #38635
[92d7214eb2] - doc: elevate node-clinic diagnostic tier (RafaelGSS) #42802
[9ab641ee26] - doc: update WebAssembly strategy with Wasm Web API (Tobias Nießen) #42836
[2c447b4f30] - doc: order vm.Module linker arguments correctly (Simen Bekkhus) #42797
[2974f4042e] - doc: add @kuriyosh to collaborators (Yoshiki Kurihara) #42824
[da97b86a99] - doc: add maintaining-webassembly.md (Michael Dawson) #42660
[2178ccfd77] - doc: delete heapdump from diagnostic tooling support tiers (Tony Gorez) #42783
[b5cac3a4b7] - doc: fix example in assert.md (LiviaMedeiros) #42786
[6e8285a27b] - doc: fix version history for Loaders API (Antoine du Hamel) #42778
[b5a3c0499b] - doc: clarify core modules that can be loaded without a prefix (Antoine du Hamel) #42753
[41ad6fa020] - doc: consolidate use of multiple-byte units (Antoine du Hamel) #42587
[36c0e47bf5] - doc: add documentation for inherited methods (Luigi Pinca) #42691
[665fb3d269] - doc: close tag in n-api.md (LiviaMedeiros) #42751
[3c97384527] - doc: copyedit http.OutgoingMessage documentation (Luigi Pinca) #42733
[2f319825cc] - doc: improve fragment (:target) anchors behavior on HTML version (Antoine du Hamel) #42739
[1b88868adc] - doc: fix added: info for outgoingMessage.writable* (Luigi Pinca) #42737
[0238239de0] - doc: delete mdb_v8 from diagnostic tooling support tiers (Tony Gorez) #42626
[b4b2a0f8b7] - doc: document the 'close' and 'finish' events (Luigi Pinca) #42704
[d7265d8ae4] - doc: fix added: info for outgoingMessage.{,un}cork() (Luigi Pinca) #42711
[1b668d4be6] - doc: revise data imports and node: imports sections (Rich Trott) #42734
[b6c23b0312] - doc: fix ESM JSON/data URL import example (Rich Trott) #42728
[806711346d] - doc: improve doc for http.ServerResponse inheritance (Luigi Pinca) #42693
[7c881b218f] - doc: add RafaelGSS to collaborators (RafaelGSS) #42718
[654e71c29c] - doc: add NodeEdKeyGenParams to CryptoKey.algorithm (Tobias Nießen) #42629
[e566e5c3e4] - doc: fix the example for embedders (Momtchil Momtchev) #42671
[47f7b34831] - doc: change AES-GCM IV recommendation in WebCrypto (Tobias Nießen) #42611
[0a64b14343] - doc: fix added: info for some methods (Luigi Pinca) #42661
[0c9038020a] - doc: remove unneeded new in Buffer example (Niklas Mischkulnig) #42682
[06f7aeb2d2] - doc: mark worker.id as integer in cluster docs (Tobias Nießen) #42684
[1c579ecb78] - doc: recommend fh.createWriteStream for fsPromises methods (Antoine du Hamel) #42653
[3ba17b184d] - doc: fix outgoingMessage.removeHeader() signature (Luigi Pinca) #42652
[ba1f864159] - doc: mark tlsSocket.authorized as boolean property (Tobias Nießen) #42647
[85aeae2cd2] - doc: add missing punctuation in Web Streams doc (Tobias Nießen) #42672
[630cadbc3f] - doc: add missing article in session ticket section (Tobias Nießen) #42632
[b636996499] - doc: link to dynamic import function (Tobias Nießen) #42634
[70f61a57d0] - doc: add note about header values encoding (Paolo Insogna) #42624
[608d777cf8] - doc: add missing word in rootCertificates section (Tobias Nießen) #42633
[dbc993294f] - doc: fix brackets position (LiviaMedeiros) #42649
[a9e97fcc3f] - doc: copyedit corepack.md (Rich Trott) #42620
[6209e295bb] - doc: delete chakra tt from diagnostic tooling support tiers (Tony Gorez) #42627
[198f22d3da] - doc: simplify Http2Stream encoding text (Rich Trott) #42597
[9129f024dc] - doc: remove obsolete stream API selection text (Rich Trott) #42586
[88108da2c1] - doc: remove faulty justification for 128-bit AES (Tobias Nießen) #42578
[8072adf41e] - doc: fix documentation of FileHandle.prototype.appendFile (Antoine du Hamel) #42588
[300b9d15ea] - doc: change "OCSP Request" to "OCSP request" (Tobias Nießen) #42582
[5ee6b07a6b] - doc: aes webcrypto unwrap is not a node-specific extensions (Filip Skokan) #42561
[8850cf99f7] - doc: simplify recommendations in process.md (Rich Trott) #42556
[c361129d7b] - doc: clarify recommendations in stream.md (Rich Trott) #42555
[3bec01f1b9] - doc: simplify recommendation in webcrypto.md (Rich Trott) #42554
[9c307937b4] - doc: update DEP0102 text (Rich Trott) #42553
[73ce20162b] - doc: add introduction sentence for CJS (Antoine du Hamel) #42491
[5783865894] - doc: add @meixg to collaborators (Xuguang Mei) #42576
[a8a075b48b] - doc: consolidate CI sections (Rich Trott) #42534
[816cc5ed8a] - doc: remove extraneous comma (Rich Trott) #42548
[7476fe9431] - doc: guide towards x509.fingerprint256 (Tobias Nießen) #42516
[a6af500919] - doc: fix internal link in collaborator-guide.md (Daeyeon Jeong) #42551
[9a70c3b843] - doc: add suggestion for OpenSSL only sec releases (Michael Dawson) #42456
[28208311bf] - doc: fix comment text in async_hooks example (Rich Trott) #42499
[8fd7ab5d1f] - doc: add stability class to legacy status description (Daniel Roe) #42525
[37366d4ec4] - doc: suggest checkHost in checkServerIdentity docs (Tobias Nießen) #42495
[981d602d8c] - doc: update security release onboarding (Joe Sepi) #42333
[33b14263e9] - doc: remove comma splice in events.md (Rich Trott) #42484
[89e3cedb1a] - doc: clarify napi_finalize behavior (Alba Mendez) #42461
[40b61dbf1b] - doc: expand history for conditional exports changes in v12 (Greg Poole) #42339
[70f982a8fe] - doc: change comma-splice to two sentences (Rich Trott) #42455
[69a4daaa09] - doc: add link to section (Rich Trott) #42428
[7a7030af79] - doc: fix typo in async_context.md (Anupama Codippily) #42444
[3cf80254c7] - doc: add trace_gc to diagnostic tooling support document (Tony Gorez) #42346
[d9ae6c7829] - doc: make header smaller and dropdown click-driven when JS is on (Paolo Insogna) #42165
[01eb1dc8eb] - doc: standardize typography for _semantic versioning_ (Rich Trott) #42401
[d70f9cb2a3] - doc: unify import order in CCM example (Tobias Nießen) #42394
[165ee28853] - doc: update property name (Rich Trott) #42398
[b3a7a689f9] - doc: document breaking change in http.IncomingMessage 'close' event (Paolo Insogna) #42521
[7be07c719c] - doc,test: clarify timingSafeEqual semantics (Tobias Nießen) #43228
[6c00369083] - doc,test: clarify ChaCha20-Poly1305 usage (Tobias Nießen) #42323

Other commits
[3b10a94a95] - benchmark: fix output regression (Brian White) #43635
[f4c4113434] - benchmark: fix fork detection (Paolo Insogna) #43601
[04f651186d] - benchmark: forcefully close processes (Paolo Insogna) #43557
[986fb3e9ae] - benchmark: add node-error benchmark (RafaelGSS) #43077
[c36b02f666] - benchmark: fix misc/startup failure (Antoine du Hamel) #42746
[391e16235c] - build: make GitPod less noisy (Rich Trott) #43829
[5315d9741c] - build: add GitHub token permissions for workflows (Varun Sharma) #43743
[025248bfb0] - build: enable GitPod prebuilds (Rich Trott) #43698
[d9664c3040] - build: clarify missing clang-format tool (Tobias Nießen) #42762
[600505ee71] - build: update main branch name in GH workflow (Feng Yu) #43481
[ab55ff4a52] - build: add nonpm and nocorepack to vcbuild.bat (Darshan Sen) #43219
[cf68280548] - build: set ASAN workaround (Richard Lau) #43085
[c4f7e93964] - build: fix format-cpp (Darshan Sen) #42764
[dd97a9d1fa] - build: improve the format-cpp error message (Darshan Sen) #42765
[fc55a6798f] - build: run clang-format on CI (Darshan Sen) #42681
[46bc3c1af1] - build: consolidate JS and md linting GitHub Actions (Rich Trott) #42572
[dd7aa2d51f] - build: set stale action back to running nightly (Michael Dawson) #42549
[dda77aa63b] - build: bump actions/checkout (Eliaz Bobadilla) #42460
[0d93b425cf] - meta: update AUTHORS (Node.js GitHub Bot) #43966
[7a974457df] - meta: update node-api in label-pr-config (Daeyeon Jeong) #43794
[dff6068c9a] - meta: update AUTHORS (Node.js GitHub Bot) #43872
[80d562b051] - meta: use platform dropdown on flaky template (Rafael Gonzaga) #43855
[162c7cbb54] - meta: enable blank issues (Matteo Collina) #43775
[becfcb4d97] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #43770
[78bb3ab8e8] - meta: update AUTHORS (Node.js GitHub Bot) #43750
[b62574c4bd] - meta: update AUTHORS (Node.js GitHub Bot) #43660
[965367f586] - meta: update AUTHORS (Node.js GitHub Bot) #43573
[3760490c3a] - meta: update AUTHORS (Node.js GitHub Bot) #43480
[5c6021772f] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #43399
[a544a09662] - meta: update AUTHORS (Node.js GitHub Bot) #43387
[d0084daa8a] - meta: move one or more collaborators to emeritus (#43183) (Node.js GitHub Bot) #43183
[bb7b1dcb7a] - meta: update AUTHORS (Node.js GitHub Bot) #43312
[aa868efe15] - meta: update AUTHORS (Node.js GitHub Bot) #43231
[fb5d9b7fb5] - meta: add mailmap entry for legendecas (Chengzhong Wu) #43156
[06578724bd] - meta: add mailmap entry for npm team (Luigi Pinca) #43143
[bd6912def5] - meta: add mailmap entry for Morgan Roderick (Luigi Pinca) #43144
[3db25bfc63] - meta: add mailmap entry for ShogunPanda (Paolo Insogna) #43094
[0ce67e22fb] - meta: update .mailmap for recent README name change (Rich Trott) #43027
[74ed25ddf5] - meta: update AUTHORS (Node.js GitHub Bot) #43004
[72e9ca1a45] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #42937
[c351bf682a] - meta: update AUTHORS (Node.js GitHub Bot) #42848
[54d94d04ca] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #42769
[412b3313c9] - meta: update AUTHORS (Node.js GitHub Bot) #42760
[499d0100a6] - meta: move mmarchini to emeritus (mary marchini) #42750
[7f857d16b8] - meta: update AUTHORS (Node.js GitHub Bot) #42677
[0994001a51] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #42599
[ac1c0122e4] - meta: update .mailmap and AUTHORS (Rich Trott) #42602
[c7264b712b] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #42500
[bc4bd92bb8] - meta: update AUTHORS (Node.js GitHub Bot) #42585
[bcd8a55f37] - meta: update AUTHORS (Node.js GitHub Bot) #42488
[e6db8099f8] - test: refactor ESM tests to improve performance (Jacob Smith) #43784
[0046b9a478] - test: add test on worker process.exit in async modules (Chengzhong Wu) #43751
[3a6df62cfd] - test: update WPT encoding tests (Kohei Ueno) #43958
[ca747ccb7e] - test: remove test-whatwg-events-add-event-listener-options-once.js (Feng Yu) #43877
[e22041734a] - test: work scheduled in process.nextTick can keep the event loop alive (Andreu Botella) #43787
[2730a10a58] - test: simplify test-tls-set-secure-context (Tobias Nießen) #43878
[ec3c331c73] - test: fix test http upload timeout (theanarkh) #43935
[19397a0488] - test: simplify ReplStream.wait() (Tobias Nießen) #43857
[918448e239] - test: ensure NODE_EXTRA_CA_CERTS not set before tests (KrayzeeKev) #43858
[f4cd579ae1] - test: add check to test-fs-readfile-tostring-fail (Richard Lau) #43850
[e271e3403e] - test: use common.mustNotMutateObjectDeep() in immutability tests (LiviaMedeiros) #43196
[409158c919] - test: add common.mustNotMutateObjectDeep() (LiviaMedeiros) #43196
[75e6933a39] - test: fix coverity warning in test (Michael Dawson) #43631
[087fc8dddf] - test: mark test-http-client-response-timeout flaky (Tobias Nießen) #43792
[993bf7b671] - test: mark flaky tests on smartos (Feng Yu) #43596
[a3a2a9ede5] - test: mark test-http-server-request-timeouts-mixed flaky on macOS (F3n67u) #43597
[7cb71c0c7e] - test: skip test-net-connect-reset-until-connected on SmartOS (Filip Skokan) #43449
[b5eb55646f] - test: add test for short-option followed by its value (Kohei Ueno) #43358
[8bd2f4e2b8] - test: use assert.match() instead of assert(regex.test()) (Antoine du Hamel) #42803
[f99b0d02e7] - test: fix typo in test-stream-toArray (Tobias Nießen) #41634
[95a823dc26] - test: fix typo in file name (Antoine du Hamel) #43764
[c291233955] - test: improve lib/internal/test_runner/test.js coverage (MURAKAMI Masahiko) #42745
[a5e16203a3] - test: mark test-net-connect-reset-until-connected flaky on freebsd (Feng Yu) #43613
[42610cc8e2] - test: mark test-gc-http-client-timeout as flaky on arm (Chengzhong Wu) #43754
[cc5f17f128] - test: add test for profile command of node inspect (Kohei Ueno) #43058
[11df17c2f9] - test: use Object for tests variable in fs trace test (Feng Yu) #43585
[61ddd50c38] - test: improve code coverage for performance_entry (Kohei Ueno) #43434
[341799a0c3] - test: add test to ensure repl doesn't support --input-type (cola119) #43507
[9bc4ad0483] - test: fix flaky test-perf-hooks-histogram (Santiago Gimeno) #43567
[4d8daae236] - test: fix Buffer.from(ArrayBufferView) call (LiviaMedeiros) #43614
[8c7597373f] - test: mark test-worker-http2-stream-terminate flaky on all platforms (Finn Yu) #43620
[e8754f3557] - test: improve code coverage for SourceMap class (italo jose) #43285
[93de96f844] - test: refactor to top-level await (Meek Simbule) #43500
[f3e9fd7a00] - test: skip test-v8-serialize-leak on IBM i (Richard Lau) #43511
[65c3e901eb] - test: use unique file names in fs trace test (Ben Noordhuis) #43504
[7ce80d81ed] - test: allow EOVERFLOW errors in fs position tests (Richard Lau) #43510
[bf5adf37f3] - test: add WPT tests for dom/events (Daiki Nishikawa) #43151
[a5df207c2b] - test: replace gc(true) with gc({ type: 'minor' }) (Tobias Nießen) #43493
[222a6e94ed] - test: improve coverage for load hooks (Antoine du Hamel) #43374
[9c1fffc93e] - test: refactor to top-level await (Meek Simbule) #43366
[4ff1c32f44] - test: rename test-eventtarget-whatwg-*.js (Daeyeon Jeong) #43467
[68a138333b] - test: mark test-worker-http2-stream-terminate flaky on Windows (Darshan Sen) #43425
[6fcb349fda] - Revert "test: mark test_buffer/test_finalizer flaky" (Matteo Collina) #43418
[38336403d2] - test: make node-api/test_buffer/test_finalizer not flaky (Matteo Collina) #43418
[8e5e5a10c1] - test: reduce flakiness of test-fs-read-position-validation.mjs (LiviaMedeiros) #42999
[b750ff1452] - test: remove the legacy url parser function (Kohei Ueno) #42656
[01c9f5b2ae] - test: only skip slow tests on Raspberry Pi devices (Richard Lau) #42645
[d2a615f31d] - test: fix typos in test/parallel (Daeyeon Jeong) #42502
[147f99c42c] - test: improve code coverage for streams/duplexify (Erick Wendel) #41862
[339d2e1282] - test: remove unused argument in test-util-inspect.js (Colin Ihrig) #43395
[f49d66be2e] - test: mark test_buffer/test_finalizer flaky (Michael Dawson) #43414
[36f16728a5] - test: fix address in use error (Caleb Everett) #43199
[cd1c1d53e8] - test: fix common.mustNotCall error message (Antoine du Hamel) #42917
[b72b217dec] - test: convert then to async/await (Meek Simbule) #43292
[94f60ec0f3] - test: add BigInts to common.getArrayBufferViews() (LiviaMedeiros) #43235
[fa70c99564] - test: improve code coverage for inspector connection errors (Kohei Ueno) #42310
[43e55c6380] - test: use mustSucceed instead of mustCall with assert.ifError (MURAKAMI Masahiko) #43188
[79b6a8cc4a] - test: improve readline/emitKeypressEvents.js coverage (OneNail) #42908
[c37c8723b0] - test: fix dangerous .map in test/parallel/test-http-set-trailers.js (LiviaMedeiros) #43087
[c4d35b0941] - test: rename handlewrap.hasref tests (Daeyeon Jeong) #42754
[41028fb0d6] - test: improve observable ICU behaviour coverage (LiviaMedeiros) #42683
[53cbcf0202] - test: validate webstream encoder/decoder inspector (Yoshiki Kurihara) #42747
[fc6456ed54] - test: usemustSucceed instead of mustCall with assert.ifError (MURAKAMI Masahiko) #42806
[24c4f76873] - test: improve lib/internal/webstreams/readablestream.js coverage (MURAKAMI Masahiko) #42823
[eceb318796] - test: add test for position validation in fs.read() and fs.readSync() (LiviaMedeiros) #42837
[1e473de619] - test: add tests for extracting function name (Kohei Ueno) #42399
[4a68984fa6] - test: simplify test-gc-{http-client,net}-* (Luigi Pinca) #42782
[64097a4fdd] - test: check ecdsa psychic signature (Filip Skokan) #42863
[53fb735bfa] - test: fix port in net-perf_hooks (LiviaMedeiros) #42761
[3d9975e932] - test: skip test that cannot pass under --node-builtin-modules-path (Geoffrey Booth) #42834
[6e0c0768de] - test: fix calculations in test-worker-resource-limits (Joyee Cheung) #42702
[f67c53f778] - test: improve test coverage of internal/blob (Yoshiki Kurihara) #41513
[2db988a20e] - test: improve internal/url.js coverage (Yoshiki Kurihara) #42650
[a38c122685] - test: allow numeric string for lookupService test (Daeyeon Jeong) #42596
[11650df453] - test: remove an unnecessary undefined in wpt (Khaidi Chu) #41470
[faebca4459] - test: simplify test-http-write-callbacks.js (Tobias Nießen) #42628
[9e945439a5] - test: pass data into napi_create_external (Joyee Cheung) #42532
[a7b865ca8d] - test: improve FileHandle.prototype.write coverage (Antoine du Hamel) #42541
[82d5e57ac0] - test: add test for exception handlings in debugger (Kohei Ueno) #42327
[b51e5fe06f] - test: fix typo in common/wpt.js (Ikko Ashimine) #42567
[bc60c5d902] - test: add trace-gc flag test (Tony Gorez) #42471
[1641ff5db7] - test,fs: add fs.rm() tests for .git directories (Darshan Sen) #42410
[3e33e905a8] - tools: report unsafe string and regex primordials as lint errors (Antoine du Hamel) #43393
[1d09407840] - tools: add avoid-prototype-pollution lint rule (Antoine du Hamel) #43308
[e9b647a288] - tools: add more options to track flaky tests (Antoine du Hamel) #43954
[01a44348e0] - tools: add verbose flag to inactive TSC finder (Rich Trott) #43913
[420c9bb084] - tools: add support for using API key to vuln checking script (Facundo Tuesca) #43909
[7145125051] - tools: support versioned node shared libs on z/OS (alexcfyung) #42256
[ff20308475] - tools: update doc to [email protected] (Node.js GitHub Bot) #43870
[51643323ba] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43871
[b57758b710] - tools: update eslint to 8.20.0 (Node.js GitHub Bot) #43873
[5fd26da477] - tools: add script for vulnerability checking (Facundo Tuesca) #43362
[987efcb504] - tools: remove rpm build scripts (Ben Noordhuis) #43647
[4a2422ae38] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43749
[8a69cdaa65] - tools: refactor tools/license2rtf to ESM (Feng Yu) #43232
[d39fd4e5ce] - tools: update eslint to 8.19.0 (Node.js GitHub Bot) #43662
[d615f3b181] - tools: update lint-md-dependencies (Node.js GitHub Bot) #43572
[a5089c9b6d] - tools: fix CJS/ESM toggle on small screens (Antoine du Hamel) #43506
[aeffe5f956] - tools: update main branch name (Feng Yu) #43440
[d9a4a8519e] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43386
[29976a356b] - tools: update eslint to 8.18.0 (Node.js GitHub Bot) #43479
[2ceb19dbc2] - tools: fix create-or-update-pull-request-action hash on GHA (Antoine du Hamel) #43378
[ddea965f48] - tools: fix find-inactive actions (LiviaMedeiros) #43377
[7730f0cb81] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43313
[e6dbdb19b5] - tools: update eslint to 8.17.0 (Node.js GitHub Bot) #43314
[2bd60b1fad] - tools: use hashes instead of tags for external actions (#43284) (Antoine du Hamel) #43284
[ab45ba5f92] - tools: update codecov/codecov-action version (Antoine du Hamel) #43297
[276dff1523] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43261
[9c03ddb731] - tools: update clang-format 1.7.0 to 1.8.0 (Darshan Sen) #43241
[5a9047eb6b] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43230
[4f7c7d260b] - tools: refactor build-addons.js to ESM (Feng Yu) #43099
[4817b1ff1b] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43172
[c89512a5c7] - tools: update eslint to 8.16.0 (Node.js GitHub Bot) #43174
[3bb46f9cd9] - tools: refactor update-authors.js to ESM (Feng Yu) #43098
[3fa2c3ce85] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #43107
[4b82cb66ed] - tools: update eslint to 8.15.0 (Node.js GitHub Bot) #43005
[54e36f5883] - tools: refactor lint-sh.js to esm module (Feng Yu) #42942
[1e7d6bd99c] - tools: update lint-md-dependencies (Node.js GitHub Bot) #43003
[7b6ed2cec9] - tools: update lint-md-dependencies (Node.js GitHub Bot) #42932
[e8ef4f2b47] - tools: bump jsdoccomment from 0.22.1 to 0.29.0 (Rich Trott) #42857
[7a7491a8c2] - tools: update eslint to 8.14.0 (Node.js GitHub Bot) #42845
[a3d4579135] - tools: update doc to [email protected] (Node.js GitHub Bot) #42758
[f29a1a04ed] - tools: update lint-md-dependencies (Node.js GitHub Bot) #42759
[534369402c] - tools: lint osx shell scripts (LiviaMedeiros) #42712
[3370ef9c85] - tools: update clang-format 1.6.0 to 1.7.0 (Rich Trott) #42724
[ed41eb2b0d] - tools: update clang-format from 1.2.3 to 1.6.0 (Rich Trott) #42685
[9ba37645c3] - tools: update eslint to 8.13.0 (Node.js GitHub Bot) #42678
[348876e964] - tools: update gyp-next to v0.12.1 (Michaël Zasso) #42625
[ec5548b3aa] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #42584
[36ddc6102f] - tools: enable no-var ESLint rule for lib (Rich Trott) #42573
[282b449d90] - tools: fixed bug causing JSON format to be broken (mawaregetsuka) #41565
[3a2aa0a862] - tools: update GHA actions version (Antoine du Hamel) #42498
[a176b81f46] - tools: update eslint to 8.12.0 (Node.js GitHub Bot) #42489
[5ba38bb1b0] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #42487
[34386895f3] - tools: refloat 7 Node.js patches to cpplint.py (Rich Trott) #42416
[5849f7628d] - tools: bump cpplint to 1.6.0 (Rich Trott) #42416
[4c0ddffaeb] - tools: fix skip PR if CI is still running (Xuguang Mei) #42377
[31a738ffba] - tools: make update-undici script executable (Michaël Zasso) #42406
[b9ec3b4367] - tools,doc: add guards against prototype pollution when creating proxies (Antoine du Hamel) #43391
[54e7d0d723] - typings: fix os.cpus invalid return type (Himself65) #43006

Windows 32-bit Installer: https://nodejs.org/dist/v16.17.0/node-v16.17.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v16.17.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v16.17.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v16.17.0/node-v16.17.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v16.17.0/node-v16.17.0.tar.gz
Other release files: https://nodejs.org/dist/v16.17.0/
Documentation: https://nodejs.org/docs/v16.17.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

19d8bd771213d4f55b4aa5f661212f4bc5aeb4bd53928eb922af3a5538df75c7  node-v16.17.0-aix-ppc64.tar.gz
96eefac1e168ec1bf39c5ae1e7b2760522624adfbe2e0c92875cd33ef9a07792  node-v16.17.0-darwin-arm64.tar.gz
a3f73e1b63b1c624a5f057ffe989ac60839122c09ce1028ec84e77b8e2322e8a  node-v16.17.0-darwin-arm64.tar.xz
b85eaa537f9d60a68c704e23839db65b5a75f14b37d6855c5d4e31a6bcef26c6  node-v16.17.0-darwin-x64.tar.gz
0e9b7240b90694f384547280dc4704c9f49ff3201709bf74fd2711766533497c  node-v16.17.0-darwin-x64.tar.xz
70c73723492a27d2c448df39082845045a3fd346d2f7ea1aa42e4e55daceb6b2  node-v16.17.0-headers.tar.gz
d315efae866c859c8b9269e849bff31914247fff01a78285030369b0cf8ce910  node-v16.17.0-headers.tar.xz
0e83e93bd3658f4ae516b5f1f174190bd87aaae3d691eb91a8945eed04dc8491  node-v16.17.0-linux-arm64.tar.gz
a43100595e7960b9e8364bff5641e0956a9929feee2759e70cbb396a1d827b7c  node-v16.17.0-linux-arm64.tar.xz
916f0bb4f44dbef5b13ddb0fccd178871e1a3d1198cd4ad4a19464f69ef79198  node-v16.17.0-linux-armv7l.tar.gz
1dcbca56c0c44c3f3482176f73150b8ad15c71936724f8ca44328d6e51c790b3  node-v16.17.0-linux-armv7l.tar.xz
28f81b1b57eb4e050e67d1b095f274d5748c48eb1ac90064af80282606d79c2f  node-v16.17.0-linux-ppc64le.tar.gz
372b847f0d8d27a96e7d06054882d9bef18be2a0b2e90ae9662c20f063b5223a  node-v16.17.0-linux-ppc64le.tar.xz
3f67a969d4b42874b55ed881df8816e1dd6d0b96f6e7f175b63823110b671447  node-v16.17.0-linux-s390x.tar.gz
982b36beda88cd10cfe5ca3ef832fe6a3e3b605c39de0a04420cdeab31a39420  node-v16.17.0-linux-s390x.tar.xz
4827808e50b8ee42b4dadf056835287dac267b9cff56cea56e70843bf8cecb79  node-v16.17.0-linux-x64.tar.gz
f0867d7a17a4d0df7dbb7df9ac3f9126c2b58f75450647146749ef296b31b49b  node-v16.17.0-linux-x64.tar.xz
3b9f8b71ce66808ec530581bd59c2c1c2bf74ac2bc64249850fb84023614aac3  node-v16.17.0.pkg
2a2e6262739741f98ab81648a50891861dbf66f12413b93f1a97b4c71570611e  node-v16.17.0.tar.gz
1d28c285685e446985921bc963565ca9c0c5f4fda9755e489c06808ea9795645  node-v16.17.0.tar.xz
cec3fe26869f28c5e54fda6d97a4ed5a53a68f28cd9b17e78961cb723177235c  node-v16.17.0-win-x64.7z
c1a3be05342166cb9304d01da7ff8b23df6d4b16f9c98ae33b9b4fff79d8d0e2  node-v16.17.0-win-x64.zip
3b4ac1a62b3bc58d057b13ae237646ebfd609475766668611728aad0c3679af5  node-v16.17.0-win-x86.7z
ece8820f33e6a513bc035fc4be905aa8fcf4976ee6d1633c5d4ec2cafcfd9c64  node-v16.17.0-win-x86.zip
ff2ffaf555e11311b3381e85d660d870dfc28dbb78ae9fb7b472250b5b0dff4f  node-v16.17.0-x64.msi
4e8f5bb4a76aa7fb164b20362fa51b27f3113c7225f18123929df2d9b5eaa1aa  node-v16.17.0-x86.msi
66ea3b0d70938870e751ba3738407ea932ff6787b1adb0929d14668b9abd3677  win-x64/node.exe
2f459a64647db493da63c790ce368ad54f59f086d9f22f59c5018680420197b3  win-x64/node.lib
13192a9f004cb1ee8fe96dd2e2adbd3366434556e2348a16ea359acb84235ca4  win-x64/node_pdb.7z
24d853b3b7926724f513cebda842a3e36ba431371b038fdfa179a77a58ca8dcc  win-x64/node_pdb.zip
6e2ab243c7895f4bf76da4e30970c8284cbaf12951d5447596e57dd7d4935313  win-x86/node.exe
5018c3d42f3fbacbd06cb943b3f2696c8e67ca9bdf6864d0e263d6d6911dffd2  win-x86/node.lib
32574b4ffa0c89b7b30ea4c79cbcb3d9d403764980c3d0c43d62611f010856c3  win-x86/node_pdb.7z
c6613e784d97e2831d1cf69cc6cfa341deb11d766afed819adc42d9535def060  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCAAdFiEEj8yhP+8dDC6RAI4Jdw96mlrhVgAFAmL7eZQACgkQdw96mlrh
VgBbuA/+ILCSbqQIiVjE+yBzbOy3TcLEDX5VUQgiCxvPULnuy1Jkc15nH3BRkiB2
/jxZ3C2E/nGIbYZ/RXy4WZ+1ukLh+Sr4i6CmjiTHibWgw4bxD0gfaxenHLd/yoFg
FJeHEHEpQPHVp8AsbaWhoCg8TT7yy8eYUOSsbJ7+8yZgVsV6wV3NOoizNSUttIUQ
Q+B1SK6PW8AnsUbdmE3EkBGwOzihvrtvPNNFSLV/YP2BPAlFFbHMCXeyOmiQOpix
5rRfiOOSKKszOXY/aCiM/tnWEW70YvROwVlL8stzdth9XvvHSHREngiU/Somyxnl
O/gDmiJeT2gnNGuyWAHM4rSUTtgb1/5/m3fchSn6J/ksNFwDPq2FfGqjyANDMXjy
D+UjN9myxn2BkxXbPX3Ta/NpAjyiphHPo9rf4eMY03qLEZ6GdHTYGHMMH4XClonf
R6NLM5FmV/FiOlrex/jV798m1wxK6L0rlUnZ1qUGjqckAOtkfXN4ZvDHGrJjksMS
OqupCPfM8cU/wH9zJAnUxl6f13O5qfXF3rpSbicvF3wIOYtmdki+cIzlhGEeP+pB
IG3Q9v/uJpf6G+4517YA0TUOfGDi5gfZkOAp15eqWCAbobv44pgFSvz6o/a5F4iV
KOSXuvpt/1lqcBRAvMSvSkPy+ORMsPrm4mkkNlmFBnZifw8Uxr8=
=9BLA
-----END PGP SIGNATURE-----


      
