import Image from "next/image";

export default function Founder(){
    return(
        <div >
    
            <div>
                <h2>The Founder</h2>

                <p>
                    Frank Froést-Carr, the son of a Scotland Yard police inspector, 
                    joined the Royal Navy as a 15 year old boy entrant in the closing years of sail. 
                    He joined HMS Lion, at Devonport, a training ship for boy entrants. He completed his 
                    initial training in HMS Implacable, before joining HMS Nautilus for deep-sea training.

                </p>
            </div>
            <div className="conteneur">
                <div className="contenu">
                    <p>
                    In his day the life was hard and the discipline harsh, but the service fostered quality of life, 
                    comradeship and loyalty, producing a man of stalwart character and sterling worth. In his nineteen 
                    years service in the RN he rose to Petty Officer, serving in many parts of the world and seeing 
                    action in the First World War. After leaving the service in 1926 he joined the Royal Naval Volunteer 
                    Reserve. He rose to Lieutenant Commander, later resigning his commission to start a new career in the 
                    Youth Service.  
                    </p>
                    
                    <p>
                    Froést-Carr formed the Corps in response to his and many 
                    others concerns for the country in the 
                    aftermath of war, which was then still raging. By now a probation officer, he observed that 
                    Daily 
                    the flower of our young manhood was being taken from us .... many homes were broken up and a great 
                    many young people outside their school hours were not receiving the benefits of training in any 
                    youth organisation." He dreaded a repeat of the experience that had followed the 1914-18 war, with 
                    confusion and futility leading to degradation and demoralisation of the young; he yearned instead to 
                    see the nation 
                    ...rise, triumphant like the Phoenix from the ashes of a crumbling world, to a 
                    brighter future and an age in which Britain would be greater than she has ever been 
                    before.
                    </p>

                    <p>
                    Having spent a large part of his life in the Royal Navy, seeing it turn out 
                    ...men, in the best sense of the word, imbued with all the virtues of true patriotism and the 
                    qualities that made the British sailor honoured, respected and liked throughout the 
                    world he decided that his contribution would be to found a youth organisation, based on sea training 
                    and discipline, to encourage the qualities of good citizenship. The foundation was the climax of 
                    many months work scheming out the 
                    organisation s constitution, regulations and training, all in what 
                    little time he could spare from war duties. A great believer in co-operation and the value of a 
                    simple code of conduct in the form of a promise, he wrote 
                    Know Your Corps, a short but fascinating 
                    insight into his thinking in setting up the Corps, and was the principal author of the Official 
                    Handbook.
                    </p>

                    <p>
                        For many years he had served as the County Commissioner for Sea Scouts in Sussex and believed, 
                        a little controversially for the time, that youth organisations should cater for both boys and 
                        girls. He was also at one time a welfare officer to Merchant Navy apprentices. 
                    </p>
                    <p>
                        In 1973 the value of his service to youth was recognised by the award of an OBE. In 1975, 
                        he published 
                        Spun Yarn & Bell Bottoms,
                        a fascinating story of life on the lower deck in an old square-rigged training ship in the 
                        early years of the last century, and on a steam cruiser up to the end of World War One.
                    </p>

                    <p>
                        Our first and longest-serving Commodore, he remained Commodore of the Nautical Training Corps 
                        until his death in 1975.
                    </p>

                </div>
                <div>
                    <div className="wave">

                    </div>
                    <Image src="/founder.png" alt="" width={333} height={ 383}/>

                    <div className="wave">

                    </div>
                </div>
            </div>
            <div className="conteneur">
                <div className="scratch contenu">

                </div>
                
                <div className="contenu">
                    <Image src="/pano.png" alt="la moisaique la" width={1012} height={386} />
                </div>

                <div className="scratch contenu">

                </div>
            </div>
        </div>

    )
}