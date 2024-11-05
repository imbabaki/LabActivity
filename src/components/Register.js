import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Register</Text>
      <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Contact No." placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
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
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
