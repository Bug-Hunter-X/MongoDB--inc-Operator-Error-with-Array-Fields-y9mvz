# MongoDB $inc Operator Error with Array Fields
This example demonstrates an uncommon error encountered when using the `$inc` operator in MongoDB with array fields. The `$inc` operator is designed to increment numeric values, and attempting to use it directly on an array will result in an error.

**Bug:**
The `bug.js` file contains code that attempts to increment an array field using `$inc`. This will fail because `$inc` is not designed to operate on array fields.

**Solution:**
The `bugSolution.js` file provides the correct approach, which involves updating individual elements within the array using the `$` positional operator or the `$set` operator, depending on the specific operation required.
