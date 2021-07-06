import React from "react";
import LayoutContainer from "../components/LayoutContainer";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Container, Typography } from "@material-ui/core";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = (props) => {
    const { history } = props;
    const dispatch = useDispatch();
    const user_info = useSelector((state) => state.user.user);
    const is_loading = useSelector((state) => state.post.is_loading);
    const paging = useSelector((state) => state.post.paging);
    const post_list = useSelector((state) => state.post.list);

    // const { history } = props;
    React.useEffect(() => {
        if (post_list.length === 0) {
            dispatch(postActions.getPostFB());
        }
    }, []);

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid item={true} xs={12} style={{ marginTop: "20px" }}>
                    <Grid
                        item={true}
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Typography variant="h4">피드</Typography>
                    </Grid>
                    <InfinityScroll
                        callNext={() => {
                            console.log("next!");
                            dispatch(postActions.getPostFB(paging.next));
                        }}
                        is_next={paging.next ? true : false}
                        loading={is_loading}
                    >
                        {post_list.map((p, idx) => {
                            if (p.user_info.user_id === user_info?.uid) {
                                return (
                                    <Post
                                        is_me
                                        post_id={p.id}
                                        onClick={() => {
                                            history.push(`/post/${p.id}`);
                                        }}
                                        key={p.id}
                                        {...p}
                                    />
                                );
                            } else {
                                return (
                                    <Post
                                        onClick={() => {
                                            history.push(`/post/${p.id}`);
                                        }}
                                        key={p.id}
                                        {...p}
                                    />
                                );
                            }
                        })}
                    </InfinityScroll>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default PostList;
