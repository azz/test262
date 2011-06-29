// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.5.3_A1.14;
 * @section: 7.5.3;
 * @assertion: The "goto" token can be used as identifier;
 * @description: Checking if execution of "goto=1" succeeds;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.5.3_A1.14",

path: "07_Lexical_Conventions\7.5_Tokens\7.5.3_Future_Reserved_Words\S7.5.3_A1.14.js",

assertion: "The \"goto\" token can be used as identifier",

description: "Checking if execution of \"goto=1\" succeeds",

test: function testcase() {
   goto = 1;

 }
});

