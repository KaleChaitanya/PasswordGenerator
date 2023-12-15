const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passLength = 15;
let generatePassword = document.getElementById('Generate-password')
let firstPassword = document.getElementById('first-password')
let secondPassword = document.getElementById('second-password')

function randomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomPassword() {
    let randomPassOne = "";
    let randomPassTwo = "";
    for (let i = 0; i < passLength; i++) {
        randomPassOne += randomCharacter()
        randomPassTwo += randomCharacter()
    }
    let firstPass = randomPassOne
    let secondPass = randomPassTwo
    firstPassword.textContent = firstPass
    secondPassword.textContent = secondPass

}
generatePassword.addEventListener("click", randomPassword)