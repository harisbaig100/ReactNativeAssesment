import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalContext, GlobalStateProvider} from '../services/Global';

const UserSearchInput = () => {
  const [name, setName] = useState('');
  const {userName, setUserName} = useContext(GlobalContext);

  const handleSearch = () => {
    if (name.trim() === '') {
      Alert.alert('Validation Error', 'Please enter a valid user name');
    } else {
      setUserName(name);
    }
  };

  return (
    <View style={styles.row}>
      <Icon
        name="search-outline"
        size={20}
        color="#888"
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Enter user name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '60%',
    marginRight: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchIcon: {
    left: 30,
  },
});

export default UserSearchInput;
