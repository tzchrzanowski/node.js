// compares if values in question are equal, throws error if arent. returns only first error
const assert = require('assert');

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: 1
  }
};

const obj4 = Object.create(obj1);

if(assert.deepEqual(obj1, obj1)) console.log("1st ok"); 
// OK, object is equal to itself

assert.deepEqual(obj1, obj2, 'not ok');
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// values of b are different

assert.deepEqual(obj1, obj3);
// OK, objects are equal 

assert.deepEqual(obj1, obj4, '4 not good');
// AssertionError: { a: { b: 1 } } deepEqual {}
// Prototypes are ignored

assert.deepStrictEqual(obj1, obj3);


//--------------
