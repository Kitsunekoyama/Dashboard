import React from 'react';

const defaultVal = {data: [{name: "", main: "", degree: ""}], poke: [{name: "", id: "", image: "", descr: ""}], anim: [[{name: "", year: "", season: "", title: "", image: "", synopsis: "", startdate: "", enddate: ""}]], manga: [[{name: "", title: "", image: "", synopsis: "", startdate: "", enddate: ""}]]};
export const ServicesContext = React.createContext(defaultVal);