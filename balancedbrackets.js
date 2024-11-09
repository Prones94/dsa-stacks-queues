/* Balanced Brackets Challenge */

function isBalancedString(str){
  const stack = []
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let char of str){
    if (char === '(' || char === '[' || char === '{'){
      stack.push(char)
    } else if (char === ')' || char === ']' || char === '}'){
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]){
        return false
      }
    }
  }
  return stack.length === 0
}

