import React from "react";
import LayoutContainer from "../components/LayoutContainer";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import PostList from "../pages/PostList";

import { ThemeProvider, Container } from "@material-ui/core";
import { theme } from "./themeConfig";

import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import { apiKey } from "../shared/firebase";
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
                <div style={{ height: "100vh" }}>
                    <LayoutContainer>
                        <Header></Header>
                    </LayoutContainer>
                    <Container style={{ height: "100%" }}>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route exact path="/" component={PostList} />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={Signup}
                                />
                            </Switch>
                        </ConnectedRouter>
                    </Container>
                </div>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;
