import Image from 'next/image';
import React from 'react';

export default function Adult() {
    return (
        <>
            <div>
                <h2> 
                    Become an Adult member

                </h2>
            </div>
            <div className="partie">
                <div>
                    <p>The NTC wouldnt survive without the help of all its volunteers who freely donate their time. There is far more to the NTC than just 
                        the uniformed side you see. If you feel you have a business skill whether it be Press, Financial, Building, Maintenance, 
                        Fundraising or indeed any skills or time you can offer please contact us we'd love to hear from you.    
                    </p>
                    <p>
                        We are always 
                        looking for RYA Royal Yachting Association qualified instructors. 
                        If you can help please contact our Boating Advisor.
                    </p>
                    <p> you want to help young people develop at a local ship level and have some spare time and a sense of commitment, 
                        you may have the potential to become an instructor or an officer within the Nautical Training Corps. We understand the amount 
                        of commitment that people can give will vary, so please do get in contact even just to have a chat.
                    </p>
                    <p>You do not need a nautical or teaching background as the Corps can provide new members with any necessary information, 
                        training and instructions.
                    </p>
                </div>
                <div className="img">
                    <Image src="/pic1.png" alt="" width={150} height={288} />
                </div>

                <div className="img2">
                    <Image src="/involved6.jpg" alt="" width={450} height={288} />
                </div>
            </div>
        </>
    )
}