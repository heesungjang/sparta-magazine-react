import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";

import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import { history } from "../redux/configureStore";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Header = React.memo((props) => {
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

    const dispatch = useDispatch();
    const is_login = sessionStorage.getItem(_session_key);

    if (is_login) {
        return (
            <React.Fragment>
                <Grid
                    container
                    item={true}
                    xs={12}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item={true} xs={5}>
                        <HomeIcon fontSize="large" color="primary" />
                        <Typography variant="h6">My Dictionary </Typography>
                    </Grid>
                    {/* <Grid xs={3}></Grid> */}
                    <Grid item={true} xs={7}>
                        <ButtonContainer>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => {
                                    dispatch(userActions.logoutFB());
                                }}
                            >
                                <Typography>로그아웃</Typography>
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
                    <HomeIcon fontSize="large" color="primary" />
                    <Typography variant="h6">My Dictionary </Typography>
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
                            <Typography>회원가입</Typography>
                        </Button>
                        <Button
                            color="primary"
                            style={{ marginRight: "10px", width: "90px" }}
                            variant="outlined"
                            onClick={() => {
                                history.push("/login");
                            }}
                        >
                            <Typography>로그인 </Typography>
                        </Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </React.Fragment>
    );
});

export default Header;
