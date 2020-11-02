function f1(result) {
   return new Promise(function(resolve, reject) {
       setTimeout(function() {
           resolve(1);
       }, 1000);
   })
}

async function logName() {
    const result = await f1(1);
    console.log(result);
    console.log(2);
}

logName();
