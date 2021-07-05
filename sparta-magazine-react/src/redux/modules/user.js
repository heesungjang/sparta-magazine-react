import { auth } from "../../shared/firebase";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
    user: null,
    is_login: false,
};

const loginAction = (user) => {
    return function (dispatch, getState, { history }) {
        dispatch(logIn(user));
        history.push("/");
    };
};

const signupFB = (id, pwd, user_name) => {
    return function (dispatch, getState, { history }) {
        auth.createUserWithEmailAndPassword(id, pwd)
            .then((user) => {
                console.log(user);
                auth.currentUser
                    .updateProfile({
                        displayName: user_name,
                    })
                    .then(() => {
                        dispatch(
                            setUser({
                                user_name: user_name,
                                id: id,
                                user_profile: "",
                            })
                        );
                        history.push("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};

export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                setCookie("is_login", "success");
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("is_login");
                draft.user = null;
                draft.is_login = false;
            }),
        [SET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

const actionCreators = {
    logIn,
    setUser,
    logOut,
    loginAction,
    signupFB,
};

export { actionCreators };
