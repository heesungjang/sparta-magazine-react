import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import LayoutContainer from "../components/LayoutContainer";

const Login = (props) => {
    return (
        <React.Fragment>
            <LayoutContainer>
                <Typography variant="h4">로그인</Typography>
                <LayoutContainer>
                    <Grid xs={12}>
                        <TextField
                            id="standard-full-width"
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
                    <Grid xs={12}>
                        <TextField
                            id="standard-full-width"
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
                    <Grid xs={12} style={{ marginTop: "20px" }}>
                        <Button variant="contained" color="primary" fullWidth>
                            로그인하기
                        </Button>
                    </Grid>
                </LayoutContainer>
            </LayoutContainer>
        </React.Fragment>
    );
};

export default Login;
