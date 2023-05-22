// Unit tests

import {filterUsers} from '../helperFunctions/filterUser';

describe('filterUsers', () => {
  let setUserNameMock;
  let setUserDataMock;
  let alertMock;
  let compareUsersByBananasMock;

  beforeEach(() => {
    setUserNameMock = jest.fn();
    setUserDataMock = jest.fn();
    alertMock = jest.fn();
    compareUsersByBananasMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle invalid user name and show error alert', () => {
    // Arrange
    const userName = 'InvalidUser';
    const jsonData = {
      // Your JSON data for testing
    };

    // Act
    filterUsers(
      userName,
      jsonData,
      setUserNameMock,
      alertMock,
      compareUsersByBananasMock,
      setUserDataMock,
    );

    // Assert
    expect(setUserNameMock).toHaveBeenCalledWith('');
    expect(alertMock).toHaveBeenCalledWith(
      'Error',
      'This user name does not exist! Please specify an existing user name!',
    );
    expect(setUserDataMock).not.toHaveBeenCalled();
  });

  test('should handle valid user name and set user data', () => {
    // Arrange
    const userName = 'ValidUser';
    const jsonData = {
      // Your JSON data for testing
    };

    // Act
    filterUsers(
      userName,
      jsonData,
      setUserNameMock,
      alertMock,
      compareUsersByBananasMock,
      setUserDataMock,
    );

    // Assert
    expect(setUserNameMock).toHaveBeenCalledWith('');
    expect(alertMock).not.toHaveBeenCalled();
    // Add your assertions for setting user data
    expect(setUserDataMock).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
