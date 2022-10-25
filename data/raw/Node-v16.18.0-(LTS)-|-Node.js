

        
          Node v16.18.0 (LTS)
          by Juan José, 2022-10-12
        

        Notable changes
[1cc050eaa8] - (SEMVER-MINOR) assert: add getCalls and reset to callTracker (Moshe Atlow) #44191
[e5c9975f11] - (SEMVER-MINOR) crypto: allow zero-length secret KeyObject (Filip Skokan) #44201
[317cd051ce] - (SEMVER-MINOR) crypto: allow zero-length IKM in HKDF and in webcrypto PBKDF2 (Filip Skokan) #44201
[f80bdc5ef3] - (SEMVER-MINOR) doc: deprecate modp1, modp2, and modp5 groups (Tobias Nießen) #44588
[8398e98b1b] - (SEMVER-MINOR) http: make idle http parser count configurable (theanarkh) #43974
[2cd2f56962] - (SEMVER-MINOR) http: throw error on content-length mismatch (sidwebworks) #44378
[6be761e8a9] - (SEMVER-MINOR) lib: add diagnostics channel for process and worker (theanarkh) #44045
[1400796cef] - (SEMVER-MINOR) net,tls: pass a valid socket on tlsClientError (Daeyeon Jeong) #44021
[092239a7f1] - (SEMVER-MINOR) net: add local family (theanarkh) #43975
[381e11e18e] - (SEMVER-MINOR) report: expose report public native apis (Chengzhong Wu) #44255
[2ba547aa5b] - (SEMVER-MINOR) src: expose environment RequestInterrupt api (Chengzhong Wu) #44362
[6ed3367155] - (SEMVER-MINOR) stream: add ReadableByteStream.tee() (Daeyeon Jeong) #44505
[0fbedac6ce] - (SEMVER-MINOR) test_runner: add before/after/each hooks (Moshe Atlow) #43730
[70563b53c5] - (SEMVER-MINOR) util: add maxArrayLength option to Set and Map (Kohei Ueno) #43576

More detailed information on each of the vulnerabilities can be found in September 22nd 2022 Security Releases blog post.
Commits
[1cc050eaa8] - (SEMVER-MINOR) assert: add getCalls and reset to callTracker (Moshe Atlow) #44191
[2e87cdd1e6] - benchmark: fix startup benchmark (Evan Lucas) #44727
[29c0f9ef30] - benchmark: add stream destroy benchmark (SindreXie) #44533
[f01bb58c1e] - bootstrap: update comments in bootstrap/node.js (Joyee Cheung) #44726
[db151e182f] - bootstrap: stop delaying instantiation of maps in per-context scripts (Darshan Sen) #42934
[f700074c57] - buffer: fix atob input validation (Austin Kelleher) #42662
[e10095a759] - build: update timezone-update.yml (Alex) #44717
[bec2ede687] - build: remove redundant entry in crypto (Jiawen Geng) #44604
[7b3a2c3353] - build: rewritten the Android build system (BuShe Pie) #44207
[e96bb14942] - build: add --libdir flag to configure (Stephen Gallagher) #44361
[2a4491b34d] - build: added NINJA env to customize ninja binary (Jeff Dickey) #44293
[aaad7a64b4] - build: enable pointer authentication for branch protection on arm64 (Jeremiah Gowdy) #43200
[041bb54143] - build: add workflow to label flaky-test platform (Rafael Gonzaga) #44042
[58d85c1109] - build: optimized and fixed building configuration to Android (BuShe) #44016
[5cd8b7bc8b] - build: allow test-internet on forks if not scheduled (Rich Trott) #44073
[9698be9347] - build: skip test-internet run on forks (Rich Trott) #44054
[25e6f48e4a] - child_process: remove lookup of undefined property (Colin Ihrig) #44766
[a3bdd07321] - cluster: fix cluster rr distribute error (theanarkh) #44202
[317cd051ce] - (SEMVER-MINOR) crypto: allow zero-length IKM in HKDF and in webcrypto PBKDF2 (Filip Skokan) #44201
[e5c9975f11] - (SEMVER-MINOR) crypto: allow zero-length secret KeyObject (Filip Skokan) #44201
[7e705d8d74] - crypto: fix webcrypto deriveBits validations (Filip Skokan) #44173
[7ad2a268b9] - crypto: fix webcrypto EC key namedCurve validation errors (Filip Skokan) #44172
[2c938d73ff] - crypto: fix webcrypto operation errors to be OperationError (Filip Skokan) #44171
[a6e2cb40a6] - crypto: fix webcrypto generateKey() AES key length validation error (Filip Skokan) #44170
[7e07cce24b] - crypto: use EVP_PKEY_CTX_set_dsa_paramgen_q_bits when available (David Benjamin) #44561
[1fc6394741] - crypto: restrict PBKDF2 args to signed int (Tobias Nießen) #44575
[9a52ee7577] - crypto: handle invalid prepareAsymmetricKey JWK inputs (Filip Skokan) #44475
[7100baee40] - crypto: use actual option name in error message (Tobias Nießen) #44455
[579e066c3a] - crypto: add digest name to INVALID_DIGEST errors (Tobias Nießen) #44468
[566d80f622] - crypto: improve RSA-PSS digest error messages (Tobias Nießen) #44307
[f717c1e06a] - debugger: decrease timeout used to wait for the port to be free (Joyee Cheung) #44359
[0f2fcaf771] - deps: update to ngtcp2 0.8.1 and nghttp3 0.7.0 (Tobias Nießen) #44622
[1a8aada69d] - deps: update corepack to 0.14.1 (Node.js GitHub Bot) #44704
[e4f18b4f34] - deps: update ngtcp2 update instructions (Tobias Nießen) #44619
[21b5ab1494] - deps: upgrade npm to 8.19.2 (npm team) #44632
[916b319e7a] - deps: update to uvwasi 0.0.13 (Colin Ihrig) #44524
[67cbbcc902] - deps: update corepack to 0.14.0 (Node.js GitHub Bot) #44509
[9f14dc1a8f] - deps: update Acorn to v8.8.0 (Michaël Zasso) #44437
[1811a6aaa8] - deps: update icu tzdata to 2022b (Matías Zúñiga) #44283
[0c4953cbd1] - deps: update undici to 5.9.1 (Node.js GitHub Bot) #44319
[8a921fea74] - deps: upgrade npm to 8.19.1 (npm team) #44486
[763a63c14b] - deps: update corepack to 0.13.0 (Node.js GitHub Bot) #44318
[fdb699c84a] - deps: upgrade npm to 8.18.0 (npm team) #44263
[2a44872f96] - deps: update corepack to 0.12.3 (Node.js GitHub Bot) #44229
[48967e4b34] - deps: upgrade npm to 8.17.0 (npm team) #44205
[0484122f71] - deps: update undici to 5.8.2 (Node.js GitHub Bot) #44187
[e404ac7eed] - deps: update undici to 5.8.1 (Node.js GitHub Bot) #44158
[9a5ee5e9e3] - deps: update corepack to 0.12.2 (Node.js GitHub Bot) #44159
[3657cb277b] - deps: remove unnecessary file (Brian White) #44133
[d66a807596] - deps: upgrade npm to 8.16.0 (npm team) #44119
[ec998be61c] - deps: upgrade npm to 8.15.1 (npm team) #44013
[e9e856ae95] - deps: upgrade base64 to dc6a41ce36e (Brian White) #44032
[8ea9a71b15] - deps,src: use SIMD for normal base64 encoding (Brian White) #39775
[969a12be4b] - doc: remove "currently" and comma splice from child_process.md (Rich Trott) #44789
[5e4a2e94a1] - doc: mention git node backport (RafaelGSS) #44764
[618c9c8260] - doc: ensure to revert node_version changes (Rafael Gonzaga) #44760
[e0fe11c189] - doc: fix description for napi_get_cb_info() in n-api.md (Daeyeon Jeong) #44761
[895719da65] - doc: fix v16.17.1 security release changelog (Ruy Adorno) #44759
[fe832a0647] - doc: update the deprecation for exit code to clarify its scope (Daeyeon Jeong) #44714
[3872abd9a6] - doc: update guidance for adding new modules (Michael Dawson) #44576
[f381a1e86a] - doc: add registry number for Electron 22 (Keeley Hammond) #44748
[8d3cb6c08a] - doc: include code examples for webstreams consumers (Lucas Santos) #44387
[9e83c00e0b] - doc: mention where to push security commits (RafaelGSS) #44691
[bc9f8d24ce] - doc: remove extra space on threadpool usage (Connor Burton) #44734
[3e38ba53cc] - doc: make legacy banner slightly less bright (Rich Trott) #44665
[0f88588f52] - doc: improve building doc for Windows Powershell (Brian Muenzenmeyer) #44625
[5ee0127540] - doc: maintain only one list of MODP groups (Tobias Nießen) #44644
[6881ecb0e2] - doc: add legendecas to TSC list (Michael Dawson) #44662
[3614f5ace3] - doc: remove comma in README.md (Taha-Chaudhry) #44599
[c9af43616c] - doc: use serial comma in report docs (Daeyeon Jeong) #44608
[ff9ef61646] - doc: use serial comma in stream docs (Daeyeon Jeong) #44609
[90eaae3ef1] - doc: remove empty line in YAML block (Claudio Wunder) #44617
[f80bdc5ef3] - (SEMVER-MINOR) doc: deprecate modp1, modp2, and modp5 groups (Tobias Nießen) #44588
[9fac6dd1c1] - doc: remove old OpenSSL ENGINE constants (Tobias Nießen) #44589
[53543c6d81] - doc: fix heading levels for test runner hooks (Fabian Meyer) #44603
[2084ad61a7] - doc: fix errors in http.md (Luigi Pinca) #44587
[cc55e84ddc] - doc: fix vm.Script createCachedData example (Chengzhong Wu) #44487
[8187f03834] - doc: mention how to get commit release (Rafael Gonzaga) #44572
[d068978933] - doc: fix link in process.md (Antoine du Hamel) #44594
[0747facb63] - doc: do not use weak MODP group in example (Tobias Nießen) #44585
[e26d95ef9a] - doc: remove ebpf from supported tooling list (Rafael Gonzaga) #44549
[9d24c7a8c7] - doc: emphasize that createCipher is never secure (Tobias Nießen) #44538
[6d881b8611] - doc: document attribute Script.cachedDataRejected (Chengzhong Wu) #44451
[d846e5bac5] - doc: move policy docs to the permissions scope (Rafael Gonzaga) #44222
[5c721a33c3] - doc: add performance note to --enable-source-maps docs (Saurabh Daware) #43817
[1998bc80b5] - doc: fix release guide example consistency (Ruy Adorno) #44385
[7b691729b1] - doc: note on release guide to update main branch (Ruy Adorno) #44384
[7ec097fa99] - doc: mention cherry-pick edge-case on release (RafaelGSS) #44408
[4a4025181c] - doc: fix spacing issue in --build-snapshot help text (Shohei YOSHIDA) #44435
[a5906a09dc] - doc: apply scroll-margin-top to h2, h3 elements (metonym) #44414
[0e99139df4] - doc: use serial comma in addons docs (Tobias Nießen) #44482
[8ea3e6f839] - doc: do not use "Returns:" for crypto.constants (Tobias Nießen) #44481
[a1dbe4bc79] - doc: add history for net.createServer() options (Luigi Pinca) #44326
[eb90d650d4] - doc: fix typo in test runner code examples (Moshe Atlow) #44351
[17c5b978a5] - doc: add daeyeon to collaborators (Daeyeon Jeong) #44355
[c1458063ee] - doc: fix style of n-api.md (theanarkh) #44377
[cf60c6bc74] - doc: add missing imports in events sample code (Brian Evans) #44337
[89e5ac9676] - doc: add missing parenthesis in TLSSocket section (Tobias Nießen) #44512
[5ac344b2a2] - doc: fix optionality of callback arg of checkPrime (Tobias Nießen) #44311
[87cc487e28] - doc: fix typo (Hana) #44262
[5978eb1ae8] - doc: add TypeScript execution requirements (Michael Dawson) #44030
[42948364e2] - doc: add cola119 to collaborators (cola119) #44248
[6196bcedd0] - doc: improved building doc for Android (BuShe) #44166
[afe6c87bb5] - doc: add MoLow to collaborators (Moshe Atlow) #44214
[82ff3dabc5] - doc: update tags in adding-new-napi-api.md (Chengzhong Wu) #44190
[16d6d45ee8] - doc: fix typo in diagnostics_channel (Evan Lucas) #44199
[ed1d0c9203] - doc: add Retry CI in collaborator guide (Livia Medeiros) #44130
[1022ece43f] - doc: remove unused code in call tracker example (Colin Ihrig) #44127
[0c95d45410] - doc: add theanarkh to collaborators (theanarkh) #44131
[97ad1a0f03] - doc: clarify tls.tlsSocket.getCipher().version (Adam Majer) #44086
[9e10ee70a3] - doc: update repository list in onboarding doc (Rich Trott) #44089
[3171d55ef8] - doc: add ErickWendel to collaborators (Erick Wendel) #44088
[c9c2114a75] - doc: update collaborator email (Ruy Adorno) #44044
[1f9246a24f] - doc: copyedit test.md (Antoine du Hamel) #44061
[76e9cf2a46] - doc: add kvakil to triagers (Keyhan Vakil) #43996
[5a34c575ad] - doc: clarify part of onboarding guide regarding adding to teams (Darshan Sen) #44024
[5d3b8ab2d6] - doc: fix code examples in crypto.md (Antoine du Hamel) #44053
[e59c095b23] - doc: claim ABI version for Electron 21 (Keeley Hammond) #44034
[88b0d406ac] - doc: remove old reference from crypto/README.md (Tobias Nießen) #44012
[58c97216ee] - doc: add missing env vars to man page (cola119) #43492
[c07159215d] - doc: list supported MODP groups explicitly (Tobias Nießen) #43986
[be2feec1f0] - doc: fix typo in packages.md (Dominic Saadi) #44005
[9f7a728168] - doc: fix typos in test.md (Antoine du Hamel) #43997
[21a29d4584] - doc: add missing test runner option (Moshe Atlow) #43989
[6758c63eba] - doc,crypto: cleanup removed pbkdf2 behaviours (Filip Skokan) #44733
[891c4e742f] - doc,inspector: document changes of inspector.close (Chengzhong Wu) #44628
[4308d95d1d] - doc,report: document special filenames (Chengzhong Wu) #44257
[89c837a48d] - doc,worker: document resourceLimits overrides (Keyhan Vakil) #43992
[8f6bd5a402] - doc,worker: deprecate --trace-atomics-wait (Keyhan Vakil) #44093
[9593c37984] - errors: refactor to use optional chaining (SindreXie) #44184
[7cead5968e] - esm: fix duplicated test (Geoffrey Booth) #44779
[5d33dfd787] - esm: do not bind loader hook functions (Antoine du Hamel) #44122
[ec7bf32350] - esm: move package config helpers (Geoffrey Booth) #43967
[42a91e36dd] - esm,loader: tidy ESMLoader internals (Jacob Smith) #44701
[d4e9384ccb] - events: use bitset to save memory (Basit Chonka) #43700
[14ec52b949] - fs: don't hard code name in validatePosition() (Colin Ihrig) #44767
[83cf979a0d] - fs: fix typo in mkdir example (SergeyTsukanov) #44791
[bbbb4460ee] - fs: remove unused option in fs.fstatSync() (Livia Medeiros) #44613
[bf217f8029] - fs: add encoding parameter to benchmarks (Yagiz Nizipli) #44278
[1308e68a16] - gyp: libnode for ios app embedding (chexiongsheng) #44210
[2cee039070] - http: disable chunked encoding when OBS fold is used (Paolo Insogna) #341
[2cd2f56962] - (SEMVER-MINOR) http: throw error on content-length mismatch (sidwebworks) #44378
[8398e98b1b] - (SEMVER-MINOR) http: make idle http parser count configurable (theanarkh) #43974
[fa6183fc7e] - http: add max for http keepalive (theanarkh) #44217
[2f87ba4e03] - http: trace http request / response (theanarkh) #44102
[5f406a3a53] - http: reuse socket only when it is drained (ywave620) #43902
[4e49d5d1b4] - inspector: expose inspector.close on workers (Chengzhong Wu) #44489
[c736927b0b] - inspector: prevent integer overflow in open() (Tobias Nießen) #44367
[a021f1974a] - lib: fix reference leak (falsandtru) #44499
[6be761e8a9] - (SEMVER-MINOR) lib: add diagnostics channel for process and worker (theanarkh) #44045
[ac8d2de3b0] - lib: reset RegExp statics before running user code (Antoine du Hamel) #43741
[4968ebfbe1] - lib: refactor validateInt32 and validateUint32 (mawaregetsuka) #43071
[acff743113] - lib: make validateObject less affected by prototype tampering (Antoine du Hamel) #42929
[59be5f89ca] - lib: use safe Promise alternatives when available (Antoine du Hamel) #43476
[9dad4b0d11] - lib: add diagnostics channel and perf hooks detail (Danielle Adams) #43984
[a99e2368ea] - lib: refactor to avoid prototype pollution (Antoine du Hamel) #43474
[121c54718d] - lib: fix diagnostics channel (theanarkh) #44154
[594d9436c3] - lib: pass env variables to child process on z/OS (alexcfyung) #42255
[9c656c89fc] - lib: add missing env vars to --help (cola119) #43492
[3aaa4109a0] - lib: add Promise methods to avoid-prototype-pollution lint rule (Antoine du Hamel) #43849
[debf7301aa] - lib,test: fix bug in InternalSocketAddress (Tobias Nießen) #44618
[c1d1ed5ae4] - meta: update AUTHORS (Node.js GitHub Bot) #44777
[fe91711ed5] - meta: add mailmap entry for dnlup (Rich Trott) #44716
[b9deb1e84d] - meta: update AUTHORS (Node.js GitHub Bot) #44705
[3564da1c94] - meta: move dnlup to emeriti (dnlup) #44667
[af5d49f186] - meta: update test_runner in label-pr-config (Shrujal Shah) #44615
[7ac9bafd10] - meta: update AUTHORS (Node.js GitHub Bot) #44591
[aa68a31804] - meta: update AUTHORS (Node.js GitHub Bot) #44511
[edb0851539] - meta: update AUTHORS (Node.js GitHub Bot) #44422
[4bdd4a3641] - meta: update AUTHORS (Node.js GitHub Bot) #44321
[dc5478ad12] - meta: update web streams in label-pr-config (Daeyeon Jeong) #44235
[d535190086] - meta: update AUTHORS (Node.js GitHub Bot) #44231
[24e3ad069d] - meta: update AUTHORS (Node.js GitHub Bot) #44161
[1924d897ad] - meta: add codeowner for src/node_snapshot* (Chengzhong Wu) #44113
[1988be9acf] - meta: update AUTHORS (Node.js GitHub Bot) #44065
[261e5acc6b] - meta: shorten PowerShell snippet for bug-report template (NicoNekoru) #44011
[1bb394e691] - module: open stat/readPackage to mutations (Maël Nison) #44537
[b665171911] - module: protect against prototype mutation (Antoine du Hamel) #44007
[092239a7f1] - (SEMVER-MINOR) net: add local family (theanarkh) #43975
[4e0710c3a3] - net: remove unused callback (theanarkh) #44204
[1400796cef] - (SEMVER-MINOR) net,tls: pass a valid socket on tlsClientError (Daeyeon Jeong) #44021
[adae66cbd4] - node-api: add deprecation code of uncaught exception (Chengzhong Wu) #44624
[f38987edcc] - node-api: avoid calling virtual methods in base's dtor (Chengzhong Wu) #44424
[5b5d95d312] - node-api: cleanup redundant static modifiers (Chengzhong Wu) #44301
[8f3e8bb1fd] - (SEMVER-MINOR) os: add machine method (theanarkh) #44416
[3cb28bdde0] - path: change basename() argument from ext to suffix (Rich Trott) #44774
[7c5ce59dba] - perf_hooks: fix gc elapsed time (theanarkh) #44058
[0e2c2064bb] - report: get stack trace with cross origin contexts (Chengzhong Wu) #44398
[5355a46840] - report: fix missing section javascriptHeap on OOMError (Chengzhong Wu) #44398
[381e11e18e] - (SEMVER-MINOR) report: expose report public native apis (Chengzhong Wu) #44255
[30cfe0a156] - report: print javascript stack on fatal error (Chengzhong Wu) #44242
[779761d914] - report: add queue info for udp (theanarkh) #44345
[ff34d48d70] - report: skip report if uncaught exception is handled (Chengzhong Wu) #44208
[3e8569cfbc] - src: remove ParseIP() in cares_wrap.cc (Tobias Nießen) #44771
[916f2c5783] - src: avoid using v8 on Isolate termination (Santiago Gimeno) #44669
[4f056b57e9] - src: remove <unistd.h> from node_os.cc (Tobias Nießen) #44668
[24172ca6fe] - src: avoid copy when creating Blob (Tobias Nießen) #44616
[eda1f4531a] - src: make ReqWrap weak (Rafael Gonzaga) #44074
[ea2957fe77] - src: make NearHeapLimitCallback() more robust (Joyee Cheung) #44581
[eaf2ffc23a] - src: dump isolate stats when process exits (daomingq) #44534
[49cf3459d1] - src: rename misleading arg in ClientHelloParser (Tobias Nießen) #44500
[2ba547aa5b] - (SEMVER-MINOR) src: expose environment RequestInterrupt api (Chengzhong Wu) #44362
[70662f4058] - src: fix cppgc incompatibility in v8 (Shelley Vohr) #43521
[91ef427d2d] - src: nest namespace report in namespace node (Chengzhong Wu) #44069
[e7d30b4b49] - src: use a typed array internally for process._exiting (Darshan Sen) #43883
[d76e7e4e84] - src: improve error handling in CloneSSLCerts (Tobias Nießen) #44410
[cae9c5d5c3] - src: fix incorrect comments in crypto (Tobias Nießen) #44470
[c0875d1f00] - src: avoid casting std::trunc(... / ...) to size_t (Tobias Nießen) #44467
[8f3ed25e08] - src: add error handling to uv_uptime call (Juan José Arboleda) #44386
[c7713f19de] - src: remove base64_select_table and base64_table (Tobias Nießen) #44425
[a3dc7e18ed] - src: fix uv_err_name memory leak (theanarkh) #44421
[a711080061] - src: make Endianness an enum class (Tobias Nießen) #44411
[aa80826651] - src: fix ssize_t error from nghttp2.h (Darshan Sen) #44393
[6b8ed279fd] - src: trace fs async api (theanarkh) #44057
[dd08d6cc57] - src: simplify and optimize GetOpenSSLVersion() (Tobias Nießen) #44395
[4c27d77e5c] - src: simplify ECDH::GetCurves() (Tobias Nießen) #44309
[a6ce1de833] - src: remove KeyObjectData::symmetric_key_len_ (Tobias Nießen) #44346
[f0d841fd7d] - src: fix multiple format string bugs (Tobias Nießen) #44314
[2f3502f345] - src: make minor improvements to SecureBuffer (Tobias Nießen) #44302
[525fbfd122] - src: use imported namespaces in node_contextify.cc (Juan José) #44299
[ac2edbcd8c] - src: refactor to avoid using a moved object (Tobias Nießen) #44269
[b186684b22] - src: extract common context embedder tag checks (Chengzhong Wu) #44258
[8195c8108c] - src: avoid copying BaseObjectPtrs in loop (Tobias Nießen) #44270
[c045faf1ea] - src: fix --heapsnapshot-near-heap-limit error hint (Chengzhong Wu) #44216
[4ee8ac3b6b] - src: prevent copying ArrayBufferViewContents (Keyhan Vakil) #44091
[8f5fd2f06c] - src: fix to use replacement character (Kohei Ueno) #43999
[78c846265f] - src: fix typo in src/README.md (Anna Henningsen) #44009
[ec1645b1f0] - src: fix regression that a source marker is lost (cola119) #43086
[0c01922ff7] - src: remove dead code in base64_encode (Tobias Nießen) #43979
[28911e21b6] - src,buffer: remove unused chars_written parameter (Keyhan Vakil) #44092
[37010cb862] - src,fs: refactor duplicated code in fs.readdir (Daeyeon Jeong) #43204
[1635503704] - src,test: fix typos (SADIK KUZU) #44110
[ffb1c85784] - stream: refactor use es2020 statement (SindreXie) #44533
[6ed3367155] - (SEMVER-MINOR) stream: add ReadableByteStream.tee() (Daeyeon Jeong) #44505
[14c7f4a290] - test: update WPT runner (Filip Skokan) #43455
[4368acd01a] - test: don't clobber RegExp.$_ on startup (Ben Noordhuis) #44864
[5854abc176] - test: use async/await in test-debugger-auto-resume (samyuktaprabhu) #44675
[a7666abe31] - test: migrated from Promise chains to Async/Await (Rathi N Das) #44674
[5bed2d1f46] - test: change promises to async/await in test-debugger-backtrace.js (Juliet Zhang) #44677
[f630881f9b] - test: use async/await in test-debugger-sb-before-load (Hope Olaidé) #44697
[fada3a2ce7] - test: add extra tests for basename with ext option (Connor Burton) #44772
[9386c8581c] - test: refactor to async/await (Divya Mohan) #44694
[af2aa5be45] - test: modify test-debugger-custom-port.js to use async-await (Priya Shastri) #44680
[e9e130925c] - test: update test-debugger-breakpoint-exists.js to use async/await (Archana Kamath) #44682
[510365a036] - test: use async/await in test-debugger-preserve-breaks (poorvitusam) #44696
[2baa3c3ce5] - test: use async/await in test-debugger-profile (surbhirjain) #44684
[ffc4fadf5e] - test: change the promises to async/await in test-debugger-exec-scope.js (Ankita Khiratkar) #44685
[8b8d18ab4e] - test: verify napi_remove_wrap with napi_delete_reference (Chengzhong Wu) #44754
[863361928e] - test: change promises to async/await (Madhulika Sharma) #44683
[2e3aa39c94] - test: use async/await in test-debugger-invalid-args (Nupur Chauhan) #44678
[095cb7eba1] - test: update test-debugger-low-level to use await/async (Meghana Ramesh) #44688
[2752d7c22a] - test: check that sysconf returns a positive value (Tobias Nießen) #44666
[fc1edaf0d7] - test: change promise to async/await in debugger-watcher (“Pooja) #44687
[aae8ff6ace] - test: fix test-performance-measure (smitley) #44637
[f13e06ab85] - test: improve lib/readline.js coverage (MURAKAMI Masahiko) #42686
[a46dd370d7] - test: fix test-repl not validating leaked globals properly (Antoine du Hamel) #44640
[31f809acca] - test: ignore stale process cleanup failures on Windows (Joyee Cheung) #44480
[370b0ec5a1] - test: use python3 instead of python (Luigi Pinca) #44545
[88dfd50079] - test: fix DebugSymbolsTest.ReqWrapList on PPC64LE (Daniel Bevenius) #44341
[371804752a] - test: add more cases for parse-encoding (Tony Gorez) #44427
[0c76e01876] - test: split report OOM tests (Joyee Cheung) #44389
[5af3a5d37e] - test: avoid race in file write stream handle tests (Joyee Cheung) #44380
[edb3335ff2] - test: deflake child process exec timeout tests (Joyee Cheung) #44390
[c3429ab2e3] - test: make the vm timeout escape tests more lenient (Joyee Cheung) #44433
[b5901a0c26] - test: split heap prof tests (Joyee Cheung) #44388
[a139f5d4e0] - test: fix multiple incorrect mustNotCall() uses (Tobias Nießen) #44022
[6990833a4c] - test: raise sleep times in child process tests (Joyee Cheung) #44375
[b2b9de98a2] - test: remove duplicate test (Luigi Pinca) #44313
[c397bb93ad] - test: make tmpdir.js importable from esm (Geoffrey Booth) #44322
[03b8cb8c4c] - test: deflake test-diagnostics-channel-net (Keyhan Vakil) #44144
[73cd9dd860] - test: add coverage for invalid RSA-PSS digests (Tobias Nießen) #44271
[003ab59fcc] - test: move "errors" test to "parallel" (Michaël Zasso) #44233
[4485adeaeb] - test: mark connection leak test flaky on IBM i (Richard Lau) #44215
[8725a87fd9] - test: use mustSucceed instead of mustCall with assert.ifError (MURAKAMI Masahiko) #44196
[41ea42bd82] - test: update hr-time web platform tests (Yagiz Nizipli) #44100
[dd4db8e724] - test: update console web platform tests (Yagiz Nizipli) #44100
[940e31784e] - test: move tests with many workers to sequential (Keyhan Vakil) #44139
[03c0819dd9] - test: deflake gc-http-client tests by restricting number of requests (Nick Sia) #44146
[3d0a3fe246] - test: move test-vm-break-on-sigint to sequential (Keyhan Vakil) #44140
[4cfa9bac90] - test: remove test-http-client-response-timeout flaky designation (Luigi Pinca) #44145
[2f036c857e] - test: s390x z15 accelerated zlib fixes (Adam Majer) #44117
[5ed4f431cf] - test: tune down parallelism for some flaky tests (Keyhan Vakil) #44090
[ec7b932945] - test: fix internet/test-inspector-help-page (Daeyeon Jeong) #44025
[dff6615bbe] - test: remove test-gc-http-client-timeout from flaky list (Feng Yu) #43971
[6c3228361b] - test: reduce loop times for preventing test from timeout (theanarkh) #43981
[a33daadc41] - test: fix test-cluster-concurrent-disconnect (Daeyeon Jeong) #43961
[e009a35d6e] - test: change misleading variable name (Tobias Nießen) #43990
[72fb0133f5] - test: use common.mustNotMutateObjectDeep() in fs tests (LiviaMedeiros) #43819
[4ebb3ef508] - test,crypto: update WebCryptoAPI WPT (Filip Skokan) #44223
[9a469bef2c] - test_runner: include stack of uncaught exceptions (Moshe Atlow) #44614
[56dc4b3848] - test_runner: fix test runner hooks failure stack (Moshe Atlow) #44284
[cefb0586d8] - test_runner: refactor to use more primordials (Antoine du Hamel) #44062
[64b07a9d14] - test_runner: verbous error when entire test tree is canceled (Moshe Atlow) #44060
[bfdee2597a] - test_runner: empty pending tests queue post running (Moshe Atlow) #44059
[0fbedac6ce] - (SEMVER-MINOR) test_runner: add before/after/each hooks (Moshe Atlow) #43730
[6ad7a86af6] - test_runner: fix top level describe queuing (Moshe Atlow) #43998
[a2881b7a85] - test_runner: graceful termination on --test only (Moshe Atlow) #43977
[72a8faa087] - test_runner: validate concurrency option (Antoine du Hamel) #43976
[8118fc2980] - tls: fix out-of-bounds read in ClientHelloParser (Tobias Nießen) #44580
[b53ea08d7b] - tls: remove SecureContext setFreeListLength (Tobias Nießen) #44300
[c35a0713b0] - tls: use OpenSSL constant for client random size (Tobias Nießen) #44305
[e4b4b370a1] - tls: use logical OR operator (Mohammed Keyvanzadeh) #44236
[18e1766346] - tools: increase timeout of running WPT (Joyee Cheung) #44574
[006d7f1f2a] - tools: refactor deprecated format in no-unescaped-regexp-dot (Madhuri) #44763
[c6289d632a] - tools: update eslint-check.js to object style (andiemontoyeah) #44706
[b06a78e85d] - tools: update eslint to 8.24.0 (Node.js GitHub Bot) #44778
[ce3397223b] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44776
[1079c8099d] - tools: add update-llhttp.sh (Paolo Insogna) #44652
[0b3f49c749] - tools: fix typo in update-nghttp2.sh (Luigi Pinca) #44664
[d190e716ad] - tools: add timezone update workflow (Lenvin Gonsalves) #43988
[b6c232f288] - tools: update eslint to 8.23.1 (Node.js GitHub Bot) #44639
[2c0d9ffb65] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #44638
[f05ce2bff5] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #44590
[657fa792f4] - tools: increase timeout of running WPT (Joyee Cheung) #44574
[602ecaa42f] - tools: fix shebang to use python3 by default (Himself65) #44531
[bad8ecc27f] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44510
[255023f80a] - tools: don't use f-strings in test.py (Santiago Gimeno) #44407
[b3629daad7] - tools: update doc to [email protected] (Node.js GitHub Bot) #44370
[2891d9fd0a] - tools: update eslint to 8.23.0 (Node.js GitHub Bot) #44419
[0bf57df711] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44320
[9391ebdc0d] - tools: update ESLint to 8.22.0 (Luigi Pinca) #44243
[df49c426f6] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44244
[e42227ad3e] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44230
[1b6d294e78] - tools: update eslint to 8.21.0 (Node.js GitHub Bot) #44162
[f3dcaaf087] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #44160
[5d5971cda7] - tools: update undici CPE in vuln checking script (Facundo Tuesca) #44128
[606b0a08a8] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44064
[8a8c7cf6b5] - tools: add verbose flag to find-inactive-collaborators (Rich Trott) #43964
[cb6b57f777] - trace_events: add example (theanarkh) #43253
[be863b7a97] - tty: fix TypeError when stream is closed (Antoine du Hamel) #43803
[a08cdead0b] - typings: add JSDoc for internal/validators (Yagiz Nizipli) #44181
[a6a655de35] - util: increase robustness with primordials (Jordan Harband) #41212
[70563b53c5] - (SEMVER-MINOR) util: add maxArrayLength option to Set and Map (Kohei Ueno) #43576
[0beedb7f1c] - v8: add setHeapSnapshotNearHeapLimit (theanarkh) #44420
[8d259e6086] - win: fix fs.realpath.native for long paths (StefanStojanovic) #44536

Windows 32-bit Installer: https://nodejs.org/dist/v16.18.0/node-v16.18.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v16.18.0/node-v16.18.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v16.18.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v16.18.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v16.18.0/node-v16.18.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v16.18.0/node-v16.18.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v16.18.0/node-v16.18.0.tar.gz
Other release files: https://nodejs.org/dist/v16.18.0/
Documentation: https://nodejs.org/docs/v16.18.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

b7ee0afbd7b091cdff83fff76e6159a63307361599d8b0f68c767bcdf5932462  node-v16.18.0-aix-ppc64.tar.gz
8ceee891d0171381520e9017326589a9a616d6be2689493304970290d9b6e3b2  node-v16.18.0-darwin-arm64.tar.gz
cc0c09411bebe1e3e29378ade031cdf4d18e8a14d2ae8bd0d49b0338ed0be39a  node-v16.18.0-darwin-arm64.tar.xz
bd1476e95856879710026a344572c1b77add48da0f2d15bda48513d0b2667ed5  node-v16.18.0-darwin-x64.tar.gz
4e6f13c4d7123d374f1103f595ac67040a40e21f6aaa0a6e3d402b3522ce8f90  node-v16.18.0-darwin-x64.tar.xz
3e7f7f0844c4ac62fc8af474886ff04d0e07d21148ef5db29defdc5ff2795cc5  node-v16.18.0-headers.tar.gz
242542bc1053e5f192f3f26dc592b02bdea44b00bb09237788000c6dd9abb89a  node-v16.18.0-headers.tar.xz
7d495b6e26d26dd3dba64b567383f843f3d6211810182a22973fb83c32b5920b  node-v16.18.0-linux-arm64.tar.gz
847feec061b0323bad089e9163d5ad6538d2029585089cb379763f848b960170  node-v16.18.0-linux-arm64.tar.xz
633f69ef8343e4e63fbc25fa93302dcc0e5c1d9231f673d16d1a6950acb6913f  node-v16.18.0-linux-armv7l.tar.gz
770d4d40a9d650b8063833c8bd5c50a2682dbe6cf70a708d4e1f6482f6688414  node-v16.18.0-linux-armv7l.tar.xz
7ede6631ed95fe539309859d0f72e100f6549f2f9706dcafbc5e3c9a77ff0659  node-v16.18.0-linux-ppc64le.tar.gz
af9c60484dd85b7fba5d476ac51920c650ea4207ed35c2b326932381cf53fa32  node-v16.18.0-linux-ppc64le.tar.xz
eb8fce60d402f9f8b48c6378505bba00f2bea96e3d1ea82e57d0debe26e8e605  node-v16.18.0-linux-s390x.tar.gz
761b97fecca500482cd1cfe47af6e47224ca33866e974f663dfb388bf0d24dfa  node-v16.18.0-linux-s390x.tar.xz
faca6476cb5b41aa995370fd856d16fcfbbef5c18718a6fa44cc1bae4140849d  node-v16.18.0-linux-x64.tar.gz
a50dd97f8deb363c61d7026e5f0abc0f140916d7fcabcc549e9444c1f5c97f03  node-v16.18.0-linux-x64.tar.xz
87d093539330b8c434a238bc7159075d79a815aa74bfc239eead863f557b5aa8  node-v16.18.0.pkg
276c8a469bd4013c5842ee4166fb9b0087e5ee252a7c932d97e274b77ba73e70  node-v16.18.0.tar.gz
fcfe6ad2340f229061d3e81a94df167fe3f77e01712dedc0144a0e7d58e2c69b  node-v16.18.0.tar.xz
81b972f6f773fcf5297e6eb604d279ff8b76b5d6ea4e2cfab101de39f8e968b6  node-v16.18.0-win-x64.7z
b5dc231944db59701e8c299ad309821d5dd99408e2e39d4faa0f7fafc85f733a  node-v16.18.0-win-x64.zip
25caf14762fc76251e826562e7111baf7adaef268a618c0c87eadb26fe93eeb9  node-v16.18.0-win-x86.7z
d5d072b71e97fc843eebc830262bd76949188b91d059d91eba816e7206c5cbf1  node-v16.18.0-win-x86.zip
c9d61a2e78bd836b02cba87adebcb043aa27d1a8e4b2fda0ba604ad180eb50bf  node-v16.18.0-x64.msi
d80be5bb62d00fb68b7158da44fb1e4af829223ed526c8f33db3f29d5e47db2d  node-v16.18.0-x86.msi
cc1791332d04903a9894238f471ffc4c03be7d55aa25cc94eb9a169a59e4c384  win-x64/node.exe
d14ef62b2296ba6f9c58ee3372d7fa03ff779d7a9ad5b83c27e940893a80196f  win-x64/node.lib
4941a488d298b8f00aa251b266e4295a3b975e337dd3eb4dbcbe670f3d858e9e  win-x64/node_pdb.7z
b7dffdd3518a8f81fafae1a8def3d220046fb75bac896738b4f41a82f555e420  win-x64/node_pdb.zip
70954db61797d4d995d21dcced2d7e0169123143e97a12160aed2577ff8392ba  win-x86/node.exe
061a1774a4ad6e6589989f2e88110c3a5d6e3495d58d45233073114138e81763  win-x86/node.lib
cd9e0ea091b0e8087cd9022f68cd1139902d08bac2923bdf9bdace2fa74544e1  win-x86/node_pdb.7z
329b8606ead23ee8ee08cd869afb313e30657a85e8b52010d453e2050d5c9c89  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCAAdFiEEYfxoHfuSoHnxaF53lz8pVZTsRokFAmNG08wACgkQlz8pVZTs
Romy7Q//VfrNRAA5XGHI8mdN89MlXqjg6MLqUglxH+xPHTutM6shtcJFEpBhgwN0
PUeRF0+pxzeyYixdKWQpJXwKT7LhaJEMkfiNGGLepCZTSQuBcSKjHhQc+NGjguLF
THkhqm229plr17I4iKPar09k/yMzEGKvD0od9FLYOFeT6xgJsnJuAvh2Kw5fxLxB
kj0lmjdKxbY+4s2GecgUYDtlGia2QtS70MfBHnCL0XD7GUmM5Zb6UOjtegrWnaaJ
I67p+TcT7tuzHYs23CDdj0pdRkv2Bzpl3YxvQEPD9vqWxAFIXBSFUP/QEIrVM55I
u44FOVrqWU+vK/Igx1tN/jlqmQNIBRNuXhArts16yH+lGtP5H+duI+DKrzmaHJKy
3RhPgzczpNAKzGAzmE+p5LZYvEpPbp/mTkU2cIEvnX/waNdbEfl5/8OVDW9E93gN
IfcPU3SLiNFiPYw/Sm4N5OlWkTes0iqhDb/wzwiwlXBcGTRcU5kYKkfn6Rniq5Jv
E1DLctWhrHtnAPY17vHj3QYvVJuiLsbTWowFu0LdvbEIPuOWJ9oU6UTN3NiKlou4
yFSyARQVM/uXjRAlsBntPkIUaF4uzvhJqXHdc20aTj5UY5eHmatYw04AySZ50bL/
szMh0yG+sYcEH6agIX30zzDNuniUn/Kh6G83IRBDykOqe2fHoBM=
=aqlX
-----END PGP SIGNATURE-----


      
