import Image from "next/image";

export default function Fday(){
    return(
        <div>
            <h2>Virtual 76th Founders Day</h2>

            <p>2020 has seen a very different and difficult time for everyone as the Coronavirus pandemic hit the world.</p>

            <div className="conteneur">
                <Image src="/video.png" alt="the video" width={622} height={342} className="contenu"/>
                <div className="Fday-scratch contenu"></div>
                <div className="contenu">
                    <p>
                    With these difficult and challenging times the NTC has not been able to function as usual, 
                    missing a number of national and divisional events.
                    </p>

                    <p>
                        We as an organisation have created a small video displaying a virtual 76th Founders Day.
                    </p>

                    <p>
                        If you are unable to see this video above then please take a look at our facebook page
                    </p>

                    <div className="trait"></div>
                </div>
            </div>
        </div>
    )
}