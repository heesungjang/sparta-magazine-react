// import moment from "moment";
// import { firestore } from "../../shared/firebase";
// import { produce } from "immer";
// import { createAction, handleActions } from "redux-actions";

// import { actionCreators as postActions } from "./post";

// const SET_LIKE = "SET_LIKE";
// const ADD_LIKE = "ADD_LIKE";
// const UNDO_LIKE = "UNDO_LIKE";

// const setLike = createAction(SET_LIKE, () => ({}));
// const addLike = createAction(ADD_LIKE, (user_id, post_id) => ({}));
// const undoLike = createAction(UNDO_LIKE, () => ({}));

// const initialState = {
//     list: {},
// };

// const addLikeFB = (post_id) => {
//     return function (dispatch, getState, { history }) {
//         console.log("hi");
//         const likeDB = firestore.collection("like");

//         let like = {
//             user_id: getState().user.user,
//             post_id: post_id,
//             insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
//         };

//         // const d = await likeDB(like);
//     };
// };

// export default handleActions(
//     {
//         [SET_LIKE]: (state, action) => {},
//         [ADD_LIKE]: (state, action) => {},
//         [UNDO_LIKE]: (state, action) => {},
//     },
//     initialState
// );

// const actionCreators = {
//     addLikeFB,
// };

// export { actionCreators };
