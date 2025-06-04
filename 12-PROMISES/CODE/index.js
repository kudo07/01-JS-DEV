// PROMISES Interview Question

// synchronous vs asynchronous code
// 1.
//Synchronous code
console.log('start');
console.log('Subscribe to Roadside Coder');
console.log('stop');

// 2.
// Asynchronous code with setTimeout
console.log('start');

setTimeout(() => {
  console.log('here i ams');
}, 2000);

console.log('STOP');

// 3 asyncronous example
console.log('start');
function importAction(username) {
  setTimeout(() => {
    return `hello ${username}`;
  }, 2000);
}
const message = importantAction('Roadside Coder');
console.log(message);

console.log('stop');

// 4

// Callback

console.log('start');
function importActionOne(username, cb) {
  setTimeout(() => {
    cb(`subscribe ${username}`);
  });
}

importAction('hel', (message) => {
  console.log(message);
});

console.log('stop');
// 5.
// Callback Hell
console.log('start');

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 1000);
}

const messageOne = importAction('hello', (message) => {
  console.log(message);
  likeTheVideo('js', (action) => {
    console.log(action);
    shareTheVideo('jsq', (action) => {
      console.log(action);
    });
  });
});

console.log('stop');

// 6.
// Promises

console.log('start');
const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve('this will return: resolve');
    } else {
      reject(new Error('this is will return reject'));
    }
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

console.log('stop');

// Rewriting Callbacks
//7

console.log('start');

function importActionPromise(username) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`subs ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

importActionPromise('coder')
  .then((res) => {
    console.log(res);
    likeTheVideo('elo').then((res) => {
      console.log(res);
      shareTheVideo('glo').then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

// 8
// Promise Chaining
// importAction('Rad')
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo('js');
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo('wef');
//   })
//   .then((res) => {
//     console.log(res);
//   });
// 9.
// Promise Combinator
// 9.1
// promise.all()

console.log('start');
Promise.all([
  importActionPromise('roadside'),
  likeTheVideo('jk'),
  shareTheVideo('hel'),
])
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });

console.log('stop');

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

//// 9.2
// promise.race()
Promise.race([
  importActionPromise('hfbr'),
  likeTheVideo('jwrgfe'),
  shareTheVideo('wefk'),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//faster one will first execute
Promise.allSettled([
  importantAction('Roadside Coder'),
  likeTheVideo('Javascript Interview Questions'),
  shareTheVideo('Javascript Interview Questions'),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('stop');
const promise5 = Promise.resolve(3);
const promise4 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo')
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// Expected output:
// "fulfilled"
// "rejected"
// 9.4 PROMISE.ANY()
Promise.any([importAction('wef'), likeTheVideo('fwf'), shareTheVideo('we')])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('stop');

// 10
// async & await
const result = async () => {
  try {
    const message1 = await importActionPromise('qew');
    const message2 = await likeTheVideo('Javascript Interview Questions');
    const message3 = await shareTheVideo('Javascript Interview Questions');
    console.log({ message1, message2, message3 });
  } catch (error) {
    console.log(error);
  }
};

result();
// ----------> Interview Question

// Question 1 : What is Output?
console.log('start');
const promise = new Promise((res, rej) => {
  console.log(1);
  res(2);
});
promise.then((res) => {
  console.log(res);
  // 2
});
console.log('end');
const promise7 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise7.then((res) => {
  console.log(res);
  // .2
  // resolvve is not return
});

console.log('end');

// Question 2 : What is Output?

console.log('start');

const promise9 = new Promise((res, rej) => {
  console.log(1);
  res(2);
  console.log(3);
});

promise.then((res) => {
  console.log(res);
});

console.log('end');
// Question 3 : What is Output?

console.log('start');
const fn = () => {
  new Promise((res, rej) => {
    console.log(1);
    res('suc');
  });
};
console.log('middle');

// fn.then((res) => {
//   console.log(res);
// });

console.log('end');

// Question 4 : What is Output?

function job() {
  return new Promise(function (res, rej) {
    rej();
  });
}

let promiseJob = job();

promiseJob
  .then(() => {
    console.log('success 1');
  })
  .then(() => {
    console.log('success 2');
  })
  .then(() => {
    console.log('success 3');
  })
  .catch(() => {
    console.log('error 1');
  })
  .then(() => {
    console.log('suc4');
  });
// Step 3: What happens next?
// After the .catch(...), the promise is considered handled. The .catch() doesn't rethrow the error — it resolves the promise.

// So the next .then(...) receives a resolved state.

// js
// Copy
// Edit
// .then(() => {
//   console.log('suc4'); // <-- This runs!
// });
// last then not run in the following example
// if throw error then not run
Promise.reject('initial error')
  .catch((err) => {
    console.log(err);
    throw 'new error';
    // in the case this is reject but also in reject
    // in the above that is reject but still resolve as catch handles the error
  })
  .then(() => {
    console.log('this will not run');
  })
  .catch((err) => {
    console.log('final catch', err);
  });
// ['final catch', 'new error']
// 'that throw value will pass from there catch block to here

// Question 5 : What is Output?
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promiseJobOne = job(true);

promiseJobOne
  .then(function (data) {
    console.log(data);

    // become reject promise
    return job(false);
    // the promise chain is now reject state
  })

  .catch(function (error) {
    console.log(error);
    // rror

    return 'Error caught';
    // it handles and become the resolved state
  })

  .then(function (data) {
    console.log(data);
    //error caugh
    //return a resolve a promise here
    return job(true);
  })

  .catch(function (error) {
    console.log(error);
  });
