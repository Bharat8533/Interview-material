function checkBrackets(str) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined) {
      stack.push(obj[str[i]]);
    } else if (stack.pop() !== str[i]) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(checkBrackets("()"));
