import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

const LayoutContainer = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <Grid container spacing={3} style={{ padding: 20 }}>
                {children}
            </Grid>
        </React.Fragment>
    );
};

export default LayoutContainer;
