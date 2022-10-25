---
id: 50
title: Node-v18.9.0-(Current)-|-Node.js
date: 'Oct 25 2022'
tags: ["node","news"]
metaTags: ["node","news"]
cover_image: https://velog.velcdn.com/images/mayinjanuary/post/e1ff9d4e-541f-418f-b411-4ab9f39aee16/nodejs.png
description: ''
---


        
          Node v18.9.0 (Current)
          by Rafael Gonzaga, 2022-09-08
        

        Notable changes
doc
add daeyeon to collaborators (Daeyeon Jeong) #44355


lib
(SEMVER-MINOR) add diagnostics channel for process and worker (theanarkh) #44045


os
(SEMVER-MINOR) add machine method (theanarkh) #44416


report
(SEMVER-MINOR) expose report public native apis (Chengzhong Wu) #44255


src
(SEMVER-MINOR) expose environment RequestInterrupt api (Chengzhong Wu) #44362


vm
include vm context in the embedded snapshot (Joyee Cheung) #44252



Commits
[e27e709d3c] - build: add --libdir flag to configure (Stephen Gallagher) #44361
[30da2b4d89] - build: added NINJA env to customize ninja binary (Jeff Dickey) #44293
[3c5354869e] - cluster: fix cluster rr distribute error (theanarkh) #44202
[5cefd02618] - crypto: handle invalid prepareAsymmetricKey JWK inputs (Filip Skokan) #44475
[c868e36385] - crypto: add digest name to INVALID_DIGEST errors (Tobias Nießen) #44468
[35cbe1ad85] - crypto: use actual option name in error message (Tobias Nießen) #44455
[c3dbe18e4c] - crypto: simplify control flow in HKDF (Tobias Nießen) #44272
[28781a1f7e] - crypto: improve RSA-PSS digest error messages (Tobias Nießen) #44307
[b1eafe14fd] - debugger: decrease timeout used to wait for the port to be free (Joyee Cheung) #44359
[8ef5c40a83] - deps: update corepack to 0.14.0 (Node.js GitHub Bot) #44509
[cf19a79dfc] - deps: upgrade npm to 8.19.1 (npm team) #44486
[c5630ad1a7] - deps: V8: backport ff8d67c88449 (Michaël Zasso) #44423
[255e7fbd08] - deps: update Acorn to v8.8.0 (Michaël Zasso) #44437
[754d26a53e] - deps: patch V8 to 10.2.154.15 (Michaël Zasso) #44294
[1b50ff2600] - deps: update icu tzdata to 2022b (Matías Zúñiga) #44283
[1e451dca99] - deps: upgrade llhttp to 6.0.9 (Paolo Insogna) #44344
[57da3db522] - deps: update undici to 5.9.1 (Node.js GitHub Bot) #44319
[1c87a7e8f6] - doc: add missing parenthesis in TLSSocket section (Tobias Nießen) #44512
[05006eddb2] - doc: do not use "Returns:" for crypto.constants (Tobias Nießen) #44481
[54b6ed58bc] - doc: use serial comma in addons docs (Tobias Nießen) #44482
[11452a97b3] - doc: add --update-assert-snapshot to node.1 (Colin Ihrig) #44429
[ae028e8ac3] - doc: improve assert.snapshot() docs (Colin Ihrig) #44429
[71c869688a] - doc: add missing imports in events sample code (Brian Evans) #44337
[92046e8027] - doc: apply scroll-margin-top to h2, h3 elements (metonym) #44414
[3e6cde5931] - doc: fix spacing issue in --build-snapshot help text (Shohei YOSHIDA) #44435
[8e41dbb81b] - doc: mention cherry-pick edge-case on release (RafaelGSS) #44408
[cef30f9afc] - doc: note on release guide to update main branch (Ruy Adorno) #44384
[21437f7a7f] - doc: fix release guide example consistency (Ruy Adorno) #44385
[ed52bd0a18] - doc: fix style of n-api.md (theanarkh) #44377
[65c1f4015f] - doc: add history for net.createServer() options (Luigi Pinca) #44326
[4a0f750a6c] - doc: add daeyeon to collaborators (Daeyeon Jeong) #44355
[8cc5556f76] - doc: fix typo in test runner code examples (Moshe Atlow) #44351
[b660b7467d] - doc,worker: document resourceLimits overrides (Keyhan Vakil) #43992
[2ed3b30696] - inspector: prevent integer overflow in open() (Tobias Nießen) #44367
[b8f08e5e7e] - lib: codify findSourceMap return value when not found (Chengzhong Wu) #44397
[a86ef1ba3e] - lib: use safe Promise alternatives when available (Antoine du Hamel) #43476
[e519ac7842] - meta: update AUTHORS (Node.js GitHub Bot) #44511
[c03f28b960] - meta: update AUTHORS (Node.js GitHub Bot) #44422
[ef08cbddac] - node-api: avoid calling virtual methods in base's dtor (Chengzhong Wu) #44424
[256340197c] - node-api: cleanup redundant static modifiers (Chengzhong Wu) #44301
[6714736706] - (SEMVER-MINOR) os: add machine method (theanarkh) #44416
[807b1e5533] - report: get stack trace with cross origin contexts (Chengzhong Wu) #44398
[b17cc877d0] - report: fix missing section javascriptHeap on OOMError (Chengzhong Wu) #44398
[1f23c17ae0] - (SEMVER-MINOR) report: expose report public native apis (Chengzhong Wu) #44255
[df259005d9] - report: add queue info for udp (theanarkh) #44345
[fc17b808c9] - src: rename misleading arg in ClientHelloParser (Tobias Nießen) #44500
[125ab7da2a] - src: improve error handling in CloneSSLCerts (Tobias Nießen) #44410
[aa34f7347b] - src: fix incorrect comments in crypto (Tobias Nießen) #44470
[18b720805f] - src: avoid casting std::trunc(... / ...) to size_t (Tobias Nießen) #44467
[4331bbe2af] - (SEMVER-MINOR) src: expose environment RequestInterrupt api (Chengzhong Wu) #44362
[c5413a1146] - src: simplify enable_if logic of ToStringHelper::BaseConvert (Feng Yu) #44306
[dcc1cf4f4e] - src: add error handling to uv_uptime call (Juan José Arboleda) #44386
[fd611cc272] - src: remove base64_select_table and base64_table (Tobias Nießen) #44425
[4776b4767b] - src: fix uv_err_name memory leak (theanarkh) #44421
[8db2e66d3a] - src: make Endianness an enum class (Tobias Nießen) #44411
[048e440878] - src: fix ssize_t error from nghttp2.h (Darshan Sen) #44393
[dc1c95ede3] - src: trace fs async api (theanarkh) #44057
[0f4e98ba2c] - src: restore context default IsCodeGenerationFromStringsAllowed value (Chengzhong Wu) #44324
[05fb650b54] - src: simplify and optimize GetOpenSSLVersion() (Tobias Nießen) #44395
[7f16177f96] - src: use if constexpr where appropriate (Anna Henningsen) #44291
[2be8acad18] - src: simplify ECDH::GetCurves() (Tobias Nießen) #44309
[3eb7918f8e] - src: make minor improvements to EnabledDebugList (Tobias Nießen) #44350
[88d9566593] - src: remove KeyObjectData::symmetric_key_len_ (Tobias Nießen) #44346
[768c9cb872] - src: fix multiple format string bugs (Tobias Nießen) #44314
[6857ee8299] - src: make minor improvements to SecureBuffer (Tobias Nießen) #44302
[2facf8b8e0] - stream: fix setting abort reason in ReadableStream.pipeTo() (Daeyeon Jeong) #44418
[65134d696b] - stream: fix ReadableStreamReader.releaseLock() (Daeyeon Jeong) #44292
[4c33e5d4ce] - test: avoid race in file write stream handle tests (Joyee Cheung) #44380
[0d77342a39] - test: style updates for assert.snapshot() (Colin Ihrig) #44429
[e36ed44b26] - test: deflake child process exec timeout tests (Joyee Cheung) #44390
[0af15c71fb] - test: make the vm timeout escape tests more lenient (Joyee Cheung) #44433
[0f071b800e] - test: split heap prof tests (Joyee Cheung) #44388
[2dd88b8425] - test: fix multiple incorrect mustNotCall() uses (Tobias Nießen) #44022
[4ae1f4990c] - test: split report OOM tests (Joyee Cheung) #44389
[3a5fdacdc2] - test: fix WPT runner result (Daeyeon Jeong) #44238
[e001aafee3] - test: raise sleep times in child process tests (Joyee Cheung) #44375
[8e2dcafc24] - test: remove duplicate test (Luigi Pinca) #44313
[c65d7fb1fa] - test: add OpenSSL 3.x providers test (Richard Lau) #44148
[11e9d6e173] - test: make tmpdir.js importable from esm (Geoffrey Booth) #44322
[a35c2f9ef4] - test_runner: fix duration_ms to be milliseconds (Moshe Atlow) #44450
[8175c65b4d] - test_runner: support programmatically running --test (Moshe Atlow) #44241
[1cdccbc845] - tls: remove SecureContext setFreeListLength (Tobias Nießen) #44300
[70399166f3] - tls: use OpenSSL constant for client random size (Tobias Nießen) #44305
[6fe189b62a] - tools: update lint-md-dependencies to [email protected] (Node.js GitHub Bot) #44510
[1e62bb14dd] - tools: fix typo in avoid-prototype-pollution lint rule (Antoine du Hamel) #44446
[78c6827688] - tools: don't use f-strings in test.py (Santiago Gimeno) #44407
[443730c419] - tools: update doc to [email protected] (Node.js GitHub Bot) #44370
[96df99375e] - tools: update eslint to 8.23.0 (Node.js GitHub Bot) #44419
[b6709544e9] - tools: refactor avoid-prototype-pollution lint rule (Antoine du Hamel) #43476
[8b0a4afcae] - tty: fix TypeError when stream is closed (Antoine du Hamel) #43803
[c4a45a93f3] - vm: avoid unnecessary property getter interceptor calls (Joyee Cheung) #44252
[736a04aa13] - vm: include vm context in the embedded snapshot (Joyee Cheung) #44252
[bce827e5d1] - vm: make ContextifyContext template context-independent (Joyee Cheung) #44252

Windows 32-bit Installer: https://nodejs.org/dist/v18.9.0/node-v18.9.0-x86.msi
Windows 64-bit Installer: https://nodejs.org/dist/v18.9.0/node-v18.9.0-x64.msi
Windows 32-bit Binary: https://nodejs.org/dist/v18.9.0/win-x86/node.exe
Windows 64-bit Binary: https://nodejs.org/dist/v18.9.0/win-x64/node.exe
macOS 64-bit Installer: https://nodejs.org/dist/v18.9.0/node-v18.9.0.pkg
macOS Apple Silicon 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-darwin-arm64.tar.gz
macOS Intel 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-darwin-x64.tar.gz
Linux 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-linux-x64.tar.xz
Linux PPC LE 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-linux-ppc64le.tar.xz
Linux s390x 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-linux-s390x.tar.xz
AIX 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-aix-ppc64.tar.gz
ARMv7 32-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-linux-armv7l.tar.xz
ARMv8 64-bit Binary: https://nodejs.org/dist/v18.9.0/node-v18.9.0-linux-arm64.tar.xz
Source Code: https://nodejs.org/dist/v18.9.0/node-v18.9.0.tar.gz
Other release files: https://nodejs.org/dist/v18.9.0/
Documentation: https://nodejs.org/docs/v18.9.0/api/
SHASUMS-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

e4d8d6030efe1e0b103ba7a158996b2ff4ceef0f8fd05af9ea61eb4b17d6fa0c  node-v18.9.0-aix-ppc64.tar.gz
60300b40f539fc93005859fcb7ea585bfd111800e90b6ee744a07f2380512bbb  node-v18.9.0-darwin-arm64.tar.gz
d20ad4d52c0df79bc2296f78cb5cd7d0757e848263b30822538f31d695d3b0a4  node-v18.9.0-darwin-arm64.tar.xz
dce1144cbfc01e03c2e84582461c3ce83541968b2b52a3d3a6f2bbfb09183fba  node-v18.9.0-darwin-x64.tar.gz
aecd44f8799e31ed73fb746d00da28f0a32d0ec45079ee85545881e607ddd4d3  node-v18.9.0-darwin-x64.tar.xz
e7ec2a64fc24cc5c790289df80e4788190ca6760a96b6947ef02452bb520cd00  node-v18.9.0-headers.tar.gz
47ad304159c8c01271f166b8750d82d96b7d7e1586d9a9225fea0f50a5ce4224  node-v18.9.0-headers.tar.xz
0d0e671158e072a63c24714bfc4c19a4bb0a70c89d219b1f23d67cbea9c5ffcf  node-v18.9.0-linux-arm64.tar.gz
3ec898c66916ab7e245c34f402c091c50bcaa325617f692a6b62dc8d9c06baa0  node-v18.9.0-linux-arm64.tar.xz
195bea2e5be6c791bc460fdc0939375f25b6246cbb57521374eddc9e77323829  node-v18.9.0-linux-armv7l.tar.gz
730697bcfc5ba1538a3c8380edcf51cfa58c760804fb90bab6cfda34d30c55f8  node-v18.9.0-linux-armv7l.tar.xz
794bb57444e14e3282f8f2416483c385e3ae1d66b8babb025ed2b78e22d8157d  node-v18.9.0-linux-ppc64le.tar.gz
1b8fadd2d879d2a8b6ee97fcfc0caaa0e1190026e565c097c898824541cd2d86  node-v18.9.0-linux-ppc64le.tar.xz
1061f5ed96290df7f3e5b1f183fdacfd82bba0d8c2dfb984505110f83e9ac215  node-v18.9.0-linux-s390x.tar.gz
86d55c4f495e74e8a9d03e4e34ef4f2ee6ec6ab187ecedf3e430e93baf9faea0  node-v18.9.0-linux-s390x.tar.xz
7fdbfdb985a48db3d22a2472330db05d94c9aff59192b09d8f9ab5fcedba76d5  node-v18.9.0-linux-x64.tar.gz
0137e43f5492dd97b6ef1f39ea4581975016e5f1e70db461d7292c6853ace066  node-v18.9.0-linux-x64.tar.xz
bae2d3417a9e1c4cc7145801e428c13e9fce006044258194d073207efd1b736b  node-v18.9.0-win-x64.7z
d7a9c9e8a36259d1e15052c135fbd11937d0f0485360e402e833522076233a7a  node-v18.9.0-win-x64.zip
7b2f1a76c4bbcc464f05b4895dbe5e48047d35cf88b210bdde71034f0aee3146  node-v18.9.0-win-x86.7z
6543f6e72a704bf56170dd874f9edc6ed9468d15008dbb214654d3681221c37e  node-v18.9.0-win-x86.zip
38744484707594133d1b9e94d2575d403d132761241de2a6b5a4bf0648946ea0  node-v18.9.0-x64.msi
4c4e9206f652e47371eb52753501280348bb8bfad827d1ac6f782152a00df31b  node-v18.9.0-x86.msi
7b469adcc4863e53fdbeb66e0eff3316abdf40d80be51adc6b4c7fe1dd04348e  node-v18.9.0.pkg
89af82a3f8df01a24bb61b69a4e9a0482bfa8793a7686c88227bce10ee0c72bc  node-v18.9.0.tar.gz
c75cc89afead976791900accde02a7b1e7e762702f0f6fa68eaacb01984d9654  node-v18.9.0.tar.xz
6f4da4ffa06afa4096acb5279e6875ccb5ffcd03a86fbbee382dde4bc96565f5  win-x64/node.exe
3111a04d3ae94921ac20f2afc4e167c59e50c07609ee940d1a8eec46f08310ad  win-x64/node.lib
7f5f093c1f612803629218793c5eb72719274faa078a4f63ecbe543b7a00e9e6  win-x64/node_pdb.7z
e750259b9c628578fc2ae463d62fadf6c95c266e1c5f32f252d80c7e716c3418  win-x64/node_pdb.zip
3452040fc8d9e8894e169229d30425f00dfbf0082e00081baa7d550e7b7321d8  win-x86/node.exe
e0b45a34da85070b41e13169a6ed30ea782d400dd8e8597d665727bac8d621f0  win-x86/node.lib
1bc12a2b9686a08a935fc6e78c9595e44d61df33a342bd98ad89088f75367a7b  win-x86/node_pdb.7z
c52111fdd0180eb82d96b376c37ecf1160f57ccb0e12102a5183ece4708d8c70  win-x86/node_pdb.zip
-----BEGIN PGP SIGNATURE-----

iQGzBAEBCAAdFiEEiQwI24V5Fi/uDfnbi+q0389VXvQFAmMZ/50ACgkQi+q0389V
XvTfrwv/YumGt2nE/vNOyRzrP6pKZzT5wxgV9Ol/4Qqcl5TRPSc8DD2kNEZZF6cR
MpgKecPQDRzeNrZHlNbKhkvUBCWKocLdtvX1yb5GuUH/nBOQWXv6oDiIqWtoXXCi
kGbi28YYhKTyu+7qs41jd4UPYT7LF/NEPnTjtm70BYrQd6Vgbz/MhDfVdlO5Tmiq
6BiJlyJuVdTCrfNA3vtIUNAMdbaW1X17/dxMIMZ50XmPl5gZueyG1fsZ/dbGp4Ly
SMjPt8+yovjcOAvDL/Ny5acItQaH710fNR9gvdiJgcaxk/A9jH8bKdcpZf2yscOM
Bz5ygWask7DxqfrOLWoty1suKlhSUl3OdnAJPJXNIFMIi0vSb/Zj+5N2NiWQmEsG
WwH9oJmld25zaF7V/bNPS2FRIqO+AsCM/9ReSbpzsh4gl6uFKFpOIrUwSXwVsHez
KYM17wcZ3OsgAg3eXTHJJJu7kWnwGOPXzolgTVk5bxromVuDzpxSd5Cjj/qIsEpk
sG5Y0iVC
=8xzl
-----END PGP SIGNATURE-----


      
