import React from "react";
import Adult from "../components/involved/adult";
import Child from "../components/involved/child";
import Faq from "../components/involved/faq";

export default function GetInvolved(){
    return(
        <>
            <div>
                <Adult />
            </div>
            <div>
                <Child />
            </div>
            <div>
                <Faq />
            </div>
        </>
    )
}