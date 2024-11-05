import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Login />
      <Register />
      <UserProfile />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#333',
  },
});

export default App;
