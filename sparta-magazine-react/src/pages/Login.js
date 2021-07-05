import React from "react";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import LayoutContainer from "../components/LayoutContainer";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

const Login = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const changeId = (e) => {
        setId(e.target.value);
    };

    const changePwd = (e) => {
        setPwd(e.target.value);
    };

    const login = () => {
        dispatch(userActions.logIn({ user_name: "perl" }));
    };

    return (
        <React.Fragment>
            <LayoutContainer>
                <Typography variant="h4">로그인</Typography>
                <LayoutContainer>
                    <Grid item={true} xs={12}>
                        <TextField
                            id="standard-full-width"
                            value={id}
                            onChange={changeId}
                            label="아이디"
                            style={{ margin: 8 }}
                            placeholder="아이디를  입력하세요"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField
                            id="standard-full-width"
                            value={pwd}
                            onChange={changePwd}
                            label="비밀번호"
                            style={{ margin: 8 }}
                            placeholder="비밀번호를 입력하세요"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item={true} xs={12} style={{ marginTop: "20px" }}>
                        <Button
                            onClick={() => {
                                login();
                            }}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            로그인하기
                        </Button>
                    </Grid>
                </LayoutContainer>
            </LayoutContainer>
        </React.Fragment>
    );
};

export default Login;
