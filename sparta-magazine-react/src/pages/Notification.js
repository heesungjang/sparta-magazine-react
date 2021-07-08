import React from "react";
import { Grid, Container, Typography, Paper } from "@material-ui/core";

import AlignItemsList from "../components/AlignItemsList";

const Notification = (props) => {
    let noti = [
        { user_name: "mean0", post_id: "post1" },
        { user_name: "mean0", post_id: "post2" },
        { user_name: "mean0", post_id: "post3" },
        { user_name: "mean0", post_id: "post4" },
    ];

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    <Typography variant="h4">알림</Typography>
                </Grid>
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    <Paper style={{ width: "50%" }}>
                        <Grid
                            item={true}
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <AlignItemsList></AlignItemsList>
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <AlignItemsList></AlignItemsList>
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <AlignItemsList></AlignItemsList>
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <AlignItemsList></AlignItemsList>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Notification;
