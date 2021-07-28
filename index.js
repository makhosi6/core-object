let arr = []//easy wen global


function core(text, inputData = {}) {
console.log(inputData);
  console.log(Math.floor(Math.random() * 1000));
  Object.entries(inputData).map((e) => {
    console.log(e);
    for (let i = 0; i < e.length; i++) {
      if (typeof e[i] === "object") {
        typeof e[i][Symbol.iterator] === "function" ?
          e[i].map((o) => core(text, o)) :
          core(text, e[i]);
      } else if (`${e[i]}`.toLowerCase().includes(`${text}`.toLowerCase())) {
        console.log(e[i], true);
        arr.push(e[i]);
      }
    }
  });
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
  return arr;
}
let one = {
  'key1.keyA': 'valueI',
  'key2.keyB': 'valueII',
  'key3.a': {
    b: {
      c: 2
    }
  }
}

let two = {
  hello: {
    you: {
      0: 'ipsum',
      1: 'lorem',
    },
    other: {
      world: 'foo'
    }
  }
}
let three = {
  'this': [{
      contains: 'arrays'
    },
    {
      preserving: {
        them: 'for you'
      }
    }
  ]
}
console.log(core('deep', one));
