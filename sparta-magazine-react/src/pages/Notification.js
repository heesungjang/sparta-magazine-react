import React from "react";
import { Grid, Container, Typography, Paper } from "@material-ui/core";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

import AlignItemsList from "../components/AlignItemsList";

const Notification = (props) => {
    const [noti, setNoti] = React.useState([]);

    const user = useSelector((state) => state.user.user);

    React.useEffect(() => {
        if (!user) {
            return;
        }

        const notiDB = realtime.ref(`noti/${user.uid}/list`);

        const _noti = notiDB.orderByChild("insert_dt");

        _noti.once("value", (snapshot) => {
            if (snapshot.exists()) {
                let _data = snapshot.val();

                let _noti_list = Object.keys(_data)
                    .reverse()
                    .map((s) => {
                        return _data[s];
                    });

                setNoti(_noti_list);
            }
        });
    }, [user]);

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
                            {noti.map((n, idx) => {
                                return (
                                    <AlignItemsList
                                        {...n}
                                        key={`noti_${idx}`}
                                    />
                                );
                            })}
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Notification;
