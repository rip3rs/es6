module.exports = {
  info: () => {
    console.log('Synchronous Loading. Synchronous loading occurs when the browser must halt the rendering of the page in order to complete the execution of JavaScript code. When the browser encounters a synchronous JavaScript tag, it blocks the page from rendering until the code execution completes.');
  },
  callbackHell: () => {
    console.log('Due to JS being an Async language we sometimes NEED to finda a solution to make it sync without breaking Async..');
    console.log('Callbacks:\n');
    console.log(`
    const callBack = () => setTimeout(() => {
      console.log('1');
    }, 2000);

    const iWantToDoSomething = (cb) => {
      cb();
      console.log('2');
    };

    iWantToDoSomething(callBack);
    console.log('3');\n\n\n\n`);

    const callBack = () => setTimeout(() => {
      console.log('1');
    }, 2000);

    const iWantToDoSomething = (cb) => {
      cb();
      console.log('2');
    };

    iWantToDoSomething(callBack);
    console.log('3');
  },
  promises: () => {
    console.log('A promise does exactly the same as a callback, difference is we can return!');
    console.log('This is how you make a promise: \n\n');
    const aPromise = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error(`${num} is bigger than 10`));

      resolve(`${num} is less than 10`);
    });

    console.log(`
    const aPromise = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error(num is bigger than 10));

      resolve( num is less than 10);
    });\n\n
    aPromise(3)
      .then(response => console.log(response))
      .catch(error => console.log(error));`);

    aPromise(3)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    console.log('\nthis should output the resolve state\n\n\n');
    console.log('So what if I have to do a chain promise?\n\n');
    console.log('BY THE WAY DID YOU NOTICE THAT THE PROMISE WILL CAST AFTER THIS LINE?');
  },
  promiseLesson2: () => {
    console.log('\n\n\nSo let\'s take the initial promise aPromise() and create a new promise to work only AFTER the first is complete');
    const aPromise = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error(`${num} is bigger than 10`));

      resolve(num);
    });

    const aPromise2 = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error('Im in the second promise >.< Error'));

      resolve(num * 2);
    });

    console.log('\n\nWELCOME TO HELL!\n\n');
    console.log(`
    aPromise(2)
      .then((response) => {
        aPromise2(response)
          .then((response2) => {
            aPromise(response2)
              .then(response3 => console.log(response3))
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));\n\n\n`);

    console.log('THIS IS NOT THE WAY!!!!!!!!!!!!!!!!!!\n\n');

    aPromise(2)
      .then((response) => {
        aPromise2(response)
          .then((response2) => {
            aPromise(response2)
              .then(response3 => console.log(response3))
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  },
  promiseLesson3: () => {
    console.log('The correct way is not have a cascading effect but a waterfall effect!');
    console.log('The CORRECT WAY:');

    const aPromise = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error(`${num} is bigger than 10`));

      resolve(num);
    });

    const aPromise2 = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error('Im in the second promise >.< Error'));

      resolve(num * 2);
    });

    console.log(`
    aPromise(2)
      .then(response => aPromise2(response))
      .then(response2 => aPromise(response2))
      .then(response3 => console.log(response3))
      .catch(error => console.log(error));\n\n\n`);

    aPromise(2)
      .then(response => aPromise2(response))
      .then(response2 => aPromise(response2))
      .then(response3 => console.log(response3))
      .catch(error => console.log(error));
  },
  promisesV2: () => {
    console.log('There is a new way is ES6 that allows you to do promises a bit differently...');
    console.log(`
    const asyncShow = async (num) => {
      try {
        const promise1 = await aPromise(num);
        const promise2 = await aPromise2(promise1);
        const promise3 = await aPromise(promise2);
        console.log(Success promise3);
      } catch (e) {
        console.log('In ERROR: ');
        console.log(e);
      }
    };`);

    const aPromise = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error(`${num} is bigger than 10`));

      resolve(num);
    });

    const aPromise2 = num => new Promise((resolve, reject) => {
      if (num > 10) reject(new Error('Im in the second promise >.< Error'));

      resolve(num * 10);
    });

    const asyncShow = async (num) => {
      try {
        const promise1 = await aPromise(num);
        const promise2 = await aPromise2(promise1);
        const promise3 = await aPromise(promise2);
        console.log(`Success ${promise3}`);
      } catch (e) {
        console.log('\n\nIn ERROR: ');
        console.log(e);
      }
    };

    console.log('the first one will be on Success');
    asyncShow(0);
    console.log('the first second will be on failure');
    asyncShow(2);
  },
  promisesOnSteroids: () => {
    console.log('There is another way... which is observables. this is an implementation from a library called RxJS');
    console.log('Angular uses it and it is becoming the trend. Only difference is that:');
    console.log('A Callback and Promise is only called once.');
    console.log('While an observable is called on data changes or (state change).');
    console.log('A problem with this is that the API should have an observer so that it can maintain connection with the FE');
  },
};
