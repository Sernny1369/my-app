import Image from "next/image";

export default function FaqI(){
    return(
        <div className="conteneur">
            <div className="contenu">
                <div>            
                    <h1>
                        <p>Frequently Asked Question</p>
                        <p>(FAQ)</p>
                    </h1>
                </div>
                <div>
                    <p>
                        Welcome to our FAQ page! If you have questions about our products or services, 
                        you are in the right place. Browse the answers to common questions below for quick access to 
                        the information you need. If you can t find what you re looking for, feel free to contact us 
                        directly.
                    </p>
                </div>
            </div>
            <div className="contenu">
                <Image src="/faq.png" alt="picture  of chair" width={585} height={332} />
            </div>

        </div>
    )
}