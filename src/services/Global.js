import React, {createContext, useState} from 'react';
const GlobalContext = createContext();

const GlobalStateProvider = props => {
  const {children} = props;
  const [userData, setuserData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setuserData,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, GlobalStateProvider};
