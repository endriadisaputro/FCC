function sumFibs(num) {
    let f0=0, f1=1, next, result=0;
    for(let i = 1; i <= num; i++){
        if(f1 % 2 === 1 && f1 <= num){
            result += f1
        }
        next = f0 + f1;
        f0 = f1;
        f1 = next;
    }
    return result;
  }
  
  console.log(sumFibs(10));

  function sumFibss(num) {
    let f0=0, f1=1, next, result=[];
    for(let i = 1; i <= num; i++){
        if(f1 % 2 === 1 && f1 <= num){
           result.push(f1)
        }
        next = f0 + f1;
        f0 = f1;
        f1 = next;
    }
    return result.reduce((acc, curr) => acc + curr);
  }
  
  console.log(sumFibss(10));


  /*
    Sum All Odd Fibonacci Numbers
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

    sumFibs(1) should return a number.

    sumFibs(1000) should return 1785.

    sumFibs(4000000) should return 4613732.

    sumFibs(4) should return 5.

    sumFibs(75024) should return 60696.

    sumFibs(75025) should return 135721
    */