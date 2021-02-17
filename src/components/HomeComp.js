import React from "react";
import fetchData from "../business/fetchData";
import PeopleList from "./PeopleListComp";
import Parallax from "./layout/ParallaxComp";
import Loading from "./LoadingComp";
import NotFound from "./NotFoundComp";

function HomeComp() {

        const { error, loading, people: people } = fetchData();

    return (
        <div className="home">
            <Parallax />
            { error && <NotFound />}
            { loading && <Loading />}
            { people && <PeopleList people={people} />}
        </div>
    );
}

export default HomeComp;