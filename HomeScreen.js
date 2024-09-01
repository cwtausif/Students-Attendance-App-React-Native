import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const inputRef = useRef(null); // Reference for TextInput

  // List Item
  const listItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => confirmDelete(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  // Confirm Delete
  const confirmDelete = (id) => {
    Alert.alert(
      'Delete Student',
      'Are you sure you want to delete this student?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteStudent(id) }
      ]
    );
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Add New Student
  const addStudent = () => {
    if (newStudent.trim() === '') return;

    setStudents([
      ...students,
      { id: (students.length + 1).toString(), name: newStudent.trim() }
    ]);
    setNewStudent('');
    Keyboard.dismiss(); // Dismiss keyboard after adding
    inputRef.current.focus(); // Refocus the TextInput
  };

  // Handle Logout
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Students Attendance</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef} // Attach the ref to TextInput
            style={styles.input}
            placeholder="Enter student name"
            value={newStudent}
            onChangeText={setNewStudent}
            onSubmitEditing={addStudent} // Handle submit directly
            returnKeyType="done" // Change return key to 'done'
          />
          <TouchableOpacity style={styles.addButton} onPress={addStudent}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.studentCount}>{students.length} Students</Text>
        {students.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Students found</Text>
          </View>
        ) : (
          <FlatList
            data={students}
            renderItem={listItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            style={styles.list} // Ensure FlatList has proper height
          />
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
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
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 0,
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  studentCount: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});