import React from "react";
import { Route, Switch } from "react-router-dom";
//컴포넌트
import Login from "../pages/Login";
import Permit from "./Permit";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import LayoutContainer from "../components/LayoutContainer";
// 머테리얼 UI
import Paper from "@material-ui/core/Paper";
import { theme } from "./themeConfig";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { ThemeProvider, Button, Container } from "@material-ui/core";
//리덕스 & 파이어베이스
import { apiKey } from "../shared/firebase";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { actionCreators as userActions } from "../redux/modules/user";

const App = (props) => {
    const dispatch = useDispatch();
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true : false;

    React.useEffect(() => {
        if (is_session) {
            dispatch(userActions.loginCheckFB());
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Container style={{ height: "100vh" }}>
                    <LayoutContainer>
                        <Header></Header>
                    </LayoutContainer>

                    <LayoutContainer>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route exact path="/" component={PostList} />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={Signup}
                                />
                                <Route
                                    path="/write"
                                    exact
                                    component={PostWrite}
                                />
                                <Route
                                    path="/write/:id"
                                    exact
                                    component={PostWrite}
                                />
                                <Route
                                    path="/post/:id"
                                    exact
                                    component={PostDetail}
                                />
                            </Switch>
                        </ConnectedRouter>
                    </LayoutContainer>
                </Container>
                <div style={{ position: "fixed", bottom: 20, right: 30 }}>
                    <Permit>
                        <Button
                            onClick={() => {
                                history.push("/write");
                            }}
                        >
                            <Fab color="primary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </Button>
                    </Permit>
                </div>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;
