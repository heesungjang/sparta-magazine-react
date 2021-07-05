import React from "react";
import Grid from "@material-ui/core/Grid";

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
