import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import { Text } from 'react-native-elements';
import strore from './Store/strore'
import { Provider } from 'react-redux';

export default App = () => {

    return (
        <Provider store={strore}>
            <Navigation />
        </Provider>
    )
}
