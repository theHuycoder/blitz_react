import React, {Component, Fragment} from 'react';
import {Route, Switch,Redirect} from "react-router-dom";
import NewsandCustomer from "./components/Navbar/NewsandCustomer";
import MainNavbar from "./components/Navbar/mainNavbar";
import routesHeader from "./routes/HeaderRoutes";
import routesSection1 from "./routes/section1Routes";
import routesSection2 from "./routes/section2Routes";
import routesSection3 from "./routes/section3Routes";
import routesCheck from "./routes/routesCheck";
import Footer from "./components/Footer/Footer";

class App extends Component {

    componentDidMount() {
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);//sroll Top khi f5
        }
    }

    render() {
        let Homepage;
        if (window.location.pathname ==='/'){
            Homepage = <Redirect to="/Private/Homepage"/>
        }

        let allRoutesHeader = routesHeader.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                       component={route.main}/>
            );
        });
        let allRoutesSection1 = routesSection1.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                       component={route.main}/>
            );
        });
        let allRoutesSection2 = routesSection2.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                       component={route.main}/>
            );
        });
        let allRoutesSection3 = routesSection3.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                       component={route.main}/>
            );
        });
        let allRoutesCheck = routesCheck.map((route, index) => {
            return (
                <Route key={index} path={route.path} exact={route.exact} strict={route.strict}
                       component={route.main}/>
            );
        });

        return (
            <Fragment>
                {Homepage}
                <header>
                    <NewsandCustomer/>
                    <MainNavbar/>
                    {allRoutesHeader}
                    <Switch>
                        {allRoutesCheck}
                    </Switch>
                </header>
                <section>
                    <Switch>
                        {allRoutesSection1}
                    </Switch>
                </section>
                <section>
                    <Switch>
                        {allRoutesSection2}
                    </Switch>
                </section>
                <section>
                    <Switch>
                        {allRoutesSection3}
                    </Switch>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </Fragment>
        )
    };
}

export default App;
