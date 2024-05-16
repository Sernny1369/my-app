import Image from "next/image";
import { Inter } from "next/font/google";
import NationalCouncil from "@/components/structure/NationalCouncil";


const inter = Inter({ subsets: ["latin"] });

export default function NtcL() {
    return (
        <div>            
            <div className="conteneur">
                <div className="contenu">            
                    <h1>
                        <p>The National Council</p>
                        <p> (Trustees)</p>
                    </h1>
                </div>
                <div className="bulle-left contenu">
                    <p className="bulle-text-left histoire">
                    The Corps is managed by a board of Trustees headed by Chair, open to elections every three years. 
                    The board of Trustees are made up of uniformed volunteers in addition to other non-uniformed volunteers.
                    </p>
                </div>
            </div>
   
            <div className="conteneur">
                <div className="contenu">
                    <div >
                        <p>
                        The National Council is the Corps governing body and the trustees of the charity, 
                        responsible for ensuring its lawful and responsible control and use of resources. 
                        The Charity is unincorporated, its Constitution being set out in the Corps Rules and 
                        Regulations. Its entry on the Charity Commission register can be seen by clicking here.
                        </p>
                        <p>
                        The National Council currently comprises 11 people (ten trustees, and one non-trustee), 
                        both uniformed and lay members, to provide a balance of views and experience. 
                        All have specific areas of responsibility in addition to those of National Council 
                        membership and trusteeship generally. The Charity s main officers are the Chairman, 
                        Commodore, Chief of Staff, Treasurer and National Secretary. The National Council formally 
                        meets quarterly, with department heads co-ordinating and working with Corps members between meetings.
                        </p>
                        <p>
                        Meetings, which are open to members of the Corps, are normally held at the NTC s National 
                        Headquarters (NHQ). NHQ is located at our National Training Centre, in Littlehampton, 
                        West Sussex.
                        </p>
                    </div>
                </div>
                <div className="contenu">            
                    <Image src="/structur.png" alt="" width={600} height={500}/>
                </div>
            </div>

        </div>
    );
  }