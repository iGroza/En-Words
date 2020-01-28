import React from 'react';
import Navigation from './Navigation/Navigation';
import strore from './Store/strore'
import { Provider } from 'react-redux';

export default App = () => {
    return (
        <Provider store={strore}>
            <Navigation />
        </Provider>
    )
}
