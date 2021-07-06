import { Dispatch } from "react";
import { UserModel } from "../../shared/models/userModel";
import { SetAccessTokenAction, SET_ACCESS_TOKEN } from "./user-type";

export const setUserAccessTokenAction = (
    accessToken: string,
    user: UserModel,
    dispatch: Dispatch<SetAccessTokenAction>
): void => {
    dispatch({
        type: SET_ACCESS_TOKEN,
        payload: { accessToken, user }
    })
}