import { SELECT_CATEGORY } from './CategoryScreen/constants.js'
import { selectCategory } from './CategoryScreen/actions.js'

const initialState = {
    category: require('../../Assets/json/cat.json'),
    word: require('../../Assets/json/word.json'),
     wordCat: require('../../Assets/json/word_cat.json'),
    customWord: [],
    settings: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SELECT_CATEGORY: return selectCategory(state, action)
        default: return state
    }
}