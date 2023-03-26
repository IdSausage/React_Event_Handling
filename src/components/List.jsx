import { useState } from "react";
import React from "react";
import Card from "./Card";

function List({users})
{
    return(
        <div>
            <Card user={users[0]}/>
            <Card user={users[1]}/>
            <Card user={users[2]}/>
        </div>
    )
}
export default List