import React from "react";

const CommentList = () => {
    return (
        <React.Fragment>
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </React.Fragment>
    );
};

const CommentItem = (props) => {
    const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
        props;
    return (
        <div is_flex>
            <div is_flex width="auto">
                <img shape="circle" />
                <span bold>{user_name}</span>
            </div>
            <div is_flex margin="0px 4px">
                <span margin="0px">{contents}</span>
                <span margin="0px">{insert_dt}</span>
            </div>
        </div>
    );
};

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "mean0",
    user_id: "",
    post_id: 1,
    contents: "귀여운 고양이네요!",
    insert_dt: "2021-01-01 19:00:00",
};
export default CommentList;
