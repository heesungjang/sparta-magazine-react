import React from "react";
import { emailCheck } from "../shared/common";

import LayoutContainer from "../components/LayoutContainer";
import {
    Grid,
    Typography,
    TextField,
    Button,
    Container,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const login = () => {
        if (id === "" || pwd === "") {
            window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
            return;
        }
        if (!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다!");
            return;
        }

        dispatch(userActions.loginFB(id, pwd));
    };

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid xs={12} style={{ marginTop: "20px" }}>
                    <Typography variant="h4">로그인</Typography>
                </Grid>
                <LayoutContainer>
                    <Grid item={true} xs={12}>
                        <TextField
                            id="standard-full-width"
                            value={id}
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
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
                            type="password"
                            id="standard-full-width"
                            value={pwd}
                            onChange={(e) => {
                                setPwd(e.target.value);
                            }}
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
            </Container>
        </React.Fragment>
    );
};

export default Login;
