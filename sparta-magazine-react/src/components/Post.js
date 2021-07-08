import React from "react";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { actionCreators as postActions } from "../redux/modules/post";
import {
    Avatar,
    Grid,
    Typography,
    CardMedia,
    Card,
    CardActions,
    CardHeader,
    CardContent,
    IconButton,
    Container,
    Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        maxWidth: 455,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: "#778beb",
    },
}));

const Post = React.memo((props) => {
    console.log(props);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container
            onClick={() => {
                if (props.feed) {
                    history.push(`/post/${props.id}`);
                }
            }}
        >
            <Grid
                item={true}
                xs={12}
                style={{
                    margin: "20px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="recipe"
                                className={classes.avatar}
                                src={props.user_info.user_profile}
                            >
                                R
                            </Avatar>
                        }
                        action={
                            props.is_me &&
                            props.detail && (
                                <IconButton
                                    onClick={() => {
                                        history.push(`/write/${props.id}`);
                                    }}
                                    aria-label="settings"
                                >
                                    {props.is_me && <BorderColorIcon />}
                                </IconButton>
                            )
                        }
                        title={props.user_info.user_name}
                        subheader={props.insert_dt}
                    />

                    <CardMedia
                        className={classes.media}
                        image={props.image_url}
                        // title="Paella dish"
                    />

                    <CardContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {props.contents}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Grid item={true} xs={6}>
                            <IconButton
                                aria-label="add to favorites"
                                onClick={(e) => {
                                    //  이벤트 캡쳐링과 버블링을 막아요!
                                    // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
                                    e.preventDefault();
                                    e.stopPropagation();
                                    dispatch(
                                        postActions.toggleLikeFB(props.id)
                                    );
                                }}
                                color={
                                    props.is_like === true
                                        ? "secondary"
                                        : "default"
                                }
                            >
                                <FavoriteIcon />
                            </IconButton>
                            {props.like_cnt}
                        </Grid>
                        <Grid
                            item={true}
                            xs={6}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: "5px",
                                marginTop: "15px",
                            }}
                        >
                            <Typography>댓글 {props.comment_cnt}개 </Typography>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    );
});

Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile:
            "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "고양이네요!",
    comment_cnt: 0,
    like_cnt: 0,
    insert_dt: "2021-02-27 10:00:00",
    is_me: false,
    is_like: false,
};

export default Post;
