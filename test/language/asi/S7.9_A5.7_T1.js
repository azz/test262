// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Since LineTerminator(LT) between Postfix Increment/Decrement
    Operator(I/DO) and operand is not allowed, two IO(just as two DO
    and their combination) between two references separated by [LT]
    after automatic semicolon insertion lead to syntax error
    ES6 specifies this as `ReferenceError`

es5id: 7.9_A5.7_T1
description: Try use Variable1 \n ++ \n ++ \n Variable2 construction
negative:
  phase: early
  type: ReferenceError
---*/

throw "Test262: This statement should not be evaluated.";

var x=0, y=0;
var z=
x
++
++
y
