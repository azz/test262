// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.load
description: >
  Test range checking of Atomics.load on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
---*/

var sab = new SharedArrayBuffer(4);
var views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

testWithTypedArrayConstructors(function(View) {
    let view = new View(sab);
    testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
        let Idx = IdxGen(view);
        assert.throws(RangeError, () => Atomics.load(view, Idx));
    });
}, views);
