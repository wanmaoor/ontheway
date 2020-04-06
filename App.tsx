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
import {Provider} from 'react-redux';
import store from './redux/store';
import {StyleSheet, View} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import global from './styles/global';
import Login from './Views/Login';
import SignUp from './Views/SignUp';
import Nav from './components/Nav';
import ModifyProfile from './Views/User/ModifyProfile';

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={[styles.container, global.global]}>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path={'/nav'} component={Nav} />
          <Route path={'/modifyProfile'} component={ModifyProfile} />
        </View>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
