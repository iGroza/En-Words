
const initialState = {
    category: require('../../Assets/json/cat.json'),
   // word: require('../../Assets/json/word.json'),
  //  wordCat: require('../../Assets/json/word_cat.json'),
    customWord: [],
    selectedWord: [],
    settings: {}
}

export default function(state = initialState, action){

    switch(action.type){

        default: return state
    }
}