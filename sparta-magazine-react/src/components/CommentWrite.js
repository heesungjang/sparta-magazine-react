import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsIcon from "@material-ui/icons/Directions";
import { Container, Grid, IconButton, InputAdornment } from "@material-ui/core";

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

const CommentWrite = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    color="primary"
                                    className={classes.iconButton}
                                    aria-label="directions"
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
                    helperText="mean0님의 소중한 댓글을 남겨보세요"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
            </Grid>
        </React.Fragment>
    );
};

export default CommentWrite;
