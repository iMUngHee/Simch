---
id: 112
title: Node-v18.10.0-(Current)-|-Node.js
date: 'Oct 25 2022'
tags: ["node","news"]
metaTags: ["node","news"]
cover_image: https://velog.velcdn.com/images/mayinjanuary/post/e1ff9d4e-541f-418f-b411-4ab9f39aee16/nodejs.png
description: ''
---


        
          Node v18.10.0 (Current)
          by Rafael Gonzaga, 2022-09-28
        

        Notable changes
doc:
(SEMVER-MINOR) deprecate modp1, modp2, and modp5 groups (Tobias Nießen) #44588
add legendecas to TSC list (Michael Dawson) #44662
move policy docs to the permissions scope (Rafael Gonzaga) #44222


gyp:
libnode for ios app embedding (chexiongsheng) #44210


http:
(SEMVER-MINOR) throw error on content-length mismatch (sidwebworks) #44588


stream:
(SEMVER-MINOR) add ReadableByteStream.tee() (Daeyeon Jeong) #44505



Commits
[f497368679] - benchmark: fix startup benchmark (Evan Lucas) #44727
[0c9a94684e] - benchmark: add stream destroy benchmark (SindreXie) #44533
[9c5c1459a8] - bootstrap: clean up inspector console methods during serialization (Joyee Cheung) #44279
[19f67dba8a] - bootstrap: remove unused global parameter in per-context scripts (Joyee Cheung) #44472
[9da11426f6] - build: remove redundant entry in crypto (Jiawen Geng) #44604
[70898b4e67] - build: rewritten the Android build system (BuShe Pie) #44207
[a733f7faac] - Revert "build: go faster, drop -fno-omit-frame-pointer" (Ben Noordhuis) #44566
[1315a83333] - build: fix bad upstream merge (Stephen Gallagher) #44642
[993bd9b134] - crypto: restrict PBKDF2 args to signed int (Tobias Nießen) #44575
[ca5fb67b4e] - deps: update to ngtcp2 0.8.1 and nghttp3 0.7.0 (Tobias Nießen) #44622
[8da1d6ebc4] - deps: update corepack to 0.14.1 (Node.js GitHub Bot) #44704
[d36c4a3088] - deps: update ngtcp2 update instructions (Tobias Nießen) #44619
[7129106aa0] - deps: upgrade npm to 8.19.2 (npm team) #44632
[3cc8f4bb56] - deps: update to uvwasi 0.0.13 (Colin Ihrig) #44524
[4686579d4b] - dns: remove unnecessary parameter from validateOneOf (Yagiz Nizipli) #44635
[729dd95f1f] - dns: refactor default resolver (Joyee Cheung) #44541
[6dc038262a] - doc: mention git node backport (RafaelGSS) #44764
[fd971f5176] - doc: ensure to revert node_version changes (Rafael Gonzaga) #44760
[f274b08f8e] - doc: fix description for napi_get_cb_info() in n-api.md (Daeyeon Jeong) #44761
[2502f2353d] - doc: update the deprecation for exit code to clarify its scope (Daeyeon Jeong) #44714
[064543d0ae] - doc: update guidance for adding new modules (Michael Dawson) #44576
[33a2f17534] - doc: add registry number for Electron 22 (Keeley Hammond) #44748
[10a0d75c26] - doc: include code examples for webstreams consumers (Lucas Santos) #44387
[4dbe4a010c] - doc: mention where to push security commits (RafaelGSS) #44691
[82cb8151ad] - doc: remove extra space on threadpool usage (Connor Burton) #44734
[6ef9af2748] - doc: make legacy banner slightly less bright (Rich Trott) #44665
[b209c83e66] - doc: improve building doc for Windows Powershell (Brian Muenzenmeyer) #44625
[05b17e9250] - doc: maintain only one list of MODP groups (Tobias Nießen) #44644
[ec1cbdb69b] - doc: add legendecas to TSC list (Michael Dawson) #44662
[9341fb4446] - doc: remove comma in README.md (Taha-Chaudhry) #44599
[3dabb44dda] - doc: use serial comma in report docs (Daeyeon Jeong) #44608
[226d90a95a] - doc: use serial comma in stream docs (Daeyeon Jeong) #44609
[3f710fa636] - doc: remove empty line in YAML block (Claudio Wunder) #44617
[4ad1b0abc3] - (SEMVER-MINOR) doc: deprecate modp1, modp2, and modp5 groups (Tobias Nießen) #44588
[2d92610525] - doc: remove old OpenSSL ENGINE constants (Tobias Nießen) #44589
[03705639c4] - doc: fix heading levels for test runner hooks (Fabian Meyer) #44603
[6c557346a7] - doc: fix errors in http.md (Luigi Pinca) #44587
[48d944b71c] - doc: fix vm.Script createCachedData example (Chengzhong Wu) #44487
[2813323120] - doc: mention how to get commit release (Rafael Gonzaga) #44572
[ea7b44d474] - doc: fix link in process.md (Antoine du Hamel) #44594
[39b65d2fb7] - doc: do not use weak MODP group in example (Tobias Nießen) #44585
[f5549afd90] - doc: remove ebpf from supported tooling list (Rafael Gonzaga) #44549
[a3360b1f4f] - doc: emphasize that createCipher is never secure (Tobias Nießen) #44538
[4e6f7862ba] - doc: document attribute Script.cachedDataRejected (Chengzhong Wu) #44451
[01e584ecab] - doc: move policy docs to the permissions scope (Rafael Gonzaga) #44222
[57dac53c22] - doc,crypto: cleanup removed pbkdf2 behaviours (Filip Skokan) #44733
[c209bd6fb9] - doc,inspector: document changes of inspector.close (Chengzhong Wu) #44628
[9b3b7d6978] - esm,loader: tidy ESMLoader internals (Jacob Smith) #44701
[daf63d2fa3] - fs: fix typo in mkdir example (SergeyTsukanov) #44791
[85ab2f857f] - fs: remove unused option in fs.fstatSync() (Livia Medeiros) #44613
[a6091f5496] - gyp: libnode for ios app embedding (chexiongsheng) #44210
[f158656e4c] - (SEMVER-MINOR) http: throw error on content-length mismatch (sidwebworks) #44378
[1b160517f5] - inspector: expose inspector.close on workers (Chengzhong Wu) #44489
[a2eb55a2c9] - lib: don't match sourceMappingURL in strings (Alan Agius) #44658
[2baf532518] - lib: fix reference leak (falsandtru) #44499
[d8d34ae6bc] - lib: reset RegExp statics before running user code (Antoine du Hamel) #44247
[eb3635184b] - lib,test: fix bug in InternalSocketAddress (Tobias Nießen) #44618
[74dc4d198f] - meta: update AUTHORS (Node.js GitHub Bot) #44777
[97d2ed7296] - meta: add mailmap entry for dnlup (Rich Trott) #44716
[35fbd2cc14] - meta: update AUTHORS (Node.js GitHub Bot) #44705
[c5c1bc40a2] - meta: move dnlup to emeriti (dnlup) #44667
[c62dfe0427] - meta: update test_runner in label-pr-config (Shrujal Shah) #44615
[fe56efd0bc] - meta: update AUTHORS (Node.js GitHub Bot) #44591
[4436ffb536] - module: open stat/readPackage to mutations (Maël Nison) #44537
[f8ec946c82] - module: exports & imports map invalid slash deprecation (Guy Bedford) #44477
[64cb43a2b6] - node-api: add deprecation code of uncaught exception (Chengzhong Wu) #44624
[ce1704c2c7] - src: avoid using v8 on Isolate termination (Santiago Gimeno) #44669
[3036b85d71] - src: remove <unistd.h> from node_os.cc (Tobias Nießen) #44668
[29f57b7899] - src: avoid copy when creating Blob (Tobias Nießen) #44616
[75cfb13ea6] - src: make ReqWrap weak (Rafael Gonzaga) #44074
[c12abb5ece] - src: make NearHeapLimitCallback() more robust (Joyee Cheung) #44581
[81ea507e8e] - src: dump isolate stats when process exits (daomingq) #44534
[687844822f] - src: consolidate environment cleanup queue (Chengzhong Wu) #44379
[3d42aaaac0] - stream: handle a pending pull request from a released reader (Daeyeon Jeong) #44702
[73ad9db6c5] - stream: refactor use es2020 statement (SindreXie) #44533
[0af6e420b3] - stream: remove abortReason from WritableStreamDefaultController (Daeyeon Jeong) #44540
[2f2f8d5821] - (SEMVER-MINOR) stream: add ReadableByteStream.tee() (Daeyeon Jeong) #44505
[667e8bf3fb] - stream: fix writableStream.abort() (Daeyeon Jeong) #44327
[3112d5dae0] - test: verify napi_remove_wrap with napi_delete_reference (Chengzhong Wu) #44754
[b512436841] - test: change promises to async/await (Madhulika Sharma) #44683
[858631f720] - test: use async/await in test-debugger-invalid-args (Nupur Chauhan) #44678
[6c9ded810c] - test: update test-debugger-low-level to use await/async (Meghana Ramesh) #44688
[945aa74e57] - test: check that sysconf returns a positive value (Tobias Nießen) #44666
[79f0f48a6f] - test: change promise to async/await in debugger-watcher (“Pooja) #44687
[a56cb65bd6] - test: fix addon tests compilation with OpenSSL 1.1.1 (Adam Majer) #44725
[8a68a80a06] - test: fix test-performance-measure (smitley) #44637
[55de0136b3] - test: improve lib/readline.js coverage (MURAKAMI Masahiko) #42686
[a3095d217f] - test: fix test-repl not validating leaked globals properly (Antoine du Hamel) #44640
[7db2974692] - test: ignore stale process cleanup failures on Windows (Joyee Cheung) #44480
[6c35f338c3] - test: use python3 instead of python (Luigi Pinca) #44545
[20e04c6d44] - test: fix DebugSymbolsTest.ReqWrapList on PPC64LE (Daniel Bevenius) #44341
[eb25fe73b0] - test: add more cases for parse-encoding (Tony Gorez) #44427
[5ab3bc9419] - test_runner: include stack of uncaught exceptions (Moshe Atlow) #44614
[752e1472e1] - tls: fix out-of-bounds read in ClientHelloParser (Tobias Nießen) #44580
[0cddb0af99] - tools: add update-llhttp.sh (Paolo Insogna) #44652
[ef0dc47df9] - tools: fix typo in update-nghttp2.sh (Luigi Pinca) #44664
[0df181a5a1] - tools: add timezone update workflow (Lenvin Gonsalves) #43988
[dd4348900d] - tools: update eslint to 8.23.1 (Node.js GitHub Bot) #44639
[b9cfb71e12] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #44638
[5ae142d7ad] - tools: update gyp-next to v0.13.0 (Jiawen Geng) #44605
[5dd86c3faf] - tools: update lint-md-dependencies to @rollup/[email protected] (Node.js GitHub Bot) #44590
[caad4748cf] - tools: increase timeout of running WPT (Joyee Cheung) #44574
[5db9779f14] - tools: fix shebang to use python3 by default (Himself65) #44531
[9aa6a560e9] - v8: add setHeapSnapshotNearHeapLimit (theanarkh) #44420
[360b74e94f] - win: fix fs.realpath.native for long paths (StefanStojanovic) #44536

Windows 32-bit Installer: https://nodejs.org/dist/v18.10.0/node-v18.10.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v18.10.0/node-v18.10.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v18.10.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v18.10.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v18.10.0/node-v18.10.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v18.10.0/node-v18.10.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v18.10.0/node-v18.10.0.tar.gz
Other release files: https://nodejs.org/dist/v18.10.0/
Documentation: https://nodejs.org/docs/v18.10.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

8f4dfa78d823a4c7e4c83bbfebef9ce3d49a6e1ed28408521c706350f8a2aee7  node-v18.10.0-aix-ppc64.tar.gz
0689815cdd69a9a977ee3bab20c6228d03966a1f988464f18ce490678dc5cdc3  node-v18.10.0-darwin-arm64.tar.gz
4822536977efde1f37bfc5f14cddc4f09fd2d77e8547ce54ec847b7ef6914fd8  node-v18.10.0-darwin-arm64.tar.xz
06b1b6381dfa952ae95fc927b740b660bc08f26bcf02cad61f64b36485dab6d4  node-v18.10.0-darwin-x64.tar.gz
146fe4ed98e0ab646380bad6f32303722421d2d98a3204183d9a66ec17eb3aa4  node-v18.10.0-darwin-x64.tar.xz
e1568e86022a9f15ab4fd8fc2451c6c739498b0a67202ae57fd2cfc3342b52f6  node-v18.10.0-headers.tar.gz
487346ba2a67ee66fc0333d803d758b12512979378f3ef037a0dd83cc0c277a3  node-v18.10.0-headers.tar.xz
ad536980cb4944b0d17055937c5d5170c95147765f547ce8469331a808d0c408  node-v18.10.0-linux-arm64.tar.gz
bbe88afe35569780aae8a84d9be8b55e4944d13e9212b0d51883a5dcf6a7de8b  node-v18.10.0-linux-arm64.tar.xz
7496428b9a94ee1927eefa43ce2d66aedae9122a8722bbeab3b1e5c6b1933af6  node-v18.10.0-linux-armv7l.tar.gz
694d83c751e1e8e05e77310c76fe87344350cd58e594cfd62df217a65dfbf55d  node-v18.10.0-linux-armv7l.tar.xz
6445d5d05707af7b318f4babb6432518e9b3529189e1fac3ed2200d89537fe8c  node-v18.10.0-linux-ppc64le.tar.gz
89d8266209f24b82940d2bf9cde14d871f7e6df02a3aef7bc948b8248c749f23  node-v18.10.0-linux-ppc64le.tar.xz
544d9930f1647939a901ef05d3d42ee8d6c7e857602922879c732bf3067a9f06  node-v18.10.0-linux-s390x.tar.gz
5a9c6ffbf03b4006dbbecc30b93234dc11a92d1f6d5c8e3bc45c9be958956a59  node-v18.10.0-linux-s390x.tar.xz
f468b86031cca41ee9aa7a911e70eb624413153c7432754cbe9206c7ef3de090  node-v18.10.0-linux-x64.tar.gz
1aff4537bbb81c29c5c1c7c96379c6a2133b43651812745b524db8e1b65ee12b  node-v18.10.0-linux-x64.tar.xz
a41d5d395ca349ab946571e2fa939729707ee8dacc15e88ef420b51635e36f9c  node-v18.10.0-win-x64.7z
50934603f0bd46ef9948346f36f8afeae146182a6eafdbc361c7eeec0083c551  node-v18.10.0-win-x64.zip
dfaf933d80c274a8541cce9807ba26177e7f3789ab80a52ef4a5580656a6bb13  node-v18.10.0-win-x86.7z
df3741ce99768668d700a3a5c085d1a5084d86c1e60cca626cf5f0b45525499b  node-v18.10.0-win-x86.zip
9a269ecc0530656db078ed03c20cc3e71022026feb9dff02bf0c96e9792f237a  node-v18.10.0-x64.msi
7f2c6fa385d7b8864b96510d86ff416c69b2b1dc2c4bd25d2bd8cac7d2e9ac7b  node-v18.10.0-x86.msi
0194e47d962d36a0778ffcfcdbedb6520bf3ec9abf8a1f5dd1bc96d776aeb421  node-v18.10.0.pkg
eab3109a6d3deafe049c8f0c461af8de5c6cad535b79c19fa84f0ea496c4ffb6  node-v18.10.0.tar.gz
ad711b54e2be4a7d24f37c73fb2801adeaf6d26d298d431be98d6abc0202e89f  node-v18.10.0.tar.xz
0f15043bb13749bf27f0eed2f902db8251dd214891851e1066537a08b97751a1  win-x64/node.exe
3111a04d3ae94921ac20f2afc4e167c59e50c07609ee940d1a8eec46f08310ad  win-x64/node.lib
ff3c97980c59bebae41f11a720f4a3c4f466b4fd31686a12bc451e939d6966e1  win-x64/node_pdb.7z
0cbaa9327350a936eade80e60c3e986e93a03a5404e3caeda5cea4d3c1ae631c  win-x64/node_pdb.zip
0a137d78cacf19a829e0f81ecf3891b5690c95a6845318bc93a325579facb121  win-x86/node.exe
e0b45a34da85070b41e13169a6ed30ea782d400dd8e8597d665727bac8d621f0  win-x86/node.lib
250afbbecfaf8a10c610d8a1865e1d1a7293d7e9b47e9b161ab4fa1395bff88b  win-x86/node_pdb.7z
70e0aca76b848d4279d2b081d713d4c28bb9dbe5ce2b6090eeb52a542b019f7b  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQGzBAEBCAAdFiEEiQwI24V5Fi/uDfnbi+q0389VXvQFAmM0hp0ACgkQi+q0389V
XvTYrgv/YlMZzeq0isLgz4t7xLZJi3yr9KVSTkfscNrlmW5Z1ZGl7cWdrm6Pcqeo
v019njHfQwoafp+De97eJhrPX+ojYKWsn4ZlDrYl7C4WyLjWUEeDD9Bj1Oz8xu9z
UVbJ5BFjVcWDx8VVjdD44tOWHLTKm49dtpvr0iar1Rqsa0Ke3X9/bLnCUenyeHyU
Nhlpq3oSMYmLzqAvV8GQh8MUzusDnGg5Mq9wAcddYJBZSRGtmF3SC+TMsN/i2aN2
Hbz0bMai1qmv/jOd2zC6rMnvdNjWKnomr4oehLeFZ0woby53S56PnnBWhz1IFn0t
4YbDFXZI6qhMnWrrjb4d/wtO6+Y1hi+HpLSKpL9ryzWJrQnDTJf2+Spe96Radq3M
IFMNuMLETnphSL9ilnu6BA/Pla85j1oajeiXS8J0DHETtvENwiMCwiMtNxYuSi3v
+6QPAY9NmD8j8zSSSAZcytZvHADy+5vs5Y2Cak3i7TJiwX1TnRJ12xX3fDeWBgRf
TlXASWgI
=DwII
-----END PGP SIGNATURE-----


      
