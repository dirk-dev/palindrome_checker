console.log('logic.js loaded')

const submitButton = document.querySelector('#submitButton')

submitButton.onclick = () => {
  event.preventDefault()
  let input = document.querySelector('#wordToCheck')
  // changes input to all lowercase, regex to remove spaces
  let word = input.value.toLowerCase().replace(/\s/g, '')

  // word is split into an array, reversed, and joined into a string
  let reversedWord = word
    .split('')
    .reverse()
    .join('')
  console.log(reversedWord)

  let result = document.querySelector('#reversedWord')
  result.textContent = reversedWord

  let indicator = document.querySelector('#indicator')
  if (word === reversedWord) {
    indicator.textContent = "It's a palindrome"
  } else {
    indicator.textContent = 'Sorry, it is not a palindrome'
  }
  input.textContent = ''
}
