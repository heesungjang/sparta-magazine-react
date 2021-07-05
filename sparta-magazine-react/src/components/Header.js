import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Header = (props) => {
    const [is_login, setIsLogin] = useState(true);

    // React.useEffect(() => {
    //     let cookie = getCookie("쿠키 이름 넣기!");

    //     if (cookie) {
    //         setIsLogin(true);
    //     } else {
    //         setIsLogin(false);
    //     }
    // });

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
                    <Grid item={true} xs={2}>
                        <Typography variant="h5" medium>
                            👋 My Dictionary
                        </Typography>
                    </Grid>
                    {/* <Grid xs={3}></Grid> */}
                    <Grid item={true} xs={10}>
                        <ButtonContainer>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    // deleteCookie("login");
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
                <Grid item={true} xs={2}>
                    <Typography variant="h6">📘 My Dictionary</Typography>
                </Grid>

                <Grid item={true} xs={10}>
                    <ButtonContainer>
                        <Button
                            style={{ marginRight: "10px" }}
                            variant="contained"
                            onClick={() => {}}
                        >
                            <Typography>회원가입</Typography>
                        </Button>
                        <Button
                            color="primary"
                            style={{ marginRight: "10px" }}
                            variant="contained"
                        >
                            <Typography>로그인</Typography>
                        </Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Header;
