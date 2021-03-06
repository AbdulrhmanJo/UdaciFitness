import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/addEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <AddEntry />
      </View>
    </Provider>
    
  );
}

