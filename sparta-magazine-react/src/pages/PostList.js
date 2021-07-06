import React from "react";

import LayoutContainer from "../components/LayoutContainer";
import { Grid, Container, Typography } from "@material-ui/core";

const PostList = (props) => {
    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid xs={12} style={{ marginTop: "20px" }}>
                    <Typography variant="h4">
                        게시글 리스트 페이지 (Home)
                    </Typography>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default PostList;
