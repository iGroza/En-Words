import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import { Text } from 'react-native-elements';

export default App = () => {
    const initialState = {
        category: [],
        word: {},
        wordCat: {}
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState({ ...state, category: require('./assets/json/cat.json') })
    }, [])

    return (
        <Context.Provider value={{ state, setState }}>
            <Navigation />
        </Context.Provider>
    )
}

export const Context = React.createContext()