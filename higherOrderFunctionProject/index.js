// recursion
const sum = n => {
  let total 
    if (n === 0) return 0;
    
    return sum(n - 1);
};

console.log(sum(4));

//checking what happens