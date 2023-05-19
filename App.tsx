/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import UserSearchInput from './src/components/UserSearchInput';
import Table from './src/components/Table';
import {GlobalContext, GlobalStateProvider} from './src/services/Global';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'light-content'}
      />
      <GlobalStateProvider>
        <View
          style={{
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <UserSearchInput />
          <Table />
        </View>
      </GlobalStateProvider>
    </SafeAreaView>
  );
}

export default App;
