// LoginScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Perform any login logic here, then reset the stack to Main (which includes BottomTabs)
    navigation.reset({
      index: 0, // Index is set to 0 to reset the stack
      routes: [{ name: 'Main' }], // Define the route to reset to
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students Attendance App</Text>
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});