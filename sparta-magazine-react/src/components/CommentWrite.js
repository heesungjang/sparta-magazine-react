import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsIcon from "@material-ui/icons/Directions";
import {
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const CommentWrite = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comment_text, setCommentText] = React.useState("");

    const { post_id } = props;
    const onChange = (e) => {
        setCommentText(e.target.value);
    };
    const write = () => {
        console.log(comment_text);
        dispatch(commentActions.addCommentFB(post_id, comment_text));
        setCommentText("");
    };

    return (
        <React.Fragment>
            <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            write();
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    color="primary"
                                    className={classes.iconButton}
                                    aria-label="directions"
                                    onClick={write}
                                >
                                    <DirectionsIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    id="standard-full-width"
                    label="댓글"
                    style={{ margin: 8, width: "45%", minWidth: "380px" }}
                    placeholder="Placeholder"
                    helperText="소중한 댓글을 남겨보세요"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                    value={comment_text}
                    onChange={onChange}
                />
            </Grid>
        </React.Fragment>
    );
};

export default CommentWrite;
