import {ActionFunction, redirect} from "react-router-dom";
import {store} from "../../../store";
import {authenticationApi} from "./authentication-api.ts";
import {UserCredentials} from "../models/user-credentials.ts";

export const loginAction: ActionFunction = async ({request}) => {
    const credentials: UserCredentials = await request.json();

    try {
        await store.dispatch(
            authenticationApi.endpoints.login.initiate(credentials)
        ).unwrap();

        return redirect('/dashboard')
    } catch (err) {
        return {error: 'Invalid username or password'};
    }
}

/*
    Note: Yes, it is duplication, but in real world app usually it SHOULD be separate endpoints with different logic
    In this case one authenticateAction would be enough. Leaving it for reviewer to decide
*/
export const registerAction: ActionFunction = async ({request}) => {
    const credentials: UserCredentials = await request.json();

    try {
        await store.dispatch(
            authenticationApi.endpoints.register.initiate(credentials)
        ).unwrap();

        return redirect('/dashboard')
    } catch (err) {
        return {error: 'Invalid username or password'};
    }
}