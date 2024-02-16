function isParenthesisValid(validationString) {
    var stack = []
    for (var pos = 0; pos < validationString.length; pos++) {
        var currentChar = validationString.charAt(pos)
        if (currentChar === "(") {
            stack.push(currentChar);
        } else if (currentChar === ")") {
            if (stack.length === 0) {
                return false // Extra closing parenthesis
            }
            stack.pop()
        }
    }
    return stack.length === 0 // Check for extra opening parentheses
}

module.exports = isParenthesisValid