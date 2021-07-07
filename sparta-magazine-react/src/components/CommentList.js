import React from "react";
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Grid,
    Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: "#778beb",
    },
}));
const CommentList = (props) => {
    const dispatch = useDispatch();
    const comment_list = useSelector((state) => state.comment.list);
    const { post_id } = props;

    React.useEffect(() => {
        if (!comment_list[post_id]) {
            // 코멘트 정보가 없으면 불러오기
            dispatch(commentActions.getCommentFB(post_id));
        }
    }, []);

    if (!comment_list[post_id] || !post_id) {
        return null;
    }

    return (
        <React.Fragment>
            <Grid
                xs={12}
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "10px",
                }}
            >
                {comment_list[post_id].map((c) => {
                    return <CommentItem key={c.id} {...c} />;
                })}
            </Grid>
        </React.Fragment>
    );
};

CommentList.defaultProps = {
    post_id: null,
};

const CommentItem = (props) => {
    const classes = useStyles();
    const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
        props;
    console.log("ssd", user_profile);
    return (
        <ListItem
            style={{
                display: "flex",
                width: "50%",
                minWidth: "450px",
            }}
        >
            <ListItemAvatar>
                <Avatar className={classes.avatar} src={user_profile} />
            </ListItemAvatar>
            <ListItemText id={""} primary={user_name} />
            <ListItemText
                id={""}
                primary={contents}
                style={{ margin: "0 70px" }}
            />
            <ListItemText id={""} primary={insert_dt} />
        </ListItem>
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
