module.exports = function recursion(tree) {
  const arr = [];
  const deep = 0;

  function step(leaf, num) {
    if (!arr[num]) {
      arr[num] = [];
    }
    arr[num].push(leaf.value);

    if (leaf.left && leaf.right) {
      step(leaf.left, num + 1);
      step(leaf.right, num + 1);
    }
  }

  step(tree, deep);

  return arr;
};
