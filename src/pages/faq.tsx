
import FaqI from "@/components/Faq/intro";
import FaqCadet from "@/components/Faq/QCadet";
import Anniv from "@/components/history/Anniv";

export default function Faq(){
    return(
        <div>
            <div>
                <FaqI />
            </div>
            <div>
                <FaqCadet />
            </div>
            <div>
                <Anniv />
            </div>
        </div>
    )
}