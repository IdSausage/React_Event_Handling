import React from "react";


function TypeMe()
{

    function AlertTextDueToFocusing()
    {
        let p = document.getElementById("alert");
        p.setAttribute("style" , "color : red");
    }
    return(
        <div>
            <form action="">
                <input type="text" onBlur={AlertTextDueToFocusing} />
                <p id = "alert" style = {{color : "black"}}>please type in here!!</p>
            </form>
        </div>
    )
}

export default TypeMe