module.exports = {
  info: () => {
    console.log('Mutable is a type of variable that can be changed.');
    console.log('In JavaScript, only objects and arrays are mutable, not primitive values');
    console.log('You can make a variable name point to a new value,');
    console.log('but the previous value is still held in memory. Hence the need for garbage collection.)');
    console.log('A mutable object is an object whose state can be modified after it is created.');
    console.log('Immutables are the objects whose state cannot be changed once the object is created.');
    console.log('########################################');
    console.log('Its all about memory blocks...');
    console.log('########################################\n\n\n\n');
  },
  lesson1: () => {
    const immutableString = 'Hello I am in a memory block!';
    console.log('let immutableString = \'Hello I am in a memory block!\';\n');
    console.log('In the above code, a new object with string value is created.');
    console.log('This means a memory block is created.\n\n');
    console.log(`[OUTPUT]: ${immutableString}`);
  },
  lesson2: () => {
    let immutableString = 'Hello I am in a memory block!';
    immutableString += ' And now I am on a completely new memory block!';
    console.log('immutableString += \' And now I am on a completely new memory block!\';\n');
    console.log('By attaching a new string to the immutableString we are actually creating a new memory block');
    console.log('which now makes javascript have to work with the garbage collector...');
    console.log('This implies a performance issue!\n\n');
    console.log(`[OUTPUT]: ${immutableString}`);
  },
  lesson3: () => {
    const mutableObj = {
      text: 'mutableObj [ 1 ]',
    };
    const mutableObj2 = mutableObj;

    console.log('now let\'s look at mutable objects\n');
    console.log(`
    const mutableObj = {
      text: 'mutableObj [ 1 ]',
    };\n`);

    console.log('    const mutableObj2 = mutableObj;\n\n');

    console.log('[OUTPUT for mutableObj2]:', mutableObj2);

    console.log('\n\nSo what happens when I add: mutableObj2.text = \'mutableObj[2]\'; to the mix?\n');
    mutableObj2.text = 'mutableObj [ 2 ]';

    console.log('[OUTPUT for mutableObj2]:', mutableObj2);
    console.log('\n\nSo What is the OUTPUT of mutableObj now?\n\n\n\n');
  },
  lesson3Result: () => {
    const mutableObj = {
      text: 'mutableObj [ 1 ]',
    };
    const mutableObj2 = mutableObj;
    mutableObj2.text = 'mutableObj [ 2 ]';

    console.log('You guessed it! :)\n\n');
    console.log('[OUTPUT for mutableObj]', mutableObj);
    console.log('\n\nThe reason for that is that mutableObj2 is just a \'HOOK\' ');
    console.log('It still remains in the same memory block\n\n\n\n');
  },
  lesson4: () => {
    console.log('Same goes with arrays...\n\n');
    const mutableArray = ['foo', 'bar'];
    const mutableArray2 = mutableArray;

    console.log('const mutableArray = [\'foo\', \'bar\'];');
    console.log('const mutableArray2 = mutableArray;\n');

    console.log('[OUTPUT for mutableArray2]', mutableArray2);

    mutableArray2.push('mutableArray [ 2 ]');
    console.log('\n\nmutableArray2.push(\'mutableArray [ 2 ]\');\n');

    console.log('[OUTPUT for mutableArray]', mutableArray);
  },
  lesson5: () => {
    console.log('\n\n\n\nso let\'s talk performance...\n\n');
    console.log(`
    for(let i = 0; i < 10; i += 1) {
      console.log('This is a brand new memory Block: Math.random()');
    }\n\n\n\n`);

    for (let i = 0; i < 10; i += 1) {
      console.log(`This is a brand new memory Block: ${  Math.random()}`);
    }

    console.log('\n\n\nlook at them new memory blocks! :O\n\nLet\'s see with an array\n\n\n\n');

    console.log(`const array = [];
    for(let i = 0; i < 10; i += 1) {
      array.push(This is allocated ONLY in one memory block Math.random());
    }\n\n`);

    const array = [];
    for (let i = 0; i < 10; i += 1) {
      array.push(`This is allocated ONLY in one memory block ${Math.random()} `);
    }

    console.log(array);

    console.log('\n\n\nThis of course is not just about performance, as it is about controlling state.');
  },
  lesson6: () => {
    let state = { foo: 1, bar: 2 };
    let state2 = ['foo', 'bar'];

    console.log('\n\n\n\nSo let\'s talk state...\n\n');
    console.log('The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. ... These state machines simply have their State objects swapped out with another one when a state transition takes place.\n\n');
    console.log('Good practise is to never update state directly... Because if we did we might interact with the wrong outdated state anyway.\n\n');
    console.log('let state = { foo: 1, bar: 2 };');
    console.log('let state2 = [\'foo\', \'bar\'];\n\n');
    console.log('So How would we change state? correctly?\n\n');
    setTimeout(() => {
      const newState = { ...state };
      newState.foo = 100;
      state = newState;

      const newState2 = [...state2, 'VITO!!!!!'];
      state2 = newState2;

      console.log('We DON\'T hook state, we actually create a new memory block and then allocate to the old memory block.\n\n');
      console.log('const newState = { ...state };\nnewState.foo = 100;\nstate = newState;\n\n');
      console.log('const newState2 = [...state2, \'VITO!!!!!\'];\n\n');
      console.log('[OUTPUT for state]: ', state);
      console.log('[OUTPUT for state2]: ', state2);
    }, 5000);
  },
};
