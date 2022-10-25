

        
          Node v16.15.0 (LTS)
          by Danielle Adams, 2022-04-27
        

        Notable changesAdd fetch APIAdds experimental support to the fetch API. This adds the --experimental-fetch
flag that installs the fetch, Request, Response, Headers, and FormData
globals.

(SEMVER-MINOR) add fetch (Michaël Zasso) #41749
(SEMVER-MINOR) add FormData global when fetch is enabled (Michaël Zasso) #41956

Other notable changes
build:
remove broken x32 arch support (Ben Noordhuis) #41905


crypto:
(SEMVER-MINOR) add KeyObject.prototype.equals method (Filip Skokan) #42093


doc:
add @ShogunPanda to collaborators (Paolo Insogna) #42362
add JakobJingleheimer to collaborators list (Jacob Smith) #42185
add joesepi to collaborators (Joe Sepi) #41914
add marsonya to collaborators (Akhil Marsonya) #41991
deprecate string coercion in fs.write, fs.writeFileSync (Livia Medeiros) #42149
deprecate notice for process methods (Yash Ladha) #41587


esm:
(SEMVER-MINOR) support https remotely and http locally under flag (Bradley Farias) #36328


module:
(SEMVER-MINOR) unflag esm json modules (Geoffrey Booth) #41736


node-api:
(SEMVER-MINOR) add node_api_symbol_for() (Darshan Sen) #41329


process:
deprecate multipleResolves (Benjamin Gruenbaum) #41872


stream:
(SEMVER-MINOR) support some and every (Benjamin Gruenbaum) #41573
(SEMVER-MINOR) add toArray (Benjamin Gruenbaum) #41553
(SEMVER-MINOR) add forEach method (Benjamin Gruenbaum) #41445



Commits
[3d4df9cd70] - (SEMVER-MINOR) benchmark: add subarray to buffer-slice (Benjamin Gruenbaum) #41596
[d40f5a177a] - buffer: improve blob read performance (Xuguang Mei) #42117
[84752a495f] - (SEMVER-MINOR) buffer: alias subarray and slice (Benjamin Gruenbaum) #41596
[c5da1dda4a] - build: use ccache in make-v8.sh on ppc64le and s390x (Richard Lau) #42204
[ba56e41953] - build: drop shortened URL from lint-commit-message (Richard Lau) #42168
[b2c88ec69c] - build: fix usage of input in feature action (Michael Dawson) #42150
[bcabd70d93] - build: increase max ops for stale feature action (Michael Dawson) #42130
[042fb6f4d5] - build: add corepack to the auto-updated dependencies (Maël Nison) #42090
[611cbf13a6] - build: last test of the stale feature action (Michael Dawson) #42085
[0d8f76ff2f] - build: update feature close action for testing (Michael Dawson) #42082
[bc3d8a752f] - build: cancel running CI jobs when a PR is updated (Michaël Zasso) #42017
[e049173bce] - build: increase operations and test tag (Michael Dawson) #42038
[4c47d59e9b] - build: allow manual run of feature request action (Michael Dawson) #42037
[692ee2ae06] - build: add action to close stale feature requests (Michael Dawson) #41981
[290a2bfd81] - build: prevent concurrent CI and CQ workflow runs (Michaël Zasso) #42016
[d2c1624279] - build: use zoslib_include_dir provided by node-gyp (alexcfyung) #41713
[db4a3dc1a6] - build: move tool updates workflow runtime a day later (Rich Trott) #41982
[24d0c32af4] - build: extend yamllint configuration (Mestery) #41756
[428b967ea4] - build: remove broken x32 arch support (Ben Noordhuis) #41905
[51847e0d24] - build: revert fast-track changes (Filip Skokan) #41892
[1452f8d6f1] - build: improve consistency between workflows (Mestery) #41791
[9677da4b46] - (SEMVER-MINOR) build: add --v8-enable-hugepage flag (Daoming Qiu) #41487
[5468de5317] - build,tools: change the quotes in YAML (Mestery) #41756
[f32c39762c] - child_process: kHideConsoleWindows for spawnSync (Raymond Zhao) #41412
[914f9071ba] - cluster: respect listen backlog set by workers (Elad Nava) #41623
[f990308972] - crypto: fix auth tag length error when mode != GCM (Tobias Nießen) #42383
[7f43f94304] - crypto: fix fingerprint string size calculation (Tobias Nießen) #42175
[602f34eeb8] - crypto: add CHECKs to remaining BIO_s_mem allocs (Tobias Nießen) #42155
[4eecb25125] - crypto: validate this value for webcrypto.getRandomValues (Antoine du Hamel) #41760
[b7599d8b14] - (SEMVER-MINOR) crypto: add KeyObject.prototype.equals method (Filip Skokan) #42093
[70ae0ae8a0] - crypto: check result of BIO_new in X509ToObject (Tobias Nießen) #41979
[36b9028f4f] - crypto: rename X509_NAME_FLAGS (Tobias Nießen) #42001
[a592442218] - (SEMVER-MINOR) crypto: expose Web Crypto API on the global scope (Antoine du Hamel) #41938
[46dda316df] - crypto: do not advertise unsupported algorithms (Brian White) #41864
[adb88fcb46] - (SEMVER-MINOR) crypto: support RFC 2818 compatible checkHost (Tobias Nießen) #41569
[e9d7af1cc6] - debugger: correct typo in inspect_repl.js (Kohei Ueno) #42267
[e6019a4cc0] - debugger: add debugger alias for exec(expr) (Xuguang Mei) #41907
[83691ada5b] - debugger: remove duplicate setPauseOnException call (Balakrishna Avulapati) #41838
[7e73e5e46b] - deps: upgrade npm to 8.5.5 (npm team) #42382
[8d734cbde6] - deps: cares: cherry-pick b5a3d96 (bradh352) #42216
[ba1d949ce0] - deps: V8: cherry-pick c6f6626deb14 (Lu Yahan) #42240
[6b721d7103] - deps: upgrade npm to 8.5.3 (npm team) #42205
[baeb66a35a] - deps: update nghttp2 to 1.47.0 (Yash Ladha) #42127
[1a0f26f55c] - deps: upgrade npm to 8.5.2 (npm team) #42122
[396240bf80] - deps: V8: cherry-pick 77d515484864 (Lu Yahan) #42067
[3f09a6d227] - deps: V8: cherry-pick b66334313c8b (Lu Yahan) #42067
[a73536b286] - deps: upgrade npm to 8.5.1 (npm-robot) #42039
[c64b0381ee] - deps: update undici to 5.0.0 (Node.js GitHub Bot) #42583
[a670c1fb5f] - deps: update undici to 4.16.0 (Node.js GitHub Bot) #42414
[721d10751b] - deps: update undici to 4.15.1 (Michaël Zasso) #42246
[83a667621b] - deps: update undici to 3e267ece5f (Michaël Zasso) #41955
[208ab5723e] - doc: improve README.md usability (Rich Trott) #42378
[682248c980] - doc: add that chacha20-poly1305 is IETF version (Tobias Nießen) #42370
[83391d185c] - doc: document goal to have examples (Michael Dawson) #42274
[7073017efb] - doc: fix Embedder's Guide link to V8 official docs (Aroyan) #42373
[cb07930bda] - doc: remove unneeded lint disable comment (Rich Trott) #42374
[fb42f99514] - doc: revise async_hooks docs (Rich Trott) #42337
[835e65b78e] - doc: add @ShogunPanda to collaborators (Paolo Insogna) #42362
[df1909982d] - doc: update base branch name for nodejs/nodejs.org (Danielle Adams) #42355
[4f6b187059] - doc: fix async iterable pipeline signal examples (Randall Leeds) #42258
[3188dcb390] - doc: clarify path search in child_process.spawn (Damjan Cvetko) #41418
[f53b454e2e] - doc: clarify the meaning of legacy status (Darshan Sen) #42269
[43b8a4fc57] - doc: improve pipe description (Mikael Finstad) #42295
[9fa6e445d5] - doc: remove outdated timeout.unref content (Xuguang Mei) #42241
[a84896ea2c] - doc: deprecate string coercion in fs.write, fs.writeFileSync (Livia Medeiros) #42149
[436bdde654] - doc: remove refs to old OpenSSL list-* commands (Tobias Nießen) #42235
[6763bede4c] - doc: readline 'line' event emits final line (Matt Probert) #42214
[6545094a94] - doc: update stale feature messages (Michael Dawson) #42217
[275b66d54e] - doc: remove erroneous comma in cluster explainer (Tobias Nießen) #42238
[cda623cc1d] - doc: remove "considered" for clarity (Rich Trott) #42218
[17172fef20] - doc: clarify that some modules don't work when compiled without ssl (Antoine du Hamel) #42198
[126045356a] - doc: add note about nghttp2 hd pair size (Rafael Silva) #42172
[63b468f753] - doc: use parenthesis instead of em dash (Antoine du Hamel) #42202
[19b62ddd68] - doc: add next-10 to strategic initiatives (Michael Dawson) #42167
[993a943f2c] - doc: add missing single-quotes to http.OutgoingMessage (Juan José Arboleda) #42162
[d0ce089622] - doc: fix typos (apeltop) #42146
[88e67b8ec3] - doc: add JakobJingleheimer to collaborators list (Jacob Smith) #42185
[5322c73241] - doc: remove reference to obsolete security program (Rich Trott) #42144
[5980b6d133] - doc: remove repeated a word (apeltop) #42138
[a70a1ce3a9] - doc: make building with ninja more discoverable (Balakrishna Avulapati) #41840
[bc457c2339] - doc: document change to IncomingMessage.headers enumerability (Arnold Zokas) #42095
[1eb4d8b89c] - doc: add meixg to triagers (Xuguang Mei) #42066
[3d75c8748c] - doc: clarify persistent ref behavior (Michael Dawson) #42035
[8c26d8cea1] - doc: move bnoordhuis back to collaborators (Ben Noordhuis) #42064
[0c21b58d57] - doc: clarify supported versus enabled TLS ciphers (Tobias Nießen) #42063
[a658437c64] - doc: add missing api entries on performance (legendecas) #42018
[51cb78022e] - doc: fix typo in http2 endAfterHeaders description (Alexandru Comanescu) #42060
[40ddfa4e69] - doc: make minor fixes to contributing guides (T-O-R-U-S) #41966
[60d6409af0] - doc: use openpgp.org for keyserver examples (Nick Schonning) #39227
[9800719237] - doc: adjust a/an word usage (Derek Wolpert) #41915
[43894b1bc4] - doc: capitalize valgrind (T•Ø•R•Ü•S) #41986
[a34cc75026] - doc: fix deprecation number (Antoine du Hamel) #41990
[dd88f54d57] - doc: add marsonya to collaborators (Akhil Marsonya) #41991
[8858950a9f] - doc: deprecate notice for process methods (Yash Ladha) #41587
[d77db88386] - doc: fix bug in readable.unshift code example (Xuguang Mei) #41944
[81e56c9178] - doc: add missing buffer in the stream/consumers import example (Mestery) #41961
[c08efba968] - doc: fix typo in readableStream.locked description (Tobias Nießen) #41923
[e21831bad1] - doc: fix wrong indent in stream documentation (Xuguang Mei) #41943
[e55f340052] - doc: emphasize security warning in vm module doc (Rich Trott) #41916
[ce15007fd7] - doc: clarify tls.Server 'connection' event documentation (Austin Cheney) #41917
[6fc0a25b64] - doc: improve scrollbar appearance in dark mode (Aaron Xie) #41890
[90d955100d] - doc: replace text with paths in toggle SVGs (Brian White) #41885
[6fd538331d] - doc: edit process.config deprecation text (Rich Trott) #41889
[55caa10c54] - doc: add joesepi to collaborators (Joe Sepi) #41914
[73f3a2cf96] - doc: remove unneeded ellipsis in header (Rich Trott) #41888
[b950f5db84] - doc: fix webstream close reject state state doc (Benjamin Gruenbaum) #41860
[e46c7d6f69] - (SEMVER-MINOR) doc: deprecate buffer.slice (Benjamin Gruenbaum) #41596
[83129729c6] - doc: fix backticks around 'default' (Tobias Nießen) #41613
[f8819e86fd] - doc: fix version history for net.Socket and net.Server (Antoine du Hamel) #42268
[12bf85a606] - doc,tools: improve navigability of API docs (Paolo Insogna) #41404
[37f6f92905] - errors: do not access .stack in debug (Benjamin Coe) #42096
[166eb782f9] - esm: fix base URL for network imports (Bradley Farias) #42131
[b68db72746] - esm: fix relative imports for https (Bradley Farias) #42119
[c777cb3368] - esm: make extension-less errors in type:module actionable (Bradley Farias) #42301
[2e42ccf1a5] - esm: improve typings and code coverage (Bradley Farias) #42305
[25017ca107] - esm: add runtime warning for specifier resolution flag (Geoffrey Booth) #42252
[1324023fea] - esm: improve fetch_module test coverage and remove hack (Antoine du Hamel) #41947
[9b8c927d29] - esm: remove erroneous context.parentURL property passed to load hook (Jacob Smith) #41975
[47cefec5c9] - esm: fix typo in fetch_module (Michael Scovetta) #41924
[0d185f7930] - (SEMVER-MINOR) esm: support https remotely and http locally under flag (Bradley Farias) #36328
[b0a83115db] - events: set default handler value (Benjamin Gruenbaum) #41970
[6b55ba2fa2] - fs: adjust default length for fs.readSync and fsPromises/read (Livia Medeiros) #42128
[da87c731b8] - fs: fix default length parameter for fs.read (wbt) #40349
[33e4a32f9e] - (SEMVER-MINOR) fs: support copy of relative links with cp and cpSync (Marcos Bjoerkelund) #41819
[571eb6dc74] - fs: fix cb/sync writev empty array behavior (Benjamin Gruenbaum) #41932
[257a7a5802] - fs: fix writev empty array error behavior (Benjamin Gruenbaum) #41919
[2d165652f1] - fs: refactor to use ES2020 syntax (小菜) #41903
[39fb114dde] - (SEMVER-MINOR) http: trace http client by perf_hooks (theanarkh) #42345
[16c00c6ac8] - http: add default argument for Agent.prototype.getName (小菜) #41906
[d301a8825b] - http2: fix potential integer overflow (Michael Dawson) #42248
[ddef6bbcb8] - http2: add edge case to GOAWAY request (Rafael Silva) #42190
[28af75ef65] - http2: close stream and session on frameError (Rafael Silva) #42147
[ebe2b6d21e] - lib: refactor to use primordials in lib/assert.js (Akhil Marsonya) #41702
[dcebb99dfc] - lib: fix AsyncResource.bind not using 'this' from the caller by default (Roch Devost) #42177
[e1704407ae] - lib: clean after the cancel algorithm throw error (Chen Gang) #41366
[91a06bd629] - lib: add legacy built-in functions to primordials (Antoine du Hamel) #42049
[e80043fb61] - lib: stop installing webcrypto if no_browser_globals is true (Mestery) #41971
[9946b9bceb] - lib: allow respondWithNewView on byob auto allocated streams (Sean Quinlan) #41887
[f4e39171de] - lib: restrict usage of fetch related globals in core internals (Antoine du Hamel) #41957
[b1f0cc6412] - lib: move kEnumerableProperty to internal/util (Mestery) #41877
[2a85e0ac00] - lib: add internal genericNodeError() function (Rich Trott) #41879
[647805a747] - (SEMVER-MINOR) lib: add FormData global when fetch is enabled (Michaël Zasso) #41956
[f17ce913c9] - (SEMVER-MINOR) lib: add fetch (Michaël Zasso) #41749
[2cbf45b8a5] - loader: fix esm resolve for symlink file (Xuguang Mei) #42197
[a363842261] - meta: update AUTHORS (Node.js GitHub Bot) #42404
[a122eb1989] - meta: update AUTHORS (Node.js GitHub Bot) #42317
[c56e15a0eb] - meta: add dependencies label to label-pr-config (Mestery) #42129
[137ca4e1d4] - meta: update AUTHORS (Node.js GitHub Bot) #42227
[09ab04696f] - meta: update AUTHORS (Node.js GitHub Bot) #42142
[d4d9c00949] - meta: correct link to feature request document (Simen Bekkhus) #42092
[2135f8e6cb] - meta: move one or more collaborators to emeritus (Node.js GitHub Bot) #42068
[b969a278eb] - meta: remove collaborator (Rich Trott) #42073
[de035bceda] - meta: update AUTHORS (Node.js GitHub Bot) #42058
[f5ffa34f77] - meta: use plain emojis instead of escape sequences (Mestery) #41989
[6f1adf1f3e] - meta: update AUTHORS and .mailmap (Rich Trott) #41953
[363028c887] - (SEMVER-MINOR) module: unflag esm json modules (Geoffrey Booth) #41736
[b3afb20b44] - (SEMVER-MINOR) net: add new options to net.Socket and net.Server (Paolo Insogna) #41310
[bd48ad9c16] - node-api: fix typo in node_api.cc (Austin Kelleher) #42110
[11ec3345e7] - (SEMVER-MINOR) node-api: add node_api_symbol_for() (Darshan Sen) #41329
[7c0b8ca5ac] - perf_hooks: do not return all entries with getEntriesBy[Name|Type] (Xuguang Mei) #42104
[b7a307f0ed] - perf_hooks: use arrays to store EntryBuffers (Xuguang Mei) #42032
[61ecdf8f12] - process: fix named report export (madflow) #41861
[bc08165953] - process: deprecate multipleResolves (Benjamin Gruenbaum) #41872
[a88d4a2e2c] - repl: remove preview when press escape (meixg) #42053
[83267aaa7f] - repl: #41690 REPL gives wrong autocomplete on literals (Xuguang Mei) #41883
[73ce911a6f] - src: convert hex2bin() into a regular function (Darshan Sen) #42321
[7fe16ecc7a] - src: fix coverity warnings in node_file.cc (Michael Dawson) #42272
[5b30e28eb4] - src: check EC_POINT_get_affine_coordinates result (Tobias Nießen) #42304
[57b619da46] - src: simplify bound check in ParseArrayIndex (Tobias Nießen) #42306
[0e3e3fda22] - src: avoid returning invalid value from hex2bin (Tobias Nießen) #42307
[5eaa59159f] - src: check return value of HMAC_Final (Tobias Nießen) #42303
[376b3c4293] - src: include internal/options in the snapshot (Joyee Cheung) #42203
[268fd97925] - src: remove redundant buffer size check (Tobias Nießen) #42257
[90ce5c9fc5] - src: perform minor cleanups on zlib code (Anna Henningsen) #42247
[de3748a7e7] - src: use emplace_back instead of push_back (Yash Ladha) #42159
[830f93d892] - src: fix unchecked return warning from coverity (Michael Dawson) #42176
[db9f7752a9] - src: return proper URLs from node_api_get_module_file_name (Anna Henningsen) #41758
[d4b1b5cf85] - src: skip revoke_data_object if uuid is not found (Xuguang Mei) #42212
[3026449009] - src: remove dead code in AddFingerprintDigest (Tobias Nießen) #42145
[29fd5ff37d] - src: combine GetCurveASN1Name and GetCurveNistName (Tobias Nießen) #42118
[447ae8c5a3] - src: simplify TLSWrap::SetSession (Tobias Nießen) #42087
[2fe17f3891] - src: prefer bool over int in crypto_common (Tobias Nießen) #42097
[237f47e38e] - src: simplify arg type of AddFingerprintDigest (Tobias Nießen) #42101
[4244b1a0bb] - src: do not ignore return value of BIO_reset (Tobias Nießen) #42103
[e77a7cf985] - src: simplify GetExponentString (Tobias Nießen) #42121
[c811b8a1cb] - (SEMVER-MINOR) src: allow preventing InitializeInspector in env (Shelley Vohr) #35025
[af73a853f5] - src: use const reference instead of pointer in URL::SerializeURL (Anna Henningsen) #41759
[703593ab2a] - src: reserve string allocation space early in URL::SerializeURL (Anna Henningsen) #41759
[170a6cb33e] - src: fix query/fragment serialization in URL::SerializeURL (Anna Henningsen) #41759
[86b9d3af98] - src: don't print interface if sin6_scope_id is 0 (Santiago Gimeno) #41547
[fdea60e958] - src,buffer: evaluate THROW_AND_RETURN_IF_OOB() expression only once (Darshan Sen) #41945
[bf1f485c8d] - src,crypto: avoid tristate Maybe<bool> in ExportJWKEcKey() (Darshan Sen) #42223
[a5b189cda7] - stream: use .chunk when calling adapters's writev (Xuguang Mei) #42161
[0c690456cf] - stream: add more forEach tests (Benjamin Gruenbaum) #41937
[f12cf6db47] - (SEMVER-MINOR) stream: add reduce (Benjamin Gruenbaum) #41669
[4b6343964e] - stream: use synchronous error validation on iteration helpers (iMoses) #41652
[60e28ba507] - stream: add asIndexedPairs (Benjamin Gruenbaum) #41681
[88a48197c4] - stream: add drop and take (Benjamin Gruenbaum) #41630
[205c018ab4] - (SEMVER-MINOR) stream: support flatMap (Benjamin Gruenbaum) #41612
[0be2321d53] - (SEMVER-MINOR) stream: support some and every (Benjamin Gruenbaum) #41573
[ac8526e9a5] - (SEMVER-MINOR) stream: add toArray (Benjamin Gruenbaum) #41553
[dcc58314b9] - (SEMVER-MINOR) stream: add forEach method (Benjamin Gruenbaum) #41445
[f21f104c7c] - string_decoder: fix crash when calling __proto__.write() (Darshan Sen) #42062
[e3bced182c] - test: give slow tests more time on Rasberry PIs (Michael Dawson) #42380
[04243a85c7] - test: improve https_renew_cert.sh script (Tobias Nießen) #42343
[6d422ad807] - test: improve _http_incoming.js coverage (Yoshiki Kurihara) #42211
[3d37efe588] - test: improve _http_outgoing coverage (Yoshiki Kurihara) #42213
[245577e15c] - test: add test case for reverted 17.7 regression (Rich Trott) #42283
[3cc06de597] - test: use global webcrypto for WPT tests (Antoine du Hamel) #42236
[623be18fa3] - test: cover 32-bit sizes in generatePrime (Tobias Nießen) #42207
[70281e17ad] - test: fix test-process-env-tz.js by using RegExp (Khaidi Chu) #42113
[33b11a3548] - test: update V8 trace events test expectations (Nikolaos Papaspyrou) #42120
[978b50fe44] - test: deflake test-common-expect-warning (Luigi Pinca) #42046
[629d06ace8] - test: validate EventEmitterAsyncResource methods throw on invalid this (Yoshiki Kurihara) #42041
[17af006e38] - test: increase Fibonacci argument to 40 (Rich Trott) #42055
[b06780801c] - test: remove test-stdout-close-catch flaky designation (Rich Trott) #42045
[9ae6982387] - test: check that fetch globals are disabled by default (Michaël Zasso) #42015
[2a1a94bbbb] - test: improve vm test coverage (Yoshiki Kurihara) #41847
[3e354da097] - test: run webmessaging/broadcastchannel WPT (Ben Noordhuis) #41962
[711e863084] - test: fix names of tests marked flaky on IBM i (Richard Lau) #41984
[95eb03c298] - test: fix typographical error (Rich Trott) #41983
[31def41391] - test: fix intl tests on small-icu builds (Antoine du Hamel) #41939
[11e76fcba4] - test: remove lint rule for setTimeout() arguments (Rich Trott) #41901
[fd8bf09608] - test: move test-crypto-engine to addon (Michael Dawson) #41830
[25109a6471] - test: improve stability of oom test (Benjamin Gruenbaum) #41681
[ad17c9ce0c] - test,crypto: add and update empty passphrase regression tests (Darshan Sen) #42319
[9649d656ba] - tls: avoid throw in onerror for bad TLSSocket obj (Valters Jansons) #41523
[789e6041a6] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #42403
[1c1061549a] - tools: update doc to [email protected] [email protected] (Node.js GitHub Bot) #42315
[97aa236083] - tools: update lint-md-dependencies to [email protected] [email protected] (Node.js GitHub Bot) #42316
[7636370bdb] - tools: update eslint to 8.11.0 (Node.js GitHub Bot) #42318
[359395393f] - tools: fix web streams API links (Brian White) #42153
[fe5578b627] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #42226
[8532f83c8e] - tools: update lint-md rollup dependencies (Node.js GitHub Bot) #42141
[f2a16158a0] - tools: update eslint to 8.10.0 (Node.js GitHub Bot) #42143
[11f747b0e4] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #42057
[c47b436bd0] - tools: enable es2022 env in ESLint config (Michaël Zasso) #42043
[bbdf285a39] - tools: add console to the list of restricted globals (Antoine du Hamel) #42012
[aace6c2626] - tools: lint deprecation codes (Antoine du Hamel) #41992
[c229889022] - tools: fix bugs in prefer-primordials linter rule (Antoine du Hamel) #42010
[410d0ce44a] - tools: add timers functions to the list of restricted globals (Antoine du Hamel) #42013
[06d8c53e62] - tools: reduce list of globals in ESLint config (Rich Trott) #41996
[82b64f44fc] - tools: update remark-preset-lint-node to 3.3.1 (Rich Trott) #41999
[1db9cc7e59] - tools: update ESLint to 8.9.0 (Luigi Pinca) #41973
[f8c6232f90] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #41941
[57d5576c4d] - tools: fix typo in prefer-primordials.js (Ikko Ashimine) #41891
[4bba27935a] - tools,lib: remove global and Intl from the list of globals (Antoine du Hamel) #42014
[e918570d10] - url: preserve null char in WHATWG URL errors (Rich Trott) #42263
[962a8ec350] - url: trim leading and trailing C0 control chars (Rich Trott) #42196
[78647edba7] - url, src: modify one special_back_slash (Khaidi Chu) #42112
[a458fbf949] - worker: do not send message if port is closing (Rich Trott) #42357
[604621a275] - worker: fix typo in debug statement (Antoine du Hamel) #42011
[237affc951] - (SEMVER-MINOR) worker: graduate get/setEnvironmentData APIs (James M Snell) #41272

Windows 32-bit Installer: https://nodejs.org/dist/v16.15.0/node-v16.15.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v16.15.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v16.15.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v16.15.0/node-v16.15.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v16.15.0/node-v16.15.0.tar.gz
Other release files: https://nodejs.org/dist/v16.15.0/
Documentation: https://nodejs.org/docs/v16.15.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

237a2b77ef1ec74343329c8c701d0f41feb946ede0a2cbc7292175b34cc638f6  node-v16.15.0-aix-ppc64.tar.gz
ad8d8fc5330ef47788f509c2af398c8060bb59acbe914070d0df684cd2d8d39b  node-v16.15.0-darwin-arm64.tar.gz
0fec28fea7fcf381026af101de55af003180434d3df1985fd128fc86ea54819c  node-v16.15.0-darwin-arm64.tar.xz
a6bb12bbf979d32137598e49d56d61bcddf8a8596c3442b44a9b3ace58dd4de8  node-v16.15.0-darwin-x64.tar.gz
a5197e523dce9fcfecb5a73a272d17aa480d76c0c6830e4ffc17dae629440d02  node-v16.15.0-darwin-x64.tar.xz
e0b0a2292179ab855357cefa704f797d7853b569f2d66bb7c313dd5cb36e063b  node-v16.15.0-headers.tar.gz
d3f1a8125dfe3e8bb7331b5919325d35653e7f236682963906b91c197206b0bf  node-v16.15.0-headers.tar.xz
2aa387e6a57ade663849efdc4fabf7431a38d975db98dcc79293840e6894d28b  node-v16.15.0-linux-arm64.tar.gz
b4080b86562c5397f32da7a0723b95b1df523cab4c757688a184e3f733a7df56  node-v16.15.0-linux-arm64.tar.xz
3b54c8f57a8ab211b5e969cdf6d20b3bcd7f30f7e0444e00c409f78b90486d30  node-v16.15.0-linux-armv7l.tar.gz
cc971b6896a5c3f610660168f5a80c2922180e958b9f1d161eecc8457fc80951  node-v16.15.0-linux-armv7l.tar.xz
625bf1f6cc2d608c51fc5b412ca162251871d14eb795cb006107d743c1da200c  node-v16.15.0-linux-ppc64le.tar.gz
86357d26c59c439420185d775c47292bed95babe4da9456814eb4c8e2c9bd7e7  node-v16.15.0-linux-ppc64le.tar.xz
ecd90e2218fa0c78bbf5c8b940ebe0ac5824bd4c34d5e5f73b75fbd27b5fff64  node-v16.15.0-linux-s390x.tar.gz
f80a7af3c1069eac230b6c9af34b9ae4da9723f3733b2caba80f9c5ac947d6bb  node-v16.15.0-linux-s390x.tar.xz
d1c1de461be10bfd9c70ebae47330fb1b4ab0a98ad730823fb1340e34993edee  node-v16.15.0-linux-x64.tar.gz
ebdf4dc9d992d19631f0931cca2fc33c6d0d382543639bc6560d31d5060a8372  node-v16.15.0-linux-x64.tar.xz
c2ac086ce235994ab1f1d05adfe11316e042eec8e969a325d4d96bd707e50447  node-v16.15.0.pkg
38e041b7249afb331663613f860b84b51852efa02b4ebff852f9610bef680d7d  node-v16.15.0.tar.gz
a0f812efc43f78321eca08957960a48f5e6bf97004d5058c8dd3b03c646ea4f7  node-v16.15.0.tar.xz
7c67bf60fd785fdcc9daf8c7ed19f15affb8d266121ef387efc678069bb78fb5  node-v16.15.0-win-x64.7z
dbe04e92b264468f2e4911bc901ed5bfbec35e0b27b24f0d29eff4c25e428604  node-v16.15.0-win-x64.zip
63576c0ce442a2d9f158cbf9a1f57f44e173f2f3ef978a520b6b4c0c92f10ae0  node-v16.15.0-win-x86.7z
0d11a3844dad4ab679502495a4aa41041168a2caa81b8da9c7b5a14902c46986  node-v16.15.0-win-x86.zip
d21fbd61cdd1dda49159b86967df01fed182de19c227b00f1841c4c374f5567f  node-v16.15.0-x64.msi
20542ed7f28b2112edf7d22511e2d8c27ce57b66ced657e54b9e603f626fe0d8  node-v16.15.0-x86.msi
f9de362c3ea39f4abad4e724c2afc01e3d873363453834f4f9da460c843f4554  win-x64/node.exe
3ab87e9c27e2d49869fd15c7841c1674af56c9be3af1672c173621a3300f0e0d  win-x64/node.lib
fb7c3ea93337b253afd33e589954015c1ed03f40b686e6df1ec9c4f636734ecd  win-x64/node_pdb.7z
b664795eb9e951a638112f2540073ea5adacfefb68cfcfecb53f379777294779  win-x64/node_pdb.zip
22393b50772e2e37177cb5a7c9a0ea4998c8cc2b5b9bc8cf10c90cab92c57498  win-x86/node.exe
a1abc3b3a13745dd883a21cbfe07f3162f6f61e8a9267d6e9de9c2b0a4abaa45  win-x86/node.lib
cc0d8951c1bb1b2e34c77752a9726ffadabbeacdf739dd02ea70266b045f2640  win-x86/node_pdb.7z
380dff31f8f0ec67baf1a75da712b064490852dcc178252707ca3094bf93eb66  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCAAdFiEEdPEmArbxxOkT+qN606iWE2Q7YgEFAmJolggACgkQ06iWE2Q7
YgE0Ig//YqM5om1v6OxvxcK1pThHs89j78n29p8fjKkJyN6Z7fF+klfsNk6l6TIr
c9GUSQS9ZntIr1g6OQc/YQINzZYSj+ALG1YATnIvb5N6KIs4VogexuvTtf7NZTrQ
b7895c+/UjoNZQXIhrmeONVfuZ2S0XjVxQzKPxQSLn1IspLJqceS0mn5Tqbdgi1L
BA7+8roXTxgqpgP+AubOPyUTi+WHPV++8HPq5msPhht+NnJoGqwm+sYWSvZF6CKK
Idig4gscOCI1/nuSTqQhuGKdpK99gHLFxJhTXJurP2+NNPjuS6MQ/HqWL1Mgt2Wy
uaKqRsGA10+H+DMqLpQCAFCpz7M1T1donWwSy4mhBIfjEb2yq8I1GInJe0b6nXJR
qGHwAMoqbQ6GQObFJTp6nDbsan8qO90cJaU2VRq3IoqO/F4rwR0RkgVHJplMXx/F
6Mp9Rboc5nCgc2ZSN0Cxjcae8V5+3fOWBN8HfPHFkIzvmwvrZ4CpDVh24tsKkhhs
IP0+4JvsjwxCW9qkdHdVJyihUDD+kSdoMo+fxyM5FmZLs1yQhTW5UWnd418CEoZg
fb9aE5wRZ9vJ9Ba9KrH59zVe6oPAt+zKlkTmVQRyzAXO+a4+gPHkiL9dk5TubqXE
NAH/vC7qzrwfncqZDEi5rc11Wq8XDEXJm4MHW1MK3s9VrbDUDcU=
=Fog4
-----END PGP SIGNATURE-----


      
