import React from "react";

import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { Grid, Container, Typography } from "@material-ui/core";

const PostList = (props) => {
    const { history } = props;
    const dispatch = useDispatch();

    const post_list = useSelector((state) => state.post.list);
    console.log(post_list);

    React.useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid item={true} xs={12} style={{ marginTop: "20px" }}>
                    <Typography variant="h4">
                        게시글 리스트 페이지 (Home)
                    </Typography>

                    {post_list.map((p, idx) => {
                        return (
                            <Post
                                onClick={() => {
                                    history.push(`/post/${p.id}`);
                                }}
                                key={p.id}
                                {...p}
                            />
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default PostList;
