import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LayoutContainer from "../components/LayoutContainer";

import {
    Avatar,
    Button,
    Grid,
    Typography,
    CardMedia,
    Card,
    CardActionArea,
    CardActions,
    Collapse,
    CardHeader,
    CardContent,
    IconButton,
    Container,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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
        backgroundColor: "//#endregion778beb",
    },
}));

const Post = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container>
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
                            <IconButton aria-label="settings">
                                <BorderColorIcon />
                            </IconButton>
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
                            고양이를 너무 좋아해요!
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <Typography>좋아요 {props.comment_cnt}개 </Typography>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
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
