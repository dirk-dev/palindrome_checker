console.log('logic.js loaded')

const submitButton = document.querySelector('#formBody')

submitButton.onclick = () => {
  event.preventDefault()
  let input = document.querySelector('#wordToCheck')
  // changes input to all lowercase, regex to remove spaces
  let word = input.value.toLowerCase().replace(/\s/g, '')

  // word is split into an array, the array is reversed, and joined into a string
  let reversedWord = word
    .split('')
    .reverse()
    .join('')
  console.log(reversedWord)

  if (word === reversedWord) {
    alert('palindrome')
  } else {
    alert('fail')
  }
}
