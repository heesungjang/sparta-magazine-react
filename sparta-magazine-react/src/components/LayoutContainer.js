import React from "react";
import Grid from "@material-ui/core/Grid";

const LayoutContainer = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <Grid
                container
                spacing={3}
                style={{
                    paddingTop: 0,
                    paddingLeft: 100,
                    paddingRight: 100,
                    paddingBottom: 0,
                }}
            >
                {children}
            </Grid>
        </React.Fragment>
    );
};

export default LayoutContainer;
