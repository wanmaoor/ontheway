/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import global from './styles/global';
import Login from './Views/Login';
import SignUp from './Views/SignUp';
import Nav from './components/Nav';

const App = () => {
  return (
    <NativeRouter>
      <View style={[styles.container, global.global]}>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path={'/nav'} component={Nav} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
