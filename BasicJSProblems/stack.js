function isValidParentheses(s){
    let stack = [];

  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for(let ch of s){
    if(ch === "(" || ch === "{" || ch === "["){
        stack.push(ch);
    }
    else{
        if(stack.length === 0) return false;
        let top = stack.pop();
        if(top !== map[ch]) return false; 
    }
  }

  return stack.length === 0; 
}

// console.log(isValidParentheses("([{}])"));
console.log(isValidParentheses("([)]"));
