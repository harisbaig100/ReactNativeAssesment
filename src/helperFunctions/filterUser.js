export const filterUsers = (
  userName,
  JsonData,
  setUserName,
  Alert,
  compareUsersByBananas,
  setUserData,
) => {
  const searchName = userName.trim();
  const searchedUser = Object.values(JsonData).find(
    user => user.name === searchName,
  );

  if (!searchedUser) {
    setUserName('');
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
    setUserName('');
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
