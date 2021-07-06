import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
    list: [],
};

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {
    user_info: {
        id: 0,
        user_name: "mean0",
        user_profile:
            "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "고양이네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
};

export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {}),

        [ADD_POST]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

const actionCreators = {
    setPost,
    addPost,
};

export { actionCreators };
