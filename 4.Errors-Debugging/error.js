const testingSyntax = () => {
  //syntax error
  // console.log('This is a testing syntax);
  //runtime error
  // console.log(x)
  //logical error
  let x = 5;
  if ((x = 10)) {
    console.log(x);
  } else {
    console.log("num is not 10");
  }
};
module.exports = testingSyntax;
