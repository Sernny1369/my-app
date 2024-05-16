import Image from "next/image";
import { Inter } from "next/font/google";

export default function History() {
    return(
        <div>
            <div className="contenu">            
                <h1>
                    <p>History of Nautical Training Corps</p>
                </h1>
            </div>
            <div className="conteneur">
                <div  className="contenu">
                    <p>
                        The Nautical Training Corps was founded on 19 May 1944 by Commodore, 
                        F P (Frank) Froést-Carr OBE NTC (1888 - 1975).
                    </p>
                    <p>
                        The NTC's first 'unit' was Training Ship Nautilus in Brighton, 
                        based at the old Richmond Road School. The unit took its name from HMS Nautilus, 
                        which had been Froést-Carr's first seagoing ship in the Royal Navy. 
                        TS Nautilus is still open and serving local youth in Brighton, although has now relocated to 
                        Chesham Road. 
                    </p>
                    <p>
                        This unit comprised 140 cadets and just 2 other officers. 
                        "First Brighton Division" was followed by "First London Division", TS Enterprise. 
                        The first National HQ was based at Pavilion Buildings, Brighton, 
                        underneath Brighton Chess Club and by the entrance to the Royal Pavilion. 
                        It later moved to the Old Shoreham Road and Shoreham Harbour.
                    </p>
                </div>
                <div className="contenu">
                    <p>
                        The Corps spread throughout the south of England and beyond, particularly in Sussex, 
                        Hampshire and south London; there have also been units as far afield as Acton, Northampton, 
                        Milton Keynes and Derby. In all there have been over 64 units, or 'Training Ships', 
                        but the exact number is unknown as the records of some units have been lost over time. 
                        These have included an all-girl unit at TS Tudor Rose, and an all-boy unit, TS Collingwood, 
                        both at Langley Green in Crawley. All training ships have been named after actual ships of the 
                        Royal Navy. 
                    </p>
                    <p>
                        Over the past six decades, thousands of young people have learned seafaring and musical 
                        skills through the Corps. The Nautical Training Corps now stands at some twenty units, still covering 
                        the South Coast and up in-land towards London. Units can often be seen supporting local communities by 
                        heading up parade and carnival processions and providing entertainment at festivals and local events, 
                        which are always well received. In the past few years the NTC has celebrated many anniversaries with 
                        ships from across the Corps featuring in local news. Articles on these events can be found within the 
                        news blog.
                    </p>
                </div>
            </div>
            <div className="conteneur">
                <div className="contenue">
                    <Image src="/his_one.png" alt="c'est l'image" width={300} height={250} className="imgH"/>
                </div>
                
                <div className="contenue">
                    <Image src="/his_two.png" alt="" width={300} height={250}  className="imgH"/>
                </div>
                <div className="contenue">
                    <Image src="/his_three.png" alt="" width={300} height={250}  className="imgH" />
                </div>
            </div>
        </div>
    )
}