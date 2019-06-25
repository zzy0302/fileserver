import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { IndexPage } from "./page/index";

import { UserIndexPage } from "./page/user/index";
import { FileIndexPage } from "./page/file/index";

export class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                    <Route exact path={'/user'} component={UserIndexPage}/>
                    <Route exact path={'/file'} component={FileIndexPage}/>
                </Switch>
            </HashRouter>
        );
    }
}
