import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { history } from "../redux/configureStore";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));

export default function AlignItemsList(props) {
    const classes = useStyles();

    const { image_url, user_name, post_id } = props;

    return (
        <List className={classes.root}>
            <ListItem
                alignItems="flex-start"
                onClick={() => {
                    history.push(`/post/${post_id}`);
                }}
            >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image_url} />
                </ListItemAvatar>
                <ListItemText
                    primary={`${user_name} 님이 게시글에 댓글을 남겼습니다 :)!`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            {
                                " — I'll be in your neighborhood doing errands this…"
                            }
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}
