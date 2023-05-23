import {Alert} from 'react-native';
import {filterUsers} from '../helperFunctions/filterUser';

jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

describe('filterUsers', () => {
  beforeEach(() => {
    Alert.alert.mockClear();
  });

  it('should handle non-existent user name', () => {
    const setUserName = jest.fn();
    const setUserData = jest.fn();
    const JsonData = {
      uid1: {name: 'John', bananas: 10},
      uid2: {name: 'Alice', bananas: 5},
    };
    const userName = '';

    filterUsers(userName, JsonData, setUserName, setUserData);

    expect(setUserName).toHaveBeenCalledWith('');
    expect(Alert.alert).toHaveBeenCalledWith(
      'Error',
      'This user name does not exist! Please specify an existing user name!',
    );
    expect(setUserData).not.toHaveBeenCalled();
  });

  it('should filter and set user data correctly', () => {
    const setUserName = jest.fn();
    const setUserData = jest.fn();
    const JsonData = {
      uid1: {name: 'John', bananas: 10},
      uid2: {name: 'Alice', bananas: 5},
    };
    const userName = 'John';

    filterUsers(userName, JsonData, setUserName, setUserData);

    expect(setUserData).toHaveBeenCalledWith([
      {name: 'John', bananas: 10, rank: 1, isSearchedUser: false},
      {name: 'Alice', bananas: 5, rank: 2, isSearchedUser: false},
    ]);
    expect(Alert.alert).not.toHaveBeenCalled();
  });

  it('should filter and set user data correctly if the searched user index is less than 10', () => {
    const setUserName = jest.fn();
    const setUserData = jest.fn();
    const userName = 'John';
    const jsonData = {
      1: {name: 'John', bananas: 5, uid: 1},
      2: {name: 'Alice', bananas: 3, uid: 2},
      3: {name: 'Bob', bananas: 7, uid: 3},
    };

    filterUsers(userName, jsonData, setUserName, setUserData);

    expect(setUserData).toHaveBeenCalledWith([
      {name: 'Bob', bananas: 7, uid: 3, rank: 1, isSearchedUser: false},
      {name: 'John', bananas: 5, uid: 1, rank: 2, isSearchedUser: false},
      {name: 'Alice', bananas: 3, uid: 2, rank: 3, isSearchedUser: false},
    ]);
    expect(Alert.alert).not.toHaveBeenCalled();
  });
});
