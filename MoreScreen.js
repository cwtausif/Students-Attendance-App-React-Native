// MoreScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, SafeAreaView } from 'react-native';

const options = [
  { id: '1', title: 'Delete Account' },
  { id: '2', title: 'Privacy Policy' },
  { id: '3', title: 'Logout' },
];

export default function MoreScreen({ navigation }) {
  const handleOptionPress = (option) => {
    switch (option) {
      case 'Delete Account':
        Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', onPress: () => {/* Handle account deletion */} },
        ]);
        break;
      case 'Privacy Policy':
        navigation.navigate('PrivacyPolicyScreen'); // Navigate to PrivacyPolicyScreen
        break;
      case 'Logout':
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.option} onPress={() => handleOptionPress(item.title)}>
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContainer: {
    paddingVertical: 20,
  },
  option: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});