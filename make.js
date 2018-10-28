module.exports = function make(...arg) {
  let allArguments = [].concat(arg);
  return function fn(...newArg) {
    const firstArg = newArg[0];
    if (typeof firstArg === 'function') {
      const firstStepResult = firstArg(allArguments[0], allArguments[1]);
      const lastArguments = allArguments.slice(2);
      return lastArguments.reduce((acc, element) => firstArg(acc, element), firstStepResult);
    }

    allArguments = allArguments.concat(newArg);
    return fn;
  };
}
