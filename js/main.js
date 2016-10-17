function findMult(bigNum, smallerNum){
  for (let i = 1; i < bigNum; i++){
    // console.log('fM testing ' + smallerNum + ' on ' + bigNum);
    if (Math.pow(smallerNum, i) > bigNum){
      // console.log('returning: ', Math.pow(smallerNum, i-1));
      return Math.pow(smallerNum, i-1);
    };
  };
};

function findPrimes(num){
    let foobar = 1;
    // console.log('foobar: ', foobar);
  for (let i = 2; i <= num; i++){
    let factorCount = 0;
    // console.log('testing i: ', i)
    // Test for Primeness
    for (let j = 1; j <= Math.sqrt(i); j++){
      // console.log('testing j: ', j)
      if( i % j === 0){
        // console.log('potential prime of ' + i + ' is ' + j);
        factorCount++;
      };
    };
    if (factorCount === 1){
      foobar = parseInt(foobar) * parseInt(findMult(num, i));
      // console.log('findMult ', findMult(num,i));
      // foobar[foobar.length] = findMult(num, i);
    };
  };
  return foobar;
};

// var test = findPrimes(10);
console.log('Least Common Multiple of 10: ', findPrimes(10));