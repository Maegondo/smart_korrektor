import { uppercaseWords, wordSuffixes } from '../middleware/constants'
import WordCorrector from '../middleware/word_corrector'

export const state = () => ({

  uppercase: true,

  selectedWords: uppercaseWords,

  correctedText: 'Dein korrigierter Text wird hier erscheinen',

  userInput: ''
})

export const mutations = {
  toggle (state, item) {
    item.selected = !item.selected
  },

  selectAllWords (state) {
    state.selectedWords.forEach(element => (element.selected = true))
  },

  deselectAllWords (state) {
    state.selectedWords.forEach(element => (element.selected = false))
  },

  selectOnlyFormal (state) {
    this.commit('deselectAllWords')

    const informalWords = ['Sie', 'Ihnen', 'Ihr', 'Ihre', 'Ihres', 'Ihrem', 'Ihren', 'Ihrer']

    for (let i = 0; i < informalWords.length; i++) {
      const foundItem = state.selectedWords.find(element => element.title === informalWords[i])

      foundItem.selected = true
    }
  },

  selectOnlyInformal (state) {
    this.commit('deselectAllWords')

    const informalWords = ['Du', 'Dir', 'Dich', 'Dein', 'Deiner', 'Deinem', 'Deines', 'Deinen', 'Deine']

    for (let i = 0; i < informalWords.length; i++) {
      const foundItem = state.selectedWords.find(element => element.title === informalWords[i])

      foundItem.selected = true
    }
  },

  setUppercase (state, status) {
    state.uppercase = status
  },

  setUserInput (state, input) {
    state.userInput = input
  },

  correctText (state) {
    const wordCorrector = new WordCorrector(state.selectedWords, wordSuffixes, state.userInput, state.uppercase)
    const newText = wordCorrector.correctWords()

    state.correctedText = newText
  }
}
