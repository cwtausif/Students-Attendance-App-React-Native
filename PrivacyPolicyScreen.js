// PrivacyPolicyScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PrivacyPolicyScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true, // Show the default header with the back button
      headerTitle: 'Privacy Policy', // Set the header title
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          {/* Insert privacy policy content here */}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 20, // Add extra padding at the bottom to ensure content isn't cut off
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});