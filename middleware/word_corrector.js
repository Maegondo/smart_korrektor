export default class WordCorrector {
  constructor (words, wordSuffixes, userText, uppercase) {
    this.words = words
    this.wordSuffixes = wordSuffixes
    this.userText = userText
    this.uppercase = uppercase
  }

  correctWords () {
    const selectedWords = this.filterWordList()

    this.uppercase ? this.wordsToUppercase(selectedWords) : this.wordsToLowercase(selectedWords)

    return this.userText
  }

  filterWordList () {
    const selectedWords = this.words.filter(function (word) {
      return word.selected
    })

    return selectedWords
  }

  wordsToUppercase (wordList) {
    const suffixes = this.wordSuffixes

    let text = this.userText

    wordList.forEach(function (word) {
      const wordToLookFor = word.title.charAt(0).toLowerCase() + word.title.slice(1)
      const wordToReplaceWith = word.title.charAt(0).toUpperCase() + word.title.slice(1)

      suffixes.forEach(function (suffix) {
        const sequenceToLookFor = ' ' + wordToLookFor + suffix
        const sequenceToReplaceWith = ' ' + wordToReplaceWith + suffix

        const newText = text.replace(sequenceToLookFor, sequenceToReplaceWith)

        text = newText
      })
    })

    this.userText = text
  }

  wordsToLowercase (wordList) {
    const suffixes = this.wordSuffixes

    let text = this.userText

    wordList.forEach(function (word) {
      const wordToLookFor = word.title.charAt(0).toUpperCase() + word.title.slice(1)
      const wordToReplaceWith = word.title.charAt(0).toLowerCase() + word.title.slice(1)

      suffixes.forEach(function (suffix) {
        const sequenceToLookFor = ' ' + wordToLookFor + suffix
        const sequenceToReplaceWith = ' ' + wordToReplaceWith + suffix

        const newText = text.replace(sequenceToLookFor, sequenceToReplaceWith)

        text = newText
      })
    })

    this.userText = text

    this.fixStartsOfSentences(wordList)
  }

  fixStartsOfSentences (wordList) {
    let text = this.userText

    wordList.forEach(function (word) {
      const sequenceToLookFor = '. ' + word.title.charAt(0).toLowerCase() + word.title.slice(1)
      const sequenceToReplaceWith = '. ' + word.title.charAt(0).toUpperCase() + word.title.slice(1)

      const newText = text.replace(sequenceToLookFor, sequenceToReplaceWith)

      text = newText
    })

    this.userText = text
  }
}
