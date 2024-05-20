import Image from "next/image";
export default function Footer (){
    return (
        <div className="footer">
            <div className="logo">
                <a href="https://www.facebook.com/TheNauticalTrainingCorps">
                    <Image src="/facebook.png" width={60} height={60} className="logoImage" />
                </a>
                <a href="https://twitter.com/NTCHQ">
                    <Image src="/X.png" width={60}  height={60} className="logoImage" />
                </a>
                <a href="https://www.instagram.com/nauticaltrainingcorps/">
                    <Image src="/insta.png" width={60} height={60} className="logoImage" />
                </a>
                <a href="https://www.youtube.com/user/NauticalTrainingCorp">
                    <Image src="/youtube.png" width={60} height={60} className="logoImage" />
                </a>
            </div>

            <div className="art">
                <div className="artdiv">
                    <h1> 
                        About us 
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam sunt labore ex ipsum 
                        incidunt
                        architecto perspiciatis quod, culpa enim voluptas nobis dicta quas veritatis obcaecati 
                        fuga odit
                        dolores maxime!
                    </p>

                </div>

                <div className="artdiv">
                    <h1> 
                        Contact us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam sunt labore ex ipsum 
                        incidunt
                        architecto perspiciatis quod, culpa enim voluptas nobis dicta quas veritatis obcaecati 
                        fuga odit
                        dolores maxime!
                    </p>
                </div>
                <div className="artdiv">
                    <Image src="/calendar.PNG" width={150} height={150}/ >
                </div>
            </div>
            <div className="copyright">
                &copy; 2024 All Rights Reserved
            </div>
        </div>
    )
}


