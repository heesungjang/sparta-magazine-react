import React from "react";
import { emailCheck } from "../shared/common";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import LayoutContainer from "../components/LayoutContainer";
import {
    Grid,
    Typography,
    TextField,
    Button,
    Container,
} from "@material-ui/core";

const Signup = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [pwd_check, setPwdCheck] = React.useState("");
    const [user_name, setUserName] = React.useState("");

    const signup = () => {
        if (id === "" || pwd === "" || user_name === "") {
            window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
            return;
        }

        if (!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다!");
            return;
        }

        if (pwd !== pwd_check) {
            window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
            return;
        }

        if (pwd.length < 6) {
            window.alert("비밀번호는 6자리 이상 입력하세요.");
            return;
        }

        dispatch(userActions.signupFB(id, pwd, user_name));
    };

    return (
        <React.Fragment>
            <Container style={{ height: "80vh" }}>
                <Grid
                    item={true}
                    xs={12}
                    style={{
                        margin: "20px 0 20px 0",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h4">회원가입</Typography>
                </Grid>
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
            </Container>
        </React.Fragment>
    );
};

export default Signup;
