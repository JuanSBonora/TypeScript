var userInput;
var userName;
userInput = 5;
userName = 'Juansbonora';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error ocurred!', 500);
