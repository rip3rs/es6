module.exports = {
  info: () => {
    console.log('Spread is used to split up array elements OR object properties');
    console.log('Rest is used to merge a list of function arguments into an array');
    console.log('the syntax is basically ... three dots...');
    console.log('what it depends is on how you implement the ... three dots...');
  },
  spread: () => {
    const array = ['1', '2', '3'];
    const newArray = [...array, 4, 5];

    console.log('const array = [\'1\', \'2\', \'3\'];\nconst newArray = [...array, 4, 5];\n\n');

    console.log('[OUTPUT]', newArray);

    console.log('\n\nWith Object...\n');

    const obj = { foo: '1' };
    const newObj = { ...obj, bar: '2' };

    console.log('const obj = { foo: \'1\' };\nconst newObj = { ...obj, bar: \'2\' };');

    console.log('\n[OUTPUT]', newObj);
  },
  rest: () => {
    const someFunc = (...args) => args.sort();
    console.log('const someFunc = (...args) => args.sort();\n\n');

    console.log(someFunc('one', 'foo', 'bar'));
  },
};
