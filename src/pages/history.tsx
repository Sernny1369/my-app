import History from "@/components/History/History";
import Founder from "@/components/History/Founder";
import Fday from "@/components/History/Fday";

export default function Histoire(){
    return(<div>
            <div>
                <History />
            </div>

            <div>
                <Founder />
            </div>

            <div>
                <Fday />
            </div>
        </div>
    )
}