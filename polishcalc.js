function calc(expression){
  if (typeof expression !== 'string' || expression.trim() === ''){
    throw new Error("Invalid input: expression must be a non-empty string")
  }

  const tokens = expression.split(' ').filter(token => token.trim() !== '')

  function evaluate(tokens){
    const token = tokens.shift()

    if (!isNaN(token)){
      return parseFloat(token)
    }

    if (!['+','-','*','/'].includes(token)) {
      throw new error(`Invalid operator: ${token}`)
    }

    if (tokens.length < 2){
      throw new Error("Invalid expression: insufficient operands for the operation")
    }

    const operand1 = evaluate(tokens)
    const operand2 = evaluate(tokens)

    switch(token){
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        if (operand2 === 0){
          throw new Error("Division by zero error")
        }
        return operand1 / operand2
      default:
        throw new Error(`Unknown operator: ${token}`)
    }
  }
  return evaluate(tokens)
}