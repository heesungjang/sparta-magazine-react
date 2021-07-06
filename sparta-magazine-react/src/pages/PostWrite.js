import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

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
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid
                    xs={12}
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <Typography variant="h4">✏️ Post now</Typography>
                </Grid>
                <Grid
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
                                image="/static/images/cards/contemplative-reptile.jpg"
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
                        defaultValue=""
                        variant="outlined"
                        style={{
                            width: "400px",
                        }}
                    />
                </Grid>

                <Grid
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
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
