import React from "react";
import {Navbar} from "../components/ui/Navbar";
import {MarvelScreen} from "../components/marver/Marvel";
import {Redirect, Route, Switch} from "react-router-dom";
import {HeroeScreen} from "../components/heroes/HeroeScreen";
import {DcScreen} from "../components/dc/DcScreen";

export const DashboardRoutes = () => {
    return(
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroeScreen}/>
                    <Route exact path="/dc/" component={DcScreen}/>
                    <Redirect to="/marvel"/>
                </Switch>

            </div>
        </>
    )
}
