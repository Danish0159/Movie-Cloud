import React, { useState } from "react";
import Carosel from "./carosel";
import requests from "./requests";


export default function CaroselRow() {
    return (
        <>
            <Carosel title={"Top Rated"} fetchUrl={requests.fetchTopRated}></Carosel>
            <Carosel title={"Trending Now"} fetchUrl={requests.fetchTrending}></Carosel>
            <Carosel title={"Action Movies"} fetchUrl={requests.fetchAction}></Carosel>
            <Carosel title={"Comedy Movies"} fetchUrl={requests.fetchComedy}></Carosel>
            <Carosel title={"Horror Movies"} fetchUrl={requests.fetchHorror}></Carosel>
            <Carosel title={"Romance Movies"} fetchUrl={requests.fetchRomance}></Carosel>
            <Carosel title={"Documentries"} fetchUrl={requests.fetchDocumentries}></Carosel>
        </>
    )
}
