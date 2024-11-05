import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    color: '#fff',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
