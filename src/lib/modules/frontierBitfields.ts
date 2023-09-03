// put enums here
/* 
https://stackoverflow.com/questions/48295918/whats-the-point-of-using-enum-in-typescript
Enums is handy to force type validations (not easy with constants) and it's easy to convert a readable enum to a number and vice a versa.

enum Access {
  Read = 1,
  Write = 2,
  Execute = 4,
  AnotherAccess = 8
}
I use it all the time when I have a set of choices, to make it clear what kind of values the code accept and for code readability

if( myAccess == Access[Access[myaccess]] ) // enum used
Bitwise operations is another thing, eg, my accesses is (Access.Read | Access.Execute)

var myAccess = Access.Read | Access.Execute; //instead of 1 | 4 = 5

// do I have write access?
if ( (myAccess & Access.Write) > 0) { /* yes  }

// do I have read and execute 
if ( (myAccess & (Access.Read | Access.Execute)) > 0) { /* yes  }

*/

/*
// myModule.ts
export function doSomething() {
  console.log('Doing something...');
}

// main.ts
import { doSomething } from './myModule';
doSomething(); // Output: "Doing something..."
*/