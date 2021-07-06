import React from "react";
import styled from "styled-components";
import { storage } from "../shared/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";

import LayoutContainer from "../components/LayoutContainer";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {
    Grid,
    Container,
    Typography,
    IconButton,
    TextField,
    Button,
    CardMedia,
    Card,
    CardActionArea,
    CardActions,
} from "@material-ui/core";

const Input = styled("input")({
    display: "none",
});

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 225,
    },
});
const PostWrite = (props) => {
    const preview = useSelector((state) => state.image.preview);

    const fileInput = React.useRef();

    const classes = useStyles();

    const { history } = props;
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);

    const [contents, setContents] = React.useState("");

    const addPost = () => {
        dispatch(postActions.addPostFB(contents));
    };

    const changeContents = (e) => {
        setContents(e.target.value);
    };
    const selectFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            // reader.result는 파일의 컨텐츠(내용물)입니다!
            console.log(reader.result);
            dispatch(imageActions.setPreview(reader.result));
        };
    };
    const uploadFB = () => {
        let image = fileInput.current?.files[0];
        const _upload = storage.ref(`images/${image.name}`).put(image);

        //   업로드!
        _upload.then((snapshot) => {
            console.log(snapshot);
        });
    };

    if (!is_login) {
        return (
            <div margin="100px 0px" padding="16px">
                <span size="32px">앗! 잠깐!</span>
                <span size="16px">로그인 후에만 글을 쓸 수 있어요!</span>
                <button
                    onClick={() => {
                        history.replace("/login");
                    }}
                >
                    로그인 하러가기
                </button>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <Typography variant="h4">✏️ Post now</Typography>
                </Grid>
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={
                                    preview
                                        ? preview
                                        : "http://via.placeholder.com/400x300"
                                }
                                title="Contemplative Reptile"
                                style={{ width: "400px" }}
                            />
                        </CardActionArea>
                        <CardActions>
                            <label htmlFor="icon-button-file">
                                <Input
                                    accept="image/*"
                                    id="icon-button-file"
                                    type="file"
                                    ref={fileInput}
                                    onChange={selectFile}
                                />
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                >
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "10px 0 10px 0",
                    }}
                >
                    <TextField
                        label="게시글 내용"
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{
                            width: "400px",
                        }}
                        onChange={changeContents}
                        value={contents}
                    />
                </Grid>

                <Grid
                    item={true}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        onClick={addPost}
                        variant="contained"
                        color="primary"
                        style={{
                            width: "400px",
                        }}
                    >
                        게시글 작성
                    </Button>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default PostWrite;
