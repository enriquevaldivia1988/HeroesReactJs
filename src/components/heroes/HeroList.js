import React from "react";
import {getHeroesByPublishers} from "../selectors/getHeroesByPublishers";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublishers(publisher);
    return(
        <div className="card-columns">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
