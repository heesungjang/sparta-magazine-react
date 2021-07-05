import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import LayoutContainer from "../components/LayoutContainer";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [pwd_check, setPwdCheck] = React.useState("");
    const [user_name, setUserName] = React.useState("");

    const signup = () => {
        if (id === "" || pwd === "" || user_name === "") {
            return;
        }

        if (pwd !== pwd_check) {
            return;
        }
        dispatch(userActions.signupFB(id, pwd, user_name));
    };

    return (
        <React.Fragment>
            <LayoutContainer>
                <Typography variant="h4">회원가입</Typography>
                <LayoutContainer>
                    <Grid xs={12} item={true}>
                        <TextField
                            label="아이디"
                            style={{ margin: 8 }}
                            placeholder="아이디를  입력하세요"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid xs={12} item={true}>
                        <TextField
                            label="닉네임"
                            style={{ margin: 8 }}
                            placeholder="닉네임을 입력하세요"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid xs={12} item={true}>
                        <TextField
                            type="password"
                            label="비밀번호"
                            style={{ margin: 8 }}
                            placeholder="비밀번호를 입력하세요"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setPwd(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid xs={12} item={true}>
                        <TextField
                            type="password"
                            label="비밀번호 확인"
                            style={{ margin: 8 }}
                            placeholder="비밀번호를 다시 입력하세요"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setPwdCheck(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item={true} xs={12} style={{ marginTop: "20px" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={signup}
                        >
                            회원가입
                        </Button>
                    </Grid>
                </LayoutContainer>
            </LayoutContainer>
        </React.Fragment>
    );
};

export default Signup;
