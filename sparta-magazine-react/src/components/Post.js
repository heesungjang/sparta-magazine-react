import React from "react";

const Post = (props) => {
    return (
        <div>
            <div>img / nickname / time / btn</div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div>
        </div>
    );
};

Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile:
            "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "고양이네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
};

export default Post;
