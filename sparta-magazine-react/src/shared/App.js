import React from "react";
import LayoutContainer from "../components/LayoutContainer";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import PostList from "../pages/PostList";

import { ThemeProvider, Container } from "@material-ui/core";
import { theme } from "./themeConfig";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const App = (props) => {
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
