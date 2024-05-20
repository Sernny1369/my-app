import Image from "next/image";
import React from "react";

export default function Child(){
    return (
        <div>
            <div>
                <h2> 
                    Child Protection
                </h2>
            </div> 
            <div className="partie">
                <div>
                    <p>
                        The Corps places the highest importance on protecting the young people in its 
                        care.
                    </p>
                    <p>
                        All who have unsupervised or regular supervised access to our young people 
                        are required to agree to a criminal record check from the Disclosure and Barring 
                        Service DBS. This provides a degree of assurance about the past of the applicant. 
                        We have taken the step of requiring checks for adults who have regular supervised 
                        access because we believe that there is a risk that trust built whilst under 
                        supervision could be abused outside the activities of the organisation.
                    </p>
                    <p>
                        All new adults are required to serve a period of probation, 
                        during which all access to young people is supervised, to allow the organisation 
                        to establish first hand experience of the person before she is allowed to take 
                        sole charge of young people.
                    </p>
                    <p>
                        Checking new adults is only part of the story. 
                        The Rules and Regulations of the Nautical Training Corps set out procedures 
                        to provide on going protection and re-assurance. Constant vigilance is really 
                        the only way that protection can be effectively provided to young people.
                    </p>
                </div>

                <div className="img">
                    <Image src="/disigne.png" alt="" width={160} height={288} />
                </div>

                <div className="img2">
                    <Image src="/involved4.jpg" alt="" width={450} height={288} />
                </div>

            </div>
            <div className="test">
                <p>
                    An important part of protection is recognition by others. 
                    Our training for adults includes instruction on recognising the signs of 
                    abuse and their duties in reporting to the authorities. 
                    The adults within the organisation play an important role in monitoring 
                    the young people in their charge and being constantly vigilant for, and 
                    responsive to, any issues that may arise.
                </p>
            </div>
        </div>
    )
}