//...ABOVE CODE WAS OMMITED
//console.log(Object.entries(test));
// Object.entries(test).map((e)=> console.log(e,/*is e is an array do this if an obj do this*/e.map(i => i.toString().includes("Makho"))))

// a func tht is looking for a text in avery key/value pair
//and it takes the obj and text.
//it only process a obj [turned array] if it finds it searches the keys
//if its a plain arr it fine.
//if must process a level and its child the if a clild has more children it must sort them also and

//if its turned it to an array map it and search
// if array items are obj SORT it again

//v3.0
//data will be SORTED first then map
//we meet key/value of string type
//if we an array map over
//obj we map

//v4
//first obj.entries to make process fast for small datasets
// map and search [SEARCH]
//
//if an entry contain obj/arr push to queue PUSH used inside [SEARCH]
//then wen finish clean pushed data then start over again

//v5
// function running async along side each other
//sanitise data and push to main que**( then search




//let arr = []//easy wen global


function core(text, inputData = {}) {
  //make a global var
  arr = []
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
console.log(core('c', one), "RESULT");
