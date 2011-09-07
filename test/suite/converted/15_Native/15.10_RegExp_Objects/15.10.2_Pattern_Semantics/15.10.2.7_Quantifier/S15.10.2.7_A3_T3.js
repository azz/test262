// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production QuantifierPrefix :: + evaluates by returning the two results 1 and \infty
 *
 * @id: S15.10.2.7_A3_T3;
 * @section: 15.10.2.7;
 * @description: Execute /\s+java\s+/.test("\t javax package") and check results;
 */

__executed = /\s+java\s+/.test("\t javax package");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\s+java\\s+/.test("\\t javax package") === false');
}

