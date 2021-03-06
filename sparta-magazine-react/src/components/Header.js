import React from "react";

import { apiKey } from "../shared/firebase";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Grid, Typography, Button } from "@material-ui/core";
import NotiBadge from "./NotiBadge";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Header = React.memo((props) => {
    const dispatch = useDispatch();
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true : false;
    const is_login = useSelector((state) => state.user.is_login);

    if (is_login && is_session) {
        return (
            <React.Fragment>
                <Grid
                    container
                    item={true}
                    xs={12}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item={true} xs={6}>
                        <Button
                            onClick={() => {
                                history.push("/");
                            }}
                        >
                            <HomeIcon fontSize="large" color="primary" />
                            <Typography variant="h6">My Magazine </Typography>
                        </Button>
                    </Grid>
                    {/* <Grid xs={3}></Grid> */}
                    <Grid item={true} xs={6}>
                        <ButtonContainer>
                            <NotiBadge
                                _onClick={() => {
                                    history.push("/noti");
                                }}
                            />
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => {
                                    dispatch(userActions.logoutFB());
                                }}
                            >
                                <Typography>????????????</Typography>
                            </Button>
                        </ButtonContainer>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Grid
                item={true}
                container
                xs={12}
                alignItems="center"
                justify="center"
            >
                <Grid item={true} xs={5}>
                    <Button
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        <HomeIcon fontSize="large" color="primary" />
                        <Typography variant="h6">My Dictionary </Typography>
                    </Button>
                </Grid>

                <Grid item={true} xs={7}>
                    <ButtonContainer>
                        <Button
                            style={{ marginRight: "10px" }}
                            variant="outlined"
                            onClick={() => {
                                history.push("/signup");
                            }}
                        >
                            <Typography>????????????</Typography>
                        </Button>
                        <Button
                            color="primary"
                            style={{ marginRight: "10px", width: "90px" }}
                            variant="outlined"
                            onClick={() => {
                                history.push("/login");
                            }}
                        >
                            <Typography>????????? </Typography>
                        </Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </React.Fragment>
    );
});

export default Header;
