import Image from "next/image";

export default function Anniv(){
    return(
    <div>
        <h2>
            75th Anniversary
        </h2>
        
        <div  className="conteneur" >
            <div className="contenu-anniv">
                <p>The Nautical Training Corps was founded on 19 May 1944, 
                    where this year we are celebrating our 75th Anniversary.</p>
                <p>2019 is a special year for the NTC as we are celebrating our 75th Anniversary. 
                    We have compiled together a Timeline from when it all began to the present time. <a>Please take a look here</a>.</p>
                <p>For more information on how we are celebrating our anniversary please <a href="">click here.</a></p>
            </div>
            <Image src="/anniv.png" alt="" width={220} height={220} className="contenu-anniv"/>
            <div className="contenu-anniv rond "></div>
            <div className="contenu-anniv rond "></div>

        </div>
    </div>
    )
}