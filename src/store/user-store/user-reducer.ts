import { getValueForKeyInBrowserStorage } from "../../services/shared/browserStorageService";
import { BROWSER_STORAGE_KEY_ACCESS_TOKEN, USER } from "../../shared/constants/localStorageConstants";
import { UserModel } from "../../shared/models/userModel";
import { SetAccessTokenAction, SET_ACCESS_TOKEN, UserState } from "./user-type";

export const initialUserState: UserState = {
    accessToken:
        getValueForKeyInBrowserStorage<string>(BROWSER_STORAGE_KEY_ACCESS_TOKEN) || null,
    user: getValueForKeyInBrowserStorage<UserModel>(USER) || null
}

type UserAction = SetAccessTokenAction;

export const userReducer = (
    state = initialUserState,
    action: UserAction): UserState => {
        switch(action.type) {
            case SET_ACCESS_TOKEN:
                return {
                    ...state,
                    ...action.payload,
                };
            default:
                return state;
        }
}