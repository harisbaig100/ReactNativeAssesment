import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalContext, GlobalStateProvider} from '../services/Global';

const UserSearchInput = () => {
  const [userName, setUserName] = useState('');
  const {userData, setuserData} = useContext(GlobalContext)
  
  const handleSearch = () => {
    // Perform search logic using the entered user name
    console.log('Searching for user:', userName);
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
        value={userName}
        onChangeText={text => setUserName(text)}
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
