module.exports = {
  info: () => {
    console.log('Easily extract array elements or object properties and store them in variables.');
  },
  arrays: () => {
    [a, b] = ['foo', 'bar'];

    console.log('[a, b] = [\'foo\', \'bar\'];\n\n\n');

    setTimeout(() => {
      console.log(`[OUTPUT for a]: ${a}`);
      console.log(`[OUTPUT for b]: ${b}`);
    }, 3000);
  },
  objects: () => {
    console.log('Due to NODEJS being so slow >.< \nyou would need a transpiler like BABEL to use object destructuring . . .');
    console.log('\n\nHere is the syntax though:');

    console.log('{c, d} = { foo: \'Joe\', bar: \'Vito marry me! :p\'};');
    console.log('{c} = { foo: \'Joe\', bar: \'Vito marry me! :p\'};');
    console.log('console.log(bar) // undefined');
  },
};
