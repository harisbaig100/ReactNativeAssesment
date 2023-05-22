import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import {GlobalContext, GlobalStateProvider} from '../services/Global';
import JsonData from './utils/leaderboard.json';

const Table = () => {
  const {userName, setUserName, userData, setUserData} =
    useContext(GlobalContext);

  const compareUsersByBananas = (a, b) => b.bananas - a.bananas;

  useEffect(() => {
    // type checking at very first line in call stack
    if (userName && typeof userName === 'string') {
      filterUsers();
    }
  }, [userName]);

  const filterUsers = () => {
    const searchName = userName.trim();
    const searchedUser = Object.values(JsonData).find(
      user => user.name === searchName,
    );

    if (!searchedUser) {
      setUserName('')
      Alert.alert(
        'Error',
        'This user name does not exist! Please specify an existing user name!',
      );
      return;
    }

    const users = Object.values(JsonData).sort(compareUsersByBananas);
    const searchedUserIndex = users.findIndex(
      user => user.uid === searchedUser.uid,
    );

    if (searchedUserIndex < 0) {
      setUserName('')
      Alert.alert(
        'Error',
        'This user name does not exist! Please specify an existing user name!',
      );
      return;
    }

    const userTemp = users.slice(0, 10);
    let rankTemp = 1;

    const mappedData = userTemp.map(u => ({
      ...u,
      rank: rankTemp++,
      isSearchedUser: false,
    }));

    if (searchedUserIndex >= 10) {
      mappedData[9] = {
        ...users[searchedUserIndex],
        rank: searchedUserIndex + 1,
        isSearchedUser: true,
      };
    }

    setUserData(mappedData.slice(0, 10));
  };

  const renderItem = ({item}) => (
    <View style={styles.parentBoxStyles2}>
      <View style={styles.boxStyles2}>
        <Text style={styles.textStyles}>{item.name}</Text>
      </View>
      <View style={styles.boxStyles2}>
        <Text style={styles.textStyles}>{item.rank}</Text>
      </View>
      <View style={styles.boxStyles2}>
        <Text style={styles.textStyles}>{item.bananas}</Text>
      </View>
      <View style={styles.boxStyles2}>
        <Text style={styles.textStyles}>
          {item.isSearchedUser ? 'Yes' : 'No'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {userName ? (
        <View style={styles.parentBoxStyles}>
          <View style={styles.boxStyles}>
            <Text style={styles.textStyles}>{'Name'}</Text>
          </View>
          <View style={styles.boxStyles}>
            <Text style={styles.textStyles}>{'Rank'}</Text>
          </View>
          <View style={styles.boxStyles}>
            <Text style={styles.textStyles}>{'Number of bananas'}</Text>
          </View>
          <View style={styles.boxStyles}>
            <Text style={styles.textStyles}>{'isSearchedUser?'}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.parentBoxStyles}>
          <View style={styles.boxStyles}>
            <Text style={styles.textStyles}>
              {'type a user name above to see the results'}
            </Text>
          </View>
        </View>
      )}

      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 18,
    marginTop: 20,
    marginBottom: 60,
  },
  boxStyles: {
    flex: 1,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  boxStyles2: {
    width: '25%',
    padding: 14,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  parentBoxStyles: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
  parentBoxStyles2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
  textStyles: {
    fontSize: 11,
  },
});

export default Table;
