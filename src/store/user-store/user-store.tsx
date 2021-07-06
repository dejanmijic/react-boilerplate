import React, { createContext, useContext, useReducer } from "react";
import { removeFromBrowserStorage, storeInBrowserStorage } from "../../services/shared/browserStorageService";
import { BROWSER_STORAGE_KEY_ACCESS_TOKEN, USER } from "../../shared/constants/localStorageConstants";
import { UserModel } from "../../shared/models/userModel";
import { setUserAccessTokenAction } from "./user-actions";
import { initialUserState, userReducer } from "./user-reducer";
import { UserState } from "./user-type";

interface UserContext {
    state: UserState;
    setAccessToken: (accessToken: string, user: UserModel) => void;
    logoutUser: (accessToken: string, user: UserModel) => void;
  }
  
  export const UserStore = createContext({} as UserContext);
  
  export const useUserStore = (): UserContext => useContext(UserStore);
  
  export const UserStoreProvider = ({ children } : any) => {
    const [state, dispatch] = useReducer(userReducer, initialUserState);
  
    const setAccessToken = (accessToken: string, user: UserModel): void => {
      storeInBrowserStorage(BROWSER_STORAGE_KEY_ACCESS_TOKEN, accessToken);
      storeInBrowserStorage(USER, user);
      setUserAccessTokenAction(accessToken, user, dispatch);
    };
  
    const logoutUser = (accessToken: string, user: UserModel): void => {
      removeFromBrowserStorage(BROWSER_STORAGE_KEY_ACCESS_TOKEN);
      removeFromBrowserStorage(USER);
      setUserAccessTokenAction(accessToken, user, dispatch);
    };
  
    return (
      <UserStore.Provider value={{ state, setAccessToken, logoutUser }}> 
        {children}
      </UserStore.Provider>
    );
  };