import React from "react";

const CommentWrite = () => {
    return (
        <React.Fragment>
            <div padding="16px" is_flex>
                <input placeholder="댓글 내용을 입력해주세요 :)" />
                <button width="50px" margin="0px 2px 0px 2px">
                    작성
                </button>
            </div>
        </React.Fragment>
    );
};

export default CommentWrite;
