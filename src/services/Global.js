import React, {createContext, useState} from 'react';
const GlobalContext = createContext();

const GlobalStateProvider = props => {
  const {children} = props;
  const [userName, setUserName] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        userName,
        setUserName,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, GlobalStateProvider};
