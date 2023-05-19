import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Table = () => {
  const data = [
    {id: 1, name: 'John', rank: 1, bananas: 5, isSearchedUser: true},
    {id: 2, name: 'Jane', rank: 2, bananas: 3, isSearchedUser: false},
    {id: 3, name: 'Bob', rank: 3, bananas: 2, isSearchedUser: false},
    {id: 4, name: 'Alice', rank: 4, bananas: 1, isSearchedUser: false},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.parentBoxStyles}>
        <View style={styles.boxStyles}>
          <Text>{'Name'}</Text>
        </View>
        <View style={styles.boxStyles}>
          <Text>{'Rank'}</Text>
        </View>
        <View style={styles.boxStyles}>
          <Text>{'Number of bananas'}</Text>
        </View>
        <View style={{flex: 1, padding: 5}}>
          <Text>{'isSearchedUser?'}</Text>
        </View>
      </View>
      {data.map(row => (
        <View key={row.id} style={styles.parentBoxStyles}>
          <View style={styles.boxStyles}>
            <Text>{row.name}</Text>
          </View>
          <View style={styles.boxStyles}>
            <Text>{row.rank}</Text>
          </View>
          <View style={styles.boxStyles}>
            <Text>{row.bananas}</Text>
          </View>
          <View style={{flex: 1, padding: 5}}>
            <Text>{row.isSearchedUser ? 'Yes' : 'No'}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 18,
    marginTop: 50,
  },
  boxStyles: {
    flex: 1,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  parentBoxStyles: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default Table;
